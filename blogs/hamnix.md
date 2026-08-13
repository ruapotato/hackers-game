---
id: hamnix
title: "Hamnix: I Wrote an OS in a Language I Invented, Then Ported Its Userland to Linux"
date: 2026-08-12
category: Linux
tags: ["hamnix", "operating-system", "plan9", "adder", "kernel", "linux", "from-scratch", "desktop-environment"]
excerpt: "A from-scratch x86_64 kernel with zero lines of C, written in a Python-syntax language with its own compiler. Then the whole userland (init, shell, window system, desktop) was ported to run on a stock Linux kernel."
---

# Hamnix

Hamnix started as a from-scratch operating system: its own x86_64 kernel, its own drivers, its own filesystems, network stack, window system and desktop. **Zero lines of C in the kernel.** It is written in Adder, a systems language with Python's syntax and its own compiler, which I also wrote.

The shape is Plan 9's. Everything is a file server, processes get their own namespaces, and you compose a system by binding things into it rather than by calling APIs. `/net/tcp` is a directory. `/dev/wsys` is the window system. You can drive the window system with `echo`.

[app:browser:https://255.one/](Downloads, screenshots and packages at 255.one)

## Then it grew a second half

The interesting turn is what happened next. The userland (PID 1, the shell, the window system, the compositor, the desktop, the file manager, the package manager, every application) was ported to run on **a stock Linux kernel**.

Not a fork. Not a patched kernel. Not a kernel module. The Linux kernel you already have, with Hamnix's userland on top of it and nothing of GNU or systemd underneath.

That gives two systems sharing one userland:

**Hamnix native** is my kernel. It is the more radical artifact, and the one where the ideas live. It runs Debian binaries too, through a Linux ABI shim, inside `enter linux { … }`.

**Hamnix Linux** is the same userland on Linux's kernel. It is the half that stands a chance of running on hardware nobody wrote a driver for twice.

The userland turned out to be the product. The kernel underneath it is a choice.

## What the Linux version actually does

It boots UEFI into an Adder PID 1, builds its namespace with `bind`, starts a shell, and runs its rc scripts onto a real ext4 root. Files you write on one boot are there on the next. It installs itself onto a disk, and it updates itself over the network from a signed package repository: 124 packages, Ed25519 signatures verified before anything is unpacked.

There is a desktop. A compositor, a panel, a taskbar, an Applications menu with categories and search, a file manager, a terminal, a text editor, and around two dozen applications. There is a web browser I wrote. X programs, including Firefox, run through a rootless Xwayland bridge.

Two numbers I am willing to stand behind, because they were measured with instruments that had to prove themselves first:

* **Input reaches the screen in about 0.3 milliseconds**, down from about 10. The compositor used to wake on a fixed timer no matter what you did. Now it wakes because you did something.
* **Dragging a window costs about 4% of a CPU core**, down from about 36%. It was rendering far more frames than a screen can show, and waking far more often than it drew.

## Where it honestly stands

Real hardware is untested. A virtual machine is the primary path at the moment, alongside hybrid development where parts of the userland run directly on a development host. A native install is in progress.

That is a 1.0 in the sense of "it works and it is worth looking at", not "make this your daily driver". The distinction matters enough to spell out, and the site spells it out further, including the parts that do not work.

## Why bother

Because almost nothing in a modern Linux userland has to be the way it is, and the only way to find out which parts are essential is to write the other ones.

Some answers surprised me. A window system you can drive with shell commands is genuinely pleasant. A package manager that refuses to publish rather than ship something broken has saved me more times than any test suite. A language with Python's syntax and no runtime turns out to be a fine way to write a kernel.

Some answers were humbling. This project has a long list of bugs that lived for months because something reported success instead of the truth: a write that succeeded into a buffer nobody read, a gate that passed because it measured the wrong thing, a comment that promised a check the code did not contain. That list is public too.

## Links

* [Hamnix, downloads and packages](https://255.one/)
* [hamnix-linux on GitHub](https://github.com/HamnixOS/hamnix-linux), the userland on a Linux kernel
* [Hamnix on GitHub](https://github.com/HamnixOS/Hamnix), the native OS and its kernel
* [The signed package repository](https://github.com/HamnixOS/packages)
