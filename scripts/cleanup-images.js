#!/usr/bin/env node

import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Function to clean up a single directory
function cleanupDirectory(dirPath) {
  console.log(`🧹 Cleaning up: ${dirPath}`);
  
  if (!fs.existsSync(dirPath)) {
    console.log(`❌ Directory not found: ${dirPath}`);
    return;
  }

  const files = fs.readdirSync(dirPath);
  let removedCount = 0;

  files.forEach(file => {
    const filePath = path.join(dirPath, file);
    
    // Remove Hugo-generated files with _hu suffix
    if (file.includes('_hu') && (file.endsWith('.jpg') || file.endsWith('.jpeg') || file.endsWith('.png') || file.endsWith('.gif'))) {
      fs.unlinkSync(filePath);
      console.log(`🗑️  Removed: ${file}`);
      removedCount++;
    }
    
    // Remove files with hash suffixes (like .502fb252e7a3f5b0e298cd424abca4d5)
    else if (file.match(/\.([a-f0-9]{32,})/) && (file.endsWith('.jpg') || file.endsWith('.jpeg') || file.endsWith('.png') || file.endsWith('.gif'))) {
      fs.unlinkSync(filePath);
      console.log(`🗑️  Removed: ${file}`);
      removedCount++;
    }
    
    // Remove index.html files (Hugo remnants)
    else if (file === 'index.html') {
      fs.unlinkSync(filePath);
      console.log(`🗑️  Removed: ${file}`);
      removedCount++;
    }
  });

  console.log(`✅ Cleaned up ${removedCount} files from ${dirPath}\n`);
}

// Function to get all post directories
function getPostDirectories() {
  const postsDir = path.join(__dirname, '../static/posts');
  if (!fs.existsSync(postsDir)) {
    console.error('❌ Posts directory not found:', postsDir);
    return [];
  }

  return fs.readdirSync(postsDir, { withFileTypes: true })
    .filter(dirent => dirent.isDirectory())
    .map(dirent => path.join(postsDir, dirent.name));
}

// Main cleanup function
function cleanupAllImages() {
  console.log('🚀 Starting image cleanup...\n');
  
  const directories = getPostDirectories();
  
  if (directories.length === 0) {
    console.log('❌ No post directories found');
    return;
  }

  directories.forEach(dir => {
    cleanupDirectory(dir);
  });

  console.log('🎉 Image cleanup complete!');
  console.log('\nNext steps:');
  console.log('1. Check your site to see if images are loading');
  console.log('2. Run: npm run dev');
  console.log('3. Verify that all images display correctly');
}

// Run cleanup
cleanupAllImages(); 