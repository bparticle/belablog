import { c as createAstro, a as createComponent, b as addAttribute, e as renderHead, f as renderSlot, r as renderTemplate, g as renderUniqueStylesheet, h as renderScriptElement, i as createHeadAndContent, d as renderComponent, u as unescapeHTML, m as maybeRenderHead } from './astro/server_BrOuvGzX.mjs';
import 'kleur/colors';
import 'clsx';
/* empty css                            */
import { Traverse } from 'neotraverse/modern';
import pLimit from 'p-limit';
import { removeBase, isRemotePath, prependForwardSlash } from '@astrojs/internal-helpers/path';
import { V as VALID_INPUT_FORMATS, A as AstroError, U as UnknownContentCollectionError } from './astro/assets-service_BRjr9oCu.mjs';
import * as devalue from 'devalue';

const $$Astro = createAstro("https://belablog.netlify.app");
const $$Layout = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$Layout;
  const {
    title,
    description = "B\xE9la's Blog - Allemaal dingetjes die B\xE9la doet",
    image,
    type = "website",
    date,
    categories = [],
    tags = []
  } = Astro2.props;
  const canonicalURL = new URL(Astro2.url.pathname, Astro2.site);
  const socialImageURL = image ? new URL(image, Astro2.url) : void 0;
  return renderTemplate`<html lang="nl"> <head><meta charset="UTF-8"><meta name="description"${addAttribute(description, "content")}><meta name="viewport" content="width=device-width"><link rel="icon" type="image/svg+xml" href="/favicon.svg"><meta name="generator"${addAttribute(Astro2.generator, "content")}><title>${title}</title><link rel="canonical"${addAttribute(canonicalURL, "href")}><!-- Open Graph --><meta property="og:type"${addAttribute(type, "content")}><meta property="og:title"${addAttribute(title, "content")}><meta property="og:description"${addAttribute(description, "content")}><meta property="og:url"${addAttribute(canonicalURL, "content")}>${socialImageURL && renderTemplate`<meta property="og:image"${addAttribute(socialImageURL, "content")}>`}<!-- Twitter --><meta name="twitter:card" content="summary_large_image"><meta name="twitter:title"${addAttribute(title, "content")}><meta name="twitter:description"${addAttribute(description, "content")}>${socialImageURL && renderTemplate`<meta name="twitter:image"${addAttribute(socialImageURL, "content")}>`}<!-- Article specific meta -->${type === "article" && date && renderTemplate`<meta property="article:published_time"${addAttribute(date.toISOString(), "content")}>`}${categories.length > 0 && renderTemplate`<meta property="article:section"${addAttribute(categories[0], "content")}>`}<!-- Preload fonts --><link rel="preconnect" href="https://fonts.googleapis.com"><link rel="preconnect" href="https://fonts.gstatic.com" crossorigin><link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&display=swap" rel="stylesheet">${renderHead()}</head> <body> <div id="app"> ${renderSlot($$result, $$slots["default"])} </div> </body></html>`;
}, "C:/Users/bruno/dev/belablog/src/layouts/Layout.astro", void 0);

const CONTENT_IMAGE_FLAG = "astroContentImageFlag";
const IMAGE_IMPORT_PREFIX = "__ASTRO_IMAGE_";

function imageSrcToImportId(imageSrc, filePath) {
  imageSrc = removeBase(imageSrc, IMAGE_IMPORT_PREFIX);
  if (isRemotePath(imageSrc)) {
    return;
  }
  const ext = imageSrc.split(".").at(-1);
  if (!ext || !VALID_INPUT_FORMATS.includes(ext)) {
    return;
  }
  const params = new URLSearchParams(CONTENT_IMAGE_FLAG);
  if (filePath) {
    params.set("importer", filePath);
  }
  return `${imageSrc}?${params.toString()}`;
}

class DataStore {
  _collections = /* @__PURE__ */ new Map();
  constructor() {
    this._collections = /* @__PURE__ */ new Map();
  }
  get(collectionName, key) {
    return this._collections.get(collectionName)?.get(String(key));
  }
  entries(collectionName) {
    const collection = this._collections.get(collectionName) ?? /* @__PURE__ */ new Map();
    return [...collection.entries()];
  }
  values(collectionName) {
    const collection = this._collections.get(collectionName) ?? /* @__PURE__ */ new Map();
    return [...collection.values()];
  }
  keys(collectionName) {
    const collection = this._collections.get(collectionName) ?? /* @__PURE__ */ new Map();
    return [...collection.keys()];
  }
  has(collectionName, key) {
    const collection = this._collections.get(collectionName);
    if (collection) {
      return collection.has(String(key));
    }
    return false;
  }
  hasCollection(collectionName) {
    return this._collections.has(collectionName);
  }
  collections() {
    return this._collections;
  }
  /**
   * Attempts to load a DataStore from the virtual module.
   * This only works in Vite.
   */
  static async fromModule() {
    try {
      const data = await import('./_astro_data-layer-content_BcEe_9wP.mjs');
      if (data.default instanceof Map) {
        return DataStore.fromMap(data.default);
      }
      const map = devalue.unflatten(data.default);
      return DataStore.fromMap(map);
    } catch {
    }
    return new DataStore();
  }
  static async fromMap(data) {
    const store = new DataStore();
    store._collections = data;
    return store;
  }
}
function dataStoreSingleton() {
  let instance = void 0;
  return {
    get: async () => {
      if (!instance) {
        instance = DataStore.fromModule();
      }
      return instance;
    },
    set: (store) => {
      instance = store;
    }
  };
}
const globalDataStore = dataStoreSingleton();

const __vite_import_meta_env__ = {"ASSETS_PREFIX": undefined, "BASE_URL": "/", "DEV": false, "MODE": "production", "PROD": true, "SITE": "https://belablog.netlify.app", "SSR": true};
function createCollectionToGlobResultMap({
  globResult,
  contentDir
}) {
  const collectionToGlobResultMap = {};
  for (const key in globResult) {
    const keyRelativeToContentDir = key.replace(new RegExp(`^${contentDir}`), "");
    const segments = keyRelativeToContentDir.split("/");
    if (segments.length <= 1) continue;
    const collection = segments[0];
    collectionToGlobResultMap[collection] ??= {};
    collectionToGlobResultMap[collection][key] = globResult[key];
  }
  return collectionToGlobResultMap;
}
function createGetCollection({
  contentCollectionToEntryMap,
  dataCollectionToEntryMap,
  getRenderEntryImport,
  cacheEntriesByCollection
}) {
  return async function getCollection(collection, filter) {
    const hasFilter = typeof filter === "function";
    const store = await globalDataStore.get();
    let type;
    if (collection in contentCollectionToEntryMap) {
      type = "content";
    } else if (collection in dataCollectionToEntryMap) {
      type = "data";
    } else if (store.hasCollection(collection)) {
      const { default: imageAssetMap } = await import('./_astro_asset-imports_D9aVaOQr.mjs');
      const result = [];
      for (const rawEntry of store.values(collection)) {
        const data = updateImageReferencesInData(rawEntry.data, rawEntry.filePath, imageAssetMap);
        const entry = {
          ...rawEntry,
          data,
          collection
        };
        if (hasFilter && !filter(entry)) {
          continue;
        }
        result.push(entry);
      }
      return result;
    } else {
      console.warn(
        `The collection ${JSON.stringify(
          collection
        )} does not exist or is empty. Ensure a collection directory with this name exists.`
      );
      return [];
    }
    const lazyImports = Object.values(
      type === "content" ? contentCollectionToEntryMap[collection] : dataCollectionToEntryMap[collection]
    );
    let entries = [];
    if (!Object.assign(__vite_import_meta_env__, { Path: process.env.Path })?.DEV && cacheEntriesByCollection.has(collection)) {
      entries = cacheEntriesByCollection.get(collection);
    } else {
      const limit = pLimit(10);
      entries = await Promise.all(
        lazyImports.map(
          (lazyImport) => limit(async () => {
            const entry = await lazyImport();
            return type === "content" ? {
              id: entry.id,
              slug: entry.slug,
              body: entry.body,
              collection: entry.collection,
              data: entry.data,
              async render() {
                return render({
                  collection: entry.collection,
                  id: entry.id,
                  renderEntryImport: await getRenderEntryImport(collection, entry.slug)
                });
              }
            } : {
              id: entry.id,
              collection: entry.collection,
              data: entry.data
            };
          })
        )
      );
      cacheEntriesByCollection.set(collection, entries);
    }
    if (hasFilter) {
      return entries.filter(filter);
    } else {
      return entries.slice();
    }
  };
}
function updateImageReferencesInData(data, fileName, imageAssetMap) {
  return new Traverse(data).map(function(ctx, val) {
    if (typeof val === "string" && val.startsWith(IMAGE_IMPORT_PREFIX)) {
      const src = val.replace(IMAGE_IMPORT_PREFIX, "");
      const id = imageSrcToImportId(src, fileName);
      if (!id) {
        ctx.update(src);
        return;
      }
      const imported = imageAssetMap?.get(id);
      if (imported) {
        ctx.update(imported);
      } else {
        ctx.update(src);
      }
    }
  });
}
async function render({
  collection,
  id,
  renderEntryImport
}) {
  const UnexpectedRenderError = new AstroError({
    ...UnknownContentCollectionError,
    message: `Unexpected error while rendering ${String(collection)} → ${String(id)}.`
  });
  if (typeof renderEntryImport !== "function") throw UnexpectedRenderError;
  const baseMod = await renderEntryImport();
  if (baseMod == null || typeof baseMod !== "object") throw UnexpectedRenderError;
  const { default: defaultMod } = baseMod;
  if (isPropagatedAssetsModule(defaultMod)) {
    const { collectedStyles, collectedLinks, collectedScripts, getMod } = defaultMod;
    if (typeof getMod !== "function") throw UnexpectedRenderError;
    const propagationMod = await getMod();
    if (propagationMod == null || typeof propagationMod !== "object") throw UnexpectedRenderError;
    const Content = createComponent({
      factory(result, baseProps, slots) {
        let styles = "", links = "", scripts = "";
        if (Array.isArray(collectedStyles)) {
          styles = collectedStyles.map((style) => {
            return renderUniqueStylesheet(result, {
              type: "inline",
              content: style
            });
          }).join("");
        }
        if (Array.isArray(collectedLinks)) {
          links = collectedLinks.map((link) => {
            return renderUniqueStylesheet(result, {
              type: "external",
              src: prependForwardSlash(link)
            });
          }).join("");
        }
        if (Array.isArray(collectedScripts)) {
          scripts = collectedScripts.map((script) => renderScriptElement(script)).join("");
        }
        let props = baseProps;
        if (id.endsWith("mdx")) {
          props = {
            components: propagationMod.components ?? {},
            ...baseProps
          };
        }
        return createHeadAndContent(
          unescapeHTML(styles + links + scripts),
          renderTemplate`${renderComponent(
            result,
            "Content",
            propagationMod.Content,
            props,
            slots
          )}`
        );
      },
      propagation: "self"
    });
    return {
      Content,
      headings: propagationMod.getHeadings?.() ?? [],
      remarkPluginFrontmatter: propagationMod.frontmatter ?? {}
    };
  } else if (baseMod.Content && typeof baseMod.Content === "function") {
    return {
      Content: baseMod.Content,
      headings: baseMod.getHeadings?.() ?? [],
      remarkPluginFrontmatter: baseMod.frontmatter ?? {}
    };
  } else {
    throw UnexpectedRenderError;
  }
}
function isPropagatedAssetsModule(module) {
  return typeof module === "object" && module != null && "__astroPropagation" in module;
}

// astro-head-inject

const contentDir = '/src/content/';

const contentEntryGlob = /* #__PURE__ */ Object.assign({"/src/content/posts/belas-droom.md": () => import('./belas-droom_pgBXF9B1.mjs'),"/src/content/posts/creaks.md": () => import('./creaks_Cc0zTbwZ.mjs'),"/src/content/posts/cupcake-commando.md": () => import('./cupcake-commando_DSApBKIv.mjs'),"/src/content/posts/deur-des-doods.md": () => import('./deur-des-doods_kuroZ4Ib.mjs'),"/src/content/posts/deur-des-doods_2.md": () => import('./deur-des-doods_2_B9HP14Du.mjs'),"/src/content/posts/don-krieg-schild.md": () => import('./don-krieg-schild_YtoKWiVH.mjs'),"/src/content/posts/een-nieuw-ontwerp-van-kady.md": () => import('./een-nieuw-ontwerp-van-kady_BR1xbmEa.mjs'),"/src/content/posts/fidget-toy2.md": () => import('./fidget-toy2_Cfmzs5Gr.mjs'),"/src/content/posts/grimwoud.md": () => import('./grimwoud_DBJ7bnY8.mjs'),"/src/content/posts/hello-world.md": () => import('./hello-world_DOTUXzVb.mjs'),"/src/content/posts/imtober.md": () => import('./imtober_COIbvly-.mjs'),"/src/content/posts/island-game.md": () => import('./island-game_BFLGNkSt.mjs'),"/src/content/posts/kady-fidget.md": () => import('./kady-fidget_CqtaAKJd.mjs'),"/src/content/posts/lego-technic_1.md": () => import('./lego-technic_1_AdUsTTRS.mjs'),"/src/content/posts/leuke-dingetjes.md": () => import('./leuke-dingetjes_CCz0oXY_.mjs'),"/src/content/posts/nago.md": () => import('./nago_DraUjm2e.mjs'),"/src/content/posts/nieuw-burootje.md": () => import('./nieuw-burootje_X0TGzlIh.mjs'),"/src/content/posts/tekeningen.md": () => import('./tekeningen_AvGkgWkN.mjs'),"/src/content/posts/verder-werken-aan-de-switch.md": () => import('./verder-werken-aan-de-switch_CrmBa0vU.mjs'),"/src/content/posts/verjaardags-kroon.md": () => import('./verjaardags-kroon_B9C0L7Tf.mjs')});
const contentCollectionToEntryMap = createCollectionToGlobResultMap({
	globResult: contentEntryGlob,
	contentDir,
});

const dataEntryGlob = /* #__PURE__ */ Object.assign({"/src/content/categories/art.json": () => import('./art_B90lh2hQ.mjs'),"/src/content/categories/books.json": () => import('./books_BVkJant8.mjs'),"/src/content/categories/gaming.json": () => import('./gaming_CrzNKslk.mjs'),"/src/content/categories/stories.json": () => import('./stories_Cq8IYwu4.mjs')});
const dataCollectionToEntryMap = createCollectionToGlobResultMap({
	globResult: dataEntryGlob,
	contentDir,
});
createCollectionToGlobResultMap({
	globResult: { ...contentEntryGlob, ...dataEntryGlob },
	contentDir,
});

let lookupMap = {};
lookupMap = {"categories":{"type":"data","entries":{"art":"/src/content/categories/art.json","books":"/src/content/categories/books.json","gaming":"/src/content/categories/gaming.json","stories":"/src/content/categories/stories.json"}},"posts":{"type":"content","entries":{"creaks":"/src/content/posts/creaks.md","deur-des-doods_2":"/src/content/posts/deur-des-doods_2.md","belas-droom":"/src/content/posts/belas-droom.md","cupcake-commando":"/src/content/posts/cupcake-commando.md","deur-des-doods":"/src/content/posts/deur-des-doods.md","don-krieg-schild":"/src/content/posts/don-krieg-schild.md","een-nieuw-ontwerp-van-kady":"/src/content/posts/een-nieuw-ontwerp-van-kady.md","grimwoud":"/src/content/posts/grimwoud.md","fidget-toy2":"/src/content/posts/fidget-toy2.md","hello-world":"/src/content/posts/hello-world.md","imtober":"/src/content/posts/imtober.md","island-game":"/src/content/posts/island-game.md","kady-fidget":"/src/content/posts/kady-fidget.md","lego-technic_1":"/src/content/posts/lego-technic_1.md","leuke-dingetjes":"/src/content/posts/leuke-dingetjes.md","nago":"/src/content/posts/nago.md","nieuw-burootje":"/src/content/posts/nieuw-burootje.md","tekeningen":"/src/content/posts/tekeningen.md","verder-werken-aan-de-switch":"/src/content/posts/verder-werken-aan-de-switch.md","verjaardags-kroon":"/src/content/posts/verjaardags-kroon.md"}}};

new Set(Object.keys(lookupMap));

function createGlobLookup(glob) {
	return async (collection, lookupId) => {
		const filePath = lookupMap[collection]?.entries[lookupId];

		if (!filePath) return undefined;
		return glob[collection][filePath];
	};
}

const renderEntryGlob = /* #__PURE__ */ Object.assign({"/src/content/posts/belas-droom.md": () => import('./belas-droom_DplDdJNQ.mjs'),"/src/content/posts/creaks.md": () => import('./creaks_Dk_PAQ3V.mjs'),"/src/content/posts/cupcake-commando.md": () => import('./cupcake-commando_wdJBj28Y.mjs'),"/src/content/posts/deur-des-doods.md": () => import('./deur-des-doods_Ce4QhyW8.mjs'),"/src/content/posts/deur-des-doods_2.md": () => import('./deur-des-doods_2_BRFnfmGO.mjs'),"/src/content/posts/don-krieg-schild.md": () => import('./don-krieg-schild_MTLQLLoZ.mjs'),"/src/content/posts/een-nieuw-ontwerp-van-kady.md": () => import('./een-nieuw-ontwerp-van-kady_i8xhSVmi.mjs'),"/src/content/posts/fidget-toy2.md": () => import('./fidget-toy2_B0p6YrVy.mjs'),"/src/content/posts/grimwoud.md": () => import('./grimwoud_DPFgAHIl.mjs'),"/src/content/posts/hello-world.md": () => import('./hello-world_hKftGH-C.mjs'),"/src/content/posts/imtober.md": () => import('./imtober_DrAvD-d-.mjs'),"/src/content/posts/island-game.md": () => import('./island-game_DMkjcc2_.mjs'),"/src/content/posts/kady-fidget.md": () => import('./kady-fidget_vows9Mp6.mjs'),"/src/content/posts/lego-technic_1.md": () => import('./lego-technic_1_CA9tV2hl.mjs'),"/src/content/posts/leuke-dingetjes.md": () => import('./leuke-dingetjes_DF25PW8M.mjs'),"/src/content/posts/nago.md": () => import('./nago_BrNPEYTj.mjs'),"/src/content/posts/nieuw-burootje.md": () => import('./nieuw-burootje_BI_gMo8A.mjs'),"/src/content/posts/tekeningen.md": () => import('./tekeningen_CM2UCgGM.mjs'),"/src/content/posts/verder-werken-aan-de-switch.md": () => import('./verder-werken-aan-de-switch_ukHpQSaP.mjs'),"/src/content/posts/verjaardags-kroon.md": () => import('./verjaardags-kroon_CrXUkaPq.mjs')});
const collectionToRenderEntryMap = createCollectionToGlobResultMap({
	globResult: renderEntryGlob,
	contentDir,
});

const cacheEntriesByCollection = new Map();
const getCollection = createGetCollection({
	contentCollectionToEntryMap,
	dataCollectionToEntryMap,
	getRenderEntryImport: createGlobLookup(collectionToRenderEntryMap),
	cacheEntriesByCollection,
});

const $$Header = createComponent(async ($$result, $$props, $$slots) => {
  await getCollection("categories");
  return renderTemplate`${maybeRenderHead()}<header class="site-header" data-astro-cid-3ef6ksr2> <div class="container" data-astro-cid-3ef6ksr2> <div class="header-content" data-astro-cid-3ef6ksr2> <div class="site-brand" data-astro-cid-3ef6ksr2> <a href="/" class="site-title" data-astro-cid-3ef6ksr2> <span class="emoji" data-astro-cid-3ef6ksr2>😐</span> <span class="title" data-astro-cid-3ef6ksr2>Béla's Blog</span> </a> <p class="site-subtitle" data-astro-cid-3ef6ksr2>Allemaal dingetjes die Béla doet</p> </div> <nav class="main-nav" data-astro-cid-3ef6ksr2> <ul data-astro-cid-3ef6ksr2> <li data-astro-cid-3ef6ksr2><a href="/" data-astro-cid-3ef6ksr2>Home</a></li> <li data-astro-cid-3ef6ksr2><a href="/categories" data-astro-cid-3ef6ksr2>Categories</a></li> <li data-astro-cid-3ef6ksr2><a href="/archives" data-astro-cid-3ef6ksr2>Archives</a></li> </ul> </nav> </div> </div> </header> `;
}, "C:/Users/bruno/dev/belablog/src/components/Header.astro", void 0);

const $$Footer = createComponent(($$result, $$props, $$slots) => {
  const currentYear = (/* @__PURE__ */ new Date()).getFullYear();
  return renderTemplate`${maybeRenderHead()}<footer class="site-footer" data-astro-cid-sz7xmlte> <div class="container" data-astro-cid-sz7xmlte> <div class="footer-content" data-astro-cid-sz7xmlte> <div class="footer-info" data-astro-cid-sz7xmlte> <p data-astro-cid-sz7xmlte>&copy; ${currentYear} Béla. Allemaal dingetjes die Béla doet.</p> </div> <div class="footer-links" data-astro-cid-sz7xmlte> <a href="/" aria-label="Home" data-astro-cid-sz7xmlte>🏠</a> <a href="/categories" aria-label="Categories" data-astro-cid-sz7xmlte>📂</a> <a href="/archives" aria-label="Archives" data-astro-cid-sz7xmlte>📅</a> </div> </div> </div> </footer> `;
}, "C:/Users/bruno/dev/belablog/src/components/Footer.astro", void 0);

export { $$Layout as $, $$Header as a, $$Footer as b, getCollection as g };
