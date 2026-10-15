# Direct mechanisms and warranted trust

Reviewed October 15, 2026. Targeted methodological update for FID-097 through
FID-101. Source reading is not independent replication.

## Sources and reading depth

- Nick Cammarata, [Neural Networks Are Already Clean](https://already-clean.goodfire.com/),
  Goodfire, 2026. Read the essay and appendices, including the author's text
  edition. It proposes that direct investigation of native mechanisms is more
  tractable than commonly assumed. The explanation of apparent polysemanticity
  emphasizes observation errors and related generalizations. Treat this as a
  working hypothesis; the essay points to a forthcoming technical companion.
- Chris Olah, [Distributed Representations: Composition & Superposition](https://transformer-circuits.pub/2023/superposition-composition/index.html),
  2023. Read the informal note. Composition and superposition are distinct and
  can coexist. Terminology alone cannot settle which account explains a model.
- Anthropic, [Circuit Tracing](https://transformer-circuits.pub/2025/attribution-graphs/methods.html),
  2025. Rechecked the method, replacement-model distinction, and validation
  requirements. Neuron-based and reconstructed-feature methods can both be
  useful; apparent readability does not establish causal faithfulness.
- Anthropic, [CHIVE](https://alignment.anthropic.com/2026/chive/), 2026.
  Rechecked the primary research overview and stated limits. Tested activation
  readers did not improve counterfactual prediction over transcript-only
  access. This does not evaluate every mechanistic method or human auditor.
- Lyndon Drake and Zandi Eberstadt, [Transplanting, inverting, and preventing a
  misalignment persona](https://arxiv.org/abs/2607.04510v2), 2026 preprint.
  Bibliographic record and abstract checked, not a full methods review.
  Method-conditional training effects motivate explicit comparisons of
  intervention timing and training method in FID-099; transfer is unestablished.

## Implications for the agenda

Keep all five calls. Their questions cover evidence use, moral judgment,
training, correction, and audit usefulness; a new call organized around one
method would duplicate these aims. Compare native circuits with probes and
extracted features on shared tasks. Explore surrounding computations before
assuming a human trait corresponds to one component.

Separate discovery from final tests. Record competing explanations, then
predict behavior and intervention effects on unseen examples. Include positive
examples and near misses, restoration where feasible, and capability controls.
Require a separate comparison before claiming an explanation improves a remedy
or reliance decision. Basic discovery remains valuable without that claim.

FID-097 offers an initial study: distinguish memory, verification, evidence
integration, and correction using both familiar and newly constructed texts.
FID-099 follows changes through training; FID-101 tests incremental decision
value. These connections do not make the calls dependent on one another.

## What would change this recommendation?

If native circuits cannot predict relevant behavior or yield selective
interventions, preserve that result and test other methods. If internal access
adds nothing beyond a competent behavioral baseline at comparable cost,
narrow the practical claim. If a promising explanation transfers only within
one task or model, state that boundary. No result here establishes the absence
of hidden failure modes, a universal moral representation, or general safety.
