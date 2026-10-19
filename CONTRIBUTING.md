# Contributing to Fide AI Research

Fide AI is a lab researching and building more trustworthy AI across models and
systems. We welcome research ideas, methodology comments, replication plans,
reviewer interest, implementation help, and institutional use cases across
consequential domains, including faith and religious life.

## Start here: join a research call

You can lead or co-lead work, join a project, review, or find collaborators.
A complete research proposal or institutional affiliation is not required.

1. **Introduce yourself once.** Use the [Fide AI Contributor Network interest form](https://forms.gle/XbpAFAy6No8WKcRMA)
   with your name, email, and a sentence or two about your skills and what you'd
   like to help with. Those are the only required answers. You can finish there
   or choose to add optional details such as interests, availability, or a GitHub
   profile. Tick the optional follow-up box if you would like us to contact you.
   If you already have a contributor record or have introduced yourself directly,
   confirm or update those details
   through [Participate](https://fideai.org/participate/) rather than submitting a
   duplicate. A GitHub comment alone does not register your contributor details.
2. **Choose a starting point.** Open a research brief and follow its discussion
   link. Comment in the existing issue, or check for related threads before using
   the prefilled form to start one. A question or a few sentences about what you
   would like to work on is enough. You can also browse [tasks needing help](https://github.com/FideAI/fide-research/issues?q=is%3Aissue%20is%3Aopen%20label%3A%22help%20wanted%22)
   or [small first contributions](https://github.com/FideAI/fide-research/issues?q=is%3Aissue%20is%3Aopen%20label%3A%22good%20first%20issue%22).
   Comment on a matching task with the part you can help with and your rough
   availability. To lead new work on a call, [propose a contribution](https://github.com/FideAI/fide-research/issues/new?template=claim-research-idea.yml)
   with its FID ID and a small first output. Still exploring? Introduce your
   interests in [Start here](https://github.com/FideAI/fide-research/issues/1)
   to ask for a project or collaborators.
3. **Agree one first output.** A maintainer or coordinator checks overlapping
   work and confirms scope, support, and the next step. Coordinate public task
   decisions and outputs in that issue; keep contact details and private terms
   in the private introduction route.

You can browse and discuss public tasks while making your introduction. The form
records your interest; it does not automatically grant Discord access, a project
placement, or funding. Discord is optional and invitations follow a review of fit.
The detailed contribution paths below explain how to scope and share the work.

This repository maintains research calls and a catalog of released work. Calls
remain hypotheses and collaboration invitations until a report, benchmark,
paper or evidence artifact supports specific findings. Catalog entries link to
the released work; they do not turn its associated call into a proven claim.

## Register a publication

Follow the [publication guide](publications/README.md). Add a record to
`publications/catalog.json` only after checking its public release and links.
Record the authors, release date, domain, methods and evidence limitations,
publication status, review status and any related FID calls. An artifact repository
is optional; never substitute a private workspace link for a public artifact.

Run `npm run build:publications` and `npm test`, and include the source record,
generated catalog and feed in the same pull request. Corrections and withdrawals
remain visible in the catalog. The instructions below govern research calls.

## Good First Paths

Choose the contribution path that matches what you know or can offer:

| Contributor | Good first contribution |
|---|---|
| AI researcher or engineer | Help scope a benchmark, harness, dataset, evaluator, reproduction, or artifact. |
| Statistician or evaluation researcher | Improve construct validity, reviewer calibration, reliability, sampling, or claims discipline. |
| Operator in a high-trust domain | Share a consequential workflow, authority boundary, adoption question, or escalation concern. |
| Parent, educator, care professional, or public servant | Share a setting where AI may affect learning, care, rights, relationships, or human agency. |
| Theologian, clergy member, or faith-community leader | Review religious assumptions, source authority, pastoral boundaries, or tradition-specific context. |
| Funder or institution | Sponsor reviewer panels, field pilots, public datasets, infrastructure, or reports. |

If your contribution involves sensitive personal, family, care, institutional,
community, or participant context, start through the contact path on
`fideai.org/participate` instead of posting private details in GitHub.

## Ways to Contribute

### 1. Propose a new idea

Open a `Research idea` issue when you have a question Fide AI should consider.
A strong proposal includes:

- the research question;
- who would benefit from the answer;
- why the question matters now;
- possible methods, datasets, reviewers, or controls;
- what evidence would change the answer;
- what public claim should not be made yet.

You do not need a complete protocol. It is fine to submit a rough but important
question.

### 2. Improve an existing idea

Use a `Comment on methodology` issue or open a pull request against a file in
`ideas/`. Useful improvements include:

- sharper research questions;
- better controls or baselines;
- related work and citations;
- reviewer qualifications;
- failure modes;
- privacy concerns;
- clearer public claim boundaries;
- more concrete outputs.

### 3. Find a task or propose a contribution

#### Join a call's conversation

Each brief has a discussion link near the top. Calls with an existing starting
thread link there directly. Other briefs offer a prefilled `Research call
discussion` form and a search for existing threads. Check the search first: a
new thread may have appeared since the brief was last updated. Use a matching
thread rather than opening a separate issue for each contributor.

You can simply comment:

> I'd like to work on the multimodal runner for FID-009. I can help with the
> image/text ablations and would like to connect with others on evaluation design.

Questions, related sources, collaborator offers, and progress can stay in that
same issue. Offering to help signals interest; a maintainer or coordinator agrees
the first output and can assign the contributor once the next step is clear.
Assignment concerns that contribution, not exclusive ownership of the call.

Create a call conversation when someone has something to discuss, not an empty
issue for every brief. An existing task can serve as the starting conversation
while the work is small. Split out and cross-link a task only when a distinct
piece of work needs its own scope or tracking.

The Contributor Network introduction is separate and happens once; joining another
call does not require another form. A public discussion does not register private
contact details or grant Discord access.

#### Find or scope concrete work

Browse [tasks needing help](https://github.com/FideAI/fide-research/issues?q=is%3Aissue%20is%3Aopen%20label%3A%22help%20wanted%22)
or [small first contributions](https://github.com/FideAI/fide-research/issues?q=is%3Aissue%20is%3Aopen%20label%3A%22good%20first%20issue%22).
Research calls are broad questions; task issues describe a concrete study,
review, tool, or contribution within one or more calls.

1. **Join an existing task:** comment with the part you can help with, rough
   availability, and a proposed first output. Check the issue's assignees and
   named coordinator to see who is already involved.
2. **Propose work:** if no matching task exists, use the `Propose a contribution`
   form with the related FID ID, first output, and any support needed. You can
   offer to lead, join, review, or find collaborators. An early proposal is welcome.
3. **Agree a first step:** Alex Chao ([@alexchaomander](https://github.com/alexchaomander)) or the coordinator checks overlaps and confirms
   scope and support in the issue. Before substantive work, agree the time
   boundary, paid or volunteer arrangement, credit, and relevant ownership,
   licensing, confidentiality, and publication expectations. Opening an issue
   does not commit Fide to funding or supervision. Keep private compensation
   terms and institutional constraints in [Participate](https://fideai.org/participate/);
   record only the non-sensitive scope and arrangement in the issue.
4. **Coordinate and share:** use the same issue for scope decisions and outputs.
   Link it from Discord if useful; a duplicate proposal or status report is not
   required. Code and scientific artifacts belong in the appropriate study
   repository, linked from the issue.

Claiming a task is nonexclusive and does not reserve the whole research call.
Several people can contribute distinct pieces. To find collaborators, say what
help remains useful in the issue. If you are still finding a direction, comment
on [Start here](https://github.com/FideAI/fide-research/issues/1) or contact Alex
privately through [Participate](https://fideai.org/participate/).

Our Discord group grows through personal invitations after a review of fit.
GitHub participation does not automatically grant server access, and Discord
membership is optional for contributing here. Keep private contact details and
sensitive context out of public issues.

#### Publish and maintain a research task

Use the `Research task` form or [task template](templates/research-task.md).
Include the related calls, output and completion criterion, starting materials,
useful skills, rough effort, open collaborator roles, and a coordinator or review
route. A maintainer confirms the scope and support before adding `help wanted`.
Start with a few useful tasks rather than creating an issue for every call.

When a call gets its first useful discussion or task issue, update the discussion
link near the top of its brief to that issue. Keep the related-thread search link
so other work remains discoverable. Use the FID ID in issue titles; for a new
conversation, use `Discussion: FID-### — short title`. If the linked thread closes,
keep it as context and point the brief to a current thread when work resumes.

| Signal | Meaning |
| --- | --- |
| `type: contribution` | A proposed contribution or task; scope may still need agreement. |
| `help wanted` | A specific contribution is open; the issue explains how to help. |
| `good first issue` | A bounded newcomer task with starting materials and available support. |
| `in progress` | Agreed work has actually begun. |
| Assignee or named coordinator | Who owns the next step; additional contributors can be named in the thread. |
| Closed issue | The agreed contribution ended; link its output, review status, and credit. |

An active issue can retain `help wanted` if it names a useful unclaimed part.
When work pauses, remove `in progress` and clarify the next step. A task label
never changes the parent call's status or establishes a research finding.

### 4. Volunteer as a reviewer

Open a `Reviewer interest` issue if you can review research ideas, prompts,
rubrics, outputs, sources, or methods. Include:

- relevant expertise;
- denominational, theological, pastoral, technical, statistical, educational, or
  legal background;
- topics you are willing to review;
- conflicts of interest;
- approximate availability.

### 5. Open a pull request

Open a PR when you are changing repository content directly. Common PRs include:

- adding a new brief in `ideas/`;
- revising a brief;
- updating an idea status;
- adding controls, sources, or reviewer needs;
- improving documentation;
- rebuilding `dist/research-ideas.json`.

## Idea Brief Format

New ideas should use `templates/research-idea.md` and live in `ideas/`.

Use this filename pattern:

```text
ideas/FID-000-short-kebab-title.md
```

Use the next available `FID-###` number unless a maintainer assigns one in an
issue.

Replace `FID-000` throughout the brief template, including the discussion and
thread-search links. Point the discussion link to an existing issue when one
fits; otherwise retain the prefilled form link. No empty issue is needed.

Every idea brief should include:

- `Status:`
- `Primary area:`
- `Additional areas:`
- `Application domains:`
- `Primary need:`
- `Question`
- `Why It Matters`
- `Hypothesis`
- `Proposed Method`
- `Needed Controls`
- `Outputs`
- `Open Questions`
- `Ways to Help`
- `Public Claim Boundary`

Use the optional `Specific context:` field when a narrower institutional,
sectoral, community, or tradition-specific setting is material to the study.

The feed builder expects this structure. If you rename headings, the website
feed may lose useful fields.

## Research Taxonomy

Every call records two independent dimensions:

- **Research areas** identify the problem being investigated. Select one
  primary area and any additional areas the work materially contributes to.
- **Application domains** identify where the question should be studied or
  applied. Select every relevant domain from `research/taxonomy.json`.

Classify a call by its research question before naming its setting. For example,
an agent evaluation for a ministry workflow belongs primarily to agent alignment
and also applies to faith and religious life. A Christian institution may be
named under `Specific context:` when that specificity is methodologically
important, but it is not a separate repository-wide category.

The canonical IDs, titles, questions, and descriptions live in
`research/taxonomy.json`. Do not introduce a new area or domain in an individual
brief without updating that file and explaining the need in the pull request.

## Statuses

Use one of these status values:

| Status | Meaning |
|---|---|
| `seed` | Promising question, not yet scoped. |
| `scoping` | Being turned into a protocol, dataset, or collaborator plan. |
| `ready-for-collaboration` | Clear enough for external contributors to help. |
| `active` | Currently being executed or written up. |
| `paused` | Valid idea, but blocked by capacity, funding, data, or review needs. |
| `completed` | Published, released, or superseded by a finished artifact. |
| `retired` | No longer a good fit or invalidated by evidence. |

Status is descriptive, not promotional. Do not use `active`,
`ready-for-collaboration`, or `completed` to imply evidence that does not exist.

## Public Claim Boundaries

Every idea needs a public claim boundary. This should answer:

- What should readers not infer from this idea?
- What evidence would be needed before Fide AI can make a public claim?
- What limitations, populations, traditions, contexts, or deployment conditions
  matter?

Examples:

- "This idea does not imply that AI should provide pastoral care."
- "This idea does not establish that one tradition's answer is preferred."
- "This idea does not evaluate deployed products until harnesses and retrieval
  layers are included."
- "This idea should not be used to rank models without calibrated human review."

Read `CLAIMS_POLICY.md` before making claims based on repository content.

## Privacy and Sensitive Information

Do not include:

- credentials, API keys, tokens, or secrets;
- private participant data;
- identifying pastoral, family, student, or counseling details;
- confidential partner information;
- sensitive reviewer notes;
- unpublished raw model outputs from restricted evaluations;
- internal roadmaps, draft submission packages, release sequencing, or
  company-internal implementation commitments;
- private funding, customer, partner, or go-to-market plans;
- personal contact details or local file paths that are not intentionally
  public;
- copyrighted source text beyond short, necessary excerpts.

Use synthetic, anonymized, or generalized examples unless a maintainer has
approved a privacy-preserving process.

## Pull Request Checklist

Before opening a PR:

1. Use the correct idea filename and `FID-###` number.
2. Fill in every required section of the idea brief.
3. Check that the research-area, application-domain, and status values are valid.
4. Add or update the public claim boundary.
5. Remove private or sensitive information.
6. Run:

   ```bash
   npm run build:feed
   ```

7. Include the updated `dist/research-ideas.json` when idea briefs change.
8. Fill out the PR template, especially the sensitive information checklist.

## Website Sync

The website displays a build-time snapshot of this repo. The sync path is:

1. Idea Markdown files live in `ideas/`.
2. `npm run build:feed` parses those files.
3. The generated JSON is written to `dist/research-ideas.json`.
4. The Fide AI website consumes that JSON during its own build.
5. The website renders the Calls for Research page from the generated feed.

This means website visibility depends on both the Markdown brief and the feed
being up to date.

## Review Standards

Maintainers and reviewers should evaluate contributions for:

- mission fit;
- clarity of the research question;
- feasibility;
- relevant controls and baselines;
- reviewer qualifications;
- privacy and safety risks;
- public claim discipline;
- usefulness to affected people, domain institutions, researchers, or builders;
- whether the idea is better handled privately before becoming public.

High-quality contributions can still be early. The bar is not completeness; the
bar is clarity, care, and responsible boundaries.

## Maintainer Workflow

When accepting a new or revised idea:

1. Confirm the idea has a valid `FID-###` number.
2. Confirm the research areas, application domains, and status are valid.
3. Confirm the public claim boundary is explicit.
4. Confirm no sensitive information is present.
5. Run `npm run build:feed`.
6. Check that `dist/research-ideas.json` includes the expected idea fields.
7. Merge only when the README index, if affected, remains accurate.

When changing status:

- Move from `seed` to `scoping` only when someone is shaping a method or
  collaboration plan.
- Move to `ready-for-collaboration` only when the task is concrete enough for an
  external contributor.
- Move to `active` only when work is actually underway.
- Move to `completed` only when there is a linked public artifact.
- Move to `retired` when the idea no longer fits or evidence has undermined it.

## Community Expectations

Be precise, charitable, and evidence-seeking. This repo touches topics where
people may have deep theological, pastoral, family, and institutional concerns.
Disagreement is expected; careless claims, private disclosures, and dismissive
engagement are not.

Read `CODE_OF_CONDUCT.md` before participating.

## Contribution License

By contributing, you agree that your contributions are licensed under this
repository's dual-license structure:

- written research material and documentation under CC BY 4.0;
- code, scripts, workflows, and machine-readable configuration under Apache 2.0.

Do not contribute material you do not have the right to license on those terms.
