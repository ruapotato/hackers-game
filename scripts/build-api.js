#!/usr/bin/env node
/**
 * Build api/content.json from blog markdown files
 * Run: node scripts/build-api.js
 */

const fs = require('fs');
const path = require('path');

const BLOGS_DIR = path.join(__dirname, '..', 'blogs');
const OUTPUT_FILE = path.join(__dirname, '..', 'api', 'content.json');

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

function buildApi() {
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

        posts.push({
            id: frontmatter.id || file.replace('.md', ''),
            title: frontmatter.title || 'Untitled',
            date: frontmatter.date || new Date().toISOString().split('T')[0],
            category: frontmatter.category || 'Linux',
            tags: Array.isArray(frontmatter.tags) ? frontmatter.tags : [],
            videoId: frontmatter.videoId || null,
            videoUrl: frontmatter.videoId ? `https://youtube.com/watch?v=${frontmatter.videoId}` : null,
            excerpt: frontmatter.excerpt || '',
            content: markdown,
            url: `https://hackers-game.com/?blog=${frontmatter.id || file.replace('.md', '')}`
        });
    }

    // Sort by date (newest first)
    posts.sort((a, b) => new Date(b.date) - new Date(a.date));

    const apiData = {
        site: {
            name: "Hackers Game",
            description: "David Hamner's portfolio - Linux phones, home automation, and open source development",
            author: "David Hamner",
            url: "https://hackers-game.com"
        },
        author: {
            name: "David Hamner",
            title: "Linux Enthusiast & Developer",
            tagline: "GNU/Linux Stuff",
            bio: "I explore Linux phones, home automation, 3D printing, and open-source software. I believe in privacy, user freedom, and technology that respects its users.",
            links: {
                youtube: "https://youtube.com/@DavidHamner",
                github: "https://github.com/ruapotato",
                linkedin: "https://www.linkedin.com/in/david-hamner-a1633635/",
                website: "https://hackers-game.com"
            }
        },
        posts: posts,
        categories: [...new Set(posts.map(p => p.category))],
        totalPosts: posts.length,
        lastUpdated: new Date().toISOString()
    };

    fs.writeFileSync(OUTPUT_FILE, JSON.stringify(apiData, null, 2));
    console.log(`Generated ${OUTPUT_FILE} with ${posts.length} posts`);
}

buildApi();
