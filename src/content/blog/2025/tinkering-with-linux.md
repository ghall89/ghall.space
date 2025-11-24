---
title: 'Tinkering With Linux'
pubDate: '10/27/25'
tags: ['Tech', 'Linux']
---

For the last 8 or 9 months, I've been experimenting on and off with Linux. Specifically Fedora (via Asahi Linux) for those who are curious. I installed it on an M1 MacBook Air, which I keep around as an emergency backup, and I've been mostly pleased with how well it's been running.

Most of the time I've spent with this Linux environment has just been tinkering, installing apps, and getting things like git and OhMyZSH set up and configured the way I like it. I haven't really had the chance to do anything productive or useful with it yet[^1], and so I don't have a fully informed opinion on the experience of using Linux as a daily driver. But I wanted to give my impressions, share potential difficulties I might have if I ever decide to make the full switch, and why I would even consider the possibility of making that switch.

So, to start, why am I even exploring Linux?

Well, aside from my curiosity when it comes to all things tech, I'm also concerned about the direction of the Mac, and Apple as a company. Between the success of the iPhone, and the leadership of Tim Cook, I feel Apple has lost much of what made it special. I hesitate to use the words "heart" or "soul", since I don't think those words are appropriate for a corporation, and Apple has been a pretty corporate entity since the days of the Apple II, albeit one that [once flew a pirate flag on its campus](https://www.folklore.org/Pirate_Flag.html?sort=date?sort=date).

While Apple certainly had its flaws under Steve Jobs, I struggle to see a reality where that Apple would have donated money to destroy part of an historical building for one man's vanity project, or given that same man a golden statue.

And, even if you disagree with me on that, you can't deny that Apple's former attitude of "build great products, and the money will follow" has long since gone out the window. They still make world-class hardware, and I would argue that their Mac hardware is better than it has been in a _very_ long time, but their software has been slowly deteriorating. There was a time when Apple would delay software, especially a new OS, if it wasn't quite ready, and they wouldn't dream of aggressively pitching their various subscription services via notifications or system settings. Today's Apple will pump out multiple new OSes every September like clockwork, damn the consequences, and will prioritize whatever will bring more money to their coveted "services revenue".

Anyway, that's my long-winded way of saying that, if current trends continue, making the jump to Linux seems more like a "when" than an "if". For the sake of the Mac, I hope things change, but I won't be overly optimistic unless there are some leadership changes at Apple.

What do I think of Linux, then?

The thing that stands out to me the most about Linux is the level of customization, and while the default experience (in KDE Plasma at least) is very Windows-coded, that customization means I can craft something close to the Mac experience that I'm used to. I was able to do things like move the window controls to the left side, as God intended, and turn the top "panel" to something more akin to the macOS menu bar[^2].

It's also very fast. Granted, I am running it on an M1, and I don't have much in the way of background utilities and such running like I do on macOS, but Linux just feels so much more snappy and responsive. It doesn't seem like it's more memory-efficient than macOS, it seems to be using about 7ish GB of memory, out of the 8GB total in this MacBook, and even utilizing some swap, with just a web browser, terminal, and text editor open, but perhaps that's expected behavior on Linux.[^3]

However, the largest barriers I can see to using Linux as a daily driver are the user experience, and the community.

Perhaps this is due to the sheer level of customization on offer, but the Linux experience just doesn't compete with the Mac, even compared to macOS Tahoe. While I will admit my configuration looks a lot nicer to my eyes than the new Liquid Glass design, it's missing a lot of the little touches. Dragging windows feels slightly clunky in a way I'm not sure I can describe in words, and in many cases text rendering doesn't look as smooth or consistent. Also, many apps don't visually behave like you'd expect, like the aforementioned menu behavior, or they render their own window chrome, overriding the system and, as a result, your customizations.

I also feel very much embedded in the Mac community, and that's a major aspect of what keeps me on the platform. From the many small companies and solo devs making great indie or open-source software, to the friends and acquaintances I've met online, and beyond. I'm sure much of that is some combination of tribalism and stereotypes, which, as we know, has _never_ been the source of close-minded attitudes (super big "/s" for those with broken sarcasm detectors). But that community is, I think, the lifeblood of the Mac, and it survived the dark days of 90's Apple, but if Apple continues to turn its nose up at that community I do wonder how much longer that community will be willing to stick around as much as it has been.

Given the course of Apple as a company, as well as its products, in addition to my own values around supporting and creating independant software, I feel it would be irresponsible of me to not keep tabs on Linux, and keep it in my back pocket as an alternative.

I do, however, have some questions for the Linux community if any of you haven't been driven away from this post in anger or annoyance:

- Is there a universal way to customize keyboard shortcuts to more closely match the Mac, for example making copy `command + C` instead of `control + C`?
- Is there some setting I'm missing to tell apps with custom window chrome to respect the system settings? Same for displaying the "Global Menu".
- Are there any decent app launchers like Raycast that have things like snippets and clipboard history?

Feel free to reach out to me on [Mastodon](https://mastodon.social/@ghalldev).

[^1]: However, to continue my series of gimicky posts, like when I [wrote about the Mac using Mac OS 7](/blog/2024/ramblings-on-the-macintosh), and [wrote about taking intentional analog time with pen and paper](/blog/2025/intentional-analog-time), I'm writing this blog post in Linux.

[^2]: This annoyingly does not work for all apps, but I'm probably missing something obvious.

[^3]: Of note, the Plasma shell itself seems to be the most memory intensive process, using about 500MB of RAM, which seems more than reasonable.
