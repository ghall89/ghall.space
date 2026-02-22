---
title: "An AI Skeptic's Take on Agentic Coding"
pubDate: '2/21/2026'
tags: ['Tech', 'Programming']
---

As part of OpenAI’s latest effort to push their agentic coding tool, Codex, I was able to snag a free month of access to the latest models. So, I thought it would be an interesting opportunity to experiment, actually do a deep dive on coding agents, and gain a better understanding of their capabilities and limitations.

Firstly, I want to address the fact that I’ve been very vocal in my disdain for AI tools, but at the same time I’ve come to accept that these tools are here to stay, at least for the time being. Therefore, I want to experience them first-hand to give myself the most informed opinion I can. Though, as always, my opinion is subject to change, and it’s very likely I will swing back more towards the anti-AI side before long. 😅

I had three main use-cases I wanted to try out; making incremental changes to an existing codebase, converting an app from one language to another, and creating a new project from scratch.

First up, I took a music player app I’ve been working on for the last several weeks. I was having difficulty processing large batches of audio files efficiently, so I asked Codex to come up with some ideas to improve what I had wrote. It took a couple minutes to process everything, but it spat out some code and asked me to approve the changes.

It all looked good to me, so I gave it the OK, and ran the application. I was pretty impressed by the results, so I decided to take it a step further, and use it to implement a feature from scratch. So, I prompted it to create an audio playback queue, and connect it to the UI that I built. In less than 10 minutes, I had a very rough implementation of the feature up and running.

There were some structural changes I had to make to the batch processing code to be more reusable, and I still have a chunk of work to do on the playback queue, but Codex got me a lot further along than I would have got otherwise.

The other two use-cases – converting code from one language to another, and creating a project from scratch – were more along the lines of what I expected from Codex going in.

The code conversion experiment involved porting my app [KeyStash](https://github.com/ghall89/KeyStash) (an app for storing software license keys) from macOS to the web. While it did a serviceable job translating data structures, and approximating the UI, it made a lot of sloppy mistakes, like using an old and vulnerable version of Next.js, and referencing variables it didn’t even create. It even tried creating an image upload mechanism that not only didn’t even work, but wasn’t even a sensical addition. [^1]

My final experiment was pointing it to an empty directory and telling it to create a web-based rich text editor that can import and export .RTF files. It did a far better job with file uploads than the last experiment, but everything else was pretty poorly implemented. Though, it did manage to pull in more up-to-date dependencies. Also, while I wouldn’t call the code unreadable, I certainly would not want to maintain it.

Of the three use-cases, the only one I can see as being remotely useful for anything, beyond just messing around with experiments like these, is making incremental changes to an existing codebase. These tools seem to be at their best when generating small bits of code with as much context as possible, and, incidentally, the cognitive load required to review its output is so much more manageable.

It’s crystal clear to me how generating swathes of code – either ported from an existing codebase, or starting from a blank-slate – is a recipe for poor maintainability. Even the relatively simple rich text editor that I “vibe coded” had enough code to sift through and debug that I probably would have been better off just writing it myself in the first place. If you’re of the belief that a developer should be responsible for the code they ship, regardless of if it was written by hand or an LLM[^2], it’s easy to see how that model of development is grossly unsustainable.

All that being said, it’s incredibly tempting to utilize these tools for just building stuff quickly, and dealing with the consequences later. I get why it’s so appealing, and I have found myself struggling – and occasionally, failing – to resist that temptation. However, every time I gave in to that temptation, I found myself extremely unhappy with what was produced. I think “slop” would be a perfectly accurate word to describe it.

I think it’s important to remember, these tools aren’t magic, they’re exactly what they are – tools. Like any tool, they have a purpose that they’re good at, and you have to know when, and how, to use them properly. This technology is all so new; I think we’re all still trying to figure out what “properly” means, and it’s sensible to be skeptical at this point. Anyone who tells you otherwise, or says that you’ll be left behind if you don’t jump on the bandwagon now, is lying to you.

[^1]: I can only assume it was trying its best to “recreate” the functionality in KeyStash that grabs app icons when adding a new license key to the Mac version of KeyStash, without having any access to system APIs or the file system. 🤷‍♂️

[^2]: And if you’re not, maybe find a different career. Sorry, not sorry.
