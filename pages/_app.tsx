import { AppProviders } from "@/providers/AppProviders";
import "@/styles/globals.css";
import type { AppProps } from "next/app";
import { ErrorBoundary } from "react-error-boundary";
import { SessionProvider } from "next-auth/react";

export default function App({
  Component,
  pageProps: { session, ...pageProps },
}: AppProps) {
  return (
    <SessionProvider session={session}>
      <AppProviders>
        <ErrorBoundary fallback={<div>Something went wrong</div>}>
          <Component {...pageProps} />
        </ErrorBoundary>
      </AppProviders>
    </SessionProvider>
  );
}
