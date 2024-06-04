import { HyperdriveConfig } from "@hyperdrive/appconfig";
import { useQuery } from "@tanstack/react-query";
import { makeQueryKey } from "src/base/makeQueryKey";
import { useReadHyperdrive } from "src/ui/hyperdrive/hooks/useReadHyperdrive";

export function useAccruedYield({
  hyperdrive,
  checkpointTime,
  bondAmount,
}: {
  hyperdrive: HyperdriveConfig;
  checkpointTime: bigint;
  bondAmount: bigint;
}): {
  accruedYield: bigint | undefined;
} {
  const readHyperdrive = useReadHyperdrive(hyperdrive.address);
  const queryEnabled = !!readHyperdrive;
  const { data: accruedYield } = useQuery({
    queryKey: makeQueryKey("accruedYield", {
      hyperdriveAddress: hyperdrive.address,
      checkpointId: checkpointTime.toString(),
      bondAmount: bondAmount.toString(),
    }),
    queryFn: queryEnabled
      ? () =>
          readHyperdrive.getShortAccruedYield({
            checkpointTime: checkpointTime,
            bondAmount,
          })
      : undefined,
    enabled: queryEnabled,
  });
  return { accruedYield };
}
