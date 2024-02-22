import { z, defineCollection } from 'astro:content';
import { Tag } from 'src/types';

const blogCollection = defineCollection({
	schema: z.object({
		title: z.string(),
		pubDate: z.string().transform((str: string) => new Date(str)),
		tags: z.array(z.nativeEnum(Tag)),
	}),
});

export const collections = {
	blog: blogCollection,
};
