import { z, defineCollection } from 'astro:content';

export enum Tag {
	'Apps' = 'Apps',
	'Digital Life' = 'Digital Life',
	'Gaming' = 'Gaming',
	'Learning' = 'Learning',
	'Life' = 'Life',
	'MacOS' = 'MacOS',
	'Music' = 'Music',
	'Making Stuff' = 'Making Stuff',
	'Mental Health' = 'Mental Health',
	'Movies & TV' = 'Movies & TV',
	'Programming' = 'Programming',
	'Tech' = 'Tech',
	'Tutorial' = 'Tutorial',
	'Web Dev' = 'Web Dev',
	// only for filtering
	all = 'all',
}

const blogCollection = defineCollection({
	schema: z.object({
		title: z.string(),
		pubDate: z.string().transform((str) => new Date(str)),
		tags: z.array(z.nativeEnum(Tag)),
	}),
});

export const collections = {
	blog: blogCollection,
};
