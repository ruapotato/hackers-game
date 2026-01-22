---
id: nn-trained-on-zelda-music-overfit-example
title: "NN trained on Zelda music (Overfit example)"
date: 2017-04-16
category: AI/ML
tags: ["neural-network", "machine-learning", "music", "zelda", "ai", "rnn", "overfitting", "music-generation"]
videoId: xHc5NSS1PRE
excerpt: "recurrent neural network trained on 15 Zelda songs."
---

# NN trained on Zelda music (Overfit example)

Recurrent neural network trained on 15 Zelda songs.

## The Experiment

This project used a recurrent neural network (RNN) to learn from and generate music in the style of The Legend of Zelda video game series.

## The Overfitting Problem

### What Happened
The sample size was too small and the network became overfit.

### What is Overfitting?
Overfitting occurs when a neural network:
- Memorizes the training data instead of learning patterns
- Performs well on training data but poorly on new inputs
- Essentially "remembers" rather than "learns"

### The Result
The network learned to reproduce the training songs almost exactly rather than generating truly original compositions. But hey, I can make a really long Zelda song if I want!

## Other Outputs

The other example songs generated were... more original... but less nice sounding. This is the trade-off with neural network music generation - too much training leads to copying, too little leads to chaos.

## Lessons Learned

- 15 songs is not enough training data for music generation
- Overfitting is a real challenge in creative ML applications
- Finding the right amount of training is crucial
- Sometimes the "wrong" result is still interesting

## Technical Basis

Based on the biaxial-rnn-music-composition project:
https://github.com/hexahedria/biaxial-rnn-music-composition

[Watch on YouTube](https://youtube.com/watch?v=xHc5NSS1PRE)
