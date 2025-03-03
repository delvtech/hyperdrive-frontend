import { RewardConfigId } from "src/rewards/resolvers";
import { Address, PublicClient } from "viem";

/**
 * Transferable token rewards apply to tokens with a known fiat price,
 * allowing their APY to be added to the hyperdrive pool’s overall APY.
 */
export interface ApyReward {
  type: "apy";
  /**
   * The apy of the token reward in 18-decimal precision
   */
  apy: bigint;
  tokenAddress: Address;
  chainId: number;
}

/**
 * Non-transferable token rewards apply to tokens without a reliable fiat price
 * or are non-transferable. They display the number of tokens rewarded per
 * thousand dollars deposited. For example: 36.23 tokens per $1k/year.
 */
export interface TokenAmountReward {
  type: "tokenAmount";
  tokenAddress: Address;
  tokensPerThousandUsd: bigint;
  depositDurationDays: number; // 365 = 1 year
  chainId: number;
}

export interface PointMultiplierReward {
  type: "pointMultiplier";
  /**
   * The multiplier for the point reward, eg: 2n means "2x"
   */
  pointMultiplier: bigint;

  /**
   * The name for the point token, such as "Ether.fi Loyalty Points" or "SPIN Rewards"
   */
  pointTokenLabel: string;
  iconUrl: string;
}

/**
 * Info rewards are used when reward details are unclear. They display a message
 * to the user, such as "This pool is eligible for L-XPL Rewards."
 */
export interface InfoReward {
  type: "info";
  message: string;
  iconUrl: string;
}

export type AnyReward = (
  | ApyReward
  | TokenAmountReward
  | PointMultiplierReward
  | InfoReward
) & {
  /**
   * The URL to link to for more information about the reward.
   */
  moreInfoUrl?: string;
};

export type RewardResolver = (
  publicClient: PublicClient,
) => Promise<AnyReward[]>;

export interface RewardConfig {
  id: RewardConfigId;
  chainIds: number[];

  resolver: RewardResolver;
}
