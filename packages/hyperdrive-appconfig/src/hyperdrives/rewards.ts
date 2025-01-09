import { getAddLiquidityRewardId } from "src/rewards/actions/lp";
import { getOpenShortRewardId } from "src/rewards/actions/short";
import { AnyRewardId } from "src/rewards/actions/types";
import { RewardResolverKey } from "src/rewards/resolvers";
import { Address } from "viem";

export interface HyperdriveRewardsMap {
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
}): Record<AnyRewardId, RewardResolverKey[]> {
  const rewards: Record<AnyRewardId, RewardResolverKey[]> = {};
  rewardsMap?.short?.forEach((reward) => {
    const key = getOpenShortRewardId({ hyperdriveAddress, chainId });
    rewards[key] = [...(rewards[key] || []), reward];
  });
  rewardsMap?.lp?.forEach((reward) => {
    const key = getAddLiquidityRewardId({ hyperdriveAddress, chainId });
    rewards[key] = [...(rewards[key] || []), reward];
  });
  return rewards;
}
