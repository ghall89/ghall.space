---
title: 'Using Tailwind With MUI Base'
pubDate: '3/11/23'
tags: ['Web Dev', 'Tutorial']
---

I've had some frustration lately working with [MUI](https://mui.com), a styled component library for React. I decided to try and experiment with combining [MUI Base](https://mui.com/base/getting-started/overview/), the barebones version of the MUI library, with [Tailwind](https://tailwindcss.com) to allow easier customization. Here's an overview of how I set up a test project using [Next.js](https://nextjs.org). This writeup assumes you have some experience with Next.js, using the terminal, and ideally some experience with MUI and Tailwind.

## Step 1: Set Up Next.js

Nothing special is going on here. You can use `npx create-next-app@latest` or `yarn create next-app` depending on which package manager you prefer. I personally like Yarn, so that's what I'll be using. If you use NPM though the commands are similar so you'll be able to follow along.

Follow the prompts to set up your Next.js project. These are the choices I went with:

- Project name: mui-tailwind
- Typescript: No
- ESLint: Yes
- Use 'src/' directory: Yes
- Experimental 'app/' directory: No

I also chose not to set up any import aliases for now. These can be easily added later if you so choose.

It will take a few moments for Next.js to download and for the project to set up, but when that's done, cd into '/mui-tailwind' (or whatever you named the project).

## Step 2: Install MUI Base & Tailwind

Installing MUI Base is simple. Just run `yarn add @mui/base`, and you're good to go. There will be some config to do later, but once the package is done installing we're ready to install Tailwind with `yarn add -D tailwindcss postcss autoprefixer`.

Once both MUI Base and Tailwind are installed, we next need to run `yarn tailwindcss init -p`, which will create 2 files, one called 'tailwind.config.js', and another called 'postcss.config.js'. Now we're ready to do some setup.

## Step 3: Configuration

First thing's first, open up the project folder in your code editor of choice and at the root of the project you should see the 'tailwind.config.js' we created in step 2. Open that, and under `module.exports` you should see an empty array named 'content'. Add the following to the array: `'./src/**/*.{js,jsx,ts,tsx}'` Your config file should look like this:

<img src="/media/mui-plus-tailwind/tailwind-config.png" width="80%" alt="module.exports = { content: ['./src/**/*.{js,jsx,ts,tsx}'], theme: { extend: {}, }, plugins: [],};">

Next, we need to import Tailwind into our 'globals.css' file, which is located in 'src/styles/'. We can delete everything in the file as we won't be needing any of it. Then, add the following:

<img src="/media/mui-plus-tailwind/global-css.png" width="80%" alt="@tailwind base; @tailwind components; @tailwind utilities;">

And that's it! We're ready to start creating something!

## Step 4: Creating Your First Component

Ideally, we'd want to create smaller, reusable component files, but that's beyond the scope of this post, and is something you're most likely already familiar with if you have any experience with Next.js. Instead, we're going to work entirely in 'src/pages/index.js'.

First, we should delete everything we don't need so that our 'index.js' file looks like this:

<img src="/media/mui-plus-tailwind/index-js.png" width="80%" alt="export default function Home() { return() }">

We're going to create a simple button, nothing too fancy. So first we need to import the MUI Unstyled Button component by adding `import { ButtonUnstyled as Button } from '@mui/base'` on the first line of our file.

_Note: The official MUI docs say to import as `import ButtonUnstyled from '@mui/base/ButtonUnstyled'`, which also works, but I prefer to use destructing which allows you to import multiple components with a single import statement'_

Now we can create our button. Inside the return statement, add the following:

<img src="/media/mui-plus-tailwind/unstyled-button-code.png" width="80%" alt="<Button>Click Me!</Button>" />

Next, go back to your terminal and run `yarn dev` to start up the dev server, and click the 'localhost' link that appears (most likely 'localhost:3000'). We'll be greeted by what looks like just a bit of text (it's a button, I promise), which isn't what we want, but that's because we haven't added any styles yet!

<img src="/media/mui-plus-tailwind/unstyled-button.png" width="40%" alt="A plain old 'button' that reads 'Click Me!'" />

All we need to do is add the `className` prop with some nice Tailwind utility classes:

<img src="/media/mui-plus-tailwind/styled-button-code.png" width="80%" alt="<Button className='rounded-lg border-2 border-sky-500 bg-sky-600 py-2 px-10 font-medium text-slate-300 shadow hover:bg-sky-700 active:translate-y-0.5'>
  Click Me!
</Button>" />

Now, when we go back to the browser, we should see the following:

<img src="/media/mui-plus-tailwind/styled-button.png" width="40%" alt="A styled blue button that reads 'Click Me!'" />

Nice! That looks a lot more like a button.

## Step 5: Further Reading

This tutorial is just the basics of setting up a project using Next.js, MUI Base, and Tailwind. Of course, there's so much more to all these tools than I can possibly cover. For a more in-depth overview, I recommend you check out [this documentation](https://mui.com/base/guides/working-with-tailwind-css/) for using MUI Base with Tailwind, which I used as the basis for this guide, in combination with [this documentation](https://tailwindcss.com/docs/guides/nextjs) for using Tailwind with Next.js.

Of course, the documentation I linked to at the top of this post is also suggested reading if you're not familiar with any of what I've written about here.
