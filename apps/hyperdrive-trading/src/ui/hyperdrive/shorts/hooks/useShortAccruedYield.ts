import { useQuery } from "@tanstack/react-query";
import { makeQueryKey } from "src/base/makeQueryKey";
import { useReadHyperdrive } from "src/ui/hyperdrive/hooks/useReadHyperdrive";
import { Address } from "viem";

export function useShortAccruedYield({
  hyperdriveAddress,
  bondAmount,
  decimals,
  checkpointId,
  maturityTimestamp,
  maturityCheckpointId,
}: {
  hyperdriveAddress: Address;
  bondAmount: bigint;
  decimals: number;
  checkpointId: bigint;
  maturityTimestamp: bigint;
  maturityCheckpointId: bigint;
}): {
  accruedYield: bigint | undefined;
  accruedYieldStatus: "error" | "success" | "loading";
} {
  const readHyperdrive = useReadHyperdrive(hyperdriveAddress);
  const queryEnabled = !!readHyperdrive;

  const { data, status } = useQuery({
    queryKey: makeQueryKey("getShortAccruedYield", {
      hyperdriveAddress,
      bondAmount: bondAmount.toString(),
      decimals,
      checkpointId: checkpointId.toString(),
      maturityTimestamp: maturityTimestamp.toString(),
      maturityCheckpointId: maturityCheckpointId.toString(),
    }),
    queryFn: queryEnabled
      ? () =>
          readHyperdrive.getShortAccruedYield({
            bondAmount,
            checkpointId,
            decimals,
            maturityCheckpointId,
            maturityTimestamp,
          })
      : undefined,
    enabled: queryEnabled,
  });

  return { accruedYield: data, accruedYieldStatus: status };
}
