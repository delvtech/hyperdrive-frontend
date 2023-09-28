import { PoolInfo } from "@hyperdrive/sdk";
import { QueryStatus, useQuery } from "@tanstack/react-query";
import { makeQueryKey } from "src/base/makeQueryKey";
import { useReadHyperdrive } from "src/ui/hyperdrive/hooks/useReadHyperdrive";
import { Address } from "viem";
export function useHyperdrivePoolInfo(marketAddress: Address): {
  poolInfo: PoolInfo | undefined;
  poolInfoStatus: QueryStatus;
} {
  const readHyperdrive = useReadHyperdrive(marketAddress);
  const queryEnabled = !!readHyperdrive;
  const { data: poolInfo, status: poolInfoStatus } = useQuery({
    queryKey: makeQueryKey("poolInfo", { marketAddress }),
    queryFn: queryEnabled ? () => readHyperdrive.getPoolInfo() : undefined,
    enabled: queryEnabled,
  });

  return { poolInfo, poolInfoStatus };
}
