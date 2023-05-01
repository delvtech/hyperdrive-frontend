/* eslint-disable @typescript-eslint/explicit-module-boundary-types */
import { HyperdriveABI } from "@hyperdrive/core";
import { HyperdriveMarket } from "src/config/HyperdriveConfig";
import { useContractRead } from "wagmi";

export function useHyperdrivePoolInfo(market: HyperdriveMarket) {
  const { data: poolInfo, status: poolInfoStatus } = useContractRead({
    address: market.address,
    abi: HyperdriveABI,
    functionName: "getPoolInfo",
  });

  return { poolInfo, poolInfoStatus };
}
