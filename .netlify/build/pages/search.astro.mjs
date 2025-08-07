/* empty css                                    */
import { c as createComponent, r as renderComponent, g as renderScript, a as renderTemplate, m as maybeRenderHead } from '../chunks/astro/server_BJYZ0b_Z.mjs';
import 'kleur/colors';
import { $ as $$Base, a as $$Section } from '../chunks/Base_DrIfoWQ-.mjs';
import { $ as $$Card } from '../chunks/Card_bvflr_9I.mjs';
import { g as getCollection } from '../chunks/_astro_content_CfGth2NF.mjs';
import { A as AppConfig } from '../chunks/AppConfig_iPkZB19C.mjs';
export { renderers } from '../renderers.mjs';

const $$Search = createComponent(async ($$result, $$props, $$slots) => {
  const posts = await getCollection("posts");
  return renderTemplate`${renderComponent($$result, "Base", $$Base, { "head": { title: `Search | ${AppConfig.title}`, description: AppConfig.description } }, { "default": async ($$result2) => renderTemplate` ${renderComponent($$result2, "Section", $$Section, {}, { "default": async ($$result3) => renderTemplate` ${maybeRenderHead()}<div class="text-center mb-12"> <h1 class="text-4xl font-bold mb-4">Search Posts</h1> <p class="text-xl text-gray-600 dark:text-gray-400">Find what you're looking for</p> </div> <div class="mb-8"> <input type="text" id="search-input" placeholder="Search posts..." class="w-full max-w-md mx-auto px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-lg bg-white dark:bg-gray-800 text-gray-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-orange-500"> </div> <div id="search-results" class="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3"> ${posts.map((post) => renderTemplate`${renderComponent($$result3, "Card", $$Card, { "post": post })}`)} </div> ` })} ` })} ${renderScript($$result, "C:/Users/bruno/dev/belablog/src/pages/search.astro?astro&type=script&index=0&lang.ts")}`;
}, "C:/Users/bruno/dev/belablog/src/pages/search.astro", void 0);

const $$file = "C:/Users/bruno/dev/belablog/src/pages/search.astro";
const $$url = "/search";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$Search,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
