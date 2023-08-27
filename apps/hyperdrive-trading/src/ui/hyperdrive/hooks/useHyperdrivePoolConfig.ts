import { HyperdriveABI } from "@hyperdrive/core";
import { getPoolConfigQuery } from "@hyperdrive/queries";
import { QueryStatus, useQuery } from "@tanstack/react-query";
import { ContractFunctionResult } from "viem";
import { Address } from "wagmi";
import { useHyperdriveContract } from "./useHyperdriveContract";

export function useHyperdrivePoolConfig(hyperdriveAddress: Address): {
  poolConfig:
    | ContractFunctionResult<typeof HyperdriveABI, "getPoolConfig">
    | undefined;
  poolConfigStatus: QueryStatus;
} {
  const hyperdriveContract = useHyperdriveContract(hyperdriveAddress);
  const { data: poolConfig, status: poolConfigStatus } = useQuery(
    getPoolConfigQuery(hyperdriveContract),
  );

  return { poolConfig, poolConfigStatus };
}
