# Hackers Game - Developer Guide

A retro desktop-environment web app (hackers-game.com) serving as David Hamner's portfolio. Built with vanilla JS — no frameworks.

## Project Structure

```
blogs/              # Source markdown articles (YAML frontmatter)
js/
  apps/             # Desktop app classes (blog-reader.js, browser.js, terminal.js, etc.)
  blog-data.js      # AUTO-GENERATED from blogs/*.md — do not edit directly
  desktop.js        # Desktop init, app launcher, clock, menus
  window-manager.js # Window system (drag, resize, minimize, maximize)
  search.js         # Global search indexing all blog posts
scripts/
  build-blog-data.js    # blogs/*.md → js/blog-data.js
  build-api.js          # blogs/*.md → api/content.json
  build-static-pages.js # blogs/*.md → blog/{id}/index.html (SEO)
  build-sitemap.js      # Generates sitemap
api/content.json    # AUTO-GENERATED public API
blog/               # AUTO-GENERATED static HTML pages for SEO
index.html          # Main page — defines desktop icons, app menu, taskbar
css/                # Styles
```

## Adding a New Blog Article

1. **Create the markdown file** in `blogs/`:

```yaml
---
id: my-article-slug
title: "Article Title"
date: 2026-03-20
category: "AI/ML"
tags: ["tag1", "tag2", "tag3"]
videoId: YouTube_ID_here   # OPTIONAL — omit for text-only articles
excerpt: "Short description for listings and search."
---

# Article content in markdown...
```

- `id` becomes the URL slug: `hackers-game.com/?blog=my-article-slug`
- `videoId` is optional — if present, the article gets a YouTube embed and video badge
- `category` groups articles in the filter UI (e.g., "Linux Phones", "AI/ML", "Desktop Linux")

2. **Run the build scripts** to regenerate derived files:

```bash
node scripts/build-blog-data.js    # → js/blog-data.js
node scripts/build-api.js          # → api/content.json
node scripts/build-static-pages.js # → blog/{id}/index.html
node scripts/build-sitemap.js      # → sitemap.xml (optional)
```

3. **Commit and push** the new `.md` file AND the regenerated files.

### App Links in Articles

To link to a URL that opens in the desktop's browser app (instead of a new tab), use this syntax in the markdown:

```
[app:browser:https://example.com/demo](Link Text)
```

This renders as a styled button. **It opens a new tab**, not the in-app browser
window, and that is deliberate: the in-app browser is an iframe, so any site
sending `X-Frame-Options: DENY` or a `frame-ancestors` CSP refuses to load and
the reader sees "refused to connect" with no way forward. GitHub does this.
It cannot be detected in JavaScript either, because a cross-origin frame fires
its load event whether or not it rendered and its contents cannot be inspected
— so there is no fallback to write, only a choice.

The in-app browser is still the right thing for a site you have *checked* loads
in a frame (255.one does). Use a desktop icon or menu entry with
`data-app="browser" data-url="..."` for that, and check it before shipping it.

## Adding a New Desktop App

1. **Create the app class** in `js/apps/my-app.js`:

```javascript
class MyApp {
    constructor() {
        this.instances = new Map();
    }

    open() {
        const { windowId, contentEl } = windowManager.createWindow({
            title: 'My App',
            icon: '&#128240;',  // HTML entity for window icon
            width: 800,
            height: 600,
            app: 'my-app'      // Must match the data-app attribute
        });
        // Render your app UI into contentEl
    }
}

const myApp = new MyApp();
```

2. **Add to `index.html`**:
   - Add a `<script src="js/apps/my-app.js">` tag
   - Add a `<div class="menu-item" data-app="my-app">` in the app menu
   - Optionally add a `<div class="desktop-icon" data-app="my-app">` for a desktop shortcut

3. **Register in `js/desktop.js`** `launchApp()` switch:

```javascript
case 'my-app':
    myApp.open();
    break;
```

## Markdown Rendering

The blog reader (`js/apps/blog-reader.js`) has a simple built-in markdown renderer supporting:
- Headers (`#`, `##`, `###`)
- Code blocks (triple backtick)
- Inline code (single backtick)
- Bold (`**text**`)
- Unordered lists (`- item`)
- Links (`[text](url)`) — open in new tab
- App links (`[app:browser:url](text)`) — open in desktop browser app
- Tables are NOT supported in the built-in renderer (they render as plain text)

## Key Conventions

- All apps use `windowManager.createWindow()` for windowed UI
- Apps store per-window state in a `this.instances` Map keyed by windowId
- The browser app (`browserApp.open(url)`) can open any URL in an iframe
- Blog posts are sorted newest-first by date
- No build tooling dependencies beyond Node.js for the build scripts
- No frameworks — everything is vanilla JS, HTML, CSS
