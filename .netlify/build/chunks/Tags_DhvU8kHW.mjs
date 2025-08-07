import { g as getCollection } from './_astro_content_YaKYUIOT.mjs';
import { d as createAstro, c as createComponent, m as maybeRenderHead, b as addAttribute, a as renderTemplate, r as renderComponent } from './astro/server_BJYZ0b_Z.mjs';
import 'kleur/colors';
import 'clsx';

const formatDate = (pubDate) => {
  var options = {
    weekday: "short",
    year: "numeric",
    month: "long",
    day: "numeric"
  };
  return new Date(pubDate).toLocaleDateString("nl-NL", options);
};
const sortPostsByDate = async () => {
  const posts = await getCollection("posts");
  return posts.sort((a, b) => {
    const isPinnedA = a.data.isPinned === true;
    const isPinnedB = b.data.isPinned === true;
    if (isPinnedA && !isPinnedB) {
      return -1;
    }
    if (!isPinnedA && isPinnedB) {
      return 1;
    }
    const pubDateA = new Date(a.data.date);
    const pubDateB = new Date(b.data.date);
    if (pubDateA < pubDateB) {
      return 1;
    }
    if (pubDateA > pubDateB) {
      return -1;
    }
    return 0;
  });
};

const $$Astro$1 = createAstro("https://belablog.netlify.app");
const $$Tag = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$1, $$props, $$slots);
  Astro2.self = $$Tag;
  const { tag, withHref } = Astro2.props;
  return renderTemplate`${maybeRenderHead()}<span${addAttribute(`mb-2 mr-2 rounded-xl bg-stone-600 px-3 py-1 text-xs font-bold uppercase text-white group-hover:bg-stone-500 ${withHref ? "hover:bg-stone-500" : ""}`, "class")}>
#${tag} </span>`;
}, "C:/Users/bruno/dev/belablog/src/components/Tag.astro", void 0);

const $$Astro = createAstro("https://belablog.netlify.app");
const $$Tags = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$Tags;
  const { tags, withHref } = Astro2.props;
  return renderTemplate`${maybeRenderHead()}<div class="flex flex-wrap"> ${tags.map((tag) => {
    const element = renderTemplate`${renderComponent($$result, "Tag", $$Tag, { "tag": tag, "withHref": withHref })}`;
    return withHref ? renderTemplate`<a${addAttribute(`/tags/${tag}`, "href")}>${element}</a>` : element;
  })} </div>`;
}, "C:/Users/bruno/dev/belablog/src/components/Tags.astro", void 0);

export { $$Tags as $, formatDate as f, sortPostsByDate as s };
