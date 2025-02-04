import { Chain } from "viem";

const { VITE_REWARDS_FORK_NODE_RPC_URL, VITE_REWARDS_FORK_CHAIN_ID } =
  import.meta.env;

export const rewardsFork: Chain = {
  id: +VITE_REWARDS_FORK_CHAIN_ID,
  name: "RewardsFork",
  nativeCurrency: {
    decimals: 18,
    name: "Ether",
    symbol: "ETH",
  },
  rpcUrls: {
    public: { http: [VITE_REWARDS_FORK_NODE_RPC_URL] },
    default: { http: [VITE_REWARDS_FORK_NODE_RPC_URL] },
  },
};
