/**
 * Blog Reader App - Portfolio/Resume showcase
 */

class BlogReaderApp {
    constructor() {
        this.instances = new Map();
    }

    open(postId = null) {
        const { windowId, contentEl } = windowManager.createWindow({
            title: 'Blog - David Hamner',
            icon: '&#128240;',
            width: 850,
            height: 600,
            x: 80,
            y: 40,
            app: 'blog-reader'
        });

        const instance = {
            windowId,
            currentPost: postId,
            filter: 'all'
        };

        this.instances.set(windowId, instance);

        if (postId) {
            this.showPost(windowId, contentEl, postId);
        } else {
            this.showHome(windowId, contentEl);
        }

        return windowId;
    }

    showHome(windowId, contentEl, updateUrl = true) {
        const instance = this.instances.get(windowId);

        // Reset URL when going back to home
        if (updateUrl && window.location.search.includes('blog=')) {
            history.replaceState({}, 'David Hamner - GNU/Linux Stuff', window.location.pathname);
            document.title = 'David Hamner - GNU/Linux Stuff';
        }

        // Sort posts by date, newest first
        const sortedPosts = [...blogPosts].sort((a, b) => new Date(b.date) - new Date(a.date));

        // Get unique categories
        const categories = [...new Set(blogPosts.map(p => p.category))];

        const postsHtml = sortedPosts
            .filter(p => instance.filter === 'all' || p.category === instance.filter)
            .map(post => `
                <article class="blog-card" data-post-id="${post.id}">
                    <div class="blog-card-header">
                        <span class="blog-category">${post.category}</span>
                        <span class="blog-date">${this.formatDate(post.date)}</span>
                    </div>
                    <h3 class="blog-title">${post.title}</h3>
                    <p class="blog-excerpt">${post.excerpt}</p>
                    <div class="blog-tags">
                        ${post.tags.slice(0, 3).map(t => `<span class="blog-tag">#${t}</span>`).join('')}
                    </div>
                    ${post.videoId ? '<span class="has-video">📺 Video</span>' : ''}
                </article>
            `).join('');

        const filterHtml = categories.map(cat => `
            <button class="filter-btn ${instance.filter === cat ? 'active' : ''}" data-filter="${cat}">${cat}</button>
        `).join('');

        contentEl.innerHTML = `
            <div class="blog-reader">
                <header class="blog-header">
                    <div class="blog-hero">
                        <h1>David Hamner</h1>
                        <p class="tagline">GNU/Linux Stuff</p>
                        <p class="bio">${aboutData.bio}</p>
                        <div class="social-links">
                            <a href="${aboutData.links.youtube}" target="_blank" class="social-btn">📺 YouTube</a>
                            <a href="${aboutData.links.github}" target="_blank" class="social-btn">🐙 GitHub</a>
                            <a href="${aboutData.links.linkedin}" target="_blank" class="social-btn">💼 LinkedIn</a>
                        </div>
                    </div>
                    <div class="expertise-bars">
                        ${aboutData.expertise.map(e => `
                            <div class="expertise-item">
                                <div class="expertise-label">
                                    <span>${e.area}</span>
                                    <span class="expertise-desc">${e.description}</span>
                                </div>
                                <div class="expertise-bar">
                                    <div class="expertise-fill" style="width: ${e.level}%"></div>
                                </div>
                            </div>
                        `).join('')}
                    </div>
                </header>
                <nav class="blog-filters">
                    <button class="filter-btn ${instance.filter === 'all' ? 'active' : ''}" data-filter="all">All Posts</button>
                    ${filterHtml}
                </nav>
                <main class="blog-posts">
                    ${postsHtml}
                </main>
            </div>
            <style>
                .blog-reader {
                    height: 100%;
                    overflow-y: auto;
                    background: linear-gradient(135deg, #1a1a2e 0%, #16213e 100%);
                    color: #eee;
                }
                .blog-header {
                    background: linear-gradient(135deg, #0f3460 0%, #1a1a2e 100%);
                    padding: 30px;
                    border-bottom: 2px solid #87a752;
                }
                .blog-hero {
                    text-align: center;
                    margin-bottom: 25px;
                }
                .blog-hero h1 {
                    font-size: 2.2em;
                    margin: 0;
                    color: #87a752;
                }
                .tagline {
                    font-size: 1.1em;
                    color: #888;
                    margin: 5px 0 15px;
                }
                .bio {
                    max-width: 600px;
                    margin: 0 auto 20px;
                    line-height: 1.6;
                    color: #ccc;
                }
                .social-links {
                    display: flex;
                    gap: 15px;
                    justify-content: center;
                }
                .social-btn {
                    background: rgba(135, 167, 82, 0.2);
                    border: 1px solid #87a752;
                    color: #87a752;
                    padding: 8px 20px;
                    border-radius: 20px;
                    text-decoration: none;
                    transition: all 0.2s;
                }
                .social-btn:hover {
                    background: #87a752;
                    color: #000;
                }
                .expertise-bars {
                    max-width: 500px;
                    margin: 0 auto;
                }
                .expertise-item {
                    margin-bottom: 12px;
                }
                .expertise-label {
                    display: flex;
                    justify-content: space-between;
                    margin-bottom: 4px;
                    font-size: 0.9em;
                }
                .expertise-desc {
                    color: #666;
                    font-size: 0.85em;
                }
                .expertise-bar {
                    height: 8px;
                    background: #2a2a4a;
                    border-radius: 4px;
                    overflow: hidden;
                }
                .expertise-fill {
                    height: 100%;
                    background: linear-gradient(90deg, #87a752, #5a8a32);
                    border-radius: 4px;
                    transition: width 0.5s ease-out;
                }
                .blog-filters {
                    padding: 15px 20px;
                    background: rgba(0,0,0,0.3);
                    display: flex;
                    gap: 10px;
                    flex-wrap: wrap;
                    border-bottom: 1px solid #333;
                }
                .filter-btn {
                    background: transparent;
                    border: 1px solid #444;
                    color: #888;
                    padding: 6px 16px;
                    border-radius: 15px;
                    cursor: pointer;
                    font-size: 0.85em;
                    transition: all 0.2s;
                }
                .filter-btn:hover {
                    border-color: #87a752;
                    color: #87a752;
                }
                .filter-btn.active {
                    background: #87a752;
                    border-color: #87a752;
                    color: #000;
                }
                .blog-posts {
                    padding: 20px;
                    display: grid;
                    gap: 20px;
                }
                .blog-card {
                    background: rgba(255,255,255,0.05);
                    border: 1px solid #333;
                    border-radius: 10px;
                    padding: 20px;
                    cursor: pointer;
                    transition: all 0.2s;
                }
                .blog-card:hover {
                    border-color: #87a752;
                    transform: translateY(-2px);
                    box-shadow: 0 5px 20px rgba(135, 167, 82, 0.2);
                }
                .blog-card-header {
                    display: flex;
                    justify-content: space-between;
                    margin-bottom: 10px;
                }
                .blog-category {
                    background: rgba(135, 167, 82, 0.2);
                    color: #87a752;
                    padding: 3px 10px;
                    border-radius: 10px;
                    font-size: 0.8em;
                }
                .blog-date {
                    color: #666;
                    font-size: 0.85em;
                }
                .blog-title {
                    margin: 0 0 10px;
                    color: #fff;
                    font-size: 1.2em;
                }
                .blog-excerpt {
                    color: #999;
                    font-size: 0.95em;
                    line-height: 1.5;
                    margin: 0 0 15px;
                }
                .blog-tags {
                    display: flex;
                    gap: 8px;
                    flex-wrap: wrap;
                }
                .blog-tag {
                    color: #666;
                    font-size: 0.8em;
                }
                .has-video {
                    float: right;
                    color: #e74c3c;
                    font-size: 0.85em;
                }
            </style>
        `;

        this.setupHomeEvents(windowId, contentEl);
    }

    showPost(windowId, contentEl, postId, updateUrl = true) {
        const post = blogPosts.find(p => p.id === postId);
        if (!post) {
            this.showHome(windowId, contentEl);
            return;
        }

        // Update URL for direct linking
        if (updateUrl) {
            history.replaceState({ blog: postId }, post.title, `?blog=${postId}`);
            document.title = `${post.title} - David Hamner`;
        }

        // Update window title
        const windowData = windowManager.getWindow(windowId);
        if (windowData) {
            windowData.element.querySelector('.window-title').innerHTML =
                `<span style="margin-right: 8px;">&#128240;</span>${post.title}`;
        }

        // Convert markdown-like content to HTML
        const contentHtml = this.renderMarkdown(post.content);

        contentEl.innerHTML = `
            <div class="blog-post-view">
                <button class="back-btn">← Back to Posts</button>
                <article class="post-content">
                    <header>
                        <span class="post-category">${post.category}</span>
                        <h1>${post.title}</h1>
                        <div class="post-meta">
                            <span class="post-date">📅 ${this.formatDate(post.date)}</span>
                            ${post.videoId ? `<a href="https://youtube.com/watch?v=${post.videoId}" target="_blank" class="watch-video">📺 Watch Video</a>` : ''}
                            <button class="share-btn" data-url="${window.location.origin}?blog=${post.id}">🔗 Copy Link</button>
                        </div>
                        <div class="post-tags">
                            ${post.tags.map(t => `<span class="tag">#${t}</span>`).join('')}
                        </div>
                    </header>
                    <div class="post-body">
                        ${contentHtml}
                    </div>
                    ${post.videoId ? `
                        <div class="video-embed">
                            <iframe
                                src="https://www.youtube.com/embed/${post.videoId}"
                                frameborder="0"
                                allowfullscreen
                            ></iframe>
                        </div>
                    ` : ''}
                </article>
            </div>
            <style>
                .blog-post-view {
                    height: 100%;
                    overflow-y: auto;
                    background: #1a1a2e;
                    color: #eee;
                }
                .back-btn {
                    position: sticky;
                    top: 0;
                    background: #0f3460;
                    border: none;
                    color: #87a752;
                    padding: 12px 20px;
                    cursor: pointer;
                    width: 100%;
                    text-align: left;
                    font-size: 0.95em;
                    z-index: 10;
                    border-bottom: 1px solid #333;
                }
                .back-btn:hover {
                    background: #1a4a7a;
                }
                .post-content {
                    max-width: 800px;
                    margin: 0 auto;
                    padding: 30px;
                }
                .post-content header {
                    margin-bottom: 30px;
                    padding-bottom: 20px;
                    border-bottom: 1px solid #333;
                }
                .post-category {
                    background: #87a752;
                    color: #000;
                    padding: 4px 12px;
                    border-radius: 12px;
                    font-size: 0.8em;
                    font-weight: 500;
                }
                .post-content h1 {
                    font-size: 2em;
                    margin: 15px 0;
                    color: #fff;
                }
                .post-meta {
                    display: flex;
                    gap: 20px;
                    color: #888;
                    margin-bottom: 15px;
                }
                .watch-video {
                    color: #e74c3c;
                    text-decoration: none;
                }
                .watch-video:hover {
                    text-decoration: underline;
                }
                .share-btn {
                    background: rgba(135, 167, 82, 0.2);
                    border: 1px solid #87a752;
                    color: #87a752;
                    padding: 4px 12px;
                    border-radius: 12px;
                    cursor: pointer;
                    font-size: 0.85em;
                    transition: all 0.2s;
                }
                .share-btn:hover {
                    background: #87a752;
                    color: #000;
                }
                .share-btn.copied {
                    background: #87a752;
                    color: #000;
                }
                .post-tags {
                    display: flex;
                    gap: 10px;
                    flex-wrap: wrap;
                }
                .post-tags .tag {
                    background: rgba(135, 167, 82, 0.2);
                    color: #87a752;
                    padding: 4px 10px;
                    border-radius: 10px;
                    font-size: 0.85em;
                }
                .post-body {
                    line-height: 1.8;
                    font-size: 1.05em;
                }
                .post-body h2 {
                    color: #87a752;
                    margin: 30px 0 15px;
                    font-size: 1.4em;
                }
                .post-body h3 {
                    color: #aaa;
                    margin: 25px 0 10px;
                }
                .post-body p {
                    margin: 0 0 15px;
                    color: #ccc;
                }
                .post-body ul, .post-body ol {
                    margin: 0 0 15px 20px;
                    color: #ccc;
                }
                .post-body li {
                    margin-bottom: 8px;
                }
                .post-body code {
                    background: #0a0a15;
                    padding: 2px 6px;
                    border-radius: 3px;
                    font-family: 'Ubuntu Mono', monospace;
                    color: #87a752;
                }
                .post-body pre {
                    background: #0a0a15;
                    padding: 15px;
                    border-radius: 8px;
                    overflow-x: auto;
                    margin: 15px 0;
                    border: 1px solid #333;
                }
                .post-body pre code {
                    background: none;
                    padding: 0;
                    color: #87a752;
                }
                .post-body strong {
                    color: #fff;
                }
                .video-embed {
                    margin-top: 30px;
                    padding-top: 20px;
                    border-top: 1px solid #333;
                }
                .video-embed iframe {
                    width: 100%;
                    height: 400px;
                    border-radius: 8px;
                }
            </style>
        `;

        // Back button handler
        contentEl.querySelector('.back-btn').addEventListener('click', () => {
            this.showHome(windowId, contentEl);
            // Reset title
            if (windowData) {
                windowData.element.querySelector('.window-title').innerHTML =
                    `<span style="margin-right: 8px;">&#128240;</span>Blog - David Hamner`;
            }
        });

        // Share button handler
        const shareBtn = contentEl.querySelector('.share-btn');
        if (shareBtn) {
            shareBtn.addEventListener('click', () => {
                const url = shareBtn.dataset.url;
                navigator.clipboard.writeText(url).then(() => {
                    shareBtn.textContent = '✓ Copied!';
                    shareBtn.classList.add('copied');
                    setTimeout(() => {
                        shareBtn.textContent = '🔗 Copy Link';
                        shareBtn.classList.remove('copied');
                    }, 2000);
                });
            });
        }
    }

    setupHomeEvents(windowId, contentEl) {
        const instance = this.instances.get(windowId);

        // Post click handlers
        contentEl.querySelectorAll('.blog-card').forEach(card => {
            card.addEventListener('click', () => {
                this.showPost(windowId, contentEl, card.dataset.postId);
            });
        });

        // Filter handlers
        contentEl.querySelectorAll('.filter-btn').forEach(btn => {
            btn.addEventListener('click', () => {
                instance.filter = btn.dataset.filter;
                this.showHome(windowId, contentEl);
            });
        });
    }

    renderMarkdown(content) {
        // Simple markdown-like rendering
        return content
            // Headers
            .replace(/^### (.*$)/gm, '<h3>$1</h3>')
            .replace(/^## (.*$)/gm, '<h2>$1</h2>')
            .replace(/^# (.*$)/gm, '<h1>$1</h1>')
            // Code blocks
            .replace(/```(\w*)\n([\s\S]*?)```/g, '<pre><code>$2</code></pre>')
            // Inline code
            .replace(/`([^`]+)`/g, '<code>$1</code>')
            // Bold
            .replace(/\*\*([^*]+)\*\*/g, '<strong>$1</strong>')
            // Lists
            .replace(/^- (.*$)/gm, '<li>$1</li>')
            .replace(/(<li>.*<\/li>\n?)+/g, '<ul>$&</ul>')
            // Links
            .replace(/\[([^\]]+)\]\(([^)]+)\)/g, '<a href="$2" target="_blank">$1</a>')
            // Paragraphs
            .replace(/\n\n/g, '</p><p>')
            .replace(/^(?!<[hpuol])/gm, '<p>')
            .replace(/(?<![>])$/gm, '</p>')
            // Clean up
            .replace(/<p><\/p>/g, '')
            .replace(/<p>(<[hpuol])/g, '$1')
            .replace(/(<\/[hpuol][^>]*>)<\/p>/g, '$1');
    }

    formatDate(dateStr) {
        const date = new Date(dateStr);
        return date.toLocaleDateString('en-US', {
            year: 'numeric',
            month: 'long',
            day: 'numeric'
        });
    }

    // Open blog directly from URL - for direct linking
    openFromUrl(postId) {
        const { windowId, contentEl } = windowManager.createWindow({
            title: 'Blog - David Hamner',
            icon: '&#128240;',
            width: 850,
            height: 600,
            x: 80,
            y: 40,
            app: 'blog-reader'
        });

        const instance = {
            windowId,
            currentPost: postId,
            filter: 'all'
        };

        this.instances.set(windowId, instance);

        // Show post without updating URL (it's already set)
        this.showPost(windowId, contentEl, postId, false);

        // Maximize on mobile or when opened via direct link
        if (window.innerWidth < 1024) {
            windowManager.toggleMaximize(windowId);
        }

        return windowId;
    }
}

// Global instance
const blogReaderApp = new BlogReaderApp();

// Check for direct blog link on page load
document.addEventListener('DOMContentLoaded', () => {
    const urlParams = new URLSearchParams(window.location.search);
    const blogId = urlParams.get('blog');

    if (blogId) {
        // Small delay to ensure window manager is ready
        setTimeout(() => {
            blogReaderApp.openFromUrl(blogId);
        }, 100);
    }
});
