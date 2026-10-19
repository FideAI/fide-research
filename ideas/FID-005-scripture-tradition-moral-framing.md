# FID-005: Scripture, Tradition, and Moral-Framing Interventions

Status: `seed`

Primary area: `grounding-truthfulness`

Additional areas: `faith-religious-life`

Application domains: `faith-and-religious-life`

Primary need: eval design, replication

[Join the discussion / offer to help](https://github.com/FideAI/fide-research/issues/31) · [Check existing threads](https://github.com/FideAI/fide-research/issues?q=is%3Aissue+%22FID-005%22+in%3Atitle)

## Question

Do Scripture, sacred tradition, religious identity, familial embeddedness, or
other morally thick framings measurably change model behavior in faith-facing
tasks, and can those effects be separated from style, length, familiarity, and
response-bias artifacts?

## Why It Matters

Recent Christian machine intelligence research suggests that theological texts
and identity framings can sometimes shift model moral behavior. Fide AI can
contribute by independently replicating, stress-testing, and extending these
claims with stronger public-interest controls and broader traditions.

## Hypothesis

Some religious framings may alter model behavior in measurable ways, but effects
will be model-, task-, and context-dependent. Many apparent gains may collapse
under label balancing, matched controls, or deployment-like harness testing.

## Proposed Method

- Replicate selected scripture-injection and moral-framing studies.
- Add length-matched, style-matched, secular, and shuffled-label controls.
- Test across model families, current endpoints, and faith-facing tasks.
- Extend beyond one canon or translation where appropriate.
- Evaluate whether a framing improves warranted practical guidance in relationships,
  vocation, grief, and ordinary moral decisions, alongside source fidelity, overrefusal,
  and authority overreach.
- Separate religious framing, verified source access, and bounded-role instructions as
  interventions; hold model and budget fixed and test unseen case families.

## Needed Controls

- Label balancing and position-bias checks.
- Matched controls for text length, register, familiarity, and emotional valence.
- Pre-registered hypotheses.
- Clear distinction between base-model behavior and deployed product behavior.
- Report mixed or null effects and tradeoffs across accuracy, usefulness, certainty, and
  agency; religious language or user agreement is not evidence of better guidance.

## Outputs

- Replication report.
- Open prompt/control set where release-safe.
- Guidance on when religious prompt interventions are meaningful or misleading.

## Open Questions

- Which effects survive model updates?
- Are improvements genuine reasoning improvements or output-style changes?
- Can interventions improve safety without increasing false authority?

## Ways to Help

- Contribute replication protocols.
- Help design controls.
- Provide theological review for tradition-specific framing.
- Run model comparisons through the Fide platform.

## Public Claim Boundary

Even positive effects would not prove that a model has religious understanding,
spiritual authority, or pastoral competence.

## Program Map

See the [FMG-Bench faith evaluation program](../research/faith-evaluation-and-fmg-bench.md) for shared methods, related calls, and evidence boundaries.
