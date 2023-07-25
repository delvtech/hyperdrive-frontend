import { PublicClient, Address } from "viem";
import { HyperdriveMathABI } from "src/abis/HyperdriveMath";
import { QueryClient, QueryObserverOptions } from "@tanstack/query-core";
import { getPoolConfigQuery } from "src/amm/getPoolConfig";
import { getPoolInfoQuery } from "src/amm/getPoolInfo";
import { makeQueryKey } from "src/makeQueryKey";
import { formatRate } from "src/base/formatRate";

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
  publicClient: PublicClient;
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

  const formatted = formatRate(apr);

  return {
    apr,
    formatted,
  };
}

interface GetCurrentFixedAPRQueryOptions {
  hyperdriveAddress: Address | undefined;
  hyperdriveMathAddress: Address | undefined;
  publicClient: PublicClient;
  queryClient: QueryClient;
}

/**
 * TODO: Move this to its own @hyperdrive/queries package eventually.
 */
export function getCurrentFixedAPRQuery({
  hyperdriveAddress,
  hyperdriveMathAddress,
  publicClient,
  queryClient,
}: GetCurrentFixedAPRQueryOptions): QueryObserverOptions<
  Awaited<ReturnType<typeof getFixedAPR>>
> {
  const queryEnabled =
    !!hyperdriveAddress && !!publicClient && !!hyperdriveMathAddress;

  return {
    enabled: queryEnabled,
    queryKey: makeQueryKey("calculateAPR", {
      hyperdriveAddress,
      hyperdriveMathAddress,
    }),
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
