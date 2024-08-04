import type { PoolInfo } from "@delvtech/hyperdrive-viem";
import { useQuery } from "@tanstack/react-query";
import { makeQueryKey } from "src/base/makeQueryKey";
import { useReadHyperdrive } from "src/ui/hyperdrive/hooks/useReadHyperdrive";
import type { Address } from "viem";
export function usePoolInfo({
  hyperdriveAddress,
  enabled = true,
}: {
  hyperdriveAddress: Address;
  enabled?: boolean;
}): {
  poolInfo: PoolInfo | undefined;
} {
  const readHyperdrive = useReadHyperdrive(hyperdriveAddress);
  const queryEnabled = !!readHyperdrive && !!enabled;
  const { data: poolInfo } = useQuery({
    queryKey: makeQueryKey("poolInfo", {
      hyperdriveAddress,
    }),
    queryFn: queryEnabled ? () => readHyperdrive.getPoolInfo() : undefined,
    enabled: queryEnabled,
  });

  return { poolInfo };
}
