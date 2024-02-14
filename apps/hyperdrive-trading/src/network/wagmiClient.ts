import { getDefaultConfig } from "@rainbow-me/rainbowkit";
import {
  injectedWallet,
  rainbowWallet,
  safeWallet,
  walletConnectWallet,
} from "@rainbow-me/rainbowkit/wallets";
import { http } from "@wagmi/core";
import { Chain } from "@wagmi/core/chains";
import { cloudChain } from "src/network/cloudChain";
import { foundry, goerli } from "wagmi/chains";

const {
  VITE_LOCALHOST_NODE_RPC_URL,
  VITE_CUSTOM_CHAIN_NODE_RPC_URL,
  VITE_CUSTOM_CHAIN_ADDRESSES_URL,
  VITE_CUSTOM_CHAIN_CHAIN_ID,
  VITE_WALLET_CONNECT_PROJECT_ID,
  VITE_ALCHEMY_GOERLI_RPC_KEY,
} = import.meta.env;

export const wagmiChains: Chain[] = [];

// Goerli
if (VITE_ALCHEMY_GOERLI_RPC_KEY) {
  wagmiChains.push(goerli);
}

// CloudChain
if (
  VITE_CUSTOM_CHAIN_NODE_RPC_URL &&
  VITE_CUSTOM_CHAIN_CHAIN_ID &&
  VITE_CUSTOM_CHAIN_ADDRESSES_URL
) {
  wagmiChains.push(cloudChain);
}

export const wagmiConfig = getDefaultConfig({
  appName: "Hyperdrive",
  projectId: VITE_WALLET_CONNECT_PROJECT_ID,
  transports: {
    [foundry.id]: http(VITE_LOCALHOST_NODE_RPC_URL),
    [goerli.id]: http(
      `https://eth-goerli.g.alchemy.com/v2/${VITE_ALCHEMY_GOERLI_RPC_KEY}`,
    ),
    [cloudChain.id]: http(VITE_CUSTOM_CHAIN_NODE_RPC_URL),
  },
  chains: [foundry, ...wagmiChains],
  wallets: [
    {
      groupName: "Recommended",
      wallets: [injectedWallet, safeWallet, rainbowWallet, walletConnectWallet],
    },
  ],
});
