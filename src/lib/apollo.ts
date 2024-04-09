/**
 * Note: Because of the requirements of this exercise, I'm using the `@apollo/client` package.
 * However, in the real world, and because of current limitations with Next.js App router and Server Components,
 * I would probably use something else for data fetching, like `urql` or even the native `fetch` function with its `cache` directive.
 */

import { ApolloClient, InMemoryCache } from "@apollo/client";

export const apolloClient = new ApolloClient({
  uri: "https://graphql.anilist.co",
  cache: new InMemoryCache(),
});
