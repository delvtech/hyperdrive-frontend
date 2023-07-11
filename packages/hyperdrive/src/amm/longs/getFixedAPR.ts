import { PublicClient, Address, Transport, Chain, formatUnits } from "viem";
import { HyperdriveMathABI } from "src/abis/HyperdriveMath";
import { QueryClient, QueryObserverOptions } from "@tanstack/query-core";
import { getPoolConfigQuery } from "src/amm/getPoolConfig";
import { getPoolInfoQuery } from "src/amm/getPoolInfo";

export interface GetFixedAPROptions {
  hyperdriveMathAddress: Address;
  /**
   * Comes from getPoolInfo
   */
  shareReserves: bigint;
  /**
   * Comes from getPoolInfo
   */
  bondReserves: bigint;
  /**
   * Comes from getPoolConfig
   */
  initialSharePrice: bigint;
  /**
   * Comes from getPoolConfig
   */
  positionDuration: bigint;
  /**
   * Comes from getPoolConfig
   */
  timeStretch: bigint;
  publicClient: PublicClient<Transport, Chain>;
}

export async function getFixedAPR({
  hyperdriveMathAddress,
  publicClient,
  shareReserves,
  bondReserves,
  initialSharePrice,
  positionDuration,
  timeStretch,
}: GetFixedAPROptions): Promise<{ apr: bigint; formatted: string }> {
  const apr = await publicClient.readContract({
    address: hyperdriveMathAddress,
    abi: HyperdriveMathABI,
    functionName: "calculateAPRFromReserves",
    args: [
      shareReserves,
      bondReserves,
      initialSharePrice,
      positionDuration,
      timeStretch,
    ],
  });

  const formatted = formatAPR(apr);

  return {
    apr,
    formatted,
  };
}

function formatAPR(apr: bigint) {
  // APR is stored in 18 decimals, so to avoid rounding errors, eg:
  // 0.049999999999999996 * 100 = 5, we just take the first 4 characters after
  // the decimal, and format those to a percent, eg: 0.0499 * 100 = 4.99.
  const truncatedAPR = +formatUnits(apr, 18).slice(0, 6);
  const formatted = `${(100 * truncatedAPR).toFixed(2)}`;
  return formatted;
}

/**
 * TODO: Move this to its own @hyperdrive/queries package eventually.
 */
export function getCurrentFixedAPRQuery({
  hyperdriveAddress,
  hyperdriveMathAddress,
  publicClient,
  queryClient,
}: {
  hyperdriveAddress: Address;
  hyperdriveMathAddress: Address;
  publicClient: PublicClient<Transport, Chain>;
  queryClient: QueryClient;
}): QueryObserverOptions<Awaited<ReturnType<typeof getFixedAPR>>> {
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
      ? async () => {
          const { initialSharePrice, positionDuration, timeStretch } =
            await queryClient.fetchQuery(
              getPoolConfigQuery({
                publicClient,
                hyperdriveAddress,
              }),
            );
          const { bondReserves, shareReserves } = await queryClient.fetchQuery(
            getPoolInfoQuery({
              publicClient,
              hyperdriveAddress,
            }),
          );

          return getFixedAPR({
            publicClient,
            hyperdriveMathAddress,
            bondReserves,
            shareReserves,
            initialSharePrice,
            timeStretch,
            positionDuration,
          });
        }
      : undefined,
  };
}
