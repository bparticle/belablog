/* empty css                                       */
import { d as createAstro, c as createComponent, r as renderComponent, a as renderTemplate, m as maybeRenderHead } from '../../chunks/astro/server_CQuGYlAK.mjs';
import 'kleur/colors';
import { $ as $$Base, a as $$Section } from '../../chunks/Base_q16q2hwE.mjs';
import { $ as $$Card } from '../../chunks/Card_hG5pTVyR.mjs';
import { g as getCollection } from '../../chunks/_astro_content_a1jevxmS.mjs';
import { A as AppConfig } from '../../chunks/AppConfig_iPkZB19C.mjs';
export { renderers } from '../../renderers.mjs';

const $$Astro = createAstro("https://belablog.netlify.app");
const $$category = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$category;
  const { category } = Astro2.params;
  if (!category) {
    return Astro2.redirect("/categories");
  }
  const posts = await getCollection("posts");
  const filteredPosts = posts.filter(
    (post) => post.data.categories && post.data.categories.includes(category)
  );
  if (filteredPosts.length === 0) {
    return Astro2.redirect("/categories");
  }
  return renderTemplate`${renderComponent($$result, "Base", $$Base, { "head": { title: `${category} | ${AppConfig.title}`, description: AppConfig.description } }, { "default": async ($$result2) => renderTemplate` ${renderComponent($$result2, "Section", $$Section, {}, { "default": async ($$result3) => renderTemplate` ${maybeRenderHead()}<div class="text-center mb-12"> <h1 class="text-4xl font-bold mb-4">${category}</h1> <p class="text-xl text-gray-600 dark:text-gray-400"> ${filteredPosts.length} post${filteredPosts.length === 1 ? "" : "s"} in this category
</p> </div> <div class="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3"> ${filteredPosts.map((post) => renderTemplate`${renderComponent($$result3, "Card", $$Card, { "post": post })}`)} </div> ` })} ` })}`;
}, "C:/Users/bruno/dev/belablog/src/pages/categories/[category].astro", void 0);

const $$file = "C:/Users/bruno/dev/belablog/src/pages/categories/[category].astro";
const $$url = "/categories/[category]";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$category,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
