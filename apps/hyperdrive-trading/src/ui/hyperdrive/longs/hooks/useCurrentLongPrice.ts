import { type QueryStatus, useQuery } from "@tanstack/react-query";
import { makeQueryKey } from "src/base/makeQueryKey";
import { useReadHyperdrive } from "src/ui/hyperdrive/hooks/useReadHyperdrive";
import type { Address } from "viem";

export function useCurrentLongPrice(hyperdriveAddress: Address): {
  longPrice: bigint | undefined;
  longPriceStatus: QueryStatus;
} {
  const readHyperdrive = useReadHyperdrive(hyperdriveAddress);
  const queryEnabled = !!readHyperdrive;
  const { data, status } = useQuery({
    queryKey: makeQueryKey("current-long-price", {
      hyperdriveAddress: hyperdriveAddress,
    }),
    queryFn: queryEnabled ? () => readHyperdrive.getLongPrice() : undefined,
    enabled: queryEnabled,
  });

  return {
    longPrice: data,
    longPriceStatus: status,
  };
}
