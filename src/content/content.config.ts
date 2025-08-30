import { z, defineCollection } from 'astro:content';

const blogCollection = defineCollection({
	schema: z.object({
		title: z.string(),
		pubDate: z.string().transform((str: string) => new Date(str)),
		tags: z.array(z.string()),
	}),
});

export const collections = {
	blog: blogCollection,
};
