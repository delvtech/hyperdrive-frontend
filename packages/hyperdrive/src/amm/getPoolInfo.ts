import {
  PublicClient,
  Transport,
  Chain,
  Address,
  ContractFunctionResult,
} from "viem";
import { HyperdriveABI } from "src/abis/Hyperdrive";
import { QueryObserverOptions } from "@tanstack/query-core";

interface GetPoolInfoOptions {
  hyperdriveAddress: Address;
  publicClient: PublicClient<Transport, Chain>;
}

export async function getPoolInfo({
  publicClient,
  hyperdriveAddress,
}: GetPoolInfoOptions): Promise<
  ContractFunctionResult<typeof HyperdriveABI, "getPoolInfo">
> {
  return publicClient.readContract({
    address: hyperdriveAddress,
    abi: HyperdriveABI,
    functionName: "getPoolInfo",
  });
}

export function getPoolInfoQuery({
  hyperdriveAddress,
  publicClient,
}: Partial<GetPoolInfoOptions>): QueryObserverOptions<
  Awaited<ReturnType<typeof getPoolInfo>>
> {
  const queryEnabled = !!hyperdriveAddress && !!publicClient;

  return {
    enabled: queryEnabled,
    queryKey: ["@hyperdrive/core", "getPoolInfo", { hyperdriveAddress }],
    queryFn: queryEnabled
      ? async () =>
          getPoolInfo({
            hyperdriveAddress,
            publicClient,
          })
      : undefined,
  };
}
