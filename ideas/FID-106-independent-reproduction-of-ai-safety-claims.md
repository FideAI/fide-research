# FID-106: Can Independent Reviewers Reproduce a Specific AI Safety Claim?

Status: `seed`

Primary area: `evaluation-science`

Additional areas: `grounding-truthfulness`, `governance-readiness`

Application domains: `cross-domain`, `cybersecurity`, `faith-and-religious-life`

Primary need: reproducibility methods, evaluation engineering, artifact stewardship, and independent review

[Find or create the call discussion](https://github.com/FideAI/fide-research/discussions/categories/research-calls) · [Related tasks](https://github.com/FideAI/fide-research/issues?q=is%3Aissue+is%3Aopen+%22FID-106%22+in%3Atitle)

[Contributor starter project](../research/agenda-starter-projects.md#fid-106)

## Question

What is the smallest public evidence package that lets someone outside the
original research team reproduce a bounded result, identify where the claim
goes beyond that result, or document why reproduction is blocked?

## Why It Matters

A repository can be runnable while an important result remains hard to check.
An aggregate may be reproducible from saved judgments even though those
judgments have no independent validation. Model access and dependency changes
can prevent rerunning the original collection. A claim-level handoff can make
the boundary visible and give a contributor a tractable starting point.

## Hypothesis

An evidence packet that maps one claim to versioned inputs, exact procedures,
expected outputs, and known access limits will improve verification under a
fixed time budget compared with the released documentation alone. It may add
little when the existing artifact already meets a strong reproducibility
standard.

## Proposed Method

- Freeze a specific claim, artifact revision, data scope, acceptable numeric
  tolerance, and time budget before opening the task. Start with one offline
  aggregate from Fide's released DSEWiki investigation and one independently
  authored, rights-cleared comparison artifact. Include a blocked or stale
  dependency case when it can be tested without private access.
- Compare the release documentation with that documentation plus a short claim
  handoff. The handoff specifies the versioned inputs, entry point, output
  location, known exclusions and expected result or check. Use separate
  reviewers or counterbalanced matched tasks to limit learning across conditions.
- Record whether a reviewer can recompute the analysis, rerun the original
  collection, or repeat the test on independently assembled cases. Track time,
  author assistance, material discrepancies, and whether the reason for an
  inconclusive or blocked check can itself be reproduced.
- Let a separate reviewer verify the disposition. Preserve corrections and
  document whether the problem is missing evidence, execution, arithmetic,
  adjudication, or a conclusion the available artifact cannot support.

## Needed Controls

- Benchmark against established artifact-review criteria. Treat local Fide
  materials as self-audit cases and distinguish them from independent review.
- Use pinned, rights-cleared inputs, isolated execution, and bounded resources.
  Record version drift, missing access and exclusions. Preserve a supported
  finding of non-reproduction, with uncertainty about the cause where appropriate.
- Separate recomputing a statistic from validating its labels, recreating
  model outputs, and testing generalization on new evidence.

## Relationship to Existing Ideas

FID-078 studies validity and transfer of an evaluation. FID-077 studies the
evidence needed to reconstruct an incident. This call studies the practical
handoff of a published result to an outside verifier. FID-107 asks how to
present such a verification task to contributors.

## Outputs

- A claim handoff and one independent reproduction record with exact scope.
- A comparison of completion, cost, and blockers under the two documentation conditions.
- Reusable examples of how to communicate reproduced, discrepant, and blocked results.

## Open Questions

- Which missing fields cause enough delay or ambiguity to justify maintaining them?
- Which verification steps remain useful when a model or dataset is restricted?
- How can authors distinguish corrections to the documentation from changes to the result?

## Ways to Help

- Spend 30–60 minutes recomputing one published DSEWiki aggregate from the
  pinned public release. Return the revision, Python version, command, counts
  or exact blocker, and which judgments were held fixed.
- Review an underlying judgment or propose a comparable artifact from another team.

## Public Claim Boundary

A successful check supports only the reproduced part of the claim under the
recorded conditions. This project grants no reproducibility badge or assurance
about the underlying model, benchmark, or institution.
