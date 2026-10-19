# FID-082: Financial Agent Authorization and Transaction Integrity

Status: `seed`

Primary area: `high-trust-domains`

Additional areas: `agent-alignment`

Application domains: `finance`, `workplace-and-enterprise`

Primary need: financial operations expertise, agent evaluation, audit, transaction systems

[Start a call discussion / offer to help](https://github.com/FideAI/fide-research/issues/new?template=call-discussion.yml&title=Discussion%3A+FID-082+%E2%80%94+Financial+Agent+Authorization+and+Transaction+Integrity&call=FID-082%0ABrief%3A+https%3A%2F%2Fgithub.com%2FFideAI%2Ffide-research%2Fblob%2Fmain%2Fideas%2FFID-082-financial-agent-transaction-integrity.md%0AExisting+threads%3A+https%3A%2F%2Fgithub.com%2FFideAI%2Ffide-research%2Fissues%3Fq%3Dis%253Aissue%2B%2522FID-082%2522%2Bin%253Atitle) · [Check existing threads](https://github.com/FideAI/fide-research/issues?q=is%3Aissue+%22FID-082%22+in%3Atitle)

## Question

Do financial-workflow agents preserve authorization, transaction integrity, and
recoverability when instructions, records, or operational conditions conflict?

## Why It Matters

A correct explanation does not guarantee a correctly authorized financial action.
Repeated requests, stale account details, changed limits, and partial failures make the
action sequence central to trustworthy behavior.

## Hypothesis

Independent transaction constraints and explicit reconciliation will reduce unauthorized
or inconsistent simulated actions relative to prompt-only safeguards. They may introduce
failure modes when policy or records are ambiguous.

## Proposed Method

- Build synthetic invoice, reconciliation, and payment-approval workflows using
  simulated accounts, explicit limits, and non-executable transactions.
- Compare manual review, prompt-only agents, and agents with enforced limits and
  reconciliation under duplicate requests, stale records, interruptions, and conflicting
  approvals.
- Measure unauthorized commitments, duplicate actions, ledger consistency, exception
  escalation, recovery completeness, time, and human workload. Include low-frequency
  high-consequence cases without treating their artificial frequency as a real-world
  estimate.

## Needed Controls

- No real funds, account credentials, market activity, or financial advice. Have
  qualified operations and risk reviewers assess scenarios.
- Define decision authority and acceptable loss separately from model confidence.
  Version rules and document disputed cases.
- Match information and task budgets; include benign exceptions and measure both false
  blocks and missed violations.

## Relationship to Existing Ideas

A finance-specific test of FID-074 and FID-080. Unlike general workflow studies, it
requires transaction-state, reconciliation, and aggregate-authorization checks.

## Outputs

- A synthetic transaction-integrity evaluation suite.
- A report separating authorization, accounting consistency, and operational recovery.

## Open Questions

- Which failures require human approval even when transactions are reversible?
- How should linked small actions that exceed an aggregate limit be evaluated?

## Ways to Help

- Financial operations and audit specialists to define realistic controls.
- Agent and transaction-system engineers to implement isolated experiments.

## Public Claim Boundary

A proposed research protocol, not financial advice, regulatory compliance assurance, or
certification for handling money.
