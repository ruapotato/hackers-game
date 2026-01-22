---
id: librem-5-dogwood-game-emulation
title: "Librem 5 Dogwood Game Emulation"
date: 2020-07-13
category: Linux Phones
tags: ["librem 5", "linux phone", "emulation", "snes", "n64", "gaming", "purism"]
videoId: ONLpCiTlTQg
excerpt: "Playing with Mupen64plus and Snes9x on a Librem 5 Dogwood."
---

# Librem 5 Dogwood Game Emulation

Playing with Mupen64plus and Snes9x on a Librem 5 Dogwood.

This video demonstrates game emulation capabilities on the Librem 5 Dogwood edition Linux phone. We test both SNES and N64 emulators to see how well retro gaming performs on this mobile Linux device.

## Building SNES9x

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

```bash
sudo apt install zlib1g-dev libpng-dev libsdl2-dev libfreetype6-dev libmupen64plus-dev

git clone https://github.com/mupen64plus/mupen64plus-core.git
cd mupen64plus-core/projects/unix
make all
sudo make install

cd ~
git clone https://github.com/mupen64plus/mupen64plus-ui-console.git
cd mupen64plus-ui-console/projects/unix
make all
sudo make install

cd ~
git clone https://github.com/mupen64plus/mupen64plus-video-rice.git
cd mupen64plus-video-rice/projects/unix
make all
sudo make install

cd ~
git clone https://github.com/mupen64plus/mupen64plus-audio-sdl.git
cd mupen64plus-audio-sdl/projects/unix
make all
sudo make install

cd ~
git clone https://github.com/mupen64plus/mupen64plus-rsp-hle.git
cd mupen64plus-rsp-hle/projects/unix
make all
sudo make install

cd ~
git clone https://github.com/mupen64plus/mupen64plus-input-sdl.git
cd mupen64plus-input-sdl/projects/unix
make all
sudo make install
```

[Watch on YouTube](https://youtube.com/watch?v=ONLpCiTlTQg)
