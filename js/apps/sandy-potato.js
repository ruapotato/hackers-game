/**
 * Sandy Potato - Sand simulation game
 * Loaded via iframe from GitHub Pages
 */

class SandyPotatoApp {
    constructor() {
        this.gameUrl = 'https://ruapotato.github.io/Sandy-Potato/';
    }

    open() {
        const { windowId, contentEl } = windowManager.createWindow({
            title: 'Sandy Potato - Sand Game',
            icon: '🏖️',
            width: 850,
            height: 650,
            app: 'sandy-potato'
        });

        contentEl.innerHTML = `
            <div class="sandy-potato-app">
                <div class="game-toolbar">
                    <span class="game-info">🏖️ Sandy Potato - A falling sand simulation game</span>
                    <a href="https://github.com/ruapotato/Sandy-Potato" target="_blank" class="github-link">
                        🐙 View Source
                    </a>
                </div>
                <div class="game-container">
                    <iframe
                        src="${this.gameUrl}"
                        frameborder="0"
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope"
                    ></iframe>
                </div>
            </div>
            <style>
                .sandy-potato-app {
                    height: 100%;
                    display: flex;
                    flex-direction: column;
                    background: #1a1a1a;
                }
                .game-toolbar {
                    display: flex;
                    justify-content: space-between;
                    align-items: center;
                    padding: 8px 12px;
                    background: linear-gradient(to bottom, #3a3a3a, #2a2a2a);
                    border-bottom: 1px solid #444;
                }
                .game-info {
                    color: #ccc;
                    font-size: 13px;
                }
                .github-link {
                    color: #87a752;
                    text-decoration: none;
                    font-size: 12px;
                    padding: 4px 10px;
                    border: 1px solid #87a752;
                    border-radius: 4px;
                    transition: all 0.2s;
                }
                .github-link:hover {
                    background: #87a752;
                    color: #000;
                }
                .game-container {
                    flex: 1;
                    overflow: hidden;
                }
                .game-container iframe {
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
const sandyPotatoApp = new SandyPotatoApp();
