import { getDefaultWallets } from "@rainbow-me/rainbowkit";
import { cloudChain, cloudChainRpcProvider } from "src/network/cloudChain";
import { Chain, ChainProviderFn, configureChains, createConfig } from "wagmi";
import { foundry, goerli } from "wagmi/chains";
import { alchemyProvider } from "wagmi/providers/alchemy";
import { jsonRpcProvider } from "wagmi/providers/jsonRpc";
const {
  VITE_LOCALHOST_NODE_RPC_URL,
  VITE_CUSTOM_CHAIN_NODE_RPC_URL,
  VITE_CUSTOM_CHAIN_ADDRESSES_URL,
  VITE_CUSTOM_CHAIN_CHAIN_ID,
  VITE_WALLET_CONNECT_PROJECT_ID,
  VITE_ALCHEMY_GOERLI_RPC_KEY,
} = import.meta.env;

const chainsToConfigure: Chain[] = [];
const providersToConfigure: ChainProviderFn[] = [];

// Goerli
if (VITE_ALCHEMY_GOERLI_RPC_KEY) {
  chainsToConfigure.push(goerli);
  providersToConfigure.push(
    alchemyProvider({ apiKey: VITE_ALCHEMY_GOERLI_RPC_KEY }),
  );
}

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

// CloudChain
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
