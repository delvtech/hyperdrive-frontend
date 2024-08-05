import { type QueryStatus, useQuery } from "@tanstack/react-query";
import { makeQueryKey } from "src/base/makeQueryKey";
import { useReadHyperdrive } from "src/ui/hyperdrive/hooks/useReadHyperdrive";
import type { Address } from "viem";

export function useIdleLiquidity({
  hyperdriveAddress,
}: {
  hyperdriveAddress: Address;
}): {
  idleLiquidity: bigint | undefined;
  idleLiquidityStatus: QueryStatus;
} {
  const readHyperdrive = useReadHyperdrive(hyperdriveAddress);
  const queryEnabled = !!readHyperdrive;
  const { data, status } = useQuery({
    queryKey: makeQueryKey("liquidity", { hyperdriveAddress }),
    queryFn: queryEnabled ? () => readHyperdrive.getIdleLiquidity() : undefined,
    enabled: queryEnabled,
  });

  return {
    idleLiquidity: data,
    idleLiquidityStatus: status,
  };
}
