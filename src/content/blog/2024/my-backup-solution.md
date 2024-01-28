---
title: 'My Backup Solution'
pubDate: '1/27/24'
tags: ['Tech', 'Digital Life']
---

Backing up your data is probably the most important thing you can do with it. This is something I learned the hard way, a little over 10 years ago now, when I lost almost everything on a failed hard drive. Photos, school projects, personal projects, a bunch of terrible stories I wrote (to be fair, that last one wasn't a huge loss). It was then I decided to get serious about backing up, and scrounged up what little money I had at the time to buy a 500GB external drive.

Since then, though my backup solution has evolved, I haven't lost a single bit of data. Outside of my own stupidity of course, but that's another story...

My current backup solution is 2-fold:

First, my entire MacBook is backed up over my local network to an external 4TB drive connected to Mac Mini server using [Carbon Copy Cloner](https://bombich.com/).

Second, the Mac Mini server is then backed up to the cloud via [Backblaze](https://www.backblaze.com/).

To complicate things a tad, I also have a 1TB external SSD connected to the Mac Mini which I use as extra storage for files I don't really need on my MacBook, but still want to keep. This SSD is also backed up to the 4TB drive (via another install of Carbon Copy Cloner), and is thus included in the Backblaze backup.

I've opted to use Carbon Copy Cloner instead of Time Machine because it offers a lot more flexibility, both in scheduling and in how my backups are organized.

For example, the external SSD on the Mac Mini doesn't get written to a whole lot, so I have it scheduled to backup once a day. It's probably a little excessive for how often I actually need to save files there, but I figure it's better to backup more often than I actually need.

On my MacBook, I have it set to backup every 6 hours. I figured this was a good balance between safety and convenience. Most of my mission-critical work is code, which I commit to GitHub on a regular basis, and I'd rather not have to tie up my network every hour.

Finally, I have both these backups separated into their own folders on the 4TB drive for organizational purposes, which I don't think is possible, or at least not that easy to set up, with Time Machine.

But my solution is not perfect, and I have identified a few weaknesses in my setup:

Firstly, my backup is not bootable. This is more of a convenience than anything else, but because of how I have everything configured it's not possible to boot from my network backup.

Also, because my backups are over my local network, I can only backup from home. This isn't the end of the world since I don't often take my MacBook with me for more than a few hours but there have been instances where I've been away for a few days with it in tow. But again, it would be mostly an inconvenience because my mission-critical work gets pushed to GitHub regularly.

Thirdly, I don't have a great solution for keeping backups of my photos and anything else I have in iCloud. While both my local Photos library and the "Mobile Documents" folder–where macOS stores iCloud Drive locally–are included in the backup, the way iCloud handles files, and its overall reliability, makes me a little nervous. What if some of my photos are missing from the local library, or some document in my iCloud Drive isn't properly downloaded. I don't have a great solution to this, but I am open to suggestions. Please [hit me up on Mastodon](https://mastodon.social/@ghalldev) if you have any.

And finally, I don't have another offsite backup, so if my apartment burns down AND Backblaze for some reason loses all my data (which is an unlikely, but not impossible, scenario) I'm SOL. Even having a backup drive at a relative's house that I backup to once in a while would be better than relying entirely on local network backups and the cloud.

But if there's one thing I learned, and would like to impart on anyone who, in the year 2024, doesn't have a backup, is that _any_ backup is better than _no_ backup. It all depends on your risk tolerance and how much complexity you want to introduce. But I think, at the very least, backing up to an external drive connected to your computer is a must.
