import { AppConfig } from "src/appconfig/AppConfig";
import { RewardResolverKey, rewardResolvers } from "src/rewards/resolvers";
import { RewardsResolver } from "src/rewards/types";
import { YieldSourceId } from "src/yieldSources/types";

/**
 * Find the rewards resolver for a given yield source. This will return
 * `undefined` if no rewards function exists for this yield source.
 *
 * @deprecated rewards have moved to HyperdriveConfig
 */
export function getRewardsFn({
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
