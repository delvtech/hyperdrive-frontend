import { ClosedLong } from "@delvtech/hyperdrive-viem";
import { HyperdriveConfig } from "@hyperdrive/appconfig";
import { useQuery } from "@tanstack/react-query";
import { makeQueryKey } from "src/base/makeQueryKey";
import { useReadHyperdrive } from "src/ui/hyperdrive/hooks/useReadHyperdrive";
import { useOpenOrClosedSearchParam } from "src/ui/markets/hooks/useOpenOrClosedSearchParam";
import { Address } from "viem";

export function useTotalClosedLongsValue({
  hyperdrive,
  account,
  closedLongs,
}: {
  hyperdrive: HyperdriveConfig;
  account: Address | undefined;
  closedLongs: ClosedLong[] | undefined;
}): { totalClosedLongsValue: bigint | undefined; isLoading: boolean } {
  const readHyperdrive = useReadHyperdrive(hyperdrive.address);
  const activeOpenOrClosedTab = useOpenOrClosedSearchParam();

  const queryEnabled = !!account && !!closedLongs && !!readHyperdrive;

  const { data: totalClosedLongsValue, isLoading } = useQuery({
    queryKey: makeQueryKey("totalClosedLongsValue", {
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
