/* eslint-disable @typescript-eslint/explicit-module-boundary-types */
import { HyperdriveABI } from "@hyperdrive/core";
import { Address, useContractRead } from "wagmi";

export function useHyperdrivePoolInfo(marketAddress: Address) {
  const { data: poolInfo, status: poolInfoStatus } = useContractRead({
    address: marketAddress,
    abi: HyperdriveABI,
    functionName: "getPoolInfo",
  });

  return { poolInfo, poolInfoStatus };
}
