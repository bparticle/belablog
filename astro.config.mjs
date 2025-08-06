import { defineConfig } from 'astro/config';
import mdx from '@astrojs/mdx';
import sitemap from '@astrojs/sitemap';
import rss from '@astrojs/rss';
import netlify from '@astrojs/netlify/functions';

export default defineConfig({
  site: 'https://belablog.netlify.app',
  integrations: [
    mdx({
      syntaxHighlight: 'prism',
      remarkPlugins: [],
      rehypePlugins: [],
    }),
    sitemap(),
  ],
  output: 'server',
  adapter: netlify(),
  markdown: {
    shikiConfig: {
      theme: 'github-dark',
      wrap: true
    }
  },
  vite: {
    ssr: {
      external: ['svgo'],
    },
    server: {
      watch: {
        usePolling: true,
        interval: 1000,
      },
    },
  },
  dev: {
    port: 4321,
    host: true,
  },
}); 