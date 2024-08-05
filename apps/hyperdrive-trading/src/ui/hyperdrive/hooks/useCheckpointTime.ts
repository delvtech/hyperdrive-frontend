import { HyperdriveConfig } from "@hyperdrive/appconfig";
import { useQuery } from "@tanstack/react-query";
import { makeQueryKey } from "src/base/makeQueryKey";
import { QueryStatusWithIdle, getStatus } from "src/base/queryStatus";
import { useReadHyperdrive } from "src/ui/hyperdrive/hooks/useReadHyperdrive";

export function useCheckpointTime({
  hyperdrive,
  timestamp,
}: {
  hyperdrive: HyperdriveConfig;
  timestamp: bigint;
}): {
  checkpointTime: bigint | undefined;
  status: QueryStatusWithIdle;
} {
  const readHyperdrive = useReadHyperdrive(hyperdrive.address);
  const queryEnabled = !!readHyperdrive;
  const { data, status, fetchStatus } = useQuery({
    queryKey: makeQueryKey("accruedYield", {
      hyperdriveAddress: hyperdrive.address,
      timestamp: timestamp.toString(),
    }),
    queryFn: queryEnabled
      ? () => readHyperdrive.getCheckpointTime({ timestamp })
      : undefined,
    enabled: queryEnabled,
  });

  return {
    checkpointTime: data,
    status: getStatus(status, fetchStatus),
  };
}
