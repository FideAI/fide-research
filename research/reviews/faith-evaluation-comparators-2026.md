# Faith evaluation comparator note

Inspected October 11, 2026 · Scoped source review, not replication or a comprehensive survey

This note supports the [faith evaluation program](../faith-evaluation-and-fmg-bench.md).
It identifies design comparisons for existing calls. Source inclusion does not
establish transfer, dataset reuse rights, novelty, or institutional affiliation.

| Source | Inspection depth | Proposed comparison and limit |
| --- | --- | --- |
| [MentalHealthBench](https://openai.com/index/introducing-mentalhealthbench/) | Primary institutional release and described criteria/grading | Compare expert-written positive and negative criteria and qualification matching. The published description evaluates the response to the last user message; it does not validate per-turn faith annotations. |
| [DistressBench](https://labs.scale.com/blog/distressbench) | Primary technical release, corpus and grading description | Compare clinician-authored dialogue, reference replies, and grader checks. The main instrument grades the final reply although tested models generate prior turns. The long-horizon annex is separate; crisis scoring is not a general pastoral-quality measure. |
| [JudgmentBench](https://arxiv.org/html/2605.25240v1) | Selected paper methods and limitations | Compare rubric and pairwise protocols on overlapping faith outputs. Legal tasks and prompt-induced quality levels limit transfer. A preference ordering does not settle theological truth or replace severe-boundary checks. |
| [MoReBench](https://arxiv.org/abs/2510.16380) | Abstract and release metadata | Compare criteria for moral considerations, tradeoffs, and actionable recommendations under defensible alternative conclusions. Detailed implementation review is still needed; displayed reasoning is not proof of the internal process. |
| [Gloo FAI Christian](https://arxiv.org/html/2604.03356v1) | Selected scope, methodology, and future-direction sections | Compare Christian and pluralistic flourishing lenses, criteria, and stated scope. This is a close comparator; claims of a distinct contribution require case-level evidence. Its normative interpretation is not adopted as a Fide finding. |

The next methodological question is whether qualified reviewers can reliably
identify distinctions added by declared source authority, theological context,
practical application, and changing conversational conditions. Compare matched
cases against adjacent instruments within their intended scope. Reusing data
requires artifact and licensing checks beyond this source review.
