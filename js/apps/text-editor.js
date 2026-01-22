/**
 * Text Editor App - Simple gedit-style editor
 */

class TextEditorApp {
    constructor() {
        this.instances = new Map();
    }

    open() {
        const { windowId, contentEl } = windowManager.createWindow({
            title: 'Text Editor',
            icon: '&#128221;',
            width: 700,
            height: 500,
            app: 'text-editor'
        });

        const instance = {
            windowId,
            filePath: null,
            content: '',
            modified: false
        };

        this.instances.set(windowId, instance);
        this.render(windowId, contentEl);

        return windowId;
    }

    openFile(filePath) {
        const { windowId, contentEl } = windowManager.createWindow({
            title: `Text Editor - ${filePath.split('/').pop()}`,
            icon: '&#128221;',
            width: 700,
            height: 500,
            app: 'text-editor'
        });

        const fileContent = virtualFS.cat(filePath);

        const instance = {
            windowId,
            filePath,
            content: fileContent.error ? '' : fileContent.content,
            modified: false
        };

        this.instances.set(windowId, instance);
        this.render(windowId, contentEl);

        // Set content
        const textarea = contentEl.querySelector('.text-editor-textarea');
        textarea.value = instance.content;
        this.updateLineNumbers(contentEl);

        return windowId;
    }

    render(windowId, contentEl) {
        contentEl.innerHTML = `
            <div class="text-editor">
                <div class="text-editor-toolbar">
                    <button class="btn-new" title="New">📄 New</button>
                    <button class="btn-save" title="Save">💾 Save</button>
                    <span style="flex: 1;"></span>
                    <span class="file-info"></span>
                </div>
                <div class="text-editor-content">
                    <div class="line-numbers"></div>
                    <textarea class="text-editor-textarea" spellcheck="false"></textarea>
                </div>
            </div>
        `;

        this.setupEvents(windowId, contentEl);
        this.updateLineNumbers(contentEl);
    }

    setupEvents(windowId, contentEl) {
        const instance = this.instances.get(windowId);
        const textarea = contentEl.querySelector('.text-editor-textarea');
        const lineNumbers = contentEl.querySelector('.line-numbers');

        // Sync scroll
        textarea.addEventListener('scroll', () => {
            lineNumbers.scrollTop = textarea.scrollTop;
        });

        // Update line numbers on input
        textarea.addEventListener('input', () => {
            this.updateLineNumbers(contentEl);
            instance.modified = true;
            this.updateTitle(windowId);
        });

        // Tab support
        textarea.addEventListener('keydown', (e) => {
            if (e.key === 'Tab') {
                e.preventDefault();
                const start = textarea.selectionStart;
                const end = textarea.selectionEnd;
                textarea.value = textarea.value.substring(0, start) + '    ' + textarea.value.substring(end);
                textarea.selectionStart = textarea.selectionEnd = start + 4;
                this.updateLineNumbers(contentEl);
            }
        });

        // New button
        contentEl.querySelector('.btn-new').addEventListener('click', () => {
            textarea.value = '';
            instance.filePath = null;
            instance.content = '';
            instance.modified = false;
            this.updateLineNumbers(contentEl);
            this.updateTitle(windowId);
        });

        // Save button (simulated)
        contentEl.querySelector('.btn-save').addEventListener('click', () => {
            instance.content = textarea.value;
            instance.modified = false;
            this.updateTitle(windowId);

            // Show save notification
            const info = contentEl.querySelector('.file-info');
            info.textContent = 'Saved!';
            info.style.color = '#5a5';
            setTimeout(() => {
                info.textContent = '';
            }, 2000);
        });
    }

    updateLineNumbers(contentEl) {
        const textarea = contentEl.querySelector('.text-editor-textarea');
        const lineNumbers = contentEl.querySelector('.line-numbers');
        const lines = textarea.value.split('\n').length;

        lineNumbers.innerHTML = Array.from({ length: lines }, (_, i) => `<div>${i + 1}</div>`).join('');
    }

    updateTitle(windowId) {
        const instance = this.instances.get(windowId);
        const windowData = windowManager.getWindow(windowId);
        if (!windowData) return;

        const fileName = instance.filePath ? instance.filePath.split('/').pop() : 'Untitled';
        const modified = instance.modified ? ' •' : '';

        windowData.element.querySelector('.window-title').innerHTML =
            `<span style="margin-right: 8px;">&#128221;</span>Text Editor - ${fileName}${modified}`;
    }
}

// Global instance
const textEditorApp = new TextEditorApp();
