import {
  AnyReward,
  appConfig,
  HyperdriveConfig,
  rewardFunctions,
} from "@delvtech/hyperdrive-appconfig";
import { useQuery } from "@tanstack/react-query";
import { makeQueryKey } from "src/base/makeQueryKey";

export function useRewardsExample(hyperdriveConfig: HyperdriveConfig): {
  rewards: AnyReward[] | undefined;
  status: "error" | "success" | "loading";
} {
  const rewardsConfig =
    appConfig.yieldSources[hyperdriveConfig.yieldSource].rewards;

  const queryEnabled = !!rewardsConfig;

  const { data: rewards, status } = useQuery({
    queryKey: makeQueryKey("rewards", {
      hyperdriveAddress: hyperdriveConfig.address,
      chainId: hyperdriveConfig.chainId,
    }),
    queryFn: queryEnabled
      ? async () => {
          const rewardsFn = rewardFunctions[rewardsConfig.functionName];
          const rewardsArgs = rewardsConfig.args;
          // @ts-expect-error we know that the function arguments are correct at
          // the type level thanks to how appconfig is typed
          return rewardsFn(...rewardsArgs);
        }
      : undefined,
  });

  return {
    rewards,
    status,
  };
}
