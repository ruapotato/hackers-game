---
id: oneclick-install-the-new-beautiful-way-and-the-terminal-way
title: "OneClick Install: The new beautiful way & the terminal way."
date: 2018-03-25
category: Linux
tags: ["opensuse", "oneclick", "ymp", "package-management", "linux", "software-installation"]
videoId: WnM4VslzfGg
excerpt: "OpenSuSE just got more beautiful."
---

# OneClick Install: The new beautiful way & the terminal way.

OpenSuSE just got more beautiful.

## What is OneClick Install?

OneClick Install is OpenSUSE's solution for easy software installation. It streamlines the process of:
- Adding repositories
- Resolving dependencies
- Installing packages

All with a single click from a web browser.

## YMP Files

### What are YMP Files?
YMP (YaST Meta Package) files are XML-based installation descriptors that contain:
- Repository URLs to add
- Package names to install
- Dependencies and suggestions

### How They Work
1. Click a OneClick Install link on a website
2. Your browser downloads the .ymp file
3. YaST opens and shows what will be installed
4. Confirm and the software is installed

## The Beautiful Way (GUI)

The graphical method:
1. Browse to software.opensuse.org
2. Find your desired package
3. Click "1-Click Install"
4. Confirm in YaST
5. Done!

## The Terminal Way

For those who prefer the command line, you can also process YMP files:
```bash
# Install from a YMP file
OCICLI install package.ymp
```

Or manually:
1. Extract repository info from the YMP
2. Add repositories with `zypper ar`
3. Install packages with `zypper in`

## Why This Matters

OneClick Install solves common Linux software installation pain points:
- No hunting for the right repository
- No manual dependency resolution
- Works for third-party software not in default repos
- Accessible to new users

[Watch on YouTube](https://youtube.com/watch?v=WnM4VslzfGg)
