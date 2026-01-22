/**
 * Settings App - Desktop preferences
 */

class SettingsApp {
    constructor() {
        this.settings = {
            theme: 'dark',
            wallpaper: 'default',
            fontSize: '14',
            showDesktopIcons: true,
            clockFormat: '24h'
        };

        // Load saved settings
        this.loadSettings();
    }

    loadSettings() {
        try {
            const saved = localStorage.getItem('hackers-game-settings');
            if (saved) {
                this.settings = { ...this.settings, ...JSON.parse(saved) };
            }
        } catch (e) {}
    }

    saveSettings() {
        try {
            localStorage.setItem('hackers-game-settings', JSON.stringify(this.settings));
        } catch (e) {}
    }

    open() {
        const { windowId, contentEl } = windowManager.createWindow({
            title: 'Settings',
            icon: '&#9881;',
            width: 650,
            height: 450,
            app: 'settings'
        });

        this.render(windowId, contentEl);
        return windowId;
    }

    render(windowId, contentEl) {
        contentEl.innerHTML = `
            <div class="settings-app">
                <div class="settings-sidebar">
                    <div class="settings-category active" data-section="appearance">
                        <span>🎨</span> Appearance
                    </div>
                    <div class="settings-category" data-section="desktop">
                        <span>🖥️</span> Desktop
                    </div>
                    <div class="settings-category" data-section="about">
                        <span>ℹ️</span> About
                    </div>
                </div>
                <div class="settings-content">
                    <div class="settings-section" id="section-appearance">
                        <h2>Appearance</h2>
                        <div class="settings-option">
                            <label>Theme</label>
                            <select id="setting-theme">
                                <option value="dark" ${this.settings.theme === 'dark' ? 'selected' : ''}>Dark (MATE)</option>
                                <option value="light" ${this.settings.theme === 'light' ? 'selected' : ''}>Light</option>
                                <option value="hacker" ${this.settings.theme === 'hacker' ? 'selected' : ''}>Hacker Green</option>
                            </select>
                        </div>
                        <div class="settings-option">
                            <label>Font Size</label>
                            <select id="setting-fontsize">
                                <option value="12" ${this.settings.fontSize === '12' ? 'selected' : ''}>Small (12px)</option>
                                <option value="14" ${this.settings.fontSize === '14' ? 'selected' : ''}>Medium (14px)</option>
                                <option value="16" ${this.settings.fontSize === '16' ? 'selected' : ''}>Large (16px)</option>
                            </select>
                        </div>
                    </div>
                    <div class="settings-section hidden" id="section-desktop">
                        <h2>Desktop</h2>
                        <div class="settings-option">
                            <label>Wallpaper</label>
                            <select id="setting-wallpaper">
                                <option value="default" ${this.settings.wallpaper === 'default' ? 'selected' : ''}>Default Gradient</option>
                                <option value="matrix" ${this.settings.wallpaper === 'matrix' ? 'selected' : ''}>Matrix</option>
                                <option value="solid" ${this.settings.wallpaper === 'solid' ? 'selected' : ''}>Solid Dark</option>
                            </select>
                        </div>
                        <div class="settings-option">
                            <label>
                                <input type="checkbox" id="setting-icons" ${this.settings.showDesktopIcons ? 'checked' : ''}>
                                Show desktop icons
                            </label>
                        </div>
                        <div class="settings-option">
                            <label>Clock Format</label>
                            <select id="setting-clock">
                                <option value="24h" ${this.settings.clockFormat === '24h' ? 'selected' : ''}>24-hour</option>
                                <option value="12h" ${this.settings.clockFormat === '12h' ? 'selected' : ''}>12-hour</option>
                            </select>
                        </div>
                    </div>
                    <div class="settings-section hidden" id="section-about">
                        <h2>About Hackers Game</h2>
                        <div style="padding: 20px 0;">
                            <p style="font-size: 48px; margin-bottom: 20px;">🎮</p>
                            <h3 style="margin-bottom: 10px;">Hackers Game Desktop</h3>
                            <p style="color: #666; margin-bottom: 20px;">Version 2.0</p>
                            <p style="margin-bottom: 15px;">
                                An immersive MATE-style desktop experience for hackers and security enthusiasts.
                            </p>
                            <p style="color: #888; font-size: 12px;">
                                Built with vanilla JavaScript. No frameworks, no dependencies.
                            </p>
                            <hr style="margin: 20px 0; border: none; border-top: 1px solid #ddd;">
                            <p style="font-size: 12px; color: #888;">
                                © 2024 Hackers Game<br>
                                Made with ☕ and 💻
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        `;

        this.setupEvents(windowId, contentEl);
    }

    setupEvents(windowId, contentEl) {
        // Category switching
        contentEl.querySelectorAll('.settings-category').forEach(cat => {
            cat.addEventListener('click', () => {
                contentEl.querySelectorAll('.settings-category').forEach(c => c.classList.remove('active'));
                contentEl.querySelectorAll('.settings-section').forEach(s => s.classList.add('hidden'));

                cat.classList.add('active');
                contentEl.querySelector(`#section-${cat.dataset.section}`).classList.remove('hidden');
            });
        });

        // Theme
        contentEl.querySelector('#setting-theme').addEventListener('change', (e) => {
            this.settings.theme = e.target.value;
            this.applySettings();
        });

        // Font size
        contentEl.querySelector('#setting-fontsize').addEventListener('change', (e) => {
            this.settings.fontSize = e.target.value;
            this.applySettings();
        });

        // Wallpaper
        contentEl.querySelector('#setting-wallpaper').addEventListener('change', (e) => {
            this.settings.wallpaper = e.target.value;
            this.applySettings();
        });

        // Desktop icons
        contentEl.querySelector('#setting-icons').addEventListener('change', (e) => {
            this.settings.showDesktopIcons = e.target.checked;
            this.applySettings();
        });

        // Clock format
        contentEl.querySelector('#setting-clock').addEventListener('change', (e) => {
            this.settings.clockFormat = e.target.value;
            this.applySettings();
        });
    }

    applySettings() {
        this.saveSettings();

        // Apply theme
        document.body.dataset.theme = this.settings.theme;

        // Apply font size
        document.body.style.fontSize = this.settings.fontSize + 'px';

        // Apply wallpaper
        const desktop = document.getElementById('desktop');
        if (this.settings.wallpaper === 'matrix') {
            desktop.style.backgroundImage = 'none';
            desktop.style.backgroundColor = '#000';
        } else if (this.settings.wallpaper === 'solid') {
            desktop.style.backgroundImage = 'none';
            desktop.style.backgroundColor = '#1a1a1a';
        } else {
            desktop.style.backgroundImage = 'radial-gradient(ellipse at center, #34495e 0%, #2c3e50 50%, #1a252f 100%)';
        }

        // Show/hide desktop icons
        const icons = document.querySelector('.desktop-icons');
        if (icons) {
            icons.style.display = this.settings.showDesktopIcons ? 'flex' : 'none';
        }
    }

    getClockFormat() {
        return this.settings.clockFormat;
    }
}

// Global instance
const settingsApp = new SettingsApp();
