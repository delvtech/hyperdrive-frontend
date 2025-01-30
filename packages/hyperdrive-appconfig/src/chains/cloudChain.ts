import { defineChain } from "viem";

export const cloudChain = defineChain({
  id: +(process.env.CLOUDCHAIN_CHAIN_ID as string),
  name: "CloudChain",
  nativeCurrency: { name: "Ether", symbol: "ETH", decimals: 18 },
  rpcUrls: {
    public: { http: [process.env.CLOUDCHAIN_RPC_URL as string] },
    default: { http: [process.env.CLOUDCHAIN_RPC_URL as string] },
  },
});

/**
 * A chain set up for testing rewards claiming via a merkl contract deployed to
 * a mainnet fork.
 */
export const rewardsMainnetFork = defineChain({
  id: +(process.env.REWARDS_MAINNET_FORK_CHAIN_ID as string),
  name: "RewardsMainnetFork",
  nativeCurrency: { name: "Ether", symbol: "ETH", decimals: 18 },
  rpcUrls: {
    public: { http: [process.env.REWARDS_MAINNET_FORK_RPC_URL as string] },
    default: { http: [process.env.REWARDS_MAINNET_FORK_RPC_URL as string] },
  },
});
