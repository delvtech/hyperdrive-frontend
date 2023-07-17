import { getDefaultWallets } from "@rainbow-me/rainbowkit";
import { configureChains, createConfig } from "wagmi";
import { foundry, goerli } from "wagmi/chains";
import { alchemyProvider } from "wagmi/providers/alchemy";
import { jsonRpcProvider } from "wagmi/providers/jsonRpc";
const {
  VITE_ALCHEMY_GOERLI_RPC_KEY: ALCHEMY_GOERLI_RPC_KEY,
  VITE_LOCALHOST_NODE_RPC_URL: LOCALHOST_NODE_RPC_URL,
} = import.meta.env;

if (!ALCHEMY_GOERLI_RPC_KEY) {
  throw new Error("Provide an ALCHEMY_GOERLI_RPC_KEY variable in .env");
}

const { chains, publicClient, webSocketPublicClient } = configureChains(
  [foundry, goerli],
  [
    jsonRpcProvider({
      rpc: () => ({
        http: LOCALHOST_NODE_RPC_URL,
      }),
    }),
    alchemyProvider({ apiKey: ALCHEMY_GOERLI_RPC_KEY }),
  ],
);

export const wagmiChains = chains;

const { connectors } = getDefaultWallets({
  appName: "Hyperdrive",
  chains,
});

export const wagmiConfig = createConfig({
  autoConnect: true,
  connectors,
  publicClient,
  webSocketPublicClient,
});
