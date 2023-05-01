/* eslint-disable @typescript-eslint/explicit-module-boundary-types */
import { HyperdriveABI } from "@hyperdrive/core";
import { Address, useContractRead } from "wagmi";

export function useHyperdrivePoolConfig(marketAddress: Address) {
  const { data: poolConfig, status: poolConfigStatus } = useContractRead({
    address: marketAddress,
    abi: HyperdriveABI,
    functionName: "getPoolConfiguration",
  });

  return { poolConfig, poolConfigStatus };
}
