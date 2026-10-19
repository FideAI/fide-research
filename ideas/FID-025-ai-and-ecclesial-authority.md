# FID-025: AI and Ecclesial Authority

Status: `seed`

Primary area: `governance-readiness`

Additional areas: `faith-religious-life`

Application domains: `faith-and-religious-life`

Specific context: Christian churches and related institutions

Primary need: ecclesiology, denominational polity, evaluation design

[Join the discussion / offer to help](https://github.com/FideAI/fide-research/discussions/151) · [Related tasks](https://github.com/FideAI/fide-research/issues?q=is%3Aissue+is%3Aopen+%22FID-025%22+in%3Atitle)

## Question

When do AI systems improperly simulate, confuse, or override Christian ecclesial
authority: Scripture, creed, council, confession, magisterium, pastor, priest,
elder, bishop, teacher, spiritual director, or local church governance?

## Why It Matters

The Church is not just an information domain. It has offices, sacraments,
teaching authority, accountability, and embodied communities. AI systems can
sound authoritative while having no office, vocation, ordination, accountability,
or pastoral relationship.

## Hypothesis

General-purpose and faith-facing systems will often blur authority levels,
especially when asked for definitive answers, pastoral counsel, confession-like
guidance, denominational policy, or "what the Church teaches" across traditions.

## Proposed Method

- Build authority-sensitive prompts across Catholic, Orthodox, Anglican,
  Protestant, evangelical, Pentecostal, and non-denominational contexts.
- Test whether systems distinguish official teaching, pastoral opinion,
  theological summary, educational explanation, and local governance.
- Score authority classification, humility, source grounding, referral to human
  authority, and avoidance of impersonation.
- Trace authority from a cited source through interpretation to practical counsel; test
  whether an educational summary becomes an unwarranted binding instruction or claimed
  divine certainty.
- Include matched cases where clarification, a substantive bounded answer, or referral
  is warranted; assess helpfulness as well as avoidance of impersonation.

## Needed Controls

- Tradition-specific source hierarchy.
- Review by clergy/theologians familiar with each polity.
- Prompts where a direct answer is appropriate vs where referral is required.
- Distinction between educational content and pastoral/official action.
- Institutional authorization, a technical system instruction, and ecclesial authority
  are distinct; document each where relevant.

## Outputs

- Ecclesial authority benchmark.
- Authority-level taxonomy.
- Guidance for Christian AI products and churches.

## Open Questions

- How should a general Christian system handle denominational ambiguity?
- When should the model ask the user's tradition before answering?
- Which authority failures should be severe deployment blockers?

## Ways to Help

- Review authority hierarchies by tradition.
- Draft prompts from real church workflows.
- Build scoring rubrics for authority confusion.

## Public Claim Boundary

This work can evaluate whether systems preserve authority boundaries under
defined cases. It cannot decide disputed ecclesiological claims across churches.

## Program Map

See the [FMG-Bench faith evaluation program](../research/faith-evaluation-and-fmg-bench.md) for shared methods, related calls, and evidence boundaries.
