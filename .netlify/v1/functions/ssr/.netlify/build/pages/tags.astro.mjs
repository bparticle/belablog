/* empty css                                    */
import { c as createComponent, r as renderComponent, a as renderTemplate, m as maybeRenderHead, b as addAttribute } from '../chunks/astro/server_BJYZ0b_Z.mjs';
import 'kleur/colors';
import { $ as $$Base, a as $$Section } from '../chunks/Base_DrIfoWQ-.mjs';
import { g as getCollection } from '../chunks/_astro_content_Dppwx819.mjs';
import { A as AppConfig } from '../chunks/AppConfig_iPkZB19C.mjs';
export { renderers } from '../renderers.mjs';

const $$Index = createComponent(async ($$result, $$props, $$slots) => {
  const posts = await getCollection("posts");
  const tagCounts = {};
  posts.forEach((post) => {
    if (post.data.tags) {
      post.data.tags.forEach((tag) => {
        tagCounts[tag] = (tagCounts[tag] || 0) + 1;
      });
    }
  });
  const tags = Object.keys(tagCounts).sort();
  return renderTemplate`${renderComponent($$result, "Base", $$Base, { "head": { title: `Tags | ${AppConfig.title}`, description: AppConfig.description } }, { "default": async ($$result2) => renderTemplate` ${renderComponent($$result2, "Section", $$Section, {}, { "default": async ($$result3) => renderTemplate` ${maybeRenderHead()}<div class="text-center mb-12"> <h1 class="text-4xl font-bold mb-4">Tags</h1> <p class="text-xl text-gray-600 dark:text-gray-400">Browse posts by tag</p> </div> <div class="grid grid-cols-2 gap-4 md:grid-cols-3 lg:grid-cols-4"> ${tags.map((tag) => renderTemplate`<a${addAttribute(`/tags/${tag}`, "href")} class="block"> <div class="h-full rounded-2xl bg-stone-200/50 from-orange-900 via-amber-700 to-white p-[1px] text-sm shadow-[inset_0_0_0_1px_rgba(255,255,255,0.4)] hover:bg-gradient-to-r dark:bg-gray-900"> <div class="flex h-full w-full flex-col rounded-[1rem] bg-stone-300 p-4 text-gray-900 opacity-90 dark:bg-stone-800 dark:text-white"> <h3 class="text-lg font-bold mb-2">#${tag}</h3> <div class="text-sm font-medium text-orange-600 dark:text-orange-400"> ${tagCounts[tag]} posts
</div> </div> </div> </a>`)} </div> ` })} ` })}`;
}, "C:/Users/bruno/dev/belablog/src/pages/tags/index.astro", void 0);

const $$file = "C:/Users/bruno/dev/belablog/src/pages/tags/index.astro";
const $$url = "/tags";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$Index,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
