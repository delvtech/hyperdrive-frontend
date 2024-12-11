import {
  AnyReward,
  appConfig,
  getRewardsFn,
  HyperdriveConfig,
} from "@delvtech/hyperdrive-appconfig";
import { useQuery } from "@tanstack/react-query";
import { getPublicClient } from "@wagmi/core";
import { makeQueryKey2 } from "src/base/makeQueryKey";
import { wagmiConfig } from "src/network/wagmiClient";
import { PublicClient } from "viem";

export function useRewards(hyperdriveConfig: HyperdriveConfig): {
  rewards: AnyReward[] | undefined;
  status: "error" | "success" | "loading";
} {
  const rewardsFn = getRewardsFn({
    yieldSourceId: hyperdriveConfig.yieldSource,
    appConfig,
  });

  const queryEnabled = !!rewardsFn;

  const { data: rewards, status } = useQuery({
    queryKey: makeQueryKey2("rewards", {
      chainId: hyperdriveConfig.chainId,
      hyperdriveAddress: hyperdriveConfig.address,
    }),
    enabled: queryEnabled,
    queryFn: queryEnabled
      ? async () => {
          const publicClient = getPublicClient(wagmiConfig as any, {
            chainId: hyperdriveConfig.chainId,
          }) as PublicClient;
          return rewardsFn(publicClient);
        }
      : undefined,
  });

  return {
    rewards,
    status,
  };
}
