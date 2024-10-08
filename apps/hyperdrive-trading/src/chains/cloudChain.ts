import { Chain } from "viem";

const { VITE_CUSTOM_CHAIN_NODE_RPC_URL, VITE_CUSTOM_CHAIN_CHAIN_ID } =
  import.meta.env;

export const cloudChain: Chain = {
  id: +VITE_CUSTOM_CHAIN_CHAIN_ID,
  name: "CloudChain",
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
