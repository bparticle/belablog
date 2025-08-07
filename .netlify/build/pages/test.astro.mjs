/* empty css                                    */
import { c as createComponent, e as renderHead, a as renderTemplate } from '../chunks/astro/server_BJYZ0b_Z.mjs';
import 'kleur/colors';
import 'clsx';
import { g as getCollection } from '../chunks/_astro_content_YaKYUIOT.mjs';
export { renderers } from '../renderers.mjs';

const $$Test = createComponent(async ($$result, $$props, $$slots) => {
  const posts = await getCollection("posts");
  return renderTemplate`<html> <head><title>Debug Test</title>${renderHead()}</head> <body> <h1>Debug: Content Collection</h1> <p>Total posts found: ${posts.length}</p> <h2>Posts:</h2> <ul> ${posts.map((post) => renderTemplate`<li> <strong>${post.slug}</strong>: ${post.data.title}
(Date: ${post.data.date.toISOString()})
        (Categories: ${post.data.categories?.join(", ") || "none"})
</li>`)} </ul> </body></html>`;
}, "C:/Users/bruno/dev/belablog/src/pages/test.astro", void 0);

const $$file = "C:/Users/bruno/dev/belablog/src/pages/test.astro";
const $$url = "/test";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$Test,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
