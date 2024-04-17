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
import { capsuleWallet } from "src/wallets/capsule";
import { Transport } from "viem";
import { foundry, sepolia } from "wagmi/chains";

const {
  VITE_LOCALHOST_NODE_RPC_URL,
  VITE_CUSTOM_CHAIN_NODE_RPC_URL,
  VITE_CUSTOM_CHAIN_ADDRESSES_URL,
  VITE_CUSTOM_CHAIN_CHAIN_ID,
  VITE_WALLET_CONNECT_PROJECT_ID,
  VITE_SEPOLIA_RPC_URL,
} = import.meta.env;

export const chains: Chain[] = [];
const transports: Record<string, Transport> = {};

const customWallets = [];

// Local docker anvil node
if (VITE_LOCALHOST_NODE_RPC_URL && VITE_LOCALHOST_NODE_RPC_URL) {
  chains.push(foundry);
  transports[foundry.id] = http(VITE_LOCALHOST_NODE_RPC_URL);
}

// CloudChain
if (
  VITE_CUSTOM_CHAIN_NODE_RPC_URL &&
  VITE_CUSTOM_CHAIN_CHAIN_ID &&
  VITE_CUSTOM_CHAIN_ADDRESSES_URL
) {
  chains.push(cloudChain);
  transports[cloudChain.id] = http(VITE_CUSTOM_CHAIN_NODE_RPC_URL);
}

// Sepolia
if (VITE_SEPOLIA_RPC_URL) {
  chains.push(sepolia);
  transports[sepolia.id] = http(VITE_SEPOLIA_RPC_URL);
  // TODO: push this into the custom wallets for local and cloudchain once
  // capsule support is verified
  if (capsuleWallet) {
    customWallets.push(capsuleWallet);
  }
}

export const wagmiConfig = getDefaultConfig({
  appName: "Hyperdrive",
  projectId: VITE_WALLET_CONNECT_PROJECT_ID,
  transports,
  // Viem's type for `chains` requires at least one item in the array, but since
  // we build the list up programmatically we must cast.
  chains: chains as [Chain, ...restChains: Chain[]],
  wallets: [
    {
      groupName: "Recommended",
      wallets: [injectedWallet, safeWallet, rainbowWallet, walletConnectWallet],
    },
    {
      groupName: "Custom",
      wallets: customWallets,
    },
  ],
});
