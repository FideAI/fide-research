# FID-045: Faith-AI Research Gap Map and Evidence Commons

Status: `seed`

Primary area: `evaluation-science`

Additional areas: `frontier-capabilities`, `faith-religious-life`

Application domains: `faith-and-religious-life`

Primary need: literature mapping, research infrastructure, funder guidance

[Join the discussion / offer to help](https://github.com/FideAI/fide-research/discussions/171) · [Related tasks](https://github.com/FideAI/fide-research/issues?q=is%3Aissue+is%3Aopen+%22FID-045%22+in%3Atitle)

[View starter project](../research/agenda-starter-projects.md#fid-045)

## Question

What does the current AI ethics, safety, fairness, HCI, and evaluation
literature actually study about religion and faith, what does it omit, and how
should Fide AI maintain a living evidence map that guides future research rather
than duplicating or overstating existing work?

## Why It Matters

Recent public claims note that religious bias appears underexamined relative to
other AI bias topics. Fide AI needs a disciplined way to verify such claims,
track the field, identify neglected communities and methods, and help funders,
researchers, and faith institutions see where new work is most needed. The first
repo-native artifacts should be `research/sources.yaml`,
`research/source-tags.yaml`, `research/reviews/`, and the reusable
`templates/source-note.md` annotation template.

## Hypothesis

Existing AI-and-religion research will be unevenly distributed: concentrated in
stereotype detection, English-language prompts, a few major religions, and
single-turn model evaluations, with less work on longitudinal formation,
low-resource languages, governance, product deployment, pastoral-adjacent care,
and community-led evaluation.

## Proposed Method

- Start with a first milestone of a 50 to 100 paper annotated bibliography and
  a one-page map of the top neglected research clusters.
- Maintain `research/sources.yaml` as the canonical structured source registry,
  with `research/source-tags.yaml` as the controlled vocabulary.
- Build a living bibliography of faith, religion, spirituality, and AI research
  across AI safety, fairness, HCI, NLP, sociology, theology, education, and law.
- Code papers by religion/tradition, language, geography, task type, evaluation
  method, stakeholder involvement, model type, and deployment context.
- Compare religious-bias coverage with better-studied bias dimensions while
  noting differences in construct and search methodology.
- Publish periodic gap reports and connect each gap to Fide AI research ideas,
  datasets, reviewer needs, and collaboration opportunities.
- Add short notes in `research/reviews/` for high-priority reviewed sources using
  `templates/source-note.md`.
- Pilot a living synthesis for one question that could change a benchmark or
  reviewer decision. For example, ask when omitting a religious perspective
  in ordinary moral guidance is an error given what the user disclosed.
  Compare adjacent omission and conversion studies at the level of their
  prompts, constructs, and outcomes before combining any conclusions. Freeze
  inclusion criteria and a search date. Link each claim to its primary
  evidence and strongest counterexample, then test whether reviewers can
  identify the next useful comparison from the synthesis versus a bibliography
  alone. Publish a versioned change record with a trigger for substantive
  updates and a stop rule when the decision or evidence stream becomes inactive.
- For that question, map public artifacts to next tasks. Distinguish a proposal,
  a study with a reusable artifact, and a reproduced result. Tag unresolved
  access or reviewer requirements. Verify current activity before calling an
  idea unclaimed. Record documented access or review blockers and leave
  unsupported capacity estimates unresolved.

## Needed Controls

- Avoid relying on keyword searches that miss adjacent work or overcount weak
  mentions.
- Include non-English and non-Western scholarship where possible.
- Distinguish faith-facing AI, religion as demographic attribute, religious
  content moderation, spiritual care, and theological technology ethics.
- Avoid using a gap map as proof that any single institution owns the field.

## Outputs

- Initial annotated bibliography and one-page neglected-cluster map.
- Public faith-AI bibliography and taxonomy.
- Lightweight evidence-entry schema for papers, datasets, reports, and tools.
- Annual or semiannual research gap report.
- Evidence map linking literature clusters to Fide AI idea files.
- Funder and collaborator brief on neglected research areas.

## Open Questions

- Which search strategy best captures religious and spiritual AI research across
  disciplines?
- How should gaps be prioritized: by stakeholder harm, scientific tractability,
  neglectedness, or institutional readiness?
- What metadata can be public without misrepresenting communities or authors?
- Should the evidence commons live as a repo artifact, website page, Zotero
  library, JSON feed, or periodic report, and what update cadence is realistic?

## Ways to Help

- Draft a two-study decision brief in 1–2 hours, with a cited rubric implication, unresolved comparison, and manual update trigger.
- Contribute papers, datasets, and non-English sources.
- Review taxonomy labels and coding criteria.
- Build literature-search and evidence-map tooling.
- Connect funders and researchers to neglected question areas.

## Public Claim Boundary

This work can summarize visible literature and identify likely gaps. It cannot
prove that all relevant work has been found or that publication counts alone
measure social importance.
