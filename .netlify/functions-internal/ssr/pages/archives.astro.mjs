import { a as createComponent, d as renderComponent, r as renderTemplate, m as maybeRenderHead, b as addAttribute } from '../chunks/astro/server_BrOuvGzX.mjs';
import 'kleur/colors';
import { g as getCollection, $ as $$Layout, a as $$Header, b as $$Footer } from '../chunks/Footer_aF1g2_q2.mjs';
/* empty css                                    */
export { renderers } from '../renderers.mjs';

const $$Archives = createComponent(async ($$result, $$props, $$slots) => {
  const allPosts = await getCollection("posts");
  const posts = allPosts.filter((post) => !post.data.draft).sort((a, b) => new Date(b.data.date).getTime() - new Date(a.data.date).getTime());
  const postsByYear = /* @__PURE__ */ new Map();
  posts.forEach((post) => {
    const year = post.data.date.getFullYear();
    if (!postsByYear.has(year)) {
      postsByYear.set(year, []);
    }
    postsByYear.get(year).push(post);
  });
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "title": "Archives - B\xE9la's Blog", "description": "All posts in chronological order", "data-astro-cid-rwvr7nxs": true }, { "default": async ($$result2) => renderTemplate` ${renderComponent($$result2, "Header", $$Header, { "data-astro-cid-rwvr7nxs": true })} ${maybeRenderHead()}<main class="main-content" data-astro-cid-rwvr7nxs> <div class="container" data-astro-cid-rwvr7nxs> <section class="archives-page" data-astro-cid-rwvr7nxs> <h1 class="page-title" data-astro-cid-rwvr7nxs>Archives</h1> <p class="page-description" data-astro-cid-rwvr7nxs>All posts in chronological order</p> <div class="archives-content" data-astro-cid-rwvr7nxs> ${Array.from(postsByYear.entries()).sort(([a], [b]) => b - a).map(([year, yearPosts]) => renderTemplate`<div class="year-section" data-astro-cid-rwvr7nxs> <h2 class="year-title" data-astro-cid-rwvr7nxs>${year}</h2> <div class="year-posts" data-astro-cid-rwvr7nxs> ${yearPosts.map((post) => renderTemplate`<article class="archive-post" data-astro-cid-rwvr7nxs> <div class="post-date" data-astro-cid-rwvr7nxs> <time${addAttribute(post.data.date.toISOString(), "datetime")} data-astro-cid-rwvr7nxs> ${post.data.date.toLocaleDateString("nl-NL", {
    month: "short",
    day: "numeric"
  })} </time> </div> <div class="post-info" data-astro-cid-rwvr7nxs> <h3 class="post-title" data-astro-cid-rwvr7nxs> <a${addAttribute(`/posts/${post.slug}`, "href")} data-astro-cid-rwvr7nxs>${post.data.title}</a> </h3> ${post.data.description && renderTemplate`<p class="post-description" data-astro-cid-rwvr7nxs>${post.data.description}</p>`} ${post.data.categories && post.data.categories.length > 0 && renderTemplate`<div class="post-categories" data-astro-cid-rwvr7nxs> ${post.data.categories.map((category) => renderTemplate`<a${addAttribute(`/categories/${category.toLowerCase()}`, "href")} class="category-tag" data-astro-cid-rwvr7nxs> ${category} </a>`)} </div>`} </div> </article>`)} </div> </div>`)} </div> </section> </div> </main> ${renderComponent($$result2, "Footer", $$Footer, { "data-astro-cid-rwvr7nxs": true })} ` })} `;
}, "C:/Users/bruno/dev/belablog/src/pages/archives.astro", void 0);

const $$file = "C:/Users/bruno/dev/belablog/src/pages/archives.astro";
const $$url = "/archives";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$Archives,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
