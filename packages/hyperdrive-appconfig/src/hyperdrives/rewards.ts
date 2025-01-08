import { RewardResolverKey } from "src/rewards/resolvers";
import { Address } from "viem";

export type LongRewardKey = `hyperdrive/long/${number}/${Address}`;
export type ShortRewardKey = `hyperdrive/short/${number}/${Address}`;
export type LpRewardKey = `hyperdrive/lp/${number}/${Address}`;

export type AnyRewardKey = LongRewardKey | ShortRewardKey | LpRewardKey;

export function makeLongRewardKey({
  hyperdriveAddress,
  chainId,
}: {
  chainId: number;
  hyperdriveAddress: Address;
}): LongRewardKey {
  return `hyperdrive/long/${chainId}/${hyperdriveAddress}`;
}
export function makeShortRewardKey({
  hyperdriveAddress,
  chainId,
}: {
  hyperdriveAddress: Address;
  chainId: number;
}): ShortRewardKey {
  return `hyperdrive/short/${chainId}/${hyperdriveAddress}`;
}

export function makeLpRewardKey({
  hyperdriveAddress,
  chainId,
}: {
  hyperdriveAddress: Address;
  chainId: number;
}): LpRewardKey {
  return `hyperdrive/lp/${chainId}/${hyperdriveAddress}`;
}

export interface HyperdriveRewardsMap {
  long?: RewardResolverKey[];
  short?: RewardResolverKey[];
  lp?: RewardResolverKey[];
}

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
}): Record<AnyRewardKey, RewardResolverKey[]> {
  const rewards: Record<AnyRewardKey, RewardResolverKey[]> = {};
  rewardsMap?.long?.forEach((reward) => {
    const key = makeLongRewardKey({ hyperdriveAddress, chainId });
    rewards[key] = [...(rewards[key] || []), reward];
  });
  rewardsMap?.short?.forEach((reward) => {
    const key = makeShortRewardKey({ hyperdriveAddress, chainId });
    rewards[key] = [...(rewards[key] || []), reward];
  });
  rewardsMap?.lp?.forEach((reward) => {
    const key = makeLpRewardKey({ hyperdriveAddress, chainId });
    rewards[key] = [...(rewards[key] || []), reward];
  });
  return rewards;
}
