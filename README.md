This is my job application' technical challenge for [Leonardo.ai](https://leonardo.ai/).

<img width="1308" alt="Screenshot" src="https://github.com/jgrancher/leonardo-challenge/assets/5517450/47d8eabd-a5c9-45be-a0ba-aab908963047">

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.tsx`. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/basic-features/font-optimization) to automatically optimize and load Inter, a custom Google Font.

## Notes and optimisations

I probably have spent way more than 4 hours on this, and it still has room for improvements. It's just hard to stop once you get started and want to deliver a feeling of a "finished product", given the technical constraints.

If it were up to me, and given more time, I would probably work on the following:

- More content on the modal (embed a React Player to display the trailer for each anime, for example).
- Build a "logout" button in the header that would delete the cookies (simple UX stuff, but right now it's not possible).
- Get rid of Apollo and find a tool that would work nicely with RSC and provide content on the first load (for SEO reasons).
- The same way that Chakra-UI was mandatory in this test (and even though I love it), I'd try to redo it with Tailwind only, so that it's more "RSC friendly".

I hope you'll like this app anyways. I'd be happy to discuss this further with the team!
