import { Checkpoint } from "@hyperdrive/sdk";
import { QueryStatus, useQuery } from "@tanstack/react-query";
import { makeQueryKey } from "src/base/makeQueryKey";
import { useReadHyperdrive } from "src/ui/hyperdrive/hooks/useReadHyperdrive";
import { Address } from "wagmi";

export function useCheckpoint({
  checkpointId,
  hyperdriveAddress,
}: {
  hyperdriveAddress: Address;
  checkpointId: bigint;
}): {
  checkpoint: Checkpoint | undefined;
  checkpointStatus: QueryStatus;
} {
  const readHyperdrive = useReadHyperdrive(hyperdriveAddress);
  const queryEnabled = !!readHyperdrive;
  const { data, status } = useQuery({
    queryKey: makeQueryKey("getCheckpoint", {
      hyperdriveAddress,
      checkpointId: checkpointId.toString(),
    }),
    queryFn: queryEnabled
      ? () => readHyperdrive.getCheckpoint({ checkpointId })
      : undefined,
    enabled: queryEnabled,
  });

  return { checkpoint: data, checkpointStatus: status };
}
