import { QueryStatus, useQuery } from "@tanstack/react-query";
import { makeQueryKey2 } from "src/base/makeQueryKey";
import { useReadHyperdrive } from "src/ui/hyperdrive/hooks/useReadHyperdrive";
import { Address } from "viem";

export function useCurrentLongPrice({
  hyperdriveAddress,
  chainId,
}: {
  hyperdriveAddress: Address;
  chainId: number;
}): {
  longPrice: bigint | undefined;
  longPriceStatus: QueryStatus;
} {
  const readHyperdrive = useReadHyperdrive({
    chainId,
    address: hyperdriveAddress,
  });
  const queryEnabled = !!readHyperdrive;
  const { data, status } = useQuery({
    queryKey: makeQueryKey2({
      namespace: "hyperdrive",
      queryId: "currentLongPrice",
      params: {
        chainId,
        hyperdriveAddress: hyperdriveAddress,
      },
    }),
    queryFn: queryEnabled ? () => readHyperdrive.getLongPrice() : undefined,
    enabled: queryEnabled,
  });

  return {
    longPrice: data,
    longPriceStatus: status,
  };
}
