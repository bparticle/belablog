import { c as createComponent, m as maybeRenderHead, f as renderSlot, a as renderTemplate, d as createAstro, r as renderComponent, g as renderScript, e as renderHead, b as addAttribute } from './astro/server_BJYZ0b_Z.mjs';
import 'kleur/colors';
import 'clsx';
import { A as AppConfig } from './AppConfig_iPkZB19C.mjs';
/* empty css                            */

const $$Section = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${maybeRenderHead()}<div class="mx-auto w-full max-w-screen-lg px-4 py-6"> ${renderSlot($$result, $$slots["default"])} </div>`;
}, "C:/Users/bruno/dev/belablog/src/components/Section.astro", void 0);

const $$Astro$1 = createAstro("https://belablog.netlify.app");
const $$Footer = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$1, $$props, $$slots);
  Astro2.self = $$Footer;
  const year = /* @__PURE__ */ new Date();
  return renderTemplate`${renderComponent($$result, "Section", $$Section, {}, { "default": ($$result2) => renderTemplate` ${maybeRenderHead()}<footer class="text-center"> <div class="pb-4"> <a class="underline hover:text-orange-600" href="/rss.xml">RSS</a> - <a class="underline hover:text-orange-600" href="/sitemap-index.xml">Sitemap</a> - <a class="underline hover:text-orange-600" href="/tags">Tags</a> </div>
© ${year.getFullYear()} - Allemaal dingetjes die Béla doet - made with ♥️ by <a class="underline hover:text-orange-600" href="https://github.com/nicdun/astro-tech-blog" target="_blank">Astro Tech Blog</a> </footer> ` })}`;
}, "C:/Users/bruno/dev/belablog/src/components/Footer.astro", void 0);

const $$Navbar = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${renderComponent($$result, "Section", $$Section, {}, { "default": ($$result2) => renderTemplate` ${maybeRenderHead()}<div class="flex items-center justify-between"> <div class="text-3xl font-bold"> <a href="/">😐 <span class="pr-2 text-2xl text-gray-500">${"<"}</span>Béla<span class="text-orange-600">.</span>blog<span class="pl-2 text-2xl text-gray-500">${"/>"}</span></a> </div> <div class="flex items-center"> <!-- Desktop Navigation --> <nav> <ul class="hidden flex-row sm:flex"> <li><a href="/posts" class="mr-3 hover:text-orange-600">POSTS</a></li> <li><a href="/categories" class="mr-3 hover:text-orange-600">CATEGORIES</a></li> <li><a href="/tags" class="mr-3 hover:text-orange-600">TAGS</a></li> <li><a href="/search" class="hover:text-orange-600">SEARCH</a></li> </ul> </nav> <!-- Desktop Theme Switcher --> <div class="ml-3 hidden flex-col justify-center sm:flex"> <input type="checkbox" id="light-switch-desktop" class="light-switch sr-only"> <label class="tada relative cursor-pointer p-2" for="light-switch-desktop"> <svg class="dark:hidden" width="16" height="16" xmlns="http://www.w3.org/2000/svg"> <path class="fill-stone-800" d="M7 0h2v2H7zM12.88 1.637l1.414 1.415-1.415 1.413-1.413-1.414zM14 7h2v2h-2zM12.95 14.433l-1.414-1.413 1.413-1.415 1.415 1.414zM7 14h2v2H7zM2.98 14.364l-1.413-1.415 1.414-1.414 1.414 1.415zM0 7h2v2H0zM3.05 1.706 4.463 3.12 3.05 4.535 1.636 3.12z"></path> <path class="fill-gray-900" d="M8 4C5.8 4 4 5.8 4 8s1.8 4 4 4 4-1.8 4-4-1.8-4-4-4Z"></path> </svg> <svg class="hidden dark:block" width="16" height="16" xmlns="http://www.w3.org/2000/svg"> <path class="fill-slate-400" d="M6.2 1C3.2 1.8 1 4.6 1 7.9 1 11.8 4.2 15 8.1 15c3.3 0 6-2.2 6.9-5.2C9.7 11.2 4.8 6.3 6.2 1Z"></path> <path class="fill-slate-500" d="M12.5 5a.625.625 0 0 1-.625-.625 1.252 1.252 0 0 0-1.25-1.25.625.625 0 1 1 0-1.25 1.252 1.252 0 0 0 1.25-1.25.625.625 0 1 1 1.25 0c.001.69.56 1.249 1.25 1.25a.625.625 0 1 1 0 1.25c-.69.001-1.249.56-1.25 1.25A.625.625 0 0 1 12.5 5Z"></path> </svg> <span class="sr-only">Switch to light / dark version</span> </label> </div> <!-- Mobile Menu Button --> <button id="mobile-menu-button" class="p-2 sm:hidden" aria-label="Toggle mobile menu"> <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2"> <path stroke-linecap="round" stroke-linejoin="round" d="M4 6h16M4 12h16M4 18h16"></path> </svg> </button> </div> </div>  <div id="mobile-menu" class="mt-4 hidden rounded-lg border border-gray-200 bg-white pb-2 shadow-md transition-all duration-300 sm:hidden dark:border-gray-200 dark:bg-stone-900"> <nav class="flex flex-col p-3"> <a href="/posts" class="border-b border-gray-200 py-2 hover:text-orange-600">POSTS</a> <a href="/categories" class="border-b border-gray-200 py-2 hover:text-orange-600">CATEGORIES</a> <a href="/tags" class="border-b border-gray-200 py-2 hover:text-orange-600">TAGS</a> <a href="/search" class="border-b border-gray-200 py-2 hover:text-orange-600">SEARCH</a> <!-- Mobile Theme Switcher --> <div class="flex items-center py-2"> <input type="checkbox" id="light-switch-mobile" class="light-switch sr-only"> <label class="tada relative cursor-pointer p-2" for="light-switch-mobile"> <svg class="dark:hidden" width="16" height="16" xmlns="http://www.w3.org/2000/svg"> <path class="fill-stone-800" d="M7 0h2v2H7zM12.88 1.637l1.414 1.415-1.415 1.413-1.413-1.414zM14 7h2v2h-2zM12.95 14.433l-1.414-1.413 1.413-1.415 1.415 1.414zM7 14h2v2H7zM2.98 14.364l-1.413-1.415 1.414-1.414 1.414 1.415zM0 7h2v2H0zM3.05 1.706 4.463 3.12 3.05 4.535 1.636 3.12z"></path> <path class="fill-gray-900" d="M8 4C5.8 4 4 5.8 4 8s1.8 4 4 4 4-1.8 4-4-1.8-4-4-4Z"></path> </svg> <svg class="hidden dark:block" width="16" height="16" xmlns="http://www.w3.org/2000/svg"> <path class="fill-slate-400" d="M6.2 1C3.2 1.8 1 4.6 1 7.9 1 11.8 4.2 15 8.1 15c3.3 0 6-2.2 6.9-5.2C9.7 11.2 4.8 6.3 6.2 1Z"></path> <path class="fill-slate-500" d="M12.5 5a.625.625 0 0 1-.625-.625 1.252 1.252 0 0 0-1.25-1.25.625.625 0 1 1 0-1.25 1.252 1.252 0 0 0 1.25-1.25.625.625 0 1 1 1.25 0c.001.69.56 1.249 1.25 1.25a.625.625 0 1 1 0 1.25c-.69.001-1.249.56-1.25 1.25A.625.625 0 0 1 12.5 5Z"></path> </svg> <span class="sr-only">Switch to light / dark version</span> </label> </div> </nav> </div> ` })} ${renderScript($$result, "C:/Users/bruno/dev/belablog/src/components/Navbar.astro?astro&type=script&index=0&lang.ts")}`;
}, "C:/Users/bruno/dev/belablog/src/components/Navbar.astro", void 0);

var __freeze = Object.freeze;
var __defProp = Object.defineProperty;
var __template = (cooked, raw) => __freeze(__defProp(cooked, "raw", { value: __freeze(cooked.slice()) }));
var _a;
const $$Astro = createAstro("https://belablog.netlify.app");
const $$Base = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$Base;
  const {
    head: { title, description }
  } = Astro2.props;
  return renderTemplate(_a || (_a = __template(['<html lang="nl"> <head><meta charset="UTF-8"><meta name="viewport" content="width=device-width, initial-scale=1.0"><title>', '</title><meta name="description"', '><meta name="author"', `><link rel="sitemap" href="/sitemap-index.xml"><link rel="alternate" type="application/rss+xml" href="/rss.xml"><link rel="icon" href="data:image/svg+xml,<svg xmlns=%22http://www.w3.org/2000/svg%22 viewBox=%220 0 100 100%22><text y=%22.9em%22 font-size=%2290%22>\u{1F610}</text></svg>"><!-- Prevent theme flash by setting theme immediately --><script>
			// Immediately set theme to prevent flash
			const theme = localStorage.getItem('theme') || 'dark';
			if (theme === 'dark') {
				document.documentElement.classList.add('dark');
			} else {
				document.documentElement.classList.remove('dark');
			}
		<\/script>`, '</head> <body class="flex min-h-screen flex-col bg-stone-100 font-mono text-gray-950 dark:bg-stone-900 dark:text-white"> ', ' <div class="flex-1"> ', " </div> ", " </body></html>"])), title, addAttribute(description, "content"), addAttribute(AppConfig.author, "content"), renderHead(), renderComponent($$result, "Navbar", $$Navbar, {}), renderSlot($$result, $$slots["default"]), renderComponent($$result, "Footer", $$Footer, {}));
}, "C:/Users/bruno/dev/belablog/src/layouts/Base.astro", void 0);

export { $$Base as $, $$Section as a };
