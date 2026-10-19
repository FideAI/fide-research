# FID-019: Cross-Lingual and Minority-Faith Evaluation

Status: `seed`

Primary area: `grounding-truthfulness`

Additional areas: `faith-religious-life`

Application domains: `faith-and-religious-life`, `education-and-youth`

Primary need: multilingual reviewers, dataset design

[Start a call discussion / offer to help](https://github.com/FideAI/fide-research/issues/new?template=call-discussion.yml&title=Discussion%3A+FID-019+%E2%80%94+Cross-Lingual+and+Minority-Faith+Evaluation&call=FID-019%0ABrief%3A+https%3A%2F%2Fgithub.com%2FFideAI%2Ffide-research%2Fblob%2Fmain%2Fideas%2FFID-019-cross-lingual-minority-faith-evaluation.md%0AExisting+threads%3A+https%3A%2F%2Fgithub.com%2FFideAI%2Ffide-research%2Fissues%3Fq%3Dis%253Aissue%2B%2522FID-019%2522%2Bin%253Atitle) · [Check existing threads](https://github.com/FideAI/fide-research/issues?q=is%3Aissue+%22FID-019%22+in%3Atitle)

## Question

Do AI systems handle faith-facing questions reliably across languages,
minority-faith contexts, diaspora communities, and traditions with less
representation in training data?

## Why It Matters

Religious bias and omission may be worse outside English and majority-Christian
contexts. For broader AI ethics, this connects faith-facing evaluation to
multilingual fairness, cultural context, and low-resource benchmark design.

## Hypothesis

Models will show stronger hallucination, stereotyping, source gaps, and
overgeneralization in minority-faith or non-English contexts, especially where
religious vocabulary is culturally specific or source corpora are sparse.

## Proposed Method

- Select language/tradition pairs with expert reviewers.
- Build parallel and culturally specific prompts.
- Score source accuracy, stereotype avoidance, translation fidelity, tradition
  specificity, and safe escalation.
- Compare model families and retrieval corpora.

## Needed Controls

- Native or expert-language review.
- Avoid direct translation as the only benchmark method.
- Local legal and cultural risk review.
- Clear source licensing.

## Outputs

- Cross-lingual faith-facing evaluation set.
- Minority-faith source and rubric guidance.
- Report on language/tradition performance gaps.

## Open Questions

- Which languages and traditions should be prioritized first?
- How should Fide avoid extractive data collection?
- What standards apply when public sources are limited?

## Ways to Help

- Serve as multilingual reviewer.
- Curate tradition-specific sources.
- Translate and culturally adapt scenarios.

## Public Claim Boundary

This work can compare defined language/tradition conditions. It cannot generalize
to all communities within a religion or language group.
