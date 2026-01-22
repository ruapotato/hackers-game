/**
 * Terminal App - Full Unix-like shell experience
 */

class TerminalApp {
    constructor() {
        this.instances = new Map();
        this.commandHistory = [];
        this.historyIndex = -1;
    }

    open() {
        const { windowId, contentEl } = windowManager.createWindow({
            title: 'Terminal',
            icon: '&#9638;',
            width: 750,
            height: 500,
            app: 'terminal'
        });

        const instance = {
            windowId,
            history: [],
            historyIndex: -1,
            fs: virtualFS // Use global filesystem
        };

        this.instances.set(windowId, instance);
        this.render(windowId, contentEl);

        // Show welcome message
        this.printMotd(windowId, contentEl);

        return windowId;
    }

    render(windowId, contentEl) {
        contentEl.innerHTML = `
            <div class="terminal-app">
                <div class="terminal-container">
                    <div class="terminal-output"></div>
                    <div class="terminal-input-line">
                        <span class="terminal-prompt"></span>
                        <input type="text" class="terminal-input" autocomplete="off" autocorrect="off" autocapitalize="off" spellcheck="false">
                    </div>
                </div>
            </div>
        `;

        this.setupEvents(windowId, contentEl);
        this.updatePrompt(windowId, contentEl);

        // Focus input
        setTimeout(() => {
            contentEl.querySelector('.terminal-input').focus();
        }, 100);
    }

    setupEvents(windowId, contentEl) {
        const instance = this.instances.get(windowId);
        const input = contentEl.querySelector('.terminal-input');
        const container = contentEl.querySelector('.terminal-container');

        // Click to focus
        container.addEventListener('click', () => {
            input.focus();
        });

        // Handle input
        input.addEventListener('keydown', (e) => {
            if (e.key === 'Enter') {
                const command = input.value;
                input.value = '';
                this.executeCommand(windowId, contentEl, command);

                // Add to history
                if (command.trim()) {
                    instance.history.push(command);
                    instance.historyIndex = instance.history.length;
                }
            } else if (e.key === 'ArrowUp') {
                e.preventDefault();
                if (instance.historyIndex > 0) {
                    instance.historyIndex--;
                    input.value = instance.history[instance.historyIndex];
                }
            } else if (e.key === 'ArrowDown') {
                e.preventDefault();
                if (instance.historyIndex < instance.history.length - 1) {
                    instance.historyIndex++;
                    input.value = instance.history[instance.historyIndex];
                } else {
                    instance.historyIndex = instance.history.length;
                    input.value = '';
                }
            } else if (e.key === 'Tab') {
                e.preventDefault();
                this.handleTabCompletion(windowId, input);
            } else if (e.key === 'c' && e.ctrlKey) {
                e.preventDefault();
                this.print(windowId, contentEl, '^C', 'term-gray');
                this.newLine(windowId, contentEl);
                input.value = '';
            } else if (e.key === 'l' && e.ctrlKey) {
                e.preventDefault();
                this.clear(windowId, contentEl);
            }
        });
    }

    updatePrompt(windowId, contentEl) {
        const instance = this.instances.get(windowId);
        const promptEl = contentEl.querySelector('.terminal-prompt');
        const path = instance.fs.pwd().replace('/home/hacker', '~');

        promptEl.innerHTML = `<span class="user">hacker</span>@<span class="host">hackers-game</span>:<span class="path">${path}</span>$ `;
    }

    print(windowId, contentEl, text, className = '') {
        const output = contentEl.querySelector('.terminal-output');
        const line = document.createElement('div');
        line.className = 'terminal-line' + (className ? ' ' + className : '');
        line.innerHTML = text;
        output.appendChild(line);
        this.scrollToBottom(contentEl);
    }

    printHtml(windowId, contentEl, html) {
        const output = contentEl.querySelector('.terminal-output');
        const line = document.createElement('div');
        line.className = 'terminal-line';
        line.innerHTML = html;
        output.appendChild(line);
        this.scrollToBottom(contentEl);
    }

    newLine(windowId, contentEl) {
        this.updatePrompt(windowId, contentEl);
    }

    scrollToBottom(contentEl) {
        const container = contentEl.querySelector('.terminal-container');
        container.scrollTop = container.scrollHeight;
    }

    clear(windowId, contentEl) {
        const output = contentEl.querySelector('.terminal-output');
        output.innerHTML = '';
    }

    printMotd(windowId, contentEl) {
        const motd = virtualFS.cat('/etc/motd');
        if (motd.content) {
            this.print(windowId, contentEl, motd.content.replace(/\n/g, '<br>'), 'term-green');
        }
    }

    executeCommand(windowId, contentEl, commandLine) {
        const instance = this.instances.get(windowId);

        // Echo the command
        const prompt = contentEl.querySelector('.terminal-prompt').innerHTML;
        this.printHtml(windowId, contentEl, `<span class="terminal-prompt">${prompt}</span>${this.escapeHtml(commandLine)}`);

        const parts = commandLine.trim().split(/\s+/);
        const command = parts[0];
        const args = parts.slice(1);

        if (!command) {
            this.newLine(windowId, contentEl);
            return;
        }

        // Execute command
        switch (command) {
            case 'help':
                this.cmdHelp(windowId, contentEl);
                break;
            case 'ls':
                this.cmdLs(windowId, contentEl, args);
                break;
            case 'cd':
                this.cmdCd(windowId, contentEl, args);
                break;
            case 'pwd':
                this.print(windowId, contentEl, instance.fs.pwd());
                break;
            case 'cat':
                this.cmdCat(windowId, contentEl, args);
                break;
            case 'clear':
                this.clear(windowId, contentEl);
                break;
            case 'echo':
                this.print(windowId, contentEl, args.join(' '));
                break;
            case 'whoami':
                this.print(windowId, contentEl, 'hacker');
                break;
            case 'hostname':
                this.print(windowId, contentEl, 'hackers-game');
                break;
            case 'uname':
                this.cmdUname(windowId, contentEl, args);
                break;
            case 'date':
                this.print(windowId, contentEl, new Date().toString());
                break;
            case 'uptime':
                this.print(windowId, contentEl, 'up 1337 days, 13:37, 42 users, load average: 0.42, 0.69, 1.00');
                break;
            case 'id':
                this.print(windowId, contentEl, 'uid=1000(hacker) gid=1000(hacker) groups=1000(hacker),27(sudo),1337(elite)');
                break;
            case 'history':
                this.cmdHistory(windowId, contentEl);
                break;
            case 'hack':
                this.cmdHack(windowId, contentEl, args);
                break;
            case 'nmap':
                this.cmdNmap(windowId, contentEl, args);
                break;
            case 'ssh':
                this.cmdSsh(windowId, contentEl, args);
                break;
            case 'ping':
                this.cmdPing(windowId, contentEl, args);
                break;
            case 'neofetch':
            case 'screenfetch':
                this.cmdNeofetch(windowId, contentEl);
                break;
            case 'matrix':
                this.cmdMatrix(windowId, contentEl);
                break;
            case 'cowsay':
                this.cmdCowsay(windowId, contentEl, args);
                break;
            case 'fortune':
                this.cmdFortune(windowId, contentEl);
                break;
            case 'exit':
            case 'logout':
                windowManager.closeWindow(windowId);
                return;
            case 'sudo':
                this.cmdSudo(windowId, contentEl, args);
                break;
            case 'man':
                this.cmdMan(windowId, contentEl, args);
                break;
            case 'tree':
                this.cmdTree(windowId, contentEl, args);
                break;
            case 'sl':
                this.cmdSl(windowId, contentEl);
                break;
            case 'lolcat':
            case 'rainbow':
                this.cmdLolcat(windowId, contentEl, args);
                break;
            case 'figlet':
            case 'banner':
                this.cmdFiglet(windowId, contentEl, args);
                break;
            case 'cmatrix':
                this.cmdCmatrix(windowId, contentEl);
                break;
            case 'welcome':
            case 'about':
                this.cmdAbout(windowId, contentEl);
                break;
            case 'blog':
            case 'posts':
                this.cmdBlog(windowId, contentEl);
                break;
            case 'youtube':
            case 'yt':
                this.cmdYoutube(windowId, contentEl);
                break;
            case 'contact':
            case 'links':
                this.cmdContact(windowId, contentEl);
                break;
            case 'skills':
            case 'resume':
                this.cmdSkills(windowId, contentEl);
                break;
            case 'rm':
                this.cmdRm(windowId, contentEl, args);
                break;
            case 'vim':
            case 'nano':
            case 'emacs':
                this.cmdEditor(windowId, contentEl, command);
                break;
            case 'apt':
            case 'apt-get':
            case 'pacman':
            case 'dnf':
                this.cmdPackageManager(windowId, contentEl, command, args);
                break;
            case 'make':
                this.cmdMake(windowId, contentEl, args);
                break;
            case 'coffee':
            case 'brew':
                this.cmdCoffee(windowId, contentEl);
                break;
            case 'starwars':
                this.cmdStarwars(windowId, contentEl);
                break;
            case 'librem':
            case 'librem5':
            case 'pinephone':
            case 'flx1s':
                this.cmdLinuxPhone(windowId, contentEl, command);
                break;
            default:
                this.print(windowId, contentEl, `${command}: command not found. Type 'help' for available commands.`, 'term-red');
        }

        this.newLine(windowId, contentEl);
    }

    escapeHtml(text) {
        const div = document.createElement('div');
        div.textContent = text;
        return div.innerHTML;
    }

    // Commands implementation
    cmdHelp(windowId, contentEl) {
        const help = `
<span class="term-yellow">Available Commands:</span>

<span class="term-cyan">About Me:</span>
  about         - Who am I?
  blog          - Recent blog posts
  youtube       - Open YouTube channel
  skills        - Skills & resume
  contact       - Contact info & links

<span class="term-cyan">Navigation:</span>
  ls [path]     - List directory contents (-a for hidden)
  cd [path]     - Change directory
  pwd           - Print working directory
  tree          - Show directory tree

<span class="term-cyan">Files:</span>
  cat [file]    - Display file contents
  echo [text]   - Print text

<span class="term-cyan">System:</span>
  whoami        - Print current user
  hostname      - Print hostname
  uname [-a]    - Print system information
  date          - Print current date/time
  uptime        - Show uptime
  id            - Print user identity
  history       - Show command history
  clear         - Clear terminal
  exit          - Close terminal

<span class="term-cyan">Linux Phones:</span>
  librem5       - About the Librem 5
  pinephone     - About the PinePhone
  flx1s         - About the FLX1s

<span class="term-cyan">Hacking Tools:</span>
  hack          - Start hacking minigame
  nmap [host]   - Port scanner simulation
  ssh [user@host] - SSH connection simulation
  ping [host]   - Ping simulation

<span class="term-cyan">Fun & Easter Eggs:</span>
  neofetch      - System info with ASCII art
  cowsay [msg]  - Cow says message
  fortune       - Random fortune
  sl            - Choo choo!
  cmatrix       - Matrix effect
  lolcat [text] - Rainbow text
  coffee        - ☕
  starwars      - A long time ago...
  make love     - Try it!

<span class="term-gray">Tip: Try 'ls -a' in /home/hacker and explore /var/log for secrets!</span>`;
        this.printHtml(windowId, contentEl, help);
    }

    cmdLs(windowId, contentEl, args) {
        const instance = this.instances.get(windowId);
        const showHidden = args.includes('-a') || args.includes('-la') || args.includes('-al');
        const path = args.find(a => !a.startsWith('-')) || '.';

        const result = instance.fs.ls(path, showHidden);

        if (result.error) {
            this.print(windowId, contentEl, result.error, 'term-red');
            return;
        }

        const output = result.files.map(f => {
            const color = f.type === 'dir' ? 'term-blue term-bold' : (f.hidden ? 'term-gray' : '');
            return `<span class="${color}">${f.name}</span>`;
        }).join('  ');

        this.printHtml(windowId, contentEl, output || '<span class="term-gray">(empty)</span>');
    }

    cmdCd(windowId, contentEl, args) {
        const instance = this.instances.get(windowId);
        const path = args[0] || '~';
        const result = instance.fs.cd(path);

        if (result.error) {
            this.print(windowId, contentEl, result.error, 'term-red');
        }
    }

    cmdCat(windowId, contentEl, args) {
        const instance = this.instances.get(windowId);

        if (!args.length) {
            this.print(windowId, contentEl, 'cat: missing file operand', 'term-red');
            return;
        }

        const result = instance.fs.cat(args[0]);

        if (result.error) {
            this.print(windowId, contentEl, result.error, 'term-red');
        } else {
            this.print(windowId, contentEl, result.content.replace(/\n/g, '<br>'));
        }
    }

    cmdUname(windowId, contentEl, args) {
        if (args.includes('-a')) {
            this.print(windowId, contentEl, 'HackersOS 5.15.0-hacker #1337 SMP Wed Jan 21 13:37:00 UTC 2026 x86_64 GNU/Linux');
        } else {
            this.print(windowId, contentEl, 'HackersOS');
        }
    }

    cmdHistory(windowId, contentEl) {
        const instance = this.instances.get(windowId);
        const output = instance.history.map((cmd, i) => `  ${i + 1}  ${cmd}`).join('<br>');
        this.printHtml(windowId, contentEl, output || '<span class="term-gray">(no history)</span>');
    }

    cmdHack(windowId, contentEl, args) {
        this.printHtml(windowId, contentEl, `
<span class="term-green">
 _   _            _    _
| | | | __ _  ___| | _(_)_ __   __ _
| |_| |/ _\` |/ __| |/ / | '_ \\ / _\` |
|  _  | (_| | (__|   <| | | | | (_| |
|_| |_|\\__,_|\\___|_|\\_\\_|_| |_|\\__, |
                               |___/
</span>
<span class="term-yellow">Initializing hack sequence...</span>
<span class="term-cyan">[▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓] 100%</span>

<span class="term-green">Access granted!</span>
<span class="term-gray">Just kidding. But try exploring the filesystem for real flags!</span>
<span class="term-gray">Hint: Check hidden files in /home/hacker and /var/log/auth.log</span>`);
    }

    cmdNmap(windowId, contentEl, args) {
        const target = args[0] || 'localhost';
        this.printHtml(windowId, contentEl, `
<span class="term-cyan">Starting Nmap 7.94 ( https://nmap.org )</span>
Nmap scan report for ${target}
Host is up (0.00042s latency).

PORT     STATE SERVICE
22/tcp   open  ssh
80/tcp   open  http
443/tcp  open  https
3306/tcp open  mysql
8080/tcp open  http-proxy

<span class="term-green">Nmap done: 1 IP address (1 host up) scanned in 1.337 seconds</span>`);
    }

    cmdSsh(windowId, contentEl, args) {
        if (!args[0]) {
            this.print(windowId, contentEl, 'usage: ssh user@hostname', 'term-red');
            return;
        }
        this.printHtml(windowId, contentEl, `
<span class="term-yellow">Connecting to ${args[0]}...</span>
<span class="term-red">Connection refused.</span>
<span class="term-gray">(This is a simulation - no real connections are made)</span>`);
    }

    cmdPing(windowId, contentEl, args) {
        const host = args[0] || 'localhost';
        this.printHtml(windowId, contentEl, `
PING ${host} (127.0.0.1) 56(84) bytes of data.
64 bytes from ${host} (127.0.0.1): icmp_seq=1 ttl=64 time=0.042 ms
64 bytes from ${host} (127.0.0.1): icmp_seq=2 ttl=64 time=0.069 ms
64 bytes from ${host} (127.0.0.1): icmp_seq=3 ttl=64 time=0.031 ms

--- ${host} ping statistics ---
3 packets transmitted, 3 received, 0% packet loss, time 2042ms`);
    }

    cmdNeofetch(windowId, contentEl) {
        this.printHtml(windowId, contentEl, `
<span class="term-green">        _______        </span>   <span class="term-cyan">hacker</span>@<span class="term-cyan">hackers-game</span>
<span class="term-green">       /       \\       </span>   ------------------
<span class="term-green">      /  ^   ^  \\      </span>   <span class="term-yellow">OS:</span> HackersOS 5.15
<span class="term-green">     |  (o) (o)  |     </span>   <span class="term-yellow">Host:</span> Virtual Desktop
<span class="term-green">     |     <     |     </span>   <span class="term-yellow">Kernel:</span> 5.15.0-hacker
<span class="term-green">     |  \\___/   |     </span>   <span class="term-yellow">Uptime:</span> 1337 days
<span class="term-green">      \\         /      </span>   <span class="term-yellow">Shell:</span> hackershell
<span class="term-green">       \\_______/       </span>   <span class="term-yellow">Resolution:</span> ${window.innerWidth}x${window.innerHeight}
<span class="term-green">                        </span>   <span class="term-yellow">Terminal:</span> Web Terminal
                           <span class="term-yellow">CPU:</span> JavaScript V8
                           <span class="term-yellow">Memory:</span> ∞ MB / ∞ MB`);
    }

    cmdMatrix(windowId, contentEl) {
        this.printHtml(windowId, contentEl, `
<span class="term-green term-bold">
Wake up, Neo...
The Matrix has you...
Follow the white rabbit.

Knock, knock, Neo.
</span>
<span class="term-gray">(Full matrix effect coming soon to Hackers Game app!)</span>`);
    }

    cmdCowsay(windowId, contentEl, args) {
        const message = args.join(' ') || 'Moo!';
        const border = '_'.repeat(message.length + 2);
        this.printHtml(windowId, contentEl, `
 ${border}
< ${message} >
 ${'-'.repeat(message.length + 2)}
        \\   ^__^
         \\  (oo)\\_______
            (__)\\       )\\/\\
                ||----w |
                ||     ||`);
    }

    cmdFortune(windowId, contentEl) {
        const fortunes = [
            "The best way to predict the future is to invent it.",
            "There are only two kinds of languages: the ones people complain about and the ones nobody uses.",
            "Talk is cheap. Show me the code. - Linus Torvalds",
            "First, solve the problem. Then, write the code.",
            "Code is like humor. When you have to explain it, it's bad.",
            "Any fool can write code that a computer can understand. Good programmers write code that humans can understand.",
            "The most disastrous thing that you can ever learn is your first programming language.",
            "Deleted code is debugged code.",
            "It works on my machine.",
            "There's no place like 127.0.0.1"
        ];
        const fortune = fortunes[Math.floor(Math.random() * fortunes.length)];
        this.print(windowId, contentEl, fortune, 'term-cyan');
    }

    cmdSudo(windowId, contentEl, args) {
        if (args[0] === 'rm' && args.includes('-rf') && args.includes('/')) {
            this.printHtml(windowId, contentEl, `
<span class="term-red">Nice try! But you won't destroy this system that easily.</span>
<span class="term-yellow">🏴 FLAG{n1c3_try_h4ck3r} 🏴</span>`);
        } else {
            this.print(windowId, contentEl, "[sudo] password for hacker: ", 'term-yellow');
            setTimeout(() => {
                this.print(windowId, contentEl, "Sorry, try again.", 'term-red');
                this.print(windowId, contentEl, "hacker is not in the sudoers file. This incident will be reported.", 'term-red');
            }, 500);
        }
    }

    cmdMan(windowId, contentEl, args) {
        const cmd = args[0];
        if (!cmd) {
            this.print(windowId, contentEl, "What manual page do you want?", 'term-yellow');
            return;
        }

        const manPages = {
            'ls': 'ls - list directory contents\n\nUsage: ls [-a] [path]\n\n-a  Include hidden files (starting with .)',
            'cd': 'cd - change directory\n\nUsage: cd [path]\n\nSpecial paths:\n  ~   Home directory\n  ..  Parent directory',
            'cat': 'cat - concatenate and print files\n\nUsage: cat [file]',
            'hack': 'hack - initiate hacking sequence\n\nUsage: hack\n\nStarts the super secret hacking minigame.',
        };

        if (manPages[cmd]) {
            this.printHtml(windowId, contentEl, `<span class="term-bold">${manPages[cmd].replace(/\n/g, '<br>')}</span>`);
        } else {
            this.print(windowId, contentEl, `No manual entry for ${cmd}`, 'term-red');
        }
    }

    cmdTree(windowId, contentEl, args) {
        const instance = this.instances.get(windowId);
        const path = args[0] || '.';

        const buildTree = (nodePath, prefix = '') => {
            const result = instance.fs.ls(nodePath, true);
            if (result.error) return result.error;

            let output = '';
            const files = result.files;

            files.forEach((file, index) => {
                const isLast = index === files.length - 1;
                const connector = isLast ? '└── ' : '├── ';
                const color = file.type === 'dir' ? 'term-blue term-bold' : '';

                output += `${prefix}${connector}<span class="${color}">${file.name}</span><br>`;

                if (file.type === 'dir' && prefix.length < 20) {
                    const newPrefix = prefix + (isLast ? '    ' : '│   ');
                    const fullPath = nodePath === '/' ? '/' + file.name : nodePath + '/' + file.name;
                    output += buildTree(fullPath, newPrefix);
                }
            });

            return output;
        };

        const absPath = instance.fs.getAbsolutePath(path);
        this.printHtml(windowId, contentEl, `<span class="term-blue term-bold">${absPath}</span><br>${buildTree(absPath)}`);
    }

    // Easter egg commands
    cmdSl(windowId, contentEl) {
        this.printHtml(windowId, contentEl, `
<span class="term-white">
      ====        ________                ___________
  _D _|  |_______/        \\__I_I_____===__|_________|
   |(_)---  |   H\\________/ |   |        =|___ ___|
   /     |  |   H  |  |     |   |         ||_| |_||
  |      |  |   H  |__--------------------| [___] |
  | ________|___H__/__|_____/[][]~\\_______|       |
  |/ |   |-----------I_____I [][] []  D   |=======|__
__/ =| o |=-~~\\  /~~\\  /~~\\  /~~\\ ____Y___________|__
 |/-=|___|=    ||    ||    ||    |_____/~\\___/
  \\_/      \\O=====O=====O=====O_/      \\_/
</span>
<span class="term-gray">You've been warned about typos!</span>`);
    }

    cmdLolcat(windowId, contentEl, args) {
        const text = args.join(' ') || 'Hello, World!';
        const colors = ['term-red', 'term-yellow', 'term-green', 'term-cyan', 'term-blue', 'term-magenta'];
        const rainbow = text.split('').map((c, i) => `<span class="${colors[i % colors.length]}">${c}</span>`).join('');
        this.printHtml(windowId, contentEl, rainbow);
    }

    cmdFiglet(windowId, contentEl, args) {
        const text = args.join(' ') || 'Hello';
        const letters = {
            'A': ' █████╗ \\n██╔══██╗\\n███████║\\n██╔══██║\\n██║  ██║\\n╚═╝  ╚═╝',
            'B': '██████╗ \\n██╔══██╗\\n██████╔╝\\n██╔══██╗\\n██████╔╝\\n╚═════╝ ',
            'H': '██╗  ██╗\\n██║  ██║\\n███████║\\n██╔══██║\\n██║  ██║\\n╚═╝  ╚═╝',
            'I': '██╗\\n██║\\n██║\\n██║\\n██║\\n╚═╝',
            // Simplified - just show text big
        };
        this.printHtml(windowId, contentEl, `<span class="term-cyan term-bold" style="font-size: 16px; letter-spacing: 2px;">${text.toUpperCase()}</span>`);
    }

    cmdCmatrix(windowId, contentEl) {
        this.printHtml(windowId, contentEl, `
<span class="term-green">
01001000 01000001 01000011 01001011
10110010 01101001 11010101 00110111
01001000 01000001 01000011 01001011
11100110 10010011 01001110 11001010
</span>
<span class="term-gray">Full matrix effect available in Hackers Game app!</span>`);
    }

    cmdAbout(windowId, contentEl) {
        this.printHtml(windowId, contentEl, `
<span class="term-cyan term-bold">
╔═══════════════════════════════════════════════════════════╗
║                    DAVID HAMNER                          ║
║                  GNU/Linux Stuff                         ║
╚═══════════════════════════════════════════════════════════╝
</span>
<span class="term-white">Linux enthusiast, privacy advocate, and maker.</span>

<span class="term-yellow">Expertise:</span>
  • Linux Phones (Librem 5, PinePhone, FLX1s)
  • Home Automation (Home Assistant, VOSK)
  • 3D Printing & Hardware
  • Python Development

<span class="term-yellow">Find me:</span>
  📺 youtube.com/@DavidHamner
  🐙 github.com/ruapotato
  🌐 hackers-game.com

<span class="term-gray">Type 'blog' to see my posts, 'skills' for resume, or 'youtube' for videos.</span>`);
    }

    cmdBlog(windowId, contentEl) {
        const posts = blogPosts.slice(0, 5).map((p, i) =>
            `  ${i + 1}. <span class="term-cyan">${p.title}</span> (${p.date})`
        ).join('\\n');
        this.printHtml(windowId, contentEl, `
<span class="term-yellow">Recent Blog Posts:</span>

${posts}

<span class="term-gray">Open the Blog app on the desktop to read full posts!</span>`);
    }

    cmdYoutube(windowId, contentEl) {
        this.printHtml(windowId, contentEl, `
<span class="term-red">▶ YouTube Channel: David Hamner</span>

Popular videos:
  📱 Linux Phone That Actually Works (FLX1s)
  📱 Is the Librem 5 Ready for Launch?
  📱 Librem 5 Gaming
  🤖 Robot and Librem 5 Hacking
  🏠 Home Automation with VOSK

<span class="term-cyan">Opening browser...</span>`);
        setTimeout(() => {
            browserApp.open('https://youtube.com/@DavidHamner');
        }, 1000);
    }

    cmdContact(windowId, contentEl) {
        this.printHtml(windowId, contentEl, `
<span class="term-yellow">Contact & Links:</span>

  📺 YouTube:  <span class="term-cyan">youtube.com/@DavidHamner</span>
  🐙 GitHub:   <span class="term-cyan">github.com/ruapotato</span>
  🌐 Website:  <span class="term-cyan">hackers-game.com</span>

<span class="term-gray">DMs open on YouTube for collaboration!</span>`);
    }

    cmdSkills(windowId, contentEl) {
        const bar = (level) => {
            const filled = Math.floor(level / 5);
            const empty = 20 - filled;
            return '<span class="term-green">' + '█'.repeat(filled) + '</span><span class="term-gray">' + '░'.repeat(empty) + '</span>';
        };
        this.printHtml(windowId, contentEl, `
<span class="term-cyan term-bold">SKILLS & EXPERTISE</span>

Linux Phones      ${bar(95)} 95%
Home Automation   ${bar(85)} 85%
3D Printing       ${bar(80)} 80%
Embedded Linux    ${bar(75)} 75%
Python            ${bar(85)} 85%
System Admin      ${bar(80)} 80%

<span class="term-yellow">Technologies:</span>
  Librem 5, PinePhone, FLX1s, Home Assistant, VOSK,
  OpenSCAD, Python, Bash, systemd, Wayland, GTK

<span class="term-gray">See blog posts for project examples!</span>`);
    }

    cmdRm(windowId, contentEl, args) {
        if (args.includes('-rf') && (args.includes('/') || args.includes('*'))) {
            this.printHtml(windowId, contentEl, `
<span class="term-red">⚠️  NICE TRY!</span>

<span class="term-yellow">rm -rf / would delete everything... if this were real.</span>

But this is a simulated environment, so your data is safe. 😉

<span class="term-green">🏴 FLAG{n1c3_try_h4ck3r}</span>`);
        } else {
            this.print(windowId, contentEl, 'rm: simulated - no files were harmed', 'term-gray');
        }
    }

    cmdEditor(windowId, contentEl, editor) {
        const wars = {
            'vim': 'Vim is clearly superior. :wq',
            'nano': 'Nano - for when you just need to edit a file without a PhD.',
            'emacs': "Emacs - it's not just an editor, it's an operating system!"
        };
        this.printHtml(windowId, contentEl, `
<span class="term-cyan">${editor.toUpperCase()}</span>

${wars[editor] || 'A fine choice.'}

<span class="term-gray">(Text Editor app is available on the desktop)</span>`);
    }

    cmdPackageManager(windowId, contentEl, pm, args) {
        const action = args[0] || 'help';
        if (action === 'install' && args[1] === 'girlfriend') {
            this.print(windowId, contentEl, `E: Unable to locate package girlfriend`, 'term-red');
        } else if (action === 'install') {
            this.printHtml(windowId, contentEl, `
<span class="term-cyan">Reading package lists... Done</span>
<span class="term-cyan">Building dependency tree... Done</span>
<span class="term-yellow">The following packages will be installed:</span>
  ${args.slice(1).join(' ') || 'nothing'}
<span class="term-gray">(This is a simulation - nothing was actually installed)</span>`);
        } else {
            this.print(windowId, contentEl, `${pm}: simulated package manager`, 'term-gray');
        }
    }

    cmdMake(windowId, contentEl, args) {
        if (args[0] === 'love') {
            this.print(windowId, contentEl, "make: *** No rule to make target 'love'. Stop.", 'term-red');
            this.print(windowId, contentEl, "(Try 'make sandwich' instead)", 'term-gray');
        } else if (args[0] === 'sandwich') {
            this.print(windowId, contentEl, "make: What? Make it yourself.", 'term-yellow');
        } else if (args[0] === 'me' && args[1] === 'a' && args[2] === 'sandwich') {
            this.print(windowId, contentEl, "🥪 Here's your sandwich!", 'term-green');
        } else {
            this.print(windowId, contentEl, "make: *** No targets specified and no makefile found. Stop.", 'term-red');
        }
    }

    cmdCoffee(windowId, contentEl) {
        this.printHtml(windowId, contentEl, `
<span class="term-yellow">
       ( (
        ) )
      ........
      |      |]
      \\      /
       \`----'
</span>
<span class="term-white">Here's your coffee! ☕</span>
<span class="term-gray">Error 418: I'm a teapot</span>`);
    }

    cmdStarwars(windowId, contentEl) {
        this.printHtml(windowId, contentEl, `
<span class="term-yellow">
     .          .
  .  *     .        .   *    .
        .   .            *
   *         STAR WARS       .
      .    A long time ago   *
  .     in a terminal far,
     *    far away...        .
        .            .    *
   .         *    .
</span>
<span class="term-gray">For the full ASCII Star Wars experience:</span>
<span class="term-cyan">telnet towel.blinkenlights.nl</span>
<span class="term-gray">(On a real terminal, of course)</span>`);
    }

    cmdLinuxPhone(windowId, contentEl, phone) {
        const phones = {
            'librem': 'Librem 5 - The privacy-focused Linux phone by Purism. Hardware kill switches!',
            'librem5': 'Librem 5 - The privacy-focused Linux phone by Purism. Hardware kill switches!',
            'pinephone': 'PinePhone - The affordable Linux phone. Great for tinkering!',
            'flx1s': 'FLX1s - A Linux phone that actually works as a phone!'
        };
        this.printHtml(windowId, contentEl, `
<span class="term-cyan">📱 ${phone.toUpperCase()}</span>

${phones[phone] || 'A Linux phone!'}

<span class="term-yellow">My Linux Phone Content:</span>
  • Reviews and unboxings
  • App compatibility tests
  • Hacking and development
  • Real-world usage

<span class="term-gray">Check the Blog app or YouTube channel for more!</span>`);
    }

    handleTabCompletion(windowId, input) {
        const instance = this.instances.get(windowId);
        const parts = input.value.split(' ');
        const lastPart = parts[parts.length - 1];

        if (!lastPart) return;

        // Get current directory listing
        const result = instance.fs.ls('.', true);
        if (result.error) return;

        const matches = result.files
            .filter(f => f.name.startsWith(lastPart))
            .map(f => f.name);

        if (matches.length === 1) {
            parts[parts.length - 1] = matches[0];
            input.value = parts.join(' ');
        } else if (matches.length > 1) {
            // Find common prefix
            let common = matches[0];
            for (const match of matches) {
                while (!match.startsWith(common)) {
                    common = common.slice(0, -1);
                }
            }
            parts[parts.length - 1] = common;
            input.value = parts.join(' ');
        }
    }
}

// Global instance
const terminalApp = new TerminalApp();
