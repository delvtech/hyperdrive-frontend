import { QueryClient, QueryObserverOptions } from "@tanstack/query-core";
import { PublicClient, Address, formatUnits } from "viem";
import { HyperdriveMathABI } from "src/abis/HyperdriveMath";
import { getPoolConfigQuery } from "src/amm/getPoolConfig";
import { getPoolInfoQuery } from "src/amm/getPoolInfo";
import { getDecimalsQuery } from "src/token/getDecimals";
import { makeQueryKey } from "src/makeQueryKey";

export interface GetMaxShortOptions {
  hyperdriveMathAddress: Address;
  baseDecimals: number;
  /**
   * Comes from getPoolInfo
   */
  shareReserves: bigint;
  /**
   * Comes from getPoolInfo
   */
  sharePrice: bigint;
  /**
   * Comes from getPoolInfo
   */
  bondReserves: bigint;
  /**
   * Comes from getPoolInfo
   */
  longsOutstanding: bigint;
  /**
   * Comes from getPoolConfig
   */
  minimumShareReserves: bigint;
  /**
   * Comes from getPoolConfig
   */
  initialSharePrice: bigint;
  /**
   * Comes from getPoolConfig
   */
  timeStretch: bigint;
  publicClient: PublicClient;
}

interface GetMaxShortResult {
  maxBondsOut: bigint;
  formatted: string;
}

export async function getMaxShort({
  hyperdriveMathAddress,
  publicClient,
  shareReserves,
  sharePrice,
  bondReserves,
  longsOutstanding,
  minimumShareReserves,
  initialSharePrice,
  baseDecimals,
  timeStretch,
}: GetMaxShortOptions): Promise<GetMaxShortResult> {
  const maxBondsOut = await publicClient.readContract({
    address: hyperdriveMathAddress,
    abi: HyperdriveMathABI,
    functionName: "calculateMaxShort",
    args: [
      {
        shareReserves,
        bondReserves,
        longsOutstanding,
        timeStretch,
        sharePrice,
        initialSharePrice,
        minimumShareReserves,
      },
    ],
  });

  return {
    maxBondsOut,
    formatted: formatUnits(maxBondsOut, baseDecimals),
  };
}

/**
 * TODO: move this to a @hyperdrive/queries package.
 */
interface GetMaxShortQueryOptions {
  hyperdriveAddress: Address | undefined;
  hyperdriveMathAddress: Address | undefined;
  publicClient: PublicClient;
  queryClient: QueryClient;
}

/**
 * TODO: Move this to its own @hyperdrive/queries package eventually.
 */
export function getMaxShortQuery({
  hyperdriveAddress,
  hyperdriveMathAddress,
  publicClient,
  queryClient,
}: GetMaxShortQueryOptions): QueryObserverOptions<
  Awaited<ReturnType<typeof getMaxShort>>
> {
  const queryEnabled =
    !!hyperdriveAddress && !!publicClient && !!hyperdriveMathAddress;

  return {
    enabled: queryEnabled,
    queryKey: makeQueryKey("getMaxShort", {
      hyperdriveAddress,
      hyperdriveMathAddress,
    }),
    queryFn: queryEnabled
      ? async () => {
          const {
            initialSharePrice,
            timeStretch,
            baseToken,
            minimumShareReserves,
          } = await queryClient.fetchQuery(
            getPoolConfigQuery({
              publicClient,
              hyperdriveAddress,
            }),
          );

          const baseDecimals = await queryClient.fetchQuery(
            getDecimalsQuery({
              publicClient,
              tokenAddress: baseToken,
            }),
          );

          const { bondReserves, shareReserves, sharePrice, longsOutstanding } =
            await queryClient.fetchQuery(
              getPoolInfoQuery({
                publicClient,
                hyperdriveAddress,
              }),
            );

          return getMaxShort({
            hyperdriveMathAddress,
            publicClient,
            shareReserves,
            sharePrice,
            bondReserves,
            longsOutstanding,
            minimumShareReserves,
            initialSharePrice,
            baseDecimals,
            timeStretch,
          });
        }
      : undefined,
  };
}
