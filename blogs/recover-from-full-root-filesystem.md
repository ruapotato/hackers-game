---
id: recover-from-full-root-filesystem
title: "How to Recover From a Full Root Filesystem"
date: 2018-01-10
category: Linux
tags: ["linux", "sysadmin", "troubleshooting", "filesystem", "disk-space", "recovery", "du", "sort"]
videoId: HnDN18Gc3Ig
excerpt: "If you want to find big file(s) in Linux... Watch this."
---

# How to Recover From a Full Root Filesystem

If you want to find big files in Linux, watch this.

A full root filesystem can bring a Linux system to its knees, preventing normal operations and even blocking you from logging in. This video walks through the process of identifying and removing large files that are consuming disk space, helping you recover your system and get back to normal operations.

## The Problem

When your root filesystem (`/`) fills up completely, you may experience:

- Unable to log in to the system
- Services failing to start or crashing
- Unable to create new files or save data
- System instability and errors

## Finding Big Files

The key commands covered in this tutorial:

### Using `du` (Disk Usage)

The `du` command shows disk usage for files and directories:

```bash
du -h /path/to/check
```

### Sorting by Size

Combine `du` with `sort` to find the largest files and directories:

```bash
du -h / | sort -h
```

This pipes the output of `du` into `sort` with the `-h` flag for human-readable sizes, showing the largest items at the bottom.

### Quick Recovery Steps

1. Identify what's consuming space using `du` and `sort`
2. Look in common problem areas: `/var/log`, `/tmp`, `/home`
3. Remove or compress large unnecessary files
4. Consider setting up log rotation to prevent future issues

## Prevention Tips

- Monitor disk space regularly with `df -h`
- Set up alerts for low disk space
- Configure log rotation for application and system logs
- Use separate partitions for `/var` and `/home` to prevent root filesystem issues

[Watch on YouTube](https://youtube.com/watch?v=HnDN18Gc3Ig)
