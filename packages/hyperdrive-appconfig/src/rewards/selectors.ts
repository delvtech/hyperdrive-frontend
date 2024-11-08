import { AppConfig } from "src/appconfig/AppConfig";
import { rewardFunctions } from "src/rewards/rewards";
import { RewardsResolver } from "src/rewards/types";
import { YieldSourceId } from "src/yieldSources/types";

/**
 * Find the rewards resolver for a given yield source. This will return
 * `undefined` if no rewards function exists for this yield source.
 */
export function getRewardsFn({
  yieldSourceId,
  appConfig,
}: {
  // TODO: change this type to YieldSourceId once YieldSourceId can be used outside
  // of the appconfig package.k
  yieldSourceId: string;
  appConfig: AppConfig;
}): RewardsResolver | undefined {
  // casting this for now because YieldSourceId doesn't work outside of the appconfig package
  const yieldSource = appConfig.yieldSources[yieldSourceId as YieldSourceId];
  if (!yieldSource.rewardsFn) {
    return;
  }
  return rewardFunctions[yieldSource.rewardsFn];
}
