import { HyperdriveConfig } from "@hyperdrive/appconfig";
import { useQuery } from "@tanstack/react-query";
import { makeQueryKey } from "src/base/makeQueryKey";
import { QueryStatusWithIdle, getStatus } from "src/base/queryStatus";
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
  status: QueryStatusWithIdle;
} {
  const readHyperdrive = useReadHyperdrive({
    chainId: hyperdrive.chainId,
    address: hyperdrive.address,
  });
  const queryEnabled = !!readHyperdrive;
  const { data, status, fetchStatus } = useQuery({
    queryKey: makeQueryKey("accruedYield", {
      chainId: hyperdrive.chainId,
      hyperdriveAddress: hyperdrive.address,
      checkpointId: checkpointTime.toString(),
      bondAmount: bondAmount.toString(),
    }),
    queryFn: queryEnabled
      ? () =>
          readHyperdrive.getShortAccruedYield({
            checkpointTime,
            bondAmount,
          })
      : undefined,
    enabled: queryEnabled,
  });

  return {
    accruedYield: data,
    status: getStatus(status, fetchStatus),
  };
}
