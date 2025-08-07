/* empty css                                       */
import { d as createAstro, c as createComponent, r as renderComponent, a as renderTemplate, m as maybeRenderHead, b as addAttribute } from '../../chunks/astro/server_BJYZ0b_Z.mjs';
import 'kleur/colors';
import { g as getCollection } from '../../chunks/_astro_content_Dppwx819.mjs';
import { $ as $$Base, a as $$Section } from '../../chunks/Base_DrIfoWQ-.mjs';
import { f as formatDate, $ as $$Tags } from '../../chunks/Tags_BfHByhtk.mjs';
import { A as AppConfig } from '../../chunks/AppConfig_iPkZB19C.mjs';
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
  return renderTemplate`${renderComponent($$result, "Base", $$Base, { "head": {
    title: `${post.data.title} | ${AppConfig.title}`,
    description: post.data.description || AppConfig.description
  } }, { "default": async ($$result2) => renderTemplate` ${renderComponent($$result2, "Section", $$Section, {}, { "default": async ($$result3) => renderTemplate` ${maybeRenderHead()}<article class="prose prose-lg dark:prose-invert prose-stone mx-auto"> <header class="mb-8"> <div class="flex items-center gap-2 mb-4 text-sm text-gray-600 dark:text-gray-400"> <time${addAttribute(post.data.date.toISOString(), "datetime")}> ${formatDate(post.data.date.toISOString())} </time> ${post.data.minutesRead && renderTemplate`<span>• ${post.data.minutesRead}</span>`} </div> <h1 class="text-4xl font-bold mb-4">${post.data.title}</h1> ${post.data.description && renderTemplate`<p class="text-xl text-gray-600 dark:text-gray-400 mb-6"> ${post.data.description} </p>`} ${post.data.image && renderTemplate`<div class="mb-8"> <img${addAttribute(`/posts/${post.slug}/${post.data.image}`, "src")}${addAttribute(post.data.title, "alt")} class="w-full h-auto rounded-lg"> </div>`} ${post.data.tags && post.data.tags.length > 0 && renderTemplate`<div class="mb-8"> ${renderComponent($$result3, "Tags", $$Tags, { "tags": post.data.tags, "withHref": true })} </div>`} </header> <div class="prose prose-lg dark:prose-invert prose-stone max-w-none"> ${renderComponent($$result3, "Content", Content, {})} </div> </article> ` })} ` })}`;
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
