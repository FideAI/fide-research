import test from "node:test";
import assert from "node:assert/strict";
import { cp, mkdir, mkdtemp, readFile, rm, writeFile } from "node:fs/promises";
import { tmpdir } from "node:os";
import path from "node:path";
import { execFileSync } from "node:child_process";

test("feed preserves paragraphs and separated bullets through the next heading or EOF", async () => {
  const root = await mkdtemp(path.join(tmpdir(), "fide-sections-"));
  try {
    for (const dir of ["scripts", "research", "ideas"]) await mkdir(path.join(root, dir));
    await cp(new URL("../scripts/build-feed.mjs", import.meta.url), path.join(root, "scripts/build-feed.mjs"));
    await cp(new URL("../research/taxonomy.json", import.meta.url), path.join(root, "research/taxonomy.json"));
    const brief = `# FID-091: Section preservation

Status: \`scoping\`
Primary area: \`agent-alignment\`
Additional areas: none
Application domains: \`cross-domain\`
Primary need: controlled benchmark

## Question

Does the export preserve the full method?

## Proposed Method

Introductory context.

- Run a controlled trial.
  Preserve its trace.

- Preserve a versioned comparison core.

## Needed Controls

- Hold authorization fixed.

## Relationship to Existing Ideas

Connect FID-072.

Connect FID-089 and FID-090.

## Public Claim Boundary

This is proposed research.

It does not establish consciousness.`;
    for (const newline of ["\n", "\r\n"]) {
      await writeFile(path.join(root, "README.md"), "## Idea Index\n\nOld index\n\n## Claims Discipline\n");
      await writeFile(path.join(root, "ideas/FID-091-section-preservation.md"), brief.replaceAll("\n", newline));
      execFileSync(process.execPath, [path.join(root, "scripts/build-feed.mjs")], {
        env: { ...process.env, RESEARCH_IDEAS_GENERATED_AT: "2026-10-11T00:00:00.000Z" }, stdio: "pipe",
      });
      const { ideas: [idea] } = JSON.parse(await readFile(path.join(root, "dist/research-ideas.json"), "utf8"));
      assert.deepEqual(idea.proposed_method, ["Run a controlled trial. Preserve its trace.", "Preserve a versioned comparison core."]);
      assert.deepEqual(idea.needed_controls, ["Hold authorization fixed."]);
      assert.equal(idea.relationship_to_existing_ideas, "Connect FID-072. Connect FID-089 and FID-090.");
      assert.equal(idea.public_claim_boundary, "This is proposed research. It does not establish consciousness.");
    }
  } finally {
    await rm(root, { recursive: true, force: true });
  }
});
