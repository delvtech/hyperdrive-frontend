import { HyperdriveConfig } from "@delvtech/hyperdrive-appconfig";
import { ClosedShort } from "@delvtech/hyperdrive-js-core";
import { useQuery } from "@tanstack/react-query";
import { makeQueryKey } from "src/base/makeQueryKey";
import { useReadHyperdrive } from "src/ui/hyperdrive/hooks/useReadHyperdrive";
import { useOpenOrClosedSearchParam } from "src/ui/markets/hooks/useOpenOrClosedSearchParam";
import { Address } from "viem";

export function useTotalClosedShortsValue({
  hyperdrive,
  account,
  closedShorts,
  enabled,
}: {
  hyperdrive: HyperdriveConfig;
  account: Address | undefined;
  closedShorts: ClosedShort[] | undefined;
  enabled: boolean;
}): {
  totalClosedShortsValue: bigint | undefined;
  isLoading: boolean;
  totalClosedShortsValueError: Error;
} {
  const readHyperdrive = useReadHyperdrive({
    chainId: hyperdrive.chainId,
    address: hyperdrive.address,
  });
  const activeOpenOrClosedTab = useOpenOrClosedSearchParam();

  const queryEnabled =
    !!account && !!closedShorts && !!readHyperdrive && enabled;

  const {
    data: totalClosedShortsValue,
    isLoading,
    error: totalClosedShortsValueError,
  } = useQuery({
    queryKey: makeQueryKey("totalClosedShortsValue", {
      chainId: hyperdrive.chainId,
      hyperdriveAddress: hyperdrive.address,
      account,
      activeOpenOrClosedTab,
    }),
    enabled: queryEnabled,
    queryFn: queryEnabled
      ? async () => {
          let totalClosedShortsValue = 0n;
          closedShorts.forEach((short) => {
            totalClosedShortsValue += short.baseAmountReceived;
          });
          return totalClosedShortsValue;
        }
      : undefined,
  });

  return {
    totalClosedShortsValue,
    isLoading,
    totalClosedShortsValueError: totalClosedShortsValueError as Error,
  };
}
