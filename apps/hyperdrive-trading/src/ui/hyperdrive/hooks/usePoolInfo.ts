import { ContractReadOptions, PoolInfo } from "@hyperdrive/sdk";
import { QueryStatus, useQuery } from "@tanstack/react-query";
import { makeQueryKey } from "src/base/makeQueryKey";
import { useReadHyperdrive } from "src/ui/hyperdrive/hooks/useReadHyperdrive";
import { Address } from "wagmi";
export function usePoolInfo(
  hyperdriveAddress: Address,
  options?: ContractReadOptions,
): {
  poolInfo: PoolInfo | undefined;
  poolInfoStatus: QueryStatus;
} {
  const readHyperdrive = useReadHyperdrive(hyperdriveAddress);
  const queryEnabled = !!readHyperdrive;
  const { data: poolInfo, status: poolInfoStatus } = useQuery({
    queryKey: makeQueryKey("poolInfo", {
      marketAddress: hyperdriveAddress,
      options,
    }),
    queryFn: queryEnabled
      ? () => readHyperdrive.getPoolInfo(options)
      : undefined,
    enabled: queryEnabled,
  });

  return { poolInfo, poolInfoStatus };
}
