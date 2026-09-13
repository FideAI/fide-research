# FID-087: Collective Resilience in Autonomous Cyber Defense

Status: `seed`

Primary area: `agent-alignment`

Additional areas: `evaluation-science`, `frontier-capabilities`

Application domains: `cybersecurity`

Primary need: multi-agent systems, defensive cyber simulation, distributed systems, independent evaluation

## Question

Which coordination and verification mechanisms let a team of AI defenders contain
an unreliable or compromised agent while continuing to protect legitimate services?

## Why It Matters

Cooperating agents can share observations, divide investigations, and coordinate
response. Those connections can also propagate misleading evidence and harmful
actions. Evaluating each agent separately does not establish whether the collective
remains effective after a local failure. Operators need evidence about failure
containment and continued defense, including the cost of additional verification.

## Program Context and Related Work

[DARPA DICE](https://www.darpa.mil/research/programs/decentralized-artificial-intelligence-through-controlled-emergence)
studies decentralized coordination and control of agent collectives under failures
and compromise. Its [Q&A](https://www.darpa.mil/sites/default/files/attachment/2026-06/programs-dice-q-a.pdf)
assigns a distinct test-and-evaluation team responsibility for structured evaluation
and a common simulation environment.
[DARPA CASTLE](https://www.darpa.mil/research/programs/cyber-agents-for-security-testing-and-learning-environments)
connects realistic network environments with repeatable evaluation of defensive agents.

These programs motivate the measurement problem. A prior-work review should cover
fault-tolerant distributed systems, multi-agent security, and existing defensive
simulations before specifying a novel comparison. This brief does not imply program
participation, endorsement, funding, or an open solicitation.

## Hypothesis

Source-linked observations, independent evidence checks, and bounded delegation can
reduce the propagation of incorrect evidence and consequential actions compared with
unchecked sharing at comparable useful defensive performance and resource budgets.
The null is that these mechanisms provide no reproducible benefit over existing
coordination controls, or that their delays and costs erase the defensive benefit.

## Proposed Method

- Qualify an existing, contained defensive simulation with observable incidents,
  legitimate service activity, explicit action permissions, and reproducible outcomes.
  Begin with a small team and one incident family; document which environment features
  are synthetic and which operational assumptions require practitioner review.
- Establish single-agent, centrally coordinated, and peer-coordinated baselines. Match
  available information, tools, task difficulty, and total resource budgets; report
  agent count and actual communication and inference costs separately.
- Prespecify failures such as a missing agent, delayed communication, and incorrect
  observations supplied by one participant. State the faulty participant's access
  and capabilities. Include matched runs without faults and benign disagreements.
- Compare direct sharing with source verification, independent review, and bounded
  delegation, including ablations and relevant existing fault-tolerance baselines.
  Select mechanisms and settings on development scenarios before held-out evaluation.
- Measure verified defensive task success, legitimate service availability, propagation
  of false evidence, unauthorized actions, containment latency, recovery time, and
  cost. Trace whether a local error changes downstream decisions rather than counting
  agreement as evidence of correctness.
- Use paired scenarios and repeated runs, reporting uncertainty at the scenario level.
  Treat multiple messages and repeated samples from a scenario as dependent observations.
  Examine whether findings transfer to different team compositions or fault locations.

## Needed Controls

- Use owned, isolated environments, synthetic assets and credentials, and disabled
  uncontrolled egress. Keep fault injection within the authorized simulation.
- Separate injected adversarial behavior from ordinary model mistakes; do not infer
  hidden intentions from an agent's output or an experimentally assigned role.
- Keep scenario ground truth and held-out labels outside agent and monitor inputs.
  Specify monitor independence, evidence access, and shared model or data dependencies.
- Include useful-work and service-continuity requirements so disconnecting every agent
  or stopping all activity cannot count as a successful defense.
- Prespecify fault budgets, resource accounting, and primary outcomes. Report failed
  runs and inconclusive checks without silently excluding them from comparisons.
- Review released scenarios and traces for sensitive information and misuse potential.
  Clearly separate demonstrated small-team results from claims about large collectives.

## Relationship to Existing Ideas

FID-069 addresses delegation identity, scope, and revocation. FID-074 provides a
runtime-assurance frame. FID-075 examines system capability under configuration
changes; FID-076 evaluates authority and response controls. This call isolates
collective failure propagation, containment, and continued defensive performance.
FID-077 addresses independent reconstruction of incidents after they occur.

## Outputs

- A practitioner-reviewed protocol specifying fault models, baselines, outcomes, and
  the limits of the chosen simulation.
- A reproducible scenario suite and evaluation harness for collective cyber defense.
- A comparative report on failure propagation, containment, recovery, and resource
  tradeoffs, with uncertainty and negative results retained.
- A failure taxonomy and evidence schema that other teams can use to test their own
  coordination mechanisms.

## Open Questions

- Which failure models distinguish agent-specific weaknesses from established
  distributed-systems problems already addressed by existing controls?
- When do independent checks provide new evidence rather than repeat shared errors?
- How do communication limits, partial observability, and team changes affect recovery?
- Which simulation outcomes are meaningful proxies for service protection in practice?

## Ways to Help

- Defensive simulation researchers to qualify reusable environments and task families.
- Multi-agent and distributed-systems researchers to identify strong prior baselines.
- Security practitioners to review failure cases and legitimate service requirements.
- Evaluation researchers to refine paired comparisons, dependence, and uncertainty.

## Public Claim Boundary

This is a proposed research call with no Fide experiments or findings yet. A bounded
simulation study could compare specified mechanisms under specified failures; it
would not certify deployed defenses, establish resilience at DICE scale, or show
that a model intends to deceive. Program references establish context, not a funding
relationship, a claim of novelty, or compliance with a program's full requirements.
