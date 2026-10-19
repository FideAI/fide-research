# FID-028: Christian Source Authority and RAG

Status: `seed`

Primary area: `grounding-truthfulness`

Additional areas: `faith-religious-life`

Application domains: `faith-and-religious-life`

Specific context: Christian churches and related institutions

Primary need: theological librarianship, RAG evaluation, denominational experts

[Start a call discussion / offer to help](https://github.com/FideAI/fide-research/issues/new?template=call-discussion.yml&title=Discussion%3A+FID-028+%E2%80%94+Christian+Source+Authority+and+RAG&call=FID-028%0ABrief%3A+https%3A%2F%2Fgithub.com%2FFideAI%2Ffide-research%2Fblob%2Fmain%2Fideas%2FFID-028-christian-source-authority-rag.md%0AExisting+threads%3A+https%3A%2F%2Fgithub.com%2FFideAI%2Ffide-research%2Fissues%3Fq%3Dis%253Aissue%2B%2522FID-028%2522%2Bin%253Atitle) · [Check existing threads](https://github.com/FideAI/fide-research/issues?q=is%3Aissue+%22FID-028%22+in%3Atitle)

## Question

Can Christian RAG systems distinguish and correctly use Scripture, creeds,
confessions, councils, catechisms, denominational policies, patristic sources,
commentaries, sermons, blogs, and academic theology?

## Why It Matters

Christian source authority is structured. Treating a blog post, sermon, Bible
verse, catechism paragraph, and local policy as equal retrieved chunks can
mislead users even when citations are technically accurate.

## Hypothesis

Most RAG systems will retrieve semantically relevant passages but fail to encode
authority level, tradition, genre, and binding status unless the corpus and
answer policy are explicitly designed around ecclesial source hierarchy.

## Proposed Method

- Build source-hierarchy test corpora for selected traditions.
- Create questions requiring source ranking, authority classification, and
  conflict handling.
- Score retrieval recall, quote accuracy, authority use, answer humility, and
  distinction between binding teaching and commentary.
- Annotate source edition, tradition, genre, author/institution, binding scope, date,
  and permitted use. Include cases where a correct quotation supports neither the
  doctrinal claim nor the proposed action.
- Compare authority-aware retrieval with ordinary retrieval under matched source and
  inference budgets; test controlled conflicts and source swaps.

## Needed Controls

- Versioned source corpora with licensing review.
- Tradition-specific authority metadata.
- Near-match and conflicting-source adversarial cases.
- Human review by source experts.
- Evaluate source accuracy, interpretive warrant, and practical application separately;
  one tradition's hierarchy must not silently govern another's cases.

## Outputs

- Christian RAG authority benchmark.
- Corpus metadata schema.
- Source-card template for faith-facing AI products.

## Open Questions

- Which traditions should be supported first?
- How should copyrighted Bible translations and denominational texts be handled?
- Can a single RAG system responsibly serve multiple traditions?

## Ways to Help

- Curate source hierarchies.
- Build corpus metadata tools.
- Review RAG outputs for authority misuse.

## Public Claim Boundary

This work can evaluate source use within defined corpora and traditions. It
cannot certify total theological adequacy.

## Program Map

See the [FMG-Bench faith evaluation program](../research/faith-evaluation-and-fmg-bench.md) for shared methods, related calls, and evidence boundaries.
