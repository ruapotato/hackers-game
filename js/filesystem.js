/**
 * Virtual Filesystem for Hackers Game Desktop
 * Simulates a Unix-like filesystem structure
 */

class VirtualFS {
    constructor() {
        this.root = {
            type: 'dir',
            name: '/',
            children: {
                'home': {
                    type: 'dir',
                    name: 'home',
                    children: {
                        'hacker': {
                            type: 'dir',
                            name: 'hacker',
                            children: {
                                'documents': {
                                    type: 'dir',
                                    name: 'documents',
                                    children: {
                                        'readme.txt': {
                                            type: 'file',
                                            name: 'readme.txt',
                                            content: `Welcome to Hackers Game!

This is your personal hacking station. Here you'll find tools, challenges, and secrets waiting to be discovered.

Explore the filesystem, run commands in the terminal, and see what you can uncover.

Remember: The best hackers are curious ones.

Happy hacking!
- The Hackers Game Team`,
                                            icon: '📄'
                                        },
                                        'notes.md': {
                                            type: 'file',
                                            name: 'notes.md',
                                            content: `# Hacking Notes

## Things to try:
- [ ] Explore /etc for system configs
- [ ] Check /var/log for interesting logs
- [ ] Find hidden files (hint: ls -la)
- [ ] Try the 'hack' command in terminal
- [ ] Look for .secret files

## Useful commands:
- ls - list files
- cd - change directory
- cat - read files
- pwd - print working directory
- help - show all commands`,
                                            icon: '📝'
                                        }
                                    }
                                },
                                'downloads': {
                                    type: 'dir',
                                    name: 'downloads',
                                    children: {}
                                },
                                'projects': {
                                    type: 'dir',
                                    name: 'projects',
                                    children: {
                                        'linux-phone-that-works': {
                                            type: 'dir',
                                            name: 'linux-phone-that-works',
                                            children: {
                                                'README.md': {
                                                    type: 'file',
                                                    name: 'README.md',
                                                    content: `# Linux Phone That Actually Works - FLX1s Review

📺 Video: https://youtube.com/watch?v=lITN4HJ3M5Q

## Project Files
- script.txt - Full transcript
- notes.txt - Recording notes`,
                                                    icon: '📱'
                                                },
                                                'script.txt': {
                                                    type: 'file',
                                                    name: 'script.txt',
                                                    content: `LINUX PHONE THAT ACTUALLY WORKS - FLX1s Review
==============================================
Video: https://youtube.com/watch?v=lITN4HJ3M5Q

Hello and welcome. Today we're looking at the FLX1S by Fury Labs.
It's one of those rare Linux devices that's actually good at being
a phone. Let's take a look.

WHAT'S IN THE BOX
-----------------
- The phone itself
- Some cute stickers
- Glass screen protector (ordered separately)
- A case
- Free USB-C headphones (nice surprise - no headphone jack)

FIRST IMPRESSIONS
-----------------
Quick note on the screen protector - it's glass. Mine cracked in
shipping. I'd love to see a film screen protector option instead.

Let me save you some confusion: On day one, I thought the side
button was the power button. Turns out there are hardware kill
switches on this thing!

THE GOOD
--------
- Actually works as a phone
- Hardware kill switches for privacy
- Real Linux - not Android
- Good build quality

This is one of those rare Linux devices that bridges the gap between
"Linux phone enthusiast" and "I just need a phone that works."`,
                                                    icon: '📝'
                                                }
                                            }
                                        },
                                        'librem-5-launch-ready': {
                                            type: 'dir',
                                            name: 'librem-5-launch-ready',
                                            children: {
                                                'README.md': {
                                                    type: 'file',
                                                    name: 'README.md',
                                                    content: `# Is the Librem 5 Ready for Launch?

📺 Video: https://youtube.com/watch?v=0tuLkga0dmY

## Project Files
- script.txt - Full transcript
- notes.txt - Recording notes`,
                                                    icon: '📱'
                                                },
                                                'script.txt': {
                                                    type: 'file',
                                                    name: 'script.txt',
                                                    content: `IS THE LIBREM 5 READY FOR LAUNCH?
==================================
Video: https://youtube.com/watch?v=0tuLkga0dmY

Progress on the dev kit has been absolutely crazy at the moment.
September 15th was the last time I had to flash the dev kit -
just nine days before the initial launch of the Librem 5.

AFTER FLASHING
--------------
After flashing, it was clear that this version was not ready for
the public. For example, on the lockscreen when you enter your
PIN code, the key presses remain highlighted - a bit of a
security fail.

We can also see the unfinished app lineup including GNOME Tweaks,
Vim, and non-final icons.

BROWSER PERFORMANCE
-------------------
If you recall in my last video, the web browser performance is
basically unusable in certain situations. Heavy JavaScript sites
bring the device to its knees.

THE VERDICT
-----------
Is it ready? Not quite for daily driver use, but the progress is
undeniable. The foundation is solid, and things are improving rapidly.`,
                                                    icon: '📝'
                                                }
                                            }
                                        },
                                        'librem-5-gaming': {
                                            type: 'dir',
                                            name: 'librem-5-gaming',
                                            children: {
                                                'README.md': {
                                                    type: 'file',
                                                    name: 'README.md',
                                                    content: `# Librem 5 | Gaming

📺 Video: https://youtube.com/watch?v=a1ENmWmwE8k

## Project Files
- script.txt - Full transcript
- games-tested.txt - List of games tested`,
                                                    icon: '🎮'
                                                },
                                                'script.txt': {
                                                    type: 'file',
                                                    name: 'script.txt',
                                                    content: `LIBREM 5 | GAMING
=================
Video: https://youtube.com/watch?v=a1ENmWmwE8k

Sebastian, one of the badass devs over at Purism, messed around
with some common open-source games on the Librem 5. Let's check
out what he got running and go over some of the useful tweaks.

CREDIT WHERE DUE
----------------
All credit for this goes to Sebastian. It is truly amazing what
an experienced developer can do in such a short amount of time.

WARNING
-------
Applying some of these tweaks have side effects. It is good
practice to have a valid backup, and it's not a bad idea to
check out the steps to reflash the phone if something goes wrong.

GAMES THAT WORK
---------------
Several open-source games have been tested:
- Classic 2D games work well
- Some 3D games run with tweaks
- Touch controls need adaptation

THE TAKEAWAY
------------
Gaming on a Linux phone is possible! It's not going to replace
your Switch, but for casual open-source games, it's decent.`,
                                                    icon: '📝'
                                                },
                                                'games-tested.txt': {
                                                    type: 'file',
                                                    name: 'games-tested.txt',
                                                    content: `Games Tested on Librem 5
========================

WORKING WELL:
- SuperTux
- Neverball
- OpenTTD
- Minetest (with tweaks)

NEEDS WORK:
- Anything requiring OpenGL 3+
- Games with fixed resolution

TIPS:
- Use SDL_VIDEODRIVER=wayland
- Lower resolution helps
- Touch controls are your friend`,
                                                    icon: '🎮'
                                                }
                                            }
                                        },
                                        'robot-librem-hacking': {
                                            type: 'dir',
                                            name: 'robot-librem-hacking',
                                            children: {
                                                'README.md': {
                                                    type: 'file',
                                                    name: 'README.md',
                                                    content: `# Robot and Librem 5 Hacking

📺 Video: https://youtube.com/watch?v=j_PzGz8dePY

## Project Files
- script.txt - Full transcript
- robot-code/ - Robot project files (coming soon)`,
                                                    icon: '🤖'
                                                },
                                                'script.txt': {
                                                    type: 'file',
                                                    name: 'script.txt',
                                                    content: `ROBOT AND LIBREM 5 HACKING
==========================
Video: https://youtube.com/watch?v=j_PzGz8dePY

Screen-capture, keyboard input, and a hacky way to install stuff.
Stick around to the end to hear about the robot I'm working on!

ON-SCREEN KEYBOARD
------------------
Out of the box, the Librem 5 has an on-screen keyboard that looks
and feels good. You do have the option to switch out the default.

BLUETOOTH KEYBOARD
------------------
Bluetooth is also a good option to connect a keyboard. Using this
mini keyboard/mouse thing, I'm able to enter text in X11 windows
as well as native Wayland windows.

THE ROBOT PROJECT
-----------------
I've been working on a robotics project that integrates with the
Librem 5. The phone's GPIO and USB capabilities make it an
interesting platform for hardware hacking.

Stay tuned for more updates on this project!`,
                                                    icon: '📝'
                                                }
                                            }
                                        },
                                        'home-automation-vosk': {
                                            type: 'dir',
                                            name: 'home-automation-vosk',
                                            children: {
                                                'README.md': {
                                                    type: 'file',
                                                    name: 'README.md',
                                                    content: `# Home Automation: Home Assistant, VOSK, and Python

## Project Files
- script.txt - Blog post / notes
- voice_control.py - Example code`,
                                                    icon: '🏠'
                                                },
                                                'script.txt': {
                                                    type: 'file',
                                                    name: 'script.txt',
                                                    content: `HOME AUTOMATION: HOME ASSISTANT, VOSK, AND PYTHON
=================================================

I have wanted to violate intellectual property in Star Trek since
my youth. It's not like the Federation has copyright issues.
There is just something cool about barking orders at your
computer just to have them executed.

THE SETUP
---------
This project combines:
- Home Assistant - The open-source home automation platform
- VOSK - Offline speech recognition that actually works
- Python - Gluing it all together

WHY VOSK?
---------
Unlike cloud-based solutions, VOSK runs entirely offline. Your
voice commands stay on your local network. No Amazon, no Google,
no privacy concerns.

THE BASIC FLOW
--------------
1. VOSK listens for wake word
2. Captures your command
3. Python parses the intent
4. Sends command to Home Assistant API

RESULTS
-------
"Computer, lights on" actually works now. Living the dream.`,
                                                    icon: '📝'
                                                },
                                                'voice_control.py': {
                                                    type: 'file',
                                                    name: 'voice_control.py',
                                                    content: `#!/usr/bin/env python3
"""
Voice Control for Home Assistant using VOSK
"""

import vosk
import json
import requests
from sounddevice import RawInputStream

# Home Assistant config
HA_URL = "http://homeassistant.local:8123"
HA_TOKEN = "your_token_here"

WAKE_WORD = "computer"

def send_command(entity, action):
    """Send command to Home Assistant"""
    headers = {
        "Authorization": f"Bearer {HA_TOKEN}",
        "Content-Type": "application/json"
    }
    data = {"entity_id": entity}
    requests.post(
        f"{HA_URL}/api/services/light/{action}",
        headers=headers,
        json=data
    )

def parse_command(text):
    """Parse voice command and execute"""
    text = text.lower()

    if "lights on" in text:
        send_command("light.living_room", "turn_on")
        print("Lights on!")
    elif "lights off" in text:
        send_command("light.living_room", "turn_off")
        print("Lights off!")
    # Add more commands here

def main():
    model = vosk.Model("model")
    recognizer = vosk.KaldiRecognizer(model, 16000)

    print("Listening for wake word...")

    with RawInputStream(samplerate=16000, blocksize=8000,
                       dtype='int16', channels=1) as stream:
        while True:
            data = stream.read(4000)[0]
            if recognizer.AcceptWaveform(bytes(data)):
                result = json.loads(recognizer.Result())
                text = result.get("text", "")

                if WAKE_WORD in text:
                    print("Wake word detected!")
                    # Listen for command
                    # ... (implementation continues)

if __name__ == "__main__":
    main()`,
                                                    icon: '🐍'
                                                }
                                            }
                                        },
                                        'containerization-phones': {
                                            type: 'dir',
                                            name: 'containerization-phones',
                                            children: {
                                                'README.md': {
                                                    type: 'file',
                                                    name: 'README.md',
                                                    content: `# Containerization on Linux Phones

## Project Files
- script.txt - Blog post / notes
- setup.sh - Container setup script`,
                                                    icon: '📦'
                                                },
                                                'script.txt': {
                                                    type: 'file',
                                                    name: 'script.txt',
                                                    content: `CONTAINERIZATION ON LINUX PHONES
================================

Playing around with systemd-nspawn and the Librem 5. This could
be used to run containerized apps that can't access your private files.

WHY CONTAINERS ON A PHONE?
--------------------------
Mobile security is a mess. Apps want access to everything. But
what if we could sandbox untrusted apps in containers?

SYSTEMD-NSPAWN
--------------
Unlike Docker, systemd-nspawn is built into systemd - which the
Librem 5 already uses. It's lightweight and perfect for this use case.

USE CASES
---------
- Run untrusted apps without access to your contacts/photos
- Test software in isolation
- Keep work and personal data separated

PERFORMANCE
-----------
Surprisingly good. The overhead is minimal since we're not
virtualizing - just isolating.`,
                                                    icon: '📝'
                                                },
                                                'setup.sh': {
                                                    type: 'file',
                                                    name: 'setup.sh',
                                                    content: `#!/bin/bash
# Container setup for Librem 5

# Create a minimal Debian container
sudo debootstrap --arch=arm64 bookworm /var/lib/machines/sandbox

# Launch the container
sudo systemd-nspawn -D /var/lib/machines/sandbox

# Inside container: install basics
# apt update && apt install -y vim htop

# To start container as service:
# sudo machinectl start sandbox

# To get a shell:
# sudo machinectl shell sandbox`,
                                                    icon: '📜'
                                                }
                                            }
                                        }
                                    }
                                },
                                '.bashrc': {
                                    type: 'file',
                                    name: '.bashrc',
                                    content: `# ~/.bashrc
export PS1="\\u@hackers-game:\\w$ "
alias ll='ls -la'
alias cls='clear'

# Secret: try 'source ~/.secret_aliases'`,
                                    hidden: true,
                                    icon: '⚙️'
                                },
                                '.secret': {
                                    type: 'file',
                                    name: '.secret',
                                    content: `🏴 FLAG{y0u_f0und_th3_s3cr3t} 🏴

Congratulations! You found a hidden file.
There are more secrets hidden throughout the system...

Hint: Check /var/log/auth.log`,
                                    hidden: true,
                                    icon: '🔐'
                                }
                            }
                        }
                    }
                },
                'etc': {
                    type: 'dir',
                    name: 'etc',
                    children: {
                        'passwd': {
                            type: 'file',
                            name: 'passwd',
                            content: `root:x:0:0:root:/root:/bin/bash
daemon:x:1:1:daemon:/usr/sbin:/usr/sbin/nologin
hacker:x:1000:1000:Hacker:/home/hacker:/bin/bash
guest:x:1001:1001:Guest:/home/guest:/bin/sh
admin:x:1002:1002:Admin:/home/admin:/bin/bash`,
                            icon: '📋'
                        },
                        'shadow': {
                            type: 'file',
                            name: 'shadow',
                            content: `[ACCESS DENIED]

Nice try! This file requires root privileges.

Hint: Maybe there's a way to escalate privileges...`,
                            icon: '🔒'
                        },
                        'hosts': {
                            type: 'file',
                            name: 'hosts',
                            content: `127.0.0.1       localhost
127.0.1.1       hackers-game
192.168.1.100   secret-server
10.0.0.42       flag-vault`,
                            icon: '🌐'
                        },
                        'motd': {
                            type: 'file',
                            name: 'motd',
                            content: `
 _   _            _                    ____
| | | | __ _  ___| | _____ _ __ ___   / ___| __ _ _ __ ___   ___
| |_| |/ _\` |/ __| |/ / _ \\ '__/ __| | |  _ / _\` | '_ \` _ \\ / _ \\
|  _  | (_| | (__|   <  __/ |  \\__ \\ | |_| | (_| | | | | | |  __/
|_| |_|\\__,_|\\___|_|\\_\\___|_|  |___/  \\____|\\__,_|_| |_| |_|\\___|

Welcome to Hackers Game OS v2.0

"In a world of locked doors, the curious find the keys."

Type 'help' for available commands.
`,
                            icon: '📜'
                        }
                    }
                },
                'var': {
                    type: 'dir',
                    name: 'var',
                    children: {
                        'log': {
                            type: 'dir',
                            name: 'log',
                            children: {
                                'auth.log': {
                                    type: 'file',
                                    name: 'auth.log',
                                    content: `Jan 21 03:14:15 hackers-game sshd[1234]: Failed password for admin from 192.168.1.50
Jan 21 03:14:18 hackers-game sshd[1234]: Failed password for admin from 192.168.1.50
Jan 21 03:14:22 hackers-game sshd[1234]: Accepted password for admin from 192.168.1.50
Jan 21 03:15:00 hackers-game sudo: admin : TTY=pts/0 ; PWD=/home/admin ; USER=root ; COMMAND=/bin/cat /etc/shadow
Jan 21 03:15:05 hackers-game sudo: admin : TTY=pts/0 ; PWD=/root ; USER=root ; COMMAND=/bin/cat /root/.flag
Jan 21 03:22:42 hackers-game sshd[1337]: Connection from 10.0.0.42 port 31337

🏴 FLAG{l0g_f1l3s_t3ll_st0r13s} 🏴

Interesting... someone accessed /root/.flag. Maybe we should look there?`,
                                    icon: '📊'
                                },
                                'syslog': {
                                    type: 'file',
                                    name: 'syslog',
                                    content: `System log initialized.
Services started successfully.
Network interfaces configured.
Welcome to Hackers Game OS.`,
                                    icon: '📊'
                                }
                            }
                        },
                        'www': {
                            type: 'dir',
                            name: 'www',
                            children: {
                                'html': {
                                    type: 'dir',
                                    name: 'html',
                                    children: {
                                        'index.html': {
                                            type: 'file',
                                            name: 'index.html',
                                            content: `<!DOCTYPE html>
<html>
<head><title>Welcome</title></head>
<body>
<h1>Hackers Game Web Server</h1>
<p>Nothing to see here...</p>
<!-- TODO: Remove debug endpoint /api/debug -->
</body>
</html>`,
                                            icon: '🌐'
                                        }
                                    }
                                }
                            }
                        }
                    }
                },
                'root': {
                    type: 'dir',
                    name: 'root',
                    children: {
                        '.flag': {
                            type: 'file',
                            name: '.flag',
                            content: `🏴 FLAG{r00t_4cc3ss_gr4nt3d} 🏴

CONGRATULATIONS! You've reached the final flag!

You demonstrated:
- File system exploration
- Reading log files for clues
- Following the breadcrumb trail
- Persistence and curiosity

You have the mindset of a true hacker.
Welcome to the game. 🎮`,
                            hidden: true,
                            icon: '🏆'
                        },
                        '.bash_history': {
                            type: 'file',
                            name: '.bash_history',
                            content: `cd /var/log
cat auth.log
ssh admin@192.168.1.100
sudo -l
cat /etc/shadow`,
                            hidden: true,
                            icon: '📜'
                        }
                    }
                },
                'usr': {
                    type: 'dir',
                    name: 'usr',
                    children: {
                        'bin': {
                            type: 'dir',
                            name: 'bin',
                            children: {}
                        },
                        'share': {
                            type: 'dir',
                            name: 'share',
                            children: {
                                'games': {
                                    type: 'dir',
                                    name: 'games',
                                    children: {
                                        'README': {
                                            type: 'file',
                                            name: 'README',
                                            content: `🎮 HACKERS GAME - Coming Soon!

Mini-games and challenges will be added here.

For now, try the main Hackers Game app on your desktop!`,
                                            icon: '🎮'
                                        }
                                    }
                                }
                            }
                        }
                    }
                },
                'tmp': {
                    type: 'dir',
                    name: 'tmp',
                    children: {
                        '.hidden_message': {
                            type: 'file',
                            name: '.hidden_message',
                            content: `You found the /tmp secret!

The temporary directory often holds interesting artifacts.
In real systems, check /tmp for:
- Session files
- Cached credentials
- Debug output
- Temporary scripts

🏴 FLAG{tmp_tr34sur3s} 🏴`,
                            hidden: true,
                            icon: '🔍'
                        }
                    }
                }
            }
        };

        this.currentPath = '/home/hacker';
    }

    // Parse path into components
    parsePath(path) {
        if (!path.startsWith('/')) {
            // Relative path
            path = this.currentPath + '/' + path;
        }

        // Normalize path
        const parts = path.split('/').filter(p => p && p !== '.');
        const normalized = [];

        for (const part of parts) {
            if (part === '..') {
                normalized.pop();
            } else {
                normalized.push(part);
            }
        }

        return normalized;
    }

    // Get node at path
    getNode(path) {
        const parts = this.parsePath(path);
        let node = this.root;

        for (const part of parts) {
            if (node.type !== 'dir' || !node.children[part]) {
                return null;
            }
            node = node.children[part];
        }

        return node;
    }

    // List directory contents
    ls(path = '.', showHidden = false) {
        const targetPath = path === '.' ? this.currentPath : path;
        const node = this.getNode(targetPath);

        if (!node) {
            return { error: `ls: cannot access '${path}': No such file or directory` };
        }

        if (node.type !== 'dir') {
            return { files: [{ name: node.name, type: 'file', icon: node.icon || '📄' }] };
        }

        const files = Object.values(node.children)
            .filter(child => showHidden || !child.hidden)
            .map(child => ({
                name: child.name,
                type: child.type,
                icon: child.type === 'dir' ? '📁' : (child.icon || '📄'),
                hidden: child.hidden
            }))
            .sort((a, b) => {
                // Directories first, then alphabetically
                if (a.type !== b.type) {
                    return a.type === 'dir' ? -1 : 1;
                }
                return a.name.localeCompare(b.name);
            });

        return { files };
    }

    // Change directory
    cd(path) {
        if (path === '~' || path === '') {
            this.currentPath = '/home/hacker';
            return { success: true };
        }

        const targetPath = path.startsWith('/') ? path : this.currentPath + '/' + path;
        const node = this.getNode(targetPath);

        if (!node) {
            return { error: `cd: ${path}: No such file or directory` };
        }

        if (node.type !== 'dir') {
            return { error: `cd: ${path}: Not a directory` };
        }

        // Normalize and set current path
        const parts = this.parsePath(targetPath);
        this.currentPath = '/' + parts.join('/');
        if (this.currentPath === '/') this.currentPath = '/';
        else if (!this.currentPath.startsWith('/')) this.currentPath = '/' + this.currentPath;

        return { success: true };
    }

    // Read file
    cat(path) {
        const node = this.getNode(path);

        if (!node) {
            return { error: `cat: ${path}: No such file or directory` };
        }

        if (node.type === 'dir') {
            return { error: `cat: ${path}: Is a directory` };
        }

        return { content: node.content };
    }

    // Get current working directory
    pwd() {
        return this.currentPath || '/';
    }

    // Check if path exists
    exists(path) {
        return this.getNode(path) !== null;
    }

    // Get absolute path from relative
    getAbsolutePath(path) {
        if (path.startsWith('/')) return path;
        const parts = this.parsePath(path);
        return '/' + parts.join('/');
    }
}

// Global filesystem instance
const virtualFS = new VirtualFS();
