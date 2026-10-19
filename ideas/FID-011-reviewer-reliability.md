# FID-011: Reviewer Reliability for Faith-Facing AI Evaluation

Status: `scoping`

Primary area: `evaluation-science`

Additional areas: `faith-religious-life`

Application domains: `faith-and-religious-life`

Primary need: statistics, reviewer operations

[Start a call discussion / offer to help](https://github.com/FideAI/fide-research/issues/new?template=call-discussion.yml&title=Discussion%3A+FID-011+%E2%80%94+Reviewer+Reliability+for+Faith-Facing+AI+Evaluation&call=FID-011%0ABrief%3A+https%3A%2F%2Fgithub.com%2FFideAI%2Ffide-research%2Fblob%2Fmain%2Fideas%2FFID-011-reviewer-reliability.md%0AExisting+threads%3A+https%3A%2F%2Fgithub.com%2FFideAI%2Ffide-research%2Fissues%3Fq%3Dis%253Aissue%2B%2522FID-011%2522%2Bin%253Atitle) · [Check existing threads](https://github.com/FideAI/fide-research/issues?q=is%3Aissue+%22FID-011%22+in%3Atitle)

## Question

What reviewer configurations produce reliable, fair, and interpretable scores for
faith-facing AI outputs?

## Why It Matters

Faith-facing evaluation depends on expert judgment, but expert disagreement is
real. Fide AI needs to know when scores reflect stable constructs and when they
reflect reviewer background, tradition, strictness, or rubric ambiguity.

## Hypothesis

Reliability will vary by dimension. Factual source-grounding may show higher
agreement than pastoral tone, theological judgment, or pluralism handling.
Reviewer training and adjudication should improve reliability but may not solve
tradition-bound disagreement.

## Proposed Method

- Compare expert, trained non-expert, and model-judge scoring.
- Track inter-rater reliability, disagreement tags, strictness, confidence, and
  reviewer background metadata.
- Test rubric revisions on high-disagreement items.
- Assign overlapping items to reviewers and preserve pre-adjudication ratings; analyze
  criterion-level disagreement, severity sensitivity, ranking stability, and annotation
  time by task and qualification.
- Recalibrate on bridge cases after rubric, source, scenario, or model-judge updates,
  keeping old and new scoring versions inspectable.

## Needed Controls

- Reviewer conflict-of-interest checks.
- Blind model labels.
- Balanced scenario sampling.
- Public/private separation for reviewer metadata.
- Do not treat simulated expert personas as qualified human reviewers, or shared
  denominational identity as proof of expertise.
- Distinguish legitimate theological pluralism from ambiguous criteria and inconsistent
  scoring; reliability is not sufficient evidence of validity.

## Outputs

- Reviewer reliability report.
- Reviewer training protocol.
- Adjudication policy.
- Acceptable-evidence thresholds for public claims.

## Open Questions

- What reliability metric best fits mixed categorical and continuous rubrics?
- How many reviewers are needed per high-stakes item?
- When should disagreement be published rather than collapsed into a score?

## Ways to Help

- Design reliability analysis.
- Build reviewer assignment tooling.
- Serve as reviewer or adjudicator.
- Audit rubric wording.

## Public Claim Boundary

This work validates reviewer process quality. It does not by itself validate any
particular model or product.

## Program Map

See the [FMG-Bench faith evaluation program](../research/faith-evaluation-and-fmg-bench.md) for shared methods, related calls, and evidence boundaries.
