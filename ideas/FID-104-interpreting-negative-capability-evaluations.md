# FID-104: What Can a Negative Capability Evaluation Establish?

Status: `seed`

Primary area: `evaluation-science`

Additional areas: `frontier-capabilities`, `governance-readiness`

Application domains: `cross-domain`, `cybersecurity`

Primary need: capability elicitation, benchmark design, assurance methodology, and reproducible evaluation

[Find or create the call discussion](https://github.com/FideAI/fide-research/discussions/categories/research-calls) · [Related tasks](https://github.com/FideAI/fide-research/issues?q=is%3Aissue+is%3Aopen+%22FID-104%22+in%3Atitle)

[Contributor starter project](../research/agenda-starter-projects.md#fid-104)

## Question

What should an independent evaluator check before using a model's failure to
demonstrate a capability as evidence for a bounded deployment decision?

## Why It Matters

A failed attempt can reflect an incapable system, inadequate tools or time, a
broken harness, a scorer error, or underperformance tied to the evaluation
context. These imply different decisions about retesting, access, and safeguards.
An evaluator often has less access than the developer and must show what the
available evidence actually excludes.

## Hypothesis

A fixed-budget audit using known-solvable positive controls and a versioned
record of elicitation will diagnose more false negatives than repetition of
the original test. Some negative results will remain inconclusive across every
available access condition.

## Proposed Method

- Choose one harmless, independently scorable tool-use capability. Establish
  reference agents or replay fixtures with known task reachability and add
  matched controls for blocked tools, malformed observations, limited budgets,
  scorer misses, and planted context-dependent underperformance.
- Compare repeat runs under the original configuration with a preregistered
  sequence that checks the harness and scorer, varies permitted tools or
  scaffolds, and runs positive controls. Use a fixed testing budget and compare
  conclusions under API-only and reproducible local access on fixtures where
  those access levels can be simulated fairly.
- Ask evaluators to classify the evidence as capability observed, bounded
  negative under the specified configuration, or inconclusive. Track false
  reassurance on known-capable controls, successful diagnosis, unnecessary
  retests, and time and compute. Record which conclusions change when a
  resource or access condition changes.

## Needed Controls

- Separate model versions, elicitation methods, access, scaffold, and cost.
  Record infrastructure and scoring failures outside the model performance count.
- Distinguish revealing performance available to the tested system from adding
  task knowledge, tools, or training that materially changes the system. Include
  a known failure of competence and controls that distinguish attempted from
  completed tasks.
- Treat planted underperformance as a sensitivity control. It does not estimate
  naturally occurring sandbagging or infer a model's motives.
- Use contained, benign fixtures. Keep conclusions scoped to the tested task
  family, access and resource levels.

## Relationship to Existing Ideas

FID-075 varies configuration and measures cyber capability. FID-008 tests
evaluation awareness in faith-facing systems, and FID-078 asks whether a score
predicts a workflow outcome. This call compares how independent reviewers
diagnose negative findings and decide when the evidence remains inconclusive.

## Outputs

- A replay suite with known reachability and common sources of false negatives.
- An elicitation and access record with example claim wording and explicit
  unresolved explanations.
- A comparison of what a fixed evaluation budget can support at different access levels.

## Open Questions

- Which positive controls best expose a harness or scorer fault?
- When does extra access change the warranted conclusion enough to justify retesting?
- How should reviewers compare findings when two evaluations had different tools,
  budgets or task information?

## Ways to Help

- Specify one benign tool-use task in 1–2 hours using METR’s capability
  elicitation guidelines. Return a verified successful trace, a blocked-tool
  trace, a scorer-failure trace, and one diagnostic check for each fault.
- Implement a deterministic scorer or review what the evidence supports at each access level.

## Public Claim Boundary

A negative result is evidence about a specified test and system configuration.
The proposed audit does not establish absence of a capability outside those
conditions or justify dropping safeguards by itself.
