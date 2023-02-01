import rss from "@astrojs/rss";
import { getCollection } from "astro:content";

export async function get(context) {
  const blog = await getCollection("blog");
  console.log(blog);
  return rss({
    title: "ghall.blog",
    description:
      "My personal blog about life, gaming, tech, and whatever else I feel like writing about.",
    site: "https://ghall.blog",
    items: blog
      .sort((a, b) => Date.parse(b.data.pubDate) - Date.parse(a.data.pubDate))
      .map((post) => ({
        title: post.data.title,
        pubDate: post.data.pubDate,
        // description: post.body,
        // Compute RSS link from post `slug`
        // This example assumes all posts are rendered as `/blog/[slug]` routes
        link: `/posts/${post.slug}/`,
      })),
  });
}
