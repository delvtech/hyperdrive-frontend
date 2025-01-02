import { PoolInfo } from "@delvtech/hyperdrive-js";
import { useQuery } from "@tanstack/react-query";
import { makeQueryKey2 } from "src/base/makeQueryKey";
import { useReadHyperdrive } from "src/ui/hyperdrive/hooks/useReadHyperdrive";
import { Address } from "viem";
export function usePoolInfo({
  hyperdriveAddress,
  chainId,
  enabled = true,
}: {
  hyperdriveAddress: Address;
  chainId: number;
  enabled?: boolean;
}): {
  poolInfo: PoolInfo | undefined;
} {
  const readHyperdrive = useReadHyperdrive({
    chainId,
    address: hyperdriveAddress,
  });
  const queryEnabled = !!readHyperdrive && !!enabled;
  const { data: poolInfo } = useQuery({
    queryKey: makeQueryKey2({
      namespace: "hyperdrive",
      queryId: "poolInfo",
      params: {
        chainId,
        hyperdriveAddress,
      },
    }),
    queryFn: queryEnabled ? () => readHyperdrive.getPoolInfo() : undefined,
    enabled: queryEnabled,
  });

  return { poolInfo };
}
