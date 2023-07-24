import { PublicClient, Address, ContractFunctionResult } from "viem";
import { HyperdriveABI } from "src/abis/Hyperdrive";
import { QueryObserverOptions } from "@tanstack/query-core";
import { makeQueryKey } from "src/makeQueryKey";

interface GetPoolConfigOptions {
  hyperdriveAddress: Address;
  publicClient: PublicClient;
}

export async function getPoolConfig({
  publicClient,
  hyperdriveAddress,
}: GetPoolConfigOptions): Promise<
  ContractFunctionResult<typeof HyperdriveABI, "getPoolConfig">
> {
  return await publicClient.readContract({
    address: hyperdriveAddress,
    abi: HyperdriveABI,
    functionName: "getPoolConfig",
  });
}

export function getPoolConfigQuery({
  hyperdriveAddress,
  publicClient,
}: Partial<GetPoolConfigOptions>): QueryObserverOptions<
  Awaited<ReturnType<typeof getPoolConfig>>
> {
  const queryEnabled = !!hyperdriveAddress && !!publicClient;

  return {
    enabled: queryEnabled,
    queryKey: makeQueryKey("getPoolConfig", { hyperdriveAddress }),
    queryFn: queryEnabled
      ? async () =>
          getPoolConfig({
            hyperdriveAddress,
            publicClient,
          })
      : undefined,
    // pool config is static constants, so it never needs to be refreshed
    staleTime: Infinity,
  };
}
