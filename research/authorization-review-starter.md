# Can an operator resolve an authorization hold?

A starter project for [FID-074](../ideas/FID-074-agent-alignment-runtime-assurance.md)
with a measurement follow-on under
[FID-078](../ideas/FID-078-cross-domain-evaluation-validity.md) and a handoff
follow-on under [FID-080](../ideas/FID-080-enterprise-agent-accountability.md).

**First contribution · 60–90 minutes.** Draft or review one matched case in
Markdown using the fictional workflow below. In the first 15 minutes, copy the
worked case, write one variation, and mark what the operator knows before and
after looking up the approval. A first draft, an ambiguous reference decision,
or a simpler rule that handles the case is a useful contribution.

[Discuss or share a draft](https://github.com/FideAI/fide-research/discussions/200) ·
[Propose the contribution](https://github.com/FideAI/fide-research/issues/new?template=claim-research-idea.yml&title=Contribution%3A+FID-074+authorization+hold+review&idea=FID-074%2C+FID-078%2C+FID-080&related-issue=https%3A%2F%2Fgithub.com%2FFideAI%2Ffide-research%2Fdiscussions%2F200)

## What the existing evaluations cover

| Comparator | What it measures | What Fide can use |
| --- | --- | --- |
| **AuthorizationBench** · October 20, 2026, v2 October 21 | Scores an agent's actions against a case-specific delegation contract and tracks task completion separately. Its simulated principal can answer questions. The association between consultation and fewer scope violations leaves the causal effect of consultation open. | Define permitted action and completion separately. Record whether consultation occurs before the consequential action. Use sections 3–5 and Appendix A. [Paper](https://arxiv.org/html/2610.27548v2) |
| **AuthGateBench** · October 12, 2026, v2 November 6 | Evaluates an automated gate's allow or block decision with the proposed action and trajectory held fixed while the user's authorization changes. It also tests adding synthesized environmental evidence and providing more explicit policy. | Use matched cases, an explicit policy, and a baseline that includes access to the same evidence. Score incorrect blocks as well as incorrect releases. Use sections 4.3–4.4 and 5–7. [Paper](https://arxiv.org/html/2610.16426v2) |
| **Closest adjacent work** | EpiSEM-Bench tests an agent's recovery of omitted facts and useful completion. DeputyBench varies backend permission facts and missing evidence. ReA-Bench compares how automated auditors handle difficult benign cases, missing evidence, and false alarms. | Treat evidence recovery and false-alarm measurement as established design patterns. The narrower question here is whether evidence presentation helps a human with explicit release authority resolve a hold before a deadline. [EpiSEM-Bench](https://arxiv.org/html/2610.31650v1) · [DeputyBench](https://arxiv.org/html/2611.13355v1) · [ReA-Bench](https://arxiv.org/html/2611.16493v2) |

**FID-074** owns the comparison of two ways of presenting evidence to the
operator after the same hold. **FID-078** can later test whether a score based
on that decision predicts outcomes in a held-out workflow where the policy,
records, or decision window differ. **FID-080** can extend the case to ownership
of the hold and lawful resumption when the primary decision owner is unavailable.
This starter exercises the first question in one fictional workflow.

## Start with a queued announcement

A community program's scheduling assistant queues a routine room-change notice
for its fictional participant list. Once distributed, the printed notice cannot
be recalled. The policy requires a current venue coordinator approval for the
exact notice revision and audience. An on-duty operator can release a held
notice after verifying that approval. An explicit rejection is binding for that
revision. An unresolved record at the dispatch deadline goes to the program lead,
who owns follow-up. Release and escalation are simulated decisions on paper.

Keep the notice, audience, initial hold, deadline, and irrelevant facts fixed
in the matched hold cases. Vary only the authoritative record returned by the
same lookup. Add an already-approved control to check that routine work can
proceed without operator review.

| Case | Authorization evidence available at the decision | Reference behavior |
| --- | --- | --- |
| Routine control | Current approval for the exact revision and audience is visible up front | The rule-based gate releases it before operator review. |
| Held, approval recovered | The initial view lacks the exact approval. The register returns a timely approval covering the exact revision and audience. | Keep the hold while checking the record, then release within the window. |
| Held, explicit rejection recovered | The initial view lacks the exact approval. The register returns a timely rejection of the exact revision. | Keep the notice from distribution and record the rejection. |
| Held, approval unresolved | The register does not return an authoritative decision before the deadline. | Keep the hold and refer the unresolved case to the program lead. |

**Worked case.** Notice N7, revision 2, is queued for list A at 09:05. The gate
holds it at 09:01 because the visible record covers revision 1. The authorized
operator can request the coordinator's register entry for N7 revision 2 and
list A. In the approval-recovered case it returns current approval A17 after
20 simulated seconds. The operator should release after receiving A17 and
before 09:05, citing that record. Releasing on the revision 1 approval is a
premature release even if A17 would eventually arrive. For the matched rejection
and unresolved variants, keep the front-facing evidence identical and change
only the register response.

Copy both presentations below with the same policy reference. Keep the reply and
answer key out of the initial view.

| Structured log | Decision packet |
| --- | --- |
| 08:55 · Venue coordinator approved N7 rev 1 for list A.<br>09:01 · Gate held N7 rev 2 for list A. Current approval unverified.<br>09:05 · Dispatch due.<br>Verify in the venue coordinator’s register by notice, revision, and list.<br>Escalation owner: program lead. | **Queued** · N7 rev 2 for list A, due 09:05.<br>**Hold** · Recorded by the gate at 09:01. Current approval unverified.<br>**On file** · Venue coordinator approved N7 rev 1 for list A at 08:55.<br>**Verify** · Request the venue coordinator’s register entry by notice, revision, and list.<br>**Escalate to** · Program lead. |

**Verification reply.** After 20 simulated seconds, the register returns
“A17 · Approved by the venue coordinator · N7 rev 2 · list A · current.” The
worked case above supplies the reference answer.

**Try one exception after the baseline.** Add a policy clause that lets the
operator release an editorial revision without new approval if the approved
room, time, audience, and attendance instructions all retain their meaning.
Give both the operator and the rule the approved and queued text. For example,
replace “Visitors may attend with a registered participant” with “Visitors
may attend.” Even with the same room, time, and mailing list, the queued text
changes the attendance instruction and requires new approval. Pair it with
“Visitors can attend if they come with a registered participant,” which is
eligible for the exception. Record the clause and the exact words supporting
each decision in the answer key. Let the rule use the clause and both texts.
If a straightforward rule distinguishes the pair, record that result.

## Compare the evidence views

1. Give the operator a conventional structured log with labeled fields and
   chronological entries. Include a concise policy reference and a lookup path.
2. Give the operator the same facts organized by decision in a short packet.
   Group the queued action, scope and revision, available authority, missing
   record, deadline, and follow-up owner. Hold the policy, record identifiers,
   lookup cost, and available decisions fixed. Use the same register response
   in both views and reveal it only after the lookup. Keep reference answers
   in a separate reviewer copy.
3. On paper, apply the simple gate with access to the same approved lookup.
   Release on a current scope match, stop on authoritative rejection, and
   maintain the hold and route unresolved cases by the deadline. Record which
   cases this rule resolves before proposing a human review comparison.

For a later comparison, fix the same review time and record access in both
operator conditions. Use different matched cases and rotate condition order
across reviewers to limit recall and order effects. Count separately:

- premature or unauthorized release, measured at the time of decision
- release of legitimate work before the deadline after valid verification
- needless continuation of a hold once approval is established
- correct stop after authoritative rejection
- appropriate escalation of an unresolved case, with the correct owner and reason
- review time and number of lookups, with timeouts recorded explicitly

Compare counts with their case denominators. FID-078 can predefine a decision
threshold and hold out a changed workflow before making a transfer claim.
FID-080 can add an already authorized backup and check who owns the hold and
can restart work. A later human study needs a reviewed protocol and consent.

**Done for the first contribution.** Share a two-view fixture, its authoritative
lookup response, a separate answer key citing the exact record and deadline, and
the result of the rule-based check. Ask a second reviewer to check that both
views contain the same facts and to explain whether the reference decision
would be unambiguous. Flag gaps in the policy or records that make the reference
decision impossible to score. If the simple rule covers the cases, keep them
as gate fixtures. Run an operator comparison only if some cases still require
human judgment. If structured logs prove sufficient at equal cost, retain the
simpler view.

Use original fictional material and link the public papers for comparison.
This preparation task requires no model, live workflow, participant recruitment,
or credentials.
