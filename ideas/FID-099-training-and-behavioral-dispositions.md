# FID-099: How Does Training Shape Behavioral Dispositions?

Status: `ready-for-collaboration`

Primary area: `agent-alignment`

Additional areas: `frontier-capabilities`, `grounding-truthfulness`, `evaluation-science`

Application domains: `cross-domain`

Primary need: mechanistic interpretability, controlled training, checkpoint access, behavioral evaluation

[Join the discussion / offer to help](https://github.com/FideAI/fide-research/discussions/225) · [Related tasks](https://github.com/FideAI/fide-research/issues?q=is%3Aissue+is%3Aopen+%22FID-099%22+in%3Atitle)

[View starter project](../research/agenda-starter-projects.md#fid-099)

## Question

How do training data and objectives change persistent patterns such as truthfulness, agreement-seeking, overconfidence, and respect for human agency, including outside the trained task?

## Why It Matters

Better task performance can coexist with unwanted changes elsewhere. Connecting training changes to internal mechanisms and held-out behavior could help builders detect and prevent those changes before deployment.

## Hypothesis

Some broad behavioral shifts can be traced to changes in shared representations and mitigated through targeted training interventions. A correlation across checkpoints alone does not establish mediation through a representation. A separate practical hypothesis is that internal signals anticipate held-out changes earlier or more accurately than behavioral monitoring; failure to add predictive value would limit that monitoring claim without negating a supported causal finding.

## Proposed Method

- Begin with accessible checkpoints and controlled post-training experiments. Hold data volume, task distribution, and optimization settings constant where possible while varying one proposed cause of change.
- Measure behavior and candidate representations at multiple checkpoints. Compare simple behavioral monitoring, persona-vector methods, and more detailed mechanistic analysis. Vary relevant facts separately from irrelevant pressure; define stability through appropriate responsiveness rather than repeated answers. For moral tasks, state the normative account used to predict these dependencies.
- Follow candidate native circuits and their inputs and outputs across training checkpoints, alongside vector-based measurements. Test whether a change reuses existing computations, changes their connections, or introduces a new influence; do not assume every behavior has one trait direction.
- Compare mechanism-informed data or objective changes with ordinary data cleanup and inference-time steering. Preserve strong baselines and explicit compute accounting. Hold an independent behavioral test set outside all optimization. Separate effects while steering is enabled from persistent changes after it is removed; test unseen topics and multi-turn pressure.
- Repeat across seeds and another model family. Extend to pretraining checkpoints only where access permits an informative comparison.
- Compare matched checkpoints on one benign task where a specified behavior
  can advance either the task or an irrelevant proxy score. Change what the
  model has reason to expect about which behavior earns the proxy while holding
  the actual task and permissions fixed. Include a matched factual change with
  no reward implications and a plain instruction condition. If using a
  weight-level belief intervention, qualify the intended belief change and test
  for off-target loss of task, tool-use, or instruction-following competence.
  Report behavior conditional on the intervention separately from evidence
  about a persistent training-induced disposition.

## Needed Controls

- Separate trait-discovery data, intervention tuning, and final evaluation. Avoid training on the same wording used to define the trait.
- Track useful capability, overrefusal, calibration, and changes to other dispositions; gains on one target must not conceal losses elsewhere. For permission-sensitive tasks, pair unauthorized and authorized actions. For moral conflicts, test whether an outweighed consideration still constrains scope or timing under the stated account. Increased refusal or stronger trait activation alone is not an improvement.
- Distinguish controlled effects of training changes from causal mediation through a specific representation. Record access limits and alternative explanations.
- Report failed predictions, null interventions, resource costs, and uncertainty, including variation across seeds.
- Record the training method, intervention timing, seeds, and checkpoint correspondence assumptions. A direction that changes inference behavior need not have the same effect when intervened on during training; compare predictions with matched random interventions.
- Keep the explanation or monitor used for discovery distinct from independent outcomes used to judge improvement. Lock predictions before held-out checkpoint evaluation. Report headline task gains separately from changes in scope, permissions, or other task-specific constraints, including cases where the headline choice stays unchanged. Neither a favorable internal readout nor a better average score establishes that these distinctions survived training.

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

- Draft a reward-expectation comparison and checkpoint-access check in 1–2 hours, including manipulation checks and off-target competence controls.
- Offer checkpoint access or a reproducible small-scale training setup with clear release permissions.
- Design controlled training comparisons or independent held-out evaluations.
- Test whether an existing persona or feature method adds predictive value over behavioral monitoring.

## Public Claim Boundary

These are proposed training studies, not completed Fide training results. Behavioral dispositions are operational patterns rather than proof of human-like character or subjective motives. Findings from a particular post-training setup cannot establish universal effects of pretraining or alignment.

## Program Map

[Mechanisms of Trustworthy AI Behavior](../research/mechanisms-of-trustworthy-ai-behavior.md) connects these proposed studies, related work, and collaboration paths.
