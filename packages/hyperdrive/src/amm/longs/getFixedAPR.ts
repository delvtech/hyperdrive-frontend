import { PublicClient, Address, Transport, Chain } from "viem";
import { HyperdriveMathABI } from "src/abis/HyperdriveMath";
import { HyperdriveABI } from "src/abis/Hyperdrive";
import { QueryObserverOptions } from "@tanstack/query-core";

export interface GetFixedAPROptions {
  hyperdriveAddress: Address;
  hyperdriveMathAddress: Address;
  publicClient: PublicClient<Transport, Chain>;
}

export async function getFixedAPR({
  hyperdriveAddress,
  hyperdriveMathAddress,
  publicClient,
}: GetFixedAPROptions): Promise<bigint> {
  // TODO: Move to own method
  const poolConfig = await publicClient.readContract({
    address: hyperdriveAddress,
    abi: HyperdriveABI,
    functionName: "getPoolConfig",
  });

  // TODO: Move to own method
  const poolInfo = await publicClient.readContract({
    address: hyperdriveAddress,
    abi: HyperdriveABI,
    functionName: "getPoolInfo",
  });

  const apr = await publicClient.readContract({
    address: hyperdriveMathAddress,
    abi: HyperdriveMathABI,
    functionName: "calculateAPRFromReserves",
    args: [
      poolInfo.shareReserves,
      poolInfo.shareReserves,
      poolConfig.initialSharePrice,
      poolConfig.positionDuration,
      poolConfig.timeStretch,
    ],
  });

  return apr;
}

/**
 * A query wrapper for consumers who want easy caching via @tanstack/query
 *
 * TODO: Piloting this idea here for now as proof-of-concept. Ultimately
 * @hyperdrive/core should not know about caching and just be pure hyperdrive
 * bindings. If this works well in practice we can move this to a
 * @hyperdrive/queries package.
 */
export function getFixedAPRQuery({
  hyperdriveAddress,
  hyperdriveMathAddress,
  publicClient,
}: Partial<GetFixedAPROptions>): QueryObserverOptions<
  Awaited<ReturnType<typeof getFixedAPR>>
> {
  const queryEnabled =
    !!hyperdriveAddress && !!publicClient && !!hyperdriveMathAddress;

  return {
    enabled: queryEnabled!,
    queryKey: [
      "@hyperdrive/core",
      "calculateAPR",
      { hyperdriveAddress, hyperdriveMathAddress },
    ],
    queryFn: queryEnabled
      ? () =>
          getFixedAPR({
            hyperdriveAddress,
            hyperdriveMathAddress,
            publicClient,
          })
      : undefined,
  };
}
