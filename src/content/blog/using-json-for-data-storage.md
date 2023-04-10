---
title: 'More Swift Learnings: Using JSON For Data Storage'
pubDate: '4/9/23'
tags: ['MacOS', 'Learning', 'Programming']
---

Back at the end of February, I built [a simple Markdown editor](https://github.com/ghall89/Scrib) using SwiftUI. It was an interesting learning experience, not just in terms of learning a new programming language, but also in terms of _how_ to learn said programming language. So, I decided to take a step back and approach this educational journey from another angle.

I decided to take a project I built before for the web and recreate it in a native Mac app, rather than try to do something I’d never done before (like, for example, a document-based application). AI is sort of a big deal right now, so I decided to revisit [a project I made last year](https://github.com/ghall89/openai-challenge) using the OpenAI API.

So, over the course of the last couple weeks, I’ve been working on the incredibly cleverly named [SwiftGPT](https://github.com/ghall89/swiftgpt), and it’s proven to be quite the interesting challenge translating what I know about building data-focused applications for the web into building them for the Mac.

The biggest challenge for me, by far, was dealing with storing and retrieving user data. My experience is in NoSQL databases like MongoDB, as well as local and session storage in the browser. But how, I wondered, should I go about persisting user data in a native Mac app? In this case, this primarily means the chat history between the user and the OpenAI assistant.

I tinkered a bit with Core Data, but I had a hard time wrapping my head around it, and, from what little I did understand, it seemed like overkill anyway. My inspiration came in the form of [episode \#87 of the CoRecursive podcast](https://corecursive.com/json-vs-xml-douglas-crockford/), which featured an interview with Douglas Crockford, the creator of a little format called JSON (a.k.a., JavaScript Object Notation).

JavaScript being my primary language, I knew all about JSON. I also happened to know that Swift has some built-in support for it, so it seemed like the natural direction to go. However, the main problem was, while I somewhat knew how to read JSON data in Swift, I had no idea how to create it, much less save it to a file and read that file back reliably.

I’m sure any Mac or iOS developer with an ounce of experience reading this is screaming, “Just use [JSONEncoder](https://developer.apple.com/documentation/foundation/jsonencoder/) and [FileManager](https://developer.apple.com/documentation/foundation/filemanager)!” Well, you’ll be happy to know–unless there’s some better method I overlooked–that’s exactly what I used. Though I’m sure my code is filled with flaws. 😅

If I were doing something more complex, beyond storing a list of messages and who “wrote” them, I would probably be better served by sucking it up and learning Core Data. But, as I’m working with a small set of very simple data, I’m not sure there are any downsides to my solution. I will say though, my curiosity has been piqued, and I wonder what other sorts of things I can build with this method.
