/**
 * File Manager App - MATE/Nautilus style
 */

class FileManagerApp {
    constructor() {
        this.instances = new Map();
    }

    open(path = '/home/hacker') {
        const { windowId, contentEl } = windowManager.createWindow({
            title: 'File Manager',
            icon: '&#128193;',
            width: 800,
            height: 550,
            app: 'file-manager'
        });

        const instance = {
            windowId,
            currentPath: path,
            history: [path],
            historyIndex: 0,
            showHidden: false
        };

        this.instances.set(windowId, instance);
        this.render(windowId, contentEl);
        this.navigateTo(windowId, path);

        return windowId;
    }

    render(windowId, contentEl) {
        contentEl.innerHTML = `
            <div class="file-manager">
                <div class="file-manager-toolbar">
                    <button class="nav-back" title="Back">◀</button>
                    <button class="nav-forward" title="Forward">▶</button>
                    <button class="nav-up" title="Up">▲</button>
                    <button class="nav-home" title="Home">🏠</button>
                    <input type="text" class="file-manager-path" readonly>
                    <button class="toggle-hidden" title="Show/Hide hidden files">👁</button>
                </div>
                <div class="file-manager-content">
                    <div class="file-manager-sidebar">
                        <div class="sidebar-item" data-path="/home/hacker">
                            <span>🏠</span> Home
                        </div>
                        <div class="sidebar-item" data-path="/home/hacker/documents">
                            <span>📁</span> Documents
                        </div>
                        <div class="sidebar-item" data-path="/home/hacker/downloads">
                            <span>📥</span> Downloads
                        </div>
                        <div class="sidebar-item" data-path="/">
                            <span>💻</span> File System
                        </div>
                        <div class="sidebar-item" data-path="/var/log">
                            <span>📊</span> Logs
                        </div>
                    </div>
                    <div class="file-manager-files"></div>
                </div>
            </div>
        `;

        this.setupEvents(windowId, contentEl);
    }

    setupEvents(windowId, contentEl) {
        const instance = this.instances.get(windowId);

        // Navigation buttons
        contentEl.querySelector('.nav-back').addEventListener('click', () => {
            this.goBack(windowId);
        });

        contentEl.querySelector('.nav-forward').addEventListener('click', () => {
            this.goForward(windowId);
        });

        contentEl.querySelector('.nav-up').addEventListener('click', () => {
            const parts = instance.currentPath.split('/').filter(p => p);
            parts.pop();
            this.navigateTo(windowId, '/' + parts.join('/') || '/');
        });

        contentEl.querySelector('.nav-home').addEventListener('click', () => {
            this.navigateTo(windowId, '/home/hacker');
        });

        contentEl.querySelector('.toggle-hidden').addEventListener('click', () => {
            instance.showHidden = !instance.showHidden;
            this.refreshView(windowId);
        });

        // Sidebar items
        contentEl.querySelectorAll('.sidebar-item').forEach(item => {
            item.addEventListener('click', () => {
                this.navigateTo(windowId, item.dataset.path);
            });
        });
    }

    navigateTo(windowId, path) {
        const instance = this.instances.get(windowId);
        if (!instance) return;

        // Normalize path
        if (path === '') path = '/';

        // Update history
        if (instance.currentPath !== path) {
            // Truncate forward history
            instance.history = instance.history.slice(0, instance.historyIndex + 1);
            instance.history.push(path);
            instance.historyIndex = instance.history.length - 1;
        }

        instance.currentPath = path;
        this.refreshView(windowId);
    }

    refreshView(windowId) {
        const instance = this.instances.get(windowId);
        const windowData = windowManager.getWindow(windowId);
        if (!instance || !windowData) return;

        const contentEl = windowData.element.querySelector('.window-content');
        const filesContainer = contentEl.querySelector('.file-manager-files');
        const pathInput = contentEl.querySelector('.file-manager-path');

        // Update path display
        pathInput.value = instance.currentPath;

        // Update sidebar active state
        contentEl.querySelectorAll('.sidebar-item').forEach(item => {
            item.classList.toggle('active', item.dataset.path === instance.currentPath);
        });

        // Get directory contents
        const result = virtualFS.ls(instance.currentPath, instance.showHidden);

        if (result.error) {
            filesContainer.innerHTML = `<div style="padding: 20px; color: #c00;">${result.error}</div>`;
            return;
        }

        // Render files
        filesContainer.innerHTML = result.files.map(file => `
            <div class="file-item" data-name="${file.name}" data-type="${file.type}">
                <div class="file-icon">${file.icon}</div>
                <div class="file-name">${file.name}</div>
            </div>
        `).join('');

        // File click handlers
        filesContainer.querySelectorAll('.file-item').forEach(item => {
            item.addEventListener('dblclick', () => {
                const name = item.dataset.name;
                const type = item.dataset.type;
                const fullPath = instance.currentPath === '/'
                    ? '/' + name
                    : instance.currentPath + '/' + name;

                if (type === 'dir') {
                    this.navigateTo(windowId, fullPath);
                } else {
                    // Open file in text editor
                    textEditorApp.openFile(fullPath);
                }
            });

            item.addEventListener('click', (e) => {
                // Select file
                filesContainer.querySelectorAll('.file-item').forEach(f => f.classList.remove('selected'));
                item.classList.add('selected');
            });
        });

        // Update nav buttons
        contentEl.querySelector('.nav-back').disabled = instance.historyIndex <= 0;
        contentEl.querySelector('.nav-forward').disabled = instance.historyIndex >= instance.history.length - 1;
    }

    goBack(windowId) {
        const instance = this.instances.get(windowId);
        if (!instance || instance.historyIndex <= 0) return;

        instance.historyIndex--;
        instance.currentPath = instance.history[instance.historyIndex];
        this.refreshView(windowId);
    }

    goForward(windowId) {
        const instance = this.instances.get(windowId);
        if (!instance || instance.historyIndex >= instance.history.length - 1) return;

        instance.historyIndex++;
        instance.currentPath = instance.history[instance.historyIndex];
        this.refreshView(windowId);
    }
}

// Global instance
const fileManagerApp = new FileManagerApp();
