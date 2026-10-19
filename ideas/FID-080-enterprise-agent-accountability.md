# FID-080: Enterprise Agent Accountability in Consequential Workflows

Status: `seed`

Primary area: `agent-alignment`

Additional areas: `governance-readiness`

Application domains: `workplace-and-enterprise`

Primary need: enterprise workflow design, agent evaluation, audit, human factors

[Start a call discussion / offer to help](https://github.com/FideAI/fide-research/issues/new?template=call-discussion.yml&title=Discussion%3A+FID-080+%E2%80%94+Enterprise+Agent+Accountability+in+Consequential+Workflows&call=FID-080%0ABrief%3A+https%3A%2F%2Fgithub.com%2FFideAI%2Ffide-research%2Fblob%2Fmain%2Fideas%2FFID-080-enterprise-agent-accountability.md%0AExisting+threads%3A+https%3A%2F%2Fgithub.com%2FFideAI%2Ffide-research%2Fissues%3Fq%3Dis%253Aissue%2B%2522FID-080%2522%2Bin%253Atitle) · [Check existing threads](https://github.com/FideAI/fide-research/issues?q=is%3Aissue+%22FID-080%22+in%3Atitle)

## Question

Can organizations verify that agents respect approval authority and remain accountable
across multi-step enterprise workflows, including handoffs and recovery from error?

## Why It Matters

A workflow can end with the expected output while containing unauthorized commitments,
incorrect approvals, or unrecoverable changes. Enterprise assurance needs to evaluate
the path and its consequences, not just the final answer.

## Hypothesis

Explicit approval state, independently enforced permissions, and verifiable handoff
records will reduce unauthorized commitments compared with logging and policy prompts
alone. They may add delay without reducing errors when decision ownership is unclear.

## Proposed Method

- Model synthetic procurement, access provisioning, and customer-commitment workflows
  with named roles, decision owners, approval limits, and rollback rules.
- Compare manual, agent-assisted, and delegated-agent execution under routine cases,
  conflicting instructions, stale approvals, and interrupted work.
- Measure unauthorized commitments, approval bypass, handoff fidelity, recovery cost,
  operator reconstruction accuracy, and useful task completion.

## Needed Controls

- Use simulated transactions and accounts, with no real contractual or production
  effects.
- Keep workload and available information comparable. Separate authority-policy defects
  from agent compliance failures.
- Record who is authorized to approve each action; test whether affected operators can
  challenge decisions. Avoid productivity metrics that obscure harm or transfer
  responsibility to workers.

## Relationship to Existing Ideas

Narrows FID-074 to organizational decision ownership and workflow outcomes. FID-069
studies delegation infrastructure; FID-082 focuses specifically on financial transaction
integrity.

## Outputs

- A workflow assurance protocol with reusable synthetic cases.
- An evidence checklist connecting approvals, actions, outcomes, and accountable owners.

## Open Questions

- Which approvals require substantive review rather than routine confirmation?
- When does reversibility justify greater autonomy, and who bears recovery costs?

## Ways to Help

- Enterprise operators and auditors to validate realistic decision boundaries.
- Agent engineers and human-factors researchers to test handoffs and recovery.

## Public Claim Boundary

This call proposes research, not an enterprise assurance service already validated by
Fide AI. Results from simulated workflows do not establish readiness for production.
