---
id: stained-glass-reverse-engineered-windows
title: "Stained Glass: Reverse-Engineered Windows on Debian and Wine"
date: 2026-11-08
category: Desktop Linux
tags: ["stained glass", "wine", "windows", "debian", "reactos", "desktop linux", "open source", "ai agents", "claude"]
videoId: WEEd3b-GIPE
excerpt: "Stained Glass is an open source, Windows-like operating system built on Debian, the Linux kernel and Wine. Here's what it is, how it differs from ReactOS, and how it's being built."
---

# Stained Glass: Reverse-Engineered Windows on Debian and Wine

This is not Windows. Neither is this, or this one. They're all different looks of one operating system, called Stained Glass.

Stained Glass is an attempt to build an open source, Windows-like operating system. It's sort of in the vein of ReactOS mixed with Wine. ReactOS and Stained Glass share a goal, but they go about it in completely different ways.

## Stained Glass vs. ReactOS

ReactOS starts at the kernel and builds its way out, implementing as close to an NT operating system as it can. Stained Glass starts from Debian, the Linux kernel and Wine, and builds out from those. That gives you a rock solid kernel and really good driver support for the basics: graphics cards, network cards, Wi-Fi, storage. ReactOS has to write all of that again, on its own kernel.

For those who don't know, Wine is a translation layer. It takes Windows system calls and translates them into their Linux equivalents. At the time of the video, Stained Glass carried about 2,500 patches on top of Wine:

- roughly 900,000 new lines of code
- across more than 400 of Wine's libraries
- around 20,000 Windows functions written or filled in
- more than 7,000 stubs (functions stock Wine only pretended to have) made real

## The Basics a Windows Machine Takes for Granted

Stock Wine has no system-wide registry separate from each user's, and not much of a security model at all. So a lot of the early work went into the basics: a real login screen, separate user accounts that each start from a copy of the default user profile, administrators and standard users, and a consent prompt when something needs an administrator.

## A New Shell

The shell is completely new. It takes the Wine desktop and turns it into a real desktop environment: Start menu, taskbar, File Explorer, Settings, Control Panel, Task Manager. Under the hood it's a Wayland compositor of its own, and every window, Windows or Linux, is its own window on it. Linux apps and Windows apps sit side by side on the same taskbar, and you stop thinking about which is which.

## Installing It

Installation is a lot more Windows than Linux. Boot the ISO and you can try it live or install it. The installer will look very familiar if you've ever installed Windows 10: pick a disk, click Next. Underneath, it's installing Debian onto a Btrfs file system. The first start walks you through region, keyboard, network and privacy settings, and there's your desktop.

## Apps: Linux and Windows in One Store

There's an app store that installs both Linux apps and Windows apps: around 180 Windows apps and nearly 200 Linux apps at the time of the video. When an app has both a Linux build and a Windows build, it's one card, and it suggests the Linux one. The Windows installer runs quietly, the Linux package comes straight from Debian, and you click Open.

You're not limited to the store either. Double-click a downloaded Debian package and it installs like any Linux package. Double-click a Windows installer and it installs like it would on Windows. Downloads are scanned for viruses as they land, with ClamAV built in.

And yes, Microsoft Office: Word installs, signs in and runs, and OneDrive syncs with its status right there in File Explorer.

## Office Hardware and Networks

There's a lot of work in the printer and USB layers. Linux doesn't have great support for some of the devices offices actually run on, like label printers and document scanners. Stained Glass takes the Windows side of things and pipes it straight to the USB device, so things like Dymo Connect and Ambir scanners just work.

It can act as a domain controller or join an existing one, which makes it a drop-in replacement for a Windows machine on an office network.

## Updates and Rollback

Updates come the Linux way under the hood. Every Stained Glass component is a Debian package, and every installation has its own repository. When anything changes, a new package is built and pushed, and your machine picks it up as an update, just like a normal Windows update. Because it's Btrfs, every update takes a restore point first. If an update ever goes bad, you roll back right from the boot menu.

It has zero tracking. It doesn't collect or send any diagnostic data. It's effectively fully open source. Not every Windows app behaves, and when one doesn't, there's a built-in way to report it that gathers the logs for you.

## How It's Being Built

I architected the basic structure: how Debian gets layered with Wine, Wine with Wayland, and Wayland with X11. Then I've had AI agents, mostly Claude Opus, working around the clock. They implement the pieces Wine is missing, install real Windows apps, and fix the bugs they run into. Every fix comes with a test that proves it.

## The Fun Parts

It's not just a copy of a Windows desktop. Like any good Linux desktop, it has wobbly windows. And since it's Stained Glass, there's a live stained glass desktop background that shapes itself around your windows. You can mix and match the look, from classic to rounded to glass. And you can talk to it: press Start + H and type with your voice, all on your own machine.

## Try It

It's far from a complete operating system, but it's good enough that I daily drive it on my laptop. My suggestion: install Linux apps where they exist, and fall back to Windows apps where you need them. At the time of the video it only supports UEFI, and Secure Boot has to be off.

If you're adventurous enough to give it a go, the ISO is at [freesoft.page](https://freesoft.page). Bug reports are welcome.

The follow-up video, answering your questions about how Windows apps run, gaming, and why a whole new desktop, is [here](https://hackers-game.com/?blog=stained-glass-windows-on-linux).
