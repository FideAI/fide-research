import { readFile, writeFile, mkdir, readdir } from "node:fs/promises";
import path from "node:path";
import { pathToFileURL } from "node:url";

const root = path.resolve(import.meta.dirname, "..");
const sourceRepo = "https://github.com/FideAI/fide-research";
const fields = new Set(["id", "title", "authors", "published_on", "format", "publication_status", "review_status", "research_areas", "application_domains", "related_ideas", "summary", "limitations", "reproducibility", "links", "verified_on", "corrections"]);

function requireValue(condition, message) {
  if (!condition) throw new Error(message);
}
function text(value) {
  return typeof value === "string" && value.trim().length > 0;
}
function date(value) {
  return typeof value === "string" && /^\d{4}-\d{2}-\d{2}$/.test(value)
    && Number.isFinite(Date.parse(value)) && new Date(value).toISOString().slice(0, 10) === value;
}
function publicUrl(value) {
  try {
    const url = new URL(value);
    return url.protocol === "https:" && !url.username && !url.password
      && url.hostname.includes(".") && !/^\d+\./.test(url.hostname)
      && !/(^|\.)(localhost|local|internal|test|invalid)$/.test(url.hostname);
  } catch { return false; }
}
function list(values, allowed, label, { empty = false } = {}) {
  requireValue(Array.isArray(values) && (empty || values.length > 0), `${label}: expected an array`);
  requireValue(new Set(values).size === values.length, `${label}: duplicate values`);
  requireValue(values.every((value) => text(value) && (!allowed || allowed.has(value))), `${label}: unknown or empty value`);
}

export function validateCatalog(catalog, taxonomy, ideaIds) {
  requireValue(catalog?.schema_version === 1, "Unsupported catalog schema");
  requireValue(date(catalog.updated_on), "Invalid catalog updated_on");
  requireValue(Array.isArray(catalog.publications), "Expected publications array");
  const areas = new Set(taxonomy.research_areas.map((x) => x.id));
  const domains = new Set(taxonomy.application_domains.map((x) => x.id));
  const seen = new Set();
  for (const record of catalog.publications) {
    requireValue(record && typeof record === "object" && !Array.isArray(record), "Invalid publication record");
    requireValue(Object.keys(record).every((key) => fields.has(key)), "Unknown publication field; do not include internal notes");
    requireValue(typeof record.id === "string" && /^[a-z0-9]+(?:-[a-z0-9]+)*$/.test(record.id), "Invalid publication id");
    requireValue(!seen.has(record.id), `Duplicate publication: ${record.id}`);
    seen.add(record.id);
    for (const key of ["title", "summary", "limitations", "reproducibility"]) {
      requireValue(text(record[key]), `${record.id}: missing ${key}`);
    }
    requireValue(date(record.published_on) && date(record.verified_on), `${record.id}: invalid date`);
    requireValue(record.published_on <= record.verified_on && record.verified_on <= catalog.updated_on, `${record.id}: inconsistent release/verification dates`);
    requireValue(["paper", "report", "investigation", "brief", "benchmark", "dataset"].includes(record.format), `${record.id}: invalid format`);
    requireValue(["preprint", "published", "corrected", "withdrawn"].includes(record.publication_status), `${record.id}: publication_status must describe released work`);
    requireValue(["peer_reviewed", "not_peer_reviewed"].includes(record.review_status), `${record.id}: invalid review_status`);
    list(record.authors, null, `${record.id}: authors`);
    list(record.research_areas, areas, `${record.id}: research_areas`);
    list(record.application_domains, domains, `${record.id}: application_domains`);
    list(record.related_ideas, ideaIds, `${record.id}: related_ideas`, { empty: true });
    requireValue(record.links && typeof record.links === "object" && !Array.isArray(record.links), `${record.id}: missing links`);
    requireValue(publicUrl(record.links.publication), `${record.id}: publication must be an HTTPS public link`);
    for (const [key, url] of Object.entries(record.links)) {
      requireValue(["publication", "article", "repository", "data"].includes(key) && publicUrl(url), `${record.id}: invalid link ${key}`);
    }
    requireValue(Array.isArray(record.corrections), `${record.id}: missing corrections array`);
    if (["corrected", "withdrawn"].includes(record.publication_status)) {
      requireValue(record.corrections.length > 0, `${record.id}: corrected/withdrawn work needs a dated explanation`);
    }
    for (const correction of record.corrections) {
      requireValue(correction && Object.keys(correction).every((key) => ["date", "note", "url"].includes(key)), `${record.id}: invalid correction fields`);
      requireValue(date(correction.date) && correction.date >= record.published_on && correction.date <= record.verified_on && text(correction.note), `${record.id}: invalid correction`);
      requireValue(!correction.url || publicUrl(correction.url), `${record.id}: invalid correction URL`);
    }
  }
  return catalog;
}

export function renderIndex(publications) {
  if (!publications.length) return "No releases have been registered in this catalog yet.";
  return publications.map((record) => {
    const links = Object.entries(record.links).map(([label, url]) => `[${label}](${url})`).join(" · ");
    const related = record.related_ideas.length ? `\n\nRelated calls: ${record.related_ideas.map((id) => `\`${id}\``).join(", ")}.` : "";
    const corrections = record.corrections.map((item) => `\n\n**${item.date}:** ${item.note}${item.url ? ` [Notice](${item.url})` : ""}`).join("");
    return `### ${record.title}\n\n${record.authors.join(", ")} · ${record.published_on} · ${record.format} · **${record.publication_status}** · ${record.review_status.replaceAll("_", " ")}\n\n${record.summary}\n\n${links}\n\n**Scope:** ${record.limitations}\n\n**Reproduction:** ${record.reproducibility}${related}${corrections}`;
  }).join("\n\n");
}

async function main() {
  const catalog = JSON.parse(await readFile(path.join(root, "publications/catalog.json"), "utf8"));
  const taxonomy = JSON.parse(await readFile(path.join(root, "research/taxonomy.json"), "utf8"));
  const ideaIds = new Set((await readdir(path.join(root, "ideas"))).map((file) => file.match(/^(FID-\d+)-/)?.[1]).filter(Boolean));
  validateCatalog(catalog, taxonomy, ideaIds);
  const publications = [...catalog.publications].sort((a, b) => b.published_on.localeCompare(a.published_on) || a.id.localeCompare(b.id));
  const feed = { schema_version: 1, updated_on: catalog.updated_on, source_repo: sourceRepo, publication_count: publications.length, publications };
  const readmePath = path.join(root, "publications/README.md");
  const readme = await readFile(readmePath, "utf8");
  const pattern = /<!-- PUBLICATION_INDEX_START -->[\s\S]*?<!-- PUBLICATION_INDEX_END -->/;
  requireValue(pattern.test(readme), "Missing publication index markers");
  const updatedReadme = readme.replace(pattern, `<!-- PUBLICATION_INDEX_START -->\n${renderIndex(publications)}\n<!-- PUBLICATION_INDEX_END -->`);
  const outputs = [[path.join(root, "dist/publications.json"), JSON.stringify(feed, null, 2) + "\n"], [readmePath, updatedReadme]];
  if (process.argv.includes("--check")) {
    for (const [file, expected] of outputs) {
      requireValue(await readFile(file, "utf8") === expected, `${path.relative(root, file)} is stale; run npm run build:publications`);
    }
  } else {
    await mkdir(path.join(root, "dist"), { recursive: true });
    for (const [file, content] of outputs) await writeFile(file, content);
  }
  console.log(`Verified ${publications.length} publication records${process.argv.includes("--check") ? " and generated files" : "; rebuilt index and feed"}.`);
}

if (process.argv[1] && import.meta.url === pathToFileURL(path.resolve(process.argv[1])).href) await main();
