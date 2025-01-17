---
title: 'Announcing AutoDock'
pubDate: '1/17/25'
tags: ['MacOS', 'Apps', 'Programming']
---
I'm a MacBook Air user who often uses a larger external display, and I have a, perhaps, idiosyncratic desire to have the dock always visible on the larger display at my desk, but prefer it hidden when using the smaller, built-in one.

While it's not all that inconvenient to manually swap the dock with a quick <kbd>opt</kbd> + <kbd>cmd</kbd> + <kbd>D</kbd>, I thought it would be cool to automate the process based on display size. I looked around for an app that would do this, and couldn't find one that worked reliably.

So, like any nerd with a bit too much free time, I thought I could make one myself. The problem is, I didn't know where to start, so I ended up putting the project off for months. Finally, last night I got a bit inspired to at least learn how to detect and read the displays connected to a Mac, which involved diving into the CoreGraphics API, something I was pretty unfamiliar with.

One thing led to another, and before I knew it I went from my original idea to working MVP in just a couple hours, which was not at all my plan. This morning, I had a few ideas to improve the UX which I then implemented and decided it was good enough to throw the 1.0 up online.

It's not perfect, but it's probably the first Mac app that I've made that I can say I'm truly proud of. The main thing I don't like is the fact that the app has to kill the Dock whenever autohiding gets switched on or off–though I've somewhat mitigated this by checking the Dock's current autohide status and only applying the changes if there's actually a change–but I'm not sure that's something that can be worked around. (If you do happen to know of a way, please [reach out to me on Mastodon](https://mastodon.social/@ghalldev) or [submit an issue](https://github.com/ghall89/AutoDock/issues/new?template=Blank+issue))

Finally, due to the nature of the app, it is not sandboxed. If there is a way to handle updating the Dock in a way that will allow me to enable sandboxing I will implement it, but, based on my limited knowlege of Mac development, I don't think that's very likely.

If the app sounds useful to you, and you'd like to try it out, you can install it via Homebrew with `brew tap ghall89/tap && brew install --cask autodock`, or [download it manually](https://github.com/ghall89/AutoDock/releases).
