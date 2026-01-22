/**
 * Hackers Game App - The main hacking game experience
 */

class HackersGameApp {
    constructor() {
        this.instances = new Map();
        this.challenges = [
            {
                id: 'crack-password',
                name: 'Password Cracker',
                description: 'Crack the encrypted password using brute force',
                difficulty: 'Easy',
                unlocked: true
            },
            {
                id: 'sql-injection',
                name: 'SQL Injection',
                description: 'Exploit a vulnerable login form',
                difficulty: 'Medium',
                unlocked: true
            },
            {
                id: 'network-scan',
                name: 'Network Recon',
                description: 'Discover hidden services on the network',
                difficulty: 'Easy',
                unlocked: true
            },
            {
                id: 'crypto-decode',
                name: 'Cipher Cracker',
                description: 'Decode the secret message',
                difficulty: 'Medium',
                unlocked: true
            },
            {
                id: 'privilege-escalation',
                name: 'Privilege Escalation',
                description: 'Gain root access to the system',
                difficulty: 'Hard',
                unlocked: false
            }
        ];
    }

    open() {
        const { windowId, contentEl } = windowManager.createWindow({
            title: 'Hackers Game',
            icon: '&#128187;',
            width: 800,
            height: 550,
            app: 'hackers-game'
        });

        const instance = {
            windowId,
            currentScreen: 'menu',
            score: 0
        };

        this.instances.set(windowId, instance);
        this.showMenu(windowId, contentEl);

        return windowId;
    }

    showMenu(windowId, contentEl) {
        contentEl.innerHTML = `
            <div class="hackers-game-app">
                <div class="game-screen">
                    <div class="game-title">
                        <pre>
 ██░ ██  ▄▄▄       ▄████▄   ██ ▄█▀▓█████  ██▀███    ██████
▓██░ ██▒▒████▄    ▒██▀ ▀█   ██▄█▒ ▓█   ▀ ▓██ ▒ ██▒▒██    ▒
▒██▀▀██░▒██  ▀█▄  ▒▓█    ▄ ▓███▄░ ▒███   ▓██ ░▄█ ▒░ ▓██▄
░▓█ ░██ ░██▄▄▄▄██ ▒▓▓▄ ▄██▒▓██ █▄ ▒▓█  ▄ ▒██▀▀█▄    ▒   ██▒
░▓█▒░██▓ ▓█   ▓██▒▒ ▓███▀ ░▒██▒ █▄░▒████▒░██▓ ▒██▒▒██████▒▒
 ▒ ░░▒░▒ ▒▒   ▓▒█░░ ░▒ ▒  ░▒ ▒▒ ▓▒░░ ▒░ ░░ ▒▓ ░▒▓░▒ ▒▓▒ ▒ ░
 ▒ ░▒░ ░  ▒   ▒▒ ░  ░  ▒   ░ ░▒ ▒░ ░ ░  ░  ░▒ ░ ▒░░ ░▒  ░ ░
 ░  ░░ ░  ░   ▒   ░        ░ ░░ ░    ░     ░░   ░ ░  ░  ░
 ░  ░  ░      ░  ░░ ░      ░  ░      ░  ░   ░           ░
                  ░
  ▄████  ▄▄▄       ███▄ ▄███▓▓█████
 ██▒ ▀█▒▒████▄    ▓██▒▀█▀ ██▒▓█   ▀
▒██░▄▄▄░▒██  ▀█▄  ▓██    ▓██░▒███
░▓█  ██▓░██▄▄▄▄██ ▒██    ▒██ ▒▓█  ▄
░▒▓███▀▒ ▓█   ▓██▒▒██▒   ░██▒░▒████▒
 ░▒   ▒  ▒▒   ▓▒█░░ ▒░   ░  ░░░ ▒░ ░
  ░   ░   ▒   ▒▒ ░░  ░      ░ ░ ░  ░
░ ░   ░   ░   ▒   ░      ░      ░
      ░       ░  ░       ░      ░  ░
                        </pre>
                    </div>
                    <div class="game-menu">
                        <button class="game-menu-item" data-action="challenges">🎯 Challenges</button>
                        <button class="game-menu-item" data-action="terminal">💻 Terminal Mode</button>
                        <button class="game-menu-item" data-action="story">📖 Story Mode</button>
                        <button class="game-menu-item" data-action="about">ℹ️ About</button>
                    </div>
                </div>
            </div>
        `;

        this.setupMenuEvents(windowId, contentEl);
    }

    setupMenuEvents(windowId, contentEl) {
        contentEl.querySelectorAll('.game-menu-item').forEach(btn => {
            btn.addEventListener('click', () => {
                const action = btn.dataset.action;
                switch (action) {
                    case 'challenges':
                        this.showChallenges(windowId, contentEl);
                        break;
                    case 'terminal':
                        terminalApp.open();
                        break;
                    case 'story':
                        this.showStory(windowId, contentEl);
                        break;
                    case 'about':
                        this.showAbout(windowId, contentEl);
                        break;
                }
            });
        });
    }

    showChallenges(windowId, contentEl) {
        const challengeList = this.challenges.map(c => `
            <div class="challenge-item ${c.unlocked ? '' : 'locked'}" data-id="${c.id}">
                <div class="challenge-icon">${c.unlocked ? '🔓' : '🔒'}</div>
                <div class="challenge-info">
                    <div class="challenge-name">${c.name}</div>
                    <div class="challenge-desc">${c.description}</div>
                    <div class="challenge-diff difficulty-${c.difficulty.toLowerCase()}">${c.difficulty}</div>
                </div>
            </div>
        `).join('');

        contentEl.innerHTML = `
            <div class="hackers-game-app">
                <div class="game-screen">
                    <div style="display: flex; align-items: center; margin-bottom: 20px;">
                        <button class="game-back-btn" style="background: none; border: 1px solid #00ff00; color: #00ff00; padding: 5px 15px; cursor: pointer;">← Back</button>
                        <h2 style="margin-left: 20px; color: #00ff00;">Select Challenge</h2>
                    </div>
                    <div class="challenges-list" style="display: grid; gap: 10px;">
                        ${challengeList}
                    </div>
                    <style>
                        .challenge-item {
                            display: flex;
                            align-items: center;
                            gap: 15px;
                            padding: 15px;
                            border: 1px solid #00ff00;
                            cursor: pointer;
                            transition: all 0.2s;
                        }
                        .challenge-item:hover:not(.locked) {
                            background: rgba(0, 255, 0, 0.1);
                        }
                        .challenge-item.locked {
                            opacity: 0.5;
                            cursor: not-allowed;
                            border-color: #444;
                        }
                        .challenge-icon { font-size: 24px; }
                        .challenge-name { font-size: 16px; font-weight: bold; }
                        .challenge-desc { font-size: 12px; color: #888; margin-top: 4px; }
                        .challenge-diff {
                            display: inline-block;
                            padding: 2px 8px;
                            font-size: 10px;
                            border-radius: 3px;
                            margin-top: 8px;
                        }
                        .difficulty-easy { background: #2a5; color: #fff; }
                        .difficulty-medium { background: #c80; color: #fff; }
                        .difficulty-hard { background: #c22; color: #fff; }
                    </style>
                </div>
            </div>
        `;

        contentEl.querySelector('.game-back-btn').addEventListener('click', () => {
            this.showMenu(windowId, contentEl);
        });

        contentEl.querySelectorAll('.challenge-item:not(.locked)').forEach(item => {
            item.addEventListener('click', () => {
                this.startChallenge(windowId, contentEl, item.dataset.id);
            });
        });
    }

    startChallenge(windowId, contentEl, challengeId) {
        switch (challengeId) {
            case 'crack-password':
                this.passwordCrackerChallenge(windowId, contentEl);
                break;
            case 'sql-injection':
                this.sqlInjectionChallenge(windowId, contentEl);
                break;
            case 'network-scan':
                this.networkScanChallenge(windowId, contentEl);
                break;
            case 'crypto-decode':
                this.cryptoChallenge(windowId, contentEl);
                break;
            default:
                this.showChallenges(windowId, contentEl);
        }
    }

    passwordCrackerChallenge(windowId, contentEl) {
        const targetPassword = 'admin123';
        const hash = 'e99a18c428cb38d5f260853678922e03'; // MD5 of admin123

        contentEl.innerHTML = `
            <div class="hackers-game-app">
                <div class="game-screen">
                    <div style="display: flex; align-items: center; margin-bottom: 20px;">
                        <button class="game-back-btn" style="background: none; border: 1px solid #00ff00; color: #00ff00; padding: 5px 15px; cursor: pointer;">← Back</button>
                        <h2 style="margin-left: 20px; color: #00ff00;">🔐 Password Cracker</h2>
                    </div>
                    <div class="game-content">
                        <p>You've intercepted an MD5 password hash from the target server.</p>
                        <p style="margin-top: 15px;">Hash: <span style="color: #ff0; font-family: monospace;">${hash}</span></p>
                        <p style="margin-top: 15px; color: #888;">Hint: Try common passwords like "password", "admin123", "123456"...</p>
                        <div style="margin-top: 20px;">
                            <input type="text" id="password-guess" placeholder="Enter password guess..."
                                   style="background: #111; border: 1px solid #00ff00; color: #00ff00; padding: 10px; width: 300px; font-family: monospace;">
                            <button id="crack-btn" style="background: #00ff00; color: #000; border: none; padding: 10px 20px; cursor: pointer; margin-left: 10px;">
                                Crack!
                            </button>
                        </div>
                        <div id="crack-result" style="margin-top: 20px; min-height: 50px;"></div>
                    </div>
                </div>
            </div>
        `;

        contentEl.querySelector('.game-back-btn').addEventListener('click', () => {
            this.showChallenges(windowId, contentEl);
        });

        const input = contentEl.querySelector('#password-guess');
        const resultDiv = contentEl.querySelector('#crack-result');

        const checkPassword = () => {
            const guess = input.value;
            if (guess === targetPassword) {
                resultDiv.innerHTML = `
                    <p style="color: #0f0;">✓ PASSWORD CRACKED!</p>
                    <p style="color: #ff0; margin-top: 10px;">🏴 FLAG{p4ssw0rd_cr4ck3d_md5} 🏴</p>
                    <p style="margin-top: 10px; color: #888;">The password was: ${targetPassword}</p>
                `;
            } else {
                resultDiv.innerHTML = `<p style="color: #f00;">✗ Incorrect. Hash doesn't match.</p>`;
            }
        };

        contentEl.querySelector('#crack-btn').addEventListener('click', checkPassword);
        input.addEventListener('keypress', (e) => {
            if (e.key === 'Enter') checkPassword();
        });
    }

    sqlInjectionChallenge(windowId, contentEl) {
        contentEl.innerHTML = `
            <div class="hackers-game-app">
                <div class="game-screen">
                    <div style="display: flex; align-items: center; margin-bottom: 20px;">
                        <button class="game-back-btn" style="background: none; border: 1px solid #00ff00; color: #00ff00; padding: 5px 15px; cursor: pointer;">← Back</button>
                        <h2 style="margin-left: 20px; color: #00ff00;">💉 SQL Injection</h2>
                    </div>
                    <div class="game-content" style="background: #1a1a1a; padding: 20px; border-radius: 5px;">
                        <div style="background: #252525; padding: 20px; border-radius: 5px; margin-bottom: 20px;">
                            <h3 style="color: #fff; margin-bottom: 15px;">🔐 Admin Login</h3>
                            <div style="margin-bottom: 10px;">
                                <label style="color: #888; display: block; margin-bottom: 5px;">Username:</label>
                                <input type="text" id="sql-username" style="background: #333; border: 1px solid #555; color: #fff; padding: 8px; width: 250px;">
                            </div>
                            <div style="margin-bottom: 15px;">
                                <label style="color: #888; display: block; margin-bottom: 5px;">Password:</label>
                                <input type="password" id="sql-password" style="background: #333; border: 1px solid #555; color: #fff; padding: 8px; width: 250px;">
                            </div>
                            <button id="sql-login-btn" style="background: #3a7; color: #fff; border: none; padding: 10px 30px; cursor: pointer;">Login</button>
                        </div>
                        <div id="sql-query" style="font-family: monospace; color: #888; font-size: 12px;"></div>
                        <div id="sql-result" style="margin-top: 15px;"></div>
                        <p style="color: #555; font-size: 11px; margin-top: 20px;">Hint: The query is: SELECT * FROM users WHERE username='[input]' AND password='[input]'</p>
                    </div>
                </div>
            </div>
        `;

        contentEl.querySelector('.game-back-btn').addEventListener('click', () => {
            this.showChallenges(windowId, contentEl);
        });

        const usernameInput = contentEl.querySelector('#sql-username');
        const passwordInput = contentEl.querySelector('#sql-password');
        const queryDiv = contentEl.querySelector('#sql-query');
        const resultDiv = contentEl.querySelector('#sql-result');

        const attemptLogin = () => {
            const username = usernameInput.value;
            const password = passwordInput.value;

            // Show the constructed query
            queryDiv.innerHTML = `Query: SELECT * FROM users WHERE username='${username}' AND password='${password}'`;

            // Check for SQL injection
            if (username.includes("'") && (username.includes("OR") || username.includes("or") || username.includes("--"))) {
                resultDiv.innerHTML = `
                    <p style="color: #0f0;">✓ SQL INJECTION SUCCESSFUL!</p>
                    <p style="color: #ff0; margin-top: 10px;">🏴 FLAG{sql_1nj3ct10n_m4st3r} 🏴</p>
                    <p style="margin-top: 10px; color: #888;">You bypassed authentication using: ${username}</p>
                `;
            } else if (username === 'admin' && password === 'admin') {
                resultDiv.innerHTML = `<p style="color: #f80;">Logged in as admin... but that's not the challenge! Try SQL injection.</p>`;
            } else {
                resultDiv.innerHTML = `<p style="color: #f00;">Login failed. Invalid credentials.</p>`;
            }
        };

        contentEl.querySelector('#sql-login-btn').addEventListener('click', attemptLogin);
    }

    networkScanChallenge(windowId, contentEl) {
        const hosts = [
            { ip: '192.168.1.1', name: 'router', ports: [22, 80, 443] },
            { ip: '192.168.1.10', name: 'webserver', ports: [80, 443, 8080] },
            { ip: '192.168.1.20', name: 'database', ports: [3306, 5432] },
            { ip: '192.168.1.42', name: 'secret-server', ports: [1337, 31337], hidden: true },
            { ip: '192.168.1.100', name: 'workstation', ports: [22, 3389] }
        ];

        contentEl.innerHTML = `
            <div class="hackers-game-app">
                <div class="game-screen">
                    <div style="display: flex; align-items: center; margin-bottom: 20px;">
                        <button class="game-back-btn" style="background: none; border: 1px solid #00ff00; color: #00ff00; padding: 5px 15px; cursor: pointer;">← Back</button>
                        <h2 style="margin-left: 20px; color: #00ff00;">🌐 Network Recon</h2>
                    </div>
                    <div class="game-content">
                        <p>Scan the 192.168.1.0/24 network to find the hidden server.</p>
                        <div style="margin-top: 20px;">
                            <input type="text" id="scan-target" placeholder="Enter IP or range (e.g., 192.168.1.42)"
                                   style="background: #111; border: 1px solid #00ff00; color: #00ff00; padding: 10px; width: 300px; font-family: monospace;">
                            <button id="scan-btn" style="background: #00ff00; color: #000; border: none; padding: 10px 20px; cursor: pointer; margin-left: 10px;">
                                Scan
                            </button>
                        </div>
                        <div id="scan-result" style="margin-top: 20px; font-family: monospace; white-space: pre-wrap;"></div>
                        <p style="color: #555; font-size: 11px; margin-top: 20px;">Hint: There's a hidden server somewhere in the 192.168.1.x range with unusual ports...</p>
                    </div>
                </div>
            </div>
        `;

        contentEl.querySelector('.game-back-btn').addEventListener('click', () => {
            this.showChallenges(windowId, contentEl);
        });

        const input = contentEl.querySelector('#scan-target');
        const resultDiv = contentEl.querySelector('#scan-result');

        const scan = () => {
            const target = input.value.trim();
            const host = hosts.find(h => h.ip === target);

            if (host) {
                let result = `<span style="color: #0ff;">Scanning ${host.ip} (${host.name})...</span>\n\n`;
                result += `Host is up.\n\n`;
                result += `PORT     STATE  SERVICE\n`;
                host.ports.forEach(p => {
                    result += `${p}/tcp   open   ${this.getServiceName(p)}\n`;
                });

                if (host.hidden) {
                    result += `\n<span style="color: #0f0;">🎯 HIDDEN SERVER FOUND!</span>\n`;
                    result += `<span style="color: #ff0;">🏴 FLAG{h1dd3n_s3rv3r_f0und} 🏴</span>`;
                }

                resultDiv.innerHTML = result;
            } else if (target.includes('/24') || target === '192.168.1.*') {
                resultDiv.innerHTML = `<span style="color: #0ff;">Scanning ${target}...</span>\n\nFound ${hosts.length} hosts up.\nTry scanning individual IPs for details.`;
            } else {
                resultDiv.innerHTML = `<span style="color: #f00;">Host ${target} appears to be down or doesn't exist.</span>`;
            }
        };

        contentEl.querySelector('#scan-btn').addEventListener('click', scan);
        input.addEventListener('keypress', (e) => {
            if (e.key === 'Enter') scan();
        });
    }

    getServiceName(port) {
        const services = {
            22: 'ssh', 80: 'http', 443: 'https', 3306: 'mysql', 5432: 'postgresql',
            8080: 'http-proxy', 3389: 'rdp', 1337: 'waste', 31337: 'Elite'
        };
        return services[port] || 'unknown';
    }

    cryptoChallenge(windowId, contentEl) {
        const plaintext = 'THE_SECRET_CODE_IS_HACKTHEBOX';
        const key = 3;
        const encrypted = plaintext.split('').map(c => {
            if (c.match(/[A-Z]/)) {
                return String.fromCharCode(((c.charCodeAt(0) - 65 + key) % 26) + 65);
            }
            return c;
        }).join('');

        contentEl.innerHTML = `
            <div class="hackers-game-app">
                <div class="game-screen">
                    <div style="display: flex; align-items: center; margin-bottom: 20px;">
                        <button class="game-back-btn" style="background: none; border: 1px solid #00ff00; color: #00ff00; padding: 5px 15px; cursor: pointer;">← Back</button>
                        <h2 style="margin-left: 20px; color: #00ff00;">🔤 Cipher Cracker</h2>
                    </div>
                    <div class="game-content">
                        <p>You intercepted an encrypted message. Decode it to find the secret.</p>
                        <p style="margin-top: 15px;">Encrypted: <span style="color: #ff0; font-family: monospace;">${encrypted}</span></p>
                        <p style="margin-top: 15px; color: #888;">Hint: This is a Caesar cipher. Try different shift values (1-25).</p>
                        <div style="margin-top: 20px;">
                            <label style="color: #888;">Shift value: </label>
                            <input type="number" id="shift-value" min="1" max="25" value="1"
                                   style="background: #111; border: 1px solid #00ff00; color: #00ff00; padding: 10px; width: 60px; font-family: monospace;">
                            <button id="decode-btn" style="background: #00ff00; color: #000; border: none; padding: 10px 20px; cursor: pointer; margin-left: 10px;">
                                Decode
                            </button>
                        </div>
                        <div style="margin-top: 20px;">
                            <p style="color: #888;">Your answer:</p>
                            <input type="text" id="crypto-answer" placeholder="Enter decoded message..."
                                   style="background: #111; border: 1px solid #00ff00; color: #00ff00; padding: 10px; width: 400px; font-family: monospace; margin-top: 10px;">
                            <button id="submit-answer" style="background: #0a0; color: #fff; border: none; padding: 10px 20px; cursor: pointer; margin-left: 10px;">
                                Submit
                            </button>
                        </div>
                        <div id="crypto-result" style="margin-top: 20px; font-family: monospace;"></div>
                    </div>
                </div>
            </div>
        `;

        contentEl.querySelector('.game-back-btn').addEventListener('click', () => {
            this.showChallenges(windowId, contentEl);
        });

        const shiftInput = contentEl.querySelector('#shift-value');
        const resultDiv = contentEl.querySelector('#crypto-result');

        contentEl.querySelector('#decode-btn').addEventListener('click', () => {
            const shift = parseInt(shiftInput.value);
            const decoded = encrypted.split('').map(c => {
                if (c.match(/[A-Z]/)) {
                    return String.fromCharCode(((c.charCodeAt(0) - 65 - shift + 26) % 26) + 65);
                }
                return c;
            }).join('');
            resultDiv.innerHTML = `<span style="color: #0ff;">Decoded (shift ${shift}): ${decoded}</span>`;
        });

        contentEl.querySelector('#submit-answer').addEventListener('click', () => {
            const answer = contentEl.querySelector('#crypto-answer').value.toUpperCase().replace(/\s/g, '_');
            if (answer === plaintext) {
                resultDiv.innerHTML = `
                    <p style="color: #0f0;">✓ CORRECT! Message decoded!</p>
                    <p style="color: #ff0; margin-top: 10px;">🏴 FLAG{c43s4r_c1ph3r_cr4ck3d} 🏴</p>
                `;
            } else {
                resultDiv.innerHTML = `<p style="color: #f00;">✗ Incorrect. Keep trying!</p>`;
            }
        });
    }

    showStory(windowId, contentEl) {
        contentEl.innerHTML = `
            <div class="hackers-game-app">
                <div class="game-screen">
                    <div style="display: flex; align-items: center; margin-bottom: 20px;">
                        <button class="game-back-btn" style="background: none; border: 1px solid #00ff00; color: #00ff00; padding: 5px 15px; cursor: pointer;">← Back</button>
                        <h2 style="margin-left: 20px; color: #00ff00;">📖 Story Mode</h2>
                    </div>
                    <div class="game-content" style="line-height: 1.8;">
                        <p style="color: #0f0;">[ INCOMING TRANSMISSION ]</p>
                        <p style="margin-top: 20px;">Agent,</p>
                        <p style="margin-top: 15px;">Welcome to the Hackers Game network. You've been selected for your exceptional skills in digital reconnaissance and system penetration.</p>
                        <p style="margin-top: 15px;">Your first mission: Explore this desktop environment. Hidden within its files and systems are flags - digital proof of your capabilities.</p>
                        <p style="margin-top: 15px;">Use the terminal. Navigate the filesystem. Crack the codes. Find the secrets.</p>
                        <p style="margin-top: 15px;">The challenges await. Show us what you're made of.</p>
                        <p style="margin-top: 25px; color: #888;">-- The Collective</p>
                        <p style="margin-top: 30px; color: #555; font-size: 12px;">[ END TRANSMISSION ]</p>
                        <p style="margin-top: 30px; color: #0ff;">Tips:</p>
                        <ul style="color: #888; margin-top: 10px; margin-left: 20px;">
                            <li>Open the Terminal and try 'help'</li>
                            <li>Explore hidden files with 'ls -a'</li>
                            <li>Check /var/log for clues</li>
                            <li>Play the Challenges for guided missions</li>
                        </ul>
                    </div>
                </div>
            </div>
        `;

        contentEl.querySelector('.game-back-btn').addEventListener('click', () => {
            this.showMenu(windowId, contentEl);
        });
    }

    showAbout(windowId, contentEl) {
        contentEl.innerHTML = `
            <div class="hackers-game-app">
                <div class="game-screen">
                    <div style="display: flex; align-items: center; margin-bottom: 20px;">
                        <button class="game-back-btn" style="background: none; border: 1px solid #00ff00; color: #00ff00; padding: 5px 15px; cursor: pointer;">← Back</button>
                        <h2 style="margin-left: 20px; color: #00ff00;">ℹ️ About</h2>
                    </div>
                    <div class="game-content" style="text-align: center;">
                        <p style="font-size: 48px;">🎮</p>
                        <h2 style="margin-top: 20px;">Hackers Game</h2>
                        <p style="color: #888; margin-top: 10px;">Version 2.0</p>
                        <p style="margin-top: 30px; max-width: 500px; margin-left: auto; margin-right: auto;">
                            Hackers Game is an educational platform designed to teach cybersecurity concepts through interactive challenges and a simulated desktop environment.
                        </p>
                        <p style="margin-top: 20px; color: #888;">
                            All challenges are simulations. No real systems are accessed or harmed.
                        </p>
                        <div style="margin-top: 40px; padding-top: 20px; border-top: 1px solid #333;">
                            <p style="color: #555; font-size: 12px;">Made with 💚 for the hacker community</p>
                        </div>
                    </div>
                </div>
            </div>
        `;

        contentEl.querySelector('.game-back-btn').addEventListener('click', () => {
            this.showMenu(windowId, contentEl);
        });
    }
}

// Global instance
const hackersGameApp = new HackersGameApp();
