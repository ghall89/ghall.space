import { z, defineCollection } from 'astro:content'

const blogCollection = defineCollection({
	schema: z.object({
		title: z.string(),
		pubDate: z.string().transform((str) => new Date(str)),
		tags: z.array(
			z.union([
				z.literal('Apps'),
				z.literal('Gaming'),
				z.literal('Learning'),
				z.literal('Life'),
				z.literal('MacOS'),
				z.literal('Music'),
				z.literal('Making Stuff'),
				z.literal('Mental Health'),
				z.literal('Movies & TV'),
				z.literal('Programming'),
				z.literal('Tech'),
				z.literal('Tutorial'),
				z.literal('Web Dev'),
			])
		),
	}),
})

export const collections = {
	blog: blogCollection,
}
