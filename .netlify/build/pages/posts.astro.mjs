/* empty css                                    */
import { c as createComponent, r as renderComponent, a as renderTemplate, m as maybeRenderHead } from '../chunks/astro/server_BJYZ0b_Z.mjs';
import 'kleur/colors';
import { $ as $$Base, a as $$Section } from '../chunks/Base_DrIfoWQ-.mjs';
import { $ as $$Card } from '../chunks/Card_BK0XsYzR.mjs';
import { s as sortPostsByDate } from '../chunks/Tags_BfHByhtk.mjs';
import { A as AppConfig } from '../chunks/AppConfig_iPkZB19C.mjs';
export { renderers } from '../renderers.mjs';

const $$Index = createComponent(async ($$result, $$props, $$slots) => {
  const posts = await sortPostsByDate();
  return renderTemplate`${renderComponent($$result, "Base", $$Base, { "head": { title: `Posts | ${AppConfig.title}`, description: AppConfig.description } }, { "default": async ($$result2) => renderTemplate` ${renderComponent($$result2, "Section", $$Section, {}, { "default": async ($$result3) => renderTemplate` ${maybeRenderHead()}<div class="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3"> ${posts.map((post) => renderTemplate`${renderComponent($$result3, "Card", $$Card, { "post": post })}`)} </div> ` })} ` })}`;
}, "C:/Users/bruno/dev/belablog/src/pages/posts/index.astro", void 0);

const $$file = "C:/Users/bruno/dev/belablog/src/pages/posts/index.astro";
const $$url = "/posts";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
	__proto__: null,
	default: $$Index,
	file: $$file,
	url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
