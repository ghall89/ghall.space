declare module 'astro:content' {
	export { z } from 'astro/zod';
	export type CollectionEntry<C extends keyof typeof entryMap> =
		(typeof entryMap)[C][keyof (typeof entryMap)[C]] & Render;

	type BaseSchemaWithoutEffects =
		| import('astro/zod').AnyZodObject
		| import('astro/zod').ZodUnion<import('astro/zod').AnyZodObject[]>
		| import('astro/zod').ZodDiscriminatedUnion<string, import('astro/zod').AnyZodObject[]>
		| import('astro/zod').ZodIntersection<
				import('astro/zod').AnyZodObject,
				import('astro/zod').AnyZodObject
		  >;

	type BaseSchema =
		| BaseSchemaWithoutEffects
		| import('astro/zod').ZodEffects<BaseSchemaWithoutEffects>;

	type BaseCollectionConfig<S extends BaseSchema> = {
		schema?: S;
		slug?: (entry: {
			id: CollectionEntry<keyof typeof entryMap>['id'];
			defaultSlug: string;
			collection: string;
			body: string;
			data: import('astro/zod').infer<S>;
		}) => string | Promise<string>;
	};
	export function defineCollection<S extends BaseSchema>(
		input: BaseCollectionConfig<S>
	): BaseCollectionConfig<S>;

	type EntryMapKeys = keyof typeof entryMap;
	type AllValuesOf<T> = T extends any ? T[keyof T] : never;
	type ValidEntrySlug<C extends EntryMapKeys> = AllValuesOf<(typeof entryMap)[C]>['slug'];

	export function getEntryBySlug<
		C extends keyof typeof entryMap,
		E extends ValidEntrySlug<C> | (string & {})
	>(
		collection: C,
		// Note that this has to accept a regular string too, for SSR
		entrySlug: E
	): E extends ValidEntrySlug<C>
		? Promise<CollectionEntry<C>>
		: Promise<CollectionEntry<C> | undefined>;
	export function getCollection<C extends keyof typeof entryMap, E extends CollectionEntry<C>>(
		collection: C,
		filter?: (entry: CollectionEntry<C>) => entry is E
	): Promise<E[]>;
	export function getCollection<C extends keyof typeof entryMap>(
		collection: C,
		filter?: (entry: CollectionEntry<C>) => unknown
	): Promise<CollectionEntry<C>[]>;

	type InferEntrySchema<C extends keyof typeof entryMap> = import('astro/zod').infer<
		Required<ContentConfig['collections'][C]>['schema']
	>;

	type Render = {
		render(): Promise<{
			Content: import('astro').MarkdownInstance<{}>['Content'];
			headings: import('astro').MarkdownHeading[];
			remarkPluginFrontmatter: Record<string, any>;
		}>;
	};

	const entryMap: {
		"blog": {
"an-update-on-my-ai-dating-profile.md": {
  id: "an-update-on-my-ai-dating-profile.md",
  slug: "an-update-on-my-ai-dating-profile",
  body: string,
  collection: "blog",
  data: InferEntrySchema<"blog">
},
"ask-the-darn-question.md": {
  id: "ask-the-darn-question.md",
  slug: "ask-the-darn-question",
  body: string,
  collection: "blog",
  data: InferEntrySchema<"blog">
},
"building-ghalldev-30.md": {
  id: "building-ghalldev-30.md",
  slug: "building-ghalldev-30",
  body: string,
  collection: "blog",
  data: InferEntrySchema<"blog">
},
"coding-with-depression.md": {
  id: "coding-with-depression.md",
  slug: "coding-with-depression",
  body: string,
  collection: "blog",
  data: InferEntrySchema<"blog">
},
"creating-a-dating-profile-with-ai.md": {
  id: "creating-a-dating-profile-with-ai.md",
  slug: "creating-a-dating-profile-with-ai",
  body: string,
  collection: "blog",
  data: InferEntrySchema<"blog">
},
"getting-out-of-your-comfort-zone.md": {
  id: "getting-out-of-your-comfort-zone.md",
  slug: "getting-out-of-your-comfort-zone",
  body: string,
  collection: "blog",
  data: InferEntrySchema<"blog">
},
"handheld-gaming.md": {
  id: "handheld-gaming.md",
  slug: "handheld-gaming",
  body: string,
  collection: "blog",
  data: InferEntrySchema<"blog">
},
"ileopard-a-retrospective.md": {
  id: "ileopard-a-retrospective.md",
  slug: "ileopard-a-retrospective",
  body: string,
  collection: "blog",
  data: InferEntrySchema<"blog">
},
"my-favorite-little-apps-part-2.md": {
  id: "my-favorite-little-apps-part-2.md",
  slug: "my-favorite-little-apps-part-2",
  body: string,
  collection: "blog",
  data: InferEntrySchema<"blog">
},
"my-favorite-little-apps.md": {
  id: "my-favorite-little-apps.md",
  slug: "my-favorite-little-apps",
  body: string,
  collection: "blog",
  data: InferEntrySchema<"blog">
},
"my-gunpla-adventure.md": {
  id: "my-gunpla-adventure.md",
  slug: "my-gunpla-adventure",
  body: string,
  collection: "blog",
  data: InferEntrySchema<"blog">
},
"my-macos-home-directory-overview.md": {
  id: "my-macos-home-directory-overview.md",
  slug: "my-macos-home-directory-overview",
  body: string,
  collection: "blog",
  data: InferEntrySchema<"blog">
},
"my-top-3-games-of-2022.md": {
  id: "my-top-3-games-of-2022.md",
  slug: "my-top-3-games-of-2022",
  body: string,
  collection: "blog",
  data: InferEntrySchema<"blog">
},
"nextjs-13-and-exploring-new-technologies.md": {
  id: "nextjs-13-and-exploring-new-technologies.md",
  slug: "nextjs-13-and-exploring-new-technologies",
  body: string,
  collection: "blog",
  data: InferEntrySchema<"blog">
},
"nostalgia.md": {
  id: "nostalgia.md",
  slug: "nostalgia",
  body: string,
  collection: "blog",
  data: InferEntrySchema<"blog">
},
"on-text-editors.md": {
  id: "on-text-editors.md",
  slug: "on-text-editors",
  body: string,
  collection: "blog",
  data: InferEntrySchema<"blog">
},
"reflecting-on-building-my-first-app.md": {
  id: "reflecting-on-building-my-first-app.md",
  slug: "reflecting-on-building-my-first-app",
  body: string,
  collection: "blog",
  data: InferEntrySchema<"blog">
},
"using-tailwind-with-mui-base.md": {
  id: "using-tailwind-with-mui-base.md",
  slug: "using-tailwind-with-mui-base",
  body: string,
  collection: "blog",
  data: InferEntrySchema<"blog">
},
},

	};

	type ContentConfig = typeof import("../src/content/config");
}
