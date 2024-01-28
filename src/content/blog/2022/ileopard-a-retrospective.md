---
title: 'iLeopard - A Retrospective'
pubDate: '2022-12-26'
tags: ['Tech', 'MacOS', 'Making Stuff']
---

I few months ago I rediscovered among some old project folders the source code and markdown files for an old blog I ran in the early 2010s. With nothing to do on the afternoon of Christmas Eve, which was a brisk 15°F, I decided I wanted to search through and try to find a rather lengthy retrospective I wrote on Star Trek: The Next Generation. Now that I’ve finally started up a new blog I thought it would be fun to touch it up and republish it, since I put so many hours worth of work into it back in the day. Upsettingly, it was not there.

But I did find a rather salty post I wrote about a Mac theme I created back when I was a senior in high school. I thought it would be nice to go back and take a fresh look at the project, and how I feel about it now, being another 10 years removed from it.

If you were around the Mac customization scene–specifically on the now-defunct MacThemes.net–around 2007, you probably remember a little project called iLeopard. Admittedly, the chance that you’re in that extremely specific niché is incredibly small. The best data I could find is this [Ars Technica article](https://arstechnica.com/gadgets/2007/03/7296/) from March 2007 saying the Mac hit about 6% marketshare. And only a tiny subset of those users even had the thought that customizing the look of Mac OS X was something they wanted to do.

<img src="/media/ileopard/mac-os-10-1.png" width="90%" alt="a screenshot of Mac OS X 10.1 with various apps open" />

*Mac OS X 10.1 and the Aqua Interface, from* [_GUIdebook_](https://guidebookgallery.org/screenshots/macosx101)

I was one of the few that had that had that idea pop into my head. I was super into finding and downloading cool themes, including one I distinctly remember that looked like Windows Vista for some reason. It was 2007, the Aqua Interface (the playful, plastic-looking interface style Apple used for about a decade) was already feeling a little passé to me. I wanted something new, and weirdly enough that new thing came from Apple, in the form of iTunes 7.

<img src="/media/ileopard/itunes-7.gif" width="80%" alt="a screenshot iTunes 7 with the iTunes Music Store open" />

_iTunes 7 screenshot, from [AppleInsider](https://appleinsider.com/articles/06/09/12/apple_introduces_itunes_7_previews_itv_device)_

In retrospect, and with the hindsight of 15 years of UI design evolution, it’s not exactly pretty, but I liked it at the time. It was classy, and simple, and I thought it was the future of the Mac OS X design language.

Fast-forward to the release of Mac OS X Leopard, and I was disappointed to see that the bubbly, lick-able scrollbars and buttons were still quite prominent. Having dabbled in the Mac OS X theming scene already, I decided to take matters into my own hands.

There was a small problem though. With the release of Leopard, Apple changed the format the system used for UI resources, and introduced a new framework to power it all, called CoreUI. The tools that had existed to make theming the OS relatively simple were useless.

If you’re curious, [here’s a writeup](https://arstechnica.com/gadgets/2007/10/mac-os-x-10-5/10/) from John Siracusa’s Mac OS X Leopard review about CoreUI, which was, if I recall, what served as the starting point on the road to being able to even locate the system files I needed to crack open.

Now, just as a heads up, most of what follows is based on memory and a fairly cringy blog post I wrote 10 years ago and found in the bowls of my digital archives. Also, my memory on the timeline is a bit fuzzy, but with some digging I found that this mostly takes place between April and June 2008.

Basically, the main barrier to theming Mac OS X Leopard were 2 files; ArtFile.bin, and SArtFile.bin. This is where nearly all the UI resources were stored, aside from scroll bars, which were stored in a file called Extras.rsrc, a file that had been cracked ages before. If I recall–and I could be totally wrong so if anybody knows better feel free to tell me–Extras.rsrc, and its sister file Extras2.rsrc, still contained all the UI resources, but only the scrollbars were actually used by the system.

I want to make it clear that I can’t take the credit for cracking open ArtFile.bin and SArtFile.bin. I believe it was someone on the MacThemes.net forum, and I wish I could remember or find their name–if you’re out there reading this, thank you! Those files were essentially encrypted ZIP files, and this genius of a human build a command line tool to decrypt and extract them. This was actually the experience that got me comfortable with the command line, and we’ll say indirectly led to my current career as a web developer, but I digress…

Anyway, I knew where to find the files. I had the tool to decrypt the files. The only thing that stood in my way was the mass of nonsensical folder names filled with equally nonsensically named bitmap images that got extracted from the files.

Being that I was a bored teenager in high school with way too much time on my hands, I decided to figure out exactly what every bitmap image was by methodically changing the graphics to the most garish colors I could, recreating the bin files–which if I recall was as easy as zipping them up and renaming them, but this was 15 years ago so I could definitely be misremembering–restarting my computer, and hunting down the various neon hues while taking notes.

After dozens of restarts, and a couple corrupted OS installs, I had figured out a good chunk of the building blocks making up Leopard’s UI. Even still, after weeks of this, there was still so much to be done. Bear in mind, there was no documentation on any of this stuff. I was about to create, as far as I know, the first theme for Mac OS X Leopard.

<img src="/media/ileopard/ileopard-2-0-1.png" width="75%" alt="a screenshot of the Mac OS X Appearance preference pane showing off the modifications made by iLeopard" />

_iLeopard 2.0.1 screenshot, from [AmazingHenry on MacRumors](https://forums.macrumors.com/threads/ileopard-theme.2045553/), released by fellow MacThemes.net user ‘gcamp' after I essentially handed off the project_

I started pulling elements from iTunes, and, using a “totally legal, I swear” copy of Adobe PhotoShop, tweaked them to fit in their new home. I shared the very first version of the theme, which I called iLeopard, a portmanteau of iTunes and Leopard, on the MacThemes.net forum (thankfully archived [here](https://web.archive.org/web/20080702015727/http://macthemes2.net:80/forum/viewtopic.php?id=16785679&p=1) by the Wayback Machine!!), and it kind of took off more than I expected. By that, I mean people actually used it. Then it made the MacThemes.net front page. Yeah, it was all a bit overwhelming.

At some point, I got an offer to help out with the theme from fellow forum user ‘gcamp’. This was probably the best possible thing to happen for the longevity of the theme. He initially started by contributing custom graphics, and ended up taking the reigns on the project after I graduated high school and lost my passion for the project. He kept the project alive, I believe until Apple effectively killed Mac theming for good a few releases later.

The sad news is I lost all my original work on iLeopard, along with countless other digital relics from that era of my life, when my MacBook suffered a major hard drive crash in 2011. I had to go on a crazy archeological dig through the internet just to find the above screenshot, and it’s from after I handed off the project. I did reach out on Mastodon on the extremely off-chance that someone had some more screenshots, or even a pre-2.0 installer, but I haven't got back anything substantial as of this writing.

What’s been interesting as I’ve written and researched this piece is the contrast between the Apple of 15+ years ago, and the Apple of today. It was a weird time, they had just completed transitioning the Mac from PowerPC to Intel–interestingly, we’re currently in the midst of a transition from Intel to Apple Silicon–and the first iPhone was brand new.

Security on the Mac was pretty laissez-faire, to the point where a dorky high school kid could modify system files and create a simple tool to let other people install those modifications. These days, as a more security-conscious user, that idea horrifies me. But at the same time, I do miss being able to tinker with the little parts of software that weren’t made to be tinkered with.
