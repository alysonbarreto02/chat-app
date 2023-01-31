import "../../styles/globals.css";

import type { AppProps } from "next/app";

import { ApolloProvider } from "@apollo/client";
import { client } from "../api/apollo";
import { ChatContextProvider } from "../context";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <ChatContextProvider>
      <ApolloProvider client={client}>
        <Component {...pageProps} />
      </ApolloProvider>
    </ChatContextProvider>
  );
}
