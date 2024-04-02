import { getDefaultConfig } from "@rainbow-me/rainbowkit";
import {
  injectedWallet,
  rainbowWallet,
  safeWallet,
  walletConnectWallet,
} from "@rainbow-me/rainbowkit/wallets";
import { http } from "@wagmi/core";
import { Chain } from "@wagmi/core/chains";
import { cloudChain } from "src/chains/cloudChain";
import { foundry, sepolia } from "wagmi/chains";

const {
  VITE_LOCALHOST_NODE_RPC_URL,
  VITE_CUSTOM_CHAIN_NODE_RPC_URL,
  VITE_CUSTOM_CHAIN_ADDRESSES_URL,
  VITE_CUSTOM_CHAIN_CHAIN_ID,
  VITE_WALLET_CONNECT_PROJECT_ID,
  VITE_SEPOLIA_RPC_URL,
} = import.meta.env;

export const wagmiChains: Chain[] = [];

// CloudChain
if (
  VITE_CUSTOM_CHAIN_NODE_RPC_URL &&
  VITE_CUSTOM_CHAIN_CHAIN_ID &&
  VITE_CUSTOM_CHAIN_ADDRESSES_URL
) {
  wagmiChains.push(cloudChain);
}

// Sepolia
if (VITE_SEPOLIA_RPC_URL) {
  wagmiChains.push(sepolia);
}

export const wagmiConfig = getDefaultConfig({
  appName: "Hyperdrive",
  projectId: VITE_WALLET_CONNECT_PROJECT_ID,
  transports: {
    [foundry.id]: http(VITE_LOCALHOST_NODE_RPC_URL),
    [cloudChain.id]: http(VITE_CUSTOM_CHAIN_NODE_RPC_URL),
    [sepolia.id]: http(VITE_SEPOLIA_RPC_URL),
  },
  chains: [foundry, ...wagmiChains],
  wallets: [
    {
      groupName: "Recommended",
      wallets: [injectedWallet, safeWallet, rainbowWallet, walletConnectWallet],
    },
  ],
});
