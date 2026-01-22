/**
 * Compiz-style Desktop Effects
 * Wobbly windows, desktop cube, expo mode
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
        this.isDragging = false;

        this.init();
    }

    init() {
        this.loadSettings();
        this.createWorkspaceSwitcher();
        this.createCubeContainer();
        this.createExpoOverlay();
        this.setupKeyboardShortcuts();
        this.setupWobblyWindows();
        this.setupWindowAnimations();
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

    // ===== WOBBLY WINDOWS =====
    setupWobblyWindows() {
        // Track mouse movement during drag for wobbly effect
        let lastX = 0;
        let lastY = 0;
        let velocity = { x: 0, y: 0 };
        let activeWindow = null;

        document.addEventListener('mousedown', (e) => {
            if (!this.enabled.wobbly) return;

            const titlebar = e.target.closest('.window-titlebar');
            if (titlebar && !e.target.closest('.win-btn')) {
                const win = titlebar.closest('.window');
                if (win) {
                    activeWindow = win;
                    lastX = e.clientX;
                    lastY = e.clientY;
                    this.isDragging = true;
                    win.classList.add('wobbly-active');
                }
            }
        });

        document.addEventListener('mousemove', (e) => {
            if (!this.isDragging || !activeWindow) return;

            velocity.x = e.clientX - lastX;
            velocity.y = e.clientY - lastY;
            lastX = e.clientX;
            lastY = e.clientY;

            // Apply dynamic skew based on movement velocity
            const skewX = Math.max(-5, Math.min(5, velocity.x * 0.3));
            const skewY = Math.max(-3, Math.min(3, velocity.y * 0.2));
            activeWindow.style.transform = `skewX(${skewX}deg) skewY(${skewY}deg)`;
        });

        document.addEventListener('mouseup', () => {
            if (activeWindow && this.isDragging) {
                activeWindow.classList.remove('wobbly-active');
                activeWindow.style.transform = '';

                // Add wobble animation on release
                activeWindow.classList.add('wobble');
                setTimeout(() => {
                    if (activeWindow) {
                        activeWindow.classList.remove('wobble');
                    }
                }, 400);
            }
            this.isDragging = false;
            activeWindow = null;
        });
    }

    // ===== WINDOW ANIMATIONS =====
    setupWindowAnimations() {
        // Override window manager to add effects
        if (typeof windowManager === 'undefined') return;

        const originalCreateWindow = windowManager.createWindow.bind(windowManager);
        windowManager.createWindow = (options) => {
            const result = originalCreateWindow(options);

            // Add effects to new window
            setTimeout(() => {
                const winData = windowManager.getWindow(result.windowId);
                if (winData && winData.element) {
                    if (this.enabled.animations) {
                        winData.element.classList.add('zoom-open');
                        setTimeout(() => {
                            winData.element.classList.remove('zoom-open');
                        }, 300);
                    }
                    if (this.enabled.glow) {
                        winData.element.classList.add('glow-effect');
                    }
                }
            }, 10);

            return result;
        };

        // Add close animation
        const originalCloseWindow = windowManager.closeWindow.bind(windowManager);
        windowManager.closeWindow = (windowId) => {
            const winData = windowManager.getWindow(windowId);
            if (winData && winData.element && this.enabled.animations) {
                winData.element.classList.add('closing');
                setTimeout(() => {
                    originalCloseWindow(windowId);
                }, 200);
            } else {
                originalCloseWindow(windowId);
            }
        };
    }

    // ===== WORKSPACE SWITCHER =====
    createWorkspaceSwitcher() {
        const switcher = document.createElement('div');
        switcher.id = 'workspace-switcher';
        switcher.innerHTML = this.workspaces.map((name, i) => `
            <div class="workspace-indicator ${i === 0 ? 'active' : ''}"
                 data-workspace="${i}"
                 data-num="${i + 1}"
                 title="${name}"></div>
        `).join('');

        document.body.appendChild(switcher);

        switcher.querySelectorAll('.workspace-indicator').forEach(ind => {
            ind.addEventListener('click', () => {
                const index = parseInt(ind.dataset.workspace);
                if (index !== this.currentWorkspace) {
                    this.switchWorkspace(index);
                }
            });
        });
    }

    switchWorkspace(index) {
        if (index === this.currentWorkspace || !this.enabled.cube) {
            // Just update indicator without animation
            this.updateWorkspaceIndicator(index);
            this.currentWorkspace = index;
            return;
        }

        // Show cube transition
        this.showCubeTransition(this.currentWorkspace, index);
        this.currentWorkspace = index;
    }

    updateWorkspaceIndicator(index) {
        const indicators = document.querySelectorAll('.workspace-indicator');
        indicators.forEach((ind, i) => {
            ind.classList.toggle('active', i === index);
        });
    }

    // ===== DESKTOP CUBE =====
    createCubeContainer() {
        const container = document.createElement('div');
        container.id = 'desktop-cube-container';

        const icons = ['🏠', '💼', '🎮', '🎬'];

        container.innerHTML = `
            <div class="desktop-cube">
                <div class="cube-face front">
                    <div class="cube-face-label">Main</div>
                    <div class="cube-face-content">${icons[0]}</div>
                </div>
                <div class="cube-face right">
                    <div class="cube-face-label">Work</div>
                    <div class="cube-face-content">${icons[1]}</div>
                </div>
                <div class="cube-face back">
                    <div class="cube-face-label">Games</div>
                    <div class="cube-face-content">${icons[2]}</div>
                </div>
                <div class="cube-face left">
                    <div class="cube-face-label">Media</div>
                    <div class="cube-face-content">${icons[3]}</div>
                </div>
            </div>
        `;
        document.body.appendChild(container);

        // Click outside cube to close
        container.addEventListener('click', (e) => {
            if (e.target === container) {
                this.hideCube();
            }
        });
    }

    showCubeTransition(from, to) {
        const container = document.getElementById('desktop-cube-container');
        const cube = container.querySelector('.desktop-cube');

        // Calculate rotation direction
        const diff = to - from;
        this.cubeRotation += diff * 90;

        // Set initial rotation
        cube.style.transition = 'none';
        cube.style.transform = `rotateY(${-(this.cubeRotation - diff * 90)}deg)`;

        // Show container
        container.classList.add('active');

        // Animate to new position
        requestAnimationFrame(() => {
            cube.style.transition = 'transform 0.6s cubic-bezier(0.4, 0, 0.2, 1)';
            cube.style.transform = `rotateY(${-this.cubeRotation}deg)`;
        });

        // Update indicator and hide cube
        setTimeout(() => {
            this.updateWorkspaceIndicator(to);
        }, 300);

        setTimeout(() => {
            container.classList.remove('active');
        }, 700);
    }

    hideCube() {
        const container = document.getElementById('desktop-cube-container');
        container.classList.remove('active');
    }

    // ===== EXPO MODE =====
    createExpoOverlay() {
        const overlay = document.createElement('div');
        overlay.id = 'expo-overlay';
        document.body.appendChild(overlay);
    }

    showExpo() {
        if (!this.enabled.expo) return;

        const overlay = document.getElementById('expo-overlay');
        overlay.innerHTML = '';

        // Get all windows
        const windows = document.querySelectorAll('.window:not(.minimized)');

        if (windows.length === 0) {
            overlay.innerHTML = `
                <div style="grid-column: 1/-1; text-align: center; color: #666; padding: 60px;">
                    <p style="font-size: 48px; margin-bottom: 20px;">🪟</p>
                    <p style="font-size: 20px;">No windows open</p>
                    <p style="margin-top: 10px; color: #444;">Press Escape to close</p>
                </div>
            `;
        } else {
            windows.forEach(win => {
                const titleEl = win.querySelector('.window-title');
                const title = titleEl?.textContent || 'Window';
                // Extract emoji from title
                const iconMatch = title.match(/[\u{1F300}-\u{1F9FF}]|[\u{2600}-\u{26FF}]/u);
                const icon = iconMatch ? iconMatch[0] : '🪟';

                const preview = document.createElement('div');
                preview.className = 'expo-window';
                preview.dataset.windowId = win.id;
                preview.innerHTML = `
                    <div class="expo-window-title">${title}</div>
                    <div class="expo-window-preview">${icon}</div>
                `;

                preview.addEventListener('click', () => {
                    this.hideExpo();
                    if (typeof windowManager !== 'undefined') {
                        windowManager.focusWindow(win.id);
                    }
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

    // ===== KEYBOARD SHORTCUTS =====
    setupKeyboardShortcuts() {
        document.addEventListener('keydown', (e) => {
            // Ctrl/Cmd + E = Expo
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
                    const next = (this.currentWorkspace + 1) % this.workspaces.length;
                    this.switchWorkspace(next);
                } else if (e.key === 'ArrowLeft') {
                    e.preventDefault();
                    const prev = (this.currentWorkspace - 1 + this.workspaces.length) % this.workspaces.length;
                    this.switchWorkspace(prev);
                }
            }
        });
    }

    // ===== SETTINGS =====
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

// Initialize when DOM is ready
let compiz;
document.addEventListener('DOMContentLoaded', () => {
    compiz = new CompizEffects();
});
