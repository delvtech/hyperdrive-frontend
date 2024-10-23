import { Address } from "viem";

export type Reward =
  | {
      type: "apy";
      apy: bigint;
      tokenAddress: Address;
    }
  | {
      type: "emissions";
      // example: 36.23 tokens per $1k/year
      tokenAddress: Address;
      tokensPerThousandUsd: bigint; // 36.23
      depositDurationDays: number; // 365 = 1 year
    };

export type RewardsFn = () => Promise<Reward[]>;
