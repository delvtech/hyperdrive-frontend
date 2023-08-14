import { QueryClient, QueryObserverOptions } from "@tanstack/query-core";
import { PublicClient, Address, formatUnits } from "viem";
import { HyperdriveMathABI } from "src/abis/HyperdriveMath";
import { getPoolConfigQuery } from "src/amm/getPoolConfig/getPoolConfig";
import { getPoolInfoQuery } from "src/amm/getPoolInfo";
import { getDecimalsQuery } from "src/token/getDecimals";
import { makeQueryKey } from "src/makeQueryKey";

export interface GetMaxLongOptions {
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
  /**
   * The Max number of iterations to perform before returning the result.
   */
  maxIterations: bigint;
  publicClient: PublicClient;
}

interface GetMaxLongResult {
  maxBaseIn: bigint;
  formattedMaxBaseIn: string;
  maxBondsOut: bigint;
  formattedMaxBondsOut: string;
}

export async function getMaxLong({
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
  maxIterations,
}: GetMaxLongOptions): Promise<GetMaxLongResult> {
  const [maxBaseIn, maxBondsOut] = await publicClient.readContract({
    address: hyperdriveMathAddress,
    abi: HyperdriveMathABI,
    functionName: "calculateMaxLong",
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
      maxIterations,
    ],
  });

  return {
    maxBaseIn,
    formattedMaxBaseIn: formatUnits(maxBaseIn, baseDecimals),
    maxBondsOut,
    formattedMaxBondsOut: formatUnits(maxBondsOut, baseDecimals),
  };
}

/**
 * TODO: move this to a @hyperdrive/queries package.
 */
interface GetMaxLongQueryOptions {
  hyperdriveAddress: Address | undefined;
  hyperdriveMathAddress: Address | undefined;
  publicClient: PublicClient;
  queryClient: QueryClient;
  maxIterations: number;
}

/**
 * TODO: Move this to its own @hyperdrive/queries package eventually.
 */
export function getMaxLongQuery({
  hyperdriveAddress,
  hyperdriveMathAddress,
  publicClient,
  queryClient,
  maxIterations,
}: GetMaxLongQueryOptions): QueryObserverOptions<
  Awaited<ReturnType<typeof getMaxLong>>
> {
  const queryEnabled =
    !!hyperdriveAddress && !!publicClient && !!hyperdriveMathAddress;

  return {
    enabled: queryEnabled,
    queryKey: makeQueryKey("getMaxLong", {
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

          return getMaxLong({
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
            maxIterations: BigInt(maxIterations),
          });
        }
      : undefined,
  };
}
