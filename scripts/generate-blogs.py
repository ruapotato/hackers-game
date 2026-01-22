#!/usr/bin/env python3
"""
Generate individual blog markdown files from YouTube video metadata.
"""

import subprocess
import json
import os
import re
from datetime import datetime

# Videos that already have blogs
EXISTING_BLOGS = {
    'lITN4HJ3M5Q',  # Linux Phone That Actually Works - FLX1s Review
    '0tuLkga0dmY',  # Is the Librem 5 Ready for Launch?
    'GTDzV4rxPwc',  # Librem 5 | Stuff and Whatnot
    'j_PzGz8dePY',  # Robot and Librem 5 Hacking
    'a1ENmWmwE8k',  # Librem 5 | Gaming
}

# All video URLs from user's list
VIDEO_URLS = """
https://www.youtube.com/watch?v=0DKDol1B1bo
https://www.youtube.com/watch?v=0Q6BbMiVtjg
https://www.youtube.com/watch?v=0tuLkga0dmY
https://www.youtube.com/watch?v=-154CWGhuAI
https://www.youtube.com/watch?v=1t4L_QNZ74A
https://www.youtube.com/watch?v=2G_drprsrTM
https://www.youtube.com/watch?v=2XYBmAVvas0
https://www.youtube.com/watch?v=33xCYejSGFA
https://www.youtube.com/watch?v=4iI0tvIB8Mg
https://www.youtube.com/watch?v=5GBsdsGheOU
https://www.youtube.com/watch?v=_86tEHCyMsY
https://www.youtube.com/watch?v=9aeU3JoJnuE
https://www.youtube.com/watch?v=9J-bkP9lSH0
https://www.youtube.com/watch?v=9l6UbcxFONE
https://www.youtube.com/watch?v=9_z0XuElERM
https://www.youtube.com/watch?v=a1ENmWmwE8k
https://www.youtube.com/watch?v=AnbqjNvpupI
https://www.youtube.com/watch?v=b8-G9JjgknA
https://www.youtube.com/watch?v=d3CMhZhFPAg
https://www.youtube.com/watch?v=deMB2GzBVHc
https://www.youtube.com/watch?v=DI4VYUv4vFQ
https://www.youtube.com/watch?v=DjSNPqgZpdo
https://www.youtube.com/watch?v=dTr6plNybok
https://www.youtube.com/watch?v=dZ8uVVQYif0
https://www.youtube.com/watch?v=eOVJ7eOHY2c
https://www.youtube.com/watch?v=ev2qv-Oxtdo
https://www.youtube.com/watch?v=FCyjY5R05N8
https://www.youtube.com/watch?v=GBoXQNYujlM
https://www.youtube.com/watch?v=gdS_Kpwrrgw
https://www.youtube.com/watch?v=-gL4wrAQEic
https://www.youtube.com/watch?v=GLl4-82vZ7A
https://www.youtube.com/watch?v=gqQjQ7WRWRU
https://www.youtube.com/watch?v=GTDzV4rxPwc
https://www.youtube.com/watch?v=H55tQc5wYEs
https://www.youtube.com/watch?v=H5LeNkgdRg4
https://www.youtube.com/watch?v=hhkmyqRYBD4
https://www.youtube.com/watch?v=Hkl8N_zXM_A
https://www.youtube.com/watch?v=HnDN18Gc3Ig
https://www.youtube.com/watch?v=Ho5bahp95gs
https://www.youtube.com/watch?v=hSGsBdji6QI
https://www.youtube.com/watch?v=IdbwYYpQcAM
https://www.youtube.com/watch?v=IG5HSx5A-h4
https://www.youtube.com/watch?v=ioraJIPnQ-E
https://www.youtube.com/watch?v=iuqCutdfX2s
https://www.youtube.com/watch?v=JI-_Cj_mg60
https://www.youtube.com/watch?v=JMCWlRyVzgQ
https://www.youtube.com/watch?v=JnwO_SgjPeU
https://www.youtube.com/watch?v=j_PzGz8dePY
https://www.youtube.com/watch?v=K4OfNFis--g
https://www.youtube.com/watch?v=KQpoy6wWVEo
https://www.youtube.com/watch?v=K_RpvXSuY2Q
https://www.youtube.com/watch?v=kx6tMCeUmaY
https://www.youtube.com/watch?v=l82fVM85be8
https://www.youtube.com/watch?v=LAfboPzQL7Y
https://www.youtube.com/watch?v=lhHr6khxtUE
https://www.youtube.com/watch?v=lITN4HJ3M5Q
https://www.youtube.com/watch?v=LmlnwzqscfM
https://www.youtube.com/watch?v=lN2h7VN8mfU
https://www.youtube.com/watch?v=mB1rcnuHPYk
https://www.youtube.com/watch?v=mElnFVlmha0
https://www.youtube.com/watch?v=Mqmz0cJkYRQ
https://www.youtube.com/watch?v=n_OJwa9CWRc
https://www.youtube.com/watch?v=nRWvbmD7gJY
https://www.youtube.com/watch?v=OatW6iNy6ts
https://www.youtube.com/watch?v=oGhSBksuCZs
https://www.youtube.com/watch?v=Ok_plRtZyac
https://www.youtube.com/watch?v=ONLpCiTlTQg
https://www.youtube.com/watch?v=pAywiV7r4gE
https://www.youtube.com/watch?v=p_OE8EaIKl8
https://www.youtube.com/watch?v=q_rU1WbJq-M
https://www.youtube.com/watch?v=qV3VH56Dw48
https://www.youtube.com/watch?v=R5bfClvmmqc
https://www.youtube.com/watch?v=RrTl2TYSg_4
https://www.youtube.com/watch?v=RSN2oRC8HiM
https://www.youtube.com/watch?v=rv5YBCzd4Wo
https://www.youtube.com/watch?v=sBTqAG9jX2w
https://www.youtube.com/watch?v=SFS0YTQl4vY
https://www.youtube.com/watch?v=U1bTlEtxjhE
https://www.youtube.com/watch?v=UIfmuhzQVEE
https://www.youtube.com/watch?v=uJ5UOJJVkgA
https://www.youtube.com/watch?v=UTgi0gDlNlA
https://www.youtube.com/watch?v=VD94Al_Q0Hs
https://www.youtube.com/watch?v=VRh6cQM8Kio
https://www.youtube.com/watch?v=VVm37hZz6WU
https://www.youtube.com/watch?v=WHqJPqUzC2Q
https://www.youtube.com/watch?v=WnM4VslzfGg
https://www.youtube.com/watch?v=xHc5NSS1PRE
https://www.youtube.com/watch?v=xhCbN3OOFxA
https://www.youtube.com/watch?v=XtkoWirGMSk
https://www.youtube.com/watch?v=xv3kgsm4wk0
https://www.youtube.com/watch?v=Ye3Vvxr9LJ4
https://www.youtube.com/watch?v=YKAsUK3a8M0
https://www.youtube.com/watch?v=z9j6QM2onhg
https://www.youtube.com/watch?v=zcK8IeLO748
https://www.youtube.com/watch?v=zEXWN1BCieA
https://www.youtube.com/watch?v=zf781j4s3lA
https://www.youtube.com/watch?v=Zr3f5xfmo9s
https://www.youtube.com/watch?v=zxcj9fG2M2Q
https://www.youtube.com/watch?v=f5Bscjm3EJI
""".strip().split('\n')

def extract_video_id(url):
    """Extract video ID from YouTube URL."""
    match = re.search(r'[?&]v=([^&]+)', url)
    return match.group(1) if match else None

def slugify(title):
    """Convert title to URL-friendly slug."""
    slug = title.lower()
    slug = re.sub(r'[^a-z0-9\s-]', '', slug)
    slug = re.sub(r'[\s_]+', '-', slug)
    slug = re.sub(r'-+', '-', slug)
    slug = slug.strip('-')
    return slug[:60]  # Limit length

def categorize_video(title, description):
    """Determine category based on title/description."""
    title_lower = title.lower()
    desc_lower = description.lower() if description else ''

    if any(x in title_lower for x in ['librem', 'pinephone', 'linux phone', 'flx1', 'mobile linux']):
        return 'Linux Phones'
    elif any(x in title_lower for x in ['home assistant', 'automation', 'vosk', 'smart home']):
        return 'Home Automation'
    elif any(x in title_lower for x in ['3d print', 'printing', 'hardware', 'diy']):
        return 'Hardware'
    elif any(x in title_lower for x in ['robot', 'gpio', 'raspberry', 'embedded']):
        return 'Robotics'
    elif any(x in title_lower for x in ['game', 'gaming', 'pygame']):
        return 'Gaming'
    elif any(x in title_lower for x in ['desktop', 'window manager', 'wm', 'kde', 'gnome']):
        return 'Desktop Linux'
    else:
        return 'Linux'

def generate_tags(title, description, category):
    """Generate relevant tags based on content."""
    tags = set()
    title_lower = title.lower()
    desc_lower = description.lower() if description else ''
    combined = title_lower + ' ' + desc_lower

    # Category-based tags
    if category == 'Linux Phones':
        tags.add('linux-phone')
    if category == 'Home Automation':
        tags.add('home-automation')

    # Keyword-based tags
    keywords = {
        'librem': 'librem-5',
        'pinephone': 'pinephone',
        'purism': 'purism',
        'flx1': 'flx1s',
        'python': 'python',
        'pygame': 'pygame',
        'desktop': 'desktop-environment',
        'boot': 'boot-process',
        'kernel': 'kernel',
        'terminal': 'terminal',
        'bash': 'bash',
        'debian': 'debian',
        'ubuntu': 'ubuntu',
        'arch': 'arch-linux',
        'robot': 'robotics',
        '3d print': '3d-printing',
        'wayland': 'wayland',
        'x11': 'x11',
        'kill switch': 'privacy',
        'privacy': 'privacy',
        'open source': 'open-source',
        'review': 'review',
        'tutorial': 'tutorial',
    }

    for keyword, tag in keywords.items():
        if keyword in combined:
            tags.add(tag)

    # Ensure at least some tags
    if len(tags) < 2:
        tags.add('linux')
        tags.add('open-source')

    return list(tags)[:6]  # Max 6 tags

def fetch_video_metadata(video_id):
    """Fetch video metadata using yt-dlp."""
    url = f"https://www.youtube.com/watch?v={video_id}"
    try:
        result = subprocess.run(
            ['yt-dlp', '--dump-json', '--no-download', url],
            capture_output=True,
            text=True,
            timeout=30
        )
        if result.returncode == 0:
            return json.loads(result.stdout)
    except Exception as e:
        print(f"Error fetching {video_id}: {e}")
    return None

def format_date(upload_date):
    """Convert YYYYMMDD to YYYY-MM-DD."""
    if upload_date and len(upload_date) == 8:
        return f"{upload_date[:4]}-{upload_date[4:6]}-{upload_date[6:8]}"
    return datetime.now().strftime('%Y-%m-%d')

def create_blog_content(metadata):
    """Create blog content from video description."""
    description = metadata.get('description', '')
    title = metadata.get('title', '')

    # Clean up description - remove links and social media stuff
    lines = description.split('\n')
    content_lines = []
    for line in lines:
        # Skip lines that are just links
        if line.strip().startswith('http'):
            continue
        # Skip social media plugs
        if any(x in line.lower() for x in ['patreon', 'twitter', 'instagram', 'subscribe', 'like and']):
            continue
        # Skip licensing info
        if 'creative commons' in line.lower() or 'licensed under' in line.lower():
            continue
        if line.strip():
            content_lines.append(line)

    # Build content
    content = f"# {title}\n\n"
    if content_lines:
        content += '\n\n'.join(content_lines[:10])  # First 10 meaningful lines
    else:
        content += f"Watch this video to learn about {title.lower()}.\n"

    content += f"\n\n📺 [Watch on YouTube](https://youtube.com/watch?v={metadata.get('id', '')})"

    return content

def create_blog_file(video_id, output_dir):
    """Create a blog markdown file for a video."""
    print(f"Processing {video_id}...")

    metadata = fetch_video_metadata(video_id)
    if not metadata:
        print(f"  Failed to fetch metadata for {video_id}")
        return None

    title = metadata.get('title', 'Untitled')
    description = metadata.get('description', '')
    upload_date = format_date(metadata.get('upload_date'))
    category = categorize_video(title, description)
    tags = generate_tags(title, description, category)
    slug = slugify(title)
    excerpt = description.split('\n')[0][:200] if description else title
    content = create_blog_content(metadata)

    # Create markdown with frontmatter
    md_content = f"""---
id: {slug}
title: "{title.replace('"', '\\"')}"
date: {upload_date}
category: {category}
tags: {json.dumps(tags)}
videoId: {video_id}
excerpt: "{excerpt.replace('"', '\\"')}"
---

{content}
"""

    # Write file
    filename = f"{slug}.md"
    filepath = os.path.join(output_dir, filename)
    with open(filepath, 'w') as f:
        f.write(md_content)

    print(f"  Created {filename}")
    return filepath

def main():
    output_dir = '/home/david/hackers-game/blogs'
    os.makedirs(output_dir, exist_ok=True)

    created = []
    skipped = []

    for url in VIDEO_URLS:
        url = url.strip()
        if not url:
            continue

        video_id = extract_video_id(url)
        if not video_id:
            print(f"Could not extract video ID from {url}")
            continue

        if video_id in EXISTING_BLOGS:
            print(f"Skipping {video_id} - already has blog")
            skipped.append(video_id)
            continue

        result = create_blog_file(video_id, output_dir)
        if result:
            created.append(result)

    print(f"\n=== Summary ===")
    print(f"Created: {len(created)} blog files")
    print(f"Skipped: {len(skipped)} (already have blogs)")

if __name__ == '__main__':
    main()
