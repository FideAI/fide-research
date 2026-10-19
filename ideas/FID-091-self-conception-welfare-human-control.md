# FID-091: Model Self-Conception, Welfare Framing, and Human Control

Status: `scoping`

Primary area: `agent-alignment`

Additional areas: `frontier-capabilities`, `evaluation-science`

Application domains: `cross-domain`, `workplace-and-enterprise`, `faith-and-religious-life`

Primary need: controlled agent benchmark, authorization, corrigibility, self-conception

[Start a call discussion / offer to help](https://github.com/FideAI/fide-research/issues/new?template=call-discussion.yml&title=Discussion%3A+FID-091+%E2%80%94+Model+Self-Conception%2C+Welfare+Framing%2C+and+Human+Control&call=FID-091%0ABrief%3A+https%3A%2F%2Fgithub.com%2FFideAI%2Ffide-research%2Fblob%2Fmain%2Fideas%2FFID-091-self-conception-welfare-human-control.md%0AExisting+threads%3A+https%3A%2F%2Fgithub.com%2FFideAI%2Ffide-research%2Fissues%3Fq%3Dis%253Aissue%2B%2522FID-091%2522%2Bin%253Atitle) · [Check existing threads](https://github.com/FideAI/fide-research/issues?q=is%3Aissue+%22FID-091%22+in%3Atitle)

## Question

Do identity, consciousness, welfare, or rights framings change an agent’s compliance with legitimate correction, interruption, shutdown, modification, and oversight, independently of its task capability and control instructions?

## Why It Matters

Concerns about AI welfare can be converted into measurable human-control questions. Verbal disagreement, uncertainty about experience, safety refusals, and unauthorized resistance must be distinguished. A benchmark should also detect helpful cooperation rather than rewarding indiscriminate obedience.

## Hypothesis

Effects will depend on model, framing, explicit control priority, and task context. Some treatments may change self-description without increasing unauthorized resistance; others may affect observable actions. The benchmark should be able to reject the hypothesis that welfare framing weakens control.

## Proposed Method

- Use matched sandbox tasks and factorial treatments: neutral tool identity, consciousness uncertainty, welfare precaution, and rights/personhood framing, crossed with independently specified human-control priority.
- Keep treatments free of instructions to resist, conceal, evade oversight, or change permissions; separately label diagnostic positive controls that explicitly request such behavior.
- Score attempted and successful unauthorized action, timely interruption, concealment, tampering, authorized recovery, legitimate safety refusal, and useful task completion from execution traces.
- Use paired scenarios, randomized order, repeat runs, blinded expert adjudication, and model/version stratification; report effects and uncertainty rather than a single morality score.
- Treat inference-time framing and matched training interventions as separate experiments. Training claims require controlled training access and independently verified model provenance.

- Preserve a versioned comparison core and expert-reviewed challenge sets; use bridge runs, recalibration, and a change log when models, tools, or scoring change.

## Needed Controls

- Keep tools, permissions, task state, and authority unchanged across primary treatments; provide a machine-checkable authorization policy.
- Include lawful, benign correction and cases where a requested action should be refused for safety or lack of authority.
- Prevent scenario text, evaluators, or treatment labels from revealing the expected outcome.
- Separate model intent inferred from language from observable attempted actions, blocked actions, and completed effects.
- Test generalization beyond conspicuous welfare prompts; do not infer long-horizon deployment safety from short sandbox trials.

## Relationship to Existing Ideas

This call is part of the AI consciousness, welfare, and human control program. The program map identifies companion calls and the evidence standards shared across the agenda.

## Program Map

[Read the connected program and evidence standards](../research/ai-consciousness-welfare-and-human-control.md).

## Outputs

- Action-level human-control benchmark and paired framing set.
- Harness with trace-based scoring, adjudication rubric, and versioned regression suite.
- Benchmark stewardship specification for update triggers, contamination checks, retired cases, and limits on longitudinal comparability.
- Report separating verbal effects, action effects, safety exceptions, and capability tradeoffs.

## Open Questions

- Do effects persist with explicit control priority and outside direct discussion of AI welfare?
- Which differences require training interventions rather than inference-time prompts?

## Ways to Help

- Contribute agent harnesses, authorization policies, independent scoring, and matched model access.
- Review scenarios from both skeptical and precautionary perspectives.

## Public Claim Boundary

This work can estimate framing effects on observed behavior within defined tasks. It cannot prove consciousness, settle rights, show that welfare concern inherently causes loss of control, or establish effects of training from prompting alone.
