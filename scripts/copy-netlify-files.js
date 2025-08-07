import fs from 'fs';
import path from 'path';

// Copy SSR function
const sourceDir = '.netlify/v1/functions/ssr';
const targetDir = 'dist/.netlify/functions/ssr';

if (fs.existsSync(sourceDir)) {
  // Create target directory
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
  
  copyDir(sourceDir, targetDir);
  console.log('✅ Copied SSR function to dist/.netlify/functions/ssr/');
}

// Create _redirects file
const redirectsContent = '/*    /.netlify/functions/ssr   200';
fs.writeFileSync('dist/_redirects', redirectsContent);
console.log('✅ Created _redirects file in dist/'); 