---
title: 'Building Groove: Playback Queue and Gapless Audio'
pubDate: '6/22/2026'
tags: ['Programming', 'Apps', 'Learning']
---

It's been a few months since I launched my first iPhone app – a local-first music player called Groove – and it's been an interesting journey. I thought it would be fun to reflect on some of the challenges and successes I've faced building the app, and my journey to continually improve it.

In this post, which I plan to be the first in a series, I wanted to talk a bit about gapless playback, the playback queue – 2 features I knew _had_ to be in 1.0 – and the challenges I faced implementing them.

Because audio playback is a pretty core feature of a music player, the playback engine is among the oldest – if not _the_ oldest - code to make it into the final release, and I'm very much not proud of a lot of it. There is probably enough cause to do a rewrite at some point, but that's probably not in the cards until I do a 2.0 release.
## Playback Queue

To understand the challenges I faced with gapless playback, I first have to explain the playback queue. Both challenges are mostly solved with audio on Apple platforms with the AVAudioEngine API, but I quickly ran into limitations and I wanted to have more control over the  playback queue. Most importantly, I wanted the user to have full control over ordering the queue, as well as quickly remove or add items. My plan was, perhaps misguidedly, to use AVAudioPlayer and build a wholly custom queue.

So, my solution was a simple array with basic track info and a file path to pass to the audio player. This array serves as the single source of truth for the playback queue across the app, from the playback scheduler (which I'll get into in a bit), as well as the user interface. For persistence – so the user doesn't lose their queue if the app is forced into the background or is quit from the multitask switcher – a simpler version of the queue is stored, along with the currently playing track ID, shuffle/repeat state, and playback position, and is used to reconstruct the full queue when the app is relaunched.

One issue that is probably pretty clear if you've used Groove: how do I handle shuffling and unshuffling the queue without losing the original queue order?

There are a couple ways I could have done this, but my options were limited by the fact that the user has so much freedom to modify this queue. So, for example, I couldn't use something like album sorting to reconstruct the original order. In my opinion, the simplest way to handle this was to mirror the unshuffled array and just overwrite the main queue with this second queue if the user turns off shuffle. 

To simplify things, this "unshuffled queue" is only set when shuffle is turned on (before the actual shuffling happens, obviously), but this introduced another problem: what if the user adds or removes items from the queue while shuffle is on? My initial solution, which I've since changed in an update that may or may not be out by the time you read this, was to just treat the turning off "shuffle" as a reset of sorts. 

This new update, however, will change that behavior so any tracks removed from the shuffled queue will be simultaneously removed from the unshuffled order, and tracks added will be inserted relative to the currently playing track – meaning if the user wants a selected track to play next it will be inserted at `i + 1` in both arrays (`i` being the index of the currently playing track), and appended to the end of both arrays if the user wants it to play later.[^1]

## Gapless Playback

If there was one challenge in building Groove that could have derailed the entire project, this was it. On the surface, it seems like a simple problem. I naively thought as much myself, though I was quickly disabused of that notion. In fact, it took a few iterations – and some helpful feedback – after the 1.0 release to get it to a point that I'm happy with.

In the early builds, my solution was to have 2 instances of AVAudioPlayer – one being the active player, and one just standing by to swap in when the active instance finished playing. This was ok 90% of the time, but it totally fell apart if there were 2 songs that played into each other.[^2] Even without the overhead of loading a new file into memory, there was a tiny, yet painfully perceptible gap, between songs. 

The solution that shipped with 1.0 was a little better. Rather than relying on the current song ending to trigger the second audio player instance, I set up a custom timer that would trigger playback on the second audio player a fraction of a second before the first player ended, then seamlessly swap the second player into the first one and, if applicable, warm up the next player. 

This was fine, as far as I knew, until I was alerted by a user that gapless playback "wasn't working". After digging into the code a bit I found the problem was partially how I was calculating the timer for the second playback instance. Basically, the timer (either when starting the track from the beginning, or resuming from pause) would be calculated by taking the total length of the track and subtracting the current playback time, then adding that result to the current device time to determine the moment the next player should start. Because the result was being rounded to 1/10 of a second, if the wrong combination of the current time, song length, and playback position occurred, the next song could end up playing a tiny bit too late which, because of the precision involved, would create a perceptible gap.

I spent a couple days reworking the math, and doing lots testing on device (gapless playback never really worked reliably in the simulator at that point). I'd have it working just right, test it a few times, and then the audio would overlap too much, or not enough, and I'd have to start the whole process over. I'm not sure how many iterations I did, but it was far too many before it hit me…I should just add a tiny crossfade.

I can't recall if it was in 1.0, or if I added it in an update, but I had already implemented crossfade as a user-configurable option. When the setting was turned off, I'd just bypass the crossfade logic, so I just had to change a couple lines of code to make it all work. So now, even if you have crossfade turned off in settings, it's actually still very much on – it's just locked to 0.1 seconds. 

I later found out this is exactly how Spotify handles gapless playback, and I honestly felt silly for not having discovered this solution earlier. 

## Final Thoughts

None of this is meant to be a guide on how you should handle these problems. I'd never done anything with audio up to this point, so this has all been very much a learning experience for me, and I probably got a whole lot wrong. And even the stuff I got right was probably far too over-engineered thanks to my compulsive need to have granular control over the things I build – for example, I probably could have saved a lot of time and energy if I used AVAudioEngine, but I don't think I would have been happy with the results.

Much of the rest of the codebase is far less horrifying, with the possible exception of the madness that is my attempt to control the SwiftUI navigation stack. Some of that is due to me getting a far better grip of Swift, not to mention becoming a better programmer in general through this project. Though I think a big part of it was learning when and where to pick my battles, and when to just give in to Apple's APIs. Maybe that's something I can dive into in a future post…

[^1]: I'm still not 100% happy with this solution, and I'm very much open to suggestions for how to iterate on this.

[^2]: After the time I spent testing and iterating on gapless playback, I don't want to hear the transition between Green Day's Holiday and Boulevard of Broken Dreams again for at least another decade.
