import { createConfig, http } from "@wagmi/core";
import { Chain } from "@wagmi/core/chains";
import { cloudChain } from "src/network/cloudChain";
import { foundry, goerli } from "wagmi/chains";

const {
  VITE_LOCALHOST_NODE_RPC_URL,
  VITE_CUSTOM_CHAIN_NODE_RPC_URL,
  VITE_CUSTOM_CHAIN_ADDRESSES_URL,
  VITE_CUSTOM_CHAIN_CHAIN_ID,
  // VITE_WALLET_CONNECT_PROJECT_ID,
  VITE_ALCHEMY_GOERLI_RPC_KEY,
} = import.meta.env;

// const chainsToConfigure: Chain[] = [];
// const providersToConfigure: ChainProviderFn[] = [];

// const { chains, publicClient, webSocketPublicClient } = configureChains(
//   chainsToConfigure,
//   providersToConfigure,
// );

export const wagmiChains: Chain[] = [];

// Goerli
if (VITE_ALCHEMY_GOERLI_RPC_KEY) {
  wagmiChains.push(goerli);
  // providersToConfigure.push(
  //   alchemyProvider({ apiKey: VITE_ALCHEMY_GOERLI_RPC_KEY }),
  // );
}

// Localhost devnet
if (VITE_LOCALHOST_NODE_RPC_URL) {
  wagmiChains.push(foundry);
  // providersToConfigure.push(
  //   jsonRpcProvider({
  //     rpc: () => ({
  // http: VITE_LOCALHOST_NODE_RPC_URL,
  //     }),
  //   }),
  // );
}

// CloudChain
if (
  VITE_CUSTOM_CHAIN_NODE_RPC_URL &&
  VITE_CUSTOM_CHAIN_CHAIN_ID &&
  VITE_CUSTOM_CHAIN_ADDRESSES_URL
) {
  wagmiChains.push(cloudChain);
  // providersToConfigure.push(cloudChainRpcProvider);
}

// const { connectors } = getDefaultWallets({
//   appName: "Hyperdrive",
//   projectId: VITE_WALLET_CONNECT_PROJECT_ID || undefined,
//   chains,
// });

// const safeConnector = new SafeConnector({
//   chains,
//   options: {
//     allowedDomains: [/gnosis-safe.io$/, /app.safe.global$/],
//     debug: false,
//   },
// });

// const allConnectors = () => [safeConnector, ...connectors()];

export const wagmiConfig = createConfig({
  chains: [foundry, ...wagmiChains],
  transports: {
    [foundry.id]: http(VITE_LOCALHOST_NODE_RPC_URL),
  },
});

// const config = createConfig({
//   chains,
//   transports: {
//     [goerli.id]: http('https://mainnet.example.com'),
//   },
// })

// export const wagmiConfig = createConfig({
//   autoConnect: true,
//   chains: [],
//   connectors: allConnectors,
//   publicClient,
//   webSocketPublicClient,
// });
