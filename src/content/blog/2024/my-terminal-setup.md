---
title: 'My Terminal Setup'
pubDate: '3/9/24'
tags: ['MacOS', 'Tech']
---

The command line is something I've tinkered with for years. Ever since I discovered Terminal.app in the Utilities folder on my PowerBook G4 back in the day, I've been curious about the kinds of things I could do with it. For most of that time, I've really only used it to change hidden settings, and run tools like 'diskutil', but since entering the world of software development the terminal has become an indispensable tool.

One of the things I enjoy about the terminal is how customizable it is. If you're on macOS like I am, it can be a nice little reprieve from the relatively locked-down GUI. As such, I've had a lot of fun tweaking the Unix underpinnings of the Mac to my own preferences.

### The Basics

To start off, let's look at the basic setup. Though macOS comes with the built-in Terminal.app I mentioned earlier, I prefer to use an app called iTerm 2(https://iterm2.com). There are a lot of alternative terminal emulators out there, and I've tried most of them, but I keep coming back to iTerm because it just feels at home on the Mac in the way Warp, Alacritty, and the like, just don't.

For the shell itself, I use ZSH, which is what ships by default on Mac. I'll admit I'm not sure what the pros and cons are versus something like Bash, but it works for me. I also use [ohmyzsh](https://github.com/ohmyzsh/ohmyzsh) for an extra level of customization.

Finally, I use [Homebrew](https://brew.sh) for my package manager. That seems to be the go-to solution for Mac. I use it to not only install and manage the CLI tools I use, but also any GUI apps I install outside the App Store. There's even a nice little app called [Cork](https://github.com/buresdv/Cork) which is a GUI app that makes dealing with Homebrew a lot nicer.

### Themes and Plugins

Using ohmyzsh opens the door for a lot of easy customization. One of the other tools I use is [Powerlevel10k](https://github.com/romkatv/powerlevel10k), which can be used with or without ohmyzsh. This allows you to create a theme by mixing and matching several preset options. I went with a pretty barebones, minimal look, but you don't have to go that route.

For plugins, I use [zsh-autocomplete](), which is basically a search function and autocompletion for terminal commands. I also use [zsh-syntax-highlighting](), which not only adds a bit of color, but can be useful as well because it will color code valid commands in green and invalid ones in red.

### Useful Tools

There are also a handful of useful tools I have installed that make using the command line a much more pleasant experience. I'm going to skip over ones like git and Homebrew, they're pretty much a necessity for developers, and instead focus on some tools I'd consider nice to have.

All of these tools can be installed via Homebrew.

**gum**

This isn't so much a standalone tool as it is a way to easily add some interactivity to shell scripts. You can easily add text inputs, confirmation dialogs, list selections, and even loading spinners to your shell scripts. There's a lot, so I'd suggest checking out [the readme](https://github.com/charmbracelet/gum/blob/main/README.md) to see if it's something you'd find useful.

**mas**

A CLI for the Mac App Store. It may seem a little redundant, but I find it a much more reliable way to update apps installed via the App Store since auto-update seems pretty hit-or-miss, and many times updates will not show for me at all in the GUI interface. Simply running `mas upgrade` will find and install updates much more reliably in my experience.

**thefuck**

Even with all my autocomplete and syntax highlighting shenanigans, I still sometimes make mistakes (ever do a git push without setting an origin?). All I have to do when I make these silly mistakes is run the command `fuck` and it will pretty reliably find and run the command you meant to run.

**yt-dlp**

I don't always have to download YouTube videos, but when I do, I use yt-dlp. It makes it pretty simple to download videos, and it's feels a lot less sketchy than using one of those YouTube downloader websites. Shameless plug, I also [built a GUI front end for it]().

**zoxide**

Using cd to navigate our computers is an everyday part of using the terminal, but zoxide makes that experience much better. On top just being able to navigate your folders just like with cd, zoxide can keep track of your most visited folders and lets you quickly navigate to them with a fuzzy search. So, say you have a folder you navigate to a lot with `cd ~/Developer/web/personal/my-cool-blog`, instead of having to type that out you can simply type `z web blog` and it will, like magic, take you right there. Also, if you're like me and have the cd command burned into your brain, you can set cd as an alias of z.
