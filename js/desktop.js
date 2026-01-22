/**
 * Desktop - Main initialization and event handling
 */

class Desktop {
    constructor() {
        this.init();
    }

    init() {
        this.setupClock();
        this.setupAppMenu();
        this.setupDesktopIcons();
        this.setupContextMenu();
        this.applySettings();

        // Welcome - auto-open blog reader on visit
        setTimeout(() => {
            blogReaderApp.open();
        }, 300);
    }

    setupClock() {
        const clockEl = document.getElementById('clock');

        const updateClock = () => {
            const now = new Date();
            const format = settingsApp?.getClockFormat() || '24h';

            let hours = now.getHours();
            let period = '';

            if (format === '12h') {
                period = hours >= 12 ? ' PM' : ' AM';
                hours = hours % 12 || 12;
            }

            const minutes = now.getMinutes().toString().padStart(2, '0');
            const dateStr = now.toLocaleDateString('en-US', {
                weekday: 'short',
                month: 'short',
                day: 'numeric'
            });

            clockEl.textContent = `${dateStr}  ${hours}:${minutes}${period}`;
        };

        updateClock();
        setInterval(updateClock, 1000);
    }

    setupAppMenu() {
        const appMenuBtn = document.getElementById('app-menu-btn');
        const appMenu = document.getElementById('app-menu');
        const placesMenuBtn = document.getElementById('places-menu-btn');

        // Toggle app menu
        appMenuBtn.addEventListener('click', (e) => {
            e.stopPropagation();
            appMenu.classList.toggle('hidden');
            appMenuBtn.classList.toggle('active');
        });

        // Close menu on click outside
        document.addEventListener('click', (e) => {
            if (!e.target.closest('#app-menu') && !e.target.closest('#app-menu-btn')) {
                appMenu.classList.add('hidden');
                appMenuBtn.classList.remove('active');
            }
        });

        // Menu item clicks
        appMenu.querySelectorAll('.menu-item').forEach(item => {
            item.addEventListener('click', () => {
                const app = item.dataset.app;
                this.launchApp(app);
                appMenu.classList.add('hidden');
                appMenuBtn.classList.remove('active');
            });
        });

        // Places menu (quick access)
        placesMenuBtn.addEventListener('click', () => {
            fileManagerApp.open('/home/hacker');
        });
    }

    setupDesktopIcons() {
        const icons = document.querySelectorAll('.desktop-icon');

        icons.forEach(icon => {
            // Single click to select
            icon.addEventListener('click', (e) => {
                if (!e.detail || e.detail === 1) {
                    icons.forEach(i => i.classList.remove('selected'));
                    icon.classList.add('selected');
                }
            });

            // Double click to open
            icon.addEventListener('dblclick', () => {
                const app = icon.dataset.app;
                const path = icon.dataset.path;

                if (app === 'file-manager' && path) {
                    fileManagerApp.open(path);
                } else {
                    this.launchApp(app);
                }
            });
        });

        // Click on desktop to deselect
        document.getElementById('desktop').addEventListener('click', (e) => {
            if (e.target.id === 'desktop') {
                icons.forEach(i => i.classList.remove('selected'));
            }
        });
    }

    setupContextMenu() {
        const desktop = document.getElementById('desktop');

        desktop.addEventListener('contextmenu', (e) => {
            e.preventDefault();

            // Remove any existing context menu
            document.querySelectorAll('.context-menu').forEach(m => m.remove());

            const menu = document.createElement('div');
            menu.className = 'context-menu';
            menu.innerHTML = `
                <div class="context-menu-item" data-action="terminal">
                    <span>&#9638;</span> Open Terminal
                </div>
                <div class="context-menu-item" data-action="file-manager">
                    <span>&#128193;</span> Open File Manager
                </div>
                <div class="context-menu-separator"></div>
                <div class="context-menu-item" data-action="refresh">
                    <span>&#8635;</span> Refresh
                </div>
                <div class="context-menu-item" data-action="settings">
                    <span>&#9881;</span> Settings
                </div>
            `;

            menu.style.left = `${e.clientX}px`;
            menu.style.top = `${e.clientY}px`;

            document.body.appendChild(menu);

            // Adjust position if off-screen
            const rect = menu.getBoundingClientRect();
            if (rect.right > window.innerWidth) {
                menu.style.left = `${e.clientX - rect.width}px`;
            }
            if (rect.bottom > window.innerHeight) {
                menu.style.top = `${e.clientY - rect.height}px`;
            }

            // Handle menu item clicks
            menu.querySelectorAll('.context-menu-item').forEach(item => {
                item.addEventListener('click', () => {
                    const action = item.dataset.action;
                    switch (action) {
                        case 'terminal':
                            terminalApp.open();
                            break;
                        case 'file-manager':
                            fileManagerApp.open();
                            break;
                        case 'refresh':
                            location.reload();
                            break;
                        case 'settings':
                            settingsApp.open();
                            break;
                    }
                    menu.remove();
                });
            });

            // Remove menu on click outside
            setTimeout(() => {
                document.addEventListener('click', function handler() {
                    menu.remove();
                    document.removeEventListener('click', handler);
                });
            }, 10);
        });
    }

    launchApp(appName) {
        switch (appName) {
            case 'terminal':
                terminalApp.open();
                break;
            case 'file-manager':
                fileManagerApp.open();
                break;
            case 'browser':
                browserApp.open();
                break;
            case 'text-editor':
                textEditorApp.open();
                break;
            case 'settings':
                settingsApp.open();
                break;
            case 'hackers-game':
                hackersGameApp.open();
                break;
            case 'blog-reader':
                blogReaderApp.open();
                break;
            case 'youtube':
                browserApp.open('https://youtube.com/@DavidHamner');
                break;
            case 'sandy-potato':
                sandyPotatoApp.open();
                break;
            default:
                console.warn('Unknown app:', appName);
        }
    }

    applySettings() {
        // Apply saved settings on load
        if (settingsApp) {
            settingsApp.applySettings();
        }
    }
}

// Initialize desktop when DOM is ready
document.addEventListener('DOMContentLoaded', () => {
    window.desktop = new Desktop();
});

// Prevent default drag behaviors
document.addEventListener('dragstart', (e) => e.preventDefault());
document.addEventListener('drop', (e) => e.preventDefault());
document.addEventListener('dragover', (e) => e.preventDefault());
