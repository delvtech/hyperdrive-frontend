import { getDefaultWallets } from "@rainbow-me/rainbowkit";
// Something very strange is happening with the types, where if you don't import
// Chain from wagmi then the return type of createConfig cannot be inferred.
import { Chain, configureChains, createConfig } from "wagmi";
import { foundry, goerli } from "wagmi/chains";
import { alchemyProvider } from "wagmi/providers/alchemy";
import { jsonRpcProvider } from "wagmi/providers/jsonRpc";
const {
  VITE_ALCHEMY_GOERLI_RPC_KEY: ALCHEMY_GOERLI_RPC_KEY,
  VITE_LOCALHOST_NODE_RPC_URL: LOCALHOST_NODE_RPC_URL,
  VITE_WALLET_CONNECT_PROJECT_ID: PROJECT_ID,
} = import.meta.env;

// Hack: An unused reference so that eslint doesn't automatically fixup the
// Chain import.
type UnusedChain = Chain;

if (!ALCHEMY_GOERLI_RPC_KEY) {
  throw new Error("Provide an ALCHEMY_GOERLI_RPC_KEY variable in .env");
}

const { chains, publicClient, webSocketPublicClient } = configureChains(
  [goerli, foundry],
  [
    alchemyProvider({ apiKey: ALCHEMY_GOERLI_RPC_KEY }),
    jsonRpcProvider({
      rpc: () => ({
        http: LOCALHOST_NODE_RPC_URL,
      }),
    }),
  ],
);

export const wagmiChains = chains;

const { connectors } = getDefaultWallets({
  appName: "Hyperdrive",
  projectId: PROJECT_ID,
  chains,
});

export const wagmiConfig = createConfig({
  autoConnect: true,
  connectors,
  publicClient,
  webSocketPublicClient,
});
