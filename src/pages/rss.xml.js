import rss from '@astrojs/rss';
import { getCollection } from 'astro:content';
import sanitizeHtml from 'sanitize-html';
import MarkdownIt from 'markdown-it';
const parser = new MarkdownIt({ html: true });

export async function get(context) {
	const blog = await getCollection('blog');
	return rss({
		title: 'ghall.blog',
		description:
			'My personal blog about life, gaming, tech, and whatever else I feel like writing about.',
		site: 'https://ghall.blog',
		items: blog
			.sort((a, b) => Date.parse(b.data.pubDate) - Date.parse(a.data.pubDate))
			.map((post) => ({
				title: post.data.title,
				pubDate: post.data.pubDate,
				link: `/posts/${post.slug}/`,
				content: sanitizeHtml(parser.render(post.body)),
			})),
	});
}
