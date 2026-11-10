# FID-103: When Does AI-Assisted Review Miss Shared Blind Spots?

Status: `seed`

Primary area: `evaluation-science`

Additional areas: `grounding-truthfulness`, `agent-alignment`

Application domains: `cross-domain`, `faith-and-religious-life`, `workplace-and-enterprise`

Primary need: scalable oversight, measurement science, reviewer study design, and source adjudication

[Find or create the call discussion](https://github.com/FideAI/fide-research/discussions/categories/research-calls) · [Related tasks](https://github.com/FideAI/fide-research/issues?q=is%3Aissue+is%3Aopen+%22FID-103%22+in%3Atitle)

[Contributor starter project](../research/agenda-starter-projects.md#fid-103)

## Question

When an AI system and its reviewers rely on the same mistaken premise, which
review procedure helps an accountable reviewer catch the error before accepting
a consequential answer or recommendation?

## Why It Matters

Several reviewers can agree because they use the same source, inherit the same
assumption, or see the same persuasive framing. A second opinion can help when
it brings independent evidence. It can also reinforce a mistake. An institution
needs to know when to ask for an independent check and when to defer the decision
because the necessary evidence is unavailable.

## Hypothesis

Reviewers who make an initial assessment and can inspect independently selected
source evidence will catch more shared errors than reviewers who receive a second
judgment based on the same evidence. Structured disagreement may help on genuinely
ambiguous cases. It may also cost review time or make correct answers harder to
accept.

## Proposed Method

- Start with a small adjudicated set of source or authorization decisions with
  known outcomes. Include correct recommendations, a shared but false premise,
  one source that contradicts the consensus, and cases where the record is
  insufficient. Use public or synthetic sources and two reviewers to qualify
  the reference labels.
- Compare direct review, a second judgment with the same source access,
  structured disagreement or collaborative review, and a source check based on
  an independently assembled evidence set. Hold review time and configurations
  comparable. Give direct and structured review the same additional source in a
  matched comparison to separate the effect of evidence access from the protocol.
- Measure acceptance of known errors, unnecessary rejection of correct answers,
  warranted deferral, citation to decisive evidence, and cost. Report reviewer
  agreement separately. Use automated and scripted checks to qualify the
  instrument before any separately reviewed participant study.

## Needed Controls

- Vary shared evidence and shared prior assumptions separately. Record model
  versions, reviewer qualifications, information access, and what is genuinely
  independent about each check.
- Balance plausible but false claims with plausible true claims and insufficient
  evidence. Score only claims the reference sources can adjudicate. Preserve
  legitimate theological or institutional disagreement as a distinct outcome.
- Compare established debate or collaborative disagreement methods against a
  strong source-first baseline. Keep held-out cases outside protocol tuning.

## Relationship to Existing Ideas

FID-011 measures reviewer reliability, and FID-079 tests the effect of disclosing
assumptions. This call tests whether a review procedure detects a known error
that multiple reviewers might share. FID-064 concerns collective judgment in
communities, and FID-101 studies the incremental value of model internals.

## Outputs

- A small source-backed casebook and a matched review protocol.
- A comparison of false acceptance, deferral, and review cost under shared errors.
- A guide to when a second reviewer needs different evidence or expertise.

## Open Questions

- Which failures can be caught by independent source access alone?
- When does structured disagreement improve decisions enough to justify the cost?
- How should the procedure handle disagreement that no available source can resolve?

## Ways to Help

- Draft one source-conflict case in 1–2 hours. Use the UK AISI oversight
  agenda and the collaborative disagreement paper. Return an adjudicable
  shared error, a matched correct case, and a case with missing evidence.
- Review the authority labels or build a matched structured-disagreement baseline.

## Public Claim Boundary

This study would support conclusions about specified review procedures and
checkable tasks. It does not establish that human oversight scales to decisions
for which people cannot obtain independent evidence.
