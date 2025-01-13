import { AppConfig } from "src/appconfig/AppConfig";
import { getAddLiquidityRewardId } from "src/rewards/actions/lp";
import { getOpenShortRewardId } from "src/rewards/actions/short";
import { getYieldSourceRewardId } from "src/rewards/actions/yieldSource";
import { RewardResolverKey, rewardResolvers } from "src/rewards/resolvers";
import { RewardsResolver } from "src/rewards/types";
import { YieldSourceId } from "src/yieldSources/types";
import { Address } from "viem";

/**
 * Find the rewards resolver for a given yield source. This will return
 * `undefined` if no rewards function exists for this yield source.
 *
 * @deprecated use getYieldSourceRewardResolvers instead
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

export function getYieldSourceRewardResolvers({
  yieldSourceId,
  chainId,
  appConfig,
}: {
  yieldSourceId: YieldSourceId;
  chainId: number;
  appConfig: AppConfig;
}): RewardsResolver[] | undefined {
  const yieldSourceRewardId = getYieldSourceRewardId({
    chainId,
    yieldSourceId,
  });
  const resolvers = appConfig.rewards[yieldSourceRewardId];
  if (!resolvers) {
    return;
  }

  return resolvers.map((resolver) => rewardResolvers[resolver]);
}

export function getOpenShortRewardResolverIds({
  hyperdriveAddress,
  chainId,
  appConfig,
}: {
  hyperdriveAddress: Address;
  chainId: number;
  appConfig: AppConfig;
}): RewardResolverKey[] | undefined {
  const openShortRewardId = getOpenShortRewardId({
    chainId,
    hyperdriveAddress,
  });

  return appConfig.rewards[openShortRewardId];
}

export function getAddLiquidityRewardResolverIds({
  hyperdriveAddress,
  chainId,
  appConfig,
}: {
  hyperdriveAddress: Address;
  chainId: number;
  appConfig: AppConfig;
}): RewardResolverKey[] | undefined {
  const addLiquidityId = getAddLiquidityRewardId({
    chainId,
    hyperdriveAddress,
  });

  return appConfig.rewards[addLiquidityId];
}
