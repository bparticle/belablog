import rss from '@astrojs/rss';
import { getCollection } from 'astro:content';
import { AppConfig } from '@/utils/AppConfig';

export async function GET(context) {
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