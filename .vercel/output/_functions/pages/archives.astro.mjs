/* empty css                                    */
import { c as createComponent, r as renderComponent, a as renderTemplate, m as maybeRenderHead, b as addAttribute } from '../chunks/astro/server_CQuGYlAK.mjs';
import 'kleur/colors';
import { $ as $$Base, a as $$Section } from '../chunks/Base_q16q2hwE.mjs';
import { g as getCollection } from '../chunks/_astro_content_a1jevxmS.mjs';
import { A as AppConfig } from '../chunks/AppConfig_iPkZB19C.mjs';
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
  return renderTemplate`${renderComponent($$result, "Base", $$Base, { "head": { title: `Archives | ${AppConfig.title}`, description: AppConfig.description } }, { "default": async ($$result2) => renderTemplate` ${renderComponent($$result2, "Section", $$Section, {}, { "default": async ($$result3) => renderTemplate` ${maybeRenderHead()}<div class="text-center mb-12"> <h1 class="text-4xl font-bold mb-4">Archives</h1> <p class="text-xl text-gray-600 dark:text-gray-400">All posts in chronological order</p> </div> <div class="max-w-4xl mx-auto"> ${Array.from(postsByYear.entries()).sort(([a], [b]) => b - a).map(([year, yearPosts]) => renderTemplate`<div class="mb-12"> <h2 class="text-3xl font-bold mb-6 pb-2 border-b-2 border-orange-500">${year}</h2> <div class="space-y-6"> ${yearPosts.map((post) => renderTemplate`<article class="flex gap-6 p-4 rounded-lg hover:bg-stone-200/50 dark:hover:bg-stone-800/50 transition-colors"> <div class="min-w-[80px] text-sm text-gray-600 dark:text-gray-400 font-medium"> <time${addAttribute(post.data.date.toISOString(), "datetime")}> ${post.data.date.toLocaleDateString("nl-NL", {
    month: "short",
    day: "numeric"
  })} </time> </div> <div class="flex-1"> <h3 class="text-lg font-semibold mb-2"> <a${addAttribute(`/posts/${post.slug}`, "href")} class="hover:text-orange-600 transition-colors"> ${post.data.title} </a> </h3> ${post.data.description && renderTemplate`<p class="text-gray-600 dark:text-gray-400 text-sm mb-2"> ${post.data.description} </p>`} ${post.data.categories && post.data.categories.length > 0 && renderTemplate`<div class="flex gap-2"> ${post.data.categories.map((category) => renderTemplate`<a${addAttribute(`/categories/${category.toLowerCase()}`, "href")} class="bg-orange-600 text-white px-2 py-1 rounded text-xs hover:bg-orange-700 transition-colors"> ${category} </a>`)} </div>`} </div> </article>`)} </div> </div>`)} </div> ` })} ` })}`;
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
