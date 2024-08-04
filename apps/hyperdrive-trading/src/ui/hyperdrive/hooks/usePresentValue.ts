import { type QueryStatus, useQuery } from "@tanstack/react-query";
import { makeQueryKey } from "src/base/makeQueryKey";
import { useReadHyperdrive } from "src/ui/hyperdrive/hooks/useReadHyperdrive";
import type { Address } from "viem";

export function usePresentValue({
  hyperdriveAddress,
}: {
  hyperdriveAddress: Address;
}): {
  presentValue: bigint | undefined;
  presentValueStatus: QueryStatus;
} {
  const readHyperdrive = useReadHyperdrive(hyperdriveAddress);
  const queryEnabled = !!readHyperdrive;
  const { data, status } = useQuery({
    queryKey: makeQueryKey("present-value", { hyperdriveAddress }),
    queryFn: queryEnabled ? () => readHyperdrive.getPresentValue() : undefined,
    enabled: queryEnabled,
  });

  return {
    presentValue: data,
    presentValueStatus: status,
  };
}
