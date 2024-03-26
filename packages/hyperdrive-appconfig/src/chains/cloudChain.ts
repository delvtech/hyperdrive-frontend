import { Chain } from "viem";

export const cloudChain: Chain = {
  id: +(process.env.CLOUDCHAIN_CHAIN_ID as string),
  name: "☁️ \u00A0 Chain",
  nativeCurrency: {
    decimals: 18,
    name: "Ether",
    symbol: "ETH",
  },
  rpcUrls: {
    public: { http: [process.env.CLOUDCHAIN_NODE_RPC_URL as string] },
    default: { http: [process.env.CLOUDCHAIN_NODE_RPC_URL as string] },
  },
};
