#!/usr/bin/env node

import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Function to convert Hugo frontmatter to Astro format
function convertFrontmatter(content) {
  // Extract frontmatter
  const frontmatterMatch = content.match(/^---\n([\s\S]*?)\n---/);
  if (!frontmatterMatch) return content;

  const frontmatter = frontmatterMatch[1];
  const body = content.replace(/^---\n[\s\S]*?\n---\n/, '');

  // Convert Hugo frontmatter to Astro format
  let converted = frontmatter
    // Remove slug field (Astro generates it automatically)
    .replace(/slug:\s*.+\n?/g, '')
    // Convert date format to ISO string
    .replace(/date:\s*(\d{4}-\d{2}-\d{2}\s+\d{2}:\d{2}:\d{2}\+\d{4})/g, 'date: "$1"')
    .replace(/date:\s*(\d{4}-\d{2}-\d{2})/g, 'date: "$1"')
    // Convert categories array
    .replace(/categories:\s*\n\s*-\s*(.+)/g, 'categories: ["$1"]')
    .replace(/categories:\s*\n(\s*-\s*.+\n?)+/g, (match) => {
      const categories = match.match(/-\s*(.+)/g).map(cat => cat.replace('- ', '').trim());
      return `categories: [${categories.map(cat => `"${cat}"`).join(', ')}]`;
    })
    // Convert tags array
    .replace(/tags:\s*\n(\s*-\s*.+\n?)+/g, (match) => {
      const tags = match.match(/-\s*(.+)/g).map(tag => tag.replace('- ', '').trim());
      return `tags: [${tags.map(tag => `"${tag}"`).join(', ')}]`;
    })
    // Convert image path
    .replace(/image:\s*(.+)/g, 'image: "$1"')
    // Convert title and description
    .replace(/title:\s*(.+)/g, 'title: "$1"')
    .replace(/description:\s*(.+)/g, 'description: "$1"');

  // Convert Hugo shortcodes to HTML
  let convertedBody = body
    // Convert video shortcodes
    .replace(/\{\{<\s*video\s+"([^"]+)"\s*>\}\}/g, '<video controls>\n  <source src="/posts/[POST_SLUG]/$1" type="video/mp4">\n  Your browser does not support the video tag.\n</video>')
    // Convert image shortcodes
    .replace(/!\[([^\]]*)\]\(([^)]+)\)/g, '![$1](/posts/[POST_SLUG]/$2)')
    // Remove any remaining Hugo shortcode syntax
    .replace(/\{\{.*?\}\}/g, '');

  return `---\n${converted}\n---\n\n${convertedBody}`;
}

// Function to migrate a single post
function migratePost(hugoPath, astroPath, postSlug) {
  try {
    const content = fs.readFileSync(hugoPath, 'utf8');
    const converted = convertFrontmatter(content)
      .replace(/\[POST_SLUG\]/g, postSlug);
    
    // Ensure directory exists
    const dir = path.dirname(astroPath);
    if (!fs.existsSync(dir)) {
      fs.mkdirSync(dir, { recursive: true });
    }
    
    fs.writeFileSync(astroPath, converted);
    console.log(`✅ Migrated: ${hugoPath} -> ${astroPath}`);
  } catch (error) {
    console.error(`❌ Error migrating ${hugoPath}:`, error.message);
  }
}

// Function to copy images
function copyImages(hugoPostDir, astroPostDir) {
  try {
    if (!fs.existsSync(hugoPostDir)) return;
    
    // Ensure astro directory exists
    if (!fs.existsSync(astroPostDir)) {
      fs.mkdirSync(astroPostDir, { recursive: true });
    }
    
    const files = fs.readdirSync(hugoPostDir);
    files.forEach(file => {
      if (file.endsWith('.jpg') || file.endsWith('.jpeg') || file.endsWith('.png') || 
          file.endsWith('.gif') || file.endsWith('.mp4') || file.endsWith('.MP4')) {
        const source = path.join(hugoPostDir, file);
        const dest = path.join(astroPostDir, file);
        fs.copyFileSync(source, dest);
        console.log(`📁 Copied: ${file}`);
      }
    });
  } catch (error) {
    console.error(`❌ Error copying images for ${hugoPostDir}:`, error.message);
  }
}

// Main migration function
function migrateAllPosts() {
  const astroPostsDir = path.join(__dirname, '../src/content/posts');
  const astroPublicDir = path.join(__dirname, '../public/posts');
  
  console.log('🚀 Starting migration from Hugo to Astro...\n');
  
  console.log('✅ Migration already completed! Hugo content directory has been removed.');
  console.log('Your Astro content is located at:', astroPostsDir);
  console.log('Your public assets are located at:', astroPublicDir);
  
  console.log('\n🎉 Migration complete!');
  console.log('\nNext steps:');
  console.log('1. Run: npm install');
  console.log('2. Run: npm run dev');
  console.log('3. Check the site at http://localhost:4321');
  console.log('4. Review and fix any remaining issues');
}

// Run migration
migrateAllPosts(); 