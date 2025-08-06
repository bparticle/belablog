import { a as createComponent, d as renderComponent, r as renderTemplate, m as maybeRenderHead, b as addAttribute } from '../chunks/astro/server_BrOuvGzX.mjs';
import 'kleur/colors';
import { g as getCollection, $ as $$Layout, a as $$Header, b as $$Footer } from '../chunks/Footer_aF1g2_q2.mjs';
/* empty css                                 */
export { renderers } from '../renderers.mjs';

const $$Index = createComponent(async ($$result, $$props, $$slots) => {
  const allPosts = await getCollection("posts");
  const posts = allPosts.filter((post) => !post.data.draft).sort((a, b) => new Date(b.data.date).getTime() - new Date(a.data.date).getTime()).slice(0, 10);
  const categories = await getCollection("categories");
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "title": "B\xE9la's Blog", "description": "Allemaal dingetjes die B\xE9la doet", "data-astro-cid-j7pv25f6": true }, { "default": async ($$result2) => renderTemplate` ${renderComponent($$result2, "Header", $$Header, { "data-astro-cid-j7pv25f6": true })} ${maybeRenderHead()}<main class="main-content" data-astro-cid-j7pv25f6> <div class="container" data-astro-cid-j7pv25f6> <!-- Hero Section --> <section class="hero" data-astro-cid-j7pv25f6> <div class="hero-content" data-astro-cid-j7pv25f6> <h1 class="hero-title" data-astro-cid-j7pv25f6>Welkom op Béla's Blog! 🎉</h1> <p class="hero-description" data-astro-cid-j7pv25f6>
Hier kun je allemaal dingetjes zien die ik leuk vind en heb geleerd.
</p> <div class="hero-interests" data-astro-cid-j7pv25f6> <span class="interest" data-astro-cid-j7pv25f6>Tinkercad ⌨️</span> <span class="interest" data-astro-cid-j7pv25f6>Origami 🙇‍♂️</span> <span class="interest" data-astro-cid-j7pv25f6>Tekenen ✏️</span> <span class="interest" data-astro-cid-j7pv25f6>Knutselen ✂️</span> <span class="interest" data-astro-cid-j7pv25f6>Filmpjes maken 🎥</span> <span class="interest" data-astro-cid-j7pv25f6>Techniek ⚙️</span> <span class="interest" data-astro-cid-j7pv25f6>Electriciteit 💡</span> <span class="interest" data-astro-cid-j7pv25f6>Strips en boeken lezen 📕</span> <span class="interest" data-astro-cid-j7pv25f6>Met hondjes spelen 🐶</span> <span class="interest" data-astro-cid-j7pv25f6>Filmpjes kijken 🎬</span> <span class="interest" data-astro-cid-j7pv25f6>In een kartonnen doos zitten 📦</span> <span class="interest" data-astro-cid-j7pv25f6>Liedjes zingen 🎵</span> <span class="interest" data-astro-cid-j7pv25f6>Leuke geluidjes maken 🎺</span> <span class="interest" data-astro-cid-j7pv25f6>3D printen 🚢</span> <span class="interest" data-astro-cid-j7pv25f6>Gamen 🎮</span> </div> </div> </section> <!-- Latest Posts --> <section class="latest-posts" data-astro-cid-j7pv25f6> <h2 class="section-title" data-astro-cid-j7pv25f6>Laatste Posts</h2> <div class="posts-grid" data-astro-cid-j7pv25f6> ${posts.map((post) => renderTemplate`<article class="post-card" data-astro-cid-j7pv25f6> ${post.data.image && renderTemplate`<div class="post-image" data-astro-cid-j7pv25f6> <img${addAttribute(`/posts/${post.slug}/${post.data.image}`, "src")}${addAttribute(post.data.title, "alt")} data-astro-cid-j7pv25f6> </div>`} <div class="post-content" data-astro-cid-j7pv25f6> <div class="post-meta" data-astro-cid-j7pv25f6> <time${addAttribute(post.data.date.toISOString(), "datetime")} data-astro-cid-j7pv25f6> ${post.data.date.toLocaleDateString("nl-NL", {
    year: "numeric",
    month: "long",
    day: "numeric"
  })} </time> ${post.data.categories && post.data.categories.length > 0 && renderTemplate`<div class="post-categories" data-astro-cid-j7pv25f6> ${post.data.categories.map((category) => renderTemplate`<span class="category-tag" data-astro-cid-j7pv25f6>${category}</span>`)} </div>`} </div> <h3 class="post-title" data-astro-cid-j7pv25f6> <a${addAttribute(`/posts/${post.slug}`, "href")} data-astro-cid-j7pv25f6>${post.data.title}</a> </h3> ${post.data.description && renderTemplate`<p class="post-description" data-astro-cid-j7pv25f6>${post.data.description}</p>`} </div> </article>`)} </div> ${posts.length >= 10 && renderTemplate`<div class="view-all" data-astro-cid-j7pv25f6> <a href="/posts" class="view-all-link" data-astro-cid-j7pv25f6>Bekijk alle posts →</a> </div>`} </section> <!-- Categories --> <section class="categories" data-astro-cid-j7pv25f6> <h2 class="section-title" data-astro-cid-j7pv25f6>Categories</h2> <div class="categories-grid" data-astro-cid-j7pv25f6> ${categories.map((category) => renderTemplate`<a${addAttribute(`/categories/${category.id}`, "href")} class="category-card" data-astro-cid-j7pv25f6> <div class="category-content" data-astro-cid-j7pv25f6> <h3 class="category-title" data-astro-cid-j7pv25f6>${category.data.title}</h3> ${category.data.description && renderTemplate`<p class="category-description" data-astro-cid-j7pv25f6>${category.data.description}</p>`} </div> </a>`)} </div> </section> </div> </main> ${renderComponent($$result2, "Footer", $$Footer, { "data-astro-cid-j7pv25f6": true })} ` })} `;
}, "C:/Users/bruno/dev/belablog/src/pages/index.astro", void 0);

const $$file = "C:/Users/bruno/dev/belablog/src/pages/index.astro";
const $$url = "";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$Index,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
