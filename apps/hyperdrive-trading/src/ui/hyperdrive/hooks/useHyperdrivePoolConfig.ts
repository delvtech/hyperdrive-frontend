/* eslint-disable @typescript-eslint/explicit-module-boundary-types */
import { HyperdriveABI } from "@hyperdrive/core";
import { HyperdriveMarket } from "src/config/HyperdriveConfig";
import { useContractRead } from "wagmi";

export function useHyperdrivePoolConfig(market: HyperdriveMarket) {
  const { data: poolConfig, status: poolConfigStatus } = useContractRead({
    address: market.address,
    abi: HyperdriveABI,
    functionName: "getPoolConfiguration",
  });

  return { poolConfig, poolConfigStatus };
}
