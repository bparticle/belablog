import { c as createAstro, a as createComponent, d as renderComponent, r as renderTemplate, m as maybeRenderHead, b as addAttribute } from '../../chunks/astro/server_BrOuvGzX.mjs';
import 'kleur/colors';
import { g as getCollection, $ as $$Layout, a as $$Header, b as $$Footer } from '../../chunks/Footer_aF1g2_q2.mjs';
/* empty css                                     */
export { renderers } from '../../renderers.mjs';

const $$Astro = createAstro("https://belablog.netlify.app");
const $$slug = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$slug;
  const { slug } = Astro2.params;
  const posts = await getCollection("posts");
  const post = posts.find((p) => p.slug === slug);
  if (!post) {
    return Astro2.redirect("/404");
  }
  const { Content } = await post.render();
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "title": post.data.title, "description": post.data.description, "image": post.data.image ? `/posts/${post.slug}/${post.data.image}` : void 0, "type": "article", "date": post.data.date, "categories": post.data.categories, "tags": post.data.tags, "data-astro-cid-gysqo7gh": true }, { "default": async ($$result2) => renderTemplate` ${renderComponent($$result2, "Header", $$Header, { "data-astro-cid-gysqo7gh": true })} ${maybeRenderHead()}<main class="main-content" data-astro-cid-gysqo7gh> <div class="container" data-astro-cid-gysqo7gh> <article class="post" data-astro-cid-gysqo7gh> <header class="post-header" data-astro-cid-gysqo7gh> <div class="post-meta" data-astro-cid-gysqo7gh> <time${addAttribute(post.data.date.toISOString(), "datetime")} data-astro-cid-gysqo7gh> ${post.data.date.toLocaleDateString("nl-NL", {
    year: "numeric",
    month: "long",
    day: "numeric"
  })} </time> ${post.data.categories && post.data.categories.length > 0 && renderTemplate`<div class="post-categories" data-astro-cid-gysqo7gh> ${post.data.categories.map((category) => renderTemplate`<a${addAttribute(`/categories/${category.toLowerCase()}`, "href")} class="category-tag" data-astro-cid-gysqo7gh> ${category} </a>`)} </div>`} </div> <h1 class="post-title" data-astro-cid-gysqo7gh>${post.data.title}</h1> ${post.data.description && renderTemplate`<p class="post-description" data-astro-cid-gysqo7gh>${post.data.description}</p>`} ${post.data.image && renderTemplate`<div class="post-image" data-astro-cid-gysqo7gh> <img${addAttribute(`/posts/${post.slug}/${post.data.image}`, "src")}${addAttribute(post.data.title, "alt")} data-astro-cid-gysqo7gh> </div>`} </header> <div class="post-content" data-astro-cid-gysqo7gh> ${renderComponent($$result2, "Content", Content, { "data-astro-cid-gysqo7gh": true })} </div> ${post.data.tags && post.data.tags.length > 0 && renderTemplate`<footer class="post-footer" data-astro-cid-gysqo7gh> <div class="post-tags" data-astro-cid-gysqo7gh> <span class="tags-label" data-astro-cid-gysqo7gh>Tags:</span> ${post.data.tags.map((tag) => renderTemplate`<span class="tag" data-astro-cid-gysqo7gh>${tag}</span>`)} </div> </footer>`} </article> </div> </main> ${renderComponent($$result2, "Footer", $$Footer, { "data-astro-cid-gysqo7gh": true })} ` })} `;
}, "C:/Users/bruno/dev/belablog/src/pages/posts/[slug].astro", void 0);

const $$file = "C:/Users/bruno/dev/belablog/src/pages/posts/[slug].astro";
const $$url = "/posts/[slug]";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$slug,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
