/**
 * Window Manager - MATE-style window management
 */

class WindowManager {
    constructor() {
        this.windows = new Map();
        this.windowIdCounter = 0;
        this.zIndexCounter = 100;
        this.activeWindow = null;
        this.container = document.getElementById('windows-container');
        this.taskbar = document.getElementById('taskbar');
        this.template = document.getElementById('window-template');

        this.init();
    }

    init() {
        // Handle clicks outside windows to deactivate
        document.addEventListener('mousedown', (e) => {
            if (e.target.id === 'desktop' || e.target.closest('.desktop-icons')) {
                this.deactivateAll();
            }
        });

        // Show desktop button
        document.getElementById('show-desktop-btn')?.addEventListener('click', () => {
            this.minimizeAll();
        });
    }

    createWindow(options = {}) {
        const {
            title = 'Window',
            icon = '&#128193;',
            width = 700,
            height = 500,
            x = null,
            y = null,
            app = null,
            appData = {}
        } = options;

        const windowId = `window-${++this.windowIdCounter}`;
        const windowEl = this.template.content.cloneNode(true).querySelector('.window');

        windowEl.id = windowId;
        windowEl.querySelector('.window-title').innerHTML = `<span style="margin-right: 8px;">${icon}</span>${title}`;

        // Position
        const desktopRect = this.container.getBoundingClientRect();
        const posX = x ?? Math.random() * (desktopRect.width - width - 100) + 50;
        const posY = y ?? Math.random() * (desktopRect.height - height - 100) + 50;

        windowEl.style.left = `${posX}px`;
        windowEl.style.top = `${posY}px`;
        windowEl.style.width = `${width}px`;
        windowEl.style.height = `${height}px`;
        windowEl.style.zIndex = ++this.zIndexCounter;

        // Store window data
        const windowData = {
            id: windowId,
            element: windowEl,
            title,
            icon,
            app,
            appData,
            isMaximized: false,
            isMinimized: false,
            prevBounds: null
        };
        this.windows.set(windowId, windowData);

        // Add to DOM
        this.container.appendChild(windowEl);

        // Setup event handlers
        this.setupWindowEvents(windowEl, windowId);

        // Create taskbar item
        this.createTaskbarItem(windowId, title, icon);

        // Focus this window
        this.focusWindow(windowId);

        return { windowId, contentEl: windowEl.querySelector('.window-content') };
    }

    setupWindowEvents(windowEl, windowId) {
        const titlebar = windowEl.querySelector('.window-titlebar');
        const minimizeBtn = windowEl.querySelector('.win-btn.minimize');
        const maximizeBtn = windowEl.querySelector('.win-btn.maximize');
        const closeBtn = windowEl.querySelector('.win-btn.close');

        // Focus on click
        windowEl.addEventListener('mousedown', (e) => {
            if (!e.target.closest('.win-btn')) {
                this.focusWindow(windowId);
            }
        });

        // Dragging
        this.setupDrag(windowEl, titlebar, windowId);

        // Resizing
        this.setupResize(windowEl, windowId);

        // Window controls
        minimizeBtn.addEventListener('click', () => this.minimizeWindow(windowId));
        maximizeBtn.addEventListener('click', () => this.toggleMaximize(windowId));
        closeBtn.addEventListener('click', () => this.closeWindow(windowId));

        // Double-click titlebar to maximize
        titlebar.addEventListener('dblclick', () => this.toggleMaximize(windowId));
    }

    setupDrag(windowEl, titlebar, windowId) {
        let isDragging = false;
        let startX, startY, startLeft, startTop;

        titlebar.addEventListener('mousedown', (e) => {
            if (e.target.closest('.win-btn')) return;

            const windowData = this.windows.get(windowId);
            if (windowData.isMaximized) return;

            isDragging = true;
            windowEl.classList.add('dragging');

            startX = e.clientX;
            startY = e.clientY;
            startLeft = windowEl.offsetLeft;
            startTop = windowEl.offsetTop;

            e.preventDefault();
        });

        document.addEventListener('mousemove', (e) => {
            if (!isDragging) return;

            const dx = e.clientX - startX;
            const dy = e.clientY - startY;

            windowEl.style.left = `${startLeft + dx}px`;
            windowEl.style.top = `${startTop + dy}px`;
        });

        document.addEventListener('mouseup', () => {
            if (isDragging) {
                isDragging = false;
                windowEl.classList.remove('dragging');
            }
        });
    }

    setupResize(windowEl, windowId) {
        const handles = windowEl.querySelectorAll('.resize-handle');
        let isResizing = false;
        let currentHandle = null;
        let startX, startY, startWidth, startHeight, startLeft, startTop;

        handles.forEach(handle => {
            handle.addEventListener('mousedown', (e) => {
                const windowData = this.windows.get(windowId);
                if (windowData.isMaximized) return;

                isResizing = true;
                currentHandle = handle;

                startX = e.clientX;
                startY = e.clientY;
                startWidth = windowEl.offsetWidth;
                startHeight = windowEl.offsetHeight;
                startLeft = windowEl.offsetLeft;
                startTop = windowEl.offsetTop;

                e.preventDefault();
                e.stopPropagation();
            });
        });

        document.addEventListener('mousemove', (e) => {
            if (!isResizing) return;

            const dx = e.clientX - startX;
            const dy = e.clientY - startY;
            const minWidth = 300;
            const minHeight = 200;

            if (currentHandle.classList.contains('resize-e') ||
                currentHandle.classList.contains('resize-ne') ||
                currentHandle.classList.contains('resize-se')) {
                windowEl.style.width = `${Math.max(minWidth, startWidth + dx)}px`;
            }

            if (currentHandle.classList.contains('resize-w') ||
                currentHandle.classList.contains('resize-nw') ||
                currentHandle.classList.contains('resize-sw')) {
                const newWidth = Math.max(minWidth, startWidth - dx);
                if (newWidth > minWidth) {
                    windowEl.style.width = `${newWidth}px`;
                    windowEl.style.left = `${startLeft + dx}px`;
                }
            }

            if (currentHandle.classList.contains('resize-s') ||
                currentHandle.classList.contains('resize-se') ||
                currentHandle.classList.contains('resize-sw')) {
                windowEl.style.height = `${Math.max(minHeight, startHeight + dy)}px`;
            }

            if (currentHandle.classList.contains('resize-n') ||
                currentHandle.classList.contains('resize-ne') ||
                currentHandle.classList.contains('resize-nw')) {
                const newHeight = Math.max(minHeight, startHeight - dy);
                if (newHeight > minHeight) {
                    windowEl.style.height = `${newHeight}px`;
                    windowEl.style.top = `${startTop + dy}px`;
                }
            }
        });

        document.addEventListener('mouseup', () => {
            isResizing = false;
            currentHandle = null;
        });
    }

    createTaskbarItem(windowId, title, icon) {
        const item = document.createElement('div');
        item.className = 'taskbar-item active';
        item.dataset.windowId = windowId;
        item.innerHTML = `
            <span class="taskbar-icon">${icon}</span>
            <span class="taskbar-title">${title}</span>
        `;

        item.addEventListener('click', () => {
            const windowData = this.windows.get(windowId);
            if (windowData.isMinimized) {
                this.restoreWindow(windowId);
            } else if (this.activeWindow === windowId) {
                this.minimizeWindow(windowId);
            } else {
                this.focusWindow(windowId);
            }
        });

        this.taskbar.appendChild(item);
    }

    updateTaskbarItem(windowId) {
        const item = this.taskbar.querySelector(`[data-window-id="${windowId}"]`);
        const windowData = this.windows.get(windowId);

        if (item && windowData) {
            item.classList.toggle('active', this.activeWindow === windowId && !windowData.isMinimized);
            item.classList.toggle('minimized', windowData.isMinimized);
        }
    }

    focusWindow(windowId) {
        const windowData = this.windows.get(windowId);
        if (!windowData) return;

        // Deactivate previous active window
        if (this.activeWindow && this.activeWindow !== windowId) {
            const prevWindow = this.windows.get(this.activeWindow);
            if (prevWindow) {
                prevWindow.element.classList.add('inactive');
                this.updateTaskbarItem(this.activeWindow);
            }
        }

        // Activate this window
        windowData.element.style.zIndex = ++this.zIndexCounter;
        windowData.element.classList.remove('inactive');
        this.activeWindow = windowId;
        this.updateTaskbarItem(windowId);
    }

    deactivateAll() {
        if (this.activeWindow) {
            const windowData = this.windows.get(this.activeWindow);
            if (windowData) {
                windowData.element.classList.add('inactive');
            }
            this.activeWindow = null;
            this.updateAllTaskbarItems();
        }
    }

    updateAllTaskbarItems() {
        this.windows.forEach((_, windowId) => {
            this.updateTaskbarItem(windowId);
        });
    }

    minimizeWindow(windowId) {
        const windowData = this.windows.get(windowId);
        if (!windowData) return;

        windowData.isMinimized = true;
        windowData.element.classList.add('minimized');

        if (this.activeWindow === windowId) {
            this.activeWindow = null;
        }

        this.updateTaskbarItem(windowId);
    }

    restoreWindow(windowId) {
        const windowData = this.windows.get(windowId);
        if (!windowData) return;

        windowData.isMinimized = false;
        windowData.element.classList.remove('minimized');
        this.focusWindow(windowId);
    }

    toggleMaximize(windowId) {
        const windowData = this.windows.get(windowId);
        if (!windowData) return;

        if (windowData.isMaximized) {
            // Restore
            windowData.element.classList.remove('maximized');
            if (windowData.prevBounds) {
                windowData.element.style.left = windowData.prevBounds.left;
                windowData.element.style.top = windowData.prevBounds.top;
                windowData.element.style.width = windowData.prevBounds.width;
                windowData.element.style.height = windowData.prevBounds.height;
            }
            windowData.isMaximized = false;
        } else {
            // Maximize
            windowData.prevBounds = {
                left: windowData.element.style.left,
                top: windowData.element.style.top,
                width: windowData.element.style.width,
                height: windowData.element.style.height
            };
            windowData.element.classList.add('maximized');
            windowData.isMaximized = true;
        }
    }

    closeWindow(windowId) {
        const windowData = this.windows.get(windowId);
        if (!windowData) return;

        // Animation
        windowData.element.classList.add('closing');

        setTimeout(() => {
            windowData.element.remove();

            // Remove taskbar item
            const taskbarItem = this.taskbar.querySelector(`[data-window-id="${windowId}"]`);
            if (taskbarItem) taskbarItem.remove();

            // Cleanup
            this.windows.delete(windowId);

            if (this.activeWindow === windowId) {
                this.activeWindow = null;
            }
        }, 100);
    }

    minimizeAll() {
        this.windows.forEach((_, windowId) => {
            this.minimizeWindow(windowId);
        });
    }

    getWindow(windowId) {
        return this.windows.get(windowId);
    }
}

// Global instance
const windowManager = new WindowManager();
