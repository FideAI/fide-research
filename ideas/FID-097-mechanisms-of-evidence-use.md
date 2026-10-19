# FID-097: What Makes a Model Use the Evidence?

Status: `ready-for-collaboration`

Primary area: `grounding-truthfulness`

Additional areas: `agent-alignment`, `evaluation-science`

Application domains: `cross-domain`, `faith-and-religious-life`

Primary need: mechanistic interpretability, source-use evaluation, activation experiments, replication

[Join the discussion / offer to help](https://github.com/FideAI/fide-research/issues/24) · [Check existing threads](https://github.com/FideAI/fide-research/issues?q=is%3Aissue+%22FID-097%22+in%3Atitle)

## Question

Which internal mechanisms contribute to whether a model checks a source, answers without retrieval, or admits that it cannot verify an answer when user pressure conflicts with evidence requirements?

## Why It Matters

An available source does not guarantee that a model will consult it or use it faithfully. Understanding where source use breaks down could improve model training, tool selection, and the way systems handle unsupported answers.

## Hypothesis

Some source-use failures depend on identifiable computations that weigh evidence requirements against user instructions or fluent completion. Selective interventions may improve warranted source use without forcing unnecessary retrieval. No selective effect, or an effect explained by generic compliance, would count against this account.

## Proposed Method

- Specify when consultation is required, optional, or inappropriate before labeling a failure. Reproduce a required-consultation failure in an open-weight model using controlled passages with exact ground truth. Separate source availability, tool invocation, successful retrieval, evidence integration, and final answer fidelity.
- Vary verification requirements, user requests to rely on memory, and evidence that contradicts an initial answer. Include familiar passages and newly constructed texts, with matched religious and nonreligious tasks; an exact quotation alone establishes neither source use nor a memory-based mechanism.
- Compare direct neuron and circuit analysis with probes and extracted-feature methods on separate discovery examples. Inspect both activation signs, relevant attention paths, and surrounding computations where the architecture permits; record approximation errors and unresolved pathways.
- Before evaluating new cases, write competing explanations and predictions about when verification should fail. Test examples intended to activate a proposed mechanism and closely matched examples that should not; keep discovery, intervention tuning, and final evaluation separate.
- Test candidate mechanisms with activation patching or ablation, and restoration where feasible. Investigate tool selection before retrieval separately from evidence use after retrieval; compare internal interventions with capable prompting and system-control baselines.
- Replicate across unseen passages, paraphrases, and a second model family. Test whether internal evidence predicts a new failure or supports a better remedy, adapting the comparisons in FID-101 without waiting for a separate study.

## Needed Controls

- Control familiarity, task difficulty, answer length, and generic instruction compliance; distinguish genuine consultation from a fabricated citation.
- Include invalid but authoritative-looking sources, unavailable sources, and tasks where retrieval is unnecessary. Distinguish a designated source for exact quotation from a reliable factual source or legitimate decision authority. Measure unnecessary tool use, refusal, useful completion, and answer accuracy.
- Use matched or random intervention controls and report capability damage. Test in the original model and examine unnatural activation states, overlapping functions, and alternative explanations. A changed or restored output alone does not validate a feature label or establish the complete mechanism of ordinary behavior.
- Keep discovery, intervention tuning, and final evaluation data separate; report uncertainty, unsuccessful interventions, and failures to replicate.
- Preserve the native-model baseline when using an approximate replacement model. A successful intervention must distinguish appropriate verification from loss of memory, indiscriminate tool use, or generic obedience.

## Relationship to Existing Ideas

Extends FID-056 from source-fidelity outcomes to internal causal mechanisms, with FID-008 contributing honesty under pressure and FID-010 contributing authority boundaries. FID-101 tests the usefulness of the resulting evidence.

## Outputs

- A reproducible source-use task suite with stage-specific outcomes and held-out cases.
- A bounded causal account of a source-use failure, or a documented negative result.
- An evaluated training or system intervention if the evidence supports one.
- A versioned comparison of competing explanations, including predictions made before held-out testing, disconfirming cases, and the best non-mechanistic remedy.

## Open Questions

- Which failures arise in the model and which arise in retrieval or tool configuration?
- Does the mechanism explain source use beyond the discovery task and model?

## Ways to Help

- Reproduce one source-use failure in an accessible model and document the exact checkpoint and tool setup.
- Contribute activation experiments, stronger behavioral baselines, or independent replication.
- Review source-authority assumptions and matched religious and nonreligious examples.

## Public Claim Boundary

This is a proposed mechanistic study, not a completed explanation of Fide's source-use findings. A selective intervention on a named task would not establish general honesty, epistemic virtue, or reliable source use across models and deployed systems.

## Program Map

[Mechanisms of Trustworthy AI Behavior](../research/mechanisms-of-trustworthy-ai-behavior.md) connects these proposed studies, related work, and collaboration paths.
