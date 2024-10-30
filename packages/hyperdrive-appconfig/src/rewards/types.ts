import { Address, PublicClient } from "viem";

/**
 * Transferable token rewards apply to tokens with a known fiat price,
 * allowing their APY to be added to the hyperdrive pool’s overall APY.
 */
export interface TransferableTokenReward {
  type: "transferableToken";
  /**
   * The apy of the token reward in 18-decimal precision
   */
  apy: bigint;
  tokenAddress: Address;
}

/**
 * Non-transferable token rewards apply to tokens without a reliable fiat price
 * or are non-transferable. They display the number of tokens rewarded per
 * thousand dollars deposited. For example: 36.23 tokens per $1k/year.
 */
export interface NonTransferableTokenReward {
  type: "nonTransferableToken";
  tokenAddress: Address;
  tokensPerThousandUsd: bigint;
  depositDurationDays: number; // 365 = 1 year
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

export type AnyReward =
  | TransferableTokenReward
  | NonTransferableTokenReward
  | InfoReward;

export type RewardsResolver = (
  publicClient: PublicClient,
) => Promise<AnyReward[]>;
