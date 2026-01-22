---
id: recover-forgotten-password
title: "Recover Forgotten Password"
date: 2018-02-09
category: Linux
tags: ["password-recovery", "ubuntu", "opensuse", "redhat", "fedora", "root", "security", "system-administration", "grub"]
videoId: RSN2oRC8HiM
excerpt: "How to reset roots password on Ubuntu, OpenSuSE, Redhat, /etc"
---

# Recover Forgotten Password

How to reset root's password on Ubuntu, OpenSuSE, Redhat, and other Linux distributions.

This tutorial walks through the process of recovering a forgotten root password on various Linux systems. The technique involves booting into single-user mode or using the GRUB bootloader to gain access and reset the password.

## Distributions Covered

This guide works for multiple Linux distributions:

- **Ubuntu** - Debian-based systems
- **OpenSuSE** - SUSE Linux Enterprise family
- **Red Hat / Fedora / CentOS** - Red Hat family distributions

## The Recovery Process

The general approach involves:

1. **Access the GRUB bootloader** - Interrupt the normal boot process to access GRUB
2. **Edit the boot parameters** - Modify the kernel command line to boot into single-user mode or a rescue shell
3. **Remount the filesystem** - Ensure the root filesystem is mounted with write permissions
4. **Change the password** - Use the `passwd` command to set a new root password
5. **Reboot normally** - Exit the rescue environment and boot into your system with the new password

## Important Security Note

This technique demonstrates why physical security of your machines is important. Anyone with physical access to a Linux machine can potentially reset the root password using this method unless additional security measures (like encrypted disks or GRUB passwords) are in place.

This is an essential skill for system administrators who need to regain access to systems where the root password has been lost or forgotten.

[Watch on YouTube](https://youtube.com/watch?v=RSN2oRC8HiM)
