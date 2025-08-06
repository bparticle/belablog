#!/usr/bin/env node

import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

function createNewPost(title) {
  const slug = title
    .toLowerCase()
    .replace(/[^a-z0-9\s-]/g, '')
    .replace(/\s+/g, '-')
    .replace(/-+/g, '-')
    .trim();
  
  const today = new Date().toISOString().split('T')[0];
  
  const template = `---
title: "${title}"
description: "Description of your post"
date: ${today}
categories: ["Gaming"]
tags: ["fun"]
image: "cover.jpg"  # optional
---

Write your post content here!

You can use:

- **Bold text** with **
- *Italic text* with *
- [Links](https://example.com)
- ![Images](/posts/${slug}/your-image.jpg)

## Headers

You can add headers with # symbols.

### Smaller headers use more # symbols

## Lists

- Bullet points like this
- Another bullet point

1. Numbered lists like this
2. Second item
3. Third item

## Videos

<video controls>
  <source src="/posts/${slug}/your-video.mp4" type="video/mp4">
  Your browser does not support the video tag.
</video>
`;

  const postsDir = path.join(__dirname, '../src/content/posts');
  const publicDir = path.join(__dirname, '../public/posts', slug);
  
  // Ensure directories exist
  if (!fs.existsSync(postsDir)) {
    fs.mkdirSync(postsDir, { recursive: true });
  }
  if (!fs.existsSync(publicDir)) {
    fs.mkdirSync(publicDir, { recursive: true });
  }
  
  const postPath = path.join(postsDir, `${slug}.md`);
  
  if (fs.existsSync(postPath)) {
    console.log(`❌ Post already exists: ${postPath}`);
    return;
  }
  
  fs.writeFileSync(postPath, template);
  
  console.log(`✅ Created new post: ${postPath}`);
  console.log(`📁 Images folder: ${publicDir}`);
  console.log(`🌐 View at: http://localhost:4321/posts/${slug}`);
  console.log('\nNext steps:');
  console.log('1. Edit the post content');
  console.log('2. Add images to the public/posts/' + slug + ' folder');
  console.log('3. Run: npm run dev');
}

// Get title from command line arguments
const title = process.argv[2];

if (!title) {
  console.log('Usage: npm run new-post "Your Post Title"');
  console.log('Example: npm run new-post "My Amazing Gaming Adventure"');
  process.exit(1);
}

createNewPost(title); 