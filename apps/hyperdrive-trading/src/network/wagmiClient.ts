import { getDefaultWallets } from "@rainbow-me/rainbowkit";
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

if (
  VITE_CUSTOM_CHAIN_NODE_RPC_URL &&
  VITE_CUSTOM_CHAIN_CHAIN_ID &&
  VITE_CUSTOM_CHAIN_ADDRESSES_URL
) {
  chainsToConfigure.push({
    id: +VITE_CUSTOM_CHAIN_CHAIN_ID,
    name: "☁️ \u00A0 Chain",
    network: "custom-chain",
    nativeCurrency: {
      decimals: 18,
      name: "Ether",
      symbol: "ETH",
    },
    rpcUrls: {
      public: { http: [VITE_CUSTOM_CHAIN_NODE_RPC_URL] },
      default: { http: [VITE_CUSTOM_CHAIN_NODE_RPC_URL] },
    },
  });

  providersToConfigure.push(
    jsonRpcProvider({
      rpc: () => ({
        http: VITE_CUSTOM_CHAIN_NODE_RPC_URL,
      }),
    }),
  );
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
