/**
 * Blog Data - David Hamner's Linux Phone & Tech Content
 * AUTO-GENERATED from /blogs/*.md files
 * Run: node scripts/build-blog-data.js
 */

const blogPosts = [
    {
        "id": "do-hardware-kill-switches-actually-work",
        "title": "Do Hardware Kill Switches Actually Work?",
        "date": "2026-01-15",
        "category": "Linux Phones",
        "tags": [
            "linux phone",
            "flx1s",
            "hardware",
            "kill switches",
            "privacy",
            "security",
            "FuriLabs",
            "FuriOS",
            "GPIO",
            "analog disconnect",
            "mic kill switch",
            "camera kill switch",
            "modem kill switch"
        ],
        "videoId": "f5Bscjm3EJI",
        "excerpt": "Linux phones are shipping with hardware kill switches. But do they actually work?",
        "content": "# Do Hardware Kill Switches Actually Work?\n\nLinux phones are shipping with hardware kill switches. But do they actually work? I tested all three on the FLX1s at the hardware level.\n\n## The Test\n\nThis video provides a hardware-level analysis of the kill switches found on the FLX1s Linux phone from FuriLabs. Rather than taking marketing claims at face value, the switches are tested to verify their actual functionality.\n\n## Key Findings\n\n**Spoiler: The mic switch is a true analog disconnect - no software can bypass it.**\n\nThe three kill switches tested:\n\n1. **Microphone kill switch** - True analog disconnect at the hardware level\n2. **Camera kill switch** - Hardware-level camera disconnection\n3. **Modem kill switch** - Cellular modem control\n\n## Why This Matters\n\nHardware kill switches are a key privacy feature of Linux phones like the:\n\n- FLX1s (FuriLabs)\n- Librem 5 (Purism)\n- PinePhone (Pine64)\n\nUnlike software toggles that could potentially be bypassed by malware or compromised software, true hardware disconnects provide a physical guarantee that the component is disabled.\n\n## Security Considerations\n\nThe video also discusses:\n\n- **Accelerometer side-channel attacks** (AccEar) - Alternative eavesdropping vectors\n- **GPIO-level verification** - How to confirm switches work at the hardware level\n- **Real-world use cases** - When and why you might actually use these switches\n\nBut do I actually use them? ...What's your use case?\n\n[Watch on YouTube](https://youtube.com/watch?v=f5Bscjm3EJI)"
    },
    {
        "id": "new-linux-phone-de-flick-v0",
        "title": "New Linux Phone DE | Flick V0",
        "date": "2025-12-12",
        "category": "Desktop Linux",
        "tags": [
            "linux-phone",
            "desktop-environment",
            "flick",
            "mobile-linux",
            "touch-interface",
            "open-source",
            "mobile-ui",
            "gtk"
        ],
        "videoId": "lhHr6khxtUE",
        "excerpt": "Playing around building a new DE for mobile Linux.",
        "content": "# New Linux Phone DE | Flick V0\n\nPlaying around building a new DE for mobile Linux.\n\n## What is Flick?\n\nFlick is a new desktop environment designed specifically for mobile Linux devices. This is version 0 - an early development release showing the initial concepts and functionality.\n\n## Why Another Mobile DE?\n\nCurrent options for mobile Linux desktop environments include:\n- **Phosh** - GNOME-based, widely used\n- **Plasma Mobile** - KDE's mobile interface\n- **Sxmo** - Minimalist, tiling approach\n\nFlick explores different design ideas and interaction patterns for touch-based Linux interfaces.\n\n## Design Goals\n\n- **Touch-First**: Designed for finger input from the ground up\n- **Intuitive Gestures**: Natural swipe and tap interactions\n- **Lightweight**: Minimal resource usage for phone hardware\n- **Open Source**: FOSS from day one\n\n## Current Features (V0)\n\nAs an early version, Flick demonstrates:\n- Basic mobile UI framework\n- Touch gesture handling\n- App launching interface\n- Initial integration with Linux phone hardware\n\n## Development Status\n\nThis is very much a work in progress - a tech demo and proof of concept. The goal is to explore what a fresh take on mobile Linux UI could look like.\n\n## Get Involved\n\nCheck out the code on GitHub to see the project, try it out, or contribute:\n\n- Repository: https://github.com/ruapotato/Flick\n\n[Watch on YouTube](https://youtube.com/watch?v=lhHr6khxtUE)"
    },
    {
        "id": "wow-a-new-linux-phone-flx1s",
        "title": "Wow! A New Linux Phone! FLX1s",
        "date": "2025-10-03",
        "category": "Linux Phones",
        "tags": [
            "linux-phone",
            "flx1s",
            "furilabs",
            "mobile-linux",
            "furi-os",
            "debian",
            "hardware-kill-switch",
            "foss",
            "privacy-phone"
        ],
        "videoId": "gdS_Kpwrrgw",
        "excerpt": "Check out the FLX1s from Furilabs",
        "content": "# Wow! A New Linux Phone! FLX1s\n\nCheck out the FLX1s, a new contender in the Linux phone arena from Furilabs.\n\n## The FLX1s\n\nThe FLX1s is a new Linux smartphone from **Furilabs**, offering a fresh option for those seeking a privacy-respecting, open-source mobile device.\n\n**Get one:** [FLX1s on Furilabs Store](https://furilabs.com/shop/flx1s/)\n\n## Key Features\n\n### Furi OS\n\nThe FLX1s runs **Furi OS**, which is based on Debian Linux. This means:\n\n- Full Debian package ecosystem available\n- Familiar Linux environment\n- Active community support\n\n### Hardware Kill Switches\n\nLike other privacy-focused Linux phones, the FLX1s includes hardware kill switches for enhanced security and privacy control.\n\n### Developer Friendly\n\n- **Python on Phone** - Write and run Python scripts directly on your device\n- **Full Linux Terminal** - Complete command-line access\n- **Open Source** - FOSS (Free and Open Source Software) at its core\n\n### Carrier Support\n\nThe video confirms T-Mobile compatibility, showing the phone works on major carriers.\n\n## Alternatives Mentioned\n\nThe FLX1s joins a growing ecosystem of Linux phones:\n\n- Librem 5\n- PinePhone Pro\n\n## De-Googled Experience\n\nFor those looking for an Android alternative or iPhone alternative without big tech surveillance, the FLX1s offers a de-Googled smartphone experience while still supporting some Android apps on Linux.\n\n## Full Review\n\nFor a complete review with more details:\n[FLX1s Review Blog Post](https://www.hackers-game.com/2025/10/06/flx1s-a-new-contender-in-the-linux-phone-arena/)\n\n[Watch on YouTube](https://youtube.com/watch?v=gdS_Kpwrrgw)"
    },
    {
        "id": "flx1s-linux-phone-review",
        "title": "FLX1S by Fury Labs: A Linux Phone That Actually Works as a Phone",
        "date": "2025-07-15",
        "category": "Linux Phones",
        "tags": [
            "linux phones",
            "fury labs",
            "flx1s",
            "mobile linux",
            "hardware review",
            "privacy",
            "hardware kill switches"
        ],
        "videoId": "lITN4HJ3M5Q",
        "excerpt": "The FLX1S by Fury Labs is one of those rare Linux devices that's actually good at being a phone. Let's take a look at what it can and can't do.",
        "content": "# FLX1S by Fury Labs: A Linux Phone That Actually Works as a Phone\n\nThe FLX1S by Fury Labs is one of those rare Linux devices that's actually good at being a phone. Let's take a look.\n\n## What's in the Box\n\nYou get the phone, some cute stickers, and if you order the accessories, a glass screen protector and a case. As a nice surprise, they also included a free pair of USB-C headphones, which is appreciated since there's no headphone jack on the phone.\n\nQuick note on the screen protector though: it's glass, and mine cracked in shipping. I'd love to see a film screen protector option instead.\n\n## Button Layout\n\nLet me save you some confusion. On day one, I misidentified the buttons. Here's the actual layout: there's a programmable button, volume keys up and down, and on the other side one large power button right above the hardware kill switches. Not what I expected, but there you go.\n\nThe hardware kill switches feel really good to use. They cover the microphone, camera, and modem/GPS. The UI needs a bit of work around these though, as it shows stale data when you flip them off and then shows them reconnect when you flip them back on.\n\n## Does It Actually Work as a Phone?\n\nHere's where the FLX1S really shines. You can get calls and text just by putting in a SIM card and booting the device. Pretty slick. And as far as I can tell, they're pretty reliable.\n\nMobile data had a bit of a hiccup where I had to toggle it off and then back on before I could actually use it. That's pretty basic troubleshooting that most users would be able to handle, and I bet it would be covered by a simple reboot as well.\n\n## GPS and Navigation\n\nI enabled the SUPL server settings and took it for a drive. I could watch my icon move as I drove around in Gnome Maps. But a GPS that can actually get a signal is only half the battle. Right now it uses Gnome Maps by default, which is no competitor to Google Maps. It'll do basic mapping and show you where you are, but if you need turn-by-turn navigation, this ain't doing it.\n\nThat's not really an issue with the FLX1S in particular. It's more of an issue with the mobile Linux ecosystem having a massive gap for mapping.\n\n## Camera\n\nThe camera works. It can take photos and record video. The shutter is a bit slow, and the quality is maybe not on par with a standard Android phone, but certainly usable for basic things like snapping a photo of a cable layout you need to duplicate later.\n\n## App Store\n\nThe app store is Gnome Software, which means it's a bit slow. It's configured with Flatpak by default. This is great for availability, but rough on a phone as it eats up space, memory, and bandwidth. Installing Gnome Secrets took about 3 minutes pulling down all the different runtimes.\n\nThe real issue is that a lot of these apps were never tested on this device, let alone mobile Linux in general. It's a bit of a mixed bag of what works, and it takes some trial and error. Persistent people will find cool apps. If you want every app to function, this is not going to be it.\n\n## Android Compatibility\n\nThis is where the FLX1S gets interesting. You can enable Andromeda, their Android compatibility layer, and install apps from F-Droid. But there's a catch: the apps you can't live without, like banking apps and payment apps, often reject what looks like a rooted device.\n\n## Developer Experience\n\nHere's where things get really interesting. You can install Claude Code directly on the device. As a dev box, this is miles ahead of Android and iOS. Full terminal access, the ability to modify software at any layer you want, build compositors, mess with the shell. The FLX1S is a pragmatic middle ground between what Linux phones could be with native support and what Android drivers allow. You have to deal with a lot of compatibility layers if you're going to dig deep on the software stack, but you get a pretty fast device to play with.\n\n## Can You Daily Drive It?\n\nI think yes, but with some caveats. Phone calls, SMS, working web browsing, battery life, even Bluetooth are pretty solid. The major things that need work are camera quality and the lack of being able to run certain Android apps.\n\n## Who Is This For?\n\nSomeone who doesn't need a bunch of apps sucking them in, or people who want to tinker and turn it into something truly epic. It's a phone that takes calls and can do a lot more, but it's proportional to the effort you put in.\n\nIf you want hardware kill switches and real privacy, this has them. If you're comfortable troubleshooting, you'll do just fine. I'd probably wait if you need a flawless camera or if banking apps are non-negotiable.\n\nThe community around Fury Labs is actually very friendly, and that's one of the better things they've managed to create.\n\n[Watch on YouTube](https://youtube.com/watch?v=lITN4HJ3M5Q)"
    },
    {
        "id": "fury-labs-flx1s-review",
        "title": "Fury Labs FLX1S Review: A Linux Phone That Actually Works as a Phone",
        "date": "2025-07-15",
        "category": "Linux Phones",
        "tags": [
            "linux phone",
            "fury labs",
            "flx1s",
            "mobile linux",
            "hardware review",
            "privacy",
            "hardware kill switches"
        ],
        "videoId": "lITN4HJ3M5Q",
        "excerpt": "The FLX1S by Fury Labs is one of those rare Linux devices that's actually good at being a phone. Let's take a look at what it does well and where it falls short.",
        "content": "# Fury Labs FLX1S Review: A Linux Phone That Actually Works as a Phone\n\nThe FLX1S by Fury Labs is one of those rare Linux devices that's actually good at being a phone. Let's take a look.\n\n## What's in the Box\n\nYou get the phone, some cute stickers, and if you order the accessories, a glass screen protector and a case. As a nice surprise, they also included a free pair of USB-C headphones, which is appreciated since there's no headphone jack on the phone.\n\nQuick note on the screen protector though: it's glass. Mine cracked in shipping. I'd love to see a film screen protector option instead.\n\n## Button Layout\n\nLet me save you some confusion. On day one, I thought the side button was the power button and the others were programmable. That's not the case. There's actually a programmable button, volume keys up and down, and then on the other side one very large power button right above the hardware kill switches. Not what I expected, but there you go.\n\nThe hardware kill switches feel really good to use. They cover the microphone, camera, and modem/GPS. The UI needs a bit of work around these as it shows stale data when you flip them off and then shows them reconnect when you flip them back on.\n\n## Phone Functionality\n\nDoes it actually work as a phone? Here's where the FLX1S really shines. You can get calls and text just by putting in a SIM card and booting the device. Pretty slick. And as far as I can tell, they're pretty reliable.\n\nMobile data had a bit of a hiccup where I had to toggle it off and then back on before I could actually use it. That's pretty basic troubleshooting that most users would be able to handle, and I bet would be covered by a simple reboot as well.\n\n## GPS and Navigation\n\nI enabled the SUPL server settings and took it for a drive. I could watch my icon move as I drove around in Gnome Maps. But a GPS that can actually get a signal is only half the battle. Right now, it uses Gnome Maps by default, which is no competitor to Google Maps. It'll do basic mapping and show you where you are, but if you need turn-by-turn navigation, this ain't doing it.\n\nThat's not really an issue with the FLX1S in particular. It's more of an issue with the mobile Linux ecosystem having a massive gap for mapping.\n\n## Camera\n\nThe camera works. It can take photos. It can record video. The shutter is a bit slow and the quality is maybe not on par with a standard Android phone, but certainly usable for basic things like snapping a photo of a cable layout you need to duplicate later.\n\n## App Store\n\nThe app store is Gnome Software, which means it's a bit slow. It also seems it's configured with Flatpak by default. This is great for availability, but rough on a phone. Flatpak eats up space, memory, and bandwidth. Installing Gnome Secrets took about 3 minutes pulling down all the different runtimes.\n\nA lot of these apps were never tested on this device, let alone mobile Linux in general. It's a bit of a mixed bag of what works, and it takes some trial and error. Persistent people will find cool nuggets and cool apps. If you want every app to function, this is not going to be it.\n\n## Android Compatibility\n\nOn the Android side, this is where the FLX1S gets interesting. You can enable Andromeda, their Android compatibility layer, and install apps from F-Droid. But there's a catch. The apps you can't live without, banking apps and payment apps, often reject what looks like a rooted device.\n\n## Can You Daily Drive This?\n\nI think yes, but with some caveats. Phone calls, SMS, working web browsing, battery life, even Bluetooth is pretty solid. The major things that need work are camera quality and the lack of being able to run certain Android apps.\n\n## Developer Experience\n\nHere's where things get really interesting. You can install Claude Code directly on the device. As a dev box, this is miles ahead of Android and iOS. Full terminal access, the ability to modify software at any layer you want, build compositors, mess with the shell.\n\nI think the FLX1S is a pragmatic middle ground between what Linux phones could be with native support and what Android drivers allow. You have to deal with a lot of compatibility layers if you're going to dig deep on the software stack, but it's worth it as you get a pretty fast device to play with.\n\n## Who Is This For?\n\nSomeone who doesn't need a bunch of apps sucking them in, or people who want to tinker and turn it into something truly epic. It's a phone that takes calls. It can do a lot more, but it's proportional to the effort you put in.\n\nIf you want hardware kill switches and real privacy, this has them. If you're comfortable troubleshooting, you'll do just fine. I'd probably wait if you need a flawless camera or if banking apps are non-negotiable.\n\nThe community around Fury Labs is actually very friendly. That's one of the better things they've managed to create.\n\n[Watch on YouTube](https://youtube.com/watch?v=lITN4HJ3M5Q)"
    },
    {
        "id": "linux-phone-upgrade-comet-plus-1",
        "title": "Linux Phone Upgrade | Comet +1",
        "date": "2025-03-08",
        "category": "Linux Phones",
        "tags": [
            "mecha-comet",
            "linux-phone",
            "linux-mobile",
            "open-source-hardware",
            "imx8m-plus",
            "mobile-linux",
            "modular-device",
            "amoled",
            "arm-linux"
        ],
        "videoId": "VD94Al_Q0Hs",
        "excerpt": "A quick overview of the Mecha Comet Linux phone upgrade",
        "content": "# Linux Phone Upgrade | Comet +1\n\nA quick overview of the Mecha Comet Linux phone upgrade, featuring the IMX8M Plus processor. This video covers the latest developments in open source mobile hardware and the evolving landscape of Linux phones.\n\n## Key Features\n\nThe Mecha Comet represents an exciting advancement in the Linux phone space:\n\n- **IMX8M Plus Processor**: NXP's powerful ARM-based SoC\n- **Modular Device Design**: Open hardware approach for customization\n- **AMOLED Display**: High-quality screen for mobile Linux\n- **ARM Linux Support**: Full Linux compatibility\n\n## Why This Matters\n\nThe Comet is part of a new wave of Linux handhelds and phones that prioritize:\n\n- Open source hardware designs\n- Modular and repairable construction\n- True Linux (not Android) as the primary OS\n- Community-driven development\n\n## Related Live Stream\n\nFor the full deep dive, check out the companion live stream where these topics are explored in greater detail.\n\n[Watch on YouTube](https://youtube.com/watch?v=VD94Al_Q0Hs)"
    },
    {
        "id": "maemo-leste-systemv-hackjob",
        "title": "Maemo Leste SystemV Hackjob #music",
        "date": "2025-03-04",
        "category": "Desktop Linux",
        "tags": [
            "maemo-leste",
            "hildon",
            "debian",
            "systemd",
            "desktop-environment",
            "gtk",
            "mobile-ui",
            "bookworm"
        ],
        "videoId": "YKAsUK3a8M0",
        "excerpt": "Documenting my work for the day in a fun way.",
        "content": "# Maemo Leste SystemV Hackjob #music\n\nDocumenting my work for the day in a fun way.\n\n## The Project\n\nThis project takes Debian Bookworm as a foundation with Maemo Leste as inspiration. The repos were forked and modified to replace init with SystemD.\n\n## Technical Details\n\n### Foundation\n- **Base**: Debian Bookworm\n- **Inspiration**: Maemo Leste project\n- **Init System**: SystemD (replacing the original init)\n\n### The Hack\n\nIt's a hack, it's a splice - not pretty but it's nice.\n\nThe process involved:\n1. Forking the Maemo Leste repositories\n2. Modifying packages to work with SystemD\n3. Creating a dummy package for libedev as a workaround\n4. Getting the Hildon desktop to launch\n\n### Current State\n\nThe Franken-system boots with TTY login. Running `startx` as root launches the Hildon desktop. A dummy package for libedev was created as a dirty hack. The UI may look rough, but at least it doesn't crash.\n\nIt's a mess but it works - Debian base with Hildon UI!\n\n## Resources\n\n- VM SDK: https://github.com/ruapotato/vm-sdk\n- Image Builder: https://github.com/ruapotato/image-builder\n\n## Song Credits\n\nSong generated via Suno, documenting the hacking journey in musical form.\n\n[Watch on YouTube](https://youtube.com/watch?v=YKAsUK3a8M0)"
    },
    {
        "id": "are-linux-phones-ready-in-2025",
        "title": "Are Linux Phones Ready in 2025?",
        "date": "2025-02-28",
        "category": "Linux Phones",
        "tags": [
            "linux phone",
            "postmarketos",
            "pixel 3a",
            "daily driver",
            "mobile linux",
            "phosh",
            "review"
        ],
        "videoId": "GLl4-82vZ7A",
        "excerpt": "I tried daily driving a Pixel 3a running PostmarketOS. Let me show you how it went.",
        "content": "# Are Linux Phones Ready in 2025?\n\nI tried daily driving a Pixel 3a running PostmarketOS. Let me show you how it went.\n\nThis video explores the current state of Linux phones and whether they're ready for everyday use in 2025. The Pixel 3a provides an interesting test bed for PostmarketOS to see how far mobile Linux has come.\n\n## The Daily Driver Test\n\nUsing PostmarketOS on a Pixel 3a as a daily driver reveals the current state of mobile Linux:\n\n- How well basic phone functions work\n- App availability and compatibility\n- Battery life and performance\n- Real-world usability challenges\n\n## The Linux Phone Landscape in 2025\n\nThe video discusses various Linux phone options including:\n\n- **PostmarketOS** - Alpine-based mobile Linux for many devices\n- **Phosh** - The phone shell used for the mobile interface\n- **Mecha Comet** - Linux-focused phone hardware\n- **Liberux/Nexx** - Alternative Linux phone projects\n- **FLX1/FuriPhone** - FuriLabs devices\n- **Jolla** - Sailfish OS devices\n- **Pine64 devices** - PinePhone and related hardware\n- **Purism Librem 5** - Privacy-focused Linux phone\n- **uConsole** - Portable Linux device\n\n## Verdict\n\nThe video provides an honest assessment of where Linux phones stand today and what use cases they can realistically handle.\n\nBonus song at the end! (Generated via https://suno.com/)\n\n[Watch on YouTube](https://youtube.com/watch?v=GLl4-82vZ7A)"
    },
    {
        "id": "linux-phones-fresh-approaches-and-new-players-in-2025",
        "title": "Linux Phones: Fresh Approaches and New Players in 2025",
        "date": "2025-02-09",
        "category": "Linux Phones",
        "tags": [
            "linux phone",
            "jolla",
            "shiftphone",
            "sailfish",
            "mobile linux",
            "2025",
            "mecha comet",
            "flx1",
            "furiphone",
            "purism",
            "librem 5",
            "pine64"
        ],
        "videoId": "IG5HSx5A-h4",
        "excerpt": "Jolla has a new community phone.",
        "content": "# Linux Phones: Fresh Approaches and New Players in 2025\n\nJolla has a new community phone. SHIFTphone is an epic Linux device. Updates and corrections!\n\nThe Linux phone landscape continues to evolve in 2025 with exciting new developments and new players entering the market.\n\n**Full blog**: https://www.hackers-game.com/2025/02/10/linux-phones-fresh-approaches-and-new-players-in-2025/\n\n## Jolla Community Phone\n\nJolla, the company behind Sailfish OS, has announced a new community-focused device. This continues their mission to provide an alternative mobile operating system that respects user privacy while offering a polished mobile experience.\n\n### Sailfish OS Features\n- Gesture-based navigation\n- Android app compatibility\n- Strong European privacy focus\n- Active community development\n\n## SHIFTphone\n\nSHIFTphone stands out as an impressive Linux-compatible smartphone, offering users a sustainable and repairable option with strong Linux support.\n\n### Key Features\n- Modular, repairable design\n- Fair trade and sustainable manufacturing\n- Multiple OS options including Linux distributions\n- Long-term support commitment\n\n## The Current Linux Phone Landscape\n\n### Established Players\n\n- **Purism Librem 5**: The flagship open-hardware Linux phone\n- **Pine64 PinePhone/PinePhone Pro**: Affordable, community-driven devices\n- **Fairphone**: Sustainable phones with Linux port support\n\n### New Entrants\n\n- **Mecha Comet**: New approach to mobile Linux\n- **Liberux/Nexx**: Emerging alternatives\n- **FLX1**: Fresh take on the Linux phone concept\n- **FuriPhone**: Another contender in the space\n\n## Market Trends in 2025\n\n- Increased focus on privacy and user control\n- Growing demand for sustainable, repairable devices\n- More distributions supporting mobile form factors\n- Better convergence (phone-to-desktop) capabilities\n- Improved app ecosystem\n\n## Updates and Corrections\n\nThe video also addresses updates and corrections to previous Linux phone coverage, ensuring accurate information about the current state of the market.\n\n## Why Linux Phones Matter\n\n- **Privacy**: No Google or Apple tracking\n- **Longevity**: Software support not tied to manufacturer whims\n- **Freedom**: Full control over your device\n- **Sustainability**: Repair and extend device lifespan\n- **Convergence**: One device for mobile and desktop computing\n\n[Watch on YouTube](https://youtube.com/watch?v=IG5HSx5A-h4)"
    },
    {
        "id": "your-phone-is-terrible-music-video",
        "title": "Your Phone is Terrible | Music Video",
        "date": "2025-02-01",
        "category": "Linux Phones",
        "tags": [
            "music-video",
            "digital-freedom",
            "open-source",
            "mobile",
            "linux-phone",
            "ai-generated",
            "coding",
            "geek-pop"
        ],
        "videoId": "0Q6BbMiVtjg",
        "excerpt": "Something a bit different. Here is a song I wrote about phones in 2025.",
        "content": "# Your Phone is Terrible | Music Video\n\nSomething a bit different. Here is a song I wrote about phones in 2025.\n\n## About This Project\n\nThis music video is a creative commentary on the state of smartphones in 2025 - locked down devices that treat users as products rather than owners.\n\n### Credits\n\n- **Written and Edited by:** David Hamner\n- **Performed by:** [Suno AI](https://suno.com/)\n- **AI Images/Videos:**\n  - [Qwen Chat](https://chat.qwenlm.ai/)\n  - [Vidu](https://www.vidu.com/)\n  - ProteusV0.4\n\n## Lyrics\n\n**[Intro]**\nDigital freedom's calling, can you hear it?\n\n**[Verse 1]**\nGot a phone that's locked down tight\nThey say it's for our own delight\nBut when I try to code at night\nAll my dreams just take flight\n\n**[Pre-Chorus]**\nThey're selling all our data for some gold\nOur stories bought and packaged, then they're sold\nThey say we're just predictable, they say we fit their mold\nBut honey, that ain't the future I want to hold\n\n**[Chorus]**\nBreak free from these walled gardens\n(Time to break away)\nWrite code without their pardons\n(Let's code our way)\nPython, Rust, or whatever we choose\nThese are our dreams, we refuse to lose\n\n**[Verse 2]**\nWant to build a kernel new?\nThey say that's something we can't do\nBut freedom's what we're fighting for\nSo let's kick down every door\n\n**[Chorus]**\nBreak free from these walled gardens\n(Time to break away)\nWrite code without their pardons\n(Let's code our way)\nPython, Rust, or whatever we choose\nThese are our dreams, we refuse to lose\n\n**[Bridge]**\nI'm not asking for the stars\nJust the freedom to go far\nLet us write our own story\nIn our own territory\n\n**[Chorus - Final]**\nBreak free from these walled gardens\n(Time to break away)\nWrite code without their pardons\n(Let's code our way)\nThis is our digital revolution\nTime to find our own solution\n'Cause these are our dreams\nAnd we refuse to lose\n\n**[Outro]**\nThe code is ours to write\nThe future's looking bright\n\n[Watch on YouTube](https://youtube.com/watch?v=0Q6BbMiVtjg)"
    },
    {
        "id": "linux-phone-takeover-ai-revolution",
        "title": "Linux Phone Takeover: The AI Revolution",
        "date": "2025-01-25",
        "category": "AI/ML",
        "tags": [
            "linux phone",
            "ai",
            "mobile development",
            "open source",
            "artificial intelligence",
            "llm",
            "generated apps",
            "android",
            "ios"
        ],
        "videoId": "-154CWGhuAI",
        "excerpt": "Ever notice that AI gives you lousy output when you restrict it to using crappy tools?",
        "content": "# Linux Phone Takeover: The AI Revolution\n\nEver notice that AI gives you lousy output when you restrict it to using crappy tools? It's no secret that relying on well-documented, popular libraries is the best way to get the most out of AI. And Linux phones are perfectly positioned for mobile AI development.\n\n**Full blog**: https://www.hackers-game.com/2025/01/26/linux-phone-takeover-when-ai-writes-our-apps/\n\n## The AI Advantage for Linux Phones\n\n### Why Linux Excels for AI-Generated Apps\n\nAI coding assistants (LLMs) perform best when:\n- Working with well-documented libraries\n- Using popular, well-established frameworks\n- Following standard patterns with lots of training data\n\nLinux development hits all these marks:\n- **GTK/Qt**: Decades of documentation and examples\n- **Python**: The most popular AI/ML language\n- **Standard Linux APIs**: Consistent across platforms\n- **Open source training data**: Vast corpus of example code\n\n### The Problem with Proprietary Platforms\n\niOS and Android development challenges for AI:\n- Proprietary SDKs with changing APIs\n- Platform-specific quirks and restrictions\n- Less training data relative to general-purpose code\n- Closed-source components that AI can't learn from\n\n## Mobile Linux's AI-Development Advantage\n\n### Universal Libraries\n\nLinux phones use the same libraries as desktop Linux:\n- GTK for UI (with libadwaita for mobile)\n- Standard Python ecosystem\n- Familiar C/C++ development\n- Web technologies (Electron, web apps)\n\n### AI Can Write Linux Apps Easily\n\nBecause AI models are trained on:\n- Millions of open-source Linux applications\n- Extensive documentation for Linux libraries\n- Stack Overflow answers for Linux development\n- GitHub repositories of Linux projects\n\nThe output is better when targeting Linux compared to proprietary mobile platforms.\n\n## Practical Implications\n\n### For Developers\n\n- AI assistants can generate more accurate Linux app code\n- Faster prototyping and development cycles\n- Easier maintenance with well-understood patterns\n- Cross-platform potential (phone, tablet, desktop)\n\n### For Users\n\n- More apps developed for Linux phones\n- Higher quality AI-assisted applications\n- Faster innovation in the mobile Linux space\n- Apps that can evolve with AI assistance\n\n## The Future of Mobile Development\n\nAs AI becomes more integral to software development:\n- Platforms with open, well-documented APIs will benefit\n- Linux's position as an AI-friendly development target strengthens\n- Mobile Linux could see accelerated app ecosystem growth\n- The gap between proprietary platforms and Linux may narrow\n\n## Why This Matters\n\nThe next wave of mobile applications may be AI-assisted or AI-generated. Linux phones, built on decades of open-source infrastructure, are uniquely positioned to benefit from this revolution.\n\n[Watch on YouTube](https://youtube.com/watch?v=-154CWGhuAI)"
    },
    {
        "id": "next-gen-linux-phones",
        "title": "Next Gen Linux Phones",
        "date": "2025-01-22",
        "category": "Linux Phones",
        "tags": [
            "linux-phone",
            "flx1",
            "uconsole",
            "mecha-comet",
            "jolla",
            "liberux",
            "mobile-linux",
            "purism",
            "pine64"
        ],
        "videoId": "pAywiV7r4gE",
        "excerpt": "Out with the old and in with the new! 2025 will be really hot for mobile Linux.",
        "content": "# Next Gen Linux Phones\n\nOut with the old and in with the new! 2025 will be really hot for mobile Linux.\n\n## The New Wave of Linux Phones\n\n2025 marks an exciting year for mobile Linux with several new and updated devices entering the market. The ecosystem is maturing beyond the early pioneer devices.\n\n## Devices Covered\n\n### FLX1 from FuriLabs\nA promising new entry in the Linux phone market from FuriLabs, building on the success of the FLX1s with improved hardware and continued software development.\n\n- Website: https://furilabs.com/shop/flx1/\n\n### uConsole from Clockwork Pi\nA unique modular handheld device that can run Linux. Not a traditional phone form factor, but offers an interesting portable Linux computing option.\n\n- Website: https://www.clockworkpi.com/uconsole\n\n### Liberux\nAn interesting project in the Linux phone space, the Nexx device represents another option for those seeking open mobile computing.\n\n- Website: https://liberux.net/\n\n### Mecha Comet\nA new contender in mobile Linux featuring modular design and open hardware principles.\n\n- Website: https://mecha.so/comet\n\n### Jolla\nContinuing their journey with Sailfish OS, Jolla maintains their presence in the alternative mobile OS space.\n\n- Website: https://shop.jolla.com/\n\n## Looking Back\n\nThe video also acknowledges the devices that paved the way:\n- **Librem 5** from Purism - Privacy-focused pioneer\n- **PinePhone** from Pine64 - Community-driven and affordable\n\n## Full Blog\n\nFor more details: https://www.hackers-game.com/2025/01/24/battle-of-the-linux-phones-in-2025/\n\n[Watch on YouTube](https://youtube.com/watch?v=pAywiV7r4gE)"
    },
    {
        "id": "ai-linux-is-here",
        "title": "AI Linux is Here!",
        "date": "2024-12-05",
        "category": "AI/ML",
        "tags": [
            "ai",
            "linux",
            "magi os",
            "desktop",
            "artificial intelligence",
            "open source",
            "LLM",
            "terminal",
            "large language model"
        ],
        "videoId": "2G_drprsrTM",
        "excerpt": "Want to use an AI-powered Linux desktop? Well, that's what MAGI OS is for.",
        "content": "# AI Linux is Here!\n\nWant to use an AI-powered Linux desktop? Well, that's what MAGI OS is for.\n\nMAGI OS brings artificial intelligence to the Linux desktop experience, demonstrating how AI can be integrated into a full desktop environment to provide intelligent assistance and automation for everyday computing tasks.\n\n## About MAGI OS\n\nMAGI OS is an AI-powered Linux distribution that puts large language model capabilities at the center of the user experience. Rather than AI being an afterthought or separate application, it's woven into the fabric of the operating system itself.\n\n## Resources\n\n- **Try it out**: https://www.hackers-game.com/magi/\n- **Source code**: https://github.com/ruapotato/MAGI\n- **Support the project**: https://github.com/sponsors/ruapotato\n- **LinkedIn**: https://www.linkedin.com/in/david-hamner-a1633635/\n\nThe project is open source and available for anyone who wants to experience what an AI-native Linux desktop feels like.\n\n[Watch on YouTube](https://youtube.com/watch?v=2G_drprsrTM)"
    },
    {
        "id": "magi-os-public-test",
        "title": "MAGI OS | Public Test",
        "date": "2024-11-18",
        "category": "AI/ML",
        "tags": [
            "magi",
            "ai",
            "llm",
            "gtk",
            "voice-transcription",
            "open-source",
            "ai-assistant",
            "large-language-model",
            "desktop-ai"
        ],
        "videoId": "H5LeNkgdRg4",
        "excerpt": "MAGI (Machine Augmented GTK Interface) is a local open-source AI powered operating system.",
        "content": "# MAGI OS | Public Test\n\nMAGI (Machine Augmented GTK Interface) is a local open-source AI powered operating system.\n\n## Current Features\n\n### Built-in LLM with Context Awareness\nThe system includes a local large language model that understands the context of what you're working on, providing relevant assistance without sending data to external servers.\n\n### Voice Transcription Anywhere\nVoice transcription functionality that can be used anywhere in the system - dictate text, give commands, or interact with the AI assistant using your voice.\n\n### E-Reader with Text-to-Speech\nA built-in e-reader that can read anything you select or highlight aloud, making content accessible in audio form.\n\n## The Vision\n\nThe goal is to continue integration so that this can be used as a full AI agent OS. MAGI represents an approach to desktop computing where AI assistance is deeply integrated into the user interface, making it more intuitive and powerful for everyday tasks.\n\n### Key Principles\n- **Local Processing**: Your data stays on your machine\n- **Open Source**: Full transparency and community contribution\n- **Deep Integration**: AI isn't just an app, it's part of the OS\n- **GTK-Based**: Native Linux desktop experience\n\n## Try It Out\n\n- Test it: https://www.hackers-game.com/magi/\n- Source Code: https://github.com/ruapotato/MAGI\n- Support: https://github.com/sponsors/ruapotato\n\n[Watch on YouTube](https://youtube.com/watch?v=H5LeNkgdRg4)"
    },
    {
        "id": "ai-linux-desktop-magi",
        "title": "AI Linux Desktop | MAGI",
        "date": "2024-11-10",
        "category": "AI/ML",
        "tags": [
            "AI",
            "desktop",
            "linux",
            "MAGI",
            "LLM",
            "artificial-intelligence",
            "large language model",
            "openai",
            "mistral",
            "chatgpt",
            "claude",
            "anthropic",
            "llama"
        ],
        "videoId": "ev2qv-Oxtdo",
        "excerpt": "Introducing MAGI, an AI-powered Linux desktop environment.",
        "content": "# AI Linux Desktop | MAGI\n\nIntroducing MAGI, an AI-powered Linux desktop environment that integrates large language model capabilities directly into your computing experience.\n\nMAGI represents a new approach to desktop computing, where AI assistance is built into the core desktop experience rather than being a separate application. This enables intelligent workflows and smart desktop interactions that understand context and user intent.\n\n## Key Features\n\n- AI-assisted desktop workflows\n- Natural language interaction with your system\n- Integration with multiple LLM backends (OpenAI, Mistral, Claude, Llama, and more)\n- Intelligent file and application management\n\n## Resources\n\n- **Source code**: https://github.com/ruapotato/MAGI\n- **Project page**: https://www.hackers-game.com/magi/\n\nMAGI showcases how large language models can transform the traditional desktop paradigm, making computing more intuitive and accessible through natural language interaction.\n\n[Watch on YouTube](https://youtube.com/watch?v=ev2qv-Oxtdo)"
    },
    {
        "id": "whisper-large-v3-turbo-tested",
        "title": "Whisper Large V3 Turbo | Tested",
        "date": "2024-10-18",
        "category": "AI/ML",
        "tags": [
            "whisper",
            "speech-recognition",
            "ai",
            "openai",
            "transcription",
            "machine-learning",
            "asr",
            "llm",
            "huggingface"
        ],
        "videoId": "R5bfClvmmqc",
        "excerpt": "How good is Whisper Large V3. Very!",
        "content": "# Whisper Large V3 Turbo | Tested\n\nHow good is Whisper Large V3 Turbo? Very!\n\nThis video tests OpenAI's Whisper Large V3 Turbo model for speech-to-text transcription. The model demonstrates impressive accuracy for automated transcription tasks.\n\n## What is Whisper?\n\n**Whisper** is OpenAI's automatic speech recognition (ASR) system. It's trained on a massive dataset of diverse audio and can:\n\n- Transcribe speech to text\n- Translate speech from other languages to English\n- Identify the language being spoken\n- Handle various accents and audio conditions\n\n## The V3 Turbo Model\n\nWhisper Large V3 Turbo is an optimized version of the large model that offers:\n\n- Faster inference times\n- High accuracy transcription\n- Support for multiple languages\n\n### Model Access\n\nThe model is available on Hugging Face:\n[Whisper Large V3 Turbo on Hugging Face](https://huggingface.co/openai/whisper-large-v3-turbo)\n\n## Testing Results\n\nThe video demonstrates the model's capabilities through practical transcription tests, showing how well it handles real-world audio content.\n\n## My Implementation\n\nA custom implementation for using Whisper is available:\n[Whisper To Text on GitHub](https://github.com/ruapotato/Whisper_To_Text/)\n\n## Use Cases\n\n- **Content creators** - Automatically generate subtitles and captions\n- **Accessibility** - Make audio content accessible to deaf and hard-of-hearing users\n- **Note taking** - Transcribe meetings, lectures, and interviews\n- **Search** - Make audio content searchable through text transcripts\n\n## Part of the AI Landscape\n\nWhisper is just one piece of the rapidly evolving AI landscape, alongside large language models (LLMs) from OpenAI (ChatGPT), Anthropic (Claude), Meta (Llama), and others.\n\n[Watch on YouTube](https://youtube.com/watch?v=R5bfClvmmqc)"
    },
    {
        "id": "neural-network-meets-falling-sand-game",
        "title": "Neural Network Meets Falling Sand Game",
        "date": "2024-09-08",
        "category": "AI/ML",
        "tags": [
            "ai",
            "neural-network",
            "falling-sand",
            "pygame",
            "machine-learning",
            "game-development",
            "python"
        ],
        "videoId": "kx6tMCeUmaY",
        "excerpt": "Hey everyone! Today, I'm excited to share my progress on a falling sand game powered by neural networks.",
        "content": "# Neural Network Meets Falling Sand Game\n\nHey everyone! Today, I'm excited to share my progress on a falling sand game powered by neural networks. Let's dive into the evolution of this project and the fascinating challenges I've encountered along the way.\n\n## The Concept\n\nThis project combines the classic falling sand game mechanics with the power of neural networks. Instead of using traditional rule-based physics, the game uses trained neural networks to determine how particles interact with each other and their environment.\n\n## How It Works\n\n### Traditional Falling Sand\nIn a classic falling sand game:\n- Particles follow predefined rules\n- Sand falls down, water flows, fire rises\n- Each element type has hardcoded behavior\n\n### Neural Network Approach\nIn this version:\n- A neural network learns particle behavior from examples\n- The network predicts how particles should move\n- Emergent behaviors can arise from training\n- The physics can be more organic and surprising\n\n## Technical Implementation\n\n- **Engine**: Pygame for rendering and interaction\n- **Neural Network**: Trained to predict particle movements\n- **Training Data**: Generated from observed particle interactions\n\n## Challenges Encountered\n\nCreating a neural network-based physics system presents unique challenges:\n- Training the network to handle edge cases\n- Balancing performance with accuracy\n- Getting emergent behavior that's still playable\n\n## Source Code\n\nThe project is available on GitHub for those interested in exploring AI-powered game development:\n\n- Source: https://github.com/ruapotato/AISand\n- Blog: https://www.hackers-game.com/2024/09/09/neural-network-meets-falling-sand-game/\n\n[Watch on YouTube](https://youtube.com/watch?v=kx6tMCeUmaY)"
    },
    {
        "id": "ai-powered-terminal-assistant",
        "title": "AI-Powered Terminal Assistant: Revolutionizing Command Line Interactions",
        "date": "2024-08-07",
        "category": "AI/ML",
        "tags": [
            "ai",
            "terminal",
            "command line",
            "natural language processing",
            "productivity",
            "AIAssistant",
            "programming"
        ],
        "videoId": "DI4VYUv4vFQ",
        "excerpt": "Discover the future of command line interfaces with our AI-Powered Terminal Assistant!",
        "content": "# AI-Powered Terminal Assistant: Revolutionizing Command Line Interactions\n\nDiscover the future of command line interfaces with our AI-Powered Terminal Assistant! This video demonstrates how natural language processing is making terminal use more intuitive and efficient for both beginners and experts.\n\n## What You'll See\n\nWatch as we navigate files, execute commands, and even code using simple English queries. The demonstration covers:\n\n- **Basic directory operations** - Navigate your filesystem using natural language\n- **System information retrieval** - Ask about your system and get relevant commands executed\n- **Command interpretation** - The assistant understands your intent and translates it to proper commands\n- **Smart solutions** - Get intelligent suggestions for common tasks\n\n## Key Capabilities\n\nThe AI-Powered Terminal Assistant interprets natural language and provides:\n\n- Command suggestions based on your intent\n- Error correction and guidance\n- Multi-step workflow assistance\n- Learning-friendly explanations\n\n## Resources\n\n- **Source code**: https://github.com/ruapotato/Terminal-Assistant\n\nWhether you're a coding novice trying to learn the command line or a seasoned developer looking to speed up your workflow, this tool transforms how you interact with the terminal.\n\n[Watch on YouTube](https://youtube.com/watch?v=DI4VYUv4vFQ)"
    },
    {
        "id": "linux-phone-that-works",
        "title": "Linux Phone That Actually Works - FLX1s Review",
        "date": "2024-01-15",
        "category": "Linux Phones",
        "tags": [
            "linux-phone",
            "flx1s",
            "furilabs",
            "review",
            "mobile-linux",
            "phosh",
            "degoogle",
            "privacy-phone",
            "daily-driver",
            "flick-shell"
        ],
        "videoId": "lITN4HJ3M5Q",
        "excerpt": "The FuriLabs FLX1s is a Linux phone that just works. Calls, texts, mobile data - out of the box.",
        "content": "# Linux Phone That Actually Works - FLX1s Review\n\nThe FuriLabs FLX1s is a Linux phone that just works. Calls, texts, mobile data - out of the box. But here's the thing: you can keep it simple, or you can go deep. Build apps on device. SSH from anywhere. Run a full Linux desktop in your pocket.\n\n## What's Covered in This Review\n\n- Unboxing and first impressions\n- Hardware and buttons\n- Phone calls, SMS, and MMS\n- GPS and navigation\n- Camera reality check\n- App situation (Linux + Android layer)\n- Daily driver verdict\n- Developer perspective\n\n## What's in the Box\n\n- The phone itself\n- Some cute stickers\n- Glass screen protector (ordered separately)\n- A case\n- Free pair of USB-C headphones (nice surprise since there's no headphone jack)\n\n## First Impressions\n\nQuick note on the screen protector - it's glass. Mine cracked in shipping. I'd love to see a film screen protector option instead.\n\nLet me save you some confusion: On day one, I thought the side button was the power button, and the others were programmable. Turns out there are hardware kill switches on this thing!\n\n## The Good\n\n- Actually works as a phone\n- Hardware kill switches for privacy\n- Real Linux - not Android\n- Good build quality\n- Calls, texts, and mobile data work out of the box\n\n## The Reality\n\nThis is one of those rare Linux devices that bridges the gap between \"Linux phone enthusiast\" and \"I just need a phone that works.\"\n\n## Sneak Peek: Flick Shell\n\nPlus a sneak peek at Flick, a mobile Linux shell currently in development for mobile Linux interfaces.\n\n## Links\n\n- FLX1s: https://furilabs.com/shop/flx1s/\n- Flick Shell: https://github.com/ruapotato/Flick\n\n[Watch on YouTube](https://youtube.com/watch?v=lITN4HJ3M5Q)"
    },
    {
        "id": "godot-vs-armory3d-vs-upbge",
        "title": "Godot vs Armory3d vs UPBGE",
        "date": "2023-12-24",
        "category": "Gaming",
        "tags": [
            "Godot",
            "Armory3d",
            "UPBGE",
            "opensource",
            "game engine",
            "python",
            "free software",
            "game-development",
            "blender"
        ],
        "videoId": "VRh6cQM8Kio",
        "excerpt": "Just what is the best Open Source Game engine, let's find out!",
        "content": "# Godot vs Armory3d vs UPBGE\n\nJust what is the best Open Source Game engine, let's find out!\n\nThis video compares three popular open source game engines: Godot, Armory3d, and UPBGE (Uchronia Project Blender Game Engine). Each engine has its own strengths and use cases for game development.\n\n## Comparison Projects\n\nThe comparison includes practical examples using real game projects implemented in each engine:\n\n### Balder3d Project\nA game project implemented across all three engines to demonstrate the differences:\n- **Armory3d version**: [Balder3d for ArmSDK](https://bitbucket.org/hackersgame/balder3d_armsdk/src/master/)\n- **UPBGE version**: [Balder3d for UPBGE](https://bitbucket.org/hackersgame/balder3d_upbge/src/master/)\n- **Godot version**: [Balder3d for Godot](https://bitbucket.org/hackersgame/balder3d/src/master/)\n\n### Griselda Space Game\nA space game project used to demonstrate game development capabilities: [Griselda](https://bitbucket.org/hackersgame/griselda/src/master/)\n\n## Engine Overview\n\n- **Godot**: A fully-featured, community-driven game engine with its own scripting language (GDScript) and support for multiple platforms\n- **Armory3d**: A game engine integrated directly into Blender, allowing 3D artists to create games within their familiar environment\n- **UPBGE**: The Uchronia Project Blender Game Engine, a fork of the original Blender Game Engine with continued development and improvements\n\nThis hands-on approach demonstrates the real-world differences between these game development platforms, helping developers choose the right tool for their projects.\n\n[Watch on YouTube](https://youtube.com/watch?v=VRh6cQM8Kio)"
    },
    {
        "id": "home-automation-home-assistant-vosk-and-python",
        "title": "Home Automation: Home Assistant, VOSK, and Python",
        "date": "2022-01-03",
        "category": "Home Automation",
        "tags": [
            "home assistant",
            "vosk",
            "python",
            "voice control",
            "automation",
            "speech-recognition",
            "smart-home",
            "offline",
            "privacy"
        ],
        "videoId": "iuqCutdfX2s",
        "excerpt": "Full blog with source code for integrating Home Assistant with VOSK voice recognition and Python",
        "content": "# Home Automation: Home Assistant, VOSK, and Python\n\nThis video covers integrating Home Assistant with VOSK voice recognition using Python. The Home Butler project demonstrates how to build a local voice-controlled home automation system without relying on cloud services.\n\n## Project Overview\n\nThe Home Butler project provides a privacy-focused approach to voice-controlled home automation by keeping all speech recognition processing local on your own hardware.\n\n## Key Technologies\n\n### Home Assistant\nAn open-source home automation platform that runs on various devices and supports thousands of smart home devices and services.\n\n### VOSK\nAn offline speech recognition toolkit that provides accurate voice recognition without sending your data to cloud services. Perfect for privacy-conscious users who want voice control without surveillance.\n\n### Python Integration\nPython serves as the glue connecting VOSK's speech recognition to Home Assistant's automation capabilities, allowing voice commands to control your smart home devices.\n\n## Resources\n\n- **Full Blog Post**: [Home Automation Guide](https://www.hackers-game.com/2022/01/03/home-automation-home-assistant-vosk-and-python/)\n- **Source Code**: [Home Butler Repository](https://bitbucket.org/hackersgame/home-butler/src/master/)\n\n## Key Benefits\n\n- **Privacy**: All voice processing happens locally - no cloud services required\n- **Customizable**: Full control over voice commands and automations\n- **Open Source**: Completely transparent and modifiable code\n- **No Subscription**: No monthly fees for voice assistant services\n\n[Watch on YouTube](https://youtube.com/watch?v=iuqCutdfX2s)"
    },
    {
        "id": "containerization-on-linux-phones",
        "title": "Containerization on Linux Phones",
        "date": "2021-10-11",
        "category": "Linux Phones",
        "tags": [
            "linux phone",
            "containers",
            "nspawn",
            "systemd",
            "librem 5",
            "containerization"
        ],
        "videoId": "_86tEHCyMsY",
        "excerpt": "Messing around with containerization with nspawn.",
        "content": "# Containerization on Linux Phones\n\nMessing around with containerization with nspawn on the Librem 5.\n\nThis video explores using systemd-nspawn for containerization on Linux phones. Containers provide a way to run isolated environments, which can be useful for running different distributions or applications that might have conflicting dependencies.\n\n## Why Containerization on Phones?\n\nRunning containers on a Linux phone opens up interesting possibilities:\n\n- **Application isolation** - Keep apps and their dependencies separate\n- **Multiple environments** - Run different Linux distributions alongside PureOS\n- **Testing** - Try new software without affecting the main system\n- **Development** - Create reproducible build environments on mobile\n\n## systemd-nspawn\n\nsystemd-nspawn is a lightweight container solution that's part of systemd, making it well-suited for resource-constrained devices like phones. Unlike full Docker containers, nspawn provides a simpler, more direct approach to OS-level virtualization.\n\n## Resources\n\n- **Full blog post**: https://www.hackers-game.com/2021/10/11/containerization-on-linux-phones/\n- **Source code**: https://source.puri.sm/david.hamner/boxes\n\nThe project demonstrates that Linux phones can leverage the same containerization technologies used on desktop and server Linux systems.\n\n[Watch on YouTube](https://youtube.com/watch?v=_86tEHCyMsY)"
    },
    {
        "id": "poodillion-an-os-game",
        "title": "Poodillion (An OS game)",
        "date": "2021-09-04",
        "category": "Gaming",
        "tags": [
            "game",
            "operating-system",
            "poodillion",
            "bash",
            "cmd",
            "linux",
            "gpl",
            "terminal-game"
        ],
        "videoId": "oGhSBksuCZs",
        "excerpt": "Poodillion - an operating system themed game.",
        "content": "# Poodillion (An OS game)\n\nPoodillion is an operating system themed game.\n\n## What is Poodillion?\n\nPoodillion is a game that explores operating system concepts in a playful, interactive way. It combines gaming with learning about how computers and operating systems work.\n\n## Game Concept\n\nThe game features:\n- OS-themed gameplay mechanics\n- Terminal/command-line elements\n- Educational aspects about system operations\n- Runs on Linux (including Linux phones like the Librem 5)\n\n## Technical Details\n\n- **Platform**: Linux, including mobile\n- **Interface**: Terminal/Bash-based elements\n- **License**: GPL (open source)\n\n## Try It Yourself\n\nThe game is open source and available for you to play and explore:\n\n- **Source Code**: https://bitbucket.org/hackersgame/poodillion\n- **Blog Post**: https://www.hackers-game.com/2021/09/04/poodillion-an-os-game/\n\n## Why an OS Game?\n\nGames can be a great way to learn technical concepts. By gamifying operating system concepts, Poodillion makes learning about:\n- Command line operations\n- System processes\n- File systems\n- Computer architecture\n\nMore engaging and memorable than traditional tutorials.\n\n[Watch on YouTube](https://youtube.com/watch?v=oGhSBksuCZs)"
    },
    {
        "id": "3d-dependency-forest",
        "title": "3D Dependency Forest",
        "date": "2021-08-09",
        "category": "Programming",
        "tags": [
            "visualization",
            "dependencies",
            "3d",
            "programming",
            "tools",
            "python"
        ],
        "videoId": "zEXWN1BCieA",
        "excerpt": "A 3D visualization tool for exploring dependency trees.",
        "content": "# 3D Dependency Forest\n\nA 3D visualization tool for exploring dependency trees and understanding complex software relationships.\n\nThis project creates a three-dimensional forest visualization of software dependencies, making it easier to understand and navigate complex dependency relationships in a visual and intuitive way. Instead of staring at flat lists of dependencies, you can explore them as a navigable 3D environment where the structure and relationships become immediately apparent.\n\n## Resources\n\n- **Full blog post**: https://www.hackers-game.com/2021/08/09/3d-dependency-forest/\n- **Source code**: https://bitbucket.org/hackersgame/3d-dependency-tree/src/master/\n\nThe visualization helps developers quickly identify dependency chains, spot potential issues with deeply nested dependencies, and understand the overall architecture of a project's dependency tree.\n\n[Watch on YouTube](https://youtube.com/watch?v=zEXWN1BCieA)"
    },
    {
        "id": "funkyfish-v2-playing-around-with-blender",
        "title": "FunkyFish v2 (Playing around with blender)",
        "date": "2021-07-27",
        "category": "Desktop Linux",
        "tags": [
            "blender",
            "3d",
            "animation",
            "cuttlefish",
            "3d-modeling",
            "video-editing"
        ],
        "videoId": "l82fVM85be8",
        "excerpt": "Not useful, but funky.",
        "content": "# FunkyFish v2 (Playing around with blender)\n\nNot useful, but funky.\n\nA fun 3D animation project created in Blender featuring a stylized cuttlefish. This was an experiment in learning Blender's animation tools and creating something visually entertaining.\n\n## Project Details\n\nThis project demonstrates Blender's capabilities for creating whimsical 3D animations. The \"FunkyFish\" is actually a cuttlefish character animated with playful, vibrant movements.\n\nThe video also includes a reference to the Star Trek: Voyager intro, adding a sci-fi element to the presentation.\n\n## Music Credits\n\nMusic: \"Tilt\" by Avaren\n\n[Watch on YouTube](https://youtube.com/watch?v=l82fVM85be8)"
    },
    {
        "id": "hacking-a-better-definition",
        "title": "Hacking: a Better Definition",
        "date": "2021-07-18",
        "category": "Programming",
        "tags": [
            "hacking",
            "hacker culture",
            "MIT",
            "free software",
            "history",
            "programming-culture"
        ],
        "videoId": "z9j6QM2onhg",
        "excerpt": "A hacker is someone who enjoys playful cleverness - not necessarily with computers.",
        "content": "# Hacking: a Better Definition\n\nA hacker is someone who enjoys playful cleverness - not necessarily with computers.\n\n## The Original Meaning\n\nThe programmers in the old MIT free software community of the 60s and 70s referred to themselves as hackers. The term originally described someone who approaches problems with creativity, curiosity, and a playful attitude toward finding clever solutions.\n\n## The Misunderstanding\n\nAround 1980, journalists who discovered the hacker community mistakenly took the term to mean \"security breaker.\" This mischaracterization has persisted in mainstream media and public consciousness ever since.\n\n## True Hacker Culture\n\nThe original hacker ethos emphasized:\n- Playful cleverness in problem-solving\n- Sharing knowledge and code freely\n- Intellectual curiosity and exploration\n- Creative approaches to technical challenges\n- The joy of understanding how things work\n\nThis video aims to restore the proper understanding of what it means to be a hacker, reclaiming the term from its misappropriation by media coverage of computer crime.\n\n[Watch on YouTube](https://youtube.com/watch?v=z9j6QM2onhg)"
    },
    {
        "id": "librem-5-screen-reader",
        "title": "Librem 5 Screen Reader",
        "date": "2021-05-24",
        "category": "Linux Phones",
        "tags": [
            "librem 5",
            "purism",
            "accessibility",
            "screen reader",
            "linux phone",
            "readit",
            "ocr"
        ],
        "videoId": "ioraJIPnQ-E",
        "excerpt": "Read and copy any text from any app on the Librem 5.",
        "content": "# Librem 5 Screen Reader\n\nRead and copy any text from any app on the Librem 5.\n\nThis video demonstrates a screen reader application for the Librem 5 that allows users to read and copy text from any application on the device.\n\n## The Readit Application\n\nReadit is an OCR (Optical Character Recognition) tool that captures screen content and extracts text. This enables accessibility features and text extraction from applications that don't natively support text selection.\n\n**Source Code**: https://source.puri.sm/david.hamner/readit\n\n### Features\n\n- **Screen capture**: Takes a screenshot of the current screen\n- **OCR processing**: Uses optical character recognition to identify text\n- **Text extraction**: Converts image text to selectable, copyable text\n- **Universal compatibility**: Works with any application's display\n\n### Use Cases\n\n- Extract text from images or PDFs\n- Copy text from applications without copy/paste support\n- Accessibility for users who need text-to-speech\n- Quick note-taking from any screen content\n\n## How It Works\n\n1. Activate Readit through the app or a keyboard shortcut\n2. The current screen is captured\n3. OCR engine processes the image\n4. Recognized text is presented for selection and copying\n\n## Accessibility on Linux Phones\n\nThe Librem 5's open platform enables custom accessibility solutions like Readit. Unlike locked-down mobile operating systems, developers can create deep system integrations to assist users with different needs.\n\n## Related Content\n\nClip from Explore Gadgets: https://youtu.be/Ll5jQgsHk88\n\n[Watch on YouTube](https://youtube.com/watch?v=ioraJIPnQ-E)"
    },
    {
        "id": "debugging-debian-based-distros",
        "title": "Debugging Debian Based Distros",
        "date": "2021-04-06",
        "category": "Linux",
        "tags": [
            "debian",
            "linux",
            "debugging",
            "troubleshooting",
            "system administration",
            "PureOS",
            "supportconfig",
            "debug logs"
        ],
        "videoId": "nRWvbmD7gJY",
        "excerpt": "Interactive debugging guide for Debian-based Linux distributions.",
        "content": "# Debugging Debian Based Distros\n\nAn interactive guide to debugging Debian-based Linux distributions. This video covers essential troubleshooting techniques and tools for diagnosing issues on Debian, Ubuntu, PureOS, and other Debian-based systems.\n\n## What's Covered\n\nThe video demonstrates debugging approaches similar to SUSE's supportconfig tool, adapted for Debian-based systems:\n\n- Collecting system information\n- Analyzing debug logs\n- Identifying common issues\n- Systematic troubleshooting methodology\n\n## Resources\n\n- **Interactive version**: https://www.hackers-game.com/2021/04/06/debugging-debian-based-distros/\n- **Source code**: https://source.puri.sm/david.hamner/debug-report\n- **Based on work by**: https://github.com/g23guy\n\n## Key Debugging Techniques\n\n- **Log analysis** - Reading and interpreting system logs\n- **Service status** - Checking systemd service states\n- **Package verification** - Ensuring installed packages are intact\n- **Hardware information** - Gathering relevant hardware details\n- **Configuration review** - Checking system configuration files\n\n## Applicability\n\nThese techniques work across the Debian family:\n\n- Debian\n- Ubuntu and derivatives\n- PureOS\n- Linux Mint\n- Pop!_OS\n- And other Debian-based distributions\n\n[Watch on YouTube](https://youtube.com/watch?v=nRWvbmD7gJY)"
    },
    {
        "id": "navigating-the-gnu-linux-filesystem",
        "title": "Navigating the GNU Linux Filesystem",
        "date": "2021-03-08",
        "category": "Linux",
        "tags": [
            "filesystem",
            "linux",
            "bash",
            "ls",
            "cd",
            "navigation",
            "terminal",
            "fhs",
            "directories"
        ],
        "videoId": "FCyjY5R05N8",
        "excerpt": "Learn how to navigate the GNU Linux filesystem.",
        "content": "# Navigating the GNU Linux Filesystem\n\nLearn how to navigate the GNU Linux filesystem.\n\n## Essential Commands\n\n### `ls` - List Directory Contents\n```bash\nls           # List files in current directory\nls -l        # Long format with details\nls -a        # Show hidden files (starting with .)\nls -la       # Combine long format and hidden files\nls /path     # List specific directory\n```\n\n### `cd` - Change Directory\n```bash\ncd /home     # Go to absolute path\ncd Documents # Go to relative path\ncd ..        # Go up one directory\ncd ~         # Go to home directory\ncd -         # Go to previous directory\n```\n\n### `pwd` - Print Working Directory\n```bash\npwd          # Show current location\n```\n\n## The Linux Directory Structure\n\n### Key Directories\n- `/` - Root of the entire filesystem\n- `/home` - User home directories\n- `/root` - Root user's home\n- `/etc` - System configuration files\n- `/var` - Variable data (logs, databases)\n- `/tmp` - Temporary files\n- `/usr` - User programs and data\n- `/bin` - Essential binaries\n- `/sbin` - System binaries\n- `/dev` - Device files\n- `/proc` - Process information\n- `/sys` - System information\n\n## Path Types\n\n### Absolute Paths\nStart from root (`/`):\n```bash\n/home/user/Documents/file.txt\n```\n\n### Relative Paths\nStart from current directory:\n```bash\n./script.sh      # Current directory\n../other/file    # Up one, then down\nDocuments/file   # Down from current\n```\n\n## Tips\n\n- Use Tab completion to autocomplete paths\n- Use `..` to go up directories\n- Hidden files start with `.`\n- Everything in Linux is a file (even directories)\n\n## Full Blog\n\nFor an interactive 3D visualization: https://www.hackers-game.com/2021/03/08/gnu-linux-filesystem-in-3d/\n\n[Watch on YouTube](https://youtube.com/watch?v=FCyjY5R05N8)"
    },
    {
        "id": "booting-and-using-old-hardware",
        "title": "Booting and Using Old Hardware",
        "date": "2021-01-12",
        "category": "Hardware",
        "tags": [
            "old hardware",
            "retro computing",
            "linux",
            "hardware revival",
            "vintage",
            "unix"
        ],
        "videoId": "lN2h7VN8mfU",
        "excerpt": "Exploring how to boot and use old hardware.",
        "content": "# Booting and Using Old Hardware\n\nExploring how to boot and use old hardware, bringing vintage machines back to life with Linux.\n\nThis video demonstrates the process of reviving older computer hardware using Linux, showing that vintage machines can still be useful and functional today.\n\n## Why Use Old Hardware?\n\n- **Sustainability** - Extending the useful life of existing hardware\n- **Learning** - Understanding how computers work at a fundamental level\n- **Nostalgia** - Enjoying vintage computing experiences\n- **Cost savings** - Getting value from equipment that might otherwise be discarded\n\n## Challenges and Solutions\n\nWorking with old hardware often involves:\n\n- Finding compatible operating systems\n- Working around hardware limitations\n- Dealing with legacy interfaces and connectors\n- Optimizing for limited resources\n\nLinux and Unix-like systems are often the best choice for old hardware due to their flexibility and ability to run on minimal resources.\n\n## Resources\n\n- **Website**: www.hackers-game.com\n\n[Watch on YouTube](https://youtube.com/watch?v=lN2h7VN8mfU)"
    },
    {
        "id": "system-admins-multi-tool",
        "title": "The System Admin's Multi-tool",
        "date": "2020-12-29",
        "category": "Hardware",
        "tags": [
            "sysadmin",
            "linux",
            "tools",
            "installation",
            "multi-boot",
            "kvm",
            "usb",
            "keyboard",
            "python"
        ],
        "videoId": "H55tQc5wYEs",
        "excerpt": "Control or install just about any Linux OS, from one device.",
        "content": "# The System Admin's Multi-tool\n\nControl or install just about any Linux OS, from one device.\n\nThis video demonstrates a versatile hardware tool that system administrators can use to manage and install various Linux distributions. Whether you need to deploy a new server, troubleshoot an existing system, or maintain multiple machines, this multi-tool approach streamlines the process by consolidating everything into a single device.\n\n## What It Does\n\nThe system admin's multi-tool combines several capabilities:\n\n- **KVM (Keyboard, Video, Mouse) functionality** - Control remote systems as if you were sitting in front of them\n- **USB boot capability** - Boot any system from your device with multiple Linux distributions ready to go\n- **Keyboard emulation** - Send keystrokes to target systems for automation and setup\n\n## Technical Details\n\nThe project involves:\n\n- **Python scripting** - Custom code to manage the multi-tool functionality\n- **USB device emulation** - Making the device appear as different USB peripherals\n- **Multiple Linux distributions** - Having various distros ready to deploy\n\n## Use Cases\n\n- **Server deployment** - Quickly install Linux on new servers\n- **System recovery** - Boot into a live environment to rescue broken systems\n- **Remote administration** - Manage systems without needing physical keyboard/monitor switches\n- **Consistent tooling** - Carry your entire toolkit in one portable device\n\n## Interactive Version\n\nFor more details and interactive content, check out the full blog post:\n[The System Admin's Multi-tool](https://www.hackers-game.com/2020/12/29/the-system-admins-multi-tool/)\n\n[Watch on YouTube](https://youtube.com/watch?v=H55tQc5wYEs)"
    },
    {
        "id": "terminal-touch-interface-multilsh",
        "title": "Terminal Touch Interface | Multilsh",
        "date": "2020-12-21",
        "category": "Linux Phones",
        "tags": [
            "terminal",
            "touch-interface",
            "multilsh",
            "cli",
            "user-interface",
            "linux-phone",
            "librem-5"
        ],
        "videoId": "rv5YBCzd4Wo",
        "excerpt": "A touch-friendly terminal interface using Multilsh",
        "content": "# Terminal Touch Interface | Multilsh\n\nThis video demonstrates Multilsh, a touch-friendly terminal interface for Linux.\n\nMultilsh provides an alternative way to interact with the command line using touch gestures, making terminal usage more accessible on touchscreen devices and tablets running Linux - particularly useful for Linux phones like the Librem 5.\n\n## The Problem\n\nTraditional terminal interfaces are designed for keyboards and mice. On touch devices like Linux phones, typing commands can be cumbersome with on-screen keyboards, and navigating command history or completing commands requires awkward taps.\n\n## The Solution: Multilsh\n\nMultilsh reimagines the terminal interface for touch:\n\n- **Touch-optimized controls** - Large, tap-friendly buttons and gestures\n- **Terminal keyboard integration** - Designed to work well with on-screen keyboards\n- **Full terminal functionality** - All the power of a standard shell\n\n## Source Code\n\nThe project is open source and available for you to use and contribute to:\n\n**Repository:** [Multilsh on Bitbucket](https://bitbucket.org/hackersgame/multilsh/src/master/)\n\n## Why This Matters\n\nAs Linux phones become more viable for daily use, we need interfaces that work well with touch input. Multilsh is one approach to making the command line accessible to Linux phone users without sacrificing the power that terminal users expect.\n\n## Full Documentation\n\nFor complete details and documentation:\n[Terminal Touch Interface Blog Post](https://www.hackers-game.com/2020/12/21/terminal-touch-interface-multilsh/)\n\n[Watch on YouTube](https://youtube.com/watch?v=rv5YBCzd4Wo)"
    },
    {
        "id": "3d-printing-a-phone-case",
        "title": "3d Printing a Phone Case",
        "date": "2020-11-16",
        "category": "Hardware",
        "tags": [
            "3d printing",
            "phone case",
            "librem 5",
            "hardware",
            "diy",
            "phonic",
            "audiobook"
        ],
        "videoId": "deMB2GzBVHc",
        "excerpt": "3D printing a custom phone case for the Librem 5.",
        "content": "# 3d Printing a Phone Case\n\nA walkthrough of 3D printing a custom phone case for the Librem 5 Linux phone.\n\nThis project combines 3D printing with the Librem 5 phone, using official 3D designs from Purism to create a functional protective case. The video demonstrates the complete process from design files to finished product.\n\n## Resources\n\n- **Full blog post**: https://www.hackers-game.com/2020/11/16/3d-printing-a-phone-case/\n- **Phonic source code**: https://bitbucket.org/hackersgame/phonic\n- **Phone case 3D designs**: https://source.puri.sm/Librem5/3D_designs/-/tree/master/Librem5-Case\n\nThe Librem 5 case designs are open source and available from Purism's GitLab repository, allowing anyone with a 3D printer to create their own custom cases.\n\n[Watch on YouTube](https://youtube.com/watch?v=deMB2GzBVHc)"
    },
    {
        "id": "networking-and-osi-basics",
        "title": "Networking and OSI Basics",
        "date": "2020-11-07",
        "category": "Linux",
        "tags": [
            "networking",
            "osi-model",
            "dhcp",
            "mac",
            "ip",
            "dns",
            "arp",
            "protocol",
            "tcp-ip"
        ],
        "videoId": "uJ5UOJJVkgA",
        "excerpt": "How does the internet work?",
        "content": "# Networking and OSI Basics\n\nHow does the internet work?\n\n## The OSI Model\n\nThe Open Systems Interconnection (OSI) model explains how data travels across networks in 7 layers:\n\n### Layer 7 - Application\n- What users interact with\n- HTTP, FTP, SMTP, DNS\n- Web browsers, email clients\n\n### Layer 6 - Presentation\n- Data formatting and encryption\n- SSL/TLS, JPEG, ASCII\n\n### Layer 5 - Session\n- Managing connections\n- Authentication, reconnection\n\n### Layer 4 - Transport\n- Reliable data transfer\n- TCP (reliable), UDP (fast)\n- Port numbers\n\n### Layer 3 - Network\n- Routing between networks\n- IP addresses\n- Routers\n\n### Layer 2 - Data Link\n- Local network communication\n- MAC addresses\n- Switches, bridges\n\n### Layer 1 - Physical\n- Actual cables and signals\n- Ethernet, WiFi, fiber\n\n## Key Protocols\n\n### DHCP (Dynamic Host Configuration Protocol)\nAutomatically assigns IP addresses to devices on a network.\n\n### DNS (Domain Name System)\nTranslates domain names (google.com) to IP addresses.\n\n### ARP (Address Resolution Protocol)\nMaps IP addresses to MAC addresses on local networks.\n\n### MAC Addresses\nPhysical hardware addresses, unique to each network interface.\n\n### IP Addresses\nLogical addresses for routing between networks.\n\n## How Data Travels\n\n1. Application creates data\n2. Data is segmented and given port numbers\n3. IP addresses are added for routing\n4. MAC addresses are added for local delivery\n5. Data becomes electrical/optical signals\n6. Process reverses at destination\n\n## Interactive Version\n\nFor a more hands-on learning experience: https://www.hackers-game.com/2020/11/07/networking-and-osi-basics/\n\n[Watch on YouTube](https://youtube.com/watch?v=uJ5UOJJVkgA)"
    },
    {
        "id": "robocalls-fight-bots-with-bots",
        "title": "Robocalls | Fight Bots with Bots",
        "date": "2020-09-08",
        "category": "Home Automation",
        "tags": [
            "robocalls",
            "automation",
            "voip",
            "phone",
            "bot",
            "ivr",
            "librem-5",
            "audio"
        ],
        "videoId": "SFS0YTQl4vY",
        "excerpt": "Let a robot answer your phone for you.",
        "content": "# Robocalls | Fight Bots with Bots\n\nLet a robot answer your phone for you.\n\nThis video demonstrates how to use automation to combat robocalls by having a bot answer your phone and handle unwanted calls automatically. If they're going to use robots to call you, why not use a robot to answer?\n\n## The Solution: Callen\n\nThe project featured in this video is called **Callen**, a bot designed to intercept and handle robocalls.\n\n**Source Code:** [Callen on Bitbucket](https://bitbucket.org/hackersgame/callen/)\n\n## How It Works\n\nThe system uses:\n\n- **IVR (Interactive Voice Response)** - Automated menu systems to interact with callers\n- **Audio processing** - Handling incoming audio from callers\n- **VoIP integration** - Working with phone systems\n- **Librem 5 integration** - Tested and demonstrated on the Librem 5 Linux phone\n\n## Features\n\n- Automatically answers incoming calls\n- Can detect and handle robocalls\n- Wastes robocallers' time with automated responses\n- Protects your time and attention from spam calls\n\n## Why This Matters\n\nRobocalls have become an epidemic, with billions of spam calls made every year. Traditional blocking methods are reactive - you have to receive the call first before you can block the number. This approach is proactive, letting a bot handle the call so you never have to.\n\nBy making robocalling less profitable (wasting their time with bots), we can help reduce the incentive for these spam operations.\n\n[Watch on YouTube](https://youtube.com/watch?v=SFS0YTQl4vY)"
    },
    {
        "id": "linux-boot-process",
        "title": "Linux Boot Process",
        "date": "2020-08-23",
        "category": "Linux",
        "tags": [
            "linux",
            "boot",
            "process",
            "system administration",
            "bios",
            "uefi",
            "grub",
            "systemd",
            "kernel"
        ],
        "videoId": "WHqJPqUzC2Q",
        "excerpt": "Understanding the Linux boot process from power-on to login.",
        "content": "# Linux Boot Process\n\nAn overview of the Linux boot process, explaining what happens from the moment you press the power button to when you reach the login screen.\n\n**Interactive version**: https://www.hackers-game.com/2020/08/23/linux-boot-process/\n\nThis video covers the various stages of Linux system initialization, providing fundamental knowledge for Linux system administrators and anyone wanting to troubleshoot boot-related issues.\n\n## Stage 1: BIOS/UEFI\n\nWhen you press the power button:\n\n1. **Power-On Self Test (POST)**: Hardware initialization and verification\n2. **Device enumeration**: Identifying connected hardware\n3. **Boot device selection**: Finding the bootloader\n\n### BIOS vs UEFI\n- **BIOS**: Legacy firmware, MBR partition tables, limited to 2TB drives\n- **UEFI**: Modern firmware, GPT partition tables, secure boot support\n\n## Stage 2: Bootloader (GRUB)\n\nGRUB (Grand Unified Bootloader) is the most common Linux bootloader:\n\n1. **Stage 1**: Loaded from MBR or EFI partition\n2. **Stage 1.5**: Filesystem drivers (for BIOS systems)\n3. **Stage 2**: Full GRUB environment with menu\n\n### GRUB Configuration\n- Located at `/boot/grub/grub.cfg`\n- Generated by `grub-mkconfig` or `update-grub`\n- Allows kernel parameter modifications\n\n## Stage 3: Kernel Loading\n\nThe Linux kernel initialization:\n\n1. **Kernel decompression**: The compressed kernel extracts itself\n2. **Hardware initialization**: Setting up CPU, memory, devices\n3. **Mounting initramfs**: Temporary root filesystem\n4. **Loading drivers**: Required for accessing the real root filesystem\n\n## Stage 4: Init System (systemd)\n\nModern Linux distributions use systemd:\n\n1. **PID 1**: systemd becomes the first user process\n2. **Target units**: Defining system states (multi-user, graphical)\n3. **Service startup**: Parallel service initialization\n4. **Dependency management**: Ensuring correct startup order\n\n### Key systemd Commands\n```bash\n# Check boot time\nsystemd-analyze\n\n# View boot blame\nsystemd-analyze blame\n\n# Check service status\nsystemctl status\n\n# View boot log\njournalctl -b\n```\n\n## Stage 5: Login\n\nFinally, the login prompt appears:\n\n- **Console login**: getty on virtual terminals\n- **Graphical login**: Display manager (GDM, SDDM, LightDM)\n- **Session initialization**: User environment setup\n\n## Troubleshooting Boot Issues\n\nUnderstanding the boot process helps diagnose problems:\n- BIOS/UEFI issues: Hardware or firmware configuration\n- GRUB issues: Bootloader corruption or misconfiguration\n- Kernel issues: Driver problems or kernel panics\n- systemd issues: Service failures or dependency problems\n\n[Watch on YouTube](https://youtube.com/watch?v=WHqJPqUzC2Q)"
    },
    {
        "id": "mobile-ip-native-communication",
        "title": "Mobile IP-native Communication",
        "date": "2020-07-21",
        "category": "Linux Phones",
        "tags": [
            "mobile-linux",
            "voip",
            "jmp",
            "cellular",
            "wifi",
            "communication",
            "linux-phone",
            "librem-5",
            "sip",
            "xmpp"
        ],
        "videoId": "1t4L_QNZ74A",
        "excerpt": "Use cellular data or Wifi at home to call or text.",
        "content": "# Mobile IP-native Communication\n\nUse cellular data or Wifi at home to call or text.\n\n## The Concept\n\nIP-native communication allows you to make calls and send texts over data connections rather than traditional cellular voice services. This works whether you're on cellular data or connected to WiFi at home.\n\n## Why IP-Native?\n\n### Advantages\n- **Flexibility**: Call from anywhere with internet\n- **Cost Savings**: Use WiFi at home instead of cellular minutes\n- **Privacy**: Your calls don't go through traditional telco infrastructure\n- **Linux Phone Friendly**: Better integration with open-source stacks\n\n### How It Works\n1. Voice calls are converted to VoIP (Voice over IP)\n2. Text messages go through XMPP or similar protocols\n3. A service bridges to the regular phone network\n4. You get a real phone number others can call/text\n\n## JMP.chat\n\nJMP is highlighted as a solution for IP-native communication:\n- Provides a real phone number\n- Bridges calls and texts to/from the regular network\n- Works great with Linux phones\n- Uses open protocols (XMPP/SIP)\n\n## T-Mobile Data-Only Plan\n\nFor those who want to go fully IP-native:\n- T-Mobile offers data-only prepaid plans\n- Use data for all communication via JMP or similar\n- No traditional voice/SMS plan needed\n\n## Setup on Linux Phones\n\nWorks particularly well on:\n- Librem 5\n- PinePhone\n- Any Linux phone with XMPP/SIP clients\n\n## Links\n\n- JMP: https://jmp.chat/\n- T-Mobile data only plan: https://prepaid.t-mobile.com/prepaid-internet\n\n[Watch on YouTube](https://youtube.com/watch?v=1t4L_QNZ74A)"
    },
    {
        "id": "librem-5-dogwood-game-emulation",
        "title": "Librem 5 Dogwood Game Emulation",
        "date": "2020-07-13",
        "category": "Gaming",
        "tags": [
            "librem 5",
            "dogwood",
            "emulation",
            "snes",
            "n64",
            "linux phone",
            "mupen64plus",
            "snes9x",
            "retro gaming"
        ],
        "videoId": "ONLpCiTlTQg",
        "excerpt": "Playing with Mupen64plus and Snes9x on a Librem 5 Dogwood.",
        "content": "# Librem 5 Dogwood Game Emulation\n\nPlaying with Mupen64plus and Snes9x on a Librem 5 Dogwood.\n\nThis video demonstrates game emulation capabilities on the Librem 5 Dogwood edition Linux phone. We test both SNES and N64 emulators to see how well retro gaming performs on this mobile Linux device. The Dogwood batch represents a significant hardware revision that improves thermal management and overall performance.\n\n## Related Resources\n\nCheck out the Librem 5 keyboard improvements blog post from Purism: https://puri.sm/posts/librem-5-keyboard-improvements/\n\n## Building SNES9x\n\nSNES9x is a portable Super Nintendo Entertainment System emulator. Here's how to build it from source on the Librem 5:\n\n```bash\ncd ~\ngit clone https://github.com/snes9xgit/snes9x.git\ncd snes9x/gtk\nsudo apt install gettext libgtkmm-3.0-dev\nmeson build --prefix=/usr --buildtype=release --strip\ncd build\nninja\nsudo ninja install\n```\n\n## Building Mupen64plus (N64)\n\nMupen64plus is a cross-platform N64 emulator. Building it requires compiling multiple components: the core, UI console, video plugin, audio plugin, RSP plugin, and input plugin.\n\n### Install Dependencies\n\n```bash\nsudo apt install zlib1g-dev libpng-dev libsdl2-dev libfreetype6-dev libmupen64plus-dev\n```\n\n### Build the Core\n\n```bash\ngit clone https://github.com/mupen64plus/mupen64plus-core.git\ncd mupen64plus-core/projects/unix\nmake all\nsudo make install\n```\n\n### Build the UI Console\n\n```bash\ncd ~\ngit clone https://github.com/mupen64plus/mupen64plus-ui-console.git\ncd mupen64plus-ui-console/projects/unix\nmake all\nsudo make install\n```\n\n### Build the Video Plugin (Rice)\n\n```bash\ncd ~\ngit clone https://github.com/mupen64plus/mupen64plus-video-rice.git\ncd mupen64plus-video-rice/projects/unix\nmake all\nsudo make install\n```\n\n### Build the Audio Plugin (SDL)\n\n```bash\ncd ~\ngit clone https://github.com/mupen64plus/mupen64plus-audio-sdl.git\ncd mupen64plus-audio-sdl/projects/unix\nmake all\nsudo make install\n```\n\n### Build the RSP Plugin (HLE)\n\n```bash\ncd ~\ngit clone https://github.com/mupen64plus/mupen64plus-rsp-hle.git\ncd mupen64plus-rsp-hle/projects/unix\nmake all\nsudo make install\n```\n\n### Build the Input Plugin (SDL)\n\n```bash\ncd ~\ngit clone https://github.com/mupen64plus/mupen64plus-input-sdl.git\ncd mupen64plus-input-sdl/projects/unix\nmake all\nsudo make install\n```\n\n## Performance Notes\n\nThe Librem 5 Dogwood edition handles SNES emulation smoothly thanks to the relatively low requirements of 16-bit era games. N64 emulation is more demanding but still playable for many titles with the Rice video plugin providing a good balance between compatibility and performance.\n\n[Watch on YouTube](https://youtube.com/watch?v=ONLpCiTlTQg)"
    },
    {
        "id": "pinephone-images-on-the-librem-5",
        "title": "Pinephone Images on the Librem 5",
        "date": "2020-06-30",
        "category": "Linux Phones",
        "tags": [
            "librem-5",
            "pinephone",
            "linux-phone",
            "arch",
            "opensuse",
            "mobian",
            "image-building",
            "mobile-linux"
        ],
        "videoId": "K_RpvXSuY2Q",
        "excerpt": "Let's hack around with some Linux phone images.",
        "content": "# Pinephone Images on the Librem 5\n\nLet's hack around with some Linux phone images.\n\n## The Project\n\nIn this video, I explore running various PinePhone operating system images on the Librem 5 hardware. This involves building custom images and adapting them to work on different Linux phone platforms, demonstrating the flexibility of open-source mobile Linux ecosystems.\n\n## Why Cross-Platform Images?\n\nThe Linux phone ecosystem has multiple hardware options:\n- **Librem 5** - Purism's privacy-focused phone\n- **PinePhone** - Pine64's community phone\n\nHaving software that works across devices:\n- Expands user choice\n- Reduces fragmentation\n- Allows trying different distros on your hardware\n- Demonstrates open-source flexibility\n\n## Operating Systems Explored\n\n### Arch Linux ARM\nThe Arch experience on mobile - rolling release, bleeding edge packages, AUR access.\n\n### OpenSUSE\nBringing the green chameleon to mobile Linux with Tumbleweed or Leap options.\n\n### Mobian\nDebian-based mobile Linux with strong community support.\n\n## Technical Approach\n\nThe project involves:\n1. Obtaining PinePhone OS images\n2. Adapting device-specific configurations\n3. Building images compatible with Librem 5 hardware\n4. Testing and debugging the adaptations\n\n## Build Script\n\nThe build script for creating these images is available for those who want to experiment with their own Linux phone setups:\n\nhttps://bitbucket.org/hackersgame/librem5_image_builder/src/master/\n\n## Community\n\nLibrem 5 Matrix chat for discussion and help:\nhttps://developer.puri.sm/Librem5/Contact/Community.html\n\n[Watch on YouTube](https://youtube.com/watch?v=K_RpvXSuY2Q)"
    },
    {
        "id": "the-first-distro-hj-lus-bootable-rootdisk-for-linux",
        "title": "The First Distro | H.J.Lu's bootable rootdisk for Linux",
        "date": "2020-06-24",
        "category": "Linux",
        "tags": [
            "linux-history",
            "distro",
            "bootable",
            "rootdisk",
            "qemu",
            "gnu-linux",
            "hj-lu"
        ],
        "videoId": "b8-G9JjgknA",
        "excerpt": "The first GNU+Linux distro.",
        "content": "# The First Distro | H.J.Lu's bootable rootdisk for Linux\n\nThe first GNU+Linux distro.\n\nThis video explores the very first Linux distribution - H.J. Lu's bootable rootdisk. Before Ubuntu, before Red Hat, before Slackware, there was this simple floppy disk image that allowed people to boot into a working Linux system.\n\n## Historical Significance\n\nH.J. Lu's bootable rootdisk represents a pivotal moment in Linux history. It was one of the first ways for people to actually try Linux without having to compile everything themselves from Linus Torvalds' kernel source code.\n\n## Try It Yourself\n\nYou can download and test this piece of computing history for yourself!\n\n**Download:** [HU985-5R.ZIP from PC Corner](https://www.pcorner.com/list/LINUX/HU985-5R.ZIP/INFO/)\n\n### Running with QEMU\n\nTo run the historic bootable rootdisk, use QEMU with the following command:\n\n```bash\nqemu-system-i386 -drive file=./HU985-5R.img,if=floppy,format=raw\n```\n\nThis boots the floppy image in an emulated i386 system, letting you experience what early Linux adopters would have seen.\n\n## What to Expect\n\nThis is a minimal system from the early 1990s. Don't expect a graphical interface or modern conveniences. What you'll find is:\n\n- A basic shell environment\n- Core Unix utilities\n- The ability to explore one of the first complete, bootable Linux systems\n\n## Why This Matters\n\nUnderstanding where Linux came from helps us appreciate how far it has come. From a single floppy disk to powering everything from smartphones to supercomputers, Linux's journey is remarkable.\n\n[Watch on YouTube](https://youtube.com/watch?v=b8-G9JjgknA)"
    },
    {
        "id": "copyleft-smartphone",
        "title": "Copyleft Smartphone",
        "date": "2020-03-14",
        "category": "Linux Phones",
        "tags": [
            "android",
            "copyleft",
            "open-source",
            "smartphone",
            "privacy",
            "librem 5",
            "purism",
            "gnu",
            "linux"
        ],
        "videoId": "9J-bkP9lSH0",
        "excerpt": "Android is less free than we were led to believe.",
        "content": "# Copyleft Smartphone\n\nAndroid is less free than we were led to believe.\n\nThis video explores the reality of Android's open-source claims and examines the copyleft movement in the smartphone space. We discuss the limitations of Android's openness and what alternatives exist for those seeking truly free software on their mobile devices.\n\n## The Problem with \"Open Source\" Android\n\nWhile Android is technically open source, in practice:\n\n- Most useful features require proprietary Google services\n- Manufacturers add proprietary layers and bloatware\n- True freedom to modify and control your device is limited\n- Privacy concerns with closed-source components\n\n## The Copyleft Alternative\n\nCopyleft smartphones like the Librem 5 offer a different approach:\n\n- Fully free software stack\n- Hardware designed for user freedom\n- No reliance on proprietary services\n- True ownership and control\n\n## Related Videos\n\n- Without Music version: https://youtu.be/vjZMIWo0TWw\n- Updated with Music version: https://youtu.be/K2zwuC1rUsM\n\nThe video makes the case for why copyleft principles matter in mobile computing and what options are available for users who want genuine software freedom on their phones.\n\n[Watch on YouTube](https://youtube.com/watch?v=9J-bkP9lSH0)"
    },
    {
        "id": "librem-5-new-apps",
        "title": "Librem 5 | New Apps",
        "date": "2020-02-13",
        "category": "Linux Phones",
        "tags": [
            "librem 5",
            "linux phone",
            "localvoice",
            "apps",
            "purism",
            "voice to text",
            "anbox"
        ],
        "videoId": "K4OfNFis--g",
        "excerpt": "Let's go over localvoice and what-not.",
        "content": "# Librem 5 | New Apps\n\nLet's go over localvoice and other new apps for the Librem 5.\n\nThis video showcases applications being developed for Purism's Linux phone, including the localvoice project for local voice recognition.\n\n## LocalVoice\n\nLocalVoice is a voice-to-text application designed for the Librem 5 that processes speech recognition locally on the device, ensuring privacy by not sending audio data to external servers.\n\n**Source Code**: https://bitbucket.org/hackersgame/localvoice/src/master/\n\n### Features\n\n- **Local processing**: All voice recognition happens on-device\n- **Privacy-focused**: No data sent to cloud services\n- **GTK interface**: Native integration with Phosh shell\n- **Offline capable**: Works without internet connection\n\n## App Development on Librem 5\n\nThe Librem 5 runs a full Linux desktop environment adapted for mobile use. This means:\n\n- Standard GTK/GNOME applications can be adapted for mobile\n- Python, C, Rust, and other languages are fully supported\n- libhandy provides adaptive widgets for responsive designs\n- No proprietary SDKs or app store gatekeeping\n\n## Anbox Integration\n\nWork continues on Anbox support, which would allow running Android applications in a container on the Librem 5. This could expand the available app ecosystem significantly while maintaining the phone's privacy and security model.\n\n## The App Ecosystem\n\nThe Librem 5 benefits from the entire Linux application ecosystem. While many desktop apps need UI adaptation for mobile use, the underlying functionality is already present. Developers are actively working on:\n\n- Mobile-optimized versions of popular Linux apps\n- New apps designed specifically for the phone\n- Ports of open-source mobile apps from other platforms\n\n[Watch on YouTube](https://youtube.com/watch?v=K4OfNFis--g)"
    },
    {
        "id": "librem-5-temperatures-and-runtime",
        "title": "Librem 5 | Temperatures and Runtime",
        "date": "2020-01-22",
        "category": "Linux Phones",
        "tags": [
            "librem5",
            "linux",
            "phone",
            "heat",
            "uptime",
            "battery",
            "thermal",
            "performance"
        ],
        "videoId": "dTr6plNybok",
        "excerpt": "A quick look at the Librem5's runtime and temperatures.",
        "content": "# Librem 5 | Temperatures and Runtime\n\nA quick look at the Librem5's runtime and temperatures.\n\nThis video examines the thermal performance and battery life of the Librem 5 Linux phone, giving you an idea of what to expect in terms of heat management and how long the device can run on a single charge.\n\n## Temperature Analysis\n\nThe Librem 5's thermal characteristics are important to understand:\n\n### Heat Sources\n- **i.MX 8M Quad processor**: Main source of heat during intensive tasks\n- **Cellular modem**: Generates heat during calls and data transfer\n- **WiFi/Bluetooth module**: Contributes to overall thermal load\n- **Display**: Adds to heat generation when at high brightness\n\n### Thermal Management\n- Passive cooling through the phone's body\n- Software-based throttling when temperatures get high\n- Hardware kill switches can disable heat-generating components\n\n## Runtime and Battery Life\n\nBattery performance metrics covered in the video:\n\n### Factors Affecting Runtime\n- Screen brightness settings\n- Active radio connections (cellular, WiFi, Bluetooth)\n- Application usage patterns\n- Background processes\n\n### Typical Usage Scenarios\n- Standby time with radios active\n- Active use with web browsing\n- Media playback duration\n- Talk time on cellular calls\n\n## Monitoring Tools\n\nLinux provides excellent tools for monitoring system health:\n\n```bash\n# Check CPU temperature\ncat /sys/class/thermal/thermal_zone*/temp\n\n# Monitor battery status\nupower -i /org/freedesktop/UPower/devices/battery_*\n\n# Check system uptime\nuptime\n```\n\n## Improvements Over Time\n\nEach hardware revision of the Librem 5 has brought thermal improvements:\n- **Dev kit**: Initial thermal characteristics\n- **Birch/Chestnut**: Improved thermal design\n- **Dogwood**: Better heat dissipation\n- **Evergreen**: Production thermal solution\n\n## Practical Considerations\n\nFor daily use:\n- Expect warmth during intensive tasks (normal for any phone)\n- Battery life continues to improve with software updates\n- Hardware kill switches can extend battery by disabling unused radios\n\n[Watch on YouTube](https://youtube.com/watch?v=dTr6plNybok)"
    },
    {
        "id": "librem-5-chestnut-apps",
        "title": "Librem 5 Chestnut | Apps",
        "date": "2020-01-11",
        "category": "Linux Phones",
        "tags": [
            "Librem5",
            "linux",
            "phone",
            "apps",
            "chestnut",
            "mobile",
            "phosh",
            "gtk"
        ],
        "videoId": "eOVJ7eOHY2c",
        "excerpt": "Let's go over the Librem5 chestnut hardware changes, and talk about Librem5 apps.",
        "content": "# Librem 5 Chestnut | Apps\n\nLet's go over the Librem5 chestnut hardware changes, and talk about Librem5 apps.\n\nThis video covers the updates in the Chestnut batch of Librem 5 devices and explores the application ecosystem available for the Linux phone.\n\n## Chestnut Hardware Changes\n\nThe Chestnut batch brought several hardware improvements over previous batches:\n\n- Refined thermal management\n- Improved component layout\n- Better build quality\n- Hardware bug fixes from Birch feedback\n\n## Librem 5 App Ecosystem\n\nThe video explores what applications work well on the Librem 5:\n\n### Native Apps\n- Apps built with GTK and libhandy/libadwaita for mobile-friendly interfaces\n- GNOME applications adapted for small screens\n- Purpose-built Linux phone applications\n\n### App Sources\n- PureOS software repositories\n- Flatpak applications\n- Apps from the broader Linux ecosystem\n\n## OpenRepos.net\n\nSupport independent app repositories for Linux mobile:\n- [Donate to OpenRepos.net](https://openrepos.net/donate)\n\n## Software Experience Evolution\n\nThis video shows how the Librem 5 software experience has evolved:\n\n- Improved app availability\n- Better app adaptation for mobile screens\n- Growing ecosystem of mobile-friendly Linux applications\n\nThe Chestnut batch represented continued progress toward a fully functional Linux smartphone with a viable app ecosystem.\n\n[Watch on YouTube](https://youtube.com/watch?v=eOVJ7eOHY2c)"
    },
    {
        "id": "librem-5-birch-status",
        "title": "Librem 5 Birch | Status",
        "date": "2019-12-18",
        "category": "Linux Phones",
        "tags": [
            "librem-5",
            "purism",
            "linux-phone",
            "mobile-linux",
            "birch",
            "hardware-review"
        ],
        "videoId": "RrTl2TYSg_4",
        "excerpt": "Let's see what it's like to use a Librem 5 in December 2019",
        "content": "# Librem 5 Birch | Status\n\nLet's see what it's like to use a Librem 5 in December 2019.\n\nThis video provides a status update on the Librem 5 Birch batch from Purism. The Birch batch was one of the early developer units shipped to backers, representing an important milestone in the development of this privacy-focused Linux smartphone.\n\n## Birch Batch Overview\n\nThe Librem 5 was shipped in batches named after trees:\n- **Aspen**: First developer batch\n- **Birch**: Second batch with hardware improvements\n- **Chestnut**: Third batch\n- **Dogwood**: Fourth batch\n- **Evergreen**: Mass production batch\n\n## December 2019 State\n\nThis video captures the real-world experience of using a Librem 5 Birch unit as a daily device, including:\n\n- Current software state and stability\n- Hardware functionality and any issues\n- Battery life observations\n- Call and messaging capabilities\n- App availability and usability\n- Overall user experience\n\n## Development Progress\n\nThe Birch batch represented significant progress from the initial Aspen units, with improvements to:\n- Hardware design\n- Thermal management\n- Software stability\n- Driver support\n\nThis honest assessment helps potential buyers understand what to expect from early Librem 5 hardware.\n\n[Watch on YouTube](https://youtube.com/watch?v=RrTl2TYSg_4)"
    },
    {
        "id": "librem-5-gaming",
        "title": "Librem 5 | Gaming",
        "date": "2019-12-01",
        "category": "Gaming",
        "tags": [
            "linux phone",
            "librem 5",
            "gaming",
            "open source",
            "purism",
            "birch"
        ],
        "videoId": "a1ENmWmwE8k",
        "excerpt": "Let's take a look at what runs on the Librem 5 birch batch.",
        "content": "# Librem 5 | Gaming\n\nLet's take a look at what runs on the Librem 5 Birch batch.\n\nSebastian, one of the developers at Purism, explored gaming capabilities on the Librem 5 Birch edition. This video showcases various open-source games running on the device.\n\n## Credit Where Due\n\nAll credit for this goes to Sebastian. It is truly amazing what an experienced developer can do in such a short amount of time.\n\n**Support Sebastian**: https://dosowisko.net/donate/\n\n## Warning\n\nDo note: applying some of these tweaks have side effects. It is good practice to have a valid backup, and it's not a bad idea to check out the steps to reflash the phone if something does go wrong.\n\nIf you're not feeling that adventurous, don't worry - just watching is fine!\n\n## Games That Work\n\nSeveral open-source games have been tested on the Librem 5:\n- Classic 2D games work well\n- Some 3D games run with tweaks\n- Touch controls need adaptation for games designed for keyboard/mouse input\n\n## The Birch Batch\n\nThe Birch batch was an early production run of the Librem 5, following the dev kit and Aspen batches. It featured hardware improvements but was still considered a developer-focused release as the software continued to mature.\n\n## The Takeaway\n\nGaming on a Linux phone is possible! It's not going to replace your Switch, but for casual open-source games, it's actually pretty decent. The full Linux environment means any game that can be compiled for ARM and uses compatible graphics APIs has the potential to run.\n\n[Watch on YouTube](https://youtube.com/watch?v=a1ENmWmwE8k)"
    },
    {
        "id": "librem-5-calling-and-updates",
        "title": "Librem 5 | Calling and Updates",
        "date": "2019-11-29",
        "category": "Linux Phones",
        "tags": [
            "librem 5",
            "linux phone",
            "purism",
            "mobile linux",
            "phone-calls",
            "software-updates"
        ],
        "videoId": "Mqmz0cJkYRQ",
        "excerpt": "Librem 5 calling functionality and software updates overview.",
        "content": "# Librem 5 | Calling and Updates\n\nA look at the calling functionality and recent updates on the Librem 5 Linux phone from Purism.\n\n## Calling Functionality\n\nThis video demonstrates the phone calling capabilities of the Librem 5, showing:\n\n- Making outgoing calls\n- Receiving incoming calls\n- Call quality and reliability\n- Dialer application interface\n- Contact integration\n\n## Software Updates\n\nThe video covers recent software updates that have improved the Librem 5 experience, including:\n\n- System stability improvements\n- Application updates\n- Bug fixes\n- New features\n\n## Community Engagement\n\nThis video was part of a community giveaway event.\n\n**Note**: The giveaway has ended. Congratulations to Nathan Still, who received a free Librem 5.\n\n## Resources\n\n- Wade's blog: [frostsnow.net/blog](https://www.frostsnow.net/blog/) - Additional Librem 5 coverage and insights\n\n## Importance of Basic Phone Functions\n\nFor a Linux phone to be viable as a daily driver, basic phone functions like calling must work reliably. This video shows the progress Purism has made in getting core phone functionality working on their Linux-based smartphone.\n\n[Watch on YouTube](https://youtube.com/watch?v=Mqmz0cJkYRQ)"
    },
    {
        "id": "user-empowered-smartphones",
        "title": "User Empowered Smartphones",
        "date": "2019-11-17",
        "category": "Linux Phones",
        "tags": [
            "linux-phone",
            "gnu-linux",
            "smartphones",
            "mobile",
            "open-source",
            "pinephone",
            "librem-5",
            "ubports",
            "sailfish",
            "maemo"
        ],
        "videoId": "xhCbN3OOFxA",
        "excerpt": "GNU/Linux phones!",
        "content": "# User Empowered Smartphones\n\nGNU/Linux phones!\n\nA look at user-empowered smartphones running GNU/Linux, giving users full control over their mobile devices.\n\n## The Linux Phone Landscape\n\nThis video provides an overview of the GNU/Linux smartphone ecosystem, covering the various projects working to bring true Linux to mobile devices.\n\n### Devices Covered\n\n- **PinePhone** - Pine64's affordable Linux phone, designed for the community\n- **Librem 5** - Purism's privacy-focused smartphone with hardware kill switches\n\n### Operating Systems and Projects\n\n- **UBports** - Continuing Ubuntu Touch development\n- **Sailfish OS** - Jolla's Linux-based mobile OS\n- **Maemo/Leste** - Continuation of Nokia's Maemo platform\n- **LuneOS** - Open webOS successor\n- **Plasma Mobile** - KDE's mobile interface\n\n## Why Linux Phones Matter\n\nUser-empowered smartphones are about:\n\n- **Digital freedom** - You own your device and control what runs on it\n- **Privacy** - No mandatory data collection or tracking\n- **Copyleft** - GPL-licensed software you can study, modify, and share\n- **Longevity** - Community support beyond manufacturer end-of-life\n\n## Resources\n\nThe video references several YouTube channels covering Linux phone development and news, making it a great starting point for anyone interested in following the mobile Linux community.\n\n### Project: Triggers\n\nThe video also mentions a project called Triggers:\n[Triggers on Bitbucket](https://bitbucket.org/hackersgame/triggers/src)\n\n## The Future of Mobile\n\nLinux phones represent an alternative vision for mobile computing - one where users are in control, software is free and open, and privacy is a default rather than an afterthought.\n\n[Watch on YouTube](https://youtube.com/watch?v=xhCbN3OOFxA)"
    },
    {
        "id": "robot-librem-hacking",
        "title": "Robot and Librem 5 Hacking",
        "date": "2019-11-15",
        "category": "Linux Phones",
        "tags": [
            "linux-phone",
            "librem-5",
            "hacking",
            "robotics",
            "keyboard",
            "purism",
            "raspberry-pi",
            "python",
            "gpio"
        ],
        "videoId": "j_PzGz8dePY",
        "excerpt": "Screen-capture, keyboard input, and a hacky way to install stuff. Plus, hear about the robot I'm working on!",
        "content": "# Robot and Librem 5 Hacking\n\nScreen-capture, keyboard input, and a hacky way to install stuff. Stick around to the end to hear about the robot I'm working on!\n\n## Keyboard Input Options\n\n### On-Screen Keyboard\n\nOut of the box, the Librem 5 has an on-screen keyboard that looks and feels good. You do have the option to switch out the default for some alternatives.\n\nAt the moment, the default keyboard alternative is the only one I know about. The default is a bit better-looking though.\n\n### Bluetooth Keyboard\n\nBluetooth is also a good option to connect a keyboard. Using this mini keyboard/mouse thing, I'm able to enter text in X11 windows as well as native Wayland windows.\n\n## Screen Capture\n\nThe video covers methods for capturing the screen on the Librem 5, which is useful for creating tutorials, debugging, and sharing what you're working on.\n\n## Installing Apps\n\nA \"hacky\" method for installing applications is demonstrated, along with information about Community Apps available for the Librem 5.\n\n**Wiki Resource:** [Librem 5 List of Apps in Development](https://forums.puri.sm/t/librem-5-list-of-apps-in-development/7111)\n\n## The Robot Project\n\nThe video also covers a robotics project that integrates with the Librem 5. The phone's GPIO and USB capabilities make it an interesting platform for hardware hacking.\n\n**Project Resources:**\n- **X86 Code:** [CatToy on Bitbucket](https://bitbucket.org/hackersgame/cattoy/)\n- **Raspberry Pi Code:** [Laser Control Module](https://bitbucket.org/hackersgame/laser-control-module/)\n\nThe robot project uses Python and integrates with the Raspberry Pi for hardware control, demonstrating how GNU/Linux phones can be used as controllers or interfaces for robotics projects.\n\n[Watch on YouTube](https://youtube.com/watch?v=j_PzGz8dePY)"
    },
    {
        "id": "librem-5-server-apps",
        "title": "Librem 5 | Server apps",
        "date": "2019-10-28",
        "category": "Linux Phones",
        "tags": [
            "librem5",
            "purism",
            "linux phone",
            "server",
            "self-hosting",
            "netflix",
            "dev kit",
            "streaming"
        ],
        "videoId": "AnbqjNvpupI",
        "excerpt": "Running server applications on the Librem 5.",
        "content": "# Librem 5 | Server apps\n\nRunning server applications on the Librem 5.\n\nIn this video, we explore the unique capability of the Librem 5 to run server applications. Unlike traditional smartphones, the Librem 5's true Linux operating system allows you to host and run server software directly on your phone, demonstrating the versatility of this open-source mobile device.\n\n## Why Server Apps on a Phone?\n\nThe Librem 5 runs a standard Linux distribution, which means:\n\n- Any server software packaged for Debian/PureOS can be installed\n- Standard networking tools (iptables, SSH, etc.) are available\n- The phone can function as a portable server or development environment\n\n## Potential Use Cases\n\n### Media Streaming\n- Host a personal media server\n- Stream content to other devices on your network\n- Netflix and other streaming services through web interfaces\n\n### Development\n- Run a local development server\n- Test web applications on-the-go\n- SSH server for remote access to your phone\n\n### Self-Hosting\n- Personal file sync server\n- Chat server (Matrix, XMPP)\n- VPN endpoint\n\n### Network Tools\n- Portable network diagnostics\n- WiFi analysis tools\n- Network monitoring\n\n## Server Software Options\n\nExamples of server software that can run on the Librem 5:\n- **nginx/Apache**: Web servers\n- **MariaDB/PostgreSQL**: Databases\n- **Node.js**: JavaScript runtime for web apps\n- **Python Flask/Django**: Web frameworks\n- **SSH server**: Remote access\n\n## Hardware Considerations\n\nWhile the Librem 5 can run server applications, keep in mind:\n- Battery life will be impacted by continuous server operation\n- Processing power is limited compared to dedicated servers\n- Best for personal/small-scale use cases\n\n## The Power of Real Linux\n\nThis capability demonstrates the fundamental difference between the Librem 5 and traditional smartphones. With a real Linux system, your phone becomes a general-purpose computer in your pocket.\n\n[Watch on YouTube](https://youtube.com/watch?v=AnbqjNvpupI)"
    },
    {
        "id": "librem-5-in-less-than-a-year",
        "title": "Librem 5 | In Less Than a Year",
        "date": "2019-10-21",
        "category": "Linux Phones",
        "tags": [
            "librem 5",
            "linux phone",
            "purism",
            "privacy",
            "open source",
            "dev kit",
            "anbox",
            "progress"
        ],
        "videoId": "p_OE8EaIKl8",
        "excerpt": "You should know what Purism is up to.",
        "content": "# Librem 5 | In Less Than a Year\n\nYou should know what Purism is up to.\n\nThis video covers the progress Purism has made on the Librem 5 Linux phone. In less than a year, significant developments have been achieved in bringing a truly open-source, privacy-focused smartphone to market.\n\n## Development Progress\n\nThe Librem 5 represents a different approach to mobile computing - one that prioritizes user freedom, privacy, and security over the typical smartphone paradigm. The dev kit has seen rapid software improvements, with regular updates bringing new features and better stability.\n\n## Key Developments\n\n- **Hardware Kill Switches**: Physical switches for WiFi/Bluetooth, cellular modem, and camera/microphone\n- **PureOS**: A fully free/libre operating system based on Debian\n- **Phosh Shell**: A mobile-optimized GNOME-based shell\n- **Anbox Integration**: Work on Android app compatibility through Anbox containerization\n\n## The Vision\n\nPurism's goal is to create a phone that respects user privacy and freedom. Unlike Android and iOS, the Librem 5 runs a standard Linux distribution, giving users full control over their device.\n\n## What This Means for Users\n\n- Full root access to your phone\n- No vendor lock-in\n- Ability to install any Linux software\n- Hardware-level privacy controls\n- Long-term software support without planned obsolescence\n\n[Watch on YouTube](https://youtube.com/watch?v=p_OE8EaIKl8)"
    },
    {
        "id": "librem-5-android-apps",
        "title": "Librem 5 | Android apps?",
        "date": "2019-10-06",
        "category": "Linux Phones",
        "tags": [
            "librem 5",
            "linux phone",
            "android apps",
            "purism",
            "compatibility",
            "anbox",
            "mobile-linux"
        ],
        "videoId": "gqQjQ7WRWRU",
        "excerpt": "Will the Librem 5 be able to run android applications?",
        "content": "# Librem 5 | Android apps?\n\nWill the Librem 5 be able to run android applications?\n\nThis video explores the possibility of running Android applications on the Librem 5 Linux phone and what that might mean for app compatibility and the overall user experience.\n\n## The App Gap Challenge\n\nOne of the biggest challenges facing Linux phones is the lack of native applications compared to Android and iOS. This video discusses potential solutions for running Android apps on the Librem 5.\n\n## Possible Solutions\n\n### Anbox\nAndroid in a Box (Anbox) is a compatibility layer that allows running Android applications on Linux systems. It uses container technology to run a full Android system.\n\n### Waydroid\nAnother solution that came after this video is Waydroid, which provides better performance and compatibility for running Android apps on Linux phones.\n\n## Considerations\n\n- **Performance**: Running Android apps through a compatibility layer adds overhead\n- **Privacy**: Purism's focus on privacy may conflict with some Android app behaviors\n- **Native Apps**: The long-term goal is to have native Linux apps, but compatibility layers help bridge the gap\n\n## The Importance of App Support\n\nFor a Linux phone to be viable as a daily driver, users need access to essential applications. Android app compatibility could help the Librem 5 reach a wider audience while the native Linux mobile app ecosystem grows.\n\n[Watch on YouTube](https://youtube.com/watch?v=gqQjQ7WRWRU)"
    },
    {
        "id": "librem-5-stuff-whatnot",
        "title": "Librem 5 | Stuff and Whatnot",
        "date": "2019-10-01",
        "category": "Linux Phones",
        "tags": [
            "linux phone",
            "librem 5",
            "purism",
            "apps",
            "development",
            "dev kit",
            "launcher"
        ],
        "videoId": "GTDzV4rxPwc",
        "excerpt": "Check out the latest software running on the Librem 5 dev kit.",
        "content": "# Librem 5 | Stuff and Whatnot\n\nCheck out the latest software running on the Librem 5 dev kit.\n\nThis is what the early version of the launcher/app drawer looked like. It only loaded the primary apps and left all other .desktop files on display.\n\n## The New Launcher\n\nWhat this meant was if you installed something new, the desktop launcher would be missing. After flashing the new DFK image, this is all changed now.\n\nThe launcher displays all installed desktop files, so for the first time we can see what is pre-installed on the dev kit. And I must say, some of this stuff was not expected!\n\n## Pre-installed Apps\n\nThe first thing I thought a little odd was there were a few redundant applications. We now have two terminal apps - King's Cross and another one.\n\n### Notable Pre-installed Software\n\n- **Terminal Emulators**: Multiple options for command-line access\n- **File Manager**: GNOME Files for file management\n- **Text Editors**: Various options for editing\n- **Settings**: System configuration\n- **Web Browser**: GNOME Web (Epiphany)\n- **Development Tools**: Pre-installed for developers\n\n## The App Drawer Evolution\n\nThe app drawer has evolved significantly:\n\n1. **Early version**: Only showed primary apps\n2. **Mid development**: Showed .desktop files but with issues\n3. **Current version**: Full app listing with proper icons\n\n## Progress Report\n\nEvery flash brings new improvements. The dev kit is really starting to feel like a proper phone platform. Key improvements include:\n\n- Better app discovery\n- Improved launcher performance\n- More polished icons and UI elements\n- Reduced boot time\n\n## What This Means for Users\n\nThe maturing app launcher means:\n- Easier app discovery\n- Better organization\n- Consistent user experience\n- Foundation for future app store integration\n\n[Watch on YouTube](https://youtube.com/watch?v=GTDzV4rxPwc)"
    },
    {
        "id": "librem-5-launch-ready",
        "title": "Is the Librem 5 Ready for Launch?",
        "date": "2019-09-24",
        "category": "Linux Phones",
        "tags": [
            "linux phone",
            "librem 5",
            "purism",
            "review",
            "development",
            "dev kit",
            "launch",
            "software"
        ],
        "videoId": "0tuLkga0dmY",
        "excerpt": "Let's take a look at the progress over the last few weeks.",
        "content": "# Is the Librem 5 Ready for Launch?\n\nLet's take a look at the progress over the last few weeks.\n\nProgress on the dev kit has been absolutely crazy at the moment. September 15th was the last time I had to flash the dev kit - just nine days before the initial launch of the Librem 5.\n\n## After Flashing\n\nAfter flashing, it was clear that this version was not ready for the public. For example, on the lockscreen when you enter your PIN code, the key presses remain highlighted - a bit of a security fail.\n\nWe can also see the unfinished app lineup including GNOME Tweaks, Vim, and non-final icons.\n\n## Software State\n\nThe software stack at this point included:\n\n- **Phosh shell**: Functional but with visual bugs\n- **Core applications**: Present but not polished\n- **Settings app**: Basic functionality working\n- **Web browser**: Functional with performance limitations\n\n## Browser Performance\n\nIf you recall in my last video, the web browser performance is basically unusable in certain situations. Heavy JavaScript sites bring the device to its knees. This is partly due to:\n\n- Limited hardware acceleration\n- Software still being optimized\n- Browser engine not yet tuned for the hardware\n\n## Pre-installed Applications\n\nThe dev kit came with several pre-installed applications:\n- GNOME core apps (Files, Settings, etc.)\n- Vim text editor\n- GNOME Tweaks\n- Various development tools\n\n## The Verdict\n\nIs it ready? Not quite for daily driver use, but the progress is undeniable. The foundation is solid, and things are improving rapidly. The initial batches (Aspen, Birch) were clearly targeted at early adopters and developers willing to help improve the software.\n\n[Watch on YouTube](https://youtube.com/watch?v=0tuLkga0dmY)"
    },
    {
        "id": "librem5-vs-sailfish-os",
        "title": "Librem5 VS Sailfish OS",
        "date": "2019-08-09",
        "category": "Linux Phones",
        "tags": [
            "librem5",
            "sailfish os",
            "linux phone",
            "purism",
            "jolla",
            "mobile linux",
            "hybris",
            "comparison"
        ],
        "videoId": "LmlnwzqscfM",
        "excerpt": "A comparison between the Librem5 and Sailfish OS.",
        "content": "# Librem5 VS Sailfish OS\n\nA comparison between the Librem5 and Sailfish OS, exploring the differences between these two mobile Linux approaches.\n\n## Platform Philosophy\n\n### Librem 5 / PureOS\n- **Fully open source**: All software components are free/libre\n- **GNOME-based**: Uses Phosh shell and GTK applications\n- **Mainline Linux kernel**: No Android dependencies\n- **Hardware designed for Linux**: Purpose-built device\n\n### Sailfish OS\n- **Partially open source**: UI layer is proprietary\n- **Qt-based**: Uses Silica UI and Qt/QML applications\n- **Android app compatibility**: Uses libhybris for Android driver support\n- **Runs on Android hardware**: Ported to existing phones\n\n## Technical Approach\n\n### Librem 5\n- Uses upstream Linux drivers\n- No Android compatibility layer required\n- Full GNU/Linux userspace\n- Direct hardware access\n\n### Sailfish OS\n- Uses libhybris to bridge Android drivers\n- Includes Android compatibility layer\n- Mer core Linux distribution\n- Works with Android device drivers\n\n## Application Ecosystem\n\n### Librem 5\n- Standard Linux desktop applications (adapted for mobile)\n- GTK/GNOME applications with libhandy\n- Potential for Flatpak support\n- Any Debian-packaged software\n\n### Sailfish OS\n- Native Sailfish applications (Qt/QML)\n- Android application support\n- Jolla store for native apps\n- Community ports and apps\n\n## Privacy and Freedom\n\n### Librem 5\n- Hardware kill switches for radios and cameras\n- No proprietary blobs in main system\n- Completely auditable software stack\n- Strong focus on user privacy\n\n### Sailfish OS\n- Open source core, proprietary UI\n- Runs on hardware with binary blobs\n- Android compatibility requires proprietary components\n- Privacy through obscurity (not on Google/Apple platform)\n\n## Community and Development\n\nBoth platforms have active communities contributing to their development, but with different focuses:\n- Librem 5: Hardware and full-stack open source development\n- Sailfish OS: App development and device porting\n\n[Watch on YouTube](https://youtube.com/watch?v=LmlnwzqscfM)"
    },
    {
        "id": "librem-5-software-improvements",
        "title": "Librem 5 | Software Improvements",
        "date": "2019-07-26",
        "category": "Linux Phones",
        "tags": [
            "librem 5",
            "purism",
            "linux phone",
            "gtk",
            "mobile linux",
            "keyboard",
            "settings",
            "development",
            "usb-c"
        ],
        "videoId": "sBTqAG9jX2w",
        "excerpt": "GTK, Settings, Keyboard. Stuff is looking better!",
        "content": "# Librem 5 | Software Improvements\n\nGTK, Settings, Keyboard. Stuff is looking better!\n\nThis video covers the latest software improvements on the Librem 5 Linux phone, showcasing updates to the GTK interface, settings application, and keyboard functionality.\n\n## GTK Improvements\n\nThe GTK toolkit has received significant optimizations for mobile use:\n\n- **Touch responsiveness**: Improved touch event handling\n- **Widget sizing**: Better scaling for mobile screen sizes\n- **Animation performance**: Smoother transitions and effects\n- **Memory usage**: Reduced memory footprint for mobile constraints\n\n## Settings Application\n\nThe Settings app has been enhanced with:\n\n- Mobile-optimized layout\n- New configuration options\n- Better organization of settings panels\n- Improved accessibility\n\n## Keyboard Improvements\n\nThe virtual keyboard has seen major updates:\n\n- **Layout optimization**: Keys sized appropriately for touch typing\n- **Haptic feedback**: Better tactile response\n- **Prediction**: Word prediction and autocomplete\n- **Language support**: Multiple keyboard layouts\n\n## Development Progress\n\nEach software update brings the Librem 5 closer to daily driver status. The development kit continues to receive regular updates, with improvements in:\n\n- Boot time optimization\n- Application responsiveness\n- System stability\n- Power management\n\n## USB-C Functionality\n\nUpdates to USB-C support enable:\n\n- Convergence mode (connect to external display)\n- File transfer\n- Charging while using peripherals\n- USB accessories\n\n## The Path Forward\n\nSoftware improvements demonstrate Purism's commitment to making the Librem 5 a viable smartphone platform. The open development model allows the community to follow progress and contribute improvements.\n\n[Watch on YouTube](https://youtube.com/watch?v=sBTqAG9jX2w)"
    },
    {
        "id": "librem-5-news-and-opensuse",
        "title": "Librem 5 | News and OpenSuSE",
        "date": "2019-07-06",
        "category": "Linux Phones",
        "tags": [
            "librem 5",
            "linux phone",
            "opensuse",
            "purism",
            "dev kit",
            "port",
            "games"
        ],
        "videoId": "GBoXQNYujlM",
        "excerpt": "Let's chat about the Librem 5.",
        "content": "# Librem 5 | News and OpenSuSE\n\nLet's chat about the Librem 5 and the latest news surrounding this Linux phone.\n\n## OpenSuSE Port\n\nOne of the exciting developments is the community effort to port OpenSuSE to the Librem 5. Since the Librem 5 is built on open standards and uses mainline Linux kernel support, alternative distributions can be adapted for the device.\n\n### What This Means\n\n- **Distribution choice**: Users aren't locked into PureOS\n- **Package ecosystem**: Access to OpenSuSE's extensive repositories\n- **YaST integration**: OpenSuSE's configuration tools adapted for mobile\n- **Community support**: Broader developer community involvement\n\n## The Power of Open Hardware\n\nThe Librem 5's open hardware design enables these kinds of ports. Unlike Android phones that require significant reverse engineering, the Librem 5's specifications and drivers are available for anyone to use.\n\n## Gaming and Applications\n\nThe video also covers games and applications being tested on the dev kit. The ability to run standard Linux applications opens up a vast ecosystem of software.\n\n## Latest News\n\nUpdates on:\n- Hardware development progress\n- Software improvements\n- Community contributions\n- Upcoming batch releases\n\n## Why Alternative Distros Matter\n\nHaving multiple Linux distributions available for the Librem 5 ensures:\n- Long-term software support even if Purism changes direction\n- Different user experiences and philosophies\n- Broader testing and bug discovery\n- Innovation through competition\n\n[Watch on YouTube](https://youtube.com/watch?v=GBoXQNYujlM)"
    },
    {
        "id": "librem5-emulation-audiobook-player",
        "title": "Librem5 | Emulation + Audiobook player",
        "date": "2019-07-01",
        "category": "Linux Phones",
        "tags": [
            "librem 5",
            "emulation",
            "audiobook",
            "gtk",
            "phonic",
            "linux phone",
            "purism",
            "games"
        ],
        "videoId": "4iI0tvIB8Mg",
        "excerpt": "Testing out some emulators and building an audiobook player.",
        "content": "# Librem5 | Emulation + Audiobook player\n\nTesting out some emulators and building an audiobook player.\n\nThis video covers two exciting projects on the Librem 5: running emulators for retro gaming and developing Phonic, a custom audiobook player application built with GTK.\n\n## Emulation on the Librem 5\n\nThe Librem 5 dev kit demonstrates impressive emulation capabilities. Since it runs a full Linux desktop environment, existing emulators can be compiled and run on the device with minimal modifications.\n\n## Phonic - Audiobook Player\n\nPhonic is a GTK-based audiobook player designed for the Librem 5's mobile interface. The application is designed to work well with touch controls and the phone's form factor.\n\n**Source Code**: https://bitbucket.org/hackersgame/phonic/src/master/\n\n## GTK Development\n\nBuilding mobile applications for the Librem 5 uses standard GTK development practices. The phone's Phosh shell and libhandy library provide adaptive widgets that work well on both mobile and desktop form factors.\n\n## Related Content\n\n- TheLinuxGamer channel: https://www.youtube.com/user/tuxreviews\n- GTK tutorial: https://youtu.be/0O11oEp7QYw\n\n[Watch on YouTube](https://youtube.com/watch?v=4iI0tvIB8Mg)"
    },
    {
        "id": "librem5-plasma-mobile",
        "title": "Librem5 | Plasma Mobile",
        "date": "2019-06-12",
        "category": "Desktop Linux",
        "tags": [
            "librem 5",
            "linux phone",
            "plasma mobile",
            "kde",
            "gaming",
            "purism",
            "phosh",
            "teeworlds",
            "supertuxkart",
            "minetest"
        ],
        "videoId": "q_rU1WbJq-M",
        "excerpt": "Testing the new version of Plasma Mobile and a few games.",
        "content": "# Librem5 | Plasma Mobile\n\nTesting the new version of Plasma Mobile and a few games.\n\nIn this video, we explore running Plasma Mobile on the Librem 5 Linux phone. Plasma Mobile is KDE's mobile-optimized interface, offering a full Linux desktop experience adapted for touchscreens and smaller displays.\n\n## Plasma Mobile vs Phosh\n\nThe Librem 5 ships with Phosh (GNOME-based) by default, but Plasma Mobile provides an alternative desktop environment. Key differences:\n\n### Plasma Mobile\n- Based on KDE Plasma desktop\n- Qt/QML application framework\n- KDE application ecosystem\n- Different visual style and interaction patterns\n\n### Phosh\n- Based on GNOME technologies\n- GTK application framework\n- GNOME application ecosystem\n- Default on Librem 5\n\n## Gaming Tests\n\nThe video includes testing several open-source games on Plasma Mobile:\n\n### Teeworlds\n- 2D multiplayer shooter\n- Runs well on the Librem 5 hardware\n- Touch controls require adaptation\n\n### SuperTuxKart\n- 3D kart racing game\n- More demanding on the hardware\n- Playable with some performance tweaks\n\n### Minetest\n- Open-source voxel game (Minecraft-like)\n- Touch controls for building and exploration\n- Performance varies based on world complexity\n\n## The Linux Gamer Coverage\n\nFor more gaming coverage on Linux phones, check out The Linux Gamer's Quake II video: https://youtu.be/fb95fPjVI3g\n\n## Why Desktop Environment Choice Matters\n\nHaving multiple desktop environment options means:\n- User preference respected\n- Different application ecosystems available\n- Varied approaches to mobile UX\n- True platform freedom\n\n[Watch on YouTube](https://youtube.com/watch?v=q_rU1WbJq-M)"
    },
    {
        "id": "gnome-running-on-librem-5-dev-kit",
        "title": "Gnome running on the Librem 5 Dev Kit",
        "date": "2019-05-15",
        "category": "Linux Phones",
        "tags": [
            "librem 5",
            "gnome",
            "linux phone",
            "purism",
            "dev kit",
            "desktop environment",
            "mobile linux"
        ],
        "videoId": "33xCYejSGFA",
        "excerpt": "Testing different desktop environments on the dev kit.",
        "content": "# Gnome running on the Librem 5 Dev Kit\n\nTesting different desktop environments on the dev kit.\n\nThis video demonstrates running the GNOME desktop environment on the Librem 5 development kit, showcasing the progress of bringing full desktop Linux experiences to mobile devices.\n\n## What This Demonstrates\n\nThe Librem 5 dev kit allows testing various desktop environments to evaluate which ones work best for a mobile Linux phone form factor. Running GNOME on the dev kit shows:\n\n- How traditional desktop environments can be adapted for mobile use\n- The state of GNOME's touch-friendly features on the Librem 5 hardware\n- Early development progress toward a fully functional Linux smartphone\n\nThe Librem 5 dev kit was instrumental in testing and developing the software stack that would eventually run on the production Librem 5 phones.\n\n[Watch on YouTube](https://youtube.com/watch?v=33xCYejSGFA)"
    },
    {
        "id": "linux-install-guide",
        "title": "Linux Install Guide",
        "date": "2019-05-07",
        "category": "Linux",
        "tags": [
            "linux",
            "installation",
            "tutorial",
            "beginner",
            "guide",
            "uefi",
            "bios",
            "gpt",
            "mbr",
            "ext4",
            "btrfs",
            "xfs"
        ],
        "videoId": "9l6UbcxFONE",
        "excerpt": "Learn to install any version of Linux.",
        "content": "# Linux Install Guide\n\nLearn to install any version of Linux.\n\nThis comprehensive guide walks you through the process of installing Linux on your computer. Whether you're a complete beginner or looking to try a new distribution, this tutorial covers the essential steps to get Linux up and running on your system.\n\n## Before You Begin\n\n### Choosing a Distribution\n\nPopular choices for beginners:\n- **Ubuntu**: Excellent hardware support, large community\n- **Linux Mint**: Familiar interface for Windows users\n- **Fedora**: Up-to-date software, good for developers\n- **OpenSUSE**: Enterprise-quality with user-friendly tools\n- **Manjaro**: Access to Arch packages with easier setup\n\n### System Requirements\n\nMost modern Linux distributions require:\n- 2GB RAM minimum (4GB recommended)\n- 20GB disk space minimum\n- 64-bit processor\n- USB port for installation media\n\n## Step 1: Download the ISO\n\n1. Visit the distribution's official website\n2. Download the ISO file (usually 2-4GB)\n3. Verify the checksum (optional but recommended)\n\n## Step 2: Create Installation Media\n\n### Using a USB Drive\n\nYou'll need a tool to write the ISO to USB:\n- **Janit**: https://bitbucket.org/hackersgame/janit/src/master/\n- **Rufus** (Windows)\n- **Etcher** (cross-platform)\n- **dd** (Linux command line)\n\n## Step 3: Boot From USB\n\n### BIOS vs UEFI\n\n**BIOS Systems:**\n- Press F2, F12, Del, or Esc during startup\n- Select USB drive from boot menu\n- MBR partition table required\n\n**UEFI Systems:**\n- Access UEFI settings (usually F2 or Del)\n- Disable Secure Boot if necessary\n- Select USB from boot options\n- GPT partition table supported\n\n## Step 4: Partition Your Drive\n\n### Partition Schemes\n\n**MBR (Master Boot Record):**\n- Legacy BIOS systems\n- Maximum 4 primary partitions\n- 2TB drive limit\n\n**GPT (GUID Partition Table):**\n- UEFI systems\n- Unlimited partitions\n- Supports large drives\n\n### Filesystem Options\n\n- **ext4**: Default for most distributions, reliable\n- **btrfs**: Advanced features (snapshots, compression)\n- **xfs**: Good for large files, high performance\n\n### Recommended Partitions\n\n1. **EFI System Partition** (UEFI only): 512MB, FAT32\n2. **Root (/)**: 20-50GB, ext4\n3. **Home (/home)**: Remaining space, ext4\n4. **Swap**: Equal to RAM or 2-8GB\n\n## Step 5: Installation\n\nMost installers guide you through:\n1. Language and keyboard selection\n2. Timezone configuration\n3. User account creation\n4. Package selection (if applicable)\n5. Bootloader installation\n\n## Step 6: Post-Installation\n\nAfter rebooting:\n1. Update your system\n2. Install additional drivers if needed\n3. Configure your desktop environment\n4. Install your preferred applications\n\n## Dual-Boot with Windows\n\nIf keeping Windows:\n1. Shrink Windows partition first (from Windows)\n2. Install Linux in the freed space\n3. GRUB will detect both operating systems\n4. Choose OS at boot time\n\n[Watch on YouTube](https://youtube.com/watch?v=9l6UbcxFONE)"
    },
    {
        "id": "librem5-development-kit",
        "title": "librem5 development kit",
        "date": "2019-03-30",
        "category": "Linux Phones",
        "tags": [
            "librem5",
            "purism",
            "linux-phone",
            "development",
            "hardware",
            "hands-on"
        ],
        "videoId": "9_z0XuElERM",
        "excerpt": "Playing with the Librem5 development kit.",
        "content": "# librem5 development kit\n\nPlaying with the Librem5 development kit.\n\nIn this video, we take a hands-on look at the Librem 5 development kit from Purism. This early hardware gives us a glimpse into what the future of Linux smartphones could look like, exploring the capabilities and potential of this privacy-focused mobile device.\n\n## Acknowledgments\n\nBig thanks to Wade and Daniel for giving me access to the Dev kit!\n\nNote: Apologies for the fuzzy recording quality.\n\n## Hands-On Exploration\n\nThe video demonstrates:\n\n- General hardware exploration\n- Software capabilities at this stage of development\n- User interface and interaction\n- Current state of mobile Linux on the platform\n\n## Development Progress\n\nThis video captures the dev kit at a specific point in the Librem 5's development journey:\n\n- Software features available at the time\n- Hardware functionality testing\n- Real-world usability assessment\n\n## The Bigger Picture\n\nThe Librem 5 development kit represented:\n\n- A concrete step toward a privacy-focused smartphone\n- Proof that mobile Linux was becoming viable\n- An opportunity for community involvement in development\n- Hope for those seeking alternatives to Android and iOS\n\nThe dev kit allowed enthusiasts and developers to experience the future of Linux phones before the production hardware was ready.\n\n[Watch on YouTube](https://youtube.com/watch?v=9_z0XuElERM)"
    },
    {
        "id": "librem-5-development-kit-onboard-screen",
        "title": "Librem 5 Development Kit [Onboard Screen]",
        "date": "2019-03-13",
        "category": "Linux Phones",
        "tags": [
            "librem 5",
            "linux phone",
            "purism",
            "development kit",
            "hardware",
            "display",
            "touch-screen"
        ],
        "videoId": "zxcj9fG2M2Q",
        "excerpt": "The screen story.",
        "content": "# Librem 5 Development Kit [Onboard Screen]\n\nThe screen story.\n\nThis video documents the experience of working with the onboard screen on the Librem 5 development kit, including challenges encountered and solutions found.\n\n## Corrections\n\nImportant corrections to information in the video:\n\n- **0:20**: It was a hardware issue, but with a software workaround available\n- **2:08**: The ribbon cable mentioned was for the touch controller, not the display. The display's FPC (Flexible Printed Circuit) is also unplugged in that shot.\n\n## Display Challenges\n\nWorking with development hardware often involves troubleshooting display issues:\n\n- Ribbon cable connections for the display panel\n- Touch controller cable connections (separate from display)\n- FPC (Flexible Printed Circuit) handling\n- Hardware vs software issues\n\n## Development Kit Display Setup\n\nThe dev kit display system consists of:\n\n- Main display panel with its own FPC connection\n- Separate touch controller with its own ribbon cable\n- Driver software for both components\n\n## Lessons Learned\n\nThis video highlights the complexities of developing mobile hardware:\n\n- Multiple cable connections that must be properly seated\n- Distinction between display output and touch input systems\n- The iterative nature of hardware debugging\n- How software workarounds can sometimes address hardware issues\n\nUnderstanding these hardware details helps developers and enthusiasts work more effectively with development hardware.\n\n[Watch on YouTube](https://youtube.com/watch?v=zxcj9fG2M2Q)"
    },
    {
        "id": "mobile-gnu-linux-history",
        "title": "Mobile GNU+Linux History",
        "date": "2019-02-19",
        "category": "Linux Phones",
        "tags": [
            "linux-phone",
            "mobile-linux",
            "history",
            "maemo",
            "pinephone",
            "librem-5",
            "nokia",
            "openmoko"
        ],
        "videoId": "2XYBmAVvas0",
        "excerpt": "A look back at where we came from.",
        "content": "# Mobile GNU+Linux History\n\nA look back at where we came from.\n\n## The Journey of Mobile Linux\n\nThis video explores the history of mobile GNU+Linux devices and how they evolved over time, setting the stage for modern Linux phones like the Librem 5 and PinePhone.\n\n## Historical Milestones\n\n### Early Days\n- **OpenMoko** - One of the first attempts at an open-source smartphone\n- **Nokia Internet Tablets** - N770, N800, N810 running Maemo\n- **Nokia N900** - The legendary Maemo smartphone\n\n### Maemo and MeeGo Era\n- Maemo operating system development\n- The merger into MeeGo\n- Nokia N9 with MeeGo Harmattan\n- The end of Nokia's Linux phone efforts\n\n### The Gap Years\n- Android's rise to dominance\n- Ubuntu Touch attempts\n- Firefox OS brief appearance\n- Community projects keeping the dream alive\n\n### The Renaissance (2019+)\n- **Purism Librem 5** - Privacy-focused Linux phone\n- **Pine64 PinePhone** - Affordable community Linux phone\n- Multiple operating systems available\n- Growing ecosystem of mobile Linux software\n\n## Why This History Matters\n\nUnderstanding where mobile Linux came from helps appreciate:\n- The technical challenges solved over the years\n- Why certain design decisions were made\n- The dedication of the community\n- How far the ecosystem has come\n\n## The Future\n\n2019 marked a turning point with real hardware becoming available to regular users, not just developers. The legacy of Maemo, MeeGo, and other projects lives on in today's mobile Linux efforts.\n\n[Watch on YouTube](https://youtube.com/watch?v=2XYBmAVvas0)"
    },
    {
        "id": "android-and-ios-contender-librem-5",
        "title": "Android and IOS Contender | Librem 5",
        "date": "2019-02-08",
        "category": "Linux Phones",
        "tags": [
            "librem 5",
            "purism",
            "linux phone",
            "privacy",
            "mobile",
            "dev kit",
            "hardware",
            "usb-c"
        ],
        "videoId": "hSGsBdji6QI",
        "excerpt": "It's about time.",
        "content": "# Android and IOS Contender | Librem 5\n\nIt's about time.\n\nAn introduction to the Librem 5, a privacy-focused smartphone running PureOS (a GNU/Linux distribution). The Librem 5 represents a significant step toward offering users a genuine alternative to the Android and iOS duopoly, with a focus on user freedom and privacy.\n\n## First Look at the Dev Kit\n\nThis video showcases the Librem 5 development kit, including:\n\n- **Initial boot and startup** - First power-on experience\n- **USB-C hub connectivity** - Expanding the phone's capabilities\n- **USB ports and peripherals** - Using standard hardware with the phone\n- **Linux environment** - Running a full GNU/Linux system on mobile hardware\n\n## Why the Librem 5 Matters\n\nThe Librem 5 is designed with hardware features that prioritize user privacy and control:\n\n- Hardware kill switches for camera, microphone, and cellular\n- Open source software stack\n- No reliance on proprietary Google or Apple services\n- Full desktop Linux compatibility\n\nAs a contender in the smartphone market, the Librem 5 offers something fundamentally different from the mainstream options - true user ownership and control over their device.\n\n[Watch on YouTube](https://youtube.com/watch?v=hSGsBdji6QI)"
    },
    {
        "id": "librem-5-dev-kit-usb-c-hub",
        "title": "Librem 5 Dev Kit | USB-C Hub",
        "date": "2019-01-29",
        "category": "Linux Phones",
        "tags": [
            "librem 5",
            "linux phone",
            "usb-c",
            "dev kit",
            "purism",
            "peripherals",
            "docking"
        ],
        "videoId": "DjSNPqgZpdo",
        "excerpt": "Playing with the Librem 5 dev kit.",
        "content": "# Librem 5 Dev Kit | USB-C Hub\n\nPlaying with the Librem 5 dev kit and exploring USB-C hub connectivity.\n\nThis video showcases early development hardware for the Librem 5 Linux phone, specifically testing USB-C hub functionality.\n\n## USB-C Hub Testing\n\nThe video demonstrates connecting a USB-C hub to the Librem 5 development kit:\n\n- Hub detection and initialization\n- Connected peripheral recognition\n- Power delivery through the hub\n- Data transfer capabilities\n\n## Why USB-C Matters\n\nUSB-C connectivity is crucial for a modern Linux phone:\n\n- **Convergence**: Connect to external displays for desktop mode\n- **Peripherals**: Use keyboards, mice, and storage devices\n- **Charging**: Fast charging and power delivery\n- **Docking**: Full desktop experience with a single cable\n\n## Development Kit I/O\n\nThe Librem 5 dev kit allowed testing of:\n\n- USB-C alternate modes (DisplayPort, etc.)\n- USB hub functionality\n- Power delivery negotiation\n- Driver compatibility with various peripherals\n\n## Convergence Vision\n\nOne of the Librem 5's key features is convergence - the ability to use the phone as a full desktop computer when connected to a monitor, keyboard, and mouse. Testing USB-C hub functionality on the dev kit was essential for validating this vision.\n\nThis early testing helped ensure that USB-C hub support would work reliably on the production Librem 5 phones.\n\n[Watch on YouTube](https://youtube.com/watch?v=DjSNPqgZpdo)"
    },
    {
        "id": "librem-5-development-kit-booting",
        "title": "Librem 5 Development Kit [Booting]",
        "date": "2019-01-23",
        "category": "Linux Phones",
        "tags": [
            "librem 5",
            "purism",
            "linux phone",
            "development kit",
            "booting",
            "boot-process",
            "imx8"
        ],
        "videoId": "JMCWlRyVzgQ",
        "excerpt": "A look at the Librem 5 dev kit booting up",
        "content": "# Librem 5 Development Kit [Booting]\n\nA look at the Librem 5 development kit booting up.\n\nThis video shows the early stages of Purism's Linux phone development, demonstrating the boot process of the dev kit hardware that preceded the final Librem 5 device.\n\n## Boot Process Overview\n\nThe video captures the complete boot sequence of the Librem 5 development kit:\n\n- Power-on and bootloader initialization\n- Kernel loading\n- System initialization\n- Desktop environment startup\n\n## Development Kit Hardware\n\nThe Librem 5 dev kit featured:\n\n- i.MX 8M processor (same as production Librem 5)\n- Development board form factor\n- Full I/O access for testing\n- Modular design for component testing\n\n## Why This Matters\n\nThe development kit allowed developers and enthusiasts to:\n\n- Start working on mobile Linux applications before the phone's official release\n- Test and debug hardware drivers\n- Develop the Phosh mobile shell\n- Optimize the software stack for the i.MX 8M platform\n\n## Early Development Insights\n\nThis boot video shows the state of the software stack early in development:\n\n- Boot time performance\n- Initial desktop environment state\n- System stability during startup\n\nThe dev kit was instrumental in getting the Librem 5 ready for production shipments.\n\n[Watch on YouTube](https://youtube.com/watch?v=JMCWlRyVzgQ)"
    },
    {
        "id": "alternative-librem-gui-kde-plasma-mobile",
        "title": "Alternative Librem GUI | KDE Plasma Mobile",
        "date": "2019-01-16",
        "category": "Linux Phones",
        "tags": [
            "librem",
            "kde",
            "plasma mobile",
            "linux phone",
            "mobile linux",
            "gui",
            "qt",
            "purism",
            "dev kit"
        ],
        "videoId": "OatW6iNy6ts",
        "excerpt": "A quick look at Plasma Mobile.",
        "content": "# Alternative Librem GUI | KDE Plasma Mobile\n\nA quick look at Plasma Mobile as an alternative graphical interface for the Librem phone.\n\nKDE Plasma Mobile offers a different user experience compared to the default Phosh interface on the Librem 5. This video explores running Plasma Mobile on the Librem 5 dev kit, showcasing the Qt-based mobile shell as an alternative to the GTK-based Phosh.\n\n## Plasma Mobile Overview\n\nPlasma Mobile is KDE's take on a mobile-friendly Linux interface, featuring:\n\n- Qt/QML-based UI components\n- Familiar KDE design language\n- Different app ecosystem compared to Phosh\n- Alternative user experience paradigm\n\n## Why Alternative GUIs Matter\n\nHaving multiple GUI options for Linux phones is important for user choice and ecosystem diversity. While Phosh (developed by Purism) is the default on the Librem 5, Plasma Mobile demonstrates that users have options for customizing their mobile Linux experience.\n\nThe Librem 5's hardware and PureOS base make it flexible enough to run different mobile shells, giving users the freedom to choose the interface that works best for them.\n\n[Watch on YouTube](https://youtube.com/watch?v=OatW6iNy6ts)"
    },
    {
        "id": "librem-5-development-kit-first-look",
        "title": "Librem 5 Development Kit [First Look]",
        "date": "2019-01-08",
        "category": "Linux Phones",
        "tags": [
            "librem 5",
            "purism",
            "linux phone",
            "development kit",
            "mobile linux",
            "unboxing",
            "imx8"
        ],
        "videoId": "Ye3Vvxr9LJ4",
        "excerpt": "Setting up the Librem 5 Dev kit",
        "content": "# Librem 5 Development Kit [First Look]\n\nSetting up the Librem 5 Dev kit.\n\nThis video provides a first look at the Librem 5 development kit from Purism, including unboxing and initial setup.\n\n## What's in the Dev Kit\n\nThe Librem 5 development kit included:\n\n- Development board with i.MX 8M processor\n- Display panel\n- Various cables and connectors\n- Documentation\n\n## Initial Setup Process\n\nThe video walks through the setup process:\n\n- Unboxing and component identification\n- Connecting the display\n- Power connection\n- Initial boot and configuration\n\n## Development Kit Purpose\n\nThe dev kit served several important purposes:\n\n- **Hardware testing**: Verify component compatibility and functionality\n- **Software development**: Create and test mobile Linux applications\n- **Driver development**: Write and debug hardware drivers\n- **Community engagement**: Allow early adopters to contribute to development\n\n## Hardware Overview\n\nThe development board provides:\n\n- Full access to the i.MX 8M SoC\n- GPIO pins for hardware experimentation\n- Standard connectors for peripherals\n- Debug interfaces for low-level development\n\nThis first look gave the community its initial hands-on experience with the hardware platform that would power the Librem 5 smartphone.\n\n[Watch on YouTube](https://youtube.com/watch?v=Ye3Vvxr9LJ4)"
    },
    {
        "id": "librem5-interface-overview",
        "title": "librem5 Interface overview",
        "date": "2019-01-01",
        "category": "Linux Phones",
        "tags": [
            "librem5",
            "purism",
            "linux phone",
            "mobile",
            "interface",
            "phosh",
            "gnome",
            "gtk",
            "ui",
            "ux",
            "dev kit"
        ],
        "videoId": "Hkl8N_zXM_A",
        "excerpt": "Playing with the latest snapshot from the Librem5 dev VM.",
        "content": "# librem5 Interface overview\n\nPlaying with the latest snapshot from the Librem5 dev VM.\n\nThis video provides an overview of the Librem 5 phone interface, exploring the user experience and design of Purism's Linux-based smartphone. The Librem 5 runs a fully open-source mobile operating system, demonstrating what a privacy-focused, Linux-powered mobile device looks like in practice.\n\n## The Phosh Shell\n\nPhosh (Phone Shell) is the default graphical shell for the Librem 5. It's built on top of GNOME technologies and designed specifically for mobile use:\n\n- **Touch-optimized UI**: Large touch targets and gesture-based navigation\n- **Adaptive design**: Applications can adapt between phone and desktop modes\n- **GTK-based**: Uses standard GTK widgets with libhandy for mobile adaptations\n\n## Interface Components\n\n- **App drawer**: Access to installed applications\n- **Top panel**: System indicators, time, and notifications\n- **Bottom gestures**: Swipe up to access the app drawer or switch apps\n- **Lock screen**: Secure PIN entry with large touch-friendly buttons\n\n## Development Environment\n\nThe Librem 5 dev VM allows developers to test and develop applications before hardware availability. This virtual machine environment mirrors the phone's software stack, enabling:\n\n- Application testing\n- UI/UX experimentation\n- Driver and system software development\n\n## Comparison with Traditional Mobile OS\n\nUnlike Android's custom Java/Kotlin runtime or iOS's proprietary frameworks, the Librem 5 uses standard Linux desktop technologies adapted for mobile. This means developers familiar with GNOME/GTK development can easily create applications for the phone.\n\n[Watch on YouTube](https://youtube.com/watch?v=Hkl8N_zXM_A)"
    },
    {
        "id": "linux-stdout-stderr",
        "title": "Linux stdout stderr",
        "date": "2018-11-27",
        "category": "Linux",
        "tags": [
            "linux",
            "bash",
            "terminal",
            "stdout",
            "stderr",
            "stdin",
            "redirect",
            "pipe",
            "command-line"
        ],
        "videoId": "Ok_plRtZyac",
        "excerpt": "Standard out and standard error overview",
        "content": "# Linux stdout stderr\n\nStandard out and standard error overview.\n\n## Understanding Output Streams\n\nIn Linux, every process has three standard streams:\n\n- **stdin (0)**: Standard input - where the program reads input from\n- **stdout (1)**: Standard output - where normal output goes\n- **stderr (2)**: Standard error - where error messages go\n\n## Why Two Output Streams?\n\nThe separation of stdout and stderr allows you to:\n\n- Redirect regular output to a file while still seeing errors on screen\n- Filter out error messages while capturing normal output\n- Handle errors differently in scripts\n- Pipe output through other commands without error messages interfering\n\n## Redirection Examples\n\nRedirect stdout to a file:\n```bash\ncommand > output.txt\n```\n\nRedirect stderr to a file:\n```bash\ncommand 2> errors.txt\n```\n\nRedirect both to the same file:\n```bash\ncommand > all_output.txt 2>&1\n```\n\nRedirect stdout to file, stderr to another:\n```bash\ncommand > output.txt 2> errors.txt\n```\n\n## Piping\n\nPipes (`|`) only pass stdout by default:\n```bash\ncommand1 | command2\n```\n\nTo pipe both stdout and stderr:\n```bash\ncommand1 2>&1 | command2\n```\n\n## Practical Applications\n\nUnderstanding these streams is essential for:\n- Shell scripting\n- Log file management\n- Debugging applications\n- Building robust command pipelines\n\n[Watch on YouTube](https://youtube.com/watch?v=Ok_plRtZyac)"
    },
    {
        "id": "tip-calculator-codecademy-walkthrough-e03",
        "title": "Tip calculator | Codecademy walkthrough E03",
        "date": "2018-10-31",
        "category": "Programming",
        "tags": [
            "codecademy",
            "python",
            "programming",
            "tutorial",
            "beginner",
            "tip-calculator",
            "project"
        ],
        "videoId": "UIfmuhzQVEE",
        "excerpt": "Going over the Tip calculator project",
        "content": "# Tip calculator | Codecademy walkthrough E03\n\nGoing over the Tip calculator project.\n\nThis is episode 3 of the Codecademy walkthrough series, where we work through the Tip calculator project. This tutorial covers the basics of building a simple tip calculator as part of learning programming fundamentals.\n\n## The Project\n\nThe Tip Calculator is one of the first practical projects in the Codecademy Python course. It combines several concepts learned in previous episodes:\n\n- **Variables** - Storing the meal cost, tax rate, and tip percentage\n- **Mathematical operations** - Calculating totals and percentages\n- **User input** - Getting values from the user\n- **Output formatting** - Displaying the results in a readable format\n\n## What You'll Learn\n\nBuilding a tip calculator teaches you:\n\n1. **Working with numbers** - Both integers and floating-point numbers for currency calculations\n2. **Basic arithmetic** - Addition, multiplication, and percentage calculations\n3. **Variable assignment** - Storing intermediate results\n4. **Practical programming** - Creating something useful from basic concepts\n\n## The Calculation\n\nA typical tip calculator needs to:\n\n1. Take the meal cost as input\n2. Calculate the tax amount\n3. Calculate the tip amount\n4. Add everything together for the total bill\n\n## Why Start with Projects?\n\nProjects like the tip calculator are important because they show you how individual programming concepts come together to solve real problems. It's one thing to learn about variables and math operators in isolation; it's another to use them together to build something practical.\n\n[Watch on YouTube](https://youtube.com/watch?v=UIfmuhzQVEE)"
    },
    {
        "id": "python-codecademy-walkthrough-e02",
        "title": "Python | Codecademy walkthrough E02",
        "date": "2018-10-29",
        "category": "Programming",
        "tags": [
            "python",
            "programming",
            "codecademy",
            "tutorial",
            "beginner",
            "variables",
            "integer-division",
            "multiline-strings"
        ],
        "videoId": "Zr3f5xfmo9s",
        "excerpt": "Going over the basics of python again.",
        "content": "# Python | Codecademy walkthrough E02\n\nGoing over the basics of python again.\n\nThis is episode 2 of the Codecademy walkthrough series, continuing our exploration of Python fundamentals.\n\n## Topics Covered in This Episode\n\n- **Modifying Variables** - Learn how to update and change variable values after they've been assigned. This includes reassignment, incrementing/decrementing, and compound assignment operators.\n\n- **Integer Division** - Understanding the difference between regular division and integer (floor) division in Python. In Python 3, the `//` operator performs integer division, while `/` performs true division.\n\n- **Multiline Strings** - How to create strings that span multiple lines using triple quotes (`'''` or `\"\"\"`). This is useful for documentation strings (docstrings), formatted text output, and storing longer text content.\n\n## Building on Episode 1\n\nThis episode builds directly on the concepts from Episode 1, showing how variables can be manipulated and how Python handles different types of data operations. Understanding these fundamentals is crucial before moving on to more complex topics like control flow and functions.\n\n[Watch on YouTube](https://youtube.com/watch?v=Zr3f5xfmo9s)"
    },
    {
        "id": "python-codecademy-walkthrough-e01",
        "title": "Python | Codecademy walkthrough E01",
        "date": "2018-10-28",
        "category": "Programming",
        "tags": [
            "python",
            "programming",
            "tutorial",
            "codecademy",
            "beginners",
            "python3",
            "variables",
            "type-casting"
        ],
        "videoId": "hhkmyqRYBD4",
        "excerpt": "Going over the basics of python again.",
        "content": "# Python | Codecademy walkthrough E01\n\nGoing over the basics of Python again.\n\nThis is the first episode of a walkthrough series covering Python fundamentals using the Codecademy platform. The video covers the essential building blocks of Python programming, making it a great resource for beginners or those looking to refresh their knowledge of the language.\n\n## Topics Covered\n\nThis episode introduces the foundational concepts of Python programming:\n\n- **Variables** - How to declare and use variables to store data\n- **Type Casting** - Converting between different data types (strings, integers, floats)\n- **Python 2 vs Python 3** - Understanding the differences between versions\n- **Basic Syntax** - Getting started with Python's clean, readable syntax\n\n## Why Codecademy?\n\nCodecademy provides an interactive learning environment that's perfect for beginners. The platform lets you write and execute code directly in your browser, providing immediate feedback as you learn.\n\nThis walkthrough series follows along with the Codecademy Python course, providing additional explanations and real-world context for the concepts being taught.\n\n[Watch on YouTube](https://youtube.com/watch?v=hhkmyqRYBD4)"
    },
    {
        "id": "correcting-commands",
        "title": "Correcting Commands",
        "date": "2018-08-26",
        "category": "Linux",
        "tags": [
            "bash",
            "typos",
            "terminal",
            "readline",
            "linux",
            "command-line",
            "fixing",
            "useful"
        ],
        "videoId": "dZ8uVVQYif0",
        "excerpt": "Fixing typos in Bash.",
        "content": "# Correcting Commands\n\nFixing typos in Bash. This video covers useful techniques for correcting command-line errors and typos, making your terminal workflow more efficient.\n\n## Techniques Covered\n\nLearn how to quickly fix mistakes without retyping entire commands using:\n\n- **Readline shortcuts** - Built-in keyboard shortcuts for editing commands\n- **History substitution** - Rerun and modify previous commands\n- **Quick corrections** - Fast ways to fix common typos\n- **Argument manipulation** - Working with command arguments efficiently\n\n## Key Readline Shortcuts\n\nThe video demonstrates essential readline features that work in Bash and many other shells:\n\n- Navigation shortcuts (move by word, jump to start/end)\n- Deletion shortcuts (delete word, clear line)\n- History navigation and search\n- Text manipulation commands\n\n## Why This Matters\n\nEfficient command-line correction saves time and reduces frustration:\n\n- No need to retype long commands for small errors\n- Faster iteration when experimenting with commands\n- More productive terminal sessions\n- Works across Linux, macOS, and other Unix-like systems\n\nThese techniques become second nature with practice and significantly speed up command-line work.\n\n[Watch on YouTube](https://youtube.com/watch?v=dZ8uVVQYif0)"
    },
    {
        "id": "building-a-custom-distro-with-kiwi",
        "title": "Building a Custom Distro with Kiwi",
        "date": "2018-08-13",
        "category": "Linux",
        "tags": [
            "linux",
            "kiwi",
            "custom distro",
            "suse",
            "iso building",
            "build",
            "respin"
        ],
        "videoId": "-gL4wrAQEic",
        "excerpt": "Learn how to build your own custom Linux distribution using SUSE's Kiwi tool",
        "content": "# Building a Custom Distro with Kiwi\n\nLearn how to build your own custom Linux distribution using SUSE's Kiwi tool. This video walks through the process of creating a custom live ISO using the Kiwi image building system.\n\n## What is Kiwi?\n\nKiwi is a powerful tool from SUSE that allows you to create customized Linux images, including:\n\n- Live ISOs for bootable media\n- Virtual machine images\n- Container images\n- Cloud images\n\n## Resources\n\n- **My distro source**: https://bitbucket.org/hackersgame/chimeraos/\n- **Kiwi code examples**: https://github.com/SUSE/kiwi-descriptions\n- **Kiwi documentation**: https://opensource.suse.com/kiwi/building/build_live_iso.html\n- **Git repository**: https://github.com/SUSE/kiwi-descriptions\n\n## Why Build a Custom Distro?\n\nCreating your own Linux distribution allows you to:\n\n- Pre-install specific software packages\n- Configure the system exactly how you want it\n- Create specialized environments for specific use cases\n- Learn how Linux distributions are built\n- Share customized systems with others\n\n## The Build Process\n\nThe video covers the practical steps of using Kiwi to build a bootable ISO from scratch, including configuration files and the build commands needed to produce a working image.\n\n[Watch on YouTube](https://youtube.com/watch?v=-gL4wrAQEic)"
    },
    {
        "id": "lets-install-opensuse-leap-15",
        "title": "Let's install | OpenSuSE Leap 15.0",
        "date": "2018-06-01",
        "category": "Linux",
        "tags": [
            "opensuse",
            "leap",
            "installation",
            "linux-distro",
            "review",
            "enterprise-linux"
        ],
        "videoId": "XtkoWirGMSk",
        "excerpt": "Review and install.",
        "content": "# Let's install | OpenSuSE Leap 15.0\n\nReview and install.\n\nA walkthrough of the OpenSuSE Leap 15.0 installation process, covering the setup and configuration of this enterprise-grade Linux distribution.\n\n## About OpenSuSE Leap\n\nOpenSuSE Leap is a stable, enterprise-grade Linux distribution that bridges the gap between the community-driven openSuSE project and SUSE Linux Enterprise. It provides:\n\n- **Enterprise stability**: Based on SUSE Linux Enterprise source code\n- **Regular releases**: Predictable release schedule\n- **Long-term support**: Extended maintenance periods\n- **YaST**: Powerful system configuration tool\n\n## Installation Overview\n\nThe video covers the complete installation process including:\n\n- Boot media preparation\n- Installer navigation\n- Partitioning options\n- Package selection\n- User configuration\n- Post-installation setup\n\n## Why OpenSuSE Leap?\n\n- Excellent for servers and workstations requiring stability\n- Great hardware support\n- Powerful administration tools (YaST)\n- Strong community and documentation\n- Compatible with SUSE Linux Enterprise packages\n\n## Music Credits\n\n\"Happy Boy Theme\" by Kevin MacLeod is licensed under a Creative Commons Attribution license.\n- Source: http://incompetech.com/music/royalty-free/index.html?isrc=USUAN1100647\n- Artist: http://incompetech.com/\n\n[Watch on YouTube](https://youtube.com/watch?v=XtkoWirGMSk)"
    },
    {
        "id": "manjaro-in-a-chroot",
        "title": "Manjaro in a Chroot",
        "date": "2018-06-01",
        "category": "Linux",
        "tags": [
            "chroot",
            "manjaro",
            "linux",
            "ubuntu",
            "opensuse",
            "fedora",
            "systemd",
            "arch",
            "pacman"
        ],
        "videoId": "KQpoy6wWVEo",
        "excerpt": "Now you can use Manjaro in Ubuntu, OpenSuSE, Fedora, ...",
        "content": "# Manjaro in a Chroot\n\nNow you can use Manjaro in Ubuntu, OpenSuSE, Fedora, and more.\n\n## What is a Chroot?\n\nA chroot (change root) creates an isolated environment where you can run a different Linux distribution within your current system. It's like having two distros at once without dual-booting.\n\n## Why Run Manjaro in a Chroot?\n\n- Access Arch-based packages (AUR) from any distro\n- Test Manjaro without installing it\n- Use `pacman` package manager alongside your native one\n- Run Manjaro-specific tools\n- No need for VMs or dual-boot\n\n## Compatible Host Systems\n\nThis technique works on:\n- Ubuntu and derivatives\n- OpenSuSE\n- Fedora\n- Any Linux distribution with chroot support\n\n## Basic Steps\n\n1. **Download Manjaro rootfs** - Get the base filesystem\n2. **Extract to a directory** - Unpack the root filesystem\n3. **Mount necessary filesystems** - Bind mount /proc, /sys, /dev\n4. **Chroot into Manjaro** - Enter the new environment\n5. **Configure and use** - Run pacman, install packages\n\n## Considerations\n\n- Graphics and systemd services have limitations in chroot\n- Network access works through the host\n- Great for command-line tools and package building\n- Not ideal for running full desktop sessions\n\n## Use Cases\n\n- Building AUR packages\n- Testing Manjaro/Arch software\n- Accessing rolling-release packages\n- Learning Arch-based systems safely\n\n[Watch on YouTube](https://youtube.com/watch?v=KQpoy6wWVEo)"
    },
    {
        "id": "linux-distro-vs-desktop-environment",
        "title": "Linux Distro VS Desktop Environment",
        "date": "2018-05-18",
        "category": "Desktop Linux",
        "tags": [
            "linux",
            "distro",
            "desktop environment",
            "beginner",
            "linux 101",
            "gnome",
            "unity",
            "mate",
            "ubuntu",
            "manjaro"
        ],
        "videoId": "IdbwYYpQcAM",
        "excerpt": "Linux 101",
        "content": "# Linux Distro VS Desktop Environment\n\nLinux 101\n\nThis video explains the difference between a Linux distribution and a desktop environment - a common point of confusion for newcomers to Linux.\n\n*Thanks to Ed ThePlanesPerson for the idea!*\n\n## What is a Linux Distribution?\n\nA Linux distribution (distro) is the complete operating system package that includes:\n\n- **Linux kernel**: The core of the operating system\n- **System utilities**: Essential tools for system operation\n- **Package manager**: Software installation and updates (apt, dnf, pacman, etc.)\n- **Default software**: Pre-installed applications\n- **Configuration**: Default settings and system setup\n\n### Popular Distributions\n\n- **Ubuntu**: User-friendly, large community, based on Debian\n- **Fedora**: Cutting-edge features, Red Hat sponsored\n- **Manjaro**: Arch-based with easier installation\n- **Linux Mint**: Ubuntu-based with traditional desktop focus\n- **Arch Linux**: DIY approach, rolling release\n- **OpenSUSE**: Enterprise-grade with YaST configuration\n\n## What is a Desktop Environment?\n\nA desktop environment (DE) is the graphical interface you interact with:\n\n- **Windows and panels**: The visual framework\n- **Menus and launchers**: Application access\n- **File manager**: Browsing files graphically\n- **System settings**: GUI configuration tools\n- **Window management**: How windows behave and appear\n\n### Popular Desktop Environments\n\n- **GNOME**: Modern, minimal, gesture-focused\n- **KDE Plasma**: Feature-rich, highly customizable\n- **XFCE**: Lightweight, traditional layout\n- **Cinnamon**: Traditional desktop, Linux Mint default\n- **MATE**: GNOME 2 continuation, classic experience\n- **Unity**: Canonical's former Ubuntu default\n\n## The Key Insight\n\n**Most desktop environments can run on most distributions!**\n\nThis gives users flexibility to customize their Linux experience:\n- Run KDE Plasma on Ubuntu\n- Use GNOME on Arch Linux\n- Install XFCE on Fedora\n\n## Choosing Your Setup\n\n### Consider the Distribution For:\n- Package availability\n- Release schedule (rolling vs fixed)\n- Community and documentation\n- System requirements\n- Use case (desktop, server, etc.)\n\n### Consider the Desktop Environment For:\n- Visual style preference\n- Workflow habits\n- System resources\n- Customization needs\n- Application integration\n\n## The Bottom Line\n\nThe distribution provides the foundation, while the desktop environment provides the experience. Understanding this separation empowers you to build your ideal Linux setup.\n\n[Watch on YouTube](https://youtube.com/watch?v=IdbwYYpQcAM)"
    },
    {
        "id": "chroot-into-docker",
        "title": "Chroot into Docker",
        "date": "2018-04-06",
        "category": "Linux",
        "tags": [
            "docker",
            "chroot",
            "linux",
            "containers",
            "devops",
            "changeroot",
            "filesystem"
        ],
        "videoId": "zcK8IeLO748",
        "excerpt": "Get any Linux OS via Docker pull.",
        "content": "# Chroot into Docker\n\nGet any Linux OS via Docker pull.\n\nThis video demonstrates how to use Docker to quickly access different Linux distributions by pulling images and using chroot to interact with them. A useful technique for testing and development across multiple Linux environments.\n\n## The Technique\n\nThe video shows how to:\n\n1. Pull a Docker image for any Linux distribution\n2. Export the container filesystem\n3. Use chroot to enter the extracted filesystem\n4. Work within that environment as if it were a native installation\n\n## Why This is Useful\n\n- **Quick access to different distros** - Test on Debian, Ubuntu, Fedora, Alpine, etc. without installing them\n- **Development testing** - Verify your software works across distributions\n- **Learning** - Explore different Linux environments safely\n- **Troubleshooting** - Compare behavior across systems\n\n## Key Concepts\n\n- **chroot** - Change root directory to create an isolated environment\n- **Docker images** - Pre-built filesystem snapshots of Linux distributions\n- **Container filesystems** - The actual file structure inside containers\n\nThis approach provides a lightweight way to experiment with different Linux environments without the overhead of full virtual machines or dual-booting.\n\n[Watch on YouTube](https://youtube.com/watch?v=zcK8IeLO748)"
    },
    {
        "id": "oneclick-install-the-new-beautiful-way-and-the-terminal-way",
        "title": "OneClick Install: The new beautiful way & the terminal way.",
        "date": "2018-03-25",
        "category": "Linux",
        "tags": [
            "opensuse",
            "oneclick",
            "ymp",
            "package-management",
            "linux",
            "software-installation"
        ],
        "videoId": "WnM4VslzfGg",
        "excerpt": "OpenSuSE just got more beautiful.",
        "content": "# OneClick Install: The new beautiful way & the terminal way.\n\nOpenSuSE just got more beautiful.\n\n## What is OneClick Install?\n\nOneClick Install is OpenSUSE's solution for easy software installation. It streamlines the process of:\n- Adding repositories\n- Resolving dependencies\n- Installing packages\n\nAll with a single click from a web browser.\n\n## YMP Files\n\n### What are YMP Files?\nYMP (YaST Meta Package) files are XML-based installation descriptors that contain:\n- Repository URLs to add\n- Package names to install\n- Dependencies and suggestions\n\n### How They Work\n1. Click a OneClick Install link on a website\n2. Your browser downloads the .ymp file\n3. YaST opens and shows what will be installed\n4. Confirm and the software is installed\n\n## The Beautiful Way (GUI)\n\nThe graphical method:\n1. Browse to software.opensuse.org\n2. Find your desired package\n3. Click \"1-Click Install\"\n4. Confirm in YaST\n5. Done!\n\n## The Terminal Way\n\nFor those who prefer the command line, you can also process YMP files:\n```bash\n# Install from a YMP file\nOCICLI install package.ymp\n```\n\nOr manually:\n1. Extract repository info from the YMP\n2. Add repositories with `zypper ar`\n3. Install packages with `zypper in`\n\n## Why This Matters\n\nOneClick Install solves common Linux software installation pain points:\n- No hunting for the right repository\n- No manual dependency resolution\n- Works for third-party software not in default repos\n- Accessible to new users\n\n[Watch on YouTube](https://youtube.com/watch?v=WnM4VslzfGg)"
    },
    {
        "id": "initrd-ramdisk-101",
        "title": "initrd ramdisk 101",
        "date": "2018-03-18",
        "category": "Linux",
        "tags": [
            "initrd",
            "ramdisk",
            "linux",
            "boot process",
            "kernel",
            "initramfs",
            "system-boot"
        ],
        "videoId": "JnwO_SgjPeU",
        "excerpt": "Let's talk about the initrd",
        "content": "# initrd ramdisk 101\n\nLet's talk about the initrd (initial ramdisk).\n\nThis video explains what the initrd is and how it fits into the Linux boot process.\n\n## What is initrd?\n\nThe initrd (initial ramdisk) is a temporary root filesystem that gets loaded into memory during the boot process. It contains essential drivers and scripts needed to mount the real root filesystem and continue the boot process.\n\n## Why is initrd Needed?\n\nThe Linux kernel is relatively small and doesn't include drivers for every possible storage device. The initrd provides:\n\n- **Storage drivers**: Drivers needed to access the real root filesystem (SATA, NVMe, USB, RAID, etc.)\n- **Filesystem drivers**: Support for various filesystem types (ext4, btrfs, xfs, etc.)\n- **Encryption support**: Tools to unlock encrypted root partitions\n- **Network boot**: Drivers and tools for network-based root filesystems (NFS, iSCSI)\n\n## Boot Process Overview\n\n1. Bootloader (GRUB) loads the kernel and initrd into memory\n2. Kernel starts and mounts the initrd as a temporary root\n3. Init scripts in initrd load necessary drivers\n4. Real root filesystem is mounted\n5. System switches to the real root (pivot_root)\n6. Normal system init takes over\n\n## Understanding initrd\n\nUnderstanding the initrd is fundamental to:\n- Troubleshooting boot issues\n- Creating custom boot environments\n- Understanding how Linux systems initialize\n- Recovering from failed boots\n\n## Music Credits\n\nEnd song: \"Tom Perry\" by Twin Musicom is licensed under a Creative Commons Attribution license.\n- Source: http://www.twinmusicom.org/song/245/\n- Artist: http://www.twinmusicom.org\n\n[Watch on YouTube](https://youtube.com/watch?v=JnwO_SgjPeU)"
    },
    {
        "id": "uefi-real-quick",
        "title": "UEFI Real Quick",
        "date": "2018-03-13",
        "category": "Linux",
        "tags": [
            "uefi",
            "bios",
            "boot",
            "firmware",
            "linux-installation",
            "efi",
            "grub",
            "partition",
            "legacy"
        ],
        "videoId": "mElnFVlmha0",
        "excerpt": "Stop being afraid of UEFI.",
        "content": "# UEFI Real Quick\n\nStop being afraid of UEFI.\n\nA quick introduction to understanding UEFI and how it differs from traditional BIOS, making Linux installations and dual-booting easier to understand.\n\n## What is UEFI?\n\n**UEFI** (Unified Extensible Firmware Interface) is the modern replacement for the traditional BIOS (Basic Input/Output System). It's the firmware that initializes your hardware and boots your operating system.\n\n## UEFI vs Legacy BIOS\n\n| Feature | Legacy BIOS | UEFI |\n|---------|-------------|------|\n| Partition table | MBR | GPT |\n| Boot partition | Not required | EFI System Partition (ESP) |\n| Disk size limit | 2TB | Much larger |\n| Boot speed | Slower | Faster |\n| Security | Basic | Secure Boot support |\n\n## Key Concepts\n\n### EFI System Partition (ESP)\n\nUEFI systems require a special FAT32 partition (usually mounted at `/boot/efi`) to store bootloader files. This is where GRUB and other boot managers live.\n\n### GRUB and UEFI\n\nGRUB (GRand Unified Bootloader) works with UEFI to provide boot menus and manage multiple operating systems. Understanding how GRUB integrates with UEFI is essential for:\n\n- Dual-booting Linux and Windows\n- Troubleshooting boot issues\n- Installing Linux on modern hardware\n\n### Legacy Mode\n\nMany UEFI systems can emulate legacy BIOS mode for compatibility. However, it's generally better to use native UEFI mode for new installations.\n\n## Why This Matters\n\nMany Linux users avoid UEFI because it seems complicated. This video breaks down the essentials so you can:\n\n- Confidently install Linux on UEFI systems\n- Understand boot problems when they occur\n- Set up dual-boot configurations\n\nDon't let UEFI intimidate you - it's actually quite straightforward once you understand the basics.\n\n[Watch on YouTube](https://youtube.com/watch?v=mElnFVlmha0)"
    },
    {
        "id": "lets-install-opensuse-on-the-gpd-win",
        "title": "Let's install OpenSuSE on the GPD WIN",
        "date": "2018-03-04",
        "category": "Hardware",
        "tags": [
            "openSUSE",
            "GPD WIN",
            "linux installation",
            "handheld",
            "gaming",
            "portable-pc",
            "touch-screen"
        ],
        "videoId": "U1bTlEtxjhE",
        "excerpt": "What's small and runs Linux?",
        "content": "# Let's install OpenSuSE on the GPD WIN\n\nWhat's small and runs Linux?\n\nThis video walks through the process of installing OpenSuSE Linux on the GPD WIN handheld gaming device. The GPD WIN is a compact Windows-based handheld that can also run Linux with some configuration.\n\n## Prerequisites\n\n### Optional Windows BIOS Downgrade\nSome configurations may require a BIOS downgrade for optimal Linux compatibility:\n- [Windows BIOS downgrade files](https://sil-log.net/wp-content/uploads/2016/11/WINDOWS_F1T4-20161025.rar)\n\n## Installation Resources\n\n### RPMs, Configs, and Touch Fix\nCustom packages and configuration files for the GPD WIN:\n- [GPD WIN Linux Resources](http://hackersgametoo.com/gpd.html)\n\n### Generic Linux Directions\nGeneral guidance for Linux on the GPD WIN:\n- [Hans de Goede's Guide](http://hansdegoede.livejournal.com/17445.html)\n\n## What's Working on Linux\n\nThe GNOME project maintains a compatibility list for the GPD WIN:\n- [GPD WIN Compatibility Status](https://wiki.gnome.org/AdrienPlazas/GPDWin)\n\n## Topics Covered\n\n- BIOS configuration for Linux boot\n- Installation media preparation\n- Partition setup for the small internal storage\n- Touch screen configuration and fixes\n- Driver installation for hardware support\n- Desktop environment considerations for the small screen\n\nThe GPD WIN presents unique challenges due to its small form factor and specialized hardware, but with the right configuration, it can run a full Linux desktop experience.\n\n[Watch on YouTube](https://youtube.com/watch?v=U1bTlEtxjhE)"
    },
    {
        "id": "suse-and-yast",
        "title": "SuSE and Yast",
        "date": "2018-03-02",
        "category": "Linux",
        "tags": [
            "yast",
            "opensuse",
            "yast2",
            "howto",
            "linux",
            "system-tool",
            "configuration",
            "sysadmin"
        ],
        "videoId": "UTgi0gDlNlA",
        "excerpt": "Yast (Yet another Setup Tool)",
        "content": "# SuSE and Yast\n\nYast (Yet another Setup Tool)\n\nA comprehensive look at SuSE Linux's powerful configuration and setup utility. YaST is the central tool for installing and configuring openSUSE and SUSE Linux Enterprise, providing a unified interface for system administration tasks.\n\n## What is YaST?\n\n**YaST** stands for \"Yet another Setup Tool\" - it's a comprehensive system configuration and installation tool that has been part of SUSE Linux since its early days. It provides both graphical (YaST2) and text-based interfaces for managing nearly every aspect of your system.\n\n## Features Covered\n\nYaST provides modules for:\n\n- **Software Management** - Install, update, and remove packages\n- **Hardware Configuration** - Set up printers, sound cards, graphics, and more\n- **Network Configuration** - Configure network interfaces, firewall, and services\n- **User Management** - Create and manage user accounts and groups\n- **System Services** - Enable, disable, and configure system services\n- **Boot Loader** - Configure GRUB and boot options\n- **Partitioning** - Manage disk partitions and filesystems\n- **Security** - Configure security settings and policies\n\n## Why YaST Matters\n\nYaST sets openSUSE and SUSE apart from other distributions by providing a centralized, consistent interface for system administration. Rather than hunting through different configuration files and tools, administrators can use YaST to manage everything from one place.\n\nWhether you're a beginner who wants a GUI for configuration or an experienced admin who appreciates the efficiency of a unified tool, YaST offers something for everyone.\n\n[Watch on YouTube](https://youtube.com/watch?v=UTgi0gDlNlA)"
    },
    {
        "id": "desktop-environment-pygame-python",
        "title": "I Wrote a Desktop Environment in Pygame/Python",
        "date": "2018-02-17",
        "category": "Desktop Linux",
        "tags": [
            "python",
            "pygame",
            "desktop environment",
            "window manager",
            "lavinder",
            "x11",
            "open source",
            "janit",
            "linux desktop"
        ],
        "videoId": "0DKDol1B1bo",
        "excerpt": "I'm open-sourcing my Desktop Environment. It's still in pre-alpha but I figured I should release it before Wayland completely deprecates X11.",
        "content": "# I Wrote a Desktop Environment in Pygame/Python\n\nI'm open-sourcing my Desktop Environment. It's still in pre-alpha but I figured I should release it before Wayland completely deprecates X11.\n\n## The Projects\n\n### Lavinder\n\nLavinder is the main desktop environment/window manager written in Python using Pygame. It provides the core window management and desktop functionality.\n\n### Janit\n\nLavinder runs 'janit' as its menu/process handler. Janit is also being open-sourced and is useful in plain X11 with any window manager running. There are plans to use janit with Wayland's Weston compositor as well.\n\n## Source Code\n\n- **Lavinder**: https://bitbucket.org/hackersgame/lavinder\n- **Janit**: https://bitbucket.org/hackersgame/janit\n\n## Why Python/Pygame?\n\nBuilding a desktop environment in Python with Pygame demonstrates:\n\n- Rapid prototyping capabilities\n- Python's flexibility for system-level programming\n- How desktop environments work under the hood\n- Alternative approaches to traditional C/C++ implementations\n\n## Technical Details\n\nThe project works with X11, the traditional Linux display server. While Wayland is becoming the standard, X11 knowledge and projects remain valuable for understanding Linux graphics architecture and supporting systems that still use X11.\n\nThe release was timed to share the work before the ecosystem potentially moves entirely to Wayland.\n\n[Watch on YouTube](https://youtube.com/watch?v=0DKDol1B1bo)"
    },
    {
        "id": "recover-forgotten-password",
        "title": "Recover Forgotten Password",
        "date": "2018-02-09",
        "category": "Linux",
        "tags": [
            "password-recovery",
            "ubuntu",
            "opensuse",
            "redhat",
            "fedora",
            "root",
            "security",
            "system-administration",
            "grub"
        ],
        "videoId": "RSN2oRC8HiM",
        "excerpt": "How to reset roots password on Ubuntu, OpenSuSE, Redhat, /etc",
        "content": "# Recover Forgotten Password\n\nHow to reset root's password on Ubuntu, OpenSuSE, Redhat, and other Linux distributions.\n\nThis tutorial walks through the process of recovering a forgotten root password on various Linux systems. The technique involves booting into single-user mode or using the GRUB bootloader to gain access and reset the password.\n\n## Distributions Covered\n\nThis guide works for multiple Linux distributions:\n\n- **Ubuntu** - Debian-based systems\n- **OpenSuSE** - SUSE Linux Enterprise family\n- **Red Hat / Fedora / CentOS** - Red Hat family distributions\n\n## The Recovery Process\n\nThe general approach involves:\n\n1. **Access the GRUB bootloader** - Interrupt the normal boot process to access GRUB\n2. **Edit the boot parameters** - Modify the kernel command line to boot into single-user mode or a rescue shell\n3. **Remount the filesystem** - Ensure the root filesystem is mounted with write permissions\n4. **Change the password** - Use the `passwd` command to set a new root password\n5. **Reboot normally** - Exit the rescue environment and boot into your system with the new password\n\n## Important Security Note\n\nThis technique demonstrates why physical security of your machines is important. Anyone with physical access to a Linux machine can potentially reset the root password using this method unless additional security measures (like encrypted disks or GRUB passwords) are in place.\n\nThis is an essential skill for system administrators who need to regain access to systems where the root password has been lost or forgotten.\n\n[Watch on YouTube](https://youtube.com/watch?v=RSN2oRC8HiM)"
    },
    {
        "id": "neural-network-trained-on-campfire-audio",
        "title": "Neural Network Trained on Campfire Audio",
        "date": "2018-02-06",
        "category": "AI/ML",
        "tags": [
            "neural-network",
            "tensorflow",
            "wavenet",
            "machine-learning",
            "audio",
            "audio-synthesis",
            "deep-learning"
        ],
        "videoId": "JI-_Cj_mg60",
        "excerpt": "Using TensorFlow WaveNet to generate campfire audio with a neural network",
        "content": "# Neural Network Trained on Campfire Audio\n\nThis video demonstrates using TensorFlow WaveNet to train a neural network on campfire audio samples. The model learns the patterns and characteristics of campfire sounds and can generate new audio based on what it learned.\n\n## What is WaveNet?\n\nWaveNet is a deep neural network for generating raw audio waveforms, originally developed by DeepMind. It can:\n- Learn the characteristics of any audio\n- Generate new audio that sounds similar to training data\n- Capture complex patterns in sound waves\n\n## The Project\n\n### Training Data\nThe neural network was trained on recordings of campfire audio - the crackling, popping, and ambient sounds of burning wood.\n\n### The Process\n1. Collect campfire audio samples\n2. Preprocess audio for the neural network\n3. Train the WaveNet model on the samples\n4. Generate new campfire sounds from the trained model\n\n### Results\nThe trained model can produce synthesized campfire audio that captures the essence of the original recordings - the random crackles, the low rumble, the organic nature of fire sounds.\n\n## Technical Details\n\n- **Framework**: TensorFlow\n- **Model**: WaveNet architecture\n- **Repository**: https://github.com/ibab/tensorflow-wavenet\n\n## Future Ideas\n\nThe same technique could be applied to:\n- Bird sounds\n- Waterfalls\n- Rain\n- Ocean waves\n- Any ambient audio\n\nLet me know if you want to see experiments with other natural sounds!\n\n[Watch on YouTube](https://youtube.com/watch?v=JI-_Cj_mg60)"
    },
    {
        "id": "upgrading-to-opensuse-tumbleweed",
        "title": "Upgrading to Opensuse Tumbleweed",
        "date": "2018-01-31",
        "category": "Linux",
        "tags": [
            "opensuse",
            "tumbleweed",
            "linux",
            "upgrade",
            "rolling-release",
            "zypper",
            "dup",
            "leap"
        ],
        "videoId": "Ho5bahp95gs",
        "excerpt": "This is an online upgrade.",
        "content": "# Upgrading to Opensuse Tumbleweed\n\nThis is an online upgrade.\n\nThis video walks through the process of upgrading to openSUSE Tumbleweed, a rolling release distribution that provides the latest stable versions of all software.\n\n## What is Tumbleweed?\n\n**openSUSE Tumbleweed** is a rolling release distribution, meaning you get continuous updates rather than periodic major version releases. Once you're on Tumbleweed, you stay current with the latest packages through regular updates.\n\n## Upgrading from Leap\n\nThe video demonstrates upgrading from openSUSE Leap (versions like 42.1, 42.2, 42.3) to Tumbleweed. This is an \"online upgrade\" - you perform the upgrade while the system is running, without needing installation media.\n\n## The Upgrade Process\n\n### Using zypper dup\n\nThe key command for distribution upgrades in openSUSE is:\n\n```bash\nzypper dup\n```\n\nThis performs a \"distribution upgrade\" that handles the transition from Leap to Tumbleweed.\n\n### Steps Overview\n\n1. **Update repository URLs** - Point to Tumbleweed repositories\n2. **Refresh repositories** - `zypper ref`\n3. **Perform distribution upgrade** - `zypper dup`\n4. **Reboot** into your new Tumbleweed system\n\n## Official Documentation\n\nFor the complete, up-to-date upgrade instructions:\n[openSUSE Tumbleweed Upgrade Guide](https://en.opensuse.org/openSUSE:Tumbleweed_upgrade)\n\n## Bonus: OBS Studio on Tumbleweed\n\nThe video also references installing OBS Studio on openSUSE:\n[OBS Studio Installation Instructions](https://github.com/jp9000/obs-studio/wiki/Install-Instructions#opensuse-installation-unofficial)\n\n## Why Tumbleweed?\n\n- **Always current** - Get the latest kernel, desktop environment, and applications\n- **Stable rolling release** - OpenQA automated testing ensures stability\n- **No major upgrades** - Just keep updating, no need for version jumps\n\n[Watch on YouTube](https://youtube.com/watch?v=Ho5bahp95gs)"
    },
    {
        "id": "6-ways-to-reboot-linux",
        "title": "6 ways to reboot Linux",
        "date": "2018-01-17",
        "category": "Linux",
        "tags": [
            "linux",
            "reboot",
            "commands",
            "terminal",
            "sysadmin",
            "shutdown",
            "magic keys",
            "sysrq",
            "restart",
            "poweroff",
            "halt"
        ],
        "videoId": "d3CMhZhFPAg",
        "excerpt": "Reboot? Multiple methods to restart your Linux system.",
        "content": "# 6 ways to reboot Linux\n\nExplore six different methods to reboot a Linux system. Whether you're a beginner or experienced user, knowing multiple ways to restart your system can be useful in different situations - especially when the system becomes unresponsive.\n\n## Reboot Methods Covered\n\nThe video covers various approaches including:\n\n- **reboot** - The standard reboot command\n- **shutdown** - Using shutdown with reboot flags\n- **poweroff/halt** - Related power management commands\n- **Magic SysRq keys** - Emergency keyboard shortcuts for when the system is frozen\n- **Force reboot** - Methods for forcing a restart when normal commands fail\n\n## When to Use Different Methods\n\nUnderstanding these different approaches is crucial for system administration:\n\n- Normal operations: Use `reboot` or `shutdown -r`\n- Frozen system: Magic SysRq key combinations (REISUB sequence)\n- Emergency situations: Force reboot options\n\nThe Magic SysRq keys are particularly valuable as they work at the kernel level and can help safely reboot even when the system appears completely unresponsive.\n\n[Watch on YouTube](https://youtube.com/watch?v=d3CMhZhFPAg)"
    },
    {
        "id": "recover-from-full-root-filesystem",
        "title": "How to Recover From a Full Root Filesystem",
        "date": "2018-01-10",
        "category": "Linux",
        "tags": [
            "linux",
            "sysadmin",
            "troubleshooting",
            "filesystem",
            "disk-space",
            "recovery",
            "du",
            "sort"
        ],
        "videoId": "HnDN18Gc3Ig",
        "excerpt": "If you want to find big file(s) in Linux... Watch this.",
        "content": "# How to Recover From a Full Root Filesystem\n\nIf you want to find big files in Linux, watch this.\n\nA full root filesystem can bring a Linux system to its knees, preventing normal operations and even blocking you from logging in. This video walks through the process of identifying and removing large files that are consuming disk space, helping you recover your system and get back to normal operations.\n\n## The Problem\n\nWhen your root filesystem (`/`) fills up completely, you may experience:\n\n- Unable to log in to the system\n- Services failing to start or crashing\n- Unable to create new files or save data\n- System instability and errors\n\n## Finding Big Files\n\nThe key commands covered in this tutorial:\n\n### Using `du` (Disk Usage)\n\nThe `du` command shows disk usage for files and directories:\n\n```bash\ndu -h /path/to/check\n```\n\n### Sorting by Size\n\nCombine `du` with `sort` to find the largest files and directories:\n\n```bash\ndu -h / | sort -h\n```\n\nThis pipes the output of `du` into `sort` with the `-h` flag for human-readable sizes, showing the largest items at the bottom.\n\n### Quick Recovery Steps\n\n1. Identify what's consuming space using `du` and `sort`\n2. Look in common problem areas: `/var/log`, `/tmp`, `/home`\n3. Remove or compress large unnecessary files\n4. Consider setting up log rotation to prevent future issues\n\n## Prevention Tips\n\n- Monitor disk space regularly with `df -h`\n- Set up alerts for low disk space\n- Configure log rotation for application and system logs\n- Use separate partitions for `/var` and `/home` to prevent root filesystem issues\n\n[Watch on YouTube](https://youtube.com/watch?v=HnDN18Gc3Ig)"
    },
    {
        "id": "open-world-hack-oot",
        "title": "Open World Hack | OOT",
        "date": "2018-01-08",
        "category": "Gaming",
        "tags": [
            "zelda",
            "ocarina-of-time",
            "hack",
            "cheat-codes",
            "n64",
            "emulation",
            "gaming",
            "gameshark"
        ],
        "videoId": "5GBsdsGheOU",
        "excerpt": "Exploring cheat codes for open world gameplay in Ocarina of Time.",
        "content": "# Open World Hack | OOT\n\nExploring cheat codes for open world gameplay in Ocarina of Time.\n\nThis video demonstrates some fun cheat codes for The Legend of Zelda: Ocarina of Time that enable open world exploration, bypassing the normal game progression.\n\n## Cheat Codes\n\nThese are GameShark/Action Replay style codes for N64 emulators or original hardware with a cheat device.\n\n### Hold down 'L' to Levitate\n```\nD01C84B5 0020\n811DAA90 40CB\n```\nHold the L button to float upward, allowing you to reach areas normally inaccessible.\n\n### Hold down 'C-stick Right' to Run Fast\n```\nD01C84B5 0001\n801DB258 0041\n```\nPress C-right to move at high speed, great for quickly traversing the world.\n\n### Hold down 'C-stick Right + L' to Run/Levitate\n```\nD01C84B5 0021\n801DB258 0041\nD01C84B5 0021\n811DAA90 40CB\n```\nCombine both abilities - hold C-right and L together to fly around the world at high speed.\n\n## What You Can Do\n\nWith these codes enabled, you can:\n- Explore Hyrule freely from the start\n- Reach areas out of sequence\n- Discover hidden spots and boundaries\n- See the game world from new perspectives\n- Have fun breaking the intended progression\n\n## How to Use\n\n1. Use an N64 emulator with cheat support (Project64, RetroArch, etc.)\n2. Or use a GameShark/Action Replay on original hardware\n3. Enter the codes in the cheat menu\n4. Enable during gameplay\n\n[Watch on YouTube](https://youtube.com/watch?v=5GBsdsGheOU)"
    },
    {
        "id": "rm-rf-ubuntu-fixable",
        "title": "rm -rf ubuntu... fixable?",
        "date": "2018-01-01",
        "category": "Linux",
        "tags": [
            "ubuntu",
            "linux",
            "terminal",
            "recovery",
            "rm-rf",
            "grub",
            "dpkg",
            "initrd",
            "hacking",
            "opensuse"
        ],
        "videoId": "9aeU3JoJnuE",
        "excerpt": "Messing with Ubuntu 16.04",
        "content": "# rm -rf ubuntu... fixable?\n\nMessing with Ubuntu 16.04\n\nIn this video, we explore what happens when you run the infamous `rm -rf` command on an Ubuntu system and whether the damage can be recovered. This is an educational experiment to understand Linux system internals and recovery techniques.\n\n## The Experiment\n\nThe video demonstrates the destructive power of `rm -rf` (remove recursively with force) and attempts various recovery methods to bring the system back to life.\n\n## Topics Explored\n\n- **The `rm -rf` command** - Understanding why this command is so dangerous and what it actually does to your filesystem\n- **GRUB bootloader** - How the bootloader is affected and recovery options\n- **dpkg and package management** - Working with Debian's package manager for system repair\n- **initrd (Initial RAM Disk)** - Understanding the boot process and how initrd is used\n- **Cross-distribution hacking** - Attempting to use tools from openSUSE (zypper, rpm) to repair an Ubuntu system\n\n## The \"Frankenstein OS\" Approach\n\nPart of the experiment involves trying to create a hybrid system by mixing components from different distributions - what the video calls a \"FrankensteinOS\" or \"abomination\" - to see if a destroyed Ubuntu system can be revived using parts from other Linux distributions.\n\n## Key Takeaways\n\n- Always have backups before running dangerous commands\n- Understanding system internals helps with recovery\n- The Linux boot process involves multiple components that must work together\n- Sometimes it's faster to reinstall than to repair\n\n## Warning\n\nThis video is for educational purposes. Never run `rm -rf /` on a production system or any system you care about!\n\n[Watch on YouTube](https://youtube.com/watch?v=9aeU3JoJnuE)"
    },
    {
        "id": "how-to-kill-processes-in-linux",
        "title": "How to Kill Processes in Linux",
        "date": "2017-12-30",
        "category": "Linux",
        "tags": [
            "linux",
            "processes",
            "terminal",
            "command line",
            "system administration",
            "kill",
            "signals"
        ],
        "videoId": "n_OJwa9CWRc",
        "excerpt": "Learn how to kill processes in Linux using various command line tools.",
        "content": "# How to Kill Processes in Linux\n\nA tutorial on how to terminate and manage processes in Linux using command line tools.\n\n## Overview\n\nProcess management is a fundamental skill for Linux system administration. This tutorial covers the various methods and commands available for terminating processes.\n\n## Common Commands\n\n### kill\nThe basic command for sending signals to processes:\n- `kill PID` - Send SIGTERM (graceful termination)\n- `kill -9 PID` - Send SIGKILL (force termination)\n\n### killall\nKill processes by name rather than PID:\n- `killall process_name`\n\n### pkill\nPattern-based process killing:\n- `pkill pattern`\n\n### htop/top\nInteractive process managers that allow you to select and kill processes visually.\n\n## Signal Types\n\n- **SIGTERM (15)**: Graceful termination request - allows process to clean up\n- **SIGKILL (9)**: Forceful termination - process is immediately stopped\n- **SIGHUP (1)**: Hangup signal - often used to reload configurations\n\n## Music Credits\n\nEnd song: \"Tom Perry\" by Twin Musicom is licensed under a Creative Commons Attribution license.\n- Source: http://www.twinmusicom.org/song/245/\n- Artist: http://www.twinmusicom.org\n\n[Watch on YouTube](https://youtube.com/watch?v=n_OJwa9CWRc)"
    },
    {
        "id": "basic-x11-linux-gui",
        "title": "Basic x11 (Linux GUI)...",
        "date": "2017-12-28",
        "category": "Desktop Linux",
        "tags": [
            "x11",
            "xinit",
            "linux-gui",
            "display-server",
            "desktop",
            "xorg",
            "grub",
            "runlevels",
            "wayland"
        ],
        "videoId": "xv3kgsm4wk0",
        "excerpt": "A quick look at using x11/xinit manually.",
        "content": "# Basic x11 (Linux GUI)...\n\nA quick look at using x11/xinit manually.\n\nThis video explores the fundamentals of the X11 display server and how to use xinit to manually start and configure the Linux graphical user interface without relying on a display manager.\n\n## Topics Covered\n\n- **X11/Xorg basics** - Understanding the display server\n- **xinit usage** - Manually starting X sessions\n- **GRUB configuration** - Boot-time options\n- **Runlevels** - Understanding system initialization modes\n- **Comparison with Wayland** - The modern alternative to X11\n\n## Why Learn Manual X11?\n\nUnderstanding how to manually start and configure X11 is valuable for:\n\n- Debugging display issues\n- Creating minimal desktop setups\n- Understanding how display managers work under the hood\n- Building custom Linux environments\n- Learning the foundations before Wayland fully takes over\n\nWhile Wayland is becoming the standard for modern Linux desktops, X11 knowledge remains useful for troubleshooting, legacy systems, and understanding Linux graphics architecture.\n\n## Key Concepts\n\n- The `.xinitrc` file for session configuration\n- Starting window managers manually\n- Display server architecture\n- The relationship between X11, window managers, and desktop environments\n\n[Watch on YouTube](https://youtube.com/watch?v=xv3kgsm4wk0)"
    },
    {
        "id": "managing-linux-shell-processes",
        "title": "Managing Linux Shell Processes",
        "date": "2017-12-27",
        "category": "Linux",
        "tags": [
            "bg",
            "fg",
            "linux",
            "processes",
            "jobs",
            "job-control",
            "terminal",
            "background",
            "foreground"
        ],
        "videoId": "VVm37hZz6WU",
        "excerpt": "How to manage stuff you start in a shell",
        "content": "# Managing Linux Shell Processes\n\nHow to manage stuff you start in a shell.\n\n## The Problem\n\nYou start a long-running process and your terminal is locked. Or you accidentally close a terminal and lose your running program. Understanding process management solves these problems.\n\n## Key Commands\n\n### `jobs` - List Background Jobs\nShows all jobs running in the current shell session:\n```bash\njobs\n```\n\n### `bg` - Send to Background\nResume a stopped job in the background:\n```bash\nbg %1\n```\n\n### `fg` - Bring to Foreground\nBring a background job to the foreground:\n```bash\nfg %1\n```\n\n### `Ctrl+Z` - Suspend a Process\nPauses the current foreground process and returns you to the shell.\n\n### `&` - Start in Background\nRun a command in the background from the start:\n```bash\nlong_running_command &\n```\n\n## Practical Workflow\n\n1. Start a process normally\n2. Realize you need the terminal back\n3. Press `Ctrl+Z` to suspend it\n4. Type `bg` to continue it in the background\n5. Use `jobs` to check its status\n6. Use `fg` when you need to interact with it again\n\n## Handling Locked Terminals\n\nIf your terminal appears frozen:\n- The process might be waiting for input\n- Try `Ctrl+C` to interrupt\n- Try `Ctrl+Z` to suspend\n- Check `jobs` to see what's running\n\n## Job Control Basics\n\n- `%1`, `%2`, etc. refer to job numbers from `jobs` output\n- `%%` or `%+` refers to the current job\n- `%-` refers to the previous job\n\nUnderstanding process management is crucial for efficient Linux terminal usage, allowing you to multitask and control running applications effectively.\n\n[Watch on YouTube](https://youtube.com/watch?v=VVm37hZz6WU)"
    },
    {
        "id": "how-to-chroot",
        "title": "How To Chroot",
        "date": "2017-12-14",
        "category": "Linux",
        "tags": [
            "chroot",
            "linux",
            "tutorial",
            "x11",
            "system-administration",
            "troubleshooting"
        ],
        "videoId": "zf781j4s3lA",
        "excerpt": "How to chroot (aka: Change root) into a different Linux os.",
        "content": "# How To Chroot\n\nHow to chroot (aka: Change root) into a different Linux OS.\n\nThis tutorial covers the working X11 method for changing root into a different Linux operating system.\n\n## What is Chroot?\n\nChroot (change root) is a Unix operation that changes the apparent root directory for the current running process and its children. This creates an isolated environment where the process sees a different filesystem root than the actual system root.\n\n## Use Cases\n\n- **System Recovery**: Access a broken Linux installation from a live USB to repair boot issues, fix configurations, or reinstall packages\n- **Running X11 Applications**: The method shown allows running graphical applications from the chrooted environment\n- **Testing**: Safely test software in an isolated environment\n- **Package Management**: Install or update packages on a different Linux installation\n\n## The X11 Method\n\nThis tutorial demonstrates a working method for running X11 (graphical) applications from within a chroot environment, which requires proper setup of display permissions and environment variables.\n\n## Music Credits\n\nEnd song: \"Tom Perry\" by Twin Musicom is licensed under a Creative Commons Attribution license.\n- Source: http://www.twinmusicom.org/song/245/\n- Artist: http://www.twinmusicom.org\n\n[Watch on YouTube](https://youtube.com/watch?v=zf781j4s3lA)"
    },
    {
        "id": "deepdream-fractal-zoom",
        "title": "DeepDream Fractal Zoom",
        "date": "2017-12-11",
        "category": "AI/ML",
        "tags": [
            "deepdream",
            "neural network",
            "machine learning",
            "fractal",
            "google",
            "ai art",
            "deep dream"
        ],
        "videoId": "mB1rcnuHPYk",
        "excerpt": "Watch the video by \\\"Maths Town\\\". That's what I used as input for my Neural Network.",
        "content": "# DeepDream Fractal Zoom\n\nThis video was generated using a neural network trained for many hours, combining Google's DeepDream technology with fractal zoom imagery.\n\n## How It Was Made\n\nThe input for the neural network was the first 1500 255x255 snapshots at 1 second intervals from a fractal zoom video by \"Maths Town\":\nhttps://www.youtube.com/watch?v=pCpLWbHVNhk\n\nThe video was generated via a few tweaks to Google's DeepDream project:\nhttps://github.com/google/deepdream\n\n## About DeepDream\n\nDeepDream is a computer vision program created by Google that uses a convolutional neural network to find and enhance patterns in images. The algorithm amplifies the patterns it detects, creating surreal, dream-like imagery.\n\n## Technical Details\n\n- **Training time**: Many hours of neural network training\n- **Input resolution**: 255x255 pixel snapshots\n- **Frame count**: 1500 frames\n- **Source material**: Fractal zoom animation\n\nThe combination of mathematical fractals with neural network pattern recognition creates a unique visual experience that blends mathematical precision with AI-generated psychedelic imagery.\n\nMore details on the technical implementation are planned for future content.\n\n[Watch on YouTube](https://youtube.com/watch?v=mB1rcnuHPYk)"
    },
    {
        "id": "fractals-deepdream-still-training",
        "title": "fractals + deepdream.. Still training",
        "date": "2017-12-10",
        "category": "AI/ML",
        "tags": [
            "deepdream",
            "fractals",
            "machine-learning",
            "neural-network",
            "video-processing",
            "google",
            "image-recognition"
        ],
        "videoId": "qV3VH56Dw48",
        "excerpt": "Watch the video by Maths Town. That's what I used as input.",
        "content": "# fractals + deepdream.. Still training\n\nThis project combines fractal imagery with Google's DeepDream neural network, creating a mesmerizing visualization that demonstrates what happens when you feed mathematical fractal patterns through a neural network trained on image recognition.\n\n## Input Data\n\nThe input consists of the first 1500 snapshots taken from a fractal video by \"Maths Town\":\n- Resolution: 255x255 pixels per frame\n- Sampling rate: 1 second intervals\n- Source video: [Maths Town Fractals](https://www.youtube.com/watch?v=pCpLWbHVNhk)\n\n## DeepDream Processing\n\nThe neural network was still in training during the creation of this video. DeepDream works by using a convolutional neural network to find and enhance patterns in images, creating the characteristic dream-like, psychedelic visuals.\n\nRelated DeepDream video: [DeepDream Video](https://www.youtube.com/watch?v=SCE-QeDfXtA)\n\n## Music Credits\n\nEnd song: \"Tom Perry\" by Twin Musicom is licensed under a Creative Commons Attribution license.\n- Source: http://www.twinmusicom.org/song/245/\n- Artist: http://www.twinmusicom.org\n\n[Watch on YouTube](https://youtube.com/watch?v=qV3VH56Dw48)"
    },
    {
        "id": "zeldamash",
        "title": "zeldaMash",
        "date": "2017-04-30",
        "category": "AI/ML",
        "tags": [
            "neural-network",
            "zelda",
            "music",
            "ai",
            "deepdream",
            "rnn",
            "machine-learning",
            "generative-art"
        ],
        "videoId": "LAfboPzQL7Y",
        "excerpt": "Video was generated by a neural network trained on images of fire.... still needs a lot of work.",
        "content": "# zeldaMash\n\nVideo was generated by a neural network trained on images of fire - still needs a lot of work.\n\nThis project combines two neural network experiments to create an AI-generated audiovisual experience.\n\n## The Visual Component: DeepDream\n\nThe visuals were created using **Google's DeepDream** algorithm. DeepDream works by running an image classification neural network in reverse - instead of identifying what's in an image, it enhances patterns the network \"sees,\" creating surreal, dream-like imagery.\n\nFor this project, the network was trained on images of fire, resulting in flame-like patterns appearing throughout the video.\n\n**Based on:** [Google DeepDream](https://github.com/google/deepdream)\n\n## The Audio Component: Recurrent Neural Network\n\nThe music was generated by a **recurrent neural network (RNN)** trained on 15 Zelda songs. RNNs are particularly good at learning sequential data like music, as they can remember context from earlier in a sequence.\n\nThe network learned patterns from classic Legend of Zelda compositions and generated new music that captures elements of the game series' iconic sound.\n\n**Based on:** [Biaxial RNN Music Composition](https://github.com/hexahedria/biaxial-rnn-music-composition)\n\n## An Early AI Experiment\n\nThis was an early experiment in AI-generated multimedia content, exploring:\n\n- **Generative art** - Using neural networks to create visual art\n- **Music generation** - AI composition based on training data\n- **Combining modalities** - Merging AI-generated audio and video\n\nWhile the creator notes it \"still needs a lot of work,\" this project represents the kind of experimentation that eventually led to today's more sophisticated AI art and music generation tools.\n\n[Watch on YouTube](https://youtube.com/watch?v=LAfboPzQL7Y)"
    },
    {
        "id": "nn-trained-on-zelda-music-overfit-example",
        "title": "NN trained on Zelda music (Overfit example)",
        "date": "2017-04-16",
        "category": "AI/ML",
        "tags": [
            "neural-network",
            "machine-learning",
            "music",
            "zelda",
            "ai",
            "rnn",
            "overfitting",
            "music-generation"
        ],
        "videoId": "xHc5NSS1PRE",
        "excerpt": "recurrent neural network trained on 15 Zelda songs.",
        "content": "# NN trained on Zelda music (Overfit example)\n\nRecurrent neural network trained on 15 Zelda songs.\n\n## The Experiment\n\nThis project used a recurrent neural network (RNN) to learn from and generate music in the style of The Legend of Zelda video game series.\n\n## The Overfitting Problem\n\n### What Happened\nThe sample size was too small and the network became overfit.\n\n### What is Overfitting?\nOverfitting occurs when a neural network:\n- Memorizes the training data instead of learning patterns\n- Performs well on training data but poorly on new inputs\n- Essentially \"remembers\" rather than \"learns\"\n\n### The Result\nThe network learned to reproduce the training songs almost exactly rather than generating truly original compositions. But hey, I can make a really long Zelda song if I want!\n\n## Other Outputs\n\nThe other example songs generated were... more original... but less nice sounding. This is the trade-off with neural network music generation - too much training leads to copying, too little leads to chaos.\n\n## Lessons Learned\n\n- 15 songs is not enough training data for music generation\n- Overfitting is a real challenge in creative ML applications\n- Finding the right amount of training is crucial\n- Sometimes the \"wrong\" result is still interesting\n\n## Technical Basis\n\nBased on the biaxial-rnn-music-composition project:\nhttps://github.com/hexahedria/biaxial-rnn-music-composition\n\n[Watch on YouTube](https://youtube.com/watch?v=xHc5NSS1PRE)"
    }
];

// About / Resume data
const aboutData = {
    name: "David Hamner",
    title: "Linux Enthusiast & Developer",
    tagline: "GNU/Linux Stuff",
    bio: "I explore Linux phones, home automation, 3D printing, and open-source software. I believe in privacy, user freedom, and technology that respects its users.",
    skills: [
        "Linux System Administration",
        "Python Development",
        "Embedded Systems",
        "3D Printing & CAD",
        "Home Automation",
        "Mobile Linux Development"
    ],
    links: {
        youtube: "https://youtube.com/@DavidHamner",
        github: "https://github.com/ruapotato",
        linkedin: "https://www.linkedin.com/in/david-hamner-a1633635/",
        website: "https://hackers-game.com"
    },
    expertise: [
        { area: "Linux Phones", level: 95, description: "Librem 5, PinePhone, FLX1s" },
        { area: "Home Automation", level: 85, description: "Home Assistant, VOSK, Python" },
        { area: "3D Printing", level: 80, description: "OpenSCAD, FDM printing" },
        { area: "Embedded Linux", level: 75, description: "ARM devices, GPIO, robotics" }
    ]
};

// Export
if (typeof module !== 'undefined' && module.exports) {
    module.exports = { blogPosts, aboutData };
}
