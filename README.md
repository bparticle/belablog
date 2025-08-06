# Béla's Blog

A personal blog built with Hugo and the Stack theme, showcasing various projects and activities.

## Prerequisites

Before running this site, you need to have the following installed:

- **Hugo Extended** (version 0.100.0 or later recommended)
- **Go** (version 1.19 or later)

### Installing Hugo

#### Windows
```powershell
# Using Chocolatey
choco install hugo-extended

# Using Scoop
scoop install hugo-extended

# Or download from https://gohugo.io/installation/windows/
```

#### macOS
```bash
# Using Homebrew
brew install hugo

# Using MacPorts
sudo port install hugo
```

#### Linux
```bash
# Ubuntu/Debian
sudo apt-get install hugo

# Or download from https://gohugo.io/installation/linux/
```

## Getting Started

1. **Clone the repository**
   ```bash
   git clone <repository-url>
   cd belablog
   ```

2. **Install dependencies**
   ```bash
   # Install the Hugo theme
   git submodule update --init --recursive
   ```

3. **Run the development server**
   ```bash
   hugo server
   ```

4. **Open your browser**
   Navigate to `http://localhost:1313` to view the site.

## Development Commands

### Using Make (recommended)
```bash
# Show all available commands
make help

# Optimize all images (resize to max 1000px width)
make optimize-images

# Start development server
make server

# Start development server with draft posts
make server-draft

# Build for production
make build

# Clean public directory
make clean
```

### Using Hugo directly
```bash
# Start development server
hugo server

# Start development server with draft posts
hugo server -D

# Start development server with increased timeout (for large images)
hugo server --timeout 60s

# Build the site for production
hugo

# Build the site with draft posts
hugo -D

# Clean the public directory
hugo --gc
```

### Windows users (without make)
```cmd
# Optimize images
optimize-images.bat

# Start development server
hugo server --bind 0.0.0.0 --port 1313
```

## Project Structure

```
belablog/
├── content/          # Blog posts and pages
│   ├── post/        # Blog posts
│   ├── page/        # Static pages
│   └── categories/  # Category pages
├── themes/          # Hugo themes
├── static/          # Static assets (CSS, JS, images)
├── hugo.yaml        # Hugo configuration
└── README.md        # This file
```

## Adding New Content

### Create a new blog post
```bash
hugo new post/my-new-post/index.md
```

### Create a new page
```bash
hugo new page/about/index.md
```

## Configuration

The site is configured using `hugo.yaml`. Key settings include:

- **Base URL**: `https://belablog.netlify.app`
- **Theme**: Hugo Stack theme
- **Language**: Dutch (primary) and English
- **Categories**: Art, Learn, Music, STEM, and more
- **Timeout**: 60s (increased for handling large images)

## Troubleshooting

### Build Timeout Issues
If you encounter timeout errors during build, it's usually due to large image files. Solutions:

1. **Increase timeout**: Use `hugo server --timeout 60s`
2. **Optimize images**: Compress large images before adding them to posts
3. **Use draft mode**: Temporarily set `draft: true` in post front matter to exclude problematic posts

## Deployment

This site is configured for deployment on Netlify. The `netlify.toml` file contains the build settings.

### Local build for deployment
```bash
hugo --minify
```

## Theme

This site uses the [Hugo Stack theme](https://github.com/CaiJimmy/hugo-theme-stack) by Jimmy Cai.

## License

This project is licensed under the MIT License - see the LICENSE file for details.