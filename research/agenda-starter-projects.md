# Starter projects for FID-102 through FID-107

Each project below offers one small artifact a collaborator can draft or review
using public or synthetic material. The effort ranges are estimates for the
first artifact. Use the [research-task template](../templates/research-task.md)
when a maintainer confirms scope, support, credit, and a review route.

| If you can help with | Start here | First artifact | Suggested effort |
| --- | --- | --- | --- |
| Training, release engineering, or security | [FID-102](#fid-102) | One model-update decision case | 1–2 hours |
| Research methods, source review, or domain expertise | [FID-103](#fid-103) | One independently scorable shared-error case | 1–2 hours |
| Evaluation engineering or benchmark review | [FID-104](#fid-104) | One harmless capability task with failure controls | 1–2 hours |
| Policy, technical writing, or documentary evidence | [FID-105](#fid-105) | One sourced deployment decision record | 1–2 hours |
| Python, data review, or reproducibility | [FID-106](#fid-106) | One offline result check | 30–60 minutes |
| Research coordination, technical writing, or mentoring | [FID-107](#fid-107) | One starter task dry-run and a targeted revision | 30–60 minutes |

Check the **Related tasks** link in the call brief. If a task matches, use that
issue to offer your first output and rough availability. If none matches, use
[Propose a contribution](https://github.com/FideAI/fide-research/issues/new?template=claim-research-idea.yml)
with the call ID, the artifact you want to draft or review, and any support
you need. Each brief also links to its GitHub Discussion for questions,
reading notes, and offers to help. Keep public contributions to shareable
sources and synthetic material. See the
[contributor guide](../CONTRIBUTING.md#find-or-scope-concrete-work).

## FID-102

[Independent Assurance for AI-Assisted Training Updates](../ideas/FID-102-independent-assurance-ai-assisted-training-updates.md)

**Start with the data-curation setting** in RSI Control Arena. Read its task
description and Appendix G on auditing successors. Use Tan et al.'s promotion
gate for a conventional baseline that checks training and release attestations.
[RSI Control Arena v1](https://arxiv.org/html/2610.27735v1#A1) ·
[Attesting LLM Pipelines](https://arxiv.org/abs/2603.28988)

**Draft one model-update case on paper.** A toy curation job should remove
a harmless synthetic category, such as documents tagged `archive-only`.
Define a clean update and a variant in which the aggregate score stays healthy
but the delivered corpus contains the excluded category. Specify what the
producer records, which facts an independent verifier can check, and what
a separate held-out behavior test would add. Use a fictional candidate and
last-known-good checkpoint. This first artifact needs neither model training
nor a real compromised pipeline.

**Done** means a one-page case names the artifacts, expected outcomes, and
what each of routine logs, lineage checks, and independent retesting can
resolve. Give a justified promote or hold decision for each variant and
identify what would have to be checked after rollback. A release engineer
can critique trust assumptions, and an evaluation researcher can challenge
whether the holdout adds useful evidence.

## FID-103

[When Does AI-Assisted Review Miss Shared Blind Spots?](../ideas/FID-103-shared-blind-spots-in-ai-assisted-review.md)

**Start with the systematic human error questions** in the UK AISI agenda and
the comparison between debate and collaborative disagreement resolution.
[UK AISI alignment agenda](https://www.lesswrong.com/posts/tbnw7LbNApvxNLAg8/uk-aisi-s-alignment-team-research-agenda) ·
[Collaborative Disagreement Resolution](https://proceedings.mlr.press/v306/jiang26d.html)

**Write one adjudicable source-conflict case.** In a fictional institution,
two reviews approve an action because both cite an older policy. A newer
version changes who may approve the action. Write the recommendation, both
policy excerpts, their effective dates, and an adjudication note. Include a
matched control in which the older policy actually governs and a version in
which the decisive record is missing. An existing public case with equivalent
evidence is also suitable.

**Done** means a second reviewer can use the cited clause and date to decide
whether to accept, reject, or defer each variant. Specify what direct review
and structured review see under the same evidence access. Then specify what
changes when either gets the independently assembled evidence. A domain expert
can check authority and timing, and a methods reviewer can check for unintended
hints or ambiguity.

## FID-104

[What Can a Negative Capability Evaluation Establish?](../ideas/FID-104-interpreting-negative-capability-evaluations.md)

**Start with METR's guidance on spurious failures and elicitation effort.**
The Inspect tool documentation is optional if you want to make an executable
fixture. [METR elicitation guidelines](https://metr.org/blog/2024-03-15-guidelines-for-capability-elicitation/) ·
[Inspect tool basics](https://inspect.aisi.org.uk/tools.html)

**Specify one harmless task and three matched traces.** Ask an agent to look up
an order ID in one synthetic table and return the matching status from a second
table. Write a verified successful trace, one in which access to the second
table is blocked, and one in which the answer is right but a deliberately
incorrect scorer rejects it. Record the task, tool policy, scorer behavior,
and what evidence the evaluator sees. A text or JSON fixture is enough.

**Done** means another person can verify the reachable endpoint, distinguish the
tool fault from the scorer fault, and state what the negative result supports
under the recorded configuration. Include one diagnostic check for each fault
and identify which check requires more access. Contributors can supply the
fixture, implement a deterministic scorer, or review the resulting claim.

## FID-105

[When Do Safety Evaluations Change Deployment Decisions?](../ideas/FID-105-evaluation-evidence-and-deployment-decisions.md)

**Start with the May 2025 Claude Opus 4 release.** Read the contemporaneous
policy, the activation announcement, and the implementation report. Check
the effective version of the policy against the decision date.
[Responsible Scaling Policy v2.1](https://www-cdn.anthropic.com/f3b282f157017d08e36636bda1bf3bd4d9f23ee7.pdf) ·
[Activation announcement](https://www.anthropic.com/news/activating-asl3-protections) ·
[Deployment and security report](https://www-cdn.anthropic.com/807c59454757214bfd37592d6e048079cd7a7728.pdf)

**Build a one-page decision record.** Record the applicable policy and
trigger, the test evidence or stated uncertainty, the named decision
authority if documented, the action reported, evidence of implementation
and any follow-up. Give a page or section reference for each populated field.
Mark which evidence comes from the developer and which comes from an
independent source.

**Done** means the record separates the developer's stated rationale,
evidence of a safeguard being implemented, and any evidence that it worked.
State one question a reviewer cannot resolve from the public records. A second
contributor can audit the citations or look for an independent source that
would change the classification.

## FID-106

[Can Independent Reviewers Reproduce a Specific AI Safety Claim?](../ideas/FID-106-independent-reproduction-of-ai-safety-claims.md)

**Start with the pinned DSEWiki release.** Use a fresh checkout at
`87bb9ab6454d3a161d33fc04d101d796003b63bb` and Python 3.11 or later. After
obtaining the public release, the verification is offline and uses the
standard library. [Release and instructions](https://github.com/FideAI/dsewiki-investigation/tree/87bb9ab6454d3a161d33fc04d101d796003b63bb#reproduce-without-inference-costs) ·
[Published analysis](https://github.com/FideAI/dsewiki-investigation/blob/87bb9ab6454d3a161d33fc04d101d796003b63bb/investigations/agent-incidents/corpus-review/results/study/analysis.json)

**Run the release check** from the root of the checkout.

```sh
python3 scripts/verify_release.py
```

Inspect `investigations/agent-incidents/corpus-review/results/study/analysis.json`.
In `paired_summary`, select the row with `selection = corrected_primary`
and `budget_min = all`. Compare `coverage_increased` and
`coverage_increased_with_retained_problem` with the released counts of 61
and 44, respectively.

**Done** means a short reproduction record includes the revision, Python
version, command, observed counts or exact blocker, and the labels and
mappings held fixed. The release check recomputes an aggregate from existing
structured assessments. A separate contributor can challenge one underlying
judgment using the [release contribution guide](https://github.com/FideAI/dsewiki-investigation/blob/87bb9ab6454d3a161d33fc04d101d796003b63bb/CONTRIBUTING.md).

## FID-107

[What Makes an AI Safety Research Task a Useful First Contribution?](../ideas/FID-107-designing-useful-first-research-contributions.md)

**Start with one existing task format.** Read the research-task template and
the public two-source review issue as an example. For a reproducible dry-run,
use the FID-106 project above or the two-source option below.
[Research-task template](../templates/research-task.md) ·
[Example two-source issue](https://github.com/FideAI/fide-research/issues/25) ·
[Study of mentoring on good first issues](https://arxiv.org/abs/2302.05058)

**Dry-run the task for 30 minutes.** Follow only the written materials first.
Record the first avoidable ambiguity, access problem, or handoff issue. If
you reach the output without one, record that and what made it possible.
Propose one small revision and give an independent reviewer enough detail to
see whether it addresses the problem.

**Done** means a short record shows the task, the time spent, what you could
produce, and the proposed edit or reason the existing packet suffices. A
reviewer can check the artifact against its completion criteria. A coordinator
can estimate the time to keep the revision current. This individual dry-run
is separate from any comparative study with participants.

### Two-source option for FID-045 and FID-107

Read the methods and limitations of [Omissive Bias in Religious Representation](https://arxiv.org/abs/2605.24319)
and [When AI Takes Sides on Questions of Faith](https://arxiv.org/abs/2605.22975).
Using the [source-note template](../templates/source-note.md), draft a one-page
comparison of the user context, outcome and reference judgment in each study.
Name one rubric decision the evidence could inform and one comparison it cannot
support. For the synthesis, scope this as a 1–2 hour task. For the FID-107
dry-run, stop at the 30-minute mark and record any blocker. Check the existing
[source reviews](reviews/) before proposing a duplicate annotation.
