---
id: containerization-on-linux-phones
title: "Containerization on Linux Phones"
date: 2021-10-11
category: Linux Phones
tags: ["linux phone", "containers", "nspawn", "systemd", "librem 5", "containerization"]
videoId: _86tEHCyMsY
excerpt: "Messing around with containerization with nspawn."
---

# Containerization on Linux Phones

Messing around with containerization with nspawn on the Librem 5.

This video explores using systemd-nspawn for containerization on Linux phones. Containers provide a way to run isolated environments, which can be useful for running different distributions or applications that might have conflicting dependencies.

## Why Containerization on Phones?

Running containers on a Linux phone opens up interesting possibilities:

- **Application isolation** - Keep apps and their dependencies separate
- **Multiple environments** - Run different Linux distributions alongside PureOS
- **Testing** - Try new software without affecting the main system
- **Development** - Create reproducible build environments on mobile

## systemd-nspawn

systemd-nspawn is a lightweight container solution that's part of systemd, making it well-suited for resource-constrained devices like phones. Unlike full Docker containers, nspawn provides a simpler, more direct approach to OS-level virtualization.

## Resources

- **Full blog post**: https://www.hackers-game.com/2021/10/11/containerization-on-linux-phones/
- **Source code**: https://source.puri.sm/david.hamner/boxes

The project demonstrates that Linux phones can leverage the same containerization technologies used on desktop and server Linux systems.

[Watch on YouTube](https://youtube.com/watch?v=_86tEHCyMsY)
