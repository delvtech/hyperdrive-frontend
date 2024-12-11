import { QueryStatus, useQuery } from "@tanstack/react-query";
import { makeQueryKey2 } from "src/base/makeQueryKey";
import { useReadHyperdrive } from "src/ui/hyperdrive/hooks/useReadHyperdrive";
import { Address } from "viem";

export function usePresentValue({
  chainId,
  hyperdriveAddress,
}: {
  chainId: number;
  hyperdriveAddress: Address;
}): {
  presentValue: bigint | undefined;
  presentValueStatus: QueryStatus;
} {
  const readHyperdrive = useReadHyperdrive({
    chainId,
    address: hyperdriveAddress,
  });
  const queryEnabled = !!readHyperdrive;
  const { data, status } = useQuery({
    queryKey: makeQueryKey2("presentValue", { chainId, hyperdriveAddress }),
    queryFn: queryEnabled ? () => readHyperdrive.getPresentValue() : undefined,
    enabled: queryEnabled,
  });

  return {
    presentValue: data,
    presentValueStatus: status,
  };
}
