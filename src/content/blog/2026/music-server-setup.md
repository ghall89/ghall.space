---
title: 'My Music Server Setup'
pubDate: '4/14/2026'
tags: ['Music', 'Tech']
---

For several months now, I've been running an old M1 Mac Mini (weird to think of that as old) as a music server. It's mainly served as source for me to bring into [Groove](https://grooveplayer.app), the iOS music app I've been building, but I've wanted to do more with it – namely, use it as a source of music for my stereo.

So, a little over a month ago, I moved the Mac Mini into my living room and connected it to my stereo system – that was the easy part.

The hard part was figuring out the software solution, which involved a lot of trial and error. I tried being a total nerd, and installed a few command line tools I could control via SSH, but that A: required me to control the music from my MacBook, and B: caused playback to stop if the connection was lost for any reason.

I also tried out media servers like Plex and Jellyfin, both of which not only ended up being overkill for my purposes, but ended up being clunky to control remotely. And, in the case of Jellyfin, it was very much a pain to set up, and it didn't organize music in a way that I liked.

In the end, I decided the best solution was probably the simplest, and figured I should just use the tools Apple provides out of the box. So, here is my final music server setup:

1. Music.app, with Home Sharing turned on – for playing music via the [Remote](https://apps.apple.com/app/itunes-remote/id284417350) app on iOS
2. [Sleeve](https://apps.apple.com/app/sleeve-for-spotify-music/id1606145041) – to handle Last.fm scrobbling
3. File sharing turned on – for importing music into [Doppler](https://brushedtype.co/doppler/) on Mac, and Groove on iOS

There are still a few things to iron out – primarily: adding music to the server entirely through the file system without having to use Screen Sharing, but also figuring out where the "source of truth" should be for my music library. But I think, for the most part, this is the best solution for my needs.
