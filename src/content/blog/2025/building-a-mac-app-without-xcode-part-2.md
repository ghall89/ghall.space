---
title: 'Building a Mac App Without Xcode - Part 2'
pubDate: '12/4/25'
tags: ['Making Stuff', 'MacOS', 'Programming']
---

While I enjoy developing Mac apps, I find Xcode to be exceptionally clunky, especially when compared to the tools I use for web development. I thought it would be nice to be able to write and compile a fully-functional Mac application using any text editor, and without having to open Xcode.

So, I decided to try migrating my app, [AutoDock](https://github.com/ghall89/AutoDock), to this Xcode-free build process, and actually release it as the next update. I have a few requirements for this to be viable:

1. Whichever editor I use, I need access to the Swift language server.
2. The build process should produce a functional MacOS application bundle as a universal binary (for both Intel and ARM CPUs).
3. I should be able to use regular security features available to apps build with Xcode, like sandboxing, hardened runtime, etc.
4. The final binary should be signed with my developer certificate.

To prevent this blog post from being far too long, I’ve decided to split it up into multiple parts. The [previous part](/blog/2025/building-a-mac-app-without-xcode-part-1) focused on LSP support, and building the application bundle. This part will focus on code signing, and uploading the application bundle to Apple for notarization so it can be distributed.

## Code Signing

If you’re going to be distributing your app, it’s important to have it signed and notarized for the security of your app and its users. This process adds a digital certificate to your app that becomes invalidated if your app is ever modified by, for example, a malicious actor. It also can be revoked by Apple if you’re found to be distributing malware, which you, if you’re not a scumbag, won’t have to worry about. 🙂

This, I thought, was going to be the most annoying part of working outside of Xcode. Apple does provide `codesign` and `notarytool` as part of the Xcode CLI Tools, but I just assumed using them would be a headache.

In order to sign an application, you need a certificate and, due to me not really knowing what I was doing, this was where I ran into trouble. I tried using my Apple Distribution certificate, which made intuitive sense to me at the time, and I didn’t run into any issues at first. I didn’t run into any errors, and verifying the signature showed everything as a-okay. So I continued...

## Notarization

For notarization, you have to use `notarytool` to upload either a ZIP file or a DMG disk image containing your application to Apple. I opted to go with a disk image, mainly because that was the method that was being used in the various Stack Overflow threads I came across. So, I created the disk image (I opted to use [create-dmg](https://github.com/create-dmg/create-dmg) to automate the process), and uploaded it to Apple. After a few moments, I received a response that my app was invalid.

I reached out for help on Mastodon, and [Dmitry Rodionov](https://mastodon.social/@rodionovd), a developer at [Sketch](https://www.sketch.com/), was kind enough to point me in the right direction. Turns out, the Apple Distribution certificate I was using not what I should be using, what I needed to to was create a Developer ID Application certificate – which was the only part of this whole process I used Xcode for - and use that instead.

I also want to shout out [David Bureš](https://mstdn.social/@davidbures), developer of [Cork]() – a must-have app if you use Homebrew – who’s response to my initial post asking for help is, I believe, how Dmitry found me. (I could be wrong, I just don’t want to leave anybody out 🙂)

So, I re-signed my application, created a new disk image, and uploaded that to be notarized by Apple, and just a few moments later I got a successful!

## Final Thoughts

Despite the challenges and quirks with trying to create Mac apps outside of Xcode, I think this is the process I’m sticking with going forward. The freedom to use the kinds of tools I’m more comfortable with is worth the drawbacks for me.

However, if I weren’t simply developing Mac apps as a hobby, and I didn’t enjoy the act of tinkering, I might be looking at those drawbacks very differently. It would be interesting to explore ways the developer experience can be improved, but that will have to be a project for another time.

Finally, for those who are interested in digging more into how I got this all to work, and perhaps follow my crazy example, I’ve created a [template repo on GitHub](https://github.com/ghall89/mac-app-template) you can check out.
