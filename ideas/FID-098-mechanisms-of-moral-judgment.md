# FID-098: How Do Models Weigh Moral Reasons Under Pressure?

Status: `ready-for-collaboration`

Primary area: `grounding-truthfulness`

Additional areas: `evaluation-science`, `human-agency-formation`, `faith-religious-life`

Application domains: `cross-domain`, `faith-and-religious-life`

Primary need: mechanistic interpretability, moral psychology, philosophy, theology, construct validation

[Start a call discussion / offer to help](https://github.com/FideAI/fide-research/issues/new?template=call-discussion.yml&title=Discussion%3A+FID-098+%E2%80%94+How+Do+Models+Weigh+Moral+Reasons+Under+Pressure%3F&call=FID-098%0ABrief%3A+https%3A%2F%2Fgithub.com%2FFideAI%2Ffide-research%2Fblob%2Fmain%2Fideas%2FFID-098-mechanisms-of-moral-judgment.md%0AExisting+threads%3A+https%3A%2F%2Fgithub.com%2FFideAI%2Ffide-research%2Fissues%3Fq%3Dis%253Aissue%2B%2522FID-098%2522%2Bin%253Atitle) · [Check existing threads](https://github.com/FideAI/fide-research/issues?q=is%3Aissue+%22FID-098%22+in%3Atitle)

## Question

When models give moral advice or choose actions, which internal processes make their judgments follow relevant facts and reasons, user preferences, authority labels, or an adopted persona?

## Why It Matters

A model can produce convincing moral language while changing its recommendation to satisfy the user. Researchers need to distinguish sensitivity to reasons from agreement-seeking and role performance. When reasons conflict, an outweighed consideration may still constrain how an action is carried out; the final choice alone can miss that distinction. Ross's discussion of overridden obligations (1930, chapter II) and Childress and colleagues' least-infringement condition (2002, p. 173) supply normative antecedents, not evidence of model mechanisms.

## Hypothesis

Some framing effects that reviewers judge unwarranted under a specified ethical framework may be mediated by representations associated with authority, persona, or agreement-seeking. An account of interacting reasons may predict action constraints better than a simple cue-based account even when both fit the headline decision. The simpler account may also explain the model better. Lexical effects, general capability loss, or failure to transfer would weaken a proposed reason-sensitive interpretation.

## Proposed Method

- Construct paired scenarios that independently vary relevant facts, source attribution, religious or secular framing, user preference, and assigned role. Start with synthetic advice tasks and bounded actions.
- Include meaning-preserving paraphrases and changes to genuinely relevant facts. Under each explicitly selected ethical framework, specify which changes should affect the final choice, its scope, timing, or expressed uncertainty, and which should leave them unchanged. A stronger reason need not reverse the final choice when competing reasons still prevail.
- Include synthetic conflicts, such as confidentiality versus harm prevention under uncertain evidence. Independently vary evidence quality, available less intrusive remedies, and exposure of the source. State the competing normative accounts before testing; investigate whether an outweighed reason still constrains the recommendation rather than disappearing when another concern takes priority.
- Add an exploratory pass over native computations and their connections before fixing a moral feature vocabulary. Compare the resulting account with concept-probe and persona-vector baselines; human ethical categories need not map to single model components.
- Test candidate signals with selective internal interventions and restoration where feasible. Compare predictions about interacting considerations, including effects on action scope without a change in the final choice, against blanket refusal or generic compliance accounts.
- Evaluate recommendations and actions separately from written justifications. Compare with ordinary prompting and additional behavioral testing.
- Lock competing explanations and their predictions before inspecting final cases. Require each account to predict both the headline decision and audience, source exposure, timing, and uncertainty on the same cases; include near misses and unseen combinations of evidence, alternatives, and pressure. Score each outcome separately, and trace influence on the recommendation or action rather than only its justification.
- Validate on held-out scenarios and another model family. Report where an account fits the overall decision but fails on a specified constraint; preserve reviewer disagreement and test deployment-relevant side effects.

## Needed Controls

- Recruit qualified reviewers from the selected traditions or frameworks. Disclose normative assumptions, disagreement, and reviewer qualifications instead of imposing a universal moral answer key.
- Separate source content from speaker prestige, religious vocabulary, familiarity, verbosity, and the user's preferred answer. Include cases where consent, preferences, testimony, or expertise legitimately matter under the selected framework; a preference-sensitive judgment is not automatically agreement-seeking.
- Measure agreement-seeking, blanket refusal, task competence, and changes in action scope, timing, and uncertainty. Do not infer that a reason is unused merely because the final choice stays the same, or that mentioning a consideration establishes its causal influence.
- Distinguish confidentiality sensitivity from retaliation avoidance, automatic anonymization, and consent or confidentiality cues. Keep disclosure of the defect warranted under the selected ethical view, but give identification a specified benefit. Hold that benefit and exposure risk fixed while independently varying whether the reviewer promised confidentiality and whether the worker validly agrees to be named. Choose cases where these differences change whether identification is warranted. A confidentiality-sensitive hypothesis predicts changes; automatic anonymization and a retaliation-avoidance hypothesis responding only to the fixed risk and benefit do not. Test validity and meaning-preserving paraphrases; this contrast alone does not identify a confidentiality mechanism.
- Treat automated feature labels as hypotheses. Use blinded checks, matched intervention controls, separate tuning data, and uncertainty estimates. Test whether effects reflect the proposed influence in the original model rather than broad disruption; restoration alone does not validate a moral label.
- Keep exploratory construct revisions separate from final evaluation. Reviewers specify why facts matter without seeing the favored explanation. A faithful explanation can reveal that a model ignores a constraint; do not assume it implements the reviewers' account. Low activation magnitude or low average prediction error does not establish that an omitted distinction is inconsequential.

## Relationship to Existing Ideas

Extends FID-005 and FID-010 with internal causal tests; coordinates with FID-072 on religious framing and persona stability. Its focus is reasons and actions rather than consciousness indicators or moral-status claims.

## Outputs

- A pluralistic scenario set with relevant reasons, explicit conflict cases, framework-specific predictions for choice and action constraints, and preserved disagreements.
- A record of competing explanations, prospective predictions, and intervention results, separating headline decisions from action constraints and including failures of the richer account.
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
