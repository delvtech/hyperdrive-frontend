import { RewardResolverKey } from "src/rewards/resolvers/resolvers";
import { Address } from "viem";

/**
 * Represents a unique Reward ID for a Hyperdrive long position.  The ID
 * contains the hyperdrive address and chain ID.
 */
export type OpenLongRewardId = `hyperdrive/long/${number}/${Address}`;
/**
 * Represents a unique Reward ID for a Hyperdrive short position.  The ID
 * contains the hyperdrive address and chain ID.
 */
export type OpenShortRewardId = `hyperdrive/short/${number}/${Address}`;
/**
 * Represents a unique Reward ID for a Hyperdrive LP position.  The ID
 * contains the hyperdrive address and chain ID.
 */
export type AddLiquidityRewardId = `hyperdrive/lp/${number}/${Address}`;

export function makeOpenLongRewardId({
  hyperdriveAddress,
  chainId,
}: {
  chainId: number;
  hyperdriveAddress: Address;
}): OpenLongRewardId {
  return `hyperdrive/long/${chainId}/${hyperdriveAddress}`;
}
export function makeOpenShortRewardId({
  hyperdriveAddress,
  chainId,
}: {
  hyperdriveAddress: Address;
  chainId: number;
}): OpenShortRewardId {
  return `hyperdrive/short/${chainId}/${hyperdriveAddress}`;
}

export function makeAddLiquidityRewardId({
  hyperdriveAddress,
  chainId,
}: {
  hyperdriveAddress: Address;
  chainId: number;
}): AddLiquidityRewardId {
  return `hyperdrive/lp/${chainId}/${hyperdriveAddress}`;
}

export interface HyperdriveRewardsMap {
  long?: RewardResolverKey[];
  short?: RewardResolverKey[];
  lp?: RewardResolverKey[];
}

type HyperdriveRewardId =
  | OpenLongRewardId
  | OpenShortRewardId
  | AddLiquidityRewardId;
/**
 * Parse a hyperdrive's rewards into the reward system
 */
export function parseHyperdriveRewardsMap({
  hyperdriveAddress,
  chainId,
  rewardsMap,
}: {
  hyperdriveAddress: Address;
  chainId: number;
  rewardsMap: {
    long?: RewardResolverKey[];
    short?: RewardResolverKey[];
    lp?: RewardResolverKey[];
  };
}): Record<HyperdriveRewardId, RewardResolverKey[]> {
  const rewards: Record<HyperdriveRewardId, RewardResolverKey[]> = {};
  rewardsMap?.long?.forEach((rewardResolverKey) => {
    const key = makeOpenLongRewardId({ hyperdriveAddress, chainId });
    rewards[key] = [...(rewards[key] || []), rewardResolverKey];
  });
  rewardsMap?.short?.forEach((reward) => {
    const key = makeOpenShortRewardId({ hyperdriveAddress, chainId });
    rewards[key] = [...(rewards[key] || []), reward];
  });
  rewardsMap?.lp?.forEach((reward) => {
    const key = makeAddLiquidityRewardId({ hyperdriveAddress, chainId });
    rewards[key] = [...(rewards[key] || []), reward];
  });
  return rewards;
}
