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
import { base, foundry, gnosis, linea, mainnet, sepolia } from "wagmi/chains";

const {
  VITE_LOCALHOST_NODE_RPC_URL,
  VITE_CUSTOM_CHAIN_NODE_RPC_URL,
  VITE_CUSTOM_CHAIN_CHAIN_ID,
  VITE_WALLET_CONNECT_PROJECT_ID,
  VITE_SEPOLIA_RPC_URL,
  VITE_MAINNET_RPC_URL,
  VITE_LINEA_RPC_URL,
  VITE_BASE_RPC_URL,
  VITE_GNOSIS_FORK_NODE_RPC_URL,
  VITE_GNOSIS_FORK_CHAIN_ID,
  VITE_GNOSIS_NODE_RPC_URL,
} = import.meta.env;

interface WagmiClientConfig {
  rpcUrl: string;
  chain: Chain;
  wallets?: (CreateWalletFn | undefined)[];
  /**
   * used for fork chains only
   */
  chainId?: number;
}

/* To add a new chain to this file, follow these steps:

* 1. Import the new chain from "wagmi/chains" or define it in "src/chains" if it's a custom chain.
* 2. Add a new property to the `chainConfigs` object with the chain's name as the key.
* 3. Define the chain's configuration, including the `rpcUrl` and chain properties.
* 4. Optionally, add a `wallets` property to specify the wallets that should be supported on this chain.
* 5. If the chain is a fork chain, add a `chainId` property to specify the chain's ID.

* Example:
*   myChain: {
*     rpcUrl: VITE_MY_CHAIN_RPC_URL,
*     chain: myChain,
*     wallets: [capsuleWallet],
*     chainId: 123, // only required for fork chains
*   }
*/

const chainConfigs: Record<string, WagmiClientConfig> = Object.fromEntries(
  Object.entries({
    // mainnet chains
    mainnet: {
      rpcUrl: VITE_MAINNET_RPC_URL,
      chain: mainnet,
      wallets: [capsuleWallet],
    },
    gnosis: {
      rpcUrl: VITE_GNOSIS_NODE_RPC_URL,
      chain: gnosis,
    },
    linea: {
      rpcUrl: VITE_LINEA_RPC_URL,
      chain: {
        // Rainbowkit does not have a built-in linea icon, so we need to add one:
        // see: https://www.rainbowkit.com/docs/custom-chains
        ...linea,
        iconUrl:
          "data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMzIiIGhlaWdodD0iMzIiIHZpZXdCb3g9IjAgMCAzMiAzMiIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPGNpcmNsZSBjeD0iMTYiIGN5PSIxNiIgcj0iMTYiIGZpbGw9IiMxMjEyMTIiLz4KPG1hc2sgaWQ9Im1hc2swXzI0OTlfNjExIiBzdHlsZT0ibWFzay10eXBlOmx1bWluYW5jZSIgbWFza1VuaXRzPSJ1c2VyU3BhY2VPblVzZSIgeD0iMTAiIHk9IjciIHdpZHRoPSIxNSIgaGVpZ2h0PSIxNiI+CjxwYXRoIGQ9Ik0yNC45NjkyIDdIMTBWMjIuNjM2M0gyNC45NjkyVjdaIiBmaWxsPSJ3aGl0ZSIvPgo8L21hc2s+CjxnIG1hc2s9InVybCgjbWFzazBfMjQ5OV82MTEpIj4KPHBhdGggZD0iTTIyLjQzMiAyMi42MzYySDEwVjkuNTM3MjNIMTIuODQ0NFYyMC4wOTc2SDIyLjQzMlYyMi42MzQ5VjIyLjYzNjJaIiBmaWxsPSJ3aGl0ZSIvPgo8cGF0aCBkPSJNMjIuNDMxOSAxMi4wNzQ1QzIzLjgzMzIgMTIuMDc0NSAyNC45NjkyIDEwLjkzODUgMjQuOTY5MiA5LjUzNzI3QzI0Ljk2OTIgOC4xMzU5NyAyMy44MzMyIDcgMjIuNDMxOSA3QzIxLjAzMDUgNyAxOS44OTQ3IDguMTM1OTcgMTkuODk0NyA5LjUzNzI3QzE5Ljg5NDcgMTAuOTM4NSAyMS4wMzA1IDEyLjA3NDUgMjIuNDMxOSAxMi4wNzQ1WiIgZmlsbD0id2hpdGUiLz4KPC9nPgo8L3N2Zz4K",
        iconBackground: "#ffffff",
      },
    },
    base: {
      rpcUrl: VITE_BASE_RPC_URL,
      chain: base,
    },
    // testnet chains
    foundry: {
      rpcUrl: VITE_LOCALHOST_NODE_RPC_URL,
      chain: foundry,
    },
    gnosisFork: {
      rpcUrl: VITE_GNOSIS_FORK_NODE_RPC_URL,
      chain: gnosisFork,
      chainId: VITE_GNOSIS_FORK_CHAIN_ID,
    },
    cloudChain: {
      rpcUrl: VITE_CUSTOM_CHAIN_NODE_RPC_URL,
      chain: {
        ...cloudChain,
        iconUrl: "/cloudchain.svg",
        iconBackground: "#ffffff",
      },
      chainId: VITE_CUSTOM_CHAIN_CHAIN_ID,
    },
    sepolia: {
      rpcUrl: VITE_SEPOLIA_RPC_URL,
      chain: sepolia,
      wallets: [capsuleWallet],
    },
  }).filter(
    // Remove configs that don't have a proper RPC URL defined in the .env
    ([_, config]) => config.rpcUrl !== undefined,
  ),
);

const chains: Chain[] = [];
const transports: Record<string, Transport> = {};
const customWallets: CreateWalletFn[] = [];
const recommendedWallets = [
  // needs to be first
  safeWallet,
  rainbowWallet,
  metaMaskWallet,
  // recommended to be last
  // https://www.rainbowkit.com/docs/custom-wallet-list#injected-wallet
  injectedWallet,
];

// WalletConnect
if (VITE_WALLET_CONNECT_PROJECT_ID) {
  recommendedWallets.push(walletConnectWallet);
}

// Handle mainnet first to ensure it's always the first chain. This ensures
// wagmi falls back to mainnet if the user isn't connected.
if (VITE_MAINNET_RPC_URL) {
  chains.push(mainnet);
  transports[mainnet.id] = http(VITE_MAINNET_RPC_URL);

  if (
    capsuleWallet &&
    chainConfigs["mainnet"].wallets?.includes(capsuleWallet)
  ) {
    customWallets.push(capsuleWallet);
  }
}

// Build the rest of the chains dynamically, excluding mainnet
Object.values(chainConfigs).forEach(({ rpcUrl, chain, wallets }) => {
  // Exclude mainnet here
  if (chain.id === mainnet.id) {
    return;
  }

  chains.push(chain);
  transports[chain.id] = http(rpcUrl);

  // Add custom wallets if they exist
  if (wallets) {
    wallets.forEach((wallet) => {
      if (wallet && !customWallets.includes(wallet)) {
        customWallets.push(wallet);
      }
    });
  }
});

// Prepare wallet list
const wallets: WalletList = [
  { groupName: "Other", wallets: recommendedWallets },
];

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
  chains: chains as [Chain, ...restChains: Chain[]],
  wallets,
});
