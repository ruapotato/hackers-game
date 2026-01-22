---
id: the-first-distro-hj-lus-bootable-rootdisk-for-linux
title: "The First Distro | H.J.Lu's bootable rootdisk for Linux"
date: 2020-06-24
category: Linux
tags: ["linux-history", "distro", "bootable", "rootdisk", "qemu", "gnu-linux", "hj-lu"]
videoId: b8-G9JjgknA
excerpt: "The first GNU+Linux distro."
---

# The First Distro | H.J.Lu's bootable rootdisk for Linux

The first GNU+Linux distro.

This video explores the very first Linux distribution - H.J. Lu's bootable rootdisk. Before Ubuntu, before Red Hat, before Slackware, there was this simple floppy disk image that allowed people to boot into a working Linux system.

## Historical Significance

H.J. Lu's bootable rootdisk represents a pivotal moment in Linux history. It was one of the first ways for people to actually try Linux without having to compile everything themselves from Linus Torvalds' kernel source code.

## Try It Yourself

You can download and test this piece of computing history for yourself!

**Download:** [HU985-5R.ZIP from PC Corner](https://www.pcorner.com/list/LINUX/HU985-5R.ZIP/INFO/)

### Running with QEMU

To run the historic bootable rootdisk, use QEMU with the following command:

```bash
qemu-system-i386 -drive file=./HU985-5R.img,if=floppy,format=raw
```

This boots the floppy image in an emulated i386 system, letting you experience what early Linux adopters would have seen.

## What to Expect

This is a minimal system from the early 1990s. Don't expect a graphical interface or modern conveniences. What you'll find is:

- A basic shell environment
- Core Unix utilities
- The ability to explore one of the first complete, bootable Linux systems

## Why This Matters

Understanding where Linux came from helps us appreciate how far it has come. From a single floppy disk to powering everything from smartphones to supercomputers, Linux's journey is remarkable.

[Watch on YouTube](https://youtube.com/watch?v=b8-G9JjgknA)
