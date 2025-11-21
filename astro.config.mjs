import alpinejs from "@astrojs/alpinejs";

// https://astro.build/config
import mdx from "@astrojs/mdx";
import { defineConfig } from "astro/config";
import pagefind from "astro-pagefind";

// https://astro.build/config
export default defineConfig({
	site: "https://ghall.space",
	output: "static",
	markdown: {
		shikiConfig: {
			themes: {
				light: "github-light",
				dark: "github-dark",
			},
		},
	},
	integrations: [
		mdx(),
		alpinejs({ entrypoint: "/src/entrypoint" }),
		pagefind(),
	],
	redirects: {
		"/posts/[...slug]": "/blog/[...slug]",
		"/blog": "/blog/page/1",
	},
});
