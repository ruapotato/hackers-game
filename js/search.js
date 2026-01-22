/**
 * Global Search functionality
 */

class GlobalSearch {
    constructor() {
        this.searchInput = document.getElementById('global-search');
        this.searchResults = document.getElementById('search-results');
        this.debounceTimer = null;

        this.searchIndex = this.buildIndex();
        this.init();
    }

    buildIndex() {
        // Start with apps
        const index = [
            // Apps
            { type: 'app', name: 'Blog & Portfolio', desc: 'Read blog posts and view portfolio', icon: '&#128240;', action: () => blogReaderApp.open() },
            { type: 'app', name: 'Terminal', desc: 'Command line interface', icon: '&#9638;', action: () => terminalApp.open() },
            { type: 'app', name: 'File Manager', desc: 'Browse files and folders', icon: '&#128193;', action: () => fileManagerApp.open() },
            { type: 'app', name: 'Web Browser', desc: 'Browse the internet', icon: '&#127760;', action: () => browserApp.open() },
            { type: 'app', name: 'YouTube Channel', desc: 'David Hamner on YouTube', icon: '&#128250;', action: () => browserApp.open('https://youtube.com/@DavidHamner') },
            { type: 'app', name: 'Text Editor', desc: 'Edit text files', icon: '&#128221;', action: () => textEditorApp.open() },
            { type: 'app', name: 'Settings', desc: 'Desktop preferences', icon: '&#9881;', action: () => settingsApp.open() },
            { type: 'app', name: 'Sandy Potato', desc: 'Falling sand simulation game', icon: '🏖️', action: () => sandyPotatoApp.open() },
            { type: 'app', name: 'Code Playground', desc: 'Interactive coding experiments', icon: '&#128187;', action: () => hackersGameApp.open() },

            // Folders
            { type: 'folder', name: 'Home', desc: '/home/hacker', icon: '🏠', action: () => fileManagerApp.open('/home/hacker') },
            { type: 'folder', name: 'Projects', desc: '/home/hacker/projects', icon: '📁', action: () => fileManagerApp.open('/home/hacker/projects') },
            { type: 'folder', name: 'System Logs', desc: '/var/log', icon: '📁', action: () => fileManagerApp.open('/var/log') },

            // Commands
            { type: 'command', name: 'about', desc: 'About David Hamner', icon: '💻', action: () => terminalApp.open() },
            { type: 'command', name: 'skills', desc: 'View skills and resume', icon: '💻', action: () => terminalApp.open() },
            { type: 'command', name: 'librem5', desc: 'Linux phone info', icon: '📱', action: () => terminalApp.open() },
        ];

        // Add blog posts to search index
        if (typeof blogPosts !== 'undefined') {
            blogPosts.forEach(post => {
                index.push({
                    type: 'post',
                    name: post.title,
                    desc: post.excerpt.substring(0, 60) + '...',
                    icon: post.videoId ? '📺' : '📝',
                    action: () => blogReaderApp.open(post.id)
                });
            });
        }

        return index;
    }

    init() {
        this.searchInput.addEventListener('input', (e) => {
            clearTimeout(this.debounceTimer);
            this.debounceTimer = setTimeout(() => {
                this.search(e.target.value);
            }, 150);
        });

        this.searchInput.addEventListener('focus', () => {
            if (this.searchInput.value) {
                this.search(this.searchInput.value);
            }
        });

        // Close on click outside
        document.addEventListener('click', (e) => {
            if (!e.target.closest('#search-container')) {
                this.hideResults();
            }
        });

        // Keyboard navigation
        this.searchInput.addEventListener('keydown', (e) => {
            const items = this.searchResults.querySelectorAll('.search-result-item');
            const current = this.searchResults.querySelector('.search-result-item.selected');
            let index = Array.from(items).indexOf(current);

            if (e.key === 'ArrowDown') {
                e.preventDefault();
                if (index < items.length - 1) {
                    items[index]?.classList.remove('selected');
                    items[index + 1]?.classList.add('selected');
                    items[index + 1]?.scrollIntoView({ block: 'nearest' });
                }
            } else if (e.key === 'ArrowUp') {
                e.preventDefault();
                if (index > 0) {
                    items[index]?.classList.remove('selected');
                    items[index - 1]?.classList.add('selected');
                    items[index - 1]?.scrollIntoView({ block: 'nearest' });
                }
            } else if (e.key === 'Enter') {
                e.preventDefault();
                const selected = this.searchResults.querySelector('.search-result-item.selected');
                if (selected) {
                    selected.click();
                } else if (items.length > 0) {
                    items[0].click();
                }
            } else if (e.key === 'Escape') {
                this.hideResults();
                this.searchInput.blur();
            }
        });
    }

    search(query) {
        if (!query.trim()) {
            this.hideResults();
            return;
        }

        query = query.toLowerCase();

        const results = this.searchIndex.filter(item =>
            item.name.toLowerCase().includes(query) ||
            item.desc.toLowerCase().includes(query)
        );

        this.showResults(results);
    }

    showResults(results) {
        if (results.length === 0) {
            this.searchResults.innerHTML = `
                <div class="search-result-item" style="pointer-events: none;">
                    <span class="result-icon">🔍</span>
                    <div class="result-info">
                        <div class="result-title">No results found</div>
                        <div class="result-desc">Try a different search term</div>
                    </div>
                </div>
            `;
            this.searchResults.classList.remove('hidden');
            return;
        }

        // Group by type
        const groups = {
            app: { label: 'Applications', items: [] },
            file: { label: 'Files', items: [] },
            folder: { label: 'Folders', items: [] },
            command: { label: 'Commands', items: [] }
        };

        results.forEach(r => {
            if (groups[r.type]) {
                groups[r.type].items.push(r);
            }
        });

        let html = '';
        let firstItem = true;

        Object.entries(groups).forEach(([type, group]) => {
            if (group.items.length > 0) {
                html += `<div class="search-result-category">${group.label}</div>`;
                group.items.forEach(item => {
                    html += `
                        <div class="search-result-item ${firstItem ? 'selected' : ''}" data-index="${this.searchIndex.indexOf(item)}">
                            <span class="result-icon">${item.icon}</span>
                            <div class="result-info">
                                <div class="result-title">${item.name}</div>
                                <div class="result-desc">${item.desc}</div>
                            </div>
                        </div>
                    `;
                    firstItem = false;
                });
            }
        });

        this.searchResults.innerHTML = html;
        this.searchResults.classList.remove('hidden');

        // Add click handlers
        this.searchResults.querySelectorAll('.search-result-item[data-index]').forEach(el => {
            el.addEventListener('click', () => {
                const index = parseInt(el.dataset.index);
                const item = this.searchIndex[index];
                if (item && item.action) {
                    item.action();
                    this.hideResults();
                    this.searchInput.value = '';
                    this.searchInput.blur();
                }
            });
        });
    }

    hideResults() {
        this.searchResults.classList.add('hidden');
    }
}

// Initialize search when DOM is ready
let globalSearch;
document.addEventListener('DOMContentLoaded', () => {
    globalSearch = new GlobalSearch();
});
