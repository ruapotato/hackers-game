---
id: upgrading-to-opensuse-tumbleweed
title: "Upgrading to Opensuse Tumbleweed"
date: 2018-01-31
category: Linux
tags: ["opensuse", "tumbleweed", "linux", "upgrade", "rolling-release", "zypper", "dup", "leap"]
videoId: Ho5bahp95gs
excerpt: "This is an online upgrade."
---

# Upgrading to Opensuse Tumbleweed

This is an online upgrade.

This video walks through the process of upgrading to openSUSE Tumbleweed, a rolling release distribution that provides the latest stable versions of all software.

## What is Tumbleweed?

**openSUSE Tumbleweed** is a rolling release distribution, meaning you get continuous updates rather than periodic major version releases. Once you're on Tumbleweed, you stay current with the latest packages through regular updates.

## Upgrading from Leap

The video demonstrates upgrading from openSUSE Leap (versions like 42.1, 42.2, 42.3) to Tumbleweed. This is an "online upgrade" - you perform the upgrade while the system is running, without needing installation media.

## The Upgrade Process

### Using zypper dup

The key command for distribution upgrades in openSUSE is:

```bash
zypper dup
```

This performs a "distribution upgrade" that handles the transition from Leap to Tumbleweed.

### Steps Overview

1. **Update repository URLs** - Point to Tumbleweed repositories
2. **Refresh repositories** - `zypper ref`
3. **Perform distribution upgrade** - `zypper dup`
4. **Reboot** into your new Tumbleweed system

## Official Documentation

For the complete, up-to-date upgrade instructions:
[openSUSE Tumbleweed Upgrade Guide](https://en.opensuse.org/openSUSE:Tumbleweed_upgrade)

## Bonus: OBS Studio on Tumbleweed

The video also references installing OBS Studio on openSUSE:
[OBS Studio Installation Instructions](https://github.com/jp9000/obs-studio/wiki/Install-Instructions#opensuse-installation-unofficial)

## Why Tumbleweed?

- **Always current** - Get the latest kernel, desktop environment, and applications
- **Stable rolling release** - OpenQA automated testing ensures stability
- **No major upgrades** - Just keep updating, no need for version jumps

[Watch on YouTube](https://youtube.com/watch?v=Ho5bahp95gs)
