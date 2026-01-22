---
id: rm-rf-ubuntu-fixable
title: "rm -rf ubuntu... fixable?"
date: 2018-01-01
category: Linux
tags: ["ubuntu", "linux", "terminal", "recovery", "rm-rf", "grub", "dpkg", "initrd", "hacking", "opensuse"]
videoId: 9aeU3JoJnuE
excerpt: "Messing with Ubuntu 16.04"
---

# rm -rf ubuntu... fixable?

Messing with Ubuntu 16.04

In this video, we explore what happens when you run the infamous `rm -rf` command on an Ubuntu system and whether the damage can be recovered. This is an educational experiment to understand Linux system internals and recovery techniques.

## The Experiment

The video demonstrates the destructive power of `rm -rf` (remove recursively with force) and attempts various recovery methods to bring the system back to life.

## Topics Explored

- **The `rm -rf` command** - Understanding why this command is so dangerous and what it actually does to your filesystem
- **GRUB bootloader** - How the bootloader is affected and recovery options
- **dpkg and package management** - Working with Debian's package manager for system repair
- **initrd (Initial RAM Disk)** - Understanding the boot process and how initrd is used
- **Cross-distribution hacking** - Attempting to use tools from openSUSE (zypper, rpm) to repair an Ubuntu system

## The "Frankenstein OS" Approach

Part of the experiment involves trying to create a hybrid system by mixing components from different distributions - what the video calls a "FrankensteinOS" or "abomination" - to see if a destroyed Ubuntu system can be revived using parts from other Linux distributions.

## Key Takeaways

- Always have backups before running dangerous commands
- Understanding system internals helps with recovery
- The Linux boot process involves multiple components that must work together
- Sometimes it's faster to reinstall than to repair

## Warning

This video is for educational purposes. Never run `rm -rf /` on a production system or any system you care about!

[Watch on YouTube](https://youtube.com/watch?v=9aeU3JoJnuE)
