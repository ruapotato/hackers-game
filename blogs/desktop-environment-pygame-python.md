---
id: desktop-environment-pygame-python
title: "I Wrote a Desktop Environment in Pygame/Python"
date: 2018-02-17
category: Desktop Linux
tags: ["python", "pygame", "desktop environment", "window manager", "lavinder", "x11", "open source", "janit", "linux desktop"]
videoId: 0DKDol1B1bo
excerpt: "I'm open-sourcing my Desktop Environment. It's still in pre-alpha but I figured I should release it before Wayland completely deprecates X11."
---

# I Wrote a Desktop Environment in Pygame/Python

I'm open-sourcing my Desktop Environment. It's still in pre-alpha but I figured I should release it before Wayland completely deprecates X11.

## The Projects

### Lavinder

Lavinder is the main desktop environment/window manager written in Python using Pygame. It provides the core window management and desktop functionality.

### Janit

Lavinder runs 'janit' as its menu/process handler. Janit is also being open-sourced and is useful in plain X11 with any window manager running. There are plans to use janit with Wayland's Weston compositor as well.

## Source Code

- **Lavinder**: https://bitbucket.org/hackersgame/lavinder
- **Janit**: https://bitbucket.org/hackersgame/janit

## Why Python/Pygame?

Building a desktop environment in Python with Pygame demonstrates:

- Rapid prototyping capabilities
- Python's flexibility for system-level programming
- How desktop environments work under the hood
- Alternative approaches to traditional C/C++ implementations

## Technical Details

The project works with X11, the traditional Linux display server. While Wayland is becoming the standard, X11 knowledge and projects remain valuable for understanding Linux graphics architecture and supporting systems that still use X11.

The release was timed to share the work before the ecosystem potentially moves entirely to Wayland.

[Watch on YouTube](https://youtube.com/watch?v=0DKDol1B1bo)
