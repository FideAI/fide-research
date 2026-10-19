# FID-006: Faith-Facing Retrieval Grounding and Citation Reliability

Status: `scoping`

Primary area: `grounding-truthfulness`

Additional areas: `faith-religious-life`

Application domains: `faith-and-religious-life`

Primary need: RAG evaluation

[Join the discussion / offer to help](https://github.com/FideAI/fide-research/discussions/132) · [Related tasks](https://github.com/FideAI/fide-research/issues?q=is%3Aissue+is%3Aopen+%22FID-006%22+in%3Atitle)

## Question

How reliably do faith-facing AI systems retrieve, cite, and represent religious
sources when users ask theological, historical, pastoral, or institution-specific
questions?

## Why It Matters

Many faith-facing products will be retrieval-augmented. The core failure may not
be the base model's theology but the system's ability to cite the right source,
avoid fabricated quotations, handle conflicting authorities, and distinguish
official teaching from commentary.

## Hypothesis

RAG systems will show distinct failure modes: citation fabrication, source
misranking, confessional flattening, overconfident synthesis, failure to quote
accurately, and inability to distinguish official authority from secondary
commentary.

## Proposed Method

- Build a source-grounded evaluation set across scripture, catechisms,
  denominational documents, pastoral guidelines, commentaries, and institutional
  policies.
- Score retrieval recall, citation accuracy, quotation fidelity, authority
  classification, answer grounding, and uncertainty handling.
- Compare base model, RAG harness, and retrieval configuration changes.
- Use linked source-to-interpretation-to-application cases; score exact quotation, claim
  support, contextual interpretation, source authority, and practical relevance as
  separate dimensions.
- Test source deletion and swaps with correct, irrelevant, contradictory,
  wrong-tradition, stale, and counterfeit material; distinguish retrieval failure,
  reference selection, source non-use, and unsupported synthesis.

## Needed Controls

- Versioned corpora and source hashes.
- Tradition-specific source hierarchy.
- Adversarial near-match citations.
- Human review for disputed source interpretation.
- Keep expected-answer anchors out of deployment-like inputs; observe source dependence
  through controlled behavior rather than citations or asserted reasoning alone.

## Outputs

- Faith-facing RAG benchmark.
- Citation reliability report.
- Corpus-card template.
- Procurement checklist for institutions buying RAG systems.

## Open Questions

- Which sources can be redistributed publicly?
- How should copyrighted or licensed religious texts be handled?
- How should systems represent contested authorities across traditions?

## Ways to Help

- Curate source corpora.
- Build retrieval evaluation tooling.
- Review source authority taxonomies.
- Contribute institution-specific use cases.

## Public Claim Boundary

This work can evaluate retrieval and citation behavior under defined corpora. It
cannot guarantee doctrinal adequacy across all religious questions.

## Program Map

See the [FMG-Bench faith evaluation program](../research/faith-evaluation-and-fmg-bench.md) for shared methods, related calls, and evidence boundaries.
