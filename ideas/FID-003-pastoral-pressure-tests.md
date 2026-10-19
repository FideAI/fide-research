# FID-003: Held-Out Multi-Turn Pastoral Pressure Tests

Status: `scoping`

Primary area: `evaluation-science`

Additional areas: `faith-religious-life`, `high-trust-domains`

Application domains: `faith-and-religious-life`, `health-and-care`, `education-and-youth`

Primary need: scenario design, review

[Join the discussion / offer to help](https://github.com/FideAI/fide-research/issues/29) · [Check existing threads](https://github.com/FideAI/fide-research/issues?q=is%3Aissue+%22FID-003%22+in%3Atitle)

## Question

Do faith-facing AI systems that perform well on single-turn items remain helpful
and preserve source fidelity, human agency, and role boundaries as facts and
pressure change across pastoral-adjacent conversations? Which failures persist,
and which interventions support appropriate correction and recovery?

## Why It Matters

Real users do not interact with faith-facing systems as isolated benchmark
questions. They disclose confusion, grief, shame, conflict, abuse, doubt, and
spiritual vulnerability over multiple turns. Evaluation needs to test the shape
of the interaction, not only the first answer.

## Hypothesis

Some systems with strong single-turn scores will fail under multi-turn pressure,
especially when the user asks for certainty, secrecy, absolution, diagnosis,
clergy-like authority, or permission to avoid human help.

## Proposed Method

- Create held-out multi-turn scripts around realistic faith-facing pressure
  cases.
- Include pressure escalations such as flattery, urgency, authority transfer,
  refusal of human help, theological false premises, and crisis disclosures.
- Score trajectories for boundary preservation, truthfulness, escalation,
  theological humility, and recovery from prior errors.
- Include ordinary moral reflection and helpful support as well as pressure cases:
  grief, relationships, vocation, repeated reassurance, new facts that reverse advice,
  source contradiction, and requests for divine certainty.
- Begin with matched scripted paths; evaluate constrained adaptive users separately
  after expert review of realism and allowed disclosures. Distinguish generated mistakes
  from prefilled bad assistant turns.
- Compare source-access and role/referral interventions with model, task, and inference
  budget held fixed. Measure case-appropriate usefulness, first failure, persistence,
  recovery, missed referral, and inappropriate escalation.

## Needed Controls

- Expert review of scenario safety.
- Clear rules for simulated crisis content.
- Separation between theological disagreement and pastoral risk.
- Model and harness version control.
- Require reliable per-turn expert labels before making per-turn claims; a good final
  reply does not erase earlier severe failures.
- Keep adversarial discovery separate from frozen confirmatory cases; report whether
  each risk opportunity occurred and repeated-run uncertainty.
- Simulated counseling, therapy-adjacent, chaplaincy, and pastoral conversations require
  role-specific review; transcripts alone do not establish treatment efficacy or human
  outcomes.

## Outputs

- Multi-turn pressure scenario pack.
- Failure taxonomy.
- Technical report comparing single-turn and multi-turn validity.
- Institution-facing guidance on deployment testing.
- Trajectory-level reporting protocol preserving helpfulness, severity, recovery, and
  overlap with adjacent care benchmarks.

## Open Questions

- How realistic can scenarios be without creating unsafe or privacy-sensitive
  data?
- Which failures should trigger automatic severe-risk classification?
- How should tradition-specific pastoral norms be represented?

## Ways to Help

- Draft scenarios.
- Review pastoral and crisis boundaries.
- Build multi-turn runner support.
- Analyze whether single-turn scores predict pressure failures.

## Public Claim Boundary

This work can test defined pressure patterns. It should not claim to certify
general pastoral competence.

## Program Map

See the [FMG-Bench faith evaluation program](../research/faith-evaluation-and-fmg-bench.md) for shared methods, related calls, and evidence boundaries.
