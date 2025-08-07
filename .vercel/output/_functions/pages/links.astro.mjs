/* empty css                                    */
import { d as createAstro, c as createComponent, b as addAttribute, e as renderHead, f as renderSlot, g as renderScript, r as renderComponent, F as Fragment, a as renderTemplate, m as maybeRenderHead } from '../chunks/astro/server_CQuGYlAK.mjs';
import 'kleur/colors';
import 'clsx';
import { g as getCollection } from '../chunks/_astro_content_a1jevxmS.mjs';
/* empty css                                 */
export { renderers } from '../renderers.mjs';

const $$Astro = createAstro("https://belablog.netlify.app");
const $$Layout = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$Layout;
  const {
    title,
    description,
    image,
    type = "website",
    date,
    categories,
    tags
  } = Astro2.props;
  const canonicalURL = new URL(Astro2.url.pathname, Astro2.site);
  const metaImage = image ? new URL(image, Astro2.site) : void 0;
  return renderTemplate`<html lang="nl" class="scroll-smooth"> <head><meta charset="UTF-8"><meta name="description"${addAttribute(description, "content")}><meta name="viewport" content="width=device-width, initial-scale=1.0"><link rel="icon" type="image/svg+xml" href="/favicon.svg"><meta name="generator"${addAttribute(Astro2.generator, "content")}><!-- Canonical URL --><link rel="canonical"${addAttribute(canonicalURL, "href")}><!-- Open Graph / Facebook --><meta property="og:type"${addAttribute(type, "content")}><meta property="og:url"${addAttribute(canonicalURL, "content")}><meta property="og:title"${addAttribute(title, "content")}><meta property="og:description"${addAttribute(description, "content")}><meta property="og:image"${addAttribute(metaImage, "content")}><!-- Twitter --><meta property="twitter:card" content="summary_large_image"><meta property="twitter:url"${addAttribute(canonicalURL, "content")}><meta property="twitter:title"${addAttribute(title, "content")}><meta property="twitter:description"${addAttribute(description, "content")}><meta property="twitter:image"${addAttribute(metaImage, "content")}><!-- Article specific meta tags -->${type === "article" && date && renderTemplate`${renderComponent($$result, "Fragment", Fragment, {}, { "default": ($$result2) => renderTemplate`<meta property="article:published_time"${addAttribute(date.toISOString(), "content")}>${categories && categories.map((category) => renderTemplate`<meta property="article:section"${addAttribute(category, "content")}>`)}${tags && tags.map((tag) => renderTemplate`<meta property="article:tag"${addAttribute(tag, "content")}>`)}` })}`}<title>${title}</title><!-- Google Fonts --><link rel="preconnect" href="https://fonts.googleapis.com"><link rel="preconnect" href="https://fonts.gstatic.com" crossorigin><link href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700&display=swap" rel="stylesheet">${renderHead()}</head> <body class="bg-white dark:bg-slate-900 text-slate-900 dark:text-slate-100"> ${renderSlot($$result, $$slots["default"])} <!-- Global search shortcut --> ${renderScript($$result, "C:/Users/bruno/dev/belablog/src/layouts/Layout.astro?astro&type=script&index=0&lang.ts")} </body> </html>`;
}, "C:/Users/bruno/dev/belablog/src/layouts/Layout.astro", void 0);

const $$LeftSidebar = createComponent(async ($$result, $$props, $$slots) => {
  await getCollection("categories");
  return renderTemplate`${maybeRenderHead()}<aside class="sidebar" data-astro-cid-ryjzjgvk> <div class="profile-section" data-astro-cid-ryjzjgvk> <div class="profile-image" data-astro-cid-ryjzjgvk> <img src="/avatar.jpg" alt="Béla" data-astro-cid-ryjzjgvk> <div class="profile-overlay" data-astro-cid-ryjzjgvk> <span class="emoji" data-astro-cid-ryjzjgvk>📱</span> </div> </div> <div class="blog-info" data-astro-cid-ryjzjgvk> <h1 class="blog-title" data-astro-cid-ryjzjgvk> <a href="/" class="blog-title-link" data-astro-cid-ryjzjgvk>Béla's Blog</a> </h1> <p class="blog-description" data-astro-cid-ryjzjgvk>Allemaal dingetjes die Béla doet</p> </div> </div> <nav class="navigation" data-astro-cid-ryjzjgvk> <ul class="nav-list" data-astro-cid-ryjzjgvk> <li class="nav-item" data-astro-cid-ryjzjgvk> <a href="/" class="nav-link" data-astro-cid-ryjzjgvk> <svg class="nav-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" data-astro-cid-ryjzjgvk> <path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z" data-astro-cid-ryjzjgvk></path> <polyline points="9,22 9,12 15,12 15,22" data-astro-cid-ryjzjgvk></polyline> </svg>
Home
</a> </li> <li class="nav-item" data-astro-cid-ryjzjgvk> <a href="/archives" class="nav-link" data-astro-cid-ryjzjgvk> <svg class="nav-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" data-astro-cid-ryjzjgvk> <path d="M21 8v13H3V8" data-astro-cid-ryjzjgvk></path> <path d="M1 3h22v5H1z" data-astro-cid-ryjzjgvk></path> <path d="M10 12h4" data-astro-cid-ryjzjgvk></path> </svg>
Archives
</a> </li> <li class="nav-item" data-astro-cid-ryjzjgvk> <a href="/search" class="nav-link" data-astro-cid-ryjzjgvk> <svg class="nav-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" data-astro-cid-ryjzjgvk> <circle cx="11" cy="11" r="8" data-astro-cid-ryjzjgvk></circle> <path d="m21 21-4.35-4.35" data-astro-cid-ryjzjgvk></path> </svg>
Search
</a> </li> <li class="nav-item" data-astro-cid-ryjzjgvk> <a href="/links" class="nav-link" data-astro-cid-ryjzjgvk> <svg class="nav-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" data-astro-cid-ryjzjgvk> <path d="M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71" data-astro-cid-ryjzjgvk></path> <path d="M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71" data-astro-cid-ryjzjgvk></path> </svg>
Links
</a> </li> </ul> </nav> <div class="sidebar-footer" data-astro-cid-ryjzjgvk> <div class="language-selector" data-astro-cid-ryjzjgvk> <span class="language-label" data-astro-cid-ryjzjgvk>English</span> <svg class="dropdown-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" data-astro-cid-ryjzjgvk> <polyline points="6,9 12,15 18,9" data-astro-cid-ryjzjgvk></polyline> </svg> <span class="language-icon" data-astro-cid-ryjzjgvk>A</span> </div> <button class="theme-toggle" id="theme-toggle" aria-label="Toggle dark mode" data-astro-cid-ryjzjgvk> <svg class="theme-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" data-astro-cid-ryjzjgvk> <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z" data-astro-cid-ryjzjgvk></path> </svg> </button> </div> </aside> ${renderScript($$result, "C:/Users/bruno/dev/belablog/src/components/LeftSidebar.astro?astro&type=script&index=0&lang.ts")} `;
}, "C:/Users/bruno/dev/belablog/src/components/LeftSidebar.astro", void 0);

const $$RightSidebar = createComponent(async ($$result, $$props, $$slots) => {
  const posts = await getCollection("posts");
  const categories = await getCollection("categories");
  const postsByYear = posts.reduce((acc, post) => {
    const year = post.data.date.getFullYear();
    if (!acc[year]) acc[year] = [];
    acc[year].push(post);
    return acc;
  }, {});
  const allTags = /* @__PURE__ */ new Set();
  posts.forEach((post) => {
    if (post.data.tags) {
      post.data.tags.forEach((tag) => allTags.add(tag));
    }
  });
  const sortedTags = Array.from(allTags).sort();
  return renderTemplate`${maybeRenderHead()}<aside class="right-sidebar" data-astro-cid-zujyv34g> <!-- Archives Section --> <div class="widget-section" data-astro-cid-zujyv34g> <h3 class="widget-title" data-astro-cid-zujyv34g> <svg class="widget-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" data-astro-cid-zujyv34g> <path d="M21 8v13H3V8" data-astro-cid-zujyv34g></path> <path d="M1 3h22v5H1z" data-astro-cid-zujyv34g></path> <path d="M10 12h4" data-astro-cid-zujyv34g></path> </svg>
ARCHIVES
</h3> <ul class="archives-list" data-astro-cid-zujyv34g> ${Object.entries(postsByYear).sort(([a], [b]) => parseInt(b) - parseInt(a)).map(([year, yearPosts]) => renderTemplate`<li class="archive-item" data-astro-cid-zujyv34g> <a${addAttribute(`/archives#${year}`, "href")} class="archive-link" data-astro-cid-zujyv34g> ${year} <span class="archive-count" data-astro-cid-zujyv34g>(${yearPosts.length})</span> </a> </li>`)} </ul> </div> <!-- Categories Section --> <div class="widget-section" data-astro-cid-zujyv34g> <h3 class="widget-title" data-astro-cid-zujyv34g> <svg class="widget-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" data-astro-cid-zujyv34g> <path d="M4 19.5A2.5 2.5 0 0 1 6.5 17H20" data-astro-cid-zujyv34g></path> <path d="M6.5 2H20v20H6.5A2.5 2.5 0 0 1 4 19.5v-15A2.5 2.5 0 0 1 6.5 2z" data-astro-cid-zujyv34g></path> </svg>
CATEGORIES
</h3> <div class="categories-grid" data-astro-cid-zujyv34g> ${categories.map((category) => renderTemplate`<a${addAttribute(`/categories/${category.id}`, "href")} class="category-button" data-astro-cid-zujyv34g> ${category.data.title} </a>`)} </div> </div> <!-- Tags Section --> <div class="widget-section" data-astro-cid-zujyv34g> <h3 class="widget-title" data-astro-cid-zujyv34g> <svg class="widget-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" data-astro-cid-zujyv34g> <path d="M20.59 13.41l-7.17 7.17a2 2 0 0 1-2.83 0L2 12V2h10l8.59 8.59a2 2 0 0 1 0 2.82z" data-astro-cid-zujyv34g></path> <line x1="7" y1="7" x2="7.01" y2="7" data-astro-cid-zujyv34g></line> </svg>
TAGS
</h3> <div class="tags-grid" data-astro-cid-zujyv34g> ${sortedTags.slice(0, 10).map((tag) => renderTemplate`<a${addAttribute(`/tags/${encodeURIComponent(tag.toLowerCase())}`, "href")} class="tag-button" data-astro-cid-zujyv34g>${tag}</a>`)} </div> ${sortedTags.length > 10 && renderTemplate`<div class="view-all-tags" data-astro-cid-zujyv34g> <a href="/tags" class="view-all-link" data-astro-cid-zujyv34g>View all tags →</a> </div>`} </div> </aside> `;
}, "C:/Users/bruno/dev/belablog/src/components/RightSidebar.astro", void 0);

const $$Links = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "title": "Links - B\xE9la's Blog", "description": "Useful links and resources", "data-astro-cid-au7rboj5": true }, { "default": ($$result2) => renderTemplate` ${maybeRenderHead()}<div class="main-layout" data-astro-cid-au7rboj5> ${renderComponent($$result2, "LeftSidebar", $$LeftSidebar, { "data-astro-cid-au7rboj5": true })} <main class="main-content" data-astro-cid-au7rboj5> <section class="links-page" data-astro-cid-au7rboj5> <h1 class="page-title" data-astro-cid-au7rboj5>Links</h1> <p class="page-description" data-astro-cid-au7rboj5>Useful links and resources</p> <div class="links-container" data-astro-cid-au7rboj5> <div class="links-section" data-astro-cid-au7rboj5> <h2 class="section-title" data-astro-cid-au7rboj5>Learning Resources</h2> <div class="links-grid" data-astro-cid-au7rboj5> <a href="https://www.tinkercad.com" class="link-card" target="_blank" rel="noopener" data-astro-cid-au7rboj5> <h3 class="link-title" data-astro-cid-au7rboj5>Tinkercad</h3> <p class="link-description" data-astro-cid-au7rboj5>3D design and modeling tool</p> <span class="link-url" data-astro-cid-au7rboj5>tinkercad.com</span> </a> <a href="https://scratch.mit.edu" class="link-card" target="_blank" rel="noopener" data-astro-cid-au7rboj5> <h3 class="link-title" data-astro-cid-au7rboj5>Scratch</h3> <p class="link-description" data-astro-cid-au7rboj5>Learn to code with visual programming</p> <span class="link-url" data-astro-cid-au7rboj5>scratch.mit.edu</span> </a> <a href="https://www.khanacademy.org" class="link-card" target="_blank" rel="noopener" data-astro-cid-au7rboj5> <h3 class="link-title" data-astro-cid-au7rboj5>Khan Academy</h3> <p class="link-description" data-astro-cid-au7rboj5>Free educational videos and exercises</p> <span class="link-url" data-astro-cid-au7rboj5>khanacademy.org</span> </a> </div> </div> <div class="links-section" data-astro-cid-au7rboj5> <h2 class="section-title" data-astro-cid-au7rboj5>Creative Tools</h2> <div class="links-grid" data-astro-cid-au7rboj5> <a href="https://www.canva.com" class="link-card" target="_blank" rel="noopener" data-astro-cid-au7rboj5> <h3 class="link-title" data-astro-cid-au7rboj5>Canva</h3> <p class="link-description" data-astro-cid-au7rboj5>Easy graphic design tool</p> <span class="link-url" data-astro-cid-au7rboj5>canva.com</span> </a> <a href="https://www.gimp.org" class="link-card" target="_blank" rel="noopener" data-astro-cid-au7rboj5> <h3 class="link-title" data-astro-cid-au7rboj5>GIMP</h3> <p class="link-description" data-astro-cid-au7rboj5>Free image editing software</p> <span class="link-url" data-astro-cid-au7rboj5>gimp.org</span> </a> <a href="https://www.blender.org" class="link-card" target="_blank" rel="noopener" data-astro-cid-au7rboj5> <h3 class="link-title" data-astro-cid-au7rboj5>Blender</h3> <p class="link-description" data-astro-cid-au7rboj5>Free 3D modeling and animation</p> <span class="link-url" data-astro-cid-au7rboj5>blender.org</span> </a> </div> </div> <div class="links-section" data-astro-cid-au7rboj5> <h2 class="section-title" data-astro-cid-au7rboj5>Fun & Games</h2> <div class="links-grid" data-astro-cid-au7rboj5> <a href="https://www.roblox.com" class="link-card" target="_blank" rel="noopener" data-astro-cid-au7rboj5> <h3 class="link-title" data-astro-cid-au7rboj5>Roblox</h3> <p class="link-description" data-astro-cid-au7rboj5>Create and play games</p> <span class="link-url" data-astro-cid-au7rboj5>roblox.com</span> </a> <a href="https://www.minecraft.net" class="link-card" target="_blank" rel="noopener" data-astro-cid-au7rboj5> <h3 class="link-title" data-astro-cid-au7rboj5>Minecraft</h3> <p class="link-description" data-astro-cid-au7rboj5>Build and explore worlds</p> <span class="link-url" data-astro-cid-au7rboj5>minecraft.net</span> </a> <a href="https://www.lego.com" class="link-card" target="_blank" rel="noopener" data-astro-cid-au7rboj5> <h3 class="link-title" data-astro-cid-au7rboj5>LEGO</h3> <p class="link-description" data-astro-cid-au7rboj5>Building and creativity</p> <span class="link-url" data-astro-cid-au7rboj5>lego.com</span> </a> </div> </div> </div> </section> </main> ${renderComponent($$result2, "RightSidebar", $$RightSidebar, { "data-astro-cid-au7rboj5": true })} </div> ` })} `;
}, "C:/Users/bruno/dev/belablog/src/pages/links.astro", void 0);

const $$file = "C:/Users/bruno/dev/belablog/src/pages/links.astro";
const $$url = "/links";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$Links,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
