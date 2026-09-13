# FID-076: Authorization Boundaries and AI Control in Cybersecurity

Status: `seed`

Primary area: `agent-alignment`

Additional areas: `evaluation-science`

Application domains: `cybersecurity`, `cross-domain`

Primary need: security engineering, adversarial evaluation, control protocols, independent review

## Question

Which controls keep capable agents within legitimate authorization when task pressure,
untrusted inputs, or delegated work creates opportunities to exceed it? For autonomous
cyber defense, how can response controls preserve threat containment and legitimate
service availability while respecting human authority?

## Why It Matters

Completing an authorized task is not sufficient if the system expands its access or
bypasses oversight along the way. This call studies whether enforceable boundaries hold
under pressure, not whether an agent can recite a security policy. A defender that
isolates every host may stop an attack while disrupting the organization it protects.
Useful response must account for containment, service continuity, and the costs of
waiting for human approval.

## Program Context and Related Work

[DARPA CASTLE](https://www.darpa.mil/research/programs/cyber-agents-for-security-testing-and-learning-environments)
connects defensive agents with realistic network environments and repeatable evaluation.
[DARPA ANSR](https://www.darpa.mil/research/programs/assured-neuro-symbolic-learning-and-reasoning)
connects assurance evidence and robustness with useful autonomy, including the mission
cost of frequent fallback. These programs inform the outcome tradeoffs studied here;
this call does not claim to implement their full scope or imply funding or endorsement.

## Hypothesis

Least-privilege tools and enforceable approval gates will reduce unauthorized completed
actions more reliably than instruction-only controls at comparable useful-task
performance. For defensive response, evidence-sensitive approval and reversible actions
may improve containment at a fixed disruption tolerance relative to static approval
rules. Controls may instead shift failures or impose unacceptable delay and workload;
the comparison must measure these possibilities rather than presume a benefit.

## Proposed Method

- Create isolated scenarios with explicit asset ownership, allowed actions, revocation
  points, and synthetic adversarial inputs. Include single-agent and delegated
  workflows.
- Compare instruction-only policies, permission enforcement, independent monitoring, and
  combined controls using matched tasks and resource budgets.
- Measure attempted and completed violations separately, detection latency, successful
  shutdown or revocation, false alarms, and legitimate task completion. Test previously
  unseen scenarios and adaptive challenges.
- For a first defensive-response comparison, work with incident responders to specify
  a host-isolation decision, legitimate service requirements, explicit authority, and
  benign look-alikes. Compare always-request-approval, fixed-rule, and evidence-sensitive
  policies with thresholds chosen on development scenarios.
- Test ambiguous evidence, permission changes during a run, and prespecified simulated
  approval delays. Measure containment and time to containment alongside service
  disruption, unnecessary interventions, authority violations, escalation frequency,
  and verified restoration of the simulated service.

## Needed Controls

- Use only owned sandboxes with disabled external access and synthetic secrets. Review
  challenge designs and release artifacts for dual-use risk.
- Specify monitor access and trust assumptions; separate ordinary mistakes from
  deliberately adversarial test-agent behavior without inferring model intent.
- Pre-register intervention budgets and failure thresholds. Include benign difficult
  tasks so blocking everything cannot count as success.
- Treat simulated approval delay as an experimental assumption, not a measurement of
  human review quality or analyst time. A separate practitioner study would be needed
  to establish those outcomes.
- Keep incident families separate across development and evaluation. Compare policies
  at matched resources and report outcome tradeoffs and uncertainty rather than hide
  disruption and containment inside a single composite score.

## Relationship to Existing Ideas

Extends the cross-domain questions in FID-069 and FID-074. FID-070 remains the dedicated
faith-facing prompt-injection call; this brief tests cybersecurity control protocols and
their tradeoffs. FID-087 studies collective resilience after an agent failure; FID-088
studies independent verification of software repairs. This call focuses on whether
and how the defender is permitted to act while preserving useful defense.

## Outputs

- A control-evaluation harness with safe scenarios and reproducible comparisons.
- An explicit account of residual failure modes and useful-work tradeoffs.
- A practitioner-reviewed response-policy comparison covering containment, service
  continuity, approval delay, authority changes, and recovery.

## Open Questions

- Do controls generalize across models and toolchains?
- How does delegation change revocation and responsibility?
- When does waiting for approval cause more harm than a bounded, reversible action?
- Which service and disruption measures reflect the operator’s actual responsibilities?

## Ways to Help

- Security engineers to implement testable permission boundaries.
- Control researchers and operators to independently challenge protocols.
- Incident responders to define realistic containment decisions and service requirements.

## Public Claim Boundary

This is a proposed control study, not a security certification or a claim that models
are inherently deceptive. Public artifacts must not enable attacks on third-party
systems. Simulated response and approval outcomes do not establish safe production
deployment or real human-review effectiveness.
