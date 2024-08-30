import { defineChain } from "viem";

export const gnosisFork = defineChain({
  id: +(process.env.GNOSIS_FORK_CHAIN_ID as string),
  name: "GnosisFork",
  nativeCurrency: { name: "Ether", symbol: "ETH", decimals: 18 },
  rpcUrls: {
    public: { http: [process.env.GNOSIS_FORK_NODE_RPC_URL as string] },
    default: { http: [process.env.GNOSIS_FORK_NODE_RPC_URL as string] },
  },
});
