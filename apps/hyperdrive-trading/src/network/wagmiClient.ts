import { getDefaultWallets } from "@rainbow-me/rainbowkit";
import { cloudChain, cloudChainRpcProvider } from "src/network/cloudChain";
import { Chain, ChainProviderFn, configureChains, createConfig } from "wagmi";
import { foundry } from "wagmi/chains";
import { jsonRpcProvider } from "wagmi/providers/jsonRpc";
const {
  VITE_LOCALHOST_NODE_RPC_URL,
  VITE_CUSTOM_CHAIN_NODE_RPC_URL,
  VITE_CUSTOM_CHAIN_ADDRESSES_URL,
  VITE_CUSTOM_CHAIN_CHAIN_ID,
  VITE_WALLET_CONNECT_PROJECT_ID,
} = import.meta.env;

const chainsToConfigure: Chain[] = [];
const providersToConfigure: ChainProviderFn[] = [];

// Localhost devnet
if (VITE_LOCALHOST_NODE_RPC_URL) {
  chainsToConfigure.push(foundry);
  providersToConfigure.push(
    jsonRpcProvider({
      rpc: () => ({
        http: VITE_LOCALHOST_NODE_RPC_URL,
      }),
    }),
  );
}

// CloudChain (if proper env is set)
if (
  VITE_CUSTOM_CHAIN_NODE_RPC_URL &&
  VITE_CUSTOM_CHAIN_CHAIN_ID &&
  VITE_CUSTOM_CHAIN_ADDRESSES_URL
) {
  chainsToConfigure.push(cloudChain);
  providersToConfigure.push(cloudChainRpcProvider);
}

const { chains, publicClient, webSocketPublicClient } = configureChains(
  chainsToConfigure,
  providersToConfigure,
);

export const wagmiChains = chains;

const { connectors } = getDefaultWallets({
  appName: "Hyperdrive",
  projectId: VITE_WALLET_CONNECT_PROJECT_ID || undefined,
  chains,
});

export const wagmiConfig = createConfig({
  autoConnect: true,
  connectors,
  publicClient,
  webSocketPublicClient,
});
