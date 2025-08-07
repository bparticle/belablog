import fs from 'fs';

// Create _redirects file for Netlify
try {
  const redirectsContent = '/*    /.netlify/functions/ssr   200';
  fs.writeFileSync('dist/_redirects', redirectsContent);
  console.log('✅ Created _redirects file in dist/');
} catch (error) {
  console.error('❌ Error creating _redirects file:', error.message);
  process.exit(1);
} 