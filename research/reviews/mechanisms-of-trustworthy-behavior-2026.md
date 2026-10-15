# Mechanisms of trustworthy behavior: selected research

Reviewed October 15, 2026. Targeted source review for FID-097 through FID-101,
not an exhaustive literature review or independent reproduction. Research
reports and preprints retain the status of their original sources.

| Source | What it contributes | Implication and limit for these calls |
|---|---|---|
| [Persona vectors](https://www.anthropic.com/research/persona-vectors), Anthropic, 2025 | Investigates directions associated with behavioral traits and interventions during inference and training. | A baseline for FID-098 and FID-099; an operational trait is not a universal moral character. |
| [Persona Features Control Emergent Misalignment](https://arxiv.org/abs/2506.19823), 2025 | Investigates persona-related mechanisms associated with broad behavioral shifts after narrow fine-tuning. | Motivates controlled training comparisons in FID-099; does not establish one cause for every alignment failure. |
| [The Assistant Axis](https://www.anthropic.com/research/assistant-axis), 2026 | Studies persona stability and activation interventions in selected open models. | Relevant to FID-098 and existing FID-072; assistant-role stability is distinct from truthfulness or moral competence. See the [existing review](anthropic-assistant-axis-2026.md). |
| [Tracing Moral Foundations in Large Language Models](https://arxiv.org/html/2601.05437v1), 2026 preprint | Uses Moral Foundations Theory, concept directions, sparse autoencoders, and steering in two models. | Direct prior work for FID-098. Questionnaire effects, English-centric data, framework dependence, feature-label validity, and incompletely tested side effects limit generalization. |
| [Circuit Tracing](https://transformer-circuits.pub/2025/attribution-graphs/methods.html), 2025 | Proposes computational graphs for investigating model behavior. | A candidate method for FID-097 and FID-100; missing computation and reconstruction errors mean graphs require validation. |
| [AuditBench](https://alignment.anthropic.com/2026/auditbench/), 2026 | Compares audit methods on models with introduced hidden behaviors. | Motivates strong black-box baselines for FID-101; method and setup affect performance, and introduced behaviors do not represent all natural failures. |
| [CHIVE](https://alignment.anthropic.com/2026/chive/), 2026 | Tests whether activation-reading tools improve predictions of counterfactual behavior; reports no uplift in its tested setting. | FID-101 should measure decision value rather than assume it. This result does not settle the value of every interpretability method or audit setting. |

The review inspected the primary research reports and the moral-foundations
paper's methods and limitations. It did not rerun experiments or establish
that reported mechanisms transfer to Fide tasks. The emergent-misalignment
entry also draws on the authors' [research overview](https://openai.com/index/emergent-misalignment/).

The causal-mediation perspective in [The Quest for the Right Mediator](https://aclanthology.org/2026.cl-1.10/)
helps distinguish observations from intervention-based claims. For behavioral
targets, [MoReBench](https://arxiv.org/abs/2510.16380) offers procedural and
pluralistic moral-reasoning criteria. Its visible reasoning evaluations do not
by themselves reveal the model's internal process. The source registry retains
the review depth recorded for each entry.
