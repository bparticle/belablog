import { c as createAstro, a as createComponent, d as renderComponent, r as renderTemplate, m as maybeRenderHead, b as addAttribute } from '../../chunks/astro/server_BrOuvGzX.mjs';
import 'kleur/colors';
import { g as getCollection, $ as $$Layout, a as $$Header, b as $$Footer } from '../../chunks/Footer_aF1g2_q2.mjs';
/* empty css                                         */
export { renderers } from '../../renderers.mjs';

const $$Astro = createAstro("https://belablog.netlify.app");
async function getStaticPaths() {
  const categories = await getCollection("categories");
  return categories.map((category) => ({
    params: { category: category.id },
    props: { category }
  }));
}
const $$category = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$category;
  const { category } = Astro2.props;
  const posts = await getCollection("posts");
  const categoryPosts = posts.filter(
    (post) => post.data.categories && post.data.categories.some(
      (cat) => cat.toLowerCase() === category.data.title.toLowerCase()
    )
  ).sort((a, b) => new Date(b.data.date).getTime() - new Date(a.data.date).getTime());
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "title": `${category.data.title} - B\xE9la's Blog`, "description": category.data.description || `Posts in ${category.data.title} category`, "data-astro-cid-2pzlju63": true }, { "default": async ($$result2) => renderTemplate` ${renderComponent($$result2, "Header", $$Header, { "data-astro-cid-2pzlju63": true })} ${maybeRenderHead()}<main class="main-content" data-astro-cid-2pzlju63> <div class="container" data-astro-cid-2pzlju63> <section class="category-page" data-astro-cid-2pzlju63> <header class="category-header" data-astro-cid-2pzlju63> <h1 class="category-title" data-astro-cid-2pzlju63>${category.data.title}</h1> ${category.data.description && renderTemplate`<p class="category-description" data-astro-cid-2pzlju63>${category.data.description}</p>`} <div class="category-count" data-astro-cid-2pzlju63>${categoryPosts.length} posts</div> </header> <div class="posts-grid" data-astro-cid-2pzlju63> ${categoryPosts.map((post) => renderTemplate`<article class="post-card" data-astro-cid-2pzlju63> ${post.data.image && renderTemplate`<div class="post-image" data-astro-cid-2pzlju63> <img${addAttribute(`/posts/${post.slug}/${post.data.image}`, "src")}${addAttribute(post.data.title, "alt")} data-astro-cid-2pzlju63> </div>`} <div class="post-content" data-astro-cid-2pzlju63> <div class="post-meta" data-astro-cid-2pzlju63> <time${addAttribute(post.data.date.toISOString(), "datetime")} data-astro-cid-2pzlju63> ${post.data.date.toLocaleDateString("nl-NL", {
    year: "numeric",
    month: "long",
    day: "numeric"
  })} </time> ${post.data.tags && post.data.tags.length > 0 && renderTemplate`<div class="post-tags" data-astro-cid-2pzlju63> ${post.data.tags.map((tag) => renderTemplate`<span class="tag" data-astro-cid-2pzlju63>${tag}</span>`)} </div>`} </div> <h3 class="post-title" data-astro-cid-2pzlju63> <a${addAttribute(`/posts/${post.slug}`, "href")} data-astro-cid-2pzlju63>${post.data.title}</a> </h3> ${post.data.description && renderTemplate`<p class="post-description" data-astro-cid-2pzlju63>${post.data.description}</p>`} </div> </article>`)} </div> ${categoryPosts.length === 0 && renderTemplate`<div class="no-posts" data-astro-cid-2pzlju63> <p data-astro-cid-2pzlju63>No posts found in this category yet.</p> </div>`} </section> </div> </main> ${renderComponent($$result2, "Footer", $$Footer, { "data-astro-cid-2pzlju63": true })} ` })} `;
}, "C:/Users/bruno/dev/belablog/src/pages/categories/[category].astro", void 0);

const $$file = "C:/Users/bruno/dev/belablog/src/pages/categories/[category].astro";
const $$url = "/categories/[category]";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$category,
  file: $$file,
  getStaticPaths,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
