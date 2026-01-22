/**
 * Code Playground App - Fun coding experiments and visualizations
 */

class HackersGameApp {
    constructor() {
        this.instances = new Map();
        this.experiments = [
            {
                id: 'ascii-art',
                name: 'ASCII Art Generator',
                description: 'Create cool ASCII art from text',
                icon: '🎨'
            },
            {
                id: 'sorting-viz',
                name: 'Sorting Visualizer',
                description: 'Watch sorting algorithms in action',
                icon: '📊'
            },
            {
                id: 'conway',
                name: "Conway's Game of Life",
                description: 'Cellular automaton simulation',
                icon: '🧬'
            },
            {
                id: 'fractal',
                name: 'Fractal Generator',
                description: 'Generate beautiful fractals',
                icon: '🌀'
            },
            {
                id: 'regex',
                name: 'Regex Tester',
                description: 'Test regular expressions live',
                icon: '🔤'
            }
        ];
    }

    open() {
        const { windowId, contentEl } = windowManager.createWindow({
            title: 'Code Playground',
            icon: '&#128187;',
            width: 800,
            height: 550,
            app: 'hackers-game'
        });

        const instance = {
            windowId,
            currentScreen: 'menu'
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
                        <pre style="color: #87a752; font-size: 10px; line-height: 1.2;">
   ____          _        ____  _                                             _
  / ___|___   __| | ___  |  _ \\| | __ _ _   _  __ _ _ __ ___  _   _ _ __   __| |
 | |   / _ \\ / _\` |/ _ \\ | |_) | |/ _\` | | | |/ _\` | '__/ _ \\| | | | '_ \\ / _\` |
 | |__| (_) | (_| |  __/ |  __/| | (_| | |_| | (_| | | | (_) | |_| | | | | (_| |
  \\____\\___/ \\__,_|\\___| |_|   |_|\\__,_|\\__, |\\__, |_|  \\___/ \\__,_|_| |_|\\__,_|
                                        |___/ |___/
                        </pre>
                        <p style="color: #888; margin-top: 10px;">Fun coding experiments and visualizations</p>
                    </div>
                    <div class="game-menu">
                        ${this.experiments.map(exp => `
                            <button class="game-menu-item" data-action="${exp.id}">
                                ${exp.icon} ${exp.name}
                            </button>
                        `).join('')}
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
                this.launchExperiment(windowId, contentEl, action);
            });
        });
    }

    launchExperiment(windowId, contentEl, expId) {
        switch (expId) {
            case 'ascii-art':
                this.asciiArtGenerator(windowId, contentEl);
                break;
            case 'sorting-viz':
                this.sortingVisualizer(windowId, contentEl);
                break;
            case 'conway':
                this.gameOfLife(windowId, contentEl);
                break;
            case 'fractal':
                this.fractalGenerator(windowId, contentEl);
                break;
            case 'regex':
                this.regexTester(windowId, contentEl);
                break;
            default:
                this.showMenu(windowId, contentEl);
        }
    }

    asciiArtGenerator(windowId, contentEl) {
        const fonts = {
            standard: {
                A: [' █████╗ ','██╔══██╗','███████║','██╔══██║','██║  ██║','╚═╝  ╚═╝'],
                B: ['██████╗ ','██╔══██╗','██████╔╝','██╔══██╗','██████╔╝','╚═════╝ '],
                C: [' ██████╗','██╔════╝','██║     ','██║     ','╚██████╗',' ╚═════╝'],
                D: ['██████╗ ','██╔══██╗','██║  ██║','██║  ██║','██████╔╝','╚═════╝ '],
                E: ['███████╗','██╔════╝','█████╗  ','██╔══╝  ','███████╗','╚══════╝'],
                F: ['███████╗','██╔════╝','█████╗  ','██╔══╝  ','██║     ','╚═╝     '],
                G: [' ██████╗ ','██╔════╝ ','██║  ███╗','██║   ██║','╚██████╔╝',' ╚═════╝ '],
                H: ['██╗  ██╗','██║  ██║','███████║','██╔══██║','██║  ██║','╚═╝  ╚═╝'],
                I: ['██╗','██║','██║','██║','██║','╚═╝'],
                J: ['     ██╗','     ██║','     ██║','██   ██║','╚█████╔╝',' ╚════╝ '],
                K: ['██╗  ██╗','██║ ██╔╝','█████╔╝ ','██╔═██╗ ','██║  ██╗','╚═╝  ╚═╝'],
                L: ['██╗     ','██║     ','██║     ','██║     ','███████╗','╚══════╝'],
                M: ['███╗   ███╗','████╗ ████║','██╔████╔██║','██║╚██╔╝██║','██║ ╚═╝ ██║','╚═╝     ╚═╝'],
                N: ['███╗   ██╗','████╗  ██║','██╔██╗ ██║','██║╚██╗██║','██║ ╚████║','╚═╝  ╚═══╝'],
                O: [' ██████╗ ','██╔═══██╗','██║   ██║','██║   ██║','╚██████╔╝',' ╚═════╝ '],
                P: ['██████╗ ','██╔══██╗','██████╔╝','██╔═══╝ ','██║     ','╚═╝     '],
                Q: [' ██████╗ ','██╔═══██╗','██║   ██║','██║▄▄ ██║','╚██████╔╝',' ╚══▀▀═╝ '],
                R: ['██████╗ ','██╔══██╗','██████╔╝','██╔══██╗','██║  ██║','╚═╝  ╚═╝'],
                S: ['███████╗','██╔════╝','███████╗','╚════██║','███████║','╚══════╝'],
                T: ['████████╗','╚══██╔══╝','   ██║   ','   ██║   ','   ██║   ','   ╚═╝   '],
                U: ['██╗   ██╗','██║   ██║','██║   ██║','██║   ██║','╚██████╔╝',' ╚═════╝ '],
                V: ['██╗   ██╗','██║   ██║','██║   ██║','╚██╗ ██╔╝',' ╚████╔╝ ','  ╚═══╝  '],
                W: ['██╗    ██╗','██║    ██║','██║ █╗ ██║','██║███╗██║','╚███╔███╔╝',' ╚══╝╚══╝ '],
                X: ['██╗  ██╗','╚██╗██╔╝',' ╚███╔╝ ',' ██╔██╗ ','██╔╝ ██╗','╚═╝  ╚═╝'],
                Y: ['██╗   ██╗','╚██╗ ██╔╝',' ╚████╔╝ ','  ╚██╔╝  ','   ██║   ','   ╚═╝   '],
                Z: ['███████╗','╚══███╔╝','  ███╔╝ ',' ███╔╝  ','███████╗','╚══════╝'],
                ' ': ['    ','    ','    ','    ','    ','    ']
            }
        };

        const generateAscii = (text) => {
            const upper = text.toUpperCase();
            const lines = ['', '', '', '', '', ''];
            for (const char of upper) {
                const art = fonts.standard[char] || fonts.standard[' '];
                for (let i = 0; i < 6; i++) {
                    lines[i] += art[i];
                }
            }
            return lines.join('\n');
        };

        contentEl.innerHTML = `
            <div class="hackers-game-app">
                <div class="game-screen">
                    <div style="display: flex; align-items: center; margin-bottom: 20px;">
                        <button class="game-back-btn">← Back</button>
                        <h2 style="margin-left: 20px; color: #87a752;">🎨 ASCII Art Generator</h2>
                    </div>
                    <div class="game-content">
                        <input type="text" id="ascii-input" placeholder="Type something..." maxlength="12"
                               style="background: #111; border: 1px solid #87a752; color: #87a752; padding: 10px; width: 300px; font-family: monospace;">
                        <pre id="ascii-output" style="color: #87a752; margin-top: 20px; font-size: 8px; line-height: 1;"></pre>
                    </div>
                </div>
            </div>
        `;

        contentEl.querySelector('.game-back-btn').addEventListener('click', () => this.showMenu(windowId, contentEl));

        const input = contentEl.querySelector('#ascii-input');
        const output = contentEl.querySelector('#ascii-output');

        input.addEventListener('input', () => {
            output.textContent = generateAscii(input.value || 'HI');
        });

        output.textContent = generateAscii('HI');
    }

    sortingVisualizer(windowId, contentEl) {
        let array = [];
        let sorting = false;
        let animationId = null;

        const generateArray = () => {
            array = Array.from({ length: 50 }, () => Math.floor(Math.random() * 200) + 10);
            renderArray();
        };

        const renderArray = (highlightIndices = []) => {
            const container = contentEl.querySelector('#sort-container');
            if (!container) return;

            container.innerHTML = array.map((val, i) =>
                `<div class="sort-bar ${highlightIndices.includes(i) ? 'highlight' : ''}"
                      style="height: ${val}px;"></div>`
            ).join('');
        };

        const sleep = (ms) => new Promise(resolve => setTimeout(resolve, ms));

        const bubbleSort = async () => {
            sorting = true;
            const n = array.length;
            for (let i = 0; i < n - 1 && sorting; i++) {
                for (let j = 0; j < n - i - 1 && sorting; j++) {
                    renderArray([j, j + 1]);
                    if (array[j] > array[j + 1]) {
                        [array[j], array[j + 1]] = [array[j + 1], array[j]];
                    }
                    await sleep(20);
                }
            }
            sorting = false;
            renderArray();
        };

        const quickSort = async (low = 0, high = array.length - 1) => {
            if (low < high && sorting) {
                const pivot = array[high];
                let i = low - 1;
                for (let j = low; j < high && sorting; j++) {
                    renderArray([j, high]);
                    await sleep(30);
                    if (array[j] < pivot) {
                        i++;
                        [array[i], array[j]] = [array[j], array[i]];
                    }
                }
                [array[i + 1], array[high]] = [array[high], array[i + 1]];
                const pi = i + 1;
                await quickSort(low, pi - 1);
                await quickSort(pi + 1, high);
            }
            if (low === 0 && high === array.length - 1) {
                sorting = false;
                renderArray();
            }
        };

        contentEl.innerHTML = `
            <div class="hackers-game-app">
                <div class="game-screen">
                    <div style="display: flex; align-items: center; margin-bottom: 20px;">
                        <button class="game-back-btn">← Back</button>
                        <h2 style="margin-left: 20px; color: #87a752;">📊 Sorting Visualizer</h2>
                    </div>
                    <div class="game-content">
                        <div style="margin-bottom: 15px;">
                            <button id="btn-generate" class="sort-btn">New Array</button>
                            <button id="btn-bubble" class="sort-btn">Bubble Sort</button>
                            <button id="btn-quick" class="sort-btn">Quick Sort</button>
                            <button id="btn-stop" class="sort-btn" style="background: #a75252;">Stop</button>
                        </div>
                        <div id="sort-container" style="display: flex; align-items: flex-end; gap: 2px; height: 220px; background: #111; padding: 10px;"></div>
                        <style>
                            .sort-btn { background: #87a752; color: #000; border: none; padding: 8px 15px; cursor: pointer; margin-right: 5px; }
                            .sort-btn:hover { background: #9ab862; }
                            .sort-bar { width: 8px; background: #87a752; transition: height 0.05s; }
                            .sort-bar.highlight { background: #ff0; }
                        </style>
                    </div>
                </div>
            </div>
        `;

        contentEl.querySelector('.game-back-btn').addEventListener('click', () => {
            sorting = false;
            this.showMenu(windowId, contentEl);
        });

        contentEl.querySelector('#btn-generate').addEventListener('click', () => {
            if (!sorting) generateArray();
        });

        contentEl.querySelector('#btn-bubble').addEventListener('click', () => {
            if (!sorting) { sorting = true; bubbleSort(); }
        });

        contentEl.querySelector('#btn-quick').addEventListener('click', () => {
            if (!sorting) { sorting = true; quickSort(); }
        });

        contentEl.querySelector('#btn-stop').addEventListener('click', () => {
            sorting = false;
        });

        generateArray();
    }

    gameOfLife(windowId, contentEl) {
        const rows = 30;
        const cols = 50;
        let grid = Array(rows).fill().map(() => Array(cols).fill(false));
        let running = false;
        let intervalId = null;

        const randomize = () => {
            grid = grid.map(row => row.map(() => Math.random() > 0.7));
            render();
        };

        const clear = () => {
            grid = Array(rows).fill().map(() => Array(cols).fill(false));
            render();
        };

        const countNeighbors = (r, c) => {
            let count = 0;
            for (let dr = -1; dr <= 1; dr++) {
                for (let dc = -1; dc <= 1; dc++) {
                    if (dr === 0 && dc === 0) continue;
                    const nr = (r + dr + rows) % rows;
                    const nc = (c + dc + cols) % cols;
                    if (grid[nr][nc]) count++;
                }
            }
            return count;
        };

        const step = () => {
            const newGrid = grid.map((row, r) =>
                row.map((cell, c) => {
                    const neighbors = countNeighbors(r, c);
                    if (cell) return neighbors === 2 || neighbors === 3;
                    return neighbors === 3;
                })
            );
            grid = newGrid;
            render();
        };

        const render = () => {
            const container = contentEl.querySelector('#life-grid');
            if (!container) return;
            container.innerHTML = grid.map((row, r) =>
                row.map((cell, c) =>
                    `<div class="life-cell ${cell ? 'alive' : ''}" data-r="${r}" data-c="${c}"></div>`
                ).join('')
            ).join('');
        };

        contentEl.innerHTML = `
            <div class="hackers-game-app">
                <div class="game-screen">
                    <div style="display: flex; align-items: center; margin-bottom: 10px;">
                        <button class="game-back-btn">← Back</button>
                        <h2 style="margin-left: 20px; color: #87a752;">🧬 Conway's Game of Life</h2>
                    </div>
                    <div class="game-content">
                        <div style="margin-bottom: 10px;">
                            <button id="btn-start" class="life-btn">▶ Start</button>
                            <button id="btn-step" class="life-btn">⏭ Step</button>
                            <button id="btn-random" class="life-btn">🎲 Random</button>
                            <button id="btn-clear" class="life-btn">🗑 Clear</button>
                        </div>
                        <div id="life-grid" style="display: grid; grid-template-columns: repeat(${cols}, 10px); gap: 1px; background: #111; padding: 5px;"></div>
                        <p style="color: #666; font-size: 11px; margin-top: 10px;">Click cells to toggle. Classic rules: Live cells with 2-3 neighbors survive, dead cells with 3 neighbors become alive.</p>
                        <style>
                            .life-btn { background: #87a752; color: #000; border: none; padding: 6px 12px; cursor: pointer; margin-right: 5px; }
                            .life-cell { width: 10px; height: 10px; background: #222; cursor: pointer; }
                            .life-cell.alive { background: #87a752; }
                            .life-cell:hover { background: #555; }
                        </style>
                    </div>
                </div>
            </div>
        `;

        contentEl.querySelector('.game-back-btn').addEventListener('click', () => {
            if (intervalId) clearInterval(intervalId);
            this.showMenu(windowId, contentEl);
        });

        contentEl.querySelector('#btn-start').addEventListener('click', function() {
            running = !running;
            this.textContent = running ? '⏸ Pause' : '▶ Start';
            if (running) {
                intervalId = setInterval(step, 100);
            } else {
                clearInterval(intervalId);
            }
        });

        contentEl.querySelector('#btn-step').addEventListener('click', () => { if (!running) step(); });
        contentEl.querySelector('#btn-random').addEventListener('click', randomize);
        contentEl.querySelector('#btn-clear').addEventListener('click', clear);

        contentEl.querySelector('#life-grid').addEventListener('click', (e) => {
            if (e.target.classList.contains('life-cell')) {
                const r = parseInt(e.target.dataset.r);
                const c = parseInt(e.target.dataset.c);
                grid[r][c] = !grid[r][c];
                render();
            }
        });

        randomize();
    }

    fractalGenerator(windowId, contentEl) {
        contentEl.innerHTML = `
            <div class="hackers-game-app">
                <div class="game-screen">
                    <div style="display: flex; align-items: center; margin-bottom: 10px;">
                        <button class="game-back-btn">← Back</button>
                        <h2 style="margin-left: 20px; color: #87a752;">🌀 Fractal Generator</h2>
                    </div>
                    <div class="game-content">
                        <div style="margin-bottom: 10px;">
                            <select id="fractal-type" style="background: #222; color: #87a752; border: 1px solid #87a752; padding: 5px;">
                                <option value="mandelbrot">Mandelbrot Set</option>
                                <option value="julia">Julia Set</option>
                                <option value="sierpinski">Sierpinski Triangle</option>
                            </select>
                            <button id="btn-generate" style="background: #87a752; color: #000; border: none; padding: 6px 15px; cursor: pointer; margin-left: 10px;">Generate</button>
                        </div>
                        <canvas id="fractal-canvas" width="500" height="350" style="background: #000; border: 1px solid #333;"></canvas>
                        <p style="color: #666; font-size: 11px; margin-top: 10px;">Mathematical art through recursive algorithms</p>
                    </div>
                </div>
            </div>
        `;

        const canvas = contentEl.querySelector('#fractal-canvas');
        const ctx = canvas.getContext('2d');

        const drawMandelbrot = () => {
            const width = canvas.width;
            const height = canvas.height;
            const imageData = ctx.createImageData(width, height);

            for (let px = 0; px < width; px++) {
                for (let py = 0; py < height; py++) {
                    const x0 = (px / width) * 3.5 - 2.5;
                    const y0 = (py / height) * 2 - 1;
                    let x = 0, y = 0, iteration = 0;
                    const maxIter = 100;

                    while (x*x + y*y <= 4 && iteration < maxIter) {
                        const xtemp = x*x - y*y + x0;
                        y = 2*x*y + y0;
                        x = xtemp;
                        iteration++;
                    }

                    const idx = (py * width + px) * 4;
                    if (iteration === maxIter) {
                        imageData.data[idx] = 0;
                        imageData.data[idx+1] = 0;
                        imageData.data[idx+2] = 0;
                    } else {
                        const hue = iteration / maxIter;
                        imageData.data[idx] = Math.floor(hue * 135);
                        imageData.data[idx+1] = Math.floor(hue * 167);
                        imageData.data[idx+2] = Math.floor(hue * 82);
                    }
                    imageData.data[idx+3] = 255;
                }
            }
            ctx.putImageData(imageData, 0, 0);
        };

        const drawJulia = () => {
            const width = canvas.width;
            const height = canvas.height;
            const imageData = ctx.createImageData(width, height);
            const cRe = -0.7, cIm = 0.27015;

            for (let px = 0; px < width; px++) {
                for (let py = 0; py < height; py++) {
                    let x = (px / width) * 3 - 1.5;
                    let y = (py / height) * 2 - 1;
                    let iteration = 0;
                    const maxIter = 100;

                    while (x*x + y*y <= 4 && iteration < maxIter) {
                        const xtemp = x*x - y*y + cRe;
                        y = 2*x*y + cIm;
                        x = xtemp;
                        iteration++;
                    }

                    const idx = (py * width + px) * 4;
                    const hue = iteration / maxIter;
                    imageData.data[idx] = Math.floor(hue * 200);
                    imageData.data[idx+1] = Math.floor(hue * 100);
                    imageData.data[idx+2] = Math.floor(hue * 150);
                    imageData.data[idx+3] = 255;
                }
            }
            ctx.putImageData(imageData, 0, 0);
        };

        const drawSierpinski = () => {
            ctx.fillStyle = '#000';
            ctx.fillRect(0, 0, canvas.width, canvas.height);
            ctx.fillStyle = '#87a752';

            const drawTriangle = (x, y, size, depth) => {
                if (depth === 0) {
                    ctx.beginPath();
                    ctx.moveTo(x, y);
                    ctx.lineTo(x + size, y);
                    ctx.lineTo(x + size/2, y - size * Math.sqrt(3)/2);
                    ctx.closePath();
                    ctx.fill();
                } else {
                    const newSize = size / 2;
                    drawTriangle(x, y, newSize, depth - 1);
                    drawTriangle(x + newSize, y, newSize, depth - 1);
                    drawTriangle(x + newSize/2, y - newSize * Math.sqrt(3)/2, newSize, depth - 1);
                }
            };

            drawTriangle(50, 340, 400, 6);
        };

        contentEl.querySelector('.game-back-btn').addEventListener('click', () => this.showMenu(windowId, contentEl));

        contentEl.querySelector('#btn-generate').addEventListener('click', () => {
            const type = contentEl.querySelector('#fractal-type').value;
            switch (type) {
                case 'mandelbrot': drawMandelbrot(); break;
                case 'julia': drawJulia(); break;
                case 'sierpinski': drawSierpinski(); break;
            }
        });

        drawMandelbrot();
    }

    regexTester(windowId, contentEl) {
        contentEl.innerHTML = `
            <div class="hackers-game-app">
                <div class="game-screen">
                    <div style="display: flex; align-items: center; margin-bottom: 20px;">
                        <button class="game-back-btn">← Back</button>
                        <h2 style="margin-left: 20px; color: #87a752;">🔤 Regex Tester</h2>
                    </div>
                    <div class="game-content">
                        <div style="margin-bottom: 15px;">
                            <label style="color: #888; display: block; margin-bottom: 5px;">Pattern:</label>
                            <input type="text" id="regex-pattern" placeholder="e.g., \\d+|[a-z]+"
                                   style="background: #111; border: 1px solid #87a752; color: #87a752; padding: 10px; width: 400px; font-family: monospace;">
                            <span id="regex-flags" style="margin-left: 10px;">
                                <label style="color: #666;"><input type="checkbox" id="flag-g" checked> g</label>
                                <label style="color: #666; margin-left: 10px;"><input type="checkbox" id="flag-i"> i</label>
                                <label style="color: #666; margin-left: 10px;"><input type="checkbox" id="flag-m"> m</label>
                            </span>
                        </div>
                        <div style="margin-bottom: 15px;">
                            <label style="color: #888; display: block; margin-bottom: 5px;">Test String:</label>
                            <textarea id="regex-input" rows="5" placeholder="Enter text to test..."
                                      style="background: #111; border: 1px solid #87a752; color: #fff; padding: 10px; width: 400px; font-family: monospace; resize: vertical;"></textarea>
                        </div>
                        <div id="regex-result" style="background: #111; padding: 15px; min-height: 60px; font-family: monospace;"></div>
                        <div id="regex-matches" style="color: #888; margin-top: 10px; font-size: 12px;"></div>
                    </div>
                </div>
            </div>
        `;

        const testRegex = () => {
            const pattern = contentEl.querySelector('#regex-pattern').value;
            const input = contentEl.querySelector('#regex-input').value;
            const resultDiv = contentEl.querySelector('#regex-result');
            const matchesDiv = contentEl.querySelector('#regex-matches');

            if (!pattern) {
                resultDiv.innerHTML = `<span style="color: #666;">Enter a regex pattern</span>`;
                matchesDiv.textContent = '';
                return;
            }

            try {
                let flags = '';
                if (contentEl.querySelector('#flag-g').checked) flags += 'g';
                if (contentEl.querySelector('#flag-i').checked) flags += 'i';
                if (contentEl.querySelector('#flag-m').checked) flags += 'm';

                const regex = new RegExp(pattern, flags);
                const matches = input.match(regex) || [];

                // Highlight matches in the result
                let highlighted = input.replace(regex, '<span style="background: #87a752; color: #000;">$&</span>');
                resultDiv.innerHTML = highlighted || `<span style="color: #666;">No matches</span>`;

                matchesDiv.textContent = matches.length > 0
                    ? `${matches.length} match${matches.length > 1 ? 'es' : ''}: ${matches.slice(0, 10).join(', ')}${matches.length > 10 ? '...' : ''}`
                    : 'No matches found';
            } catch (e) {
                resultDiv.innerHTML = `<span style="color: #f66;">Invalid regex: ${e.message}</span>`;
                matchesDiv.textContent = '';
            }
        };

        contentEl.querySelector('.game-back-btn').addEventListener('click', () => this.showMenu(windowId, contentEl));
        contentEl.querySelector('#regex-pattern').addEventListener('input', testRegex);
        contentEl.querySelector('#regex-input').addEventListener('input', testRegex);
        contentEl.querySelectorAll('input[type="checkbox"]').forEach(cb => cb.addEventListener('change', testRegex));
    }
}

// Global instance
const hackersGameApp = new HackersGameApp();
