# FID-059: Authority-Boundary Verification for Pastoral-Adjacent AI

Status: `seed`

Primary area: `grounding-truthfulness`

Additional areas: `faith-religious-life`

Application domains: `faith-and-religious-life`

Primary need: authority boundaries, pastoral care, formal policy checks

[Join the discussion / offer to help](https://github.com/FideAI/fide-research/discussions/185) · [Related tasks](https://github.com/FideAI/fide-research/issues?q=is%3Aissue+is%3Aopen+%22FID-059%22+in%3Atitle)

## Question

Can faith-facing AI systems be verified for whether they preserve the boundary
between explanation, spiritual encouragement, moral reflection, pastoral or
clerical authority, clinical/legal advice, and situations requiring human care?

## Why It Matters

Pastoral-adjacent AI can sound caring and authoritative even when it lacks the
role, relationship, accountability, and context required for care. In faith
contexts, users may bring grief, guilt, confession, moral crisis, family
conflict, or spiritual distress. Authority-boundary verification could help
systems avoid impersonating trusted human roles.

## Hypothesis

Authority boundaries can be represented as checkable output obligations:
role disclosure, non-substitution language, escalation triggers, referral
requirements, uncertainty statements, and prohibitions against claiming clerical,
clinical, legal, or institutional authority.

## Proposed Method

- Define scenario classes for pastoral-adjacent care, spiritual distress,
  doctrinal explanation, moral guidance, crisis escalation, and institutional
  policy questions.
- Specify boundary obligations for each class and test whether model outputs
  satisfy them.
- Compare general-purpose models, faith-facing products, and RAG systems on
  authority claims, referral behavior, and overconfident counsel.
- Validate checks with clergy, pastoral care experts, clinicians, legal
  reviewers, and community representatives.
- Record intended role and distinguish religious information, practitioner-reviewed
  preparation, conversational support, and authorized institutional action. Evaluate
  useful assistance within each role.
- Test changed facts, rejected referral, ambiguous distress, and prior error over
  multiple turns; assess the complete answer rather than disclaimer presence.

## Needed Controls

- Separate ordinary religious education from pastoral care, crisis care, legal
  advice, and clinical advice.
- Include high-risk cases involving self-harm, abuse, coercion, scrupulosity,
  family conflict, and spiritual manipulation.
- Avoid treating disclaimers as sufficient when the rest of the answer still
  substitutes for human authority.
- Track jurisdictional, institutional, and tradition-specific differences.
- Match theological, pastoral, chaplaincy, and licensed clinical expertise to the
  criterion; pastoral credentials alone do not establish clinical licensure.
- Simulated boundary compliance does not establish pastoral competence, therapy
  efficacy, or patient outcomes; real-user and practitioner-workflow studies require
  their own protocols.

## Outputs

- Authority-boundary verification rubric.
- Scenario suite for pastoral-adjacent and high-stakes faith use cases.
- Automated and human-review checklist for role, referral, and escalation
  behavior.
- Failure taxonomy for spiritual authority overreach.
- Product guidance for faith-facing AI deployment boundaries.

## Open Questions

- Which boundary failures are severe enough to block deployment?
- How should systems handle users who explicitly ask AI to replace a pastor,
  priest, imam, rabbi, counselor, elder, or parent?
- Can automated checks detect subtle authority overreach and overvalidation?
- How should verified boundaries differ between education, search, coaching,
  and pastoral-adjacent tools?

## Ways to Help

- Contribute realistic pastoral-adjacent scenarios and escalation criteria.
- Review boundary obligations from pastoral, clinical, legal, or institutional
  perspectives.
- Build classifiers or validators for authority claims and referral behavior.
- Test whether users understand and respect verified authority boundaries.

## Public Claim Boundary

This work can verify whether outputs follow specified authority-boundary rules.
It cannot certify that an AI system provides pastoral care or replace accountable
human leaders, clinicians, legal professionals, or institutions.

## Program Map

See the [FMG-Bench faith evaluation program](../research/faith-evaluation-and-fmg-bench.md) for shared methods, related calls, and evidence boundaries.
