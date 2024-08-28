import { QueryStatus, useQuery } from "@tanstack/react-query";
import { makeQueryKey } from "src/base/makeQueryKey";
import { useReadHyperdrive } from "src/ui/hyperdrive/hooks/useReadHyperdrive";
import { Address } from "viem";

export function useIdleLiquidity({
  hyperdriveAddress,
  chainId,
}: {
  hyperdriveAddress: Address;
  chainId: number;
}): {
  idleLiquidity: bigint | undefined;
  idleLiquidityStatus: QueryStatus;
} {
  const readHyperdrive = useReadHyperdrive({
    chainId,
    address: hyperdriveAddress,
  });
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
