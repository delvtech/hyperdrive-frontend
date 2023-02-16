import { getDefaultWallets } from "@rainbow-me/rainbowkit";
import { configureChains, createClient, goerli } from "wagmi";
import { alchemyProvider } from "wagmi/providers/alchemy";
import { publicProvider } from "wagmi/providers/public";

const ALCHEMY_GOERLI_RPC_KEY = import.meta.env.VITE_RPC_KEY;

if (!ALCHEMY_GOERLI_RPC_KEY) {
  throw new Error("Provide an ALCHEMY_GOERLI_RPC_KEY variable in .env");
}

const { chains, provider } = configureChains(
  [goerli],
  [alchemyProvider({ apiKey: ALCHEMY_GOERLI_RPC_KEY }), publicProvider()],
);

const { connectors } = getDefaultWallets({
  appName: "Hyperdrive Prototype UI",
  chains,
});

export const wagmiClient = createClient({
  autoConnect: true,
  connectors,
  provider,
});
