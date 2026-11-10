# FID-105: When Do Safety Evaluations Change Deployment Decisions?

Status: `seed`

Primary area: `governance-readiness`

Additional areas: `evaluation-science`, `frontier-capabilities`

Application domains: `cross-domain`, `cybersecurity`, `public-sector-and-civic-life`

Primary need: technical governance, case study methods, evaluation policy, and independent evidence review

[Find or create the call discussion](https://github.com/FideAI/fide-research/discussions/categories/research-calls) · [Related tasks](https://github.com/FideAI/fide-research/issues?q=is%3Aissue+is%3Aopen+%22FID-105%22+in%3Atitle)

[Contributor starter project](../research/agenda-starter-projects.md#fid-105)

## Question

When a safety evaluation crosses a threshold or leaves consequential uncertainty,
what public evidence shows that the result affected a release, restriction,
mitigation, or decision to gather more evidence?

## Why It Matters

A published score, a commitment to act on a score, and an implemented response
are different records. The decision may also change because of an incident,
a new mitigation, a revised test, or an exception to the policy. Independent
reviewers need a way to reconstruct what happened and to distinguish evidence
that informed the decision from gaps in the public account.

## Hypothesis

A review that links the versioned policy, evaluation, decision owner, action and
follow-up record will distinguish documented influence from coincident timing
more reliably than a review of system cards or threshold tables alone.

## Proposed Method

- Select a small, prespecified set of comparable release decisions from publicly
  documented safety frameworks. Include at least one reported safeguard or
  release change and at least one similar case where the decision evidence is
  incomplete. Preserve the policies and evaluator reports as they applied at
  the time, including later changes as separately dated records.
- Build an evidence table separating a stated trigger, test configuration,
  reported result, authority to act, stated rationale, observed implementation
  and any retest. Distinguish a developer account, independent corroboration,
  and an unknown outcome. Record competing explanations and changes to the
  benchmark or policy.
- Compare independent reviewers' conclusions using a framework or system card
  alone and using the full linked evidence. Score reproducibility of the
  classification and the questions that remain unresolved. Where the public
  evidence allows it, include a counterexample to an apparent score-to-action
  link.

## Needed Controls

- Predefine the sampling frame and include ambiguous and negative cases. Public
  disclosure is selective, so missing evidence cannot establish inaction.
- Distinguish attribution to an evaluation from verified implementation, and
  implementation from effectiveness. Timing or a developer's explanation alone
  cannot establish a causal effect or the evaluation's net social value.
- Record when publication of evaluation details may enable replication, gaming
  or capability transfer. Use public, non-sensitive evidence in the first study.

## Relationship to Existing Ideas

FID-078 tests whether an evaluation predicts failure. FID-022 develops evidence
requirements for faith-sector procurement, and FID-077 reconstructs incidents.
This call studies the evidence linking safety evaluations to organizational
decisions and documented follow-through across releases.

## Outputs

- A small sourced casebook and reusable evidence-to-decision record.
- A comparison of which conclusions independent reviewers can reproduce.
- Examples of remaining unknowns that a more informative disclosure or agreed
  access could resolve.

## Open Questions

- Which parts of the decision record can an outside reviewer corroborate?
- How should a reader handle moving thresholds, multiple triggers, and exceptions?
- When can publication increase the decision value of an evaluation without
  revealing sensitive capabilities or test details?

## Ways to Help

- Reconstruct the reported May 2025 Claude Opus 4 safeguard decision in
  1–2 hours. Return a one-page record linking the applicable policy, stated
  rationale, reported action, implementation evidence, and one open question.
- Audit the citations or find independent evidence that would change the classification.

## Public Claim Boundary

This call studies documented decisions under named policies and access conditions.
It does not rank overall provider safety or establish how frequently evaluations
change decisions that are made privately.
