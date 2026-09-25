# Publication catalog

Released Fide research across application domains. This initial catalog starts
with a verified public release and will grow as other work is registered. It is
not an exhaustive publication history. Research calls remain in [`ideas/`](../ideas/)
and do not become findings merely by being linked to a publication.

<!-- PUBLICATION_INDEX_START -->
### DSEWiki: What the records showed, and AI reports missed

Fide AI · 2026-09-25 · paper · **preprint** · not peer reviewed

Examines 304 staged DSEWiki report artifacts and traces whether earlier unsupported claims changed across 78 continued investigations. Of 61 follow-ups with higher finding scores, 44 retained an earlier flagged claim; 34 did so after excluding disputed judgments.

[publication](https://github.com/FideAI/dsewiki-investigation/blob/main/investigations/agent-incidents/corpus-review/paper.md) · [article](https://fideai.org/insights/how-certainty-enters-an-ai-incident-report/) · [repository](https://github.com/FideAI/dsewiki-investigation) · [data](https://fideai.org/insights/evidence/dsewiki/explorer/)

**Scope:** Assistant-coded assessment pending independent human adjudication. Eight scoped evidence questions, one dependent incident benchmark; not a model ranking, general error rate or tested verification intervention.

**Reproduction:** Public claim and transition assessments, rationales, correction history, source pins, reproducible analysis, an evidence explorer and a local review app. Aggregation reproduces offline; independent judgment review remains outstanding.

### When AI Is Your Pastor: A Benchmark for Theological Triage and Pastoral Guidance in Large Language Models

Alex Chao · 2026-05-29 · paper · **preprint** · not peer reviewed

Introduces FMG-Bench to study how instruction settings affect model responses to theological and pastoral guidance questions.

[publication](https://arxiv.org/abs/2608.12324) · [article](https://fideai.org/research/fmg-bench) · [repository](https://github.com/FideAI/fmg-bench) · [data](https://huggingface.co/datasets/FideAI/fmg-bench)

**Scope:** An English-language benchmark in Christian theological and pastoral contexts; its results do not establish pastoral competence or endorse models as pastoral authorities.

**Reproduction:** The public FMG-Bench repository provides paper sources, benchmark data, a reference runner and scoring code. This catalog entry does not certify independent replication.
<!-- PUBLICATION_INDEX_END -->

## Registering released work

Edit [`catalog.json`](catalog.json), the canonical publication record. Use the
existing entry as the field reference. Run:

```sh
npm run build:publications
npm test
npm run verify:publications
```

Commit the source catalog, this generated index and `dist/publications.json`
together. The builder checks known research areas, domains, related FID calls,
unique identifiers, dates, required limitations and supported publication states.
It validates link format; maintainers must verify that each destination is public
and supports the record. `verified_on` records that manual check, not peer review.

- `published_on` is the first public release date of the linked work, not the
  date of catalog entry or a future planned launch.
- `publication_status` is `preprint`, `published`, `corrected` or `withdrawn`.
  Drafts and internal studies belong in their research workspaces.
- `review_status` states `peer_reviewed` or `not_peer_reviewed`. Editorial checking
  and internal methods reviews are not substitutes for peer review.
- Use the shared taxonomy in `research/taxonomy.json`. Include only related FID
  calls that the work actually addresses; an empty list is allowed.
- `links.publication` points to the canonical released work. Optional `article`,
  `repository` and `data` links connect its other public surfaces.
- `reproducibility` states what is available and what can be reproduced. Separate
  reproducing an analysis from rerunning model collection or replicating findings.
- Preserve corrections and withdrawals with dated explanations in `corrections`.
  Update the verification date and catalog `updated_on` together.

## Dedicated artifact repositories

A substantial paper, investigation or benchmark should have its own public
artifact repository when readers need data, analysis or a reproduction workflow.
That repository owns the released report, methods, shareable evidence, analysis,
figures, citation information and licenses. This catalog links to it.

Short commentary and source-based briefs can link directly to their published
article. A separate repository for every article is unnecessary.

Private evaluation infrastructure and research workspaces are not public release
packages. A public artifact must describe any limitations arising from private
infrastructure. Do not publish private operational history or internal evidence
simply to populate a catalog entry. Register the released artifact instead.
