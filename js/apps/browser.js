/**
 * Browser App - Simple iframe-based web browser
 */

class BrowserApp {
    constructor() {
        this.instances = new Map();
        this.bookmarks = [
            { name: 'DuckDuckGo', url: 'https://duckduckgo.com', icon: '🦆' },
            { name: 'GitHub', url: 'https://github.com', icon: '🐙' },
            { name: 'Hacker News', url: 'https://news.ycombinator.com', icon: '📰' },
            { name: 'Wikipedia', url: 'https://wikipedia.org', icon: '📚' },
            { name: 'MDN Docs', url: 'https://developer.mozilla.org', icon: '📖' },
            { name: 'Stack Overflow', url: 'https://stackoverflow.com', icon: '💬' }
        ];
    }

    open(url = null) {
        const { windowId, contentEl } = windowManager.createWindow({
            title: 'Web Browser',
            icon: '&#127760;',
            width: 900,
            height: 650,
            app: 'browser'
        });

        const instance = {
            windowId,
            history: [],
            historyIndex: -1,
            currentUrl: ''
        };

        this.instances.set(windowId, instance);
        this.render(windowId, contentEl);

        if (url) {
            this.navigate(windowId, url);
        }

        return windowId;
    }

    render(windowId, contentEl) {
        const bookmarksHtml = this.bookmarks.map(b => `
            <div class="bookmark" data-url="${b.url}">
                <span class="bookmark-icon">${b.icon}</span>
                <span class="bookmark-name">${b.name}</span>
            </div>
        `).join('');

        contentEl.innerHTML = `
            <div class="browser-app">
                <div class="browser-toolbar">
                    <button class="nav-back" title="Back">◀</button>
                    <button class="nav-forward" title="Forward">▶</button>
                    <button class="nav-refresh" title="Refresh">⟳</button>
                    <button class="nav-home" title="Home">🏠</button>
                    <input type="text" class="browser-url" placeholder="Enter URL...">
                    <button class="nav-go">Go</button>
                </div>
                <div class="browser-content">
                    <div class="browser-home">
                        <h2>🌐 Quick Links</h2>
                        <div class="browser-bookmarks">
                            ${bookmarksHtml}
                        </div>
                        <p style="margin-top: 30px; color: #888; font-size: 12px;">
                            Note: Some sites may not load due to iframe restrictions (X-Frame-Options).
                        </p>
                    </div>
                </div>
            </div>
        `;

        this.setupEvents(windowId, contentEl);
    }

    setupEvents(windowId, contentEl) {
        const instance = this.instances.get(windowId);
        const urlInput = contentEl.querySelector('.browser-url');

        // Navigation buttons
        contentEl.querySelector('.nav-back').addEventListener('click', () => this.goBack(windowId));
        contentEl.querySelector('.nav-forward').addEventListener('click', () => this.goForward(windowId));
        contentEl.querySelector('.nav-refresh').addEventListener('click', () => this.refresh(windowId));
        contentEl.querySelector('.nav-home').addEventListener('click', () => this.goHome(windowId, contentEl));
        contentEl.querySelector('.nav-go').addEventListener('click', () => this.navigate(windowId, urlInput.value));

        // URL input
        urlInput.addEventListener('keypress', (e) => {
            if (e.key === 'Enter') {
                this.navigate(windowId, urlInput.value);
            }
        });

        // Bookmarks
        contentEl.querySelectorAll('.bookmark').forEach(b => {
            b.addEventListener('click', () => {
                this.navigate(windowId, b.dataset.url);
            });
        });

        // Update nav button states
        this.updateNavButtons(windowId, contentEl);
    }

    navigate(windowId, url) {
        const instance = this.instances.get(windowId);
        const windowData = windowManager.getWindow(windowId);
        if (!instance || !windowData) return;

        // Normalize URL
        if (url && !url.match(/^https?:\/\//)) {
            url = 'https://' + url;
        }

        if (!url) return;

        const contentEl = windowData.element.querySelector('.window-content');
        const browserContent = contentEl.querySelector('.browser-content');
        const urlInput = contentEl.querySelector('.browser-url');

        // Update URL bar
        urlInput.value = url;
        instance.currentUrl = url;

        // Add to history
        if (instance.history[instance.historyIndex] !== url) {
            instance.history = instance.history.slice(0, instance.historyIndex + 1);
            instance.history.push(url);
            instance.historyIndex = instance.history.length - 1;
        }

        // Show loading
        browserContent.innerHTML = '<div class="loading"></div>';

        // Create iframe
        setTimeout(() => {
            browserContent.innerHTML = `
                <iframe
                    src="${url}"
                    sandbox="allow-scripts allow-same-origin allow-forms allow-popups"
                    referrerpolicy="no-referrer"
                ></iframe>
            `;

            const iframe = browserContent.querySelector('iframe');
            iframe.addEventListener('error', () => {
                browserContent.innerHTML = `
                    <div style="padding: 40px; text-align: center;">
                        <h2 style="color: #c00;">Unable to load page</h2>
                        <p style="color: #666; margin-top: 10px;">
                            This site cannot be displayed in an iframe due to security restrictions.
                        </p>
                        <a href="${url}" target="_blank" style="color: #0066cc; margin-top: 20px; display: inline-block;">
                            Open in new tab ↗
                        </a>
                    </div>
                `;
            });
        }, 300);

        // Update window title
        try {
            const hostname = new URL(url).hostname;
            windowData.element.querySelector('.window-title').innerHTML = `<span style="margin-right: 8px;">&#127760;</span>${hostname}`;
        } catch (e) {}

        this.updateNavButtons(windowId, contentEl);
    }

    goBack(windowId) {
        const instance = this.instances.get(windowId);
        if (!instance || instance.historyIndex <= 0) return;

        instance.historyIndex--;
        this.navigate(windowId, instance.history[instance.historyIndex]);
    }

    goForward(windowId) {
        const instance = this.instances.get(windowId);
        if (!instance || instance.historyIndex >= instance.history.length - 1) return;

        instance.historyIndex++;
        this.navigate(windowId, instance.history[instance.historyIndex]);
    }

    refresh(windowId) {
        const instance = this.instances.get(windowId);
        if (!instance || !instance.currentUrl) return;

        this.navigate(windowId, instance.currentUrl);
    }

    goHome(windowId, contentEl) {
        const instance = this.instances.get(windowId);
        instance.currentUrl = '';

        const urlInput = contentEl.querySelector('.browser-url');
        urlInput.value = '';

        this.render(windowId, contentEl);

        // Update window title
        const windowData = windowManager.getWindow(windowId);
        if (windowData) {
            windowData.element.querySelector('.window-title').innerHTML = `<span style="margin-right: 8px;">&#127760;</span>Web Browser`;
        }
    }

    updateNavButtons(windowId, contentEl) {
        const instance = this.instances.get(windowId);
        if (!instance) return;

        const backBtn = contentEl.querySelector('.nav-back');
        const forwardBtn = contentEl.querySelector('.nav-forward');

        backBtn.disabled = instance.historyIndex <= 0;
        forwardBtn.disabled = instance.historyIndex >= instance.history.length - 1;
    }
}

// Global instance
const browserApp = new BrowserApp();
