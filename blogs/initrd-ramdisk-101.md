---
id: initrd-ramdisk-101
title: "initrd ramdisk 101"
date: 2018-03-18
category: Linux
tags: ["initrd", "ramdisk", "linux", "boot process", "kernel", "initramfs", "system-boot"]
videoId: JnwO_SgjPeU
excerpt: "Let's talk about the initrd"
---

# initrd ramdisk 101

Let's talk about the initrd (initial ramdisk).

This video explains what the initrd is and how it fits into the Linux boot process.

## What is initrd?

The initrd (initial ramdisk) is a temporary root filesystem that gets loaded into memory during the boot process. It contains essential drivers and scripts needed to mount the real root filesystem and continue the boot process.

## Why is initrd Needed?

The Linux kernel is relatively small and doesn't include drivers for every possible storage device. The initrd provides:

- **Storage drivers**: Drivers needed to access the real root filesystem (SATA, NVMe, USB, RAID, etc.)
- **Filesystem drivers**: Support for various filesystem types (ext4, btrfs, xfs, etc.)
- **Encryption support**: Tools to unlock encrypted root partitions
- **Network boot**: Drivers and tools for network-based root filesystems (NFS, iSCSI)

## Boot Process Overview

1. Bootloader (GRUB) loads the kernel and initrd into memory
2. Kernel starts and mounts the initrd as a temporary root
3. Init scripts in initrd load necessary drivers
4. Real root filesystem is mounted
5. System switches to the real root (pivot_root)
6. Normal system init takes over

## Understanding initrd

Understanding the initrd is fundamental to:
- Troubleshooting boot issues
- Creating custom boot environments
- Understanding how Linux systems initialize
- Recovering from failed boots

## Music Credits

End song: "Tom Perry" by Twin Musicom is licensed under a Creative Commons Attribution license.
- Source: http://www.twinmusicom.org/song/245/
- Artist: http://www.twinmusicom.org

[Watch on YouTube](https://youtube.com/watch?v=JnwO_SgjPeU)
