---
title: 'A Note On File Naming Conventions'
pubDate: '9/26/25'
tags: ['Web Dev']
---

It seems like the common convention for naming component files in React and other JavaScript frameworks is to use `PascalCase` rather than `kebab-case`. This was the way I was taught, and this is the way it's been in every shared project I've contributed to. I sort of just took for granted that it was just done that way.

Recently though, while tinkering with my own little side-projects, I've started using `kebab-case` for all file names, including components. I think I prefer this method, it's something I'll be doing for all my own projects going forward[^1].

Not sure if this is a hot take, or if this is a more popular opinion than I realize. I did a little searching and found [it's certainly not an original take](https://www.reddit.com/r/reactjs/comments/s2wbfx/jsts_frameworks_file_naming_convention_camelcase/).

My biggest reasons for preferring `kebab-case` are readability, and avoiding potential issues with case-insensitive file systems, both of which seem to align with why other people share my preference.

Anyway, out of pure curiosity, I'm [running a poll](https://mastodon.social/@ghalldev/115271184813254936) on Mastodon to see what the general consensus is.

[^1]: Except for Astro projects, annoyingly.
