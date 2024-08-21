import { defineChain } from "viem";

export const cloudChain = defineChain({
  id: +(process.env.CLOUDCHAIN_CHAIN_ID as string),
  name: "CloudChain",
  nativeCurrency: { name: "Ether", symbol: "ETH", decimals: 18 },
  rpcUrls: {
    public: { http: [process.env.CLOUDCHAIN_NODE_RPC_URL as string] },
    default: { http: [process.env.CLOUDCHAIN_NODE_RPC_URL as string] },
  },
});
