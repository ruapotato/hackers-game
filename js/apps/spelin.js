/**
 * Spelin - A better way to spell
 * Loaded via iframe from GitHub Pages
 */

class SpelinApp {
    constructor() {
        this.appUrl = 'https://ruapotato.github.io/spelin/';
    }

    open() {
        const { windowId, contentEl } = windowManager.createWindow({
            title: 'Spelin - A Better Way to Spell',
            icon: '📝',
            width: 900,
            height: 700,
            app: 'spelin'
        });

        contentEl.innerHTML = `
            <div class="spelin-app">
                <div class="app-toolbar">
                    <span class="app-info">📝 Spelin - Rethinking how we spell</span>
                    <a href="https://github.com/ruapotato/spelin" target="_blank" class="github-link">
                        🐙 View Source
                    </a>
                </div>
                <div class="app-container">
                    <iframe
                        src="${this.appUrl}"
                        frameborder="0"
                        allow="clipboard-write"
                    ></iframe>
                </div>
            </div>
            <style>
                .spelin-app {
                    height: 100%;
                    display: flex;
                    flex-direction: column;
                    background: #f5f5f5;
                }
                .spelin-app .app-toolbar {
                    display: flex;
                    justify-content: space-between;
                    align-items: center;
                    padding: 8px 12px;
                    background: linear-gradient(to bottom, #4a4a4a, #3a3a3a);
                    border-bottom: 1px solid #555;
                }
                .spelin-app .app-info {
                    color: #ddd;
                    font-size: 13px;
                }
                .spelin-app .github-link {
                    color: #87a752;
                    text-decoration: none;
                    font-size: 12px;
                    padding: 4px 10px;
                    border: 1px solid #87a752;
                    border-radius: 4px;
                    transition: all 0.2s;
                }
                .spelin-app .github-link:hover {
                    background: #87a752;
                    color: #000;
                }
                .spelin-app .app-container {
                    flex: 1;
                    overflow: hidden;
                }
                .spelin-app .app-container iframe {
                    width: 100%;
                    height: 100%;
                    border: none;
                }
            </style>
        `;

        return windowId;
    }
}

// Global instance
const spelinApp = new SpelinApp();
