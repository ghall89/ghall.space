---
title: 'Learning to Enjoy Building Forms in React'
pubDate: '9/15/25'
tags: ['Web Dev', 'Programming']
---

Creating forms in a React app is something that used to often frustrate me. It was something I would dread doing, because if you wanted to something more complicated than a basic login form, it would quickly become a mess trying to manage state – because, of course, why would we use anything except controlled inputs?

There are libraries like Formik and TanStack Form which proclaim to take a lot of the headache out of building forms in React. While they do simplify managing state in our forms, they still involve managing state and utilizing controlled inputs, which comes with its own set of problems.

To get at why using state for forms is not ideal, we first have to look at how state works in React; Put simply, state is a value or set of values in a component that, when changed, cause the entire component to re-render in order to reflect that change.

Hopefully you can see where I'm going with this.

With a controlled component, whenever the user makes a change the entire form is re-rendered, which means that, essentially, every keystroke by the user causes a re-render. If you're building a login page, or even a simple contact form, you likely won't see much of a performance hit, but you're still very likely over-engineering the problem.

Enter the useRef hook...

I've been aware of useRef for most of my time using React, but I'd never really explored its use. I've got comfortable with the common hooks like useState, useMemo, and useEffect (which I could write another post about by itself), but useRef proved to be somewhat elusive to me for a time. That was until I started seeing content about using it instead of useState for storing form values.

See, the great thing about useRef, at least in this use case, is it doesn't cause re-renders, and, if the component does happen to get re-rendered, the values will persist. Full disclosure, you do lose some of the benefits of using state, like using the value of a reference as a dependency for a useMemo or useEffect hook, however, I feel that, in most cases, the pros outweigh the cons.

Of course, you can still read the values stored by useRef in your submission logic, otherwise there would be no point in utilizing this approach. But this means you can still perform validation, either yourself or with a library like Zod, and whatever else you might want to do with that data. You could even set it to state if you so desired.

If you're looking for a starting point, I whipped up a quick, somewhat contrived, and not at all secure, login form using useRef instead of useState. With some Radix UI sprinkled in because I apparently can't make a sample UI that doesn't look a little pretty, and it shows you can utilize this method with component libraries (but mostly the former).

```js
import { useRef } from "react";
import { Button, Flex, TextField } from "@radix-ui/themes";

export default function Form() {
  const usernameRef = useRef<HTMLInputElement>(null);
  const passwordRef = useRef<HTMLInputElement>(null);

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const username = usernameRef.current?.value;
    const password = passwordRef.current?.value;

    if (username === "user" && password === "password123") {
    	console.log("Success!")
    } else {
      console.log("Failure");
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <Flex direction="column" gap="4">
        <TextField.Root
          placeholder="Username"
          ref={usernameRef}
          aria-label="Username"
        />
        <TextField.Root
          placeholder="Password"
          type="password"
          ref={passwordRef}
          aria-label="Password"
        />
        <Button type="submit">Submit</Button>
      </Flex>
    </form>
  );
}
```
