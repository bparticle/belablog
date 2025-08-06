#!/usr/bin/env node

import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Function to fix a single post
function fixPost(filePath) {
  try {
    const content = fs.readFileSync(filePath, 'utf8');
    
    // Extract frontmatter and body
    const frontmatterMatch = content.match(/^---\r?\n([\s\S]*?)\r?\n---/);
    if (!frontmatterMatch) {
      console.log(`⚠️  No frontmatter found in ${path.basename(filePath)}`);
      return;
    }
    
    const frontmatter = frontmatterMatch[1];
    const body = content.replace(/^---\r?\n[\s\S]*?\r?\n---\r?\n/, '');
    
    // Fix frontmatter
    let fixedFrontmatter = frontmatter
      // Remove slug field
      .replace(/slug:\s*.+\n?/g, '')
      // Convert date to string format (handle both formats)
      .replace(/date:\s*new Date\("([^"]+)"\)/g, 'date: "$1"')
      .replace(/date:\s*(\d{4}-\d{2}-\d{2}\s+\d{2}:\d{2}:\d{2}\+\d{4})/g, 'date: "$1"')
      .replace(/date:\s*(\d{4}-\d{2}-\d{2})/g, 'date: "$1"')
      // Remove links field (not in our schema)
      .replace(/links:\s*\n(\s*-\s*.+\n?)+/g, '')
      // Clean up extra newlines
      .replace(/\n\s*\n/g, '\n')
      .trim();
    
    // Fix body content
    let fixedBody = body
      // Convert Hugo video shortcodes
      .replace(/\{\{<\s*video\s+"([^"]+)"\s*>\}\}/g, (match, filename) => {
        const postSlug = path.basename(filePath, '.md');
        return `<video controls>\n  <source src="/posts/${postSlug}/${filename}" type="video/mp4">\n  Your browser does not support the video tag.\n</video>`;
      })
      // Convert image shortcodes
      .replace(/!\[([^\]]*)\]\(([^)]+)\)/g, (match, alt, src) => {
        const postSlug = path.basename(filePath, '.md');
        return `![${alt}](/posts/${postSlug}/${src})`;
      })
      // Remove any remaining Hugo shortcode syntax
      .replace(/\{\{.*?\}\}/g, '');
    
    const fixedContent = `---\r\n${fixedFrontmatter}\r\n---\r\n\r\n${fixedBody}`;
    
    fs.writeFileSync(filePath, fixedContent);
    console.log(`✅ Fixed: ${path.basename(filePath)}`);
  } catch (error) {
    console.error(`❌ Error fixing ${filePath}:`, error.message);
  }
}

// Main function to fix all posts
function fixAllPosts() {
  const postsDir = path.join(__dirname, '../src/content/posts');
  
  console.log('🔧 Fixing all migrated posts...\n');
  
  if (!fs.existsSync(postsDir)) {
    console.error('❌ Posts directory not found:', postsDir);
    return;
  }
  
  const files = fs.readdirSync(postsDir);
  let fixedCount = 0;
  
  files.forEach(file => {
    if (file.endsWith('.md')) {
      const filePath = path.join(postsDir, file);
      fixPost(filePath);
      fixedCount++;
    }
  });
  
  console.log(`\n🎉 Fixed ${fixedCount} posts!`);
}

// Run the fix
fixAllPosts(); 