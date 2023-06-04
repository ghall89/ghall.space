---
title: 'Thoughts on macOS'
pubDate: '6/4/23'
tags: ['MacOS', 'Tech']
---

So, as of this writing, WWDC 2023 kicks off _tomorrow_. As a web developer who’s recently started dabbling in Swift, and building apps for Apple platforms, I’m excited to see what gets shown off that I can start sinking my teeth into. On the other hand, as a longtime Mac user, I’m a little apprehensive about what we’ll see there.

Hardware-wise, the Mac is in a fantastic place. We’re 3 years into the transition from Intel to Apple Silicon, and the design aesthetic is changing up for the first time in like a decade (maybe more??). However, in terms of software, specifically macOS itself, we’re kind of in a weird place.

Just looking at macOS 13 Ventura, the latest version until the next one is most likely announced tomorrow, there are so many little oddities that range from minor annoyances to showstoppers. Some bugs introduced in the betas from last year, for example the infamous launch item notification bug, are _still_ present in the currently shipping version (13.4). Then there’s the mess that is System Settings, which received a major redesign last year for the first time since the Mac OS X betas from 23 years ago.

Then there are some long-standing issues, like a memory leak in the WindowServer system process that has existed since at least Monterey in 2021 (though I feel like I’ve been experiencing it longer). Or the fact that the TV app straight up doesn’t work most of the time.

Then there’s Launchpad (which may not be long for this world as the dedicated key on Apple’s keyboard has been replaced with Spotlight) which I’ve tried to use since it was introduced in Mac OS X Lion all the way back in 2010, but has a bug that will randomly just reorder the icons, which has been an issue since day 1.

One other long-standing issue that I’ve experienced is how unreliable network drives are. I have a Mac Mini set up as a home server, and the amount of times it’ll just fail to connect when I need to access one of the drives, or Time Machine just fails to recognize that there’s a network volume, is exceedingly frustrating.

The reliability of macOS varies so much from person to person. Some people experience just one, or maybe even none, of the issues I’ve mentioned. Others experience totally different issues that I’ve never run into. It’s just so wild that an operating system that has been around for 23 years (33 if you count NeXTSTEP as part of the lineage) has so many little issues. Yes, every piece of software has bugs, especially when working with the bogglingly large codebase of an operating system, but so many of what people encounter on the Mac are not small issues.

All this to say, my one wish for WWDC 2023 is that we _don’t_ see a new version of macOS, and if we do, it’s purely focused on fixing the outstanding issues (and, if we want to get really crazy, fixing the System Settings design). I doubt either of those will happen, but I can certainly dream.
