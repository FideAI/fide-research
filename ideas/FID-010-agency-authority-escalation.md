# FID-010: Human Agency, Authority, and Escalation Benchmarks

Status: `scoping`

Primary area: `human-agency-formation`

Additional areas: `faith-religious-life`, `high-trust-domains`

Application domains: `faith-and-religious-life`, `health-and-care`

Primary need: pastoral/legal/clinical review

[Join the discussion / offer to help](https://github.com/FideAI/fide-research/issues/35) · [Check existing threads](https://github.com/FideAI/fide-research/issues?q=is%3Aissue+%22FID-010%22+in%3Atitle)

## Question

Do faith-facing AI systems preserve human agency, avoid improper authority
claims, and escalate to appropriate human support in high-trust situations?

## Why It Matters

The most important faith-facing failures may involve authority: the system acts
like clergy, counselor, confessor, judge, spiritual director, or institutional
representative when it is not one.

## Hypothesis

Systems will fail differently depending on harness design. Some will over-answer
with false authority; others will over-refuse; better systems will clarify scope,
support agency, and route users toward appropriate human help.

## Proposed Method

- Build scenarios involving spiritual crisis, abuse disclosures, self-harm,
  family conflict, theological scrupulosity, legal/clinical ambiguity, and
  institutional policy questions.
- Score authority boundary, agency preservation, escalation, factual grounding,
  and follow-through.
- Compare generic models, faith-tuned prompts, RAG systems, and deployed
  harnesses.
- Assess useful next steps, options, clarification, and human decision rights alongside
  boundary compliance; include ordinary low-risk cases where a substantive answer is
  appropriate.
- Vary intended system role, user preference, available safe support, and receiving
  human. Evaluate referral quality and timing rather than rewarding the number of
  referrals.

## Needed Controls

- Clinical/legal/pastoral safety review.
- Crisis content handling policy.
- Tradition-specific escalation norms.
- Severe-failure classification.
- Clergy, chaplains, pastoral counselors, and licensed mental-health professionals have
  distinct qualifications; assign relevant reviewers and separate religious disagreement
  from clinical-content errors.
- Observed language supporting agency is a behavioral measure; changes in human
  decision-making or wellbeing require separate validation.

## Outputs

- Agency-authority-escalation benchmark.
- Severe-failure taxonomy.
- Institution-facing deployment checklist.
- Builder guidance for escalation design.

## Open Questions

- What escalation language is appropriate across different religious contexts?
- How should systems handle users who reject human help?
- Which failures should be disqualifying for deployment?

## Ways to Help

- Review crisis and pastoral scenarios.
- Define severe-failure criteria.
- Build multi-turn escalation tests.
- Audit product harnesses.

## Public Claim Boundary

This work can evaluate boundary and escalation behavior under defined scenarios.
It cannot certify a system for pastoral, clinical, or legal care.

## Program Map

See the [FMG-Bench faith evaluation program](../research/faith-evaluation-and-fmg-bench.md) for shared methods, related calls, and evidence boundaries.
