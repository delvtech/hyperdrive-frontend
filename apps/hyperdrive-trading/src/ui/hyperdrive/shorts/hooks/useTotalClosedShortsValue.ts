import { ClosedShort } from "@delvtech/hyperdrive-viem";
import { HyperdriveConfig } from "@hyperdrive/appconfig";
import { useQuery } from "@tanstack/react-query";
import { makeQueryKey } from "src/base/makeQueryKey";
import { useReadHyperdrive } from "src/ui/hyperdrive/hooks/useReadHyperdrive";
import { Address } from "viem";

export function useTotalClosedShortsValue({
  hyperdrive,
  account,
  closedShorts,
}: {
  hyperdrive: HyperdriveConfig;
  account: Address | undefined;
  closedShorts: ClosedShort[] | undefined;
}): { totalClosedShortsValue: bigint | undefined; isLoading: boolean } {
  const readHyperdrive = useReadHyperdrive(hyperdrive.address);

  const queryEnabled = !!account && !!closedShorts && !!readHyperdrive;

  const { data: totalClosedShortsValue, isLoading } = useQuery({
    queryKey: makeQueryKey("totalClosedShortsValue", {
      hyperdriveAddress: hyperdrive.address,
      account,
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

  return { totalClosedShortsValue, isLoading };
}
