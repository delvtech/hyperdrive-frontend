import { Chain } from "wagmi";
import { jsonRpcProvider } from "wagmi/providers/jsonRpc";

const { VITE_CUSTOM_CHAIN_NODE_RPC_URL, VITE_CUSTOM_CHAIN_CHAIN_ID } =
  import.meta.env;

export const cloudChain: Chain = {
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
};

export const cloudChainRpcProvider = jsonRpcProvider({
  rpc: () => ({
    http: VITE_CUSTOM_CHAIN_NODE_RPC_URL,
  }),
});
