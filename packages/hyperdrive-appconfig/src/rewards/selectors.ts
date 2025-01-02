import { AppConfig } from "src/appconfig/AppConfig";
import { RewardFunctionKey, rewardFunctions } from "src/rewards/rewards";
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
  return rewardFunctions[yieldSource.rewardsFn];
}

export function getRewardsFn2({
  rewardFn,
}: {
  rewardFn: RewardFunctionKey;
}): RewardsResolver | undefined {
  return rewardFunctions[rewardFn];
}
