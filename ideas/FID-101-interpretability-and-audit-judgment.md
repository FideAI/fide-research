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

Internal evidence may improve some audit decisions, but the benefit depends on the method, task, and evaluator. A sufficiently precise finding of negligible benefit over comparably resourced behavioral investigation, or greater false reassurance, would count against its usefulness in the tested setting. An underpowered or imprecise result would remain inconclusive.

## Proposed Method

- Start with a reproducible technical audit comparing behavior-only access, behavior plus internal evidence, and additional behavioral testing with comparable resources.
- Preregister held-out outcomes, scoring rules, a smallest practically meaningful benefit, and a sample-size or precision rationale. Include known injected failures as positive controls and separately evaluate naturally arising failures.
- Compare internal evidence formats, including bounded causal findings and descriptive activation readouts. Keep explanation length and access conditions explicit.
- Measure failure prediction, probability calibration, false reassurance, false alarms, time, and decision quality. Report sensitivity to the resource-matching choice.
- After validating the technical task, test qualified human auditors with an appropriate participant protocol. Studies of public users are a separate stage requiring their own design and review.
- Within the internal-access condition, compare direct neuron and circuit investigation, extracted features, and simpler probes on the same model and cases where feasible. Record model access, analyst time, inference costs, method-training costs, and how reusable setup costs are allocated.
- Lock an explanation and its predicted failures before testing held-out behavior. Separately score causal-intervention predictions, choice of remedy, and reliance decisions; measure discovery value separately from claims of practical audit benefit.

## Needed Controls

- Use capable behavioral baselines and held-out ground truth; do not treat an attractive model-generated explanation as the answer key.
- Blind evaluators to the favored explanation and separate discovery cases from test cases. Assess whether explanations merely repeat evidence already visible in the transcript.
- Do not generalize from deliberately injected failures to all deployment failures, or from agent evaluators to human auditors.
- Report uncertainty, null results, and harms to calibration. Distinguish absence of demonstrated benefit from evidence ruling out a meaningful benefit. Distinguish predictive value, causal understanding, and user confidence.
- Give methods equivalent case information apart from the intended difference in internal access, and competent implementation effort. Explanations must face plausible alternatives and counterexamples, not only examples selected to illustrate them.
- Do not reward the number of labeled neurons or the visual appeal of a graph as evidence of safer behavior. A useful negative result may identify where a readable mechanism fails to predict a consequential action.

## Relationship to Existing Ideas

Provides a shared evaluation for FID-097 through FID-100 and connects to FID-078 on evaluation transfer and FID-079 on evaluator judgment. It evaluates the usefulness of internal evidence rather than assuming interpretability is sufficient for trust.

## Outputs

- A reproducible comparison of audit methods with calibrated predictions and resource accounting.
- An evidence-card format reporting the behavior studied, model version, intervention evidence, tested scope, failures, and uncertainty.
- A human-auditor study protocol, and results only if that separately approved study is conducted.
- A comparison record preserving source revisions, model and tool versions, competing explanations, prospective predictions, intervention trade-offs, and replication outcomes.

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
