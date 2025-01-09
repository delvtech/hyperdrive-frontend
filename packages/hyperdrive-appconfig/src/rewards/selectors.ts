import { AppConfig } from "src/appconfig/AppConfig";
import { getAddLiquidityRewardId } from "src/rewards/actions/lp";
import { getOpenShortRewardId } from "src/rewards/actions/short";
import { RewardResolverKey, rewardResolvers } from "src/rewards/resolvers";
import { RewardsResolver } from "src/rewards/types";
import { YieldSourceId } from "src/yieldSources/types";
import { Address } from "viem";

/**
 * Find the rewards resolver for a given yield source. This will return
 * `undefined` if no rewards function exists for this yield source.
 */
export function getYieldSourceRewardsFn({
  yieldSourceId,
  appConfig,
}: {
  yieldSourceId: YieldSourceId;
  appConfig: AppConfig;
}): RewardsResolver | undefined {
  const yieldSource = appConfig.yieldSources[yieldSourceId];
  if (!yieldSource.rewardsFn) {
    return;
  }
  return rewardResolvers[yieldSource.rewardsFn];
}

export function getRewardsFn2({
  rewardFn,
}: {
  rewardFn: RewardResolverKey;
}): RewardsResolver | undefined {
  return rewardResolvers[rewardFn];
}

export function getOpenShortRewardResolvers({
  hyperdriveAddress,
  chainId,
  appConfig,
}: {
  hyperdriveAddress: Address;
  chainId: number;
  appConfig: AppConfig;
}): RewardsResolver[] | undefined {
  const openShortRewardId = getOpenShortRewardId({
    chainId,
    hyperdriveAddress,
  });

  const resolvers = appConfig.rewards[openShortRewardId];
  if (!resolvers) {
    return;
  }

  return resolvers.map((resolver) => rewardResolvers[resolver]);
}

export function getAddLiquidityRewardResolvers({
  hyperdriveAddress,
  chainId,
  appConfig,
}: {
  hyperdriveAddress: Address;
  chainId: number;
  appConfig: AppConfig;
}): RewardsResolver[] | undefined {
  const addLiquidityRewardId = getAddLiquidityRewardId({
    chainId,
    hyperdriveAddress,
  });

  const resolvers = appConfig.rewards[addLiquidityRewardId];
  if (!resolvers) {
    return;
  }

  return resolvers.map((resolver) => rewardResolvers[resolver]);
}
