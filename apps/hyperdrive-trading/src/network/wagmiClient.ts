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
import { foundry, gnosis, linea, mainnet, sepolia } from "wagmi/chains";

const {
  VITE_LOCALHOST_NODE_RPC_URL,
  VITE_CUSTOM_CHAIN_NODE_RPC_URL,
  VITE_CUSTOM_CHAIN_CHAIN_ID,
  VITE_WALLET_CONNECT_PROJECT_ID,
  VITE_SEPOLIA_RPC_URL,
  VITE_MAINNET_RPC_URL,
  VITE_LINEA_RPC_URL,
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

const chainConfigs: Record<string, WagmiClientConfig> = {
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
    chain: linea,
  },
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
    chain: cloudChain,
    chainId: VITE_CUSTOM_CHAIN_CHAIN_ID,
  },
  sepolia: {
    rpcUrl: VITE_SEPOLIA_RPC_URL,
    chain: sepolia,
    wallets: [capsuleWallet],
  },
};

const chains: Chain[] = [];
const transports: Record<string, Transport> = {};
const customWallets: CreateWalletFn[] = [];
const recommendedWallets = [
  injectedWallet,
  safeWallet,
  rainbowWallet,
  metaMaskWallet,
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
