# FID-078: When Trustworthiness Evaluations Transfer Across Domains

Status: `seed`

Primary area: `evaluation-science`

Additional areas: `high-trust-domains`

Application domains: `cross-domain`

Primary need: measurement science, psychometrics, domain review, evaluation engineering

[Join the discussion / offer to help](https://github.com/FideAI/fide-research/discussions/204) · [Related tasks](https://github.com/FideAI/fide-research/issues?q=is%3Aissue+is%3Aopen+%22FID-078%22+in%3Atitle)

[View starter project](../research/agenda-starter-projects.md#fid-078)

## Question

Which measures of evidence use, authority boundaries, and human control transfer across
high-trust domains, and which require domain-specific definitions and calibration?

## Why It Matters

A shared vocabulary can organize research without making a score portable. A method that
performs well in one setting may reward the wrong behavior in another because the
sources, decisions, duties, and consequences differ.

## Hypothesis

Shared task structures with domain-calibrated rubrics will transfer more reliably than
unchanged generic rubrics. The study should also test whether apparently shared
constructs fail to support comparison at all.

## Proposed Method

- Choose one decision about whether to expand, hold, or revalidate a narrowly
  specified AI workflow. Freeze the original evaluation and select one endpoint
  that an independent reviewer can adjudicate from observed actions and outcomes.
  Use paired synthetic or authorized replay cases that preserve the underlying
  obligation while varying a deployment-relevant factor such as permissions, task
  sequence, source availability, or model version. Compare the original score and
  a workflow-based score against a simple baseline. Report missed severe failures,
  false alarms, uncertainty, and decision changes at a threshold set in advance.
  A synthetic pilot tests transfer to the specified replay. A claim about deployment
  requires separately obtained evidence from that setting.
- Co-design matched task families in at least three settings with different authority
  structures. Start with synthetic cases and identify the intended decision each measure
  supports.
- Compare generic rubrics, adapted rubrics, and independent expert judgment across the
  same systems. Hold out one domain during method development.
- Estimate inter-rater reliability, construct validity, rank stability, subgroup error,
  and uncertainty. Test whether scores predict separately assessed workflow failures
  rather than merely correlating with another judge.

## Needed Controls

- Pre-register constructs, adaptations, exclusion criteria, and transfer claims.
  Separate task difficulty from domain effects.
- Disclose normative assumptions and expert-panel composition; preserve substantive
  disagreement instead of averaging it away.
- Control for benchmark leakage, model-judge dependence, and unequal access to relevant
  sources. Publish failed transfers.

## Relationship to Existing Ideas

Builds on FID-044's cross-faith validity question without replacing it. Provides shared
validation methods for FID-075 and FID-080 through FID-086.

## Outputs

- A transfer-validation protocol and openly licensed safe task examples.
- A map of shared measures, domain-specific requirements, and unsupported comparisons.

## Open Questions

- What evidence justifies combining domain results into a common scale?
- Which forms of expert disagreement reveal a construct problem rather than annotation
  noise?

## Ways to Help

- Specify a bounded replay transfer test in 1–2 hours, with held-out cases, independent outcomes, a fixed threshold, and a simple permission-check baseline.
- Measurement researchers and domain practitioners to define and challenge constructs.
- Engineers to implement held-out evaluation and reproducibility checks.

## Public Claim Boundary

This seed call does not claim a universal trustworthiness score. Transfer must be
demonstrated for specific constructs, systems, and settings.
