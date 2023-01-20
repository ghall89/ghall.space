---
layout: ../../layouts/BlogPost.astro
title: "Building ghall.dev 3.0"
pubDate: 2022-10-16
---

Welcome to my brand new website, the 3rd iteration of ghall.dev! For the last year-and-a-half this has simply been home to my portfolio, but for a while now I’ve wanted to expand from a simple, single-page site to a multi-page site with a blog (which you are of course reading right now).

In the previous version of this site, I coded myself into a corner. I did a lot of little things I thought were cool, but maybe weren’t the best ideas design-wise, and put things together in such a way that I couldn’t simply tweak things very easily. One of the lessons I took from the experience of building and maintaining that site was to keep things simple, and not try to be too flashy for the sake of being flashy.

Another lesson I took was to plan ahead for any changes. I didn’t really think about wanting to start a blog until after the site was up, and if I had made things a little easier by planning for future changes it probably wouldn’t have taken a “nuke-and-pave” to cleanly integrate a blog.

I’m also a much better developer than I was when I built version 2. Not saying I’m amazing, I’ve only been at this since late 2020 after all, but I’ve learned a lot about coding, and organizing code in a way that makes sense. Of course, a year from now I’ll be wondering what the heck I was thinking when I originally wrote the code for this site.

Anyway, the first step to any project like this is deciding on the tech stack. As this is a solo project, being my personal site and all, I had a bit of leeway to experiment with different pieces of that puzzle, but I decided on the following:

### Front-end Framework: Next.js

I’m a relative newcomer to Next.js, as I’ve only been using it for about 2 months now. But the learning curve was really low coming from React, and I was able to pick it up pretty quickly when I started my current job.

I prefer it to straight React in a few ways, one of the biggest being how easy it is to set up a multi-page site like this. While it’s definitely possible in React, Next.js makes it painfully simple. It was a no-brainer, and it got me rolling so fast I was able to built this website in a matter of days.

[Check out Next.js](https://nextjs.org/)

For styling, I went with good old Tailwind, which I also used on the previous iteration of my site. I’m a very visual person, and Tailwind makes it so easy for me to just built the designs I have in my head.

[Check out Tailwind](https://tailwindcss.com/)

### Headless CMS: Cosmic

On the previous iteration of my website, I had built a rudimentary CMS in the command line using M3O for a database, which I then served to the front-end through a small API I built. It was slow and clunky, but it was good enough for periodically updating my portfolio. But, when M3O changed their pricing model, this system became economically infeasible, so I switched to essentially hardcoding my portoflio into my sourcecode, which was something I wanted to avoid. Also, it made the fact I was building my front-end in React a little silly since I had eliminated the one bit of dynamic content on my website. But it was serving its purpose, so I left it.

For this new iteration, since I wanted to not only go back to managing my portfolio on the back-end, but also build a blog, I knew the best thing to do was to find a pre-packaged solution so I could spend more time focusing on my strengths.

[Check out Cosmic](https://www.cosmicjs.com/)

### Final Notes

There are a couple little Node packages I’ve used to make things a little easier, such as [date-fns](https://date-fns.org/), [react-jsx-parser](https://github.com/TroyAlford/react-jsx-parser), and [Framer Motion](https://www.framer.com/motion/). I particularly had fun with Framer Motion, but I ended up really toning down some of the animations.

Also, I ended up using the ever-popular VS Code as my text editor instead of my usual go-to, [Nova](https://nova.app/). I started using VS Code again for the first time since early 2021 because of work, and I quickly got spoiled by a lot of the autocomplete features, expecially automatic imports. There will definitly be a breakdown of my thoughts about VS Code vs Nova at some point in the future.

---

_This post was originally published on my (now defunct) blog on my portfolio site [ghall.dev](https://ghall.dev), and was republished here for archival purposes._
