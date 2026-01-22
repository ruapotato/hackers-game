#!/usr/bin/env node
/**
 * Generate sitemap.xml for SEO
 */

const fs = require('fs');
const path = require('path');

const BLOGS_DIR = path.join(__dirname, '..', 'blogs');
const OUTPUT_FILE = path.join(__dirname, '..', 'sitemap.xml');

function parseYAMLFrontmatter(content) {
    const match = content.match(/^---\n([\s\S]*?)\n---\n([\s\S]*)$/);
    if (!match) return null;

    const yamlStr = match[1];
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

        frontmatter[key] = value;
    }

    return frontmatter;
}

function buildSitemap() {
    const urls = [];
    const today = new Date().toISOString().split('T')[0];

    // Homepage
    urls.push({
        loc: 'https://hackers-game.com/',
        lastmod: today,
        changefreq: 'weekly',
        priority: '1.0'
    });

    // Blog index
    urls.push({
        loc: 'https://hackers-game.com/blog/',
        lastmod: today,
        changefreq: 'daily',
        priority: '0.9'
    });

    // API endpoint
    urls.push({
        loc: 'https://hackers-game.com/api/content.json',
        lastmod: today,
        changefreq: 'daily',
        priority: '0.5'
    });

    // Individual blog posts
    const files = fs.readdirSync(BLOGS_DIR)
        .filter(f => f.endsWith('.md') && f !== 'README.md');

    for (const file of files) {
        const filePath = path.join(BLOGS_DIR, file);
        const content = fs.readFileSync(filePath, 'utf-8');
        const frontmatter = parseYAMLFrontmatter(content);

        if (!frontmatter) continue;

        const id = frontmatter.id || file.replace('.md', '');
        const date = frontmatter.date || today;

        urls.push({
            loc: `https://hackers-game.com/blog/${id}/`,
            lastmod: date,
            changefreq: 'monthly',
            priority: '0.8'
        });
    }

    // Generate XML
    const xml = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${urls.map(url => `  <url>
    <loc>${url.loc}</loc>
    <lastmod>${url.lastmod}</lastmod>
    <changefreq>${url.changefreq}</changefreq>
    <priority>${url.priority}</priority>
  </url>`).join('\n')}
</urlset>`;

    fs.writeFileSync(OUTPUT_FILE, xml);
    console.log(`Generated ${OUTPUT_FILE} with ${urls.length} URLs`);
}

buildSitemap();
