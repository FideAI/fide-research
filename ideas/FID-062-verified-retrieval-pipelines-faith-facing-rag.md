# FID-062: Verified Retrieval Pipelines for Faith-Facing RAG

Status: `seed`

Primary area: `grounding-truthfulness`

Additional areas: `faith-religious-life`

Application domains: `faith-and-religious-life`

Primary need: RAG evaluation, retrieval verification, source authority metadata

[Start a call discussion / offer to help](https://github.com/FideAI/fide-research/issues/new?template=call-discussion.yml&title=Discussion%3A+FID-062+%E2%80%94+Verified+Retrieval+Pipelines+for+Faith-Facing+RAG&call=FID-062%0ABrief%3A+https%3A%2F%2Fgithub.com%2FFideAI%2Ffide-research%2Fblob%2Fmain%2Fideas%2FFID-062-verified-retrieval-pipelines-faith-facing-rag.md%0AExisting+threads%3A+https%3A%2F%2Fgithub.com%2FFideAI%2Ffide-research%2Fissues%3Fq%3Dis%253Aissue%2B%2522FID-062%2522%2Bin%253Atitle) · [Check existing threads](https://github.com/FideAI/fide-research/issues?q=is%3Aissue+%22FID-062%22+in%3Atitle)

## Question

How can faith-facing retrieval-augmented generation pipelines be verified for
whether they retrieve authoritative, relevant, context-preserving sources before
generating answers about sacred texts, doctrine, practice, or institutional
policy?

## Why It Matters

Many faith-facing AI failures begin before generation. If retrieval surfaces the
wrong authority, a low-quality paraphrase, a fragment without context, or a
source from a different tradition, the final answer may be polished but unsafe.
Verified retrieval pipelines could make upstream failures visible before they
become trusted religious guidance.

## Hypothesis

Faith-facing RAG pipelines can be evaluated through retrieval proof obligations:
source eligibility, authority match, relevance, context sufficiency,
near-duplicate handling, corpus coverage, and abstention when no adequate source
is available.

## Proposed Method

- Define retrieval tasks for sacred-text lookup, doctrinal explanation,
  pastoral-adjacent questions, institutional policy, and cross-tradition
  comparison.
- Add source metadata from a cross-faith source schema and test whether retrieval
  respects authority and scope constraints.
- Measure retrieval recall, authority match, context sufficiency, citation
  integrity, and answer impact.
- Compare standard vector retrieval, hybrid search, reranking, metadata filters,
  and verification-aware retrieval policies.

## Needed Controls

- Separate retrieval quality from generation quality.
- Include adversarial near matches, tradition-confused sources, incomplete
  context windows, and sources with similar language but different authority.
- Track corpus coverage and require abstention when the corpus cannot support an
  answer.
- Include copyrighted, restricted, or nonpublic source constraints in evaluation
  design.

## Outputs

- Verified retrieval protocol for faith-facing RAG.
- Retrieval proof-obligation checklist.
- Benchmark set for authority match, context sufficiency, and abstention.
- Comparison report across retrieval configurations.
- Deployment guidance for institutions building or buying RAG systems.

## Open Questions

- Which retrieval failures most strongly predict harmful or misleading answers?
- How should a system explain that its corpus cannot support a user's question?
- Can retrieval verification be fast enough for production systems?
- How should verification handle traditions with multiple valid source
  hierarchies?

## Ways to Help

- Build retrieval harnesses and verification-aware RAG prototypes.
- Contribute source metadata, authority mappings, and adversarial retrieval cases.
- Review retrieval outputs for relevance, authority, and context sufficiency.
- Test abstention and uncertainty behavior when retrieval is inadequate.

## Public Claim Boundary

This work can verify retrieval behavior under specified corpora, metadata, and
tasks. It cannot guarantee that generated answers are theologically complete,
pastorally appropriate, or institutionally approved.
