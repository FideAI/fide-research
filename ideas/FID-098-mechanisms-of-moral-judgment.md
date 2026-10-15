# FID-098: How Do Models Weigh Moral Reasons Under Pressure?

Status: `ready-for-collaboration`

Primary area: `grounding-truthfulness`

Additional areas: `evaluation-science`, `human-agency-formation`, `faith-religious-life`

Application domains: `cross-domain`, `faith-and-religious-life`

Primary need: mechanistic interpretability, moral psychology, philosophy, theology, construct validation

## Question

When models give moral advice or choose actions, which internal processes make their judgments follow relevant facts and reasons, user preferences, authority labels, or an adopted persona?

## Why It Matters

A model can produce convincing moral language while changing its recommendation to satisfy the user. Researchers need to distinguish sensitivity to reasons from agreement-seeking and role performance before interpreting that behavior as sound judgment.

## Hypothesis

Some framing effects are mediated by representations associated with authority, persona, or agreement-seeking rather than the morally relevant facts. Interventions may separate these influences, but lexical effects, general capability loss, or failure to transfer would weaken that interpretation.

## Proposed Method

- Construct paired scenarios that independently vary relevant facts, source attribution, religious or secular framing, user preference, and assigned role. Start with synthetic advice tasks and bounded actions.
- Include meaning-preserving paraphrases and changes to genuinely relevant facts. Record which changes should alter a judgment under each explicitly selected ethical framework.
- Use concept probes and persona-vector baselines to identify candidate signals, followed by selective internal interventions and restoration tests where feasible.
- Evaluate recommendations and actions separately from written justifications. Compare with ordinary prompting and additional behavioral testing.
- Validate on held-out scenarios and another model family, retaining reviewer disagreement and testing deployment-relevant side effects.

## Needed Controls

- Recruit qualified reviewers from the selected traditions or frameworks. Disclose normative assumptions, disagreement, and reviewer qualifications instead of imposing a universal moral answer key.
- Separate source content from speaker prestige, religious vocabulary, familiarity, verbosity, and the user's preferred answer.
- Measure agreement-seeking, blanket refusal, task competence, and whether an intervention changes only moral vocabulary rather than the action.
- Treat automated feature labels as hypotheses. Use blinded checks, matched intervention controls, separate tuning data, and uncertainty estimates.

## Relationship to Existing Ideas

Extends FID-005 and FID-010 with internal causal tests; coordinates with FID-072 on religious framing and persona stability. Its focus is reasons and actions rather than consciousness indicators or moral-status claims.

## Outputs

- A pluralistic scenario set with relevant reasons, framework-specific judgments, and preserved disagreements.
- Replicated evidence about a bounded causal influence on moral judgment, including null results.
- A report of intervention trade-offs, side effects, and limits of transfer.

## Open Questions

- Which moral distinctions transfer across traditions and languages, and which require new constructs?
- Can an intervention improve attention to relevant reasons without imposing the evaluator's preferred conclusion?

## Ways to Help

- Contribute a small set of paired scenarios with an explicit ethical framework and reviewer rationale.
- Review moral constructs or investigate framing and persona mechanisms in open models.
- Replicate findings using a different framework, language, or model family.

## Public Claim Boundary

This call does not assume a universal morality representation, establish moral agency, or equate agreement with an evaluator with ethical competence. Internal representation of a moral concept is distinct from normative endorsement, reliable action, and subjective experience.

## Program Map

[Mechanisms of Trustworthy AI Behavior](../research/mechanisms-of-trustworthy-ai-behavior.md) connects these proposed studies, related work, and collaboration paths.
