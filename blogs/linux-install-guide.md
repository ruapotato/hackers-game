---
id: linux-install-guide
title: "Linux Install Guide"
date: 2019-05-07
category: Linux
tags: ["linux", "installation", "tutorial", "beginner", "guide", "uefi", "bios", "gpt", "mbr", "ext4", "btrfs", "xfs"]
videoId: 9l6UbcxFONE
excerpt: "Learn to install any version of Linux."
---

# Linux Install Guide

Learn to install any version of Linux.

This comprehensive guide walks you through the process of installing Linux on your computer. Whether you're a complete beginner or looking to try a new distribution, this tutorial covers the essential steps to get Linux up and running on your system.

## Before You Begin

### Choosing a Distribution

Popular choices for beginners:
- **Ubuntu**: Excellent hardware support, large community
- **Linux Mint**: Familiar interface for Windows users
- **Fedora**: Up-to-date software, good for developers
- **OpenSUSE**: Enterprise-quality with user-friendly tools
- **Manjaro**: Access to Arch packages with easier setup

### System Requirements

Most modern Linux distributions require:
- 2GB RAM minimum (4GB recommended)
- 20GB disk space minimum
- 64-bit processor
- USB port for installation media

## Step 1: Download the ISO

1. Visit the distribution's official website
2. Download the ISO file (usually 2-4GB)
3. Verify the checksum (optional but recommended)

## Step 2: Create Installation Media

### Using a USB Drive

You'll need a tool to write the ISO to USB:
- **Janit**: https://bitbucket.org/hackersgame/janit/src/master/
- **Rufus** (Windows)
- **Etcher** (cross-platform)
- **dd** (Linux command line)

## Step 3: Boot From USB

### BIOS vs UEFI

**BIOS Systems:**
- Press F2, F12, Del, or Esc during startup
- Select USB drive from boot menu
- MBR partition table required

**UEFI Systems:**
- Access UEFI settings (usually F2 or Del)
- Disable Secure Boot if necessary
- Select USB from boot options
- GPT partition table supported

## Step 4: Partition Your Drive

### Partition Schemes

**MBR (Master Boot Record):**
- Legacy BIOS systems
- Maximum 4 primary partitions
- 2TB drive limit

**GPT (GUID Partition Table):**
- UEFI systems
- Unlimited partitions
- Supports large drives

### Filesystem Options

- **ext4**: Default for most distributions, reliable
- **btrfs**: Advanced features (snapshots, compression)
- **xfs**: Good for large files, high performance

### Recommended Partitions

1. **EFI System Partition** (UEFI only): 512MB, FAT32
2. **Root (/)**: 20-50GB, ext4
3. **Home (/home)**: Remaining space, ext4
4. **Swap**: Equal to RAM or 2-8GB

## Step 5: Installation

Most installers guide you through:
1. Language and keyboard selection
2. Timezone configuration
3. User account creation
4. Package selection (if applicable)
5. Bootloader installation

## Step 6: Post-Installation

After rebooting:
1. Update your system
2. Install additional drivers if needed
3. Configure your desktop environment
4. Install your preferred applications

## Dual-Boot with Windows

If keeping Windows:
1. Shrink Windows partition first (from Windows)
2. Install Linux in the freed space
3. GRUB will detect both operating systems
4. Choose OS at boot time

[Watch on YouTube](https://youtube.com/watch?v=9l6UbcxFONE)
