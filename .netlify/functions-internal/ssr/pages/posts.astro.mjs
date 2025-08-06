import { a as createComponent, d as renderComponent, r as renderTemplate, m as maybeRenderHead, b as addAttribute } from '../chunks/astro/server_BrOuvGzX.mjs';
import 'kleur/colors';
import { g as getCollection, $ as $$Layout, a as $$Header, b as $$Footer } from '../chunks/Footer_aF1g2_q2.mjs';
/* empty css                                 */
export { renderers } from '../renderers.mjs';

const $$Index = createComponent(async ($$result, $$props, $$slots) => {
  const posts = await getCollection("posts");
  const sortedPosts = posts.sort((a, b) => new Date(b.data.date) - new Date(a.data.date));
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "title": "All Posts - B\xE9la's Blog", "description": "All posts from B\xE9la's blog", "data-astro-cid-fjqfnjxi": true }, { "default": async ($$result2) => renderTemplate` ${renderComponent($$result2, "Header", $$Header, { "data-astro-cid-fjqfnjxi": true })} ${maybeRenderHead()}<main class="main-content" data-astro-cid-fjqfnjxi> <div class="container" data-astro-cid-fjqfnjxi> <header class="page-header" data-astro-cid-fjqfnjxi> <h1 class="page-title" data-astro-cid-fjqfnjxi>All Posts</h1> <p class="page-description" data-astro-cid-fjqfnjxi>All ${sortedPosts.length} posts from Béla's blog</p> </header> <div class="posts-grid" data-astro-cid-fjqfnjxi> ${sortedPosts.map((post) => renderTemplate`<article class="post-card" data-astro-cid-fjqfnjxi> <div class="post-card-content" data-astro-cid-fjqfnjxi> <header class="post-card-header" data-astro-cid-fjqfnjxi> <div class="post-meta" data-astro-cid-fjqfnjxi> <time${addAttribute(post.data.date.toISOString(), "datetime")} data-astro-cid-fjqfnjxi> ${post.data.date.toLocaleDateString("nl-NL", {
    year: "numeric",
    month: "short",
    day: "numeric"
  })} </time> ${post.data.categories && post.data.categories.length > 0 && renderTemplate`<div class="post-categories" data-astro-cid-fjqfnjxi> ${post.data.categories.slice(0, 2).map((category) => renderTemplate`<span class="category-tag" data-astro-cid-fjqfnjxi>${category}</span>`)} </div>`} </div> <h2 class="post-title" data-astro-cid-fjqfnjxi> <a${addAttribute(`/posts/${post.slug}`, "href")} data-astro-cid-fjqfnjxi>${post.data.title}</a> </h2> ${post.data.description && renderTemplate`<p class="post-description" data-astro-cid-fjqfnjxi>${post.data.description}</p>`} </header> ${post.data.image && renderTemplate`<div class="post-image" data-astro-cid-fjqfnjxi> <a${addAttribute(`/posts/${post.slug}`, "href")} data-astro-cid-fjqfnjxi> <img${addAttribute(`/posts/${post.slug}/${post.data.image}`, "src")}${addAttribute(post.data.title, "alt")} data-astro-cid-fjqfnjxi> </a> </div>`} ${post.data.tags && post.data.tags.length > 0 && renderTemplate`<footer class="post-footer" data-astro-cid-fjqfnjxi> <div class="post-tags" data-astro-cid-fjqfnjxi> ${post.data.tags.slice(0, 3).map((tag) => renderTemplate`<span class="tag" data-astro-cid-fjqfnjxi>${tag}</span>`)} ${post.data.tags.length > 3 && renderTemplate`<span class="tag-more" data-astro-cid-fjqfnjxi>+${post.data.tags.length - 3} more</span>`} </div> </footer>`} </div> </article>`)} </div> </div> </main> ${renderComponent($$result2, "Footer", $$Footer, { "data-astro-cid-fjqfnjxi": true })} ` })} `;
}, "C:/Users/bruno/dev/belablog/src/pages/posts/index.astro", void 0);

const $$file = "C:/Users/bruno/dev/belablog/src/pages/posts/index.astro";
const $$url = "/posts";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$Index,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
