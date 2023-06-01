import { getDefaultWallets } from "@rainbow-me/rainbowkit";
// Something very strange is happening with the types, where if you don't import
// Chain from wagmi then the return type of createConfig cannot be inferred.
import { Chain, configureChains, createConfig } from "wagmi";
import { goerli } from "wagmi/chains";
import { alchemyProvider } from "wagmi/providers/alchemy";
const ALCHEMY_GOERLI_RPC_KEY = import.meta.env.VITE_ALCHEMY_GOERLI_RPC_KEY;

// Hack: An unused reference so that eslint doesn't automatically fixup the
// Chain import.
type UnusedChain = Chain;

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
