import { defineConfig } from 'astro/config';

// https://astro.build/config
import mdx from '@astrojs/mdx';

import alpinejs from '@astrojs/alpinejs';

// https://astro.build/config
export default defineConfig({
	site: 'https://ghall.space',
	output: 'static',

	integrations: [mdx(), alpinejs()],
	redirects: {
		'/posts/[...slug]': '/blog/[...slug]',
		'/blog': '/blog/page/1',
	},
});
