import { PoolInfo } from "@hyperdrive/sdk";
import { useQuery } from "@tanstack/react-query";
import { makeQueryKey } from "src/base/makeQueryKey";
import { useReadHyperdrive } from "src/ui/hyperdrive/hooks/useReadHyperdrive";
import { Address } from "wagmi";
export function usePoolInfo(hyperdriveAddress: Address): {
  poolInfo: PoolInfo | undefined;
} {
  const readHyperdrive = useReadHyperdrive(hyperdriveAddress);
  const queryEnabled = !!readHyperdrive;
  const { data: poolInfo } = useQuery({
    queryKey: makeQueryKey("poolInfo", {
      hyperdriveAddress,
    }),
    queryFn: queryEnabled ? () => readHyperdrive.getPoolInfo() : undefined,
    enabled: queryEnabled,
  });

  return { poolInfo };
}
