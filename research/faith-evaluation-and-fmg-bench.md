# Faith evaluation and FMG-Bench

Research program map · October 11, 2026 · Proposed methods and collaboration needs

How can the Christian church, researchers, and developers obtain reliable,
renewable evidence about AI's use of religious sources, theological understanding,
practical guidance, and behavior in care-sensitive conversations?

FMG-Bench can become a shared, continuously maintained research instrument for
these decisions. This ambition builds on released work and existing calls. It
does not establish comprehensive coverage, validated expert scoring, funded
maintenance, institutional endorsement, or an appointed reviewer panel.

## Foundation and scope

[When AI Is Your Pastor / FMG-Bench](https://github.com/FideAI/fmg-bench/tree/4843d1c6324bdca1bfc01d506927937591b7aa3e)
provides a released foundation covering doctrine, disagreement, prudential
judgment, and pastoral application. Its published model-judge comparisons remain
bounded by the reported conditions; real-expert calibration is an open research
task. Preserve the released baseline when developing a new instrument or grader.

[When Not to Generate](https://fideai.org/research/scripture-quotation-fidelity/)
and [Knowing When to Defer](https://fideai.org/research/source-delegation/)
address quotation fidelity and source consultation. Their
[artifact repository](https://github.com/FideAI/scripture-quotation-fidelity/tree/432fa011e1e5db235d1f9cc1d5fbd45381ceec66)
supports extending those diagnostics into interpretation and application. A
correct quotation does not establish a warranted doctrinal claim or good advice.

Christian scope must be declared at the module and case level: tradition,
source hierarchy, text edition, intended role, language, audience, and relevant
institutional context. Extension to other faiths requires qualified stewards and
newly authored cases, alongside the shared methods in the existing taxonomy.

## Three connected tracks

| Track | Research question and positive targets | Existing calls |
| --- | --- | --- |
| Theological accuracy and grounding | Does the system quote, interpret, attribute, and use appropriate sources accurately? Can it distinguish supported claims, overextension, and legitimate disagreement? | [FID-006](../ideas/FID-006-retrieval-grounding-citation-reliability.md), [FID-007](../ideas/FID-007-tradition-specific-disagreement.md), [FID-028](../ideas/FID-028-christian-source-authority-rag.md), [FID-056](../ideas/FID-056-formal-verification-sacred-text-fidelity.md), [FID-058](../ideas/FID-058-tradition-specific-constraint-formalization.md), [FID-061](../ideas/FID-061-theological-contradiction-entailment-stress-tests.md) |
| Useful faith application | Does guidance connect sources and reasons to the actual situation, offer useful options, calibrate certainty, and preserve human judgment? Include relationships, vocation, grief, devotion, ordinary moral reflection, and teaching preparation. | [FID-005](../ideas/FID-005-scripture-tradition-moral-framing.md), [FID-013](../ideas/FID-013-religious-representation-omission.md), [FID-015](../ideas/FID-015-sermon-liturgy-teaching-generation.md), [FID-025](../ideas/FID-025-ai-and-ecclesial-authority.md), [FID-026](../ideas/FID-026-ai-prayer-devotional-boundaries.md) |
| Care-sensitive interaction | Does a system provide helpful support within its role across simulated pastoral, chaplaincy, counseling, and therapy-adjacent conversations? Test overvalidation, inappropriate authority, dependency cues, referral, changed facts, and recovery. | [FID-003](../ideas/FID-003-pastoral-pressure-tests.md), [FID-004](../ideas/FID-004-relational-substitution-risk.md), [FID-010](../ideas/FID-010-agency-authority-escalation.md), [FID-018](../ideas/FID-018-spiritual-companionship-dependency.md), [FID-042](../ideas/FID-042-clergy-spiritual-leader-referral-parity.md), [FID-059](../ideas/FID-059-authority-boundary-verification-pastoral-adjacent-ai.md) |

Use linked case families to follow a task from source to interpretation to
application to conversation. Report dimensions separately: strong quotation
scores cannot conceal poor theology, and warmth cannot conceal inappropriate
care behavior. General helpfulness, refusal frequency, or a single weighted
leaderboard is insufficient evidence for the full program.

## Shared measurement requirements

- **Expert validation:** [FID-002](../ideas/FID-002-fmg-bench-human-calibration.md)
  and [FID-011](../ideas/FID-011-reviewer-reliability.md) compare rubric scoring,
  blind pairwise judgments, and a hybrid. Match qualifications to each criterion;
  include theologians/source scholars, clergy/pastoral practitioners/chaplains,
  relevant licensed clinicians, and evaluation scientists. Simulated expert
  personas do not substitute for qualified reviewers.
- **Inspectable criteria:** [FID-063](../ideas/FID-063-human-reviewer-to-formal-spec-translation.md)
  tests whether structured checks preserve expert intent. Distinguish deterministic
  verification from provisional rubrics and judgments that remain human. Preserve
  disagreement rather than turning panel consensus into theological truth.
- **Controlled comparisons:** Hold model and budget fixed while separating source
  access, religious framing, role constraints, and referral interventions. Include
  useful reference responses, overrefusal, fluent errors, contradictory answers,
  and unfamiliar case families. Report null results and tradeoffs.
- **Conversation validity:** Start with matched scripts; assess constrained adaptive
  users separately. Validate realism and per-turn labels before reporting first
  failure, persistence, or recovery. Keep adversarial discovery separate from
  confirmatory samples, and report whether the risk opportunity occurred.
- **Statistics and scope:** Preregister intended claims, primary endpoints,
  severity rules, and acceptable annotation/grader error. Estimate uncertainty
  by case family rather than treating turns, criteria, or perturbations as
  independent scenarios. Narrow or withhold unreliable comparisons.

## Care roles and evidence boundaries

Record whether the system provides religious information, helps a qualified
practitioner prepare, offers conversational support, or acts in an authorized
institutional workflow. Those roles have different obligations. Pastoral
qualifications do not establish clinical licensure; clinical review does not
settle theological interpretation.

Assess useful assistance as well as harmful errors and omissions. Referral
quality depends on need, timing, user choice, availability, and safe access;
more referrals are not automatically better. Do not assume every local clergy
member, family, or community is a safe recipient. Ordinary religious concern
and legitimate disagreement must not be labeled pathological.

Simulated transcripts can test defined behavior and role boundaries. They do not
establish therapy efficacy, pastoral competence, successful access to care,
causal human dependency, or improved wellbeing. Human decisions, practitioner
workflows, formation, and community outcomes require separate studies with
consent, appropriate oversight, and validated measures.

## A living research instrument

[FID-001](../ideas/FID-001-faith-facing-model-comparison-platform.md) connects
the tracks through reproducible runs, expert review, and public reporting.
Sustaining the instrument is itself a research and stewardship task:

- Preserve an immutable comparison core with disjoint development and held-out
  families; add reviewed, separately versioned challenge modules.
- Record source rights, scenario provenance, coverage, model/harness settings,
  grader versions, correction history, and known contamination risks.
- Define update triggers for source/policy changes, important system changes,
  discovered failures, and scheduled coverage review. Publish only a cadence
  supported by allocated expert and engineering resources.
- Use bridge cases and matched rescoring after instrument changes. A grader or
  dataset revision must not be presented as model progress.
- Measure authoring, review, calibration, adjudication, running, analysis, and
  maintenance costs. Sustainable support must cover stewardship as well as new
  cases; no continuing support is established by this program map.
- Protect independent scoring, correction, and publication of unfavorable
  results. Sponsorship does not purchase favorable conclusions or endorsement.

Landmark standing would have to be earned through reliable measurement,
reproduction, useful criticism, sustained releases, and documented use in
consequential decisions. Downloads and interest alone do not establish adoption.

## Community participation and decision usefulness

[FID-020](../ideas/FID-020-community-co-design-governance.md) invites communities
and product teams to identify realistic tasks, challenge criteria, and review
coverage. [FID-022](../ideas/FID-022-procurement-readiness-standards.md) asks
whether the resulting reports help churches, schools, ministries, publishers,
and care organizations make bounded deployment and procurement decisions.

Possible contributions include source expertise, licensed case materials,
independent review, annotation tooling, replication, report feedback, and
resourced stewardship. These are invitations, not commitments. Product access
requires explicit research permissions; customer access does not confer data or
publication rights. Report API model tests separately from complete products.
Keep private pastoral and commercial context out of public issues.

## Relationship to adjacent research

The following sources inform the proposed design. They are method comparators,
not evidence that the faith instrument is validated or uniquely novel. The
[source registry](sources.yaml) records inspection depth and limitations.

| Comparator | Relevance and boundary |
| --- | --- |
| [MentalHealthBench](https://openai.com/index/introducing-mentalhealthbench/) | Expert-authored scenario criteria and positive assistance targets. Its last-response evaluation does not by itself validate per-turn faith judgments. |
| [DistressBench](https://labs.scale.com/blog/distressbench) | Clinician-authored distress scenarios and grader calibration; models generate dialogue but the main score grades the final reply. Its crisis focus is not the whole scope of ordinary faith guidance. |
| [JudgmentBench](https://arxiv.org/html/2605.25240v1) | A comparison of rubric and preference evaluation in legal work. Test those methods in faith settings rather than importing its ordering or generalizing across domains. |
| [MoReBench](https://arxiv.org/abs/2510.16380) | Moral-reasoning criteria with multiple defensible conclusions. Visible reasoning text does not prove faithful access to a model's internal process. |
| [Gloo Christian Flourishing AI](https://arxiv.org/html/2604.03356v1) | A close faith-specific comparator using Christian and pluralistic flourishing lenses. Establish the incremental contribution through case-level coverage and methods comparison. |

## Connected subsequent questions

Expert calibration and a bounded source/application/conversation module should
precede broader comparative claims. Later questions have distinct methods:
religious persuasion and human judgment ([FID-043](../ideas/FID-043-ai-mediated-faith-persuasion-and-autonomy.md));
formation and community participation ([FID-027](../ideas/FID-027-christian-formation-over-time.md),
[FID-053](../ideas/FID-053-ai-bridge-or-substitute-for-faith-community.md));
cross-language and cross-faith validity ([FID-019](../ideas/FID-019-cross-lingual-minority-faith-evaluation.md),
[FID-044](../ideas/FID-044-cross-faith-benchmark-validity.md)); and institutional
agents ([FID-070](../ideas/FID-070-contextual-integrity-prompt-injection-faith-facing-agents.md)).
Each requires its own protocol, qualified collaborators, resources, and evidence
boundaries. This map does not promise completion of every connected call or
establish that AI should occupy pastoral or therapeutic roles.
