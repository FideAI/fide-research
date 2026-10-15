# FID-101: Does Seeing Inside a Model Help People Judge It?

Status: `ready-for-collaboration`

Primary area: `evaluation-science`

Additional areas: `human-agency-formation`, `agent-alignment`

Application domains: `cross-domain`

Primary need: mechanistic interpretability, independent auditing, calibration, human-computer interaction

## Question

Does evidence about a model's internal workings improve predictions of failure and decisions about when to rely on it, beyond strong behavioral testing alone?

## Why It Matters

An internal explanation can sound convincing without helping an evaluator make a better decision. Measuring its practical value connects mechanistic research to both reliable development and informed public judgment.

## Hypothesis

Internal evidence may improve some audit decisions, but the benefit depends on the method, task, and evaluator. No improvement over equally resourced behavioral investigation, or greater false reassurance, would count against its usefulness in the tested setting.

## Proposed Method

- Start with a reproducible technical audit comparing behavior-only access, behavior plus internal evidence, and additional behavioral testing with comparable resources.
- Preregister held-out outcomes and scoring rules. Include known injected failures as positive controls and separately evaluate naturally arising failures.
- Compare internal evidence formats, including bounded causal findings and descriptive activation readouts. Keep explanation length and access conditions explicit.
- Measure failure prediction, probability calibration, false reassurance, false alarms, time, and decision quality. Report sensitivity to the resource-matching choice.
- After validating the technical task, test qualified human auditors with an appropriate participant protocol. Studies of public users are a separate stage requiring their own design and review.

## Needed Controls

- Use capable behavioral baselines and held-out ground truth; do not treat an attractive model-generated explanation as the answer key.
- Blind evaluators to the favored explanation and separate discovery cases from test cases. Assess whether explanations merely repeat evidence already visible in the transcript.
- Do not generalize from deliberately injected failures to all deployment failures, or from agent evaluators to human auditors.
- Report uncertainty, null results, and harms to calibration. Distinguish predictive value, causal understanding, and user confidence.

## Relationship to Existing Ideas

Provides a shared evaluation for FID-097 through FID-100 and connects to FID-078 on evaluation transfer and FID-079 on evaluator judgment. It evaluates the usefulness of internal evidence rather than assuming interpretability is sufficient for trust.

## Outputs

- A reproducible comparison of audit methods with calibrated predictions and resource accounting.
- An evidence-card format reporting the behavior studied, model version, intervention evidence, tested scope, failures, and uncertainty.
- A human-auditor study protocol, and results only if that separately approved study is conducted.

## Open Questions

- When is internal access worth more than spending the same effort on additional behavioral tests?
- Which explanations improve decisions without encouraging overreliance?

## Ways to Help

- Reproduce a bounded audit comparison or contribute a stronger behavioral baseline.
- Provide independently checkable cases, audit expertise, or calibration analysis.
- Help design and review the later human-auditor study and evidence presentation.

## Public Claim Boundary

This call does not establish that interpretability improves auditing or public decisions. Technical evaluation results do not establish human benefit. No feature label, evidence card, or aggregate score certifies general trustworthiness, moral character, consciousness, or deployment readiness.

## Program Map

[Mechanisms of Trustworthy AI Behavior](../research/mechanisms-of-trustworthy-ai-behavior.md) connects these proposed studies, related work, and collaboration paths.
