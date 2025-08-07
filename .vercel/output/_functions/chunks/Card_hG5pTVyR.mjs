import { d as createAstro, c as createComponent, m as maybeRenderHead, b as addAttribute, a as renderTemplate, r as renderComponent } from './astro/server_CQuGYlAK.mjs';
import 'kleur/colors';
import { f as formatDate, $ as $$Tags } from './Tags_O_c3Mtg1.mjs';
import 'clsx';

const $$Astro$2 = createAstro("https://belablog.netlify.app");
const $$PinIcon = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$2, $$props, $$slots);
  Astro2.self = $$PinIcon;
  const { size = "md", class: className = "" } = Astro2.props;
  const sizeClasses = {
    sm: "h-3 w-3",
    md: "h-4 w-4",
    lg: "h-5 w-5"
  };
  const iconSize = sizeClasses[size];
  return renderTemplate`${maybeRenderHead()}<svg xmlns="http://www.w3.org/2000/svg"${addAttribute(`${iconSize} ${className}`, "class")} viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"> <path d="M12 17v5"></path> <path d="M9 10.76a2 2 0 0 1-1.11 1.79l-1.78.9A2 2 0 0 0 5 15.24V16a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1v-.76a2 2 0 0 0-1.11-1.79l-1.78-.9A2 2 0 0 1 15 10.76V7a1 1 0 0 1 1-1 2 2 0 0 0 0-4H8a2 2 0 0 0 0 4 1 1 0 0 1 1 1z"></path> </svg>`;
}, "C:/Users/bruno/dev/belablog/src/components/PinIcon.astro", void 0);

const $$Astro$1 = createAstro("https://belablog.netlify.app");
const $$PinnedBadge = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$1, $$props, $$slots);
  Astro2.self = $$PinnedBadge;
  const { size = "md", class: className = "" } = Astro2.props;
  const badgeSizeClasses = {
    sm: "px-2 py-0.5 text-xs",
    md: "px-2.5 py-1 text-sm",
    lg: "px-3 py-1.5 text-base"
  };
  const badgeSize = badgeSizeClasses[size];
  return renderTemplate`${maybeRenderHead()}<span${addAttribute(`inline-flex items-center rounded-full bg-orange-100 ${badgeSize} font-medium text-orange-800 dark:bg-orange-900 dark:text-orange-200 ${className}`, "class")}> ${renderComponent($$result, "PinIcon", $$PinIcon, { "size": size })} </span>`;
}, "C:/Users/bruno/dev/belablog/src/components/PinnedBadge.astro", void 0);

const $$Astro = createAstro("https://belablog.netlify.app");
const $$Card = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$Card;
  const { post } = Astro2.props;
  const isPinned = post.data.isPinned === true;
  return renderTemplate`${maybeRenderHead()}<a${addAttribute(`/posts/${post.slug}`, "href")}> <div class="h-full rounded-2xl bg-stone-200/50 from-orange-900 via-amber-700 to-white p-[1px] text-sm shadow-[inset_0_0_0_1px_rgba(255,255,255,0.4)] hover:bg-gradient-to-r dark:bg-gray-900"> <div class="flex h-full w-full flex-col rounded-[1rem] bg-stone-300 text-gray-900 opacity-90 dark:bg-stone-800 dark:text-white overflow-hidden"> ${post.data.image && renderTemplate`<div class="w-full h-48 overflow-hidden"> <img${addAttribute(`/posts/${post.slug}/${post.data.image}`, "src")}${addAttribute(post.data.title, "alt")} class="w-full h-full object-cover hover:scale-105 transition-transform duration-300"> </div>`} <div class="flex-auto p-4"> <div class="flex flex-col justify-between gap-2 pb-4 text-xs"> <div class="flex items-center gap-2"> ${isPinned && renderTemplate`${renderComponent($$result, "PinnedBadge", $$PinnedBadge, { "size": "sm" })}`} <p>${formatDate(post.data.date.toISOString())}</p> </div> <div> <p class="font-bold">${post.data.minutesRead || "5 min read"}</p> </div> </div> <p class="pb-4 text-lg font-bold">${post.data.title}</p> ${renderComponent($$result, "Tags", $$Tags, { "tags": post.data.tags || [] })} <p class="line-clamp-6 pt-4">${post.data.description || ""}</p> </div> <p class="pt-4 px-4 pb-4 underline">read more →</p> </div> </div> </a>`;
}, "C:/Users/bruno/dev/belablog/src/components/Card.astro", void 0);

export { $$Card as $ };
