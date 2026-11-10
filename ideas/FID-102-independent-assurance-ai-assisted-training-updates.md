# FID-102: Independent Assurance for AI-Assisted Training Updates

Status: `seed`

Primary area: `frontier-capabilities`

Additional areas: `agent-alignment`, `evaluation-science`

Application domains: `cross-domain`, `cybersecurity`

Primary need: post-training expertise, ML supply-chain security, independent evaluation, and reproducible open-weight experiments

[Find or create the call discussion](https://github.com/FideAI/fide-research/discussions/categories/research-calls) · [Related tasks](https://github.com/FideAI/fide-research/issues?q=is%3Aissue+is%3Aopen+%22FID-102%22+in%3Atitle)

[Contributor starter project](../research/agenda-starter-projects.md#fid-102)

## Question

When an AI system helps prepare training data, graders, or evaluation artifacts for
a model update, which independently checkable evidence supports a decision to
promote the update, hold it for investigation, or restore a previous checkpoint?

## Why It Matters

The team that generates a training change may also generate the evidence used to
approve it. A legitimate update, accidental regression, and deliberate tampering
can all produce an apparently healthy aggregate score. ResearchArena and RSI
Control Arena study sabotage capability and monitor detection in automated AI R&D.
RSI Control Arena also reports a black-box audit of candidate and base models.
Prior work proposes attestation-aware promotion gates and separately tests
paired candidate and incumbent predictions for regression. This call studies the
incremental value of independently checkable lineage and behavioral evidence for
the downstream decision. Can a reviewer with limited access and time identify
which changes require a hold, and can another party reproduce the decision from
the retained evidence?

## Hypothesis

Binding a candidate checkpoint to independently verifiable inputs and testing it
on an evaluator-controlled holdout will catch different failures. The combined
evidence may reduce incorrect promotions at the cost of extra review and some
unnecessary holds. Test whether it adds anything beyond a strong independent
behavioral test, and where any incremental benefit comes from.

## Proposed Method

- Begin with one harmless behavioral regression and a small open-weight update in
  an isolated environment. Reuse a public test fixture if it supports a clean
  promotion comparison. Freeze the last-known-good checkpoint and a ground-truth
  record of each change before assembling the reviewer packet.
- Compare clean updates, benign pipeline changes, accidental regressions, and
  deliberately seeded integrity failures. Use harmless surrogates and retain
  capability or task-utility measurements for each update.
- Compare a conventional promotion review using aggregate scores and routine
  logs, an evidence packet binding data and grader versions to the checkpoint,
  independently controlled behavioral retesting, and the combined condition.
  Reuse an attestation-aware gate and compare paired candidate and incumbent
  outputs where the outcome supports it. Equalize reviewer time where possible
  and record the cost of each check.
- Score incorrect promotions, unnecessary holds, correct uncertainty and
  escalation, time to disposition, residual failures, and whether restoration
  actually recovers the prespecified behavior and utility. Use automated replay
  to qualify the instrument before any separately reviewed human study.

## Needed Controls

- Separate the roles that propose updates, issue evidence, control the holdout,
  and adjudicate outcomes. Test missing or stale evidence and record trust and
  access assumptions. A valid manifest attests to provenance within its trust
  boundary and does not establish behavioral safety.
- Include clean changes that look unusual and integrity failures that leave
  the routine score stable. Hold out update variants and report exact
  denominators, uncertainty, and cases for which evidence is insufficient.
- Keep training and artifacts isolated from live services. Review release of
  cases, code, and derived artifacts before publishing a reproducible safe subset.

## Relationship to Existing Ideas

FID-099 studies how training changes behavior. FID-077 studies evidence sufficiency
for reconstructing an incident. This call asks what suffices for an independent
model-update decision under a potentially compromised evidence chain. FID-012
provides related methods for studying optimization against visible rubrics.

## Outputs

- A synthetic promotion casebook and an evidence-ablation protocol.
- An update record binding artifacts, authority, and independent test evidence
  to the candidate and prior checkpoints.
- A comparison of incorrect promotions, unnecessary holds, and review costs
  with explicit limits and a reproducible safe subset where permitted.

## Open Questions

- When does independent provenance add decision value after strong retesting?
- Which findings persist across model families, training methods, and independent
  reviewers? What can be checked when the training artifacts cannot be shared?

## Ways to Help

- Draft one harmless model-update case in 1–2 hours. Use RSI Control Arena
  and Attesting LLM Pipelines to compare routine logs, lineage, and a holdout.
  Return a one-page decision record for a clean update and a variant that
  should be held.
- Review whether an attestation actually adds decision value beyond behavioral retesting.

## Public Claim Boundary

This seed proposes a bounded test of evidence for model-update decisions. It
provides no estimate of real-world poisoning rates, generalization to frontier
training, or evidence of safe recursive self-improvement.
