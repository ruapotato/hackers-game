---
id: managing-linux-shell-processes
title: "Managing Linux Shell Processes"
date: 2017-12-27
category: Linux
tags: ["bg", "fg", "linux", "processes", "jobs", "job-control", "terminal", "background", "foreground"]
videoId: VVm37hZz6WU
excerpt: "How to manage stuff you start in a shell"
---

# Managing Linux Shell Processes

How to manage stuff you start in a shell.

## The Problem

You start a long-running process and your terminal is locked. Or you accidentally close a terminal and lose your running program. Understanding process management solves these problems.

## Key Commands

### `jobs` - List Background Jobs
Shows all jobs running in the current shell session:
```bash
jobs
```

### `bg` - Send to Background
Resume a stopped job in the background:
```bash
bg %1
```

### `fg` - Bring to Foreground
Bring a background job to the foreground:
```bash
fg %1
```

### `Ctrl+Z` - Suspend a Process
Pauses the current foreground process and returns you to the shell.

### `&` - Start in Background
Run a command in the background from the start:
```bash
long_running_command &
```

## Practical Workflow

1. Start a process normally
2. Realize you need the terminal back
3. Press `Ctrl+Z` to suspend it
4. Type `bg` to continue it in the background
5. Use `jobs` to check its status
6. Use `fg` when you need to interact with it again

## Handling Locked Terminals

If your terminal appears frozen:
- The process might be waiting for input
- Try `Ctrl+C` to interrupt
- Try `Ctrl+Z` to suspend
- Check `jobs` to see what's running

## Job Control Basics

- `%1`, `%2`, etc. refer to job numbers from `jobs` output
- `%%` or `%+` refers to the current job
- `%-` refers to the previous job

Understanding process management is crucial for efficient Linux terminal usage, allowing you to multitask and control running applications effectively.

[Watch on YouTube](https://youtube.com/watch?v=VVm37hZz6WU)
