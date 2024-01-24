import { z, defineCollection } from 'astro:content';

const blogCollection = defineCollection({
	schema: z.object({
		title: z.string(),
		pubDate: z.string().transform((str) => new Date(str)),
		tags: z.array(
			z.enum([
				'Apps',
				'Gaming',
				'Learning',
				'Life',
				'MacOS',
				'Music',
				'Making Stuff',
				'Mental Health',
				'Movies & TV',
				'Programming',
				'Tech',
				'Tutorial',
				'Web Dev',
			])
		),
	}),
});

export const collections = {
	blog: blogCollection,
};
