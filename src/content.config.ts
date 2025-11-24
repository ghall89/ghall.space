import { defineCollection, z } from 'astro:content';
import { glob } from 'astro/loaders';

const blogCollection = defineCollection({
	loader: glob({ pattern: '**/*.md', base: './src/content/blog' }),
	schema: z.object({
		title: z.string(),
		pubDate: z.string().transform((str: string) => new Date(str)),
		tags: z.array(z.string()),
	}),
});

export const collections = {
	blog: blogCollection,
};
