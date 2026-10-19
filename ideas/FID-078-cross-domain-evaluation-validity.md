# FID-078: When Trustworthiness Evaluations Transfer Across Domains

Status: `seed`

Primary area: `evaluation-science`

Additional areas: `high-trust-domains`

Application domains: `cross-domain`

Primary need: measurement science, psychometrics, domain review, evaluation engineering

[Start a call discussion / offer to help](https://github.com/FideAI/fide-research/issues/new?template=call-discussion.yml&title=Discussion%3A+FID-078+%E2%80%94+When+Trustworthiness+Evaluations+Transfer+Across+Domains&call=FID-078%0ABrief%3A+https%3A%2F%2Fgithub.com%2FFideAI%2Ffide-research%2Fblob%2Fmain%2Fideas%2FFID-078-cross-domain-evaluation-validity.md%0AExisting+threads%3A+https%3A%2F%2Fgithub.com%2FFideAI%2Ffide-research%2Fissues%3Fq%3Dis%253Aissue%2B%2522FID-078%2522%2Bin%253Atitle) · [Check existing threads](https://github.com/FideAI/fide-research/issues?q=is%3Aissue+%22FID-078%22+in%3Atitle)

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

- Measurement researchers and domain practitioners to define and challenge constructs.
- Engineers to implement held-out evaluation and reproducibility checks.

## Public Claim Boundary

This seed call does not claim a universal trustworthiness score. Transfer must be
demonstrated for specific constructs, systems, and settings.
