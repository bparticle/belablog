import { a as createComponent, d as renderComponent, r as renderTemplate, m as maybeRenderHead, b as addAttribute } from '../chunks/astro/server_BrOuvGzX.mjs';
import 'kleur/colors';
import { g as getCollection, $ as $$Layout, a as $$Header, b as $$Footer } from '../chunks/Footer_aF1g2_q2.mjs';
/* empty css                                 */
export { renderers } from '../renderers.mjs';

const $$Index = createComponent(async ($$result, $$props, $$slots) => {
  const categories = await getCollection("categories");
  const posts = await getCollection("posts");
  const categoryCounts = /* @__PURE__ */ new Map();
  posts.forEach((post) => {
    if (post.data.categories) {
      post.data.categories.forEach((category) => {
        const count = categoryCounts.get(category) || 0;
        categoryCounts.set(category, count + 1);
      });
    }
  });
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "title": "Categories - B\xE9la's Blog", "description": "Browse posts by category", "data-astro-cid-dzaffv5d": true }, { "default": async ($$result2) => renderTemplate` ${renderComponent($$result2, "Header", $$Header, { "data-astro-cid-dzaffv5d": true })} ${maybeRenderHead()}<main class="main-content" data-astro-cid-dzaffv5d> <div class="container" data-astro-cid-dzaffv5d> <section class="categories-page" data-astro-cid-dzaffv5d> <h1 class="page-title" data-astro-cid-dzaffv5d>Categories</h1> <p class="page-description" data-astro-cid-dzaffv5d>Browse posts by category</p> <div class="categories-grid" data-astro-cid-dzaffv5d> ${categories.map((category) => {
    const postCount = categoryCounts.get(category.data.title) || 0;
    return renderTemplate`<a${addAttribute(`/categories/${category.id}`, "href")} class="category-card" data-astro-cid-dzaffv5d> <div class="category-content" data-astro-cid-dzaffv5d> <h3 class="category-title" data-astro-cid-dzaffv5d>${category.data.title}</h3> ${category.data.description && renderTemplate`<p class="category-description" data-astro-cid-dzaffv5d>${category.data.description}</p>`} <div class="category-count" data-astro-cid-dzaffv5d>${postCount} posts</div> </div> </a>`;
  })} </div> </section> </div> </main> ${renderComponent($$result2, "Footer", $$Footer, { "data-astro-cid-dzaffv5d": true })} ` })} `;
}, "C:/Users/bruno/dev/belablog/src/pages/categories/index.astro", void 0);

const $$file = "C:/Users/bruno/dev/belablog/src/pages/categories/index.astro";
const $$url = "/categories";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$Index,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
