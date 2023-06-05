import {
  ApolloClient,
  InMemoryCache,
  ApolloProvider,
  gql,
} from "@apollo/client";

export const client = new ApolloClient({
  uri: process.env.GRAPHQL_API,
  cache: new InMemoryCache(),
});

export const authorizedApolloClient = new ApolloClient({
  uri: process.env.GRAPHQL_API,
  cache: new InMemoryCache(),
  headers: {
    Authorization: `Bearer ${process.env.GRAPHCMS_TOKEN}`,
  },
});
