---
id: free-language-embeddings
title: "Free Language Embeddings: 66.5% on Google Analogies with 1/3 the Data"
date: 2026-03-20
category: AI/ML
tags: ["word-embeddings", "word2vec", "NLP", "free-software", "DFSG", "machine-learning", "embeddings", "open-source"]
excerpt: "300-dimensional word vectors trained from scratch on ~2B tokens of freely-licensed text. Beats the original word2vec by 5.5 points using 1/3 the data. Every dataset DFSG-compliant, every weight reproducible."
---

# Free Language Embeddings (V34)

300-dimensional word vectors trained from scratch on ~2B tokens of freely-licensed text using a single RTX 3090.

**66.5% on Google analogies** — beating the original word2vec (61% on 6B tokens) by 5.5 points with 1/3 the data.

## Interactive Demos

Explore the embeddings yourself:

- [app:browser:https://ruapotato.github.io/Free-Language-Embeddings/spectrogram.html](Embedding Spectrogram) — PCA waves, sine fits, cosine surfaces across V28/V33/V34/Google
- [app:browser:https://ruapotato.github.io/Free-Language-Embeddings/semantic_3d.html](3D Semantic Directions) — See how semantic axes align in the learned geometry
- [app:browser:https://ruapotato.github.io/Free-Language-Embeddings/dashboard.html](Training Dashboard) — Loss curves and training metrics

## Model Details

- **Architecture**: Dynamic masking word2vec skip-gram
- **Dimensions**: 300
- **Vocabulary**: 100,000 whole words
- **Training data**: ~2B tokens, all DFSG-compliant
- **Training hardware**: Single NVIDIA RTX 3090
- **Training time**: ~4 days (2M steps)
- **License**: GPL-3.0
- **Parameters**: 60M (30M target + 30M context embeddings)

## What Makes This Different

**Free as in freedom.** Every dataset is DFSG-compliant. Every weight is reproducible. GPL-3.0 licensed. The goal: word embeddings you could `apt install` from Debian main.

**Dynamic masking.** Randomly masks context positions during training, forcing the model to extract signal from partial views. The result: geometry that crystallizes during cosine LR decay — analogies jump from 1.2% to 66.5% in the second half of training.

**Whole-word vocabulary.** No subword tokenization. Subwords break word2vec geometry completely — they don't carry enough meaning individually for co-occurrence statistics to produce useful structure.

## Training Data

All training data meets the Debian Free Software Guidelines for redistribution, modification, and use. No web scrapes, no proprietary datasets.

- **Wikipedia** (30%) — CC BY-SA 3.0
- **Project Gutenberg** (20%) — Public domain
- **arXiv** (20%) — Various open access
- **Stack Exchange** (16%) — CC BY-SA 4.0
- **US Government Publishing Office** (10%) — Public domain (US gov)
- **RFCs** (2.5%) — IETF Trust
- **Linux kernel docs, Arch Wiki, TLDP, GNU manuals, man pages** (1.5%) — GPL/GFDL

## Benchmark Results (Google Analogies)

- **fle V34 (this model)** — 66.5% on ~2B tokens
- **word2vec (Mikolov 2013)** — 61.0% on 6B tokens
- **GloVe (small)** — 71.0% on 6B tokens
- **Google word2vec** — 72.7% on 6B tokens
- **GloVe (Pennington 2014)** — 75.6% on 840B tokens
- **FastText (Bojanowski 2017)** — 77.0% on 16B tokens

Breakdown: semantic 61.4%, syntactic 69.2%. Comparatives 91.7%, plurals 86.8%, capitals 82.6%.

## Examples

```
$ python fle.py king - man + woman
  → queen                0.7387
  → princess             0.6781
  → monarch              0.5546

$ python fle.py paris - france + germany
  → berlin               0.8209
  → vienna               0.7862
  → munich               0.7850

$ python fle.py --similar cat
  kitten               0.7168
  cats                  0.6849
  tabby                 0.6572
  dog                   0.5919

$ python fle.py ubuntu - debian + redhat
  centos               0.6261
  linux                0.6016
  rhel                 0.5949

$ python fle.py brain
  cerebral             0.6665
  cerebellum           0.6022
  nerves               0.5748
```

## Quick Start

```bash
pip install huggingface_hub numpy
python -c "
from huggingface_hub import hf_hub_download
hf_hub_download('hackersgame/Free_Language_Embeddings', 'fle_v34.npz', local_dir='.')
hf_hub_download('hackersgame/Free_Language_Embeddings', 'fle.py', local_dir='.')
"

python fle.py king - man + woman
python fle.py --similar cat
python fle.py   # interactive mode
```

## Python API

```python
from fle import FLE

fle = FLE()                                  # loads fle_v34.npz
vec = fle["cat"]                             # 300d numpy array
fle.similar("cat", n=10)                     # nearest neighbors
fle.analogy("king", "man", "woman")          # king:man :: woman:?
fle.similarity("cat", "dog")                 # cosine similarity
fle.query("king - man + woman")              # vector arithmetic
```

## The Journey

This project started as a language model experiment, spent 24 versions discovering that prediction tasks — not reconstruction — create geometric structure in vector spaces, then focused on pushing word embeddings as far as possible on free data.

### Key Lessons

1. **Prediction creates geometry, reconstruction doesn't.** Autoencoding gives "swiss cheese" space — meaningless between encodings.
2. **Whole-word vocabulary is critical.** Subword tokenization breaks word2vec geometry completely.
3. **Dual objectives create richer geometry.** Two complementary gradients on shared embeddings produce substantially richer structure.
4. **Dynamic masking unlocks crystallization.** V34 did nothing for 50% of training, then geometry exploded as LR dropped.
5. **Small data can win.** 2B tokens beats 6B when the training signal is right.

## Resources

- **Hugging Face**: https://huggingface.co/hackersgame/Free_Language_Embeddings
- **Source code**: https://github.com/ruapotato/Free-Language-Embeddings

## Citation

```
@misc{hamner2026fle,
  title={Free Language Embeddings: Dynamic Masking Word2Vec on DFSG-Compliant Data},
  author={David Hamner},
  year={2026},
  url={https://github.com/ruapotato/Free-Language-Embeddings}
}
```

GPL-3.0 — Built by David Hamner.
