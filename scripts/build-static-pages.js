#!/usr/bin/env node
/**
 * Generate static HTML pages for each blog post
 * These serve crawlers, non-JS browsers, and improve SEO
 * JS-enabled browsers get redirected to the full app experience
 */

const fs = require('fs');
const path = require('path');

const BLOGS_DIR = path.join(__dirname, '..', 'blogs');
const OUTPUT_DIR = path.join(__dirname, '..', 'blog');

function parseYAMLFrontmatter(content) {
    const match = content.match(/^---\n([\s\S]*?)\n---\n([\s\S]*)$/);
    if (!match) return null;

    const yamlStr = match[1];
    const markdown = match[2];

    const frontmatter = {};
    const lines = yamlStr.split('\n');

    for (const line of lines) {
        const colonIdx = line.indexOf(':');
        if (colonIdx === -1) continue;

        const key = line.slice(0, colonIdx).trim();
        let value = line.slice(colonIdx + 1).trim();

        if ((value.startsWith('"') && value.endsWith('"')) ||
            (value.startsWith("'") && value.endsWith("'"))) {
            value = value.slice(1, -1);
        }

        if (value.startsWith('[') && value.endsWith(']')) {
            try {
                value = JSON.parse(value);
            } catch (e) {}
        }

        frontmatter[key] = value;
    }

    return { frontmatter, content: markdown.trim() };
}

function markdownToHtml(markdown) {
    // Simple markdown to HTML conversion
    let html = markdown
        // Escape HTML
        .replace(/&/g, '&amp;')
        .replace(/</g, '&lt;')
        .replace(/>/g, '&gt;')
        // Headers
        .replace(/^### (.*$)/gim, '<h3>$1</h3>')
        .replace(/^## (.*$)/gim, '<h2>$1</h2>')
        .replace(/^# (.*$)/gim, '<h1>$1</h1>')
        // Bold and italic
        .replace(/\*\*\*(.*?)\*\*\*/g, '<strong><em>$1</em></strong>')
        .replace(/\*\*(.*?)\*\*/g, '<strong>$1</strong>')
        .replace(/\*(.*?)\*/g, '<em>$1</em>')
        // Links
        .replace(/\[([^\]]+)\]\(([^)]+)\)/g, '<a href="$2">$1</a>')
        // Code blocks
        .replace(/```(\w*)\n([\s\S]*?)```/g, '<pre><code>$2</code></pre>')
        // Inline code
        .replace(/`([^`]+)`/g, '<code>$1</code>')
        // Lists
        .replace(/^\- (.*$)/gim, '<li>$1</li>')
        // Paragraphs
        .replace(/\n\n/g, '</p><p>')
        // Line breaks
        .replace(/\n/g, '<br>');

    // Wrap lists
    html = html.replace(/(<li>.*<\/li>)/gs, '<ul>$1</ul>');
    // Clean up multiple ul tags
    html = html.replace(/<\/ul><ul>/g, '');

    return `<p>${html}</p>`;
}

function generateHtmlPage(post) {
    const thumbnail = post.videoId
        ? `https://img.youtube.com/vi/${post.videoId}/maxresdefault.jpg`
        : 'https://hackers-game.com/images/og-default.png';

    const canonicalUrl = `https://hackers-game.com/blog/${post.id}/`;
    const appUrl = `https://hackers-game.com/?blog=${post.id}`;
    const videoEmbed = post.videoId
        ? `<div class="video-container">
            <iframe
                src="https://www.youtube.com/embed/${post.videoId}"
                frameborder="0"
                allowfullscreen
                loading="lazy"
                title="${post.title}">
            </iframe>
           </div>`
        : '';

    return `<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>${post.title} - Hackers Game</title>
    <meta name="description" content="${post.excerpt}">
    <meta name="author" content="David Hamner">
    <meta name="keywords" content="${Array.isArray(post.tags) ? post.tags.join(', ') : ''}">

    <!-- Open Graph / Facebook -->
    <meta property="og:type" content="article">
    <meta property="og:url" content="${canonicalUrl}">
    <meta property="og:title" content="${post.title}">
    <meta property="og:description" content="${post.excerpt}">
    <meta property="og:image" content="${thumbnail}">
    <meta property="og:site_name" content="Hackers Game">
    <meta property="article:author" content="David Hamner">
    <meta property="article:published_time" content="${post.date}">

    <!-- Twitter -->
    <meta name="twitter:card" content="summary_large_image">
    <meta name="twitter:url" content="${canonicalUrl}">
    <meta name="twitter:title" content="${post.title}">
    <meta name="twitter:description" content="${post.excerpt}">
    <meta name="twitter:image" content="${thumbnail}">

    <!-- Canonical URL -->
    <link rel="canonical" href="${canonicalUrl}">

    <!-- JSON-LD structured data -->
    <script type="application/ld+json">
    {
        "@context": "https://schema.org",
        "@type": "BlogPosting",
        "headline": "${post.title}",
        "description": "${post.excerpt}",
        "image": "${thumbnail}",
        "author": {
            "@type": "Person",
            "name": "David Hamner",
            "url": "https://hackers-game.com"
        },
        "publisher": {
            "@type": "Person",
            "name": "David Hamner"
        },
        "datePublished": "${post.date}",
        "mainEntityOfPage": {
            "@type": "WebPage",
            "@id": "${canonicalUrl}"
        }${post.videoId ? `,
        "video": {
            "@type": "VideoObject",
            "name": "${post.title}",
            "thumbnailUrl": "${thumbnail}",
            "embedUrl": "https://www.youtube.com/embed/${post.videoId}"
        }` : ''}
    }
    </script>

    <style>
        * { box-sizing: border-box; }
        body {
            font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, sans-serif;
            line-height: 1.6;
            max-width: 800px;
            margin: 0 auto;
            padding: 20px;
            background: #1a1a2e;
            color: #eee;
        }
        a { color: #4fc3f7; }
        h1 { color: #fff; border-bottom: 2px solid #4fc3f7; padding-bottom: 10px; }
        h2, h3 { color: #4fc3f7; }
        .meta { color: #888; margin-bottom: 20px; }
        .tags { margin: 10px 0; }
        .tag {
            display: inline-block;
            background: #333;
            padding: 2px 8px;
            border-radius: 3px;
            margin: 2px;
            font-size: 0.85em;
        }
        .video-container {
            position: relative;
            padding-bottom: 56.25%;
            height: 0;
            overflow: hidden;
            margin: 20px 0;
            background: #000;
            border-radius: 8px;
        }
        .video-container iframe {
            position: absolute;
            top: 0;
            left: 0;
            width: 100%;
            height: 100%;
        }
        .content { margin: 30px 0; }
        pre {
            background: #0d0d1a;
            padding: 15px;
            border-radius: 5px;
            overflow-x: auto;
        }
        code {
            background: #0d0d1a;
            padding: 2px 5px;
            border-radius: 3px;
        }
        pre code { background: none; padding: 0; }
        .app-link {
            display: inline-block;
            background: #4fc3f7;
            color: #000;
            padding: 10px 20px;
            border-radius: 5px;
            text-decoration: none;
            font-weight: bold;
            margin: 20px 0;
        }
        .app-link:hover { background: #81d4fa; }
        footer {
            margin-top: 40px;
            padding-top: 20px;
            border-top: 1px solid #333;
            color: #888;
        }
        footer a { color: #4fc3f7; }
        .nav { margin-bottom: 20px; }
        .nav a { margin-right: 15px; }
    </style>
</head>
<body>
    <nav class="nav">
        <a href="https://hackers-game.com">Home</a>
        <a href="https://hackers-game.com/blog/">All Posts</a>
        <a href="https://youtube.com/@DavidHamner">YouTube</a>
        <a href="https://github.com/ruapotato">GitHub</a>
    </nav>

    <article>
        <h1>${post.title}</h1>
        <div class="meta">
            <span>${post.date}</span> ·
            <span>${post.category}</span>
        </div>

        ${post.tags && post.tags.length ? `
        <div class="tags">
            ${post.tags.map(tag => `<span class="tag">${tag}</span>`).join('')}
        </div>
        ` : ''}

        ${videoEmbed}

        <div class="content">
            ${markdownToHtml(post.content)}
        </div>

        <a href="${appUrl}" class="app-link">View in Interactive Desktop App</a>
    </article>

    <footer>
        <p>
            <strong>David Hamner</strong> - GNU/Linux Stuff<br>
            <a href="https://youtube.com/@DavidHamner">YouTube</a> ·
            <a href="https://github.com/ruapotato">GitHub</a> ·
            <a href="https://www.linkedin.com/in/david-hamner-a1633635/">LinkedIn</a>
        </p>
        <p>
            <a href="https://hackers-game.com/api/content.json">API</a> ·
            <a href="https://hackers-game.com/sitemap.xml">Sitemap</a>
        </p>
    </footer>
</body>
</html>`;
}

function generateIndexPage(posts) {
    const postsList = posts.map(post => {
        const thumbnail = post.videoId
            ? `https://img.youtube.com/vi/${post.videoId}/mqdefault.jpg`
            : '';
        return `
        <article class="post-card">
            ${thumbnail ? `<img src="${thumbnail}" alt="${post.title}" loading="lazy">` : ''}
            <div class="post-info">
                <h2><a href="/blog/${post.id}/">${post.title}</a></h2>
                <div class="meta">${post.date} · ${post.category}</div>
                <p>${post.excerpt}</p>
            </div>
        </article>`;
    }).join('\n');

    return `<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Blog - Hackers Game</title>
    <meta name="description" content="David Hamner's blog about Linux phones, home automation, and open source development">
    <meta property="og:title" content="Hackers Game Blog">
    <meta property="og:description" content="GNU/Linux stuff - Linux phones, home automation, and open source">
    <meta property="og:url" content="https://hackers-game.com/blog/">
    <meta property="og:type" content="website">
    <link rel="canonical" href="https://hackers-game.com/blog/">

    <style>
        * { box-sizing: border-box; }
        body {
            font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;
            line-height: 1.6;
            max-width: 1000px;
            margin: 0 auto;
            padding: 20px;
            background: #1a1a2e;
            color: #eee;
        }
        a { color: #4fc3f7; text-decoration: none; }
        a:hover { text-decoration: underline; }
        h1 { color: #fff; }
        .nav { margin-bottom: 30px; }
        .nav a { margin-right: 15px; }
        .posts { display: grid; gap: 20px; }
        .post-card {
            display: flex;
            gap: 20px;
            background: #16213e;
            padding: 20px;
            border-radius: 8px;
        }
        .post-card img {
            width: 200px;
            height: 112px;
            object-fit: cover;
            border-radius: 5px;
            flex-shrink: 0;
        }
        .post-info h2 { margin: 0 0 5px 0; font-size: 1.2em; }
        .post-info h2 a { color: #fff; }
        .meta { color: #888; font-size: 0.9em; margin-bottom: 10px; }
        .post-info p { margin: 0; color: #ccc; }
        @media (max-width: 600px) {
            .post-card { flex-direction: column; }
            .post-card img { width: 100%; height: auto; }
        }
        footer { margin-top: 40px; padding-top: 20px; border-top: 1px solid #333; color: #888; }
    </style>
</head>
<body>
    <nav class="nav">
        <a href="https://hackers-game.com">Home</a>
        <a href="https://youtube.com/@DavidHamner">YouTube</a>
        <a href="https://github.com/ruapotato">GitHub</a>
    </nav>

    <h1>Blog Posts</h1>
    <p>${posts.length} posts about Linux phones, home automation, and open source development.</p>

    <div class="posts">
        ${postsList}
    </div>

    <footer>
        <p><strong>David Hamner</strong> - GNU/Linux Stuff</p>
        <p>
            <a href="https://hackers-game.com/api/content.json">API</a> ·
            <a href="https://hackers-game.com/sitemap.xml">Sitemap</a>
        </p>
    </footer>
</body>
</html>`;
}

function buildStaticPages() {
    // Ensure output directory exists
    if (!fs.existsSync(OUTPUT_DIR)) {
        fs.mkdirSync(OUTPUT_DIR, { recursive: true });
    }

    const posts = [];

    const files = fs.readdirSync(BLOGS_DIR)
        .filter(f => f.endsWith('.md') && f !== 'README.md')
        .sort();

    for (const file of files) {
        const filePath = path.join(BLOGS_DIR, file);
        const content = fs.readFileSync(filePath, 'utf-8');
        const parsed = parseYAMLFrontmatter(content);

        if (!parsed) continue;

        const { frontmatter, content: markdown } = parsed;

        const post = {
            id: frontmatter.id || file.replace('.md', ''),
            title: frontmatter.title || 'Untitled',
            date: frontmatter.date || new Date().toISOString().split('T')[0],
            category: frontmatter.category || 'Linux',
            tags: Array.isArray(frontmatter.tags) ? frontmatter.tags : [],
            videoId: frontmatter.videoId || null,
            excerpt: frontmatter.excerpt || '',
            content: markdown
        };

        posts.push(post);

        // Create directory for post
        const postDir = path.join(OUTPUT_DIR, post.id);
        if (!fs.existsSync(postDir)) {
            fs.mkdirSync(postDir, { recursive: true });
        }

        // Write HTML file
        const htmlContent = generateHtmlPage(post);
        fs.writeFileSync(path.join(postDir, 'index.html'), htmlContent);
    }

    // Sort by date (newest first)
    posts.sort((a, b) => new Date(b.date) - new Date(a.date));

    // Generate index page
    const indexHtml = generateIndexPage(posts);
    fs.writeFileSync(path.join(OUTPUT_DIR, 'index.html'), indexHtml);

    console.log(`Generated ${posts.length} static blog pages in ${OUTPUT_DIR}/`);
}

buildStaticPages();
