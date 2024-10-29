import { PublicClient } from "viem";
import { RewardsResolver } from "./types";

export const fetchMoonwellRewards: RewardsResolver = (
  publicClient: PublicClient,
) => {
  return async () => {
    return [
      {
        type: "transferableToken",
        message: "This pool is eligible for Moonwell rewards.",
        apy: 0n,
        tokenAddress: "0x0000000000000000000000000000000000000000",
      },
    ];
  };
};
