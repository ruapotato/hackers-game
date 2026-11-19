---
id: stained-glass-windows-on-linux
title: "Stained Glass Follow-Up: Windows on Linux, Answering Your Questions"
date: 2026-11-15
category: Desktop Linux
tags: ["stained glass", "wine", "windows apps", "gaming", "proton", "multi-monitor", "nvidia", "debian", "desktop linux"]
videoId: 2nwHxD833-8
excerpt: "Is Stained Glass just a reskinned Linux? How do Windows apps actually run? Can it play games? Plus multi-monitor, accent colours, fractional scaling, and moving my own workstation over."
---

# Stained Glass Follow-Up: Windows on Linux

Last video about [Stained Glass](https://hackers-game.com/?blog=stained-glass-reverse-engineered-windows), about nineteen thousand of you watched and around a hundred of you left comments full of questions. Is this just a reskinned Linux? How do Windows apps actually run? Can it actually play games? This post answers all of them. But first, the biggest upgrade that week: multi-monitor support.

## Multi-Monitor

A week before, it was honestly broken. Full-screen apps stretched across every display at once, the login screen got split down the middle, and taskbar icons would vanish on the second screen. Now:

- every display gets its own taskbar
- full-screen stays on the display it started on
- the login screen sits on your main display
- on a dock, you can turn the laptop's own screen off right from Settings
- each display keeps its own resolution and refresh rate

## Accent Colours and Scaling

Pick an accent colour and the system's icons update to match: the Start menu, File Explorer, Settings, all of it, live, without signing out.

Display scaling is very good. Windows apps get true fractional scaling, like 125 or 150 percent, and you can change it without signing out. Linux apps get it too. Out of the box, GTK apps on this kind of desktop could only scale in whole numbers, 200 percent or nothing, so Stained Glass ships its own patched GTK that scales by fractions. Qt apps scale by fractions as well.

## Why Build a Whole New Desktop?

It isn't completely new. Wine has always had a desktop, mostly to help certain apps behave. Stained Glass took that idea and grew it up, because a lot of Windows apps expect a real Windows desktop around them: apps that look for the taskbar to find out where they're allowed to put their window, apps that add an icon to the hidden icons tray, apps like OneDrive that put sync status icons right inside File Explorer. On a normal Linux desktop those things are half there or not there at all. Here they just work, because the desktop speaks Windows.

## "It's Just a Reskinned Linux"

I get why people say that. It is a Linux distribution. It's Debian underneath, and it runs Debian apps just fine. But Linux apps aren't the point. The point is Windows apps: how many of them run, and how well. It's for people who want their Windows apps and their Windows habits to just work, on top of a Linux base that's already proven.

The best way to think about it: take Wine and make it the operating system, on a stable Debian base. Then supercharge Wine until it's something you'd actually want to use every day. Stained Glass packs over two thousand custom fixes on top of Wine, targeted at making everyday desktop apps behave like they're actually on Windows.

## How Windows Apps Actually Run

Windows apps are built on a handful of frameworks, and each one is its own challenge.

- **Classic Win32 apps** written in C or C++, like Notepad++ or 7-Zip, are Wine's home turf. They mostly just work.
- **.NET apps** built with WinForms or WPF need the .NET Framework. Wine uses an open source reimplementation of it, and Stained Glass ships its own fork with pieces Wine never had, like WPF's rich text engine, written from scratch. Newer .NET apps bring Microsoft's own runtime with them, and that runs too.
- **Games and 3D apps** use DirectX, which gets translated to Vulkan with DXVK and VKD3D-Proton. Those are the same pieces Steam uses in Proton, and they run here outside of Steam too.
- **What doesn't work** is anything that has to run inside the Windows kernel itself: drivers, some VPNs, and kernel anti-cheat. Wine runs apps, not Windows kernel drivers.

Microsoft Office is the hardest test of all, because it uses almost every one of those frameworks at once. That week, PowerPoint's Designer went from crashing on the first click to showing its designs, and Excel's Copilot pane went from a "could not be started" error to opening.

## Gaming

A lot of you asked about gaming, and it's really good. My recommendation is the Linux version of Steam, so you get all of its Proton versions, which basically makes it a Steam Machine. Many games are native Linux games, which run straight on the Debian base.

Anti-cheat is the bad news. Most kernel anti-cheat is designed specifically not to work on a system like this. It's not that the games couldn't run; the developers went out of their way to stop them. Some developers do switch it on for Proton, and when they do, those games work through Steam.

## I Moved My Own Workstation

That week I finally did it: I switched my own workstation, the one I build Stained Glass on, over to Stained Glass. I didn't reinstall. If you already run Debian 13, you add the Stained Glass repository, install one package, and restart. Your files stay where they are, your Linux apps show up in the Start menu, and if you change your mind, removing that package puts your old desktop back.

The first thing that broke was my NVIDIA card. Steam's store came out scrambled, games flickered, and videos played as a black box. The driver Debian ships is too old for a modern Linux desktop: it can't do something called explicit sync. So Stained Glass now does what Windows Update does. On a supported NVIDIA card it offers NVIDIA's own current driver, and the desktop speaks explicit sync. Now Steam draws cleanly, games are smooth, and video plays the way it should.

## Is It Vibe Coded?

AI agents write most of the code, mostly Claude. But the architecture is mine, from fifteen years of coding the slow way, and every fix has to come with a test that fails without it before it's allowed in. That's how something this big stays honest.

## What's Next

Next I want to put it through real tests: the apps you actually use and the games you actually play. Tell me in the YouTube comments what you'd like to see running on Stained Glass. If you rely on big professional software I don't have a licence for, like Autodesk Inventor, give it a try yourself. The ISO is at [freesoft.page](https://freesoft.page), and if something doesn't work, the Report a problem button sends me the details I need to fix it.
