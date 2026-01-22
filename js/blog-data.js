/**
 * Blog Data - David Hamner's Linux Phone & Tech Content
 * Source: YouTube channel + HackersGame.com archive
 */

const blogPosts = [
    // YouTube Content - Linux Phone Priority
    {
        id: 'linux-phone-that-works',
        title: 'Linux Phone That Actually Works - FLX1s Review',
        date: '2024-01-15',
        category: 'Linux Phones',
        tags: ['linux-phone', 'flx1s', 'fury-labs', 'review', 'mobile-linux'],
        videoId: 'lITN4HJ3M5Q',
        excerpt: "Today we're looking at the FLX1S by Fury Labs. It's one of those rare Linux devices that's actually good at being a phone.",
        content: `# Linux Phone That Actually Works - FLX1s Review

Today we're looking at the FLX1S by Fury Labs. It's one of those rare Linux devices that's actually good at being a phone. Let's take a look.

## What's in the Box

- The phone itself
- Some cute stickers
- Glass screen protector (I ordered separately)
- A case
- Free pair of USB-C headphones (nice surprise since there's no headphone jack)

## First Impressions

Quick note on the screen protector - it's glass. Mine cracked in shipping. I'd love to see a film screen protector option instead.

Let me save you some confusion: On day one, I thought the side button was the power button, and the others were programmable. Turns out there are hardware kill switches on this thing!

## The Good

- Actually works as a phone
- Hardware kill switches for privacy
- Real Linux - not Android
- Good build quality

## The Reality

This is one of those rare Linux devices that bridges the gap between "Linux phone enthusiast" and "I just need a phone that works."

📺 [Watch on YouTube](https://youtube.com/watch?v=lITN4HJ3M5Q)`
    },
    {
        id: 'librem-5-launch-ready',
        title: 'Is the Librem 5 Ready for Launch?',
        date: '2019-09-24',
        category: 'Linux Phones',
        tags: ['linux-phone', 'librem-5', 'purism', 'review', 'development'],
        videoId: '0tuLkga0dmY',
        excerpt: "Progress on the dev kit has been absolutely crazy. September 15th was the last time I had to flash it - just nine days before the initial launch.",
        content: `# Is the Librem 5 Ready for Launch?

Progress on the dev kit has been absolutely crazy at the moment. September 15th was the last time I had to flash the dev kit - just nine days before the initial launch of the Librem 5.

## After Flashing

After flashing, it was clear that this version was not ready for the public. For example, on the lockscreen when you enter your PIN code, the key presses remain highlighted - a bit of a security fail.

We can also see the unfinished app lineup including GNOME Tweaks, Vim, and non-final icons.

## Browser Performance

If you recall in my last video, the web browser performance is basically unusable in certain situations. Heavy JavaScript sites bring the device to its knees.

## The Verdict

Is it ready? Not quite for daily driver use, but the progress is undeniable. The foundation is solid, and things are improving rapidly.

📺 [Watch on YouTube](https://youtube.com/watch?v=0tuLkga0dmY)`
    },
    {
        id: 'librem-5-stuff-whatnot',
        title: 'Librem 5 | Stuff and Whatnot',
        date: '2019-10-01',
        category: 'Linux Phones',
        tags: ['linux-phone', 'librem-5', 'purism', 'apps', 'development'],
        videoId: 'GTDzV4rxPwc',
        excerpt: "This is what the early version of the launcher/app drawer looked like. It only loaded the primary apps and left all other .desktop files on display.",
        content: `# Librem 5 | Stuff and Whatnot

This is what the early version of the launcher/app drawer looked like. It only loaded the primary apps and left all other .desktop files on display.

## The New Launcher

What this meant was if you installed something new, the desktop launcher would be missing. After flashing the new DFK image, this is all changed now.

The launcher displays all installed desktop files, so for the first time we can see what is pre-installed on the dev kit. And I must say, some of this stuff was not expected!

## Pre-installed Apps

The first thing I thought a little odd was there were a few redundant applications. We now have two terminal apps - King's Cross and another one.

## Progress Report

Every flash brings new improvements. The dev kit is really starting to feel like a proper phone platform.

📺 [Watch on YouTube](https://youtube.com/watch?v=GTDzV4rxPwc)`
    },
    {
        id: 'robot-librem-hacking',
        title: 'Robot and Librem 5 Hacking',
        date: '2019-11-15',
        category: 'Linux Phones',
        tags: ['linux-phone', 'librem-5', 'hacking', 'robotics', 'keyboard'],
        videoId: 'j_PzGz8dePY',
        excerpt: "Screen-capture, keyboard input, and a hacky way to install stuff. Plus, hear about the robot I'm working on!",
        content: `# Robot and Librem 5 Hacking

Screen-capture, keyboard input, and a hacky way to install stuff. Stick around to the end to hear about the robot I'm working on!

## On-Screen Keyboard

Out of the box, the Librem 5 has an on-screen keyboard that looks and feels good. You do have the option to switch out the default for some alternatives.

At the moment, the default keyboard alternative is the only one I know about. The default is a bit better-looking though.

## Bluetooth Keyboard

Bluetooth is also a good option to connect a keyboard. Using this mini keyboard/mouse thing, I'm able to enter text in X11 windows as well as native Wayland windows.

## The Robot Project

I've been working on a robotics project that integrates with the Librem 5. The phone's GPIO and USB capabilities make it an interesting platform for hardware hacking.

📺 [Watch on YouTube](https://youtube.com/watch?v=j_PzGz8dePY)`
    },
    {
        id: 'librem-5-gaming',
        title: 'Librem 5 | Gaming',
        date: '2019-12-01',
        category: 'Linux Phones',
        tags: ['linux-phone', 'librem-5', 'gaming', 'open-source'],
        videoId: 'a1ENmWmwE8k',
        excerpt: "Sebastian, one of the badass devs over at Purism, messed around with some common open-source games on the Librem 5. Let's check out what he got running!",
        content: `# Librem 5 | Gaming

Sebastian, one of the badass devs over at Purism, messed around with some common open-source games on the Librem 5. Let's check out what he got running and go over some of the useful tweaks he used.

## Credit Where Due

All credit for this goes to Sebastian. It is truly amazing what an experienced developer can do in such a short amount of time.

## Warning

Do note: applying some of these tweaks have side effects. It is good practice to have a valid backup, and it's not a bad idea to check out the steps to reflash the phone if something does go wrong.

If you're not feeling that adventurous, don't worry - just watching is fine!

## Games That Work

Several open-source games have been tested:
- Classic 2D games work well
- Some 3D games run with tweaks
- Touch controls need adaptation

## The Takeaway

Gaming on a Linux phone is possible! It's not going to replace your Switch, but for casual open-source games, it's actually pretty decent.

📺 [Watch on YouTube](https://youtube.com/watch?v=a1ENmWmwE8k)`
    },

    // Original HackersGame Blog Posts
    {
        id: 'home-automation-vosk',
        title: 'Home Automation: Home Assistant, VOSK, and Python',
        date: '2022-01-03',
        category: 'Home Automation',
        tags: ['linux', 'home-assistant', 'python', 'vosk', 'voice-control'],
        excerpt: "I have wanted to violate intellectual property in Star Trek since my youth. There is just something cool about barking orders at your computer.",
        content: `# Home Automation: Home Assistant, VOSK, and Python

I have wanted to violate intellectual property in Star Trek since my youth. It's not like the Federation has copyright issues. There is just something cool about barking orders at your computer just to have them executed.

## The Setup

This project combines:
- **Home Assistant** - The open-source home automation platform
- **VOSK** - Offline speech recognition that actually works
- **Python** - Gluing it all together

## Why VOSK?

Unlike cloud-based solutions, VOSK runs entirely offline. Your voice commands stay on your local network. No Amazon, no Google, no privacy concerns.

## The Code

The basic flow is:
1. VOSK listens for wake word
2. Captures your command
3. Python parses the intent
4. Sends command to Home Assistant API

\`\`\`python
import vosk
import homeassistant

# Wake word detection
if "computer" in transcription:
    command = listen_for_command()
    execute(command)
\`\`\`

## Results

"Computer, lights on" actually works now. Living the dream.`
    },
    {
        id: 'containerization-linux-phones',
        title: 'Containerization on Linux Phones',
        date: '2021-10-11',
        category: 'Linux Phones',
        tags: ['linux-phone', 'librem-5', 'containers', 'systemd-nspawn', 'security'],
        excerpt: "Playing around with systemd-nspawn and the Librem 5. This could be used to run containerized apps that can't access your private files.",
        content: `# Containerization on Linux Phones

Playing around with systemd-nspawn and the Librem 5. This could be used to run containerized apps that can't access your private files.

## Why Containers on a Phone?

Mobile security is a mess. Apps want access to everything. But what if we could sandbox untrusted apps in containers?

## systemd-nspawn

Unlike Docker, systemd-nspawn is built into systemd - which the Librem 5 already uses. It's lightweight and perfect for this use case.

## The Setup

\`\`\`bash
# Create a minimal Debian container
debootstrap --arch=arm64 bookworm /var/lib/machines/sandbox

# Launch it
systemd-nspawn -D /var/lib/machines/sandbox
\`\`\`

## Use Cases

- Run untrusted apps without access to your contacts/photos
- Test software in isolation
- Keep work and personal data separated

## Performance

Surprisingly good. The overhead is minimal since we're not virtualizing - just isolating.`
    },
    {
        id: 'linux-filesystem-3d',
        title: 'GNU/Linux Filesystem in 3D',
        date: '2021-03-08',
        category: 'Linux',
        tags: ['linux', 'filesystem', 'education', '3d', 'visualization'],
        excerpt: "Explaining how to use the command line and nuances of absolute vs. relative paths is hard. To help explain the hierarchical nature of Unix filesystems, I built a 3D visualization.",
        content: `# GNU/Linux Filesystem in 3D

Explaining how to use the command line and nuances of absolute vs. relative paths is rather hard to describe and wrap your brain around.

## The Problem

New Linux users struggle with:
- Understanding / vs ~/
- Navigating with cd
- The tree structure concept
- Where things actually are

## The Solution

I built a 3D visualization of the Linux filesystem hierarchy. You can literally fly through /usr, /etc, /home and see how it all connects.

## Key Directories

\`\`\`
/           Root - everything starts here
├── bin     Essential binaries
├── etc     Configuration files
├── home    User home directories
├── usr     User programs
├── var     Variable data (logs, etc)
└── tmp     Temporary files
\`\`\`

## Try It Yourself

\`\`\`bash
# Start exploring!
cd /
ls -la
tree -L 2
\`\`\``
    },
    {
        id: '3d-printing-phone-case',
        title: '3D Printing a Phone Case',
        date: '2020-11-16',
        category: 'Hardware',
        tags: ['3d-printing', 'librem-5', 'diy', 'hardware', 'linux-phone'],
        excerpt: "Designing and 3D printing a custom case for the Librem 5 Linux phone. Because niche devices need custom solutions.",
        content: `# 3D Printing a Phone Case

Designing and 3D printing a custom case for the Librem 5 Linux phone.

## Why Custom?

The Librem 5 is a niche device. Cases aren't exactly flooding the market. Time to make my own.

## The Process

1. **Measure** - Calipers are your friend
2. **Design** - OpenSCAD for parametric modeling
3. **Print** - TPU for flexibility
4. **Iterate** - First print is never perfect

## OpenSCAD Code

\`\`\`openscad
// Librem 5 case
phone_length = 150;
phone_width = 75;
phone_depth = 15;
wall = 2;

difference() {
    cube([phone_length+wall*2, phone_width+wall*2, phone_depth]);
    translate([wall, wall, wall])
        cube([phone_length, phone_width, phone_depth]);
}
\`\`\`

## Results

Took 3 iterations to get the fit right. The final version has:
- Cutouts for all ports
- Kill switch access
- Camera bump accommodation`
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
