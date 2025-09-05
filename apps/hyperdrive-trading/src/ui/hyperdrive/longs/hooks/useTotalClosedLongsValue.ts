import { HyperdriveConfig } from "@delvtech/hyperdrive-appconfig";
import { ClosedLong } from "@delvtech/hyperdrive-js";
import { useQuery } from "@tanstack/react-query";
import { makeQueryKey } from "src/base/makeQueryKey";
import { useOpenOrClosedSearchParam } from "src/ui/markets/hooks/useOpenOrClosedSearchParam";
import { Address } from "viem";

export function useTotalClosedLongsValue({
  hyperdrive,
  account,
  closedLongs,
  enabled,
}: {
  hyperdrive: HyperdriveConfig;
  account: Address | undefined;
  closedLongs: ClosedLong[] | undefined;
  enabled: boolean;
}): { totalClosedLongsValue: bigint | undefined; isLoading: boolean } {
  const activeOpenOrClosedTab = useOpenOrClosedSearchParam();

  const queryEnabled = !!account && !!closedLongs && enabled;

  const { data: totalClosedLongsValue, isLoading } = useQuery({
    queryKey: makeQueryKey("totalClosedLongsValue", {
      chainId: hyperdrive.chainId,
      hyperdriveAddress: hyperdrive.address,
      account,
      activeOpenOrClosedTab,
    }),
    enabled: queryEnabled,
    queryFn: queryEnabled
      ? async () => {
          let totalClosedLongsValue = 0n;
          closedLongs.forEach((long) => {
            totalClosedLongsValue += long.baseAmount;
          });
          return totalClosedLongsValue;
        }
      : undefined,
  });

  return { totalClosedLongsValue, isLoading };
}
