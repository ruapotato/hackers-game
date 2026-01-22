---
id: navigating-the-gnu-linux-filesystem
title: "Navigating the GNU Linux Filesystem"
date: 2021-03-08
category: Linux
tags: ["filesystem", "linux", "bash", "ls", "cd", "navigation", "terminal", "fhs", "directories"]
videoId: FCyjY5R05N8
excerpt: "Learn how to navigate the GNU Linux filesystem."
---

# Navigating the GNU Linux Filesystem

Learn how to navigate the GNU Linux filesystem.

## Essential Commands

### `ls` - List Directory Contents
```bash
ls           # List files in current directory
ls -l        # Long format with details
ls -a        # Show hidden files (starting with .)
ls -la       # Combine long format and hidden files
ls /path     # List specific directory
```

### `cd` - Change Directory
```bash
cd /home     # Go to absolute path
cd Documents # Go to relative path
cd ..        # Go up one directory
cd ~         # Go to home directory
cd -         # Go to previous directory
```

### `pwd` - Print Working Directory
```bash
pwd          # Show current location
```

## The Linux Directory Structure

### Key Directories
- `/` - Root of the entire filesystem
- `/home` - User home directories
- `/root` - Root user's home
- `/etc` - System configuration files
- `/var` - Variable data (logs, databases)
- `/tmp` - Temporary files
- `/usr` - User programs and data
- `/bin` - Essential binaries
- `/sbin` - System binaries
- `/dev` - Device files
- `/proc` - Process information
- `/sys` - System information

## Path Types

### Absolute Paths
Start from root (`/`):
```bash
/home/user/Documents/file.txt
```

### Relative Paths
Start from current directory:
```bash
./script.sh      # Current directory
../other/file    # Up one, then down
Documents/file   # Down from current
```

## Tips

- Use Tab completion to autocomplete paths
- Use `..` to go up directories
- Hidden files start with `.`
- Everything in Linux is a file (even directories)

## Full Blog

For an interactive 3D visualization: https://www.hackers-game.com/2021/03/08/gnu-linux-filesystem-in-3d/

[Watch on YouTube](https://youtube.com/watch?v=FCyjY5R05N8)
