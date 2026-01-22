/**
 * Compiz-style Desktop Effects
 * Wobbly windows, expo mode, window animations
 */

class CompizEffects {
    constructor() {
        this.enabled = {
            wobbly: true,
            expo: true,
            glow: true,
            animations: true
        };

        this.isDragging = false;

        this.init();
    }

    init() {
        this.loadSettings();
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

            // Apply dynamic skew based on movement velocity (reduced sensitivity)
            // Only apply if movement is significant (> 5px)
            if (Math.abs(velocity.x) > 5 || Math.abs(velocity.y) > 5) {
                const skewX = Math.max(-3, Math.min(3, velocity.x * 0.15));
                const skewY = Math.max(-2, Math.min(2, velocity.y * 0.1));
                activeWindow.style.transform = `skewX(${skewX}deg) skewY(${skewY}deg)`;
            } else {
                activeWindow.style.transform = '';
            }
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

            // Escape to close expo
            if (e.key === 'Escape') {
                this.hideExpo();
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
