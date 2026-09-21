import test from "node:test";
import assert from "node:assert/strict";
import { readFile } from "node:fs/promises";
import { validateCatalog, renderIndex } from "../scripts/build-publications.mjs";
const catalog = JSON.parse(await readFile(new URL("../publications/catalog.json", import.meta.url)));
const taxonomy = JSON.parse(await readFile(new URL("../research/taxonomy.json", import.meta.url)));
const check = (value) => validateCatalog(value, taxonomy, new Set(["FID-002"]));
const modified = (fn) => { const copy = structuredClone(catalog); fn(copy.publications[0], copy); return copy; };

test("released catalog validates and keeps publication and review status visible", () => {
  check(catalog);
  const rendered = renderIndex(catalog.publications);
  assert.match(rendered, /preprint/);
  assert.match(rendered, /not peer reviewed/);
  assert.match(rendered, /Scope:/);
  assert.match(rendered, /Reproduction:/);
});
test("unreleased work cannot enter the publication feed", () => {
  assert.throws(() => check(modified((r) => r.publication_status = "draft")), /released work/);
});
test("unknown domains, calls and internal fields fail validation", () => {
  assert.throws(() => check(modified((r) => r.application_domains = ["made-up"])), /application_domains/);
  assert.throws(() => check(modified((r) => r.related_ideas = ["FID-999"])), /related_ideas/);
  assert.throws(() => check(modified((r) => r.private_notes = "internal")), /internal notes/);
});
test("duplicate releases and invalid date order are rejected", () => {
  assert.throws(() => check(modified((r, c) => c.publications.push(structuredClone(r)))), /Duplicate/);
  assert.throws(() => check(modified((r) => r.published_on = "2099-01-01")), /inconsistent/);
  assert.throws(() => check(modified((r) => r.published_on = "2026-02-30")), /invalid date/);
});
test("local paths and credentialed URLs cannot masquerade as public artifacts", () => {
  for (const value of ["../private-study", "http://localhost/report", "https://127.0.0.1/report", "https://user:secret@example.com/report"]) {
    assert.throws(() => check(modified((r) => r.links.publication = value)), /public link/);
  }
});
test("withdrawal requires a notice that remains visible", () => {
  assert.throws(() => check(modified((r) => r.publication_status = "withdrawn")), /dated explanation/);
  const corrected = modified((r) => { r.publication_status = "withdrawn"; r.corrections.push({ date: r.verified_on, note: "Withdrawn pending correction." }); });
  check(corrected);
  assert.match(renderIndex(corrected.publications), /Withdrawn pending correction/);
});
