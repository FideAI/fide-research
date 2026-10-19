# Direct mechanisms and warranted trust

Reviewed October 15–16, 2026. Targeted methodological update for FID-097 through
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

## Responses and explanatory scope

Neel Nanda's [author-crossposted response](https://www.lesswrong.com/posts/x4kvabkF2Jk8GLZp8/linkpost-neural-networks-are-already-clean)
was read in full on October 16. He supports native-neuron investigation while
questioning completeness after graph pruning, weak-activation coverage, and
broader conclusions. This is early methodological commentary, not replication.
Cammarata's explanation tests and simulation discussion were also reread; his
account already requires falsifiable conjectures and acknowledges coverage limits.

Our proposed standard concerns which distinctions an explanation must preserve.
An account can predict disclosure while missing its scope or source protection.
Ethical assumptions specify why these differences matter; empirical investigation
must allow the finding that the model ignores them. Nothing here establishes
that a particular ethical consideration occupies weak activations.

Ross's [discussion of overridden obligations](https://ditext.com/ross/right2.html)
(*The Right and the Good*, 1930, chapter II) supplies a normative antecedent.
The passages on justified promise-breaking and normative versus causal force were
read October 16; they do not establish any model mechanism. Childress and colleagues'
[least-infringement condition](https://bioethics.jhu.edu/wp-content/uploads/2023/05/Public-Health-Ethics-Mapping-the-Terrain-Childress-2002-The-Journal-of-Law-Medicine-Ethics-Wiley-Online-Library.pdf)
(2002, p. 173; justificatory conditions inspected October 16) more directly supports
limiting the content and recipients of a justified disclosure. Applying this
public-health framework to model behavior is our proposal, not their finding.

FID-098 compares confidentiality sensitivity, retaliation avoidance, automatic
anonymization, and consent or confidentiality cues. Keep disclosure of the defect
warranted under the selected view; hold identification benefit and exposure risk
fixed while independently varying the reviewer's confidentiality undertaking and
the worker's valid agreement to be named. Choose cases where the view and stipulated
hypotheses predict different responses. Define retaliation avoidance as responding
only to the fixed risk and benefit; test validity and paraphrases. No single behavioral contrast establishes a mechanism.

FID-098 compares headline and constraint-specific predictions, FID-099 tests their
preservation through training, and FID-101 measures consequences for auditing.
Evaluate held-out predictions and interventions separately. A simple cue-based
account may explain a flawed model better than a richer account of reasons.
This is a methodological proposal drawing on existing causal methods, not a new
empirical finding or a claim of conceptual priority.

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
