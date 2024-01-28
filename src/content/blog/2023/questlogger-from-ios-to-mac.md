---
title: 'QuestLogger - From Closed-Source iOS App to Open-Source Mac App'
pubDate: '9/3/23'
tags: ['Making Stuff', 'Programming', 'Apps']
---

A few weeks ago I relaunched my work-in-progress iOS app, QuestLogger, as [an open-source Mac app](https://github.com/ghall89/questlogger-mac). That’s quite a shift, but I felt it was best for the project itself, and my interest in carrying it on.

Without getting too into the technical details, it required a bit of work to pull off. The app was originally written specifically for the iPhone, and used a bit of custom nonsense that would’t work at all on macOS, so I had to rewrite a non-insignificant part of the user interface. Thankfully I had the forethought to break up my interface code into smaller components, so a lot of that code could be reused (once any iOS-specific code was stripped out). The bulk of the work was rewriting the entire layout to use the screen real estate of the Mac more effectively.

So, I guess the big question is, “Why did I do this?”

The answer? Subscriptions.

From the get-go I was adamant about making this app a pay once type of deal. I wasn’t looking to make a lot of money, I just wanted to build something that people might want to use. Maybe use it as a way to build towards more lucrative projects if I was lucky. And I didn’t want the to deal with the pressure of subscriptions and the demands that could bring. Maybe this would be something I’d be more comfortable with down the line with an app or 2 under my belt, or if I were doing this full time, but as a little side project I’m just not comfortable with asking people to pay a recurring subscription

But after running a relatively short TestFlight beta over the summer, and witnessing the drama with the Reddit API, I got very nervous about running an app with the payment structure I wanted off an API I have no control over, and an estimated 30¢ cost per user to run a proxy server on AWS to access that API. That doesn’t sound like a lot, but if for some reason my app happened to blow up (unlikely, but not impossible) I could be stuck with a sizable AWS bill, and no recurring revenue to cover it.

I should probably explain that QuestLogger gets its data from IGDB (Internet Game Database) through an API. In order to access the API, an app first needs to authenticate with their server by sending a pair of authentication keys and receiving back a special “bearer token”. This token can then be used to access the API itself, but as a developer my app can only request a very limited number of tokens at a time across all instances. That’s not a problem if you have only a couple users, but it could become one very quickly if say I had even 50 people using my app. So the best way around that is to set up a proxy server for the app to communicate with instead, and essentially let all users share the same token.

I was feeling super discouraged. I don’t think I wrote a single line of code for QuestLogger throughout the month of July. Then, in early August, I decided I didn’t want all the work I put into the app go to waste, so I had the idea to convert the whole thing into a Mac app and release it as an open source project.

I think this change allows the project to be a lot more flexible. First, I was able to circumvent the token issue by requiring users to provide their own authentication keys–which is, as I understand it, against Apple’s rules for the App Store–and request the token on-device. It also gives a lot more freedom in terms of being able to switch to another source of data as it seems there are more options for non-commercial projects.

Most importantly though, it’s reignited my interest in building this project, and honing my Swift skills. I don’t need to worry about optimal subscription prices, or making sure people are getting their money’s worth. I can just focus on making something I think is cool, and hopefully others do too.
