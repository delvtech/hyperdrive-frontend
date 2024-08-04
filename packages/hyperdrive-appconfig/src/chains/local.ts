import type { Chain } from "viem";

export const localChain: Chain = {
  id: +(process.env.LOCAL_CHAIN_ID as string),
  name: "Local Node",
  nativeCurrency: {
    decimals: 18,
    name: "Ether",
    symbol: "ETH",
  },
  rpcUrls: {
    public: { http: [process.env.LOCAL_NODE_RPC_URL as string] },
    default: { http: [process.env.LOCAL_NODE_RPC_URL as string] },
  },
};
