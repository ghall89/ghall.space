---
title: 'How I Learned to Stop Worrying and Love TypeScript'
pubDate: '2/21/24'
tags: ['Learning', 'Programming']
---

One of the first steps I took on my post-boot camp webdev journey was to learn TypeScript. It wasn't something that was covered–though I wish it had been, I'll get into why in a second–but it was something we were encouraged to study on our own. I immediately got frustrated, and determined that there was no point. Why would I need to go through the trouble of assigning types to my variables when it was all just getting compiled into vanilla JavaScript anyway?

Two major things happened since then that changed my tune; I learned Swift, and I started using Bun for personal projects.

First, I'll tackle Swift.

Learning Swift was both pretty straightforward coming from JavaScript. The syntax, while pretty different, has some concepts that were familiar to me. By the same token though, Swift is a statically-typed[^1] language and I found that difficult to wrap my head around at first–I had, after all, given up on TypeScript in frustration.

As I got more comfortable with Swift, I starte to miss the benefits of static typing when working in JavaScript. The ability to just tell my code "hey, this variable here is an integer" and have my code crash, or even just fail to even compile, with a super specific error when I inevitably do something stupid and try to treat that variable as a string is infinitely less frustrating than the alternative.

Secondly, there's Bun.

Bun is amazing, and I could write an entire post about how much I love working with bun. Heck, maybe I will, but that's something for another day...

The main thing about Bun that's relevant to my TypeScript journey is the fact that it can natively interpret TypeScript without having to compile to JavaScript. That means that right out of the box, with no dependencies, Bun can just run your TypeScript code just as easily as it can run JavaScript.[^2]

While any code getting shipped to the browser will still need to be compiled to vanilla JavaScript, you could, as I understand it, theoretically write your entire back-end in TypeScript and just skip the build step. 🤯

I started off being annoyed with using types in my code because, to be quite frank, they are annoying. They'll make your code throw errors whenever you try to multiply a string, or something silly like that. But that's part of the beauty I've come to appreciate. They're there to help you write better code, and to point you in the right direction when something inevitably goes wrong.

[^1]: [Here](https://stackoverflow.com/questions/1517582/what-is-the-difference-between-statically-typed-and-dynamically-typed-languages) is a StackOverflow thread on the difference between dynamic and static typing put far better than I ever could explain it
[^2]: As an example, I rewrote [my CLI clone of Wordle](https://github.com/ghall89/wordle-cli) in TypeScript
