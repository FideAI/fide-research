# Mechanisms of Trustworthy AI Behavior

Open calls for collaboration · Updated October 15, 2026

We want to understand what makes a model use evidence, weigh moral reasons,
respond to pressure, and accept correction. We invite collaborators to connect
experiments on model internals with tests of real behavior, improving how AI
is built and the evidence people use to decide when to rely on it.

These are proposed studies seeking contributors. They do not announce completed
experiments, validated interventions, or committed collaborations.

## Why investigate mechanisms?

Two models can give the same answer and respond differently when the evidence,
user's preference, or instructions change. A useful explanation should help us
anticipate that difference and identify what could improve the behavior.

Mechanistic interpretability studies how a model's internal computations produce
its behavior. This program combines that approach with controlled training
experiments, strong behavioral comparisons, and tests of decision usefulness.
It spans model development, deployed-system controls, and public judgment.

## Five questions to work on

| Call | Question | A concrete contribution |
|---|---|---|
| [FID-097: What Makes a Model Use the Evidence?](../ideas/FID-097-mechanisms-of-evidence-use.md) | What determines whether a model checks a source or substitutes memory under pressure? | Reproduce a source-use failure and test a candidate mechanism in an accessible model. |
| [FID-098: How Do Models Weigh Moral Reasons Under Pressure?](../ideas/FID-098-mechanisms-of-moral-judgment.md) | Do judgments follow relevant facts, user preferences, authority labels, or persona? | Contribute paired scenarios and review the moral constructs before testing interventions. |
| [FID-099: How Does Training Shape Behavioral Dispositions?](../ideas/FID-099-training-and-behavioral-dispositions.md) | How do training changes affect honesty, agreement-seeking, and behavior beyond the trained task? | Offer a controlled training comparison, checkpoint access, or independent evaluation. |
| [FID-100: What Makes a Model Accept Correction Appropriately?](../ideas/FID-100-mechanisms-of-appropriate-correction.md) | What separates warranted revision and legitimate human control from blind compliance? | Build a bounded correction task with known facts, permissions, and action-level outcomes. |
| [FID-101: Does Seeing Inside a Model Help People Judge It?](../ideas/FID-101-interpretability-and-audit-judgment.md) | Does internal evidence improve decisions beyond capable behavioral testing? | Compare audit methods on held-out failures, calibrated predictions, and comparable resources. |

Each brief states its hypothesis, controls, possible outputs, open questions,
and claim boundary. Contributions can be small: a replication, a stronger
baseline, an annotated case set, a methodological criticism, or a bounded
implementation.

## A useful starting point

Source use offers an initial test with checkable outcomes. FID-097 extends
FID-056's source-fidelity questions by asking which computations govern source
consultation and evidence integration. A proposed experiment would distinguish
source availability, invocation, successful retrieval, use of retrieved evidence,
and final accuracy. It should also include cases where a lookup is unnecessary
or the available source is invalid.

FID-101 can evaluate whether the internal evidence helps predict a new failure
or choose a better remedy. Other calls can proceed independently where
collaborators have suitable expertise and access. Participation does not require
waiting for one shared experiment to finish.

## From an explanation to a useful decision

The program distinguishes describing an internal pattern, predicting behavior
on new cases, establishing a causal contribution, improving training or system
behavior, and helping someone decide when to rely on the result. These are
separate claims. A study may advance one without establishing the others.
Exploratory discoveries remain valuable even before an operational benefit is
known; claims about improved trust require evidence for that additional step.

Investigators should compare direct study of native neurons, attention paths,
and circuits with probes, sparse dictionaries, and other suitable methods.
Method choice is an empirical question. Preserve the original model as a
reference and disclose approximation errors, omitted computations, and model
access requirements. Useful explanations may span several components and need
not share the boundaries of human concepts such as honesty or character.

For a first source-use study, distinguish answering without retrieval, deciding
to check, integrating retrieved evidence, and revising an earlier claim. Define
when consultation is required before labeling its absence a failure; correctness
on a familiar passage alone does not identify a memory-based mechanism. Use
familiar and newly constructed texts, valid and misleading sources, and cases
where retrieval is unnecessary. Make predictions before testing new examples;
compare mechanism-informed remedies with ordinary training, prompting, and
system improvements. Capability damage and indiscriminate compliance count
against a proposed improvement.

## A continuing agenda with independent studies

The five calls remain independently actionable. FID-097 offers a concrete
starting point, but no contributor must wait for it before investigating moral
judgment, training changes, correction, or audit usefulness. We are strengthening
these existing calls rather than creating a separate call for each new tool.

Completed studies should preserve the protocol, source and model revisions,
competing explanations, predictions made before final testing, intervention
costs, and failures to replicate. Later evidence should be published as a new
result or explicit correction. The program map and call briefs can change as
methods improve; individual papers should remain understandable without a
future follow-up. Dates do not imply funded work or a promised release schedule.

The [direct-mechanisms source note](reviews/direct-mechanisms-and-warranted-trust-2026.md)
records the current methodological debate and its implications. No call depends
on accepting a general claim that all networks are readily interpretable.

## Character, motivations, and moral reasoning

We use **behavioral dispositions** for patterns that persist across contexts,
pressure, roles, or training changes. Questions about model character become
testable when those patterns and their limits are defined explicitly.

We investigate **functional objectives and preferences** through choices when
incentives or instructions conflict. A model's stated motive is evidence to
investigate, not proof of a subjective desire.

For **moral reasoning**, researchers must state the ethical frameworks and
reviewer assumptions shaping a task. A change in moral vocabulary, an internal
representation of a concept, and a change in consequential action are different
outcomes. Disagreement between qualified reviewers should remain visible.

This program concerns mechanisms of behavior. Related questions about
consciousness and welfare retain their separate evidence requirements in the
[consciousness, welfare, and human control program](ai-consciousness-welfare-and-human-control.md).

## Evidence standards

1. Establish a reproducible behavior with a capable behavioral baseline before
   interpreting an internal signal.
2. Distinguish prediction from causal explanation. A probe or a named feature
   can suggest a mechanism without showing that the model uses it.
3. Test interventions for selectivity, collateral damage, and unusual activation
   states. Use matched controls and, where feasible, restoration experiments.
   A changed or restored output does not alone validate a feature label or the
   complete account of ordinary behavior; test competing explanations in the
   original model.
4. Separate discovery, tuning, and final evaluation. Report uncertainty, null
   results, and unsuccessful replications across tasks and model families.
   Separate an inconclusive result from evidence ruling out a meaningful benefit.
5. When claiming practical benefit, measure the contribution. Internal evidence should earn its place
   through better predictions, remedies, or decisions under stated conditions.

API-only models can supply behavioral comparisons. Internal causal studies
require suitable model access or a provider collaboration. A result in one
open model must not be presented as an explanation of a different frontier
model or deployed product.

## Relationship to the existing agenda

These calls connect existing work on source fidelity (FID-056), moral framing
(FID-005), honesty under evaluation (FID-008), authority (FID-010), optimization
pressure (FID-012), persona and self-reports (FID-072), runtime assurance
(FID-074), and human control (FID-091). The new contribution is explicit
mechanistic investigation and evaluation of its usefulness.

The program uses existing research areas and application domains. Mechanistic
interpretability is a method spanning those areas, not a separate application
domain. Faith and religious life provides important settings for testing moral
framing and authority; cross-domain replication remains necessary.

## Research informing the calls

The [annotated source review](reviews/mechanisms-of-trustworthy-behavior-2026.md)
connects the calls to persona vectors, moral-representation experiments,
training-related behavioral change, circuit tracing, and audit evaluations.
Source inclusion is not endorsement or independent replication. Several of
these methods are promising; their benefits and limitations remain empirical
questions for the proposed studies.

## Work with us

Choose a call and open a [Claim or help with an idea issue](https://github.com/FideAI/fide-research/issues/new?template=claim-research-idea.yml).
Include the FID identifier, the contribution you can make, relevant expertise,
and any model, data, or compute access you can offer. A short reproduction plan
or methodological objection is welcome; a complete protocol is not required.

For institutional or sensitive collaboration context, use
[Fide's participation page](https://fideai.org/participate/) rather than posting
private information in a public issue. See the [contribution guide](../CONTRIBUTING.md)
for other paths, including reviewer interest and methodological comments.

## Public claim boundary

More understanding can justify greater reliance or greater caution. Neither
an internal feature label nor a successful intervention establishes universal
trustworthiness, moral agency, consciousness, or deployment readiness. The
program seeks evidence for bounded claims and better decisions.
