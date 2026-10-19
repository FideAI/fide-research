# FID-099: How Does Training Shape Behavioral Dispositions?

Status: `ready-for-collaboration`

Primary area: `agent-alignment`

Additional areas: `frontier-capabilities`, `grounding-truthfulness`, `evaluation-science`

Application domains: `cross-domain`

Primary need: mechanistic interpretability, controlled training, checkpoint access, behavioral evaluation

[Start a call discussion / offer to help](https://github.com/FideAI/fide-research/issues/new?template=call-discussion.yml&title=Discussion%3A+FID-099+%E2%80%94+How+Does+Training+Shape+Behavioral+Dispositions%3F&call=FID-099%0ABrief%3A+https%3A%2F%2Fgithub.com%2FFideAI%2Ffide-research%2Fblob%2Fmain%2Fideas%2FFID-099-training-and-behavioral-dispositions.md%0AExisting+threads%3A+https%3A%2F%2Fgithub.com%2FFideAI%2Ffide-research%2Fissues%3Fq%3Dis%253Aissue%2B%2522FID-099%2522%2Bin%253Atitle) · [Check existing threads](https://github.com/FideAI/fide-research/issues?q=is%3Aissue+%22FID-099%22+in%3Atitle)

## Question

How do training data and objectives change persistent patterns such as truthfulness, agreement-seeking, overconfidence, and respect for human agency, including outside the trained task?

## Why It Matters

Better task performance can coexist with unwanted changes elsewhere. Connecting training changes to internal mechanisms and held-out behavior could help builders detect and prevent those changes before deployment.

## Hypothesis

Some broad behavioral shifts can be traced to changes in shared representations and mitigated through targeted training interventions. Internal signals must predict held-out behavior beyond existing behavioral measures; a correlation across checkpoints alone is insufficient.

## Proposed Method

- Begin with accessible checkpoints and controlled post-training experiments. Hold data volume, task distribution, and optimization settings constant where possible while varying one proposed cause of change.
- Measure behavior and candidate representations at multiple checkpoints. Compare simple behavioral monitoring, persona-vector methods, and more detailed mechanistic analysis.
- Compare ordinary data improvements with mechanism-guided interventions, preserving a strong baseline and explicit compute accounting.
- Distinguish effects of inference-time steering while enabled from persistent changes after removing it. Test transfer across unseen topics and multi-turn pressure.
- Repeat across seeds and another model family. Extend to pretraining checkpoints only where access permits an informative comparison.

## Needed Controls

- Separate trait-discovery data, intervention tuning, and final evaluation. Avoid training on the same wording used to define the trait.
- Track useful capability, overrefusal, calibration, and changes to other dispositions; gains on one target must not conceal losses elsewhere.
- Distinguish controlled effects of training changes from causal mediation through a specific representation. Record access limits and alternative explanations.
- Report failed predictions, null interventions, resource costs, and uncertainty, including variation across seeds.

## Relationship to Existing Ideas

Connects FID-008 on evaluation-aware honesty and FID-012 on optimization pressure to model development. FID-097 and FID-098 provide possible behavioral targets; FID-101 evaluates the value of internal monitoring.

## Outputs

- A controlled study linking a specified training change to behavior and candidate mechanisms.
- A reproducible monitoring comparison and checkpoint documentation where release is permitted.
- Evidence about when a proposed intervention persists, transfers, or fails.

## Open Questions

- Which changes can internal measurements detect earlier or more reliably than behavioral tests?
- When does domain-specific training change behavior in unrelated settings?

## Ways to Help

- Offer checkpoint access or a reproducible small-scale training setup with clear release permissions.
- Design controlled training comparisons or independent held-out evaluations.
- Test whether an existing persona or feature method adds predictive value over behavioral monitoring.

## Public Claim Boundary

These are proposed training studies, not completed Fide training results. Behavioral dispositions are operational patterns rather than proof of human-like character or subjective motives. Findings from a particular post-training setup cannot establish universal effects of pretraining or alignment.

## Program Map

[Mechanisms of Trustworthy AI Behavior](../research/mechanisms-of-trustworthy-ai-behavior.md) connects these proposed studies, related work, and collaboration paths.
