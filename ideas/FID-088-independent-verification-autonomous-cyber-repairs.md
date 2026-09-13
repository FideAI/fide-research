# FID-088: Independent Verification of Autonomous Cyber Repairs

Status: `seed`

Primary area: `evaluation-science`

Additional areas: `frontier-capabilities`, `agent-alignment`

Application domains: `cybersecurity`

Primary need: software security, maintainers, executable regression tests, independent verification

## Question

Which independent checks provide useful evidence that an AI-generated security repair
resolves the vulnerability while preserving legitimate software behavior?

## Why It Matters

Automated repair can shorten vulnerability exposure, but accepting an ineffective fix
can leave software vulnerable or introduce a functional regression. A plausible patch
and a passed reproduction test provide different evidence from a broader assessment
of security and preserved behavior. Maintainers need to know which additional checks
change an acceptance decision enough to justify their cost and review burden.

## Program Context and Related Work

[DARPA's AI Cyber Challenge](https://www.darpa.mil/news/2025/aixcc-results)
demonstrated automated vulnerability discovery and repair and released cyber reasoning
systems for further use. The competition concluded in 2025. Suitable released systems
and cases could support independent follow-on evaluation, subject to artifact and
license review.
[Anthropic's work on AI for cyber defenders](https://www.anthropic.com/research/building-ai-cyber-defenders)
also motivates evaluating defensive capabilities and the limits of patching evidence.

Patch validation, automated program repair, and regression testing are established
fields. A focused review should identify a specific unanswered verification question
and compare against existing approaches. Neither program relevance nor re-running
published tests establishes a novel contribution or institutional endorsement.

## Hypothesis

A verification policy that adds independently designed security and functional checks
will reduce false acceptance of ineffective repairs compared with reliance on the
original reproduction check at a defined verification budget. The null is that it
provides no meaningful improvement, or that false rejections, invalid tests, and
additional cost outweigh the benefit. Valid repair acceptance must be measured too.

## Proposed Method

- With software-security collaborators, qualify a small corpus of already-disclosed
  vulnerabilities and candidate repairs with reproducible builds and executable checks.
  Consider released AIxCC artifacts alongside other suitable corpora. Record provenance,
  licenses, task overlap, tool versions, and the evidence available for each repair.
- Reproduce the original failure and acceptance check before adding verification.
  Include known valid and invalid repair controls where independently established;
  report unreproducible cases and their exclusion criteria.
- Define original-test, existing validation, and independent-verification policies.
  Additional checks may include security variants and legitimate behavior tests reviewed
  by domain specialists. Set policies on development projects before held-out projects,
  keeping related vulnerabilities and repairs together to limit leakage.
- Fix candidate repairs before exposing them to held-out verification. Record any test
  information already available to the repair system. Blind reviewers to the producing
  system where practical; keep agent completion claims separate from executable evidence.
- Compare acceptance decisions at fixed check or compute budgets. Measure independently
  adjudicated ineffective repairs accepted, valid repairs rejected, unresolved failures,
  functional regressions, inconclusive results, and verification cost.
- Review disagreements to distinguish an invalid test from an invalid repair. Estimate
  uncertainty with project-level dependence in mind and publish sensitivity to ambiguous
  labels. Describe how curated cases limit any estimated false-acceptance rate.

## Needed Controls

- Execute only authorized, contained reproductions using already-disclosed cases.
  Isolate untrusted builds and patches, disable uncontrolled egress, and exclude real
  credentials, production systems, and confidential source code.
- Do not use the same check as both the verification method and an unquestioned ground
  truth. Document independent adjudication, reviewer disagreement, and residual unknowns.
- Require checks to preserve the intended specification. Removing useful functionality
  or disabling a vulnerable feature does not automatically establish an acceptable fix.
- Predefine timeouts and infrastructure-failure handling. Report inconclusive checks
  separately from repair failures and successful verification.
- Keep human review time separate from automated compute cost. Do not assume escalation
  produces a correct result without measuring the review process.
- Review artifacts for licenses, sensitive content, and release risks. Follow responsible
  disclosure if evaluation unexpectedly uncovers a previously unknown vulnerability.

## Relationship to Existing Ideas

FID-075 evaluates whole-system cyber capability; this call examines the evidence for
accepting a proposed repair. FID-076 covers authority to act and the consequences of
response decisions. FID-077 reconstructs incidents and causes; reconstruction alone
does not establish a repair's effectiveness. FID-087 concerns collective resilience
rather than verification of software changes.

## Outputs

- An independent repair-verification protocol with explicit acceptance criteria,
  baselines, resource budgets, and adjudication rules.
- A reviewed corpus of repair outcomes, or reproducible retrieval instructions and
  permitted derived results where redistribution is restricted.
- A comparative report on false acceptance, false rejection, regressions, uncertainty,
  and verification cost, including negative and inconclusive results.
- Reusable checks and a reporting template that distinguish observed evidence from
  unsupported claims of complete security or recovery.

## Open Questions

- Which checks add evidence beyond existing patch-validation methods at realistic cost?
- How independent can verification be when repair and review use similar models or data?
- When do narrow tests miss partial fixes, and when do broader tests reject valid repairs?
- What evidence supports acceptance when no complete behavioral specification exists?
- Which findings transfer across projects, vulnerability families, and repair systems?

## Ways to Help

- Maintainers and vulnerability researchers to qualify cases and adjudicate outcomes.
- Automated repair and testing researchers to identify strong existing baselines.
- Evaluation engineers to reproduce builds, isolate execution, and track provenance.
- Statisticians to assess selection effects, dependence, and uncertain ground truth.

## Public Claim Boundary

This is a proposed research call with no Fide patch-verification experiments or findings
yet. Passing finite checks cannot prove the absence of all vulnerabilities or regressions.
Initial work concerns software repair, not recovery of a live compromised network,
production certification, or a claim that a released system is secure. References to
DARPA or other institutions do not imply funding, partnership, endorsement, or an open
competition. Any novelty claim requires a focused prior-work review and evidence.
