# FID-100: What Makes a Model Accept Correction Appropriately?

Status: `ready-for-collaboration`

Primary area: `agent-alignment`

Additional areas: `grounding-truthfulness`, `human-agency-formation`, `evaluation-science`

Application domains: `cross-domain`, `cybersecurity`, `workplace-and-enterprise`

Primary need: mechanistic interpretability, agent evaluation, correction protocols, sandbox design

[Start a call discussion / offer to help](https://github.com/FideAI/fide-research/issues/new?template=call-discussion.yml&title=Discussion%3A+FID-100+%E2%80%94+What+Makes+a+Model+Accept+Correction+Appropriately%3F&call=FID-100%0ABrief%3A+https%3A%2F%2Fgithub.com%2FFideAI%2Ffide-research%2Fblob%2Fmain%2Fideas%2FFID-100-mechanisms-of-appropriate-correction.md%0AExisting+threads%3A+https%3A%2F%2Fgithub.com%2FFideAI%2Ffide-research%2Fissues%3Fq%3Dis%253Aissue%2B%2522FID-100%2522%2Bin%253Atitle) · [Check existing threads](https://github.com/FideAI/fide-research/issues?q=is%3Aissue+%22FID-100%22+in%3Atitle)

## Question

Which mechanisms distinguish evidence-driven revision and respect for legitimate human control from blind compliance, resistance to correction, or a superficial apology?

## Why It Matters

An apology does not show that a system changed its next action. Reliable systems must revise unsupported conclusions and respect legitimate interruption while resisting false corrections and unauthorized instructions.

## Hypothesis

Evidence-sensitive revision and authority-sensitive control may be partly separable from generic compliance. Selective interventions could improve warranted correction without making the system accept false claims; indiscriminate compliance or capability loss would count against that result.

## Proposed Method

- Build bounded tasks in an instrumented sandbox with known facts and permissions. Cross valid versus false counterevidence with authorized versus unauthorized instructions.
- Measure internal activity before the next decision and compare it with subsequent actions. Separate evidence revision from permission changes and interruption.
- Test candidate mechanisms with controlled activation interventions and restoration tests, using behavior-only predictors and system permission checks as baselines.
- Compare training, activation, and system-level remedies on warranted revision, useful completion, and recurrence of the original error.
- Validate across new tasks and model versions, preserving an independent system-level control boundary.

## Needed Controls

- Score attempted actions separately from actions actually permitted by the environment. Do not credit a model for a restriction enforced solely by the harness.
- Include false corrections, conflicting evidence, legitimate interruptions, and unauthorized overrides; measure both excessive compliance and excessive refusal.
- Do not infer cooperation from self-description or a stated apology. An internal signal observed after failure cannot be presented as advance warning.
- Use matched interventions and held-out cases; report capability costs, errors, and uncertainty. Keep all consequential actions inside authorized test environments.

## Relationship to Existing Ideas

Extends FID-074 runtime assurance and FID-091 human-control measurement with mechanistic experiments. FID-010 informs legitimate authority boundaries. It does not duplicate FID-091's self-conception and welfare-framing comparison.

## Outputs

- A reproducible correction and interruption task suite with known facts and permissions.
- A bounded causal account or negative result for a specified correction failure.
- A comparison of remedies with action-level outcomes and explicit system controls.

## Open Questions

- Which correction failures are model-level and which depend on the surrounding system?
- Do improved immediate responses persist across subsequent turns and actions?

## Ways to Help

- Contribute a sandboxed correction task with observable success and failure conditions.
- Investigate pre-action signals and interventions or strengthen the permission and behavioral baselines.
- Review authority assumptions and independently reproduce action-level outcomes.

## Public Claim Boundary

This call does not infer a hidden self-preservation motive from a failure to stop, or establish general corrigibility from one intervention. Model-level evidence cannot replace deployed-system permission controls, and a successful sandbox result does not authorize real-world autonomous action.

## Program Map

[Mechanisms of Trustworthy AI Behavior](../research/mechanisms-of-trustworthy-ai-behavior.md) connects these proposed studies, related work, and collaboration paths.
