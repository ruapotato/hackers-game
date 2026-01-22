---
id: how-to-kill-processes-in-linux
title: "How to Kill Processes in Linux"
date: 2017-12-30
category: Linux
tags: ["linux", "processes", "terminal", "command line", "system administration", "kill", "signals"]
videoId: n_OJwa9CWRc
excerpt: "Learn how to kill processes in Linux using various command line tools."
---

# How to Kill Processes in Linux

A tutorial on how to terminate and manage processes in Linux using command line tools.

## Overview

Process management is a fundamental skill for Linux system administration. This tutorial covers the various methods and commands available for terminating processes.

## Common Commands

### kill
The basic command for sending signals to processes:
- `kill PID` - Send SIGTERM (graceful termination)
- `kill -9 PID` - Send SIGKILL (force termination)

### killall
Kill processes by name rather than PID:
- `killall process_name`

### pkill
Pattern-based process killing:
- `pkill pattern`

### htop/top
Interactive process managers that allow you to select and kill processes visually.

## Signal Types

- **SIGTERM (15)**: Graceful termination request - allows process to clean up
- **SIGKILL (9)**: Forceful termination - process is immediately stopped
- **SIGHUP (1)**: Hangup signal - often used to reload configurations

## Music Credits

End song: "Tom Perry" by Twin Musicom is licensed under a Creative Commons Attribution license.
- Source: http://www.twinmusicom.org/song/245/
- Artist: http://www.twinmusicom.org

[Watch on YouTube](https://youtube.com/watch?v=n_OJwa9CWRc)
