---
id: librem-5-dogwood-game-emulation
title: "Librem 5 Dogwood Game Emulation"
date: 2020-07-13
category: Gaming
tags: ["librem 5", "dogwood", "emulation", "snes", "n64", "linux phone", "mupen64plus", "snes9x", "retro gaming"]
videoId: ONLpCiTlTQg
excerpt: "Playing with Mupen64plus and Snes9x on a Librem 5 Dogwood."
---

# Librem 5 Dogwood Game Emulation

Playing with Mupen64plus and Snes9x on a Librem 5 Dogwood.

This video demonstrates game emulation capabilities on the Librem 5 Dogwood edition Linux phone. We test both SNES and N64 emulators to see how well retro gaming performs on this mobile Linux device. The Dogwood batch represents a significant hardware revision that improves thermal management and overall performance.

## Related Resources

Check out the Librem 5 keyboard improvements blog post from Purism: https://puri.sm/posts/librem-5-keyboard-improvements/

## Building SNES9x

SNES9x is a portable Super Nintendo Entertainment System emulator. Here's how to build it from source on the Librem 5:

```bash
cd ~
git clone https://github.com/snes9xgit/snes9x.git
cd snes9x/gtk
sudo apt install gettext libgtkmm-3.0-dev
meson build --prefix=/usr --buildtype=release --strip
cd build
ninja
sudo ninja install
```

## Building Mupen64plus (N64)

Mupen64plus is a cross-platform N64 emulator. Building it requires compiling multiple components: the core, UI console, video plugin, audio plugin, RSP plugin, and input plugin.

### Install Dependencies

```bash
sudo apt install zlib1g-dev libpng-dev libsdl2-dev libfreetype6-dev libmupen64plus-dev
```

### Build the Core

```bash
git clone https://github.com/mupen64plus/mupen64plus-core.git
cd mupen64plus-core/projects/unix
make all
sudo make install
```

### Build the UI Console

```bash
cd ~
git clone https://github.com/mupen64plus/mupen64plus-ui-console.git
cd mupen64plus-ui-console/projects/unix
make all
sudo make install
```

### Build the Video Plugin (Rice)

```bash
cd ~
git clone https://github.com/mupen64plus/mupen64plus-video-rice.git
cd mupen64plus-video-rice/projects/unix
make all
sudo make install
```

### Build the Audio Plugin (SDL)

```bash
cd ~
git clone https://github.com/mupen64plus/mupen64plus-audio-sdl.git
cd mupen64plus-audio-sdl/projects/unix
make all
sudo make install
```

### Build the RSP Plugin (HLE)

```bash
cd ~
git clone https://github.com/mupen64plus/mupen64plus-rsp-hle.git
cd mupen64plus-rsp-hle/projects/unix
make all
sudo make install
```

### Build the Input Plugin (SDL)

```bash
cd ~
git clone https://github.com/mupen64plus/mupen64plus-input-sdl.git
cd mupen64plus-input-sdl/projects/unix
make all
sudo make install
```

## Performance Notes

The Librem 5 Dogwood edition handles SNES emulation smoothly thanks to the relatively low requirements of 16-bit era games. N64 emulation is more demanding but still playable for many titles with the Rice video plugin providing a good balance between compatibility and performance.

[Watch on YouTube](https://youtube.com/watch?v=ONLpCiTlTQg)
