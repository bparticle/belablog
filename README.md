# Béla's Blog - Astro Edition 🚀

A modern, fast blog built with Astro for Béla's creative adventures. This is a complete migration from Hugo to Astro, offering better performance, easier content management, and a more modern development experience.

## ✨ Features

- **Lightning Fast**: Built with Astro for optimal performance
- **Easy Content Management**: Just create markdown files to add new posts
- **Beautiful Design**: Modern, responsive design with smooth animations
- **Category System**: Organize posts by categories
- **Image Support**: Automatic image optimization and lazy loading
- **Video Support**: Native video embedding
- **SEO Optimized**: Built-in SEO features and meta tags
- **Netlify Ready**: One-click deployment to Netlify

## 🚀 Quick Start

### Prerequisites

- Node.js 18+ 
- npm or yarn

### Installation

1. **Install dependencies:**
   ```bash
   npm install
   ```

2. **Start the development server:**
   ```bash
   npm run dev
   ```

3. **Open your browser:**
   Navigate to `http://localhost:4321`

## 📝 Adding New Posts

Adding new posts is super easy! Here's how:

### Method 1: Create a new markdown file

1. Go to `src/content/posts/`
2. Create a new file with `.md` extension (e.g., `my-new-post.md`)
3. Add the frontmatter and content:

```markdown
---
title: "My New Post"
description: "A description of my post"
date: 2024-01-15
categories: ["Gaming", "Art"]
tags: ["fun", "creative"]
image: "cover.jpg"  # optional
---

Your content goes here! You can use:

- **Bold text**
- *Italic text*
- [Links](https://example.com)
- ![Images](/path/to/image.jpg)

## Headers work too

And so do lists:

1. First item
2. Second item
3. Third item
```

### Method 2: Using the command line

```bash
# Create a new post
npm run new-post "My Post Title"
```

## 🎨 Customization

### Colors and Theme

Edit the CSS variables in `src/layouts/Layout.astro`:

```css
:root {
  --accent-color: #3b82f6;        /* Main blue color */
  --accent-color-darker: #2563eb; /* Darker blue for hover */
  --body-text-color: #374151;     /* Text color */
  --body-bg-color: #ffffff;       /* Background color */
}
```

### Adding Categories

1. Create a new JSON file in `src/content/categories/`
2. Example: `src/content/categories/crafts.json`

```json
{
  "title": "Crafts",
  "description": "All about crafting and DIY projects",
  "style": {
    "background": "#10b981",
    "color": "#ffffff"
  }
}
```

### Styling Components

Each component has its own styles in the `<style>` section. You can modify:

- **Header**: `src/components/Header.astro`
- **Footer**: `src/components/Footer.astro`
- **Layout**: `src/layouts/Layout.astro`

## 🚀 Deployment

### Netlify (Recommended)

1. **Connect your repository to Netlify**
2. **Build settings:**
   - Build command: `npm run build`
   - Publish directory: `dist`
3. **Deploy!**

### Manual Deployment

```bash
# Build the site
npm run build

# The built site will be in the `dist` folder
# Upload this folder to your hosting provider
```

## 📁 Project Structure

```
belablog/
├── src/
│   ├── components/          # Reusable components
│   │   ├── Header.astro
│   │   └── Footer.astro
│   ├── content/            # Content collections
│   │   ├── posts/          # Blog posts (markdown)
│   │   └── categories/     # Category definitions (JSON)
│   ├── layouts/            # Page layouts
│   │   └── Layout.astro
│   └── pages/              # Astro pages
│       ├── index.astro     # Homepage
│       ├── archives.astro  # All posts
│       ├── categories/     # Category pages
│       └── posts/          # Individual post pages
├── public/                 # Static assets
│   ├── posts/             # Post images and videos
│   └── favicon.svg
├── astro.config.mjs       # Astro configuration
├── package.json           # Dependencies
└── README.md             # This file
```

## 🛠️ Development

### Available Scripts

```bash
npm run dev          # Start development server
npm run build        # Build for production
npm run preview      # Preview production build
npm run astro        # Run Astro CLI commands
```

### Adding Images and Videos

1. **For post images/videos:**
   - Create a folder in `public/posts/[post-slug]/`
   - Add your images/videos there
   - Reference them in your markdown: `![Alt text](/posts/[post-slug]/image.jpg)`

2. **For site-wide images:**
   - Add them to `public/`
   - Reference them as `/image.jpg`

## 🎯 For Béla (10-year-old instructions)

### How to Add a New Post

1. **Open the project in your code editor**
2. **Go to the `src/content/posts` folder**
3. **Create a new file** with a `.md` extension
4. **Copy this template:**

```markdown
---
title: "Your Post Title"
description: "What your post is about"
date: 2024-01-15
categories: ["Gaming", "Art"]  # Choose from: Gaming, Art, Books, Stories, etc.
tags: ["fun", "creative"]
image: "your-image.jpg"  # optional
---

Write your post here! You can:

- Use **bold** and *italic* text
- Add [links](https://example.com)
- Include ![images](/posts/your-post/your-image.jpg)
- Make lists like this one!

## Add Headers

You can add different sized headers with # symbols.

### Smaller headers use more # symbols

And so on!
```

5. **Save the file**
6. **Add images** to `public/posts/[your-post-name]/` folder
7. **Test it** by running `npm run dev` and visiting `http://localhost:4321`

### Categories You Can Use

- **Gaming** - For video games and gaming content
- **Art** - For drawings, paintings, and creative projects
- **Books** - For book reviews and reading
- **Stories** - For stories and creative writing
- **Crafts** - For DIY projects and crafts
- **Music** - For music-related content
- **STEM** - For science, technology, engineering, math
- **Social** - For social activities and friends

## 🔧 Troubleshooting

### Common Issues

1. **Images not showing:**
   - Make sure images are in the correct folder
   - Check that the path in your markdown is correct

2. **Build errors:**
   - Check that all frontmatter is properly formatted
   - Ensure all referenced categories exist

3. **Styling issues:**
   - Clear your browser cache
   - Check the browser console for errors

### Getting Help

- Check the [Astro documentation](https://docs.astro.build/)
- Look at existing posts for examples
- Ask for help if something doesn't work!

## 🎉 What's New in Astro vs Hugo

### ✅ Improvements

- **Faster Development**: Hot reload and better tooling
- **Easier Content Management**: Just markdown files, no complex folder structure
- **Better Performance**: Optimized builds and smaller bundle sizes
- **Modern Tech**: TypeScript support and better developer experience
- **Simpler Deployment**: One command to build and deploy

### 🔄 Migration Benefits

- **Same Content**: All your existing posts work exactly the same
- **Better Performance**: Pages load faster
- **Easier to Customize**: More intuitive styling and component system
- **Future-Proof**: Built with modern web standards

## 📞 Support

If you need help with anything:

1. Check this README first
2. Look at existing posts for examples
3. Ask for help - the Astro community is very friendly!

---

**Happy blogging! 🎉**