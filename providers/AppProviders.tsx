import React from "react";
import { Layout } from "@/components/layout/Layout";
import { client } from "@/graphql/apolloClient";
import { ApolloProvider } from "@apollo/client";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

type AppProvidersProps = {
  children: React.ReactNode;
};
export const AppProviders = ({ children }: AppProvidersProps) => {
  const queryClient = new QueryClient();
  return (
    <QueryClientProvider client={queryClient}>
      <ApolloProvider client={client}>
        <Layout>{children}</Layout>
      </ApolloProvider>
    </QueryClientProvider>
  );
};
