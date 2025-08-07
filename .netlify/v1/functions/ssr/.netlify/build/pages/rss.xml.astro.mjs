import rss from '@astrojs/rss';
import { g as getCollection } from '../chunks/_astro_content_Dppwx819.mjs';
import { A as AppConfig } from '../chunks/AppConfig_iPkZB19C.mjs';
export { renderers } from '../renderers.mjs';

async function GET(context) {
	const posts = await getCollection('posts');
	return rss({
		title: AppConfig.title,
		description: AppConfig.description,
		site: context.site,
		items: posts.map((post) => ({
			title: post.data.title,
			pubDate: post.data.date,
			description: post.data.description,
			link: `/posts/${post.slug}/`,
		})),
	});
}

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
	__proto__: null,
	GET
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
