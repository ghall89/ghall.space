import { getCollection } from 'astro:content';

export function getSlug(input: string): string {
	return input
		.toLowerCase()
		.replace(/[^\w\s-]/g, '')
		.replace(/[\s_]+/g, '-')
		.replace(/^-+|-+$/g, '');
}

export interface Tag {
	value: string;
	slug: string;
}

export async function getTags(): Promise<Tag[]> {
	const posts = await getCollection('blog');

	const tags: Tag[] = [
		{
			value: 'All',
			slug: 'all',
		},
	];

	posts.forEach((post) => {
		post.data.tags.forEach((tag) => {
			const tagToAdd = {
				value: tag,
				slug: getSlug(tag),
			};

			if (!tags.includes(tagToAdd)) {
				tags.push(tagToAdd);
			}
		});
	});

	return tags;
}
