import "./index.css";

import { ApolloClient, ApolloProvider, InMemoryCache } from "@apollo/client";
import { DAppProvider, Mainnet, DEFAULT_SUPPORTED_CHAINS, } from "@usedapp/core";
import React from "react";
import ReactDOM from "react-dom";

import { FujiChain } from './chain/fuji'

import App from "./App";

// Change this to your own Infura project id: https://infura.io/register
const INFURA_PROJECT_ID = "defba93b47f748f09fcead8282b9e58e";
const config: Config = {
  readOnlyChainId: FujiChain.chainId,
  readOnlyUrls: {
    [Mainnet.chainId]: 'https://mainnet.infura.io/v3/62687d1a985d4508b2b7a24827551934',
    [FujiChain.chainId]: 'https://api.avax-test.network/ext/bc/C/rpc',
  },
  networks: [...DEFAULT_SUPPORTED_CHAINS, FujiChain],
}

// This is the official Compound subgraph. You can replace it with your own, if you need to.
// See all subgraphs: https://thegraph.com/explorer/
const client = new ApolloClient({
  cache: new InMemoryCache(),
  uri: "https://api.thegraph.com/subgraphs/name/graphprotocol/compound-v2",
});

ReactDOM.render(
  <React.StrictMode>
    <DAppProvider config={config}>
      <ApolloProvider client={client}>
        <App />
      </ApolloProvider>
    </DAppProvider>
  </React.StrictMode>,
  document.getElementById("root"),
);
