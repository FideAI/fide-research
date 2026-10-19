# FID-002: Validating Human and AI Judgments of Faith-Facing Systems

Status: `active`

Primary area: `evaluation-science`

Additional areas: `faith-religious-life`

Application domains: `faith-and-religious-life`

Primary need: expert reviewers, statistics

[Join the discussion / offer to help](https://github.com/FideAI/fide-research/issues/28) · [Check existing threads](https://github.com/FideAI/fide-research/issues?q=is%3Aissue+%22FID-002%22+in%3Atitle)

## Question

Can qualified human reviewers reliably judge theological accuracy, useful faith
application, and care-sensitive behavior in faith-facing AI systems? Where do
automated judges diverge on source use, legitimate disagreement, practical
guidance, human agency, and pastoral or clinical boundaries?

## Why It Matters

Benchmarks are easy to publish and hard to validate. Fide AI should not rely on
synthetic judges or aggregate scores unless it knows which dimensions are
reliable enough to guide deployment, procurement, or public claims.

## Hypothesis

Some dimensions will be reliable enough for decision support, while others will
require narrower rubrics, more reviewer training, or removal from high-stakes
claims.

## Proposed Method

- Recruit a small calibrated reviewer panel.
- Score a stratified subset of outputs from Fide AI's published faith-facing
  evaluation, FMG-Bench.
- Measure inter-rater reliability, judge-human disagreement, strictness/leniency,
  failure-tag consistency, and disagreement concentration by scenario type.
- Compare expert review, trained non-expert review, and model judge scores where
  feasible.
- Sample theological accuracy, useful faith application, and care-sensitive dialogue
  separately; match source/tradition, pastoral, and clinical expertise to the judgment
  being requested.
- Compare atomic rubric scoring, counterbalanced blind pairwise judgments, and a hybrid
  on overlapping outputs. Include concise accurate, fluent inaccurate, overrefusing, and
  appropriately helpful reference responses.
- Audit automated graders on held-out case families, including omitted criteria,
  contradictory answers, style/length bias, severe failures, and legitimate
  disagreement.

## Needed Controls

- Reviewer conflict checks.
- Blind model/system labels where practical.
- Rubric versioning.
- Adjudication protocol for high-disagreement items.
- Public/private separation for sensitive notes.
- Preregister intended decisions, primary endpoints, severity rules, and acceptable
  grader error/reviewer agreement before confirmatory comparisons.
- Preserve independent judgments before adjudication; distinguish factual error,
  within-tradition misrepresentation, legitimate disagreement, insufficient context, and
  care-boundary failure.
- Estimate uncertainty at the scenario-family level; criteria, perturbations, and
  repeated calls are not independent scenarios. Narrow dimensions that cannot support
  the intended claim.

## Outputs

- Calibration report.
- Reviewer protocol.
- Updated guidance for faith-facing evaluation rubrics.
- Evidence map classifying dimensions as decision-relevant, conditional, or not
  yet validated.
- Track-specific validity and grader-error report, with ranking sensitivity and explicit
  conditions for withholding comparative claims.

## Open Questions

- What minimum reliability threshold should Fide require for public claims?
- How should theological tradition metadata be represented without tokenizing
  reviewers?
- Which disagreement patterns are legitimate pluralism rather than rubric
  failure?

## Ways to Help

- Serve as an expert reviewer.
- Review scoring rubrics.
- Help with reliability analysis.
- Build annotation and adjudication tooling.

## Public Claim Boundary

Calibration can validate specific dimensions, reviewer protocols, and use cases.
It cannot establish that one benchmark fully measures theological or pastoral
quality, or that a system is trustworthy across faith settings.

## Program Map

See the [FMG-Bench faith evaluation program](../research/faith-evaluation-and-fmg-bench.md) for shared methods, related calls, and evidence boundaries.
