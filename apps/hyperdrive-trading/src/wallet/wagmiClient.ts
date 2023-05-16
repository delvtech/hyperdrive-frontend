import { getDefaultWallets } from "@rainbow-me/rainbowkit";
import { goerli } from "@wagmi/chains";
import { configureChains, createConfig } from "wagmi";
import { alchemyProvider } from "wagmi/providers/alchemy";

const ALCHEMY_GOERLI_RPC_KEY = import.meta.env.VITE_ALCHEMY_GOERLI_RPC_KEY;

if (!ALCHEMY_GOERLI_RPC_KEY) {
  throw new Error("Provide an ALCHEMY_GOERLI_RPC_KEY variable in .env");
}

const { chains, publicClient, webSocketPublicClient } = configureChains(
  [goerli],
  [alchemyProvider({ apiKey: ALCHEMY_GOERLI_RPC_KEY })],
);

export const wagmiChains = chains;

const { connectors } = getDefaultWallets({
  appName: "Hyperdrive Prototype UI",
  chains,
});

export const wagmiConfig = createConfig({
  autoConnect: true,
  connectors,
  publicClient,
  webSocketPublicClient,
});
