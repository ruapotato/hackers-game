#!/usr/bin/env node
/**
 * Build blog-data.js from individual markdown files in /blogs/
 * Run: node scripts/build-blog-data.js
 */

const fs = require('fs');
const path = require('path');

const BLOGS_DIR = path.join(__dirname, '..', 'blogs');
const OUTPUT_FILE = path.join(__dirname, '..', 'js', 'blog-data.js');

function parseYAMLFrontmatter(content) {
    const match = content.match(/^---\n([\s\S]*?)\n---\n([\s\S]*)$/);
    if (!match) return null;

    const yamlStr = match[1];
    const markdown = match[2];

    // Simple YAML parser for our specific format
    const frontmatter = {};
    const lines = yamlStr.split('\n');

    for (const line of lines) {
        const colonIdx = line.indexOf(':');
        if (colonIdx === -1) continue;

        const key = line.slice(0, colonIdx).trim();
        let value = line.slice(colonIdx + 1).trim();

        // Handle quoted strings
        if ((value.startsWith('"') && value.endsWith('"')) ||
            (value.startsWith("'") && value.endsWith("'"))) {
            value = value.slice(1, -1);
        }

        // Handle arrays
        if (value.startsWith('[') && value.endsWith(']')) {
            try {
                value = JSON.parse(value);
            } catch (e) {
                // Keep as string if parsing fails
            }
        }

        frontmatter[key] = value;
    }

    return { frontmatter, content: markdown.trim() };
}

function buildBlogData() {
    const blogPosts = [];

    // Read all .md files from blogs directory
    const files = fs.readdirSync(BLOGS_DIR)
        .filter(f => f.endsWith('.md') && f !== 'README.md')
        .sort();

    console.log(`Found ${files.length} blog files`);

    for (const file of files) {
        const filePath = path.join(BLOGS_DIR, file);
        const content = fs.readFileSync(filePath, 'utf-8');
        const parsed = parseYAMLFrontmatter(content);

        if (!parsed) {
            console.warn(`  Skipping ${file} - invalid frontmatter`);
            continue;
        }

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

        blogPosts.push(post);
        console.log(`  Processed: ${post.title}`);
    }

    // Sort by date (newest first)
    blogPosts.sort((a, b) => new Date(b.date) - new Date(a.date));

    // Generate blog-data.js
    const output = `/**
 * Blog Data - David Hamner's Linux Phone & Tech Content
 * AUTO-GENERATED from /blogs/*.md files
 * Run: node scripts/build-blog-data.js
 */

const blogPosts = ${JSON.stringify(blogPosts, null, 4)};

// About / Resume data
const aboutData = {
    name: "David Hamner",
    title: "Linux Enthusiast & Developer",
    tagline: "GNU/Linux Stuff",
    bio: "I explore Linux phones, home automation, 3D printing, and open-source software. I believe in privacy, user freedom, and technology that respects its users.",
    skills: [
        "Linux System Administration",
        "Python Development",
        "Embedded Systems",
        "3D Printing & CAD",
        "Home Automation",
        "Mobile Linux Development"
    ],
    links: {
        youtube: "https://youtube.com/@DavidHamner",
        github: "https://github.com/ruapotato",
        linkedin: "https://www.linkedin.com/in/david-hamner-a1633635/",
        website: "https://hackers-game.com"
    },
    expertise: [
        { area: "Linux Phones", level: 95, description: "Librem 5, PinePhone, FLX1s" },
        { area: "Home Automation", level: 85, description: "Home Assistant, VOSK, Python" },
        { area: "3D Printing", level: 80, description: "OpenSCAD, FDM printing" },
        { area: "Embedded Linux", level: 75, description: "ARM devices, GPIO, robotics" }
    ]
};

// Export
if (typeof module !== 'undefined' && module.exports) {
    module.exports = { blogPosts, aboutData };
}
`;

    fs.writeFileSync(OUTPUT_FILE, output);
    console.log(`\nGenerated ${OUTPUT_FILE} with ${blogPosts.length} posts`);
}

buildBlogData();
