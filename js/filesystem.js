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
                                        'exploit.py': {
                                            type: 'file',
                                            name: 'exploit.py',
                                            content: `#!/usr/bin/env python3
# Educational purposes only!

import socket
import sys

def scan_ports(target, ports):
    """Basic port scanner"""
    print(f"Scanning {target}...")
    for port in ports:
        sock = socket.socket(socket.AF_INET, socket.SOCK_STREAM)
        sock.settimeout(1)
        result = sock.connect_ex((target, port))
        if result == 0:
            print(f"Port {port}: OPEN")
        sock.close()

if __name__ == "__main__":
    # This is just for show - doesn't actually run
    print("Port scanner simulation")`,
                                            icon: '🐍'
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
