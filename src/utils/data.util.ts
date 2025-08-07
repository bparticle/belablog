import { getCollection } from 'astro:content';

export const formatDate = (pubDate: string) => {
	var options: Intl.DateTimeFormatOptions = {
		weekday: 'short',
		year: 'numeric',
		month: 'long',
		day: 'numeric'
	};

	return new Date(pubDate).toLocaleDateString('nl-NL', options);
};

export const sortPostsByDate = async () => {
	const posts = await getCollection('posts');
	
	return posts.sort((a, b) => {
		// First, check if either post is pinned
		const isPinnedA = a.data.isPinned === true;
		const isPinnedB = b.data.isPinned === true;

		// If one is pinned and the other isn't, prioritize the pinned one
		if (isPinnedA && !isPinnedB) {
			return -1;
		}
		if (!isPinnedA && isPinnedB) {
			return 1;
		}

		// If both are pinned or both are not pinned, sort by date
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