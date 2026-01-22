/**
 * Compiz-style Desktop Effects
 * Wobbly windows, desktop cube, and more
 */

class CompizEffects {
    constructor() {
        this.enabled = {
            wobbly: true,
            cube: true,
            expo: true,
            glow: true,
            animations: true
        };

        this.workspaces = ['Main', 'Work', 'Games', 'Media'];
        this.currentWorkspace = 0;
        this.cubeRotation = 0;

        this.init();
    }

    init() {
        this.loadSettings();
        this.createWorkspaceSwitcher();
        this.createCubeContainer();
        this.createExpoOverlay();
        this.setupKeyboardShortcuts();
        this.setupWindowEffects();
    }

    loadSettings() {
        try {
            const saved = localStorage.getItem('compiz-settings');
            if (saved) {
                this.enabled = { ...this.enabled, ...JSON.parse(saved) };
            }
        } catch (e) {}
    }

    saveSettings() {
        try {
            localStorage.setItem('compiz-settings', JSON.stringify(this.enabled));
        } catch (e) {}
    }

    // Workspace Switcher
    createWorkspaceSwitcher() {
        const switcher = document.createElement('div');
        switcher.id = 'workspace-switcher';
        switcher.innerHTML = this.workspaces.map((name, i) => `
            <div class="workspace-indicator ${i === 0 ? 'active' : ''}"
                 data-workspace="${i}"
                 title="${name}"></div>
        `).join('');

        document.body.appendChild(switcher);

        switcher.querySelectorAll('.workspace-indicator').forEach(ind => {
            ind.addEventListener('click', () => {
                this.switchWorkspace(parseInt(ind.dataset.workspace));
            });
        });
    }

    switchWorkspace(index) {
        if (index === this.currentWorkspace) return;

        const indicators = document.querySelectorAll('.workspace-indicator');
        indicators.forEach((ind, i) => {
            ind.classList.toggle('active', i === index);
        });

        // Animate transition with cube effect
        if (this.enabled.cube) {
            this.showCubeTransition(this.currentWorkspace, index);
        }

        this.currentWorkspace = index;
    }

    // Desktop Cube
    createCubeContainer() {
        const container = document.createElement('div');
        container.id = 'desktop-cube-container';
        container.innerHTML = `
            <div class="desktop-cube">
                <div class="cube-face front">
                    <div class="cube-face-label">Main</div>
                </div>
                <div class="cube-face right">
                    <div class="cube-face-label">Work</div>
                </div>
                <div class="cube-face back">
                    <div class="cube-face-label">Games</div>
                </div>
                <div class="cube-face left">
                    <div class="cube-face-label">Media</div>
                </div>
            </div>
        `;
        document.body.appendChild(container);
    }

    showCubeTransition(from, to) {
        const container = document.getElementById('desktop-cube-container');
        const cube = container.querySelector('.desktop-cube');

        container.classList.add('active');

        // Calculate rotation
        const diff = to - from;
        this.cubeRotation += diff * 90;

        cube.style.transform = `rotateY(${-this.cubeRotation}deg)`;

        setTimeout(() => {
            container.classList.remove('active');
        }, 600);
    }

    showCube() {
        const container = document.getElementById('desktop-cube-container');
        container.classList.add('active');
    }

    hideCube() {
        const container = document.getElementById('desktop-cube-container');
        container.classList.remove('active');
    }

    // Expo Mode
    createExpoOverlay() {
        const overlay = document.createElement('div');
        overlay.id = 'expo-overlay';
        document.body.appendChild(overlay);
    }

    showExpo() {
        const overlay = document.getElementById('expo-overlay');
        overlay.innerHTML = '';

        // Get all windows
        const windows = document.querySelectorAll('.window:not(.minimized)');

        if (windows.length === 0) {
            overlay.innerHTML = `
                <div style="grid-column: 1/-1; text-align: center; color: #666;">
                    <p style="font-size: 24px;">No windows open</p>
                    <p>Press Escape to close</p>
                </div>
            `;
        } else {
            windows.forEach(win => {
                const title = win.querySelector('.window-title')?.textContent || 'Window';
                const icon = title.match(/^[^\s]+/)?.[0] || '🪟';

                const preview = document.createElement('div');
                preview.className = 'expo-window';
                preview.dataset.windowId = win.id;
                preview.innerHTML = `
                    <div class="expo-window-title">${title}</div>
                    <div class="expo-window-preview">${icon}</div>
                `;

                preview.addEventListener('click', () => {
                    this.hideExpo();
                    windowManager.focusWindow(win.id);
                });

                overlay.appendChild(preview);
            });
        }

        overlay.classList.add('active');
    }

    hideExpo() {
        const overlay = document.getElementById('expo-overlay');
        overlay.classList.remove('active');
    }

    toggleExpo() {
        const overlay = document.getElementById('expo-overlay');
        if (overlay.classList.contains('active')) {
            this.hideExpo();
        } else {
            this.showExpo();
        }
    }

    // Window Effects
    setupWindowEffects() {
        // Override window manager methods to add effects
        const originalCreateWindow = windowManager.createWindow.bind(windowManager);
        windowManager.createWindow = (options) => {
            const result = originalCreateWindow(options);

            // Add effects to new window
            const windowEl = windowManager.getWindow(result.windowId)?.element;
            if (windowEl && this.enabled.animations) {
                windowEl.classList.remove('closing');
                windowEl.classList.add('zoom-open');
                if (this.enabled.glow) {
                    windowEl.classList.add('glow-effect');
                }
            }

            return result;
        };

        // Add wobbly effect on drag
        document.addEventListener('mousedown', (e) => {
            if (!this.enabled.wobbly) return;

            const titlebar = e.target.closest('.window-titlebar');
            if (titlebar && !e.target.closest('.win-btn')) {
                const win = titlebar.closest('.window');
                if (win) {
                    win.classList.add('wobbly-enabled');
                }
            }
        });

        document.addEventListener('mouseup', () => {
            document.querySelectorAll('.window.wobbly-enabled').forEach(win => {
                win.classList.remove('wobbly-enabled');
                win.classList.add('wobble');
                setTimeout(() => win.classList.remove('wobble'), 300);
            });
        });
    }

    // Keyboard Shortcuts
    setupKeyboardShortcuts() {
        document.addEventListener('keydown', (e) => {
            // Super + E = Expo
            if (e.key === 'e' && (e.metaKey || e.ctrlKey)) {
                e.preventDefault();
                this.toggleExpo();
            }

            // Escape to close expo/cube
            if (e.key === 'Escape') {
                this.hideExpo();
                this.hideCube();
            }

            // Ctrl + Alt + Left/Right = Switch workspace
            if (e.ctrlKey && e.altKey) {
                if (e.key === 'ArrowRight') {
                    e.preventDefault();
                    this.switchWorkspace((this.currentWorkspace + 1) % this.workspaces.length);
                } else if (e.key === 'ArrowLeft') {
                    e.preventDefault();
                    this.switchWorkspace((this.currentWorkspace - 1 + this.workspaces.length) % this.workspaces.length);
                }
            }
        });
    }

    // Settings
    toggle(effect) {
        this.enabled[effect] = !this.enabled[effect];
        this.saveSettings();

        // Apply changes
        if (effect === 'glow') {
            document.querySelectorAll('.window').forEach(win => {
                win.classList.toggle('glow-effect', this.enabled.glow);
            });
        }

        return this.enabled[effect];
    }
}

// Initialize - must happen before any windows are created
// DOM elements for compiz UI are created dynamically, so we can init immediately
// if windowManager exists, otherwise wait for DOMContentLoaded
let compiz;
if (typeof windowManager !== 'undefined') {
    // windowManager exists, init now but wait for DOM for UI elements
    document.addEventListener('DOMContentLoaded', () => {
        compiz = new CompizEffects();
    });
} else {
    document.addEventListener('DOMContentLoaded', () => {
        compiz = new CompizEffects();
    });
}
