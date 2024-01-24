import { useQuery } from "@tanstack/react-query";
import { makeQueryKey } from "src/base/makeQueryKey";
import { HyperdriveConfig } from "src/hyperdrive/HyperdriveConfig";
import { useReadHyperdrive } from "src/ui/hyperdrive/hooks/useReadHyperdrive";

export function useAccruedYield({
  hyperdrive,
  checkpointId,
  bondAmount,
}: {
  hyperdrive: HyperdriveConfig;
  checkpointId: bigint;
  bondAmount: bigint;
}): {
  accruedYield: bigint | undefined;
} {
  const readHyperdrive = useReadHyperdrive(hyperdrive.address);
  const queryEnabled = !!readHyperdrive;
  const { data: accruedYield } = useQuery({
    queryKey: makeQueryKey("accruedYield", {
      hyperdriveAddress: hyperdrive.address,
      checkpointId: checkpointId.toString(),
      bondAmount: bondAmount.toString(),
    }),
    queryFn: queryEnabled
      ? () =>
          readHyperdrive.getShortAccruedYield({
            checkpointId,
            bondAmount,
            decimals: hyperdrive.baseToken.decimals,
          })
      : undefined,
    enabled: queryEnabled,
  });
  return { accruedYield };
}
