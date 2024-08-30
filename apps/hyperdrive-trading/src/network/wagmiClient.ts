import { getDefaultConfig, type WalletList } from "@rainbow-me/rainbowkit";
import {
  injectedWallet,
  metaMaskWallet,
  rainbowWallet,
  safeWallet,
  walletConnectWallet,
} from "@rainbow-me/rainbowkit/wallets";
import { cloudChain } from "src/chains/cloudChain";
import { gnosisFork } from "src/chains/gnosisFork";
import { CreateWalletFn } from "src/wallets/CreateWalletFn";
import { capsuleWallet } from "src/wallets/capsule";
import { Chain, http, Transport } from "viem";
import { foundry, gnosis, mainnet, sepolia } from "wagmi/chains";

const {
  VITE_LOCALHOST_NODE_RPC_URL,
  VITE_CUSTOM_CHAIN_NODE_RPC_URL,
  VITE_CUSTOM_CHAIN_CHAIN_ID,
  VITE_WALLET_CONNECT_PROJECT_ID,
  VITE_SEPOLIA_RPC_URL,
  VITE_MAINNET_RPC_URL,
  VITE_GNOSIS_FORK_NODE_RPC_URL,
  VITE_GNOSIS_FORK_CHAIN_ID,
  VITE_GNOSIS_NODE_RPC_URL,
} = import.meta.env;

export const chains: Chain[] = [];
const transports: Record<string, Transport> = {};

const recommendedWallets = [
  injectedWallet,
  safeWallet,
  rainbowWallet,
  metaMaskWallet,
];
const customWallets: CreateWalletFn[] = [];

// WalletConnect
if (VITE_WALLET_CONNECT_PROJECT_ID) {
  recommendedWallets.push(walletConnectWallet);
}

// Local docker anvil node
if (VITE_LOCALHOST_NODE_RPC_URL && VITE_LOCALHOST_NODE_RPC_URL) {
  chains.push(foundry);
  transports[foundry.id] = http(VITE_LOCALHOST_NODE_RPC_URL);
}

// Gnosis Fork
if (VITE_GNOSIS_FORK_NODE_RPC_URL && VITE_GNOSIS_FORK_CHAIN_ID) {
  chains.push(gnosisFork);
  transports[gnosisFork.id] = http(VITE_GNOSIS_FORK_NODE_RPC_URL);
}

// CloudChain
if (VITE_CUSTOM_CHAIN_NODE_RPC_URL && VITE_CUSTOM_CHAIN_CHAIN_ID) {
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

if (VITE_MAINNET_RPC_URL) {
  chains.push(mainnet);
  transports[mainnet.id] = http(VITE_MAINNET_RPC_URL);

  // TODO: push this into the custom wallets for local and cloudchain once
  // capsule support is verified
  if (capsuleWallet && !customWallets.includes(capsuleWallet)) {
    customWallets.push(capsuleWallet);
  }
}
// Gnosis
if (VITE_GNOSIS_NODE_RPC_URL) {
  chains.push(gnosis);
  transports[gnosis.id] = http(VITE_GNOSIS_NODE_RPC_URL);
}

const wallets: WalletList = [
  {
    groupName: "Other",
    wallets: recommendedWallets,
  },
];
// If Capsule is not configured in your .env, then don't include it in the
// custom wallets
if (customWallets.length) {
  wallets.push({
    groupName: "Log In or Sign Up with Capsule",
    wallets: customWallets,
  });
}
export const wagmiConfig = getDefaultConfig({
  appName: "Hyperdrive",
  projectId: VITE_WALLET_CONNECT_PROJECT_ID || "0",
  transports,
  // Viem's type for `chains` requires at least one item in the array, but since
  // we build the list up programmatically we must cast.
  chains: chains as [Chain, ...restChains: Chain[]],
  wallets,
});
