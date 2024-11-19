import { useQuery } from "@tanstack/react-query";
import { makeQueryKey } from "src/base/makeQueryKey";
import { Address } from "viem";

export function useRewardsData({ account }: { account: Address | undefined }): {
  rewards: unknown[] | undefined;
  rewardsStatus: "error" | "success" | "loading";
} {
  const queryEnabled = !!account;
  const { data: rewards, status: rewardsStatus } = useQuery({
    queryKey: makeQueryKey("rewards", { account }),
    queryFn: queryEnabled
      ? async () => {
          // TODO: Fetch rewards from server
          return [];
        }
      : undefined,
    enabled: queryEnabled,
  });

  return {
    rewards,
    rewardsStatus,
  };
}
