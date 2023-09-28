import { getDefaultWallets } from "@rainbow-me/rainbowkit";
import { cloudChain, cloudChainTransport } from "src/network/cloudChain";
import { Chain, Transport } from "viem";
import { createConfig, http } from "wagmi";
import { foundry, goerli, hardhat, mainnet } from "wagmi/chains";
import { foundryTransport } from "./foundry";
import { goerliTransport } from "./goerli";

const {
  VITE_LOCALHOST_NODE_RPC_URL,
  VITE_CUSTOM_CHAIN_NODE_RPC_URL,
  VITE_CUSTOM_CHAIN_ADDRESSES_URL,
  VITE_CUSTOM_CHAIN_CHAIN_ID,
  VITE_WALLET_CONNECT_PROJECT_ID,
  VITE_ALCHEMY_GOERLI_RPC_KEY,
} = import.meta.env;

const chains: Chain[] = [];
const transports: Record<string, Transport> = {};

// Goerli
if (VITE_ALCHEMY_GOERLI_RPC_KEY) {
  chains.push(goerli);
  transports[goerli.id] = goerliTransport;
}

// Localhost devnet
if (VITE_LOCALHOST_NODE_RPC_URL) {
  chains.push(foundry);
  transports[foundry.id] = foundryTransport;
}

// CloudChain
if (
  VITE_CUSTOM_CHAIN_NODE_RPC_URL &&
  VITE_CUSTOM_CHAIN_CHAIN_ID &&
  VITE_CUSTOM_CHAIN_ADDRESSES_URL
) {
  chains.push(cloudChain);
  transports[cloudChain.id] = cloudChainTransport;
}

export const wagmiChains = chains;

const { connectors } = getDefaultWallets({
  appName: "Hyperdrive",
  projectId: VITE_WALLET_CONNECT_PROJECT_ID || undefined,
  chains,
});

if (!chains.length) {
  console.warn("No chains were configured, see wagmiClient.ts");
}

export const wagmiConfig = createConfig({
  chains: wagmiChains as [Chain],
  connectors: connectors(),
  transports: {
    [mainnet.id]: http(),
    [hardhat.id]: http(),
  },
});
