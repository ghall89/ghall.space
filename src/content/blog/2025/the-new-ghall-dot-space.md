---
title: 'The New ghall.space'
pubDate: '9/1/25'
tags: ['Meta', 'Programming', 'Web Dev']
---

It's been a while since I originally built this website, which started life as a little project to learn the, at the time, brand new web framework Astro. My skills in web development have improved greatly in that time, as has the functionality of the Astro framework. Therefore, I thought it would be a fun project to make some improvements to the site, both visually and in how the codebase is structured.

One of the biggest front-facing changes I've made, aside from new typography and some layout adjustments, is a mobile-responsive navigation bar. Mobile is always something I've been conscious of when building this site, but I opted for a simplified approach by ensuring the site was usable on mobile without introducing many responsive elements. But as the site morphed from a simple blog to a more generalized space on the internet (hence the ".space" TLD), I've discovered the limits of that design philosophy.

Behind the scenes, there have been a few changes as well. I originally built this site with Astro version 1.6.13, and I have periodically upgraded it over time. Today, it's using Astro 5.13.3, and while it's a credit to the Astro framework that the codebase for this site has seen very few upgrade-related changes over the various versions, some annoying tech debt has been building up – especially around [content collections](https://docs.astro.build/en/guides/content-collections/), which the blog section of this site relies on, and has been coasting along on legacy support for a previous implementation.

Finally, I didn't fully appreciate Astro's support for scoped styles when I originally built this site. I pretty much dumped everything in a _global.css_ file, which would have been fine, but over time I started using scoped styles and it became a bit confusing where the styles for various elements were. So, as part of this revamp, I finally moved CSS that should be scoped into its respective page or component files.

This is far from the final version of this revamp, but I think the design and structural changes will make it much easier to improve and build upon what's here. Addressing the tech debt will also allow me to make use of some newer features, especially around content collections, and hopefully make future upgrades to the Astro framework and its associated dependencies more painless.
