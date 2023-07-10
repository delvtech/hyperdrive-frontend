import { PublicClient, Address, Transport, Chain, formatUnits } from "viem";
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
}: GetFixedAPROptions): Promise<{ apr: bigint; formatted: string }> {
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
      poolInfo.bondReserves,
      poolConfig.initialSharePrice,
      poolConfig.positionDuration,
      poolConfig.timeStretch,
    ],
  });

  // APR is stored in 18 decimals, so to avoid rounding errors, eg:
  // 0.049999999999999996 * 100 = 5, we just take the first 4 characters after
  // the decimal, and format those to a percent, eg: 0.0499 * 100 = 4.99.
  const truncatedAPR = +formatUnits(apr, 18).slice(0, 6);
  const formatted = `${(100 * truncatedAPR).toFixed(2)}`;

  return {
    apr,
    formatted,
  };
}

/**
 * TODO: Move this to its own @hyperdrive/queries package eventually.
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
    enabled: queryEnabled,
    queryKey: [
      "@hyperdrive/core",
      "calculateAPR",
      { hyperdriveAddress, hyperdriveMathAddress },
    ],
    queryFn: queryEnabled
      ? async () =>
          getFixedAPR({
            hyperdriveAddress,
            hyperdriveMathAddress,
            publicClient,
          })
      : undefined,
  };
}
