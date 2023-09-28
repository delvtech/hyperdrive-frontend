import { HyperdriveABI } from "@hyperdrive/sdk";
import { QueryStatus, useQuery } from "@tanstack/react-query";
import { makeQueryKey } from "src/base/makeQueryKey";
import { useReadHyperdrive } from "src/ui/hyperdrive/hooks/useReadHyperdrive";
import { Address, ContractFunctionResult } from "viem";

export function useHyperdrivePoolConfig(hyperdriveAddress: Address): {
  poolConfig:
    | ContractFunctionResult<typeof HyperdriveABI, "getPoolConfig">
    | undefined;
  poolConfigStatus: QueryStatus;
} {
  const readHyperdrive = useReadHyperdrive(hyperdriveAddress);
  const queryEnabled = !!readHyperdrive;
  const { data: poolConfig, status: poolConfigStatus } = useQuery({
    queryKey: makeQueryKey("poolConfig", { hyperdriveAddress }),
    queryFn: queryEnabled ? () => readHyperdrive.getPoolConfig() : undefined,

    enabled: queryEnabled,
  });

  return { poolConfig, poolConfigStatus };
}
