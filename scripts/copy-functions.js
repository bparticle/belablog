import fs from 'fs';
import path from 'path';

const sourceDir = '.netlify/v1/functions/ssr';
const targetDir = 'dist/.netlify/functions/ssr';

// Check if source directory exists
if (!fs.existsSync(sourceDir)) {
  console.log('Source directory does not exist, skipping copy');
  process.exit(0);
}

// Create target directory if it doesn't exist
if (!fs.existsSync('dist/.netlify/functions')) {
  fs.mkdirSync('dist/.netlify/functions', { recursive: true });
}

// Copy function files
function copyDir(src, dest) {
  if (!fs.existsSync(dest)) {
    fs.mkdirSync(dest, { recursive: true });
  }
  
  const entries = fs.readdirSync(src, { withFileTypes: true });
  
  for (const entry of entries) {
    const srcPath = path.join(src, entry.name);
    const destPath = path.join(dest, entry.name);
    
    if (entry.isDirectory()) {
      copyDir(srcPath, destPath);
    } else {
      fs.copyFileSync(srcPath, destPath);
    }
  }
}

try {
  copyDir(sourceDir, targetDir);
  console.log('Successfully copied SSR function to dist/.netlify/functions/ssr/');
} catch (error) {
  console.error('Error copying SSR function:', error);
  process.exit(1);
} 