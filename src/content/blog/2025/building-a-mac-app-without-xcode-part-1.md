---
title: 'Building a Mac App Without Xcode - Part 1'
pubDate: '12/1/25'
tags: ['Making Stuff', 'MacOS', 'Programming']
---

While I enjoy developing Mac apps, I find Xcode to be exceptionally clunky, especially when compared to the tools I use for web development. I thought it would be nice to be able to write and compile a fully-functional Mac application using any text editor, and without having to open Xcode.

So, I decided to try migrating my app, [AutoDock](https://github.com/ghall89/AutoDock), to this Xcode-free build process, and actually release it as the next update. I have a few requirements for this to be viable:

1. Whichever editor I use, I need access to the Swift language server.
2. The build process should produce a functional MacOS application bundle as a universal binary (for both Intel and ARM CPUs).
3. I should be able to use regular security features available to apps build with Xcode, like sandboxing, hardened runtime, etc.
4. The final binary should be signed with my developer certificate.

To prevent this blog post from being far too long, I’ve decided to split it up into multiple parts. This first part will focus on LSP support, and building the application bundle.

## Setting Up the Swift Language Server

Being the Mac nerd that I am, I felt it would be uncouth to not even try using BBEdit for writing and editing the actual Swift code. Thankfully, BBEdit has some pretty nice LSP support built in, so it was simply a matter of creating a symlink to the Swift language server in BBEdit’s ‘Language Servers’ directory:

`ln -s -f /Applications/Xcode.app/Contents/Developer/Toolchains/XcodeDefault.xctoolchain/usr/bin/sourcekit-lsp ~/Library/Application\ Support/BBEdit/Language\ Servers/sourcekit-lsp`

However, I found it to be a tad slow, so I opted for the lazy route and just installed [Zed’s Swift extension](https://github.com/zed-extensions/swift). There is also [one for VSCode](https://marketplace.visualstudio.com/items?itemName=swiftlang.swift-vscode), for anyone who wants to go that route.

However, now that I have it set up in BBEdit, I could just jump in and edit a file quickly if needed.

## Building the Application Bundle

With a bit of research, I found this tool called [Swift Bundler](https://swiftbundler.dev/). While it's possible to make it all work without this tool, it enables you to configure your app bundle with a simple .toml file, and will even scaffold out a starter project for you based on [a variety of templates](https://github.com/stackotter/swift-bundler-templates).

I created a new SwiftUI project with it, and copied the source code for AutoDock into the project. I also created a Taskfile.yml for my go-to task-runner, simply named [Task](https://taskfile.dev/) for running the various commands. This will especially come in handy for the later steps.

Aside from an error being thrown during build due to a possible race condition in my code (don’t know why Xcode never caught this 🤷‍♂️), everything worked almost perfectly. The only issues I ran into were the Dock icon not hiding (AutoDock is a menubar-based application), and the app not seeing the user preferences from the Xcode build.

The first issue was down to an issue with the documentation, or perhaps my misunderstanding of it. In order to add additional properties to the application’s Info.plist, such as setting `LSUIElement` to `true` for hiding the app’s Dock icon. My read of the documentation was that I should add the following to the `Bundler.toml`:

```
[apps.AutoDock.plist]
LSUIElement = "True"
```

However, upon doing a bit of digging, I found this was the correct way to add it:

```
[apps.AutoDock.extra_plist_entries]
LSUIElement = "True"
```

The second issue, the new build of AutoDock not being able to see the user settings from the Xcode build, is something I will have to dive into later, since I have the app in a state that I can begin testing in my everyday usage.

One huge benefit I noticed immediately was a significant reduction in bundle size. The Xcode build of AutoDock clocks in at 2 MB, which is by no means huge, but dwarfs the new build which clocks in at just 670 KB. It seems the only difference is an Assets.car file, which I assume holds images and such from the Assets.xcassets file, which in this case would just be redundant icon image files, and the app’s accent color, which I can define elsewhere.

*In the next part, I’ll tackle code signing and notarization.*
