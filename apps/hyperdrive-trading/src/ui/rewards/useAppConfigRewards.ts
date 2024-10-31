import {
  AnyReward,
  appConfig,
  HyperdriveConfig,
  rewardFunctions,
} from "@delvtech/hyperdrive-appconfig";
import { useQuery } from "@tanstack/react-query";
import { getPublicClient } from "@wagmi/core";
import { makeQueryKey } from "src/base/makeQueryKey";
import { wagmiConfig } from "src/network/wagmiClient";
import { PublicClient } from "viem";

export function useAppConfigRewards(hyperdriveConfig: HyperdriveConfig): {
  rewards: AnyReward[] | undefined;
  status: "error" | "success" | "loading";
} {
  const rewardsFn =
    appConfig.yieldSources[hyperdriveConfig.yieldSource].rewardsFn;

  const queryEnabled = !!rewardsFn;

  const { data: rewards, status } = useQuery({
    queryKey: makeQueryKey("rewards", {
      hyperdriveAddress: hyperdriveConfig.address,
      chainId: hyperdriveConfig.chainId,
    }),
    enabled: queryEnabled,
    queryFn: queryEnabled
      ? async () => {
          const publicClient = getPublicClient(wagmiConfig as any, {
            chainId: hyperdriveConfig.chainId,
          }) as PublicClient;
          return rewardFunctions[rewardsFn](publicClient);
        }
      : undefined,
  });

  return {
    rewards,
    status,
  };
}
