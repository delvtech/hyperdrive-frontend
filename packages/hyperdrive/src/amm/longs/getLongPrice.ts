import { QueryClient, QueryObserverOptions } from "@tanstack/query-core";
import { PublicClient, Address, formatUnits } from "viem";
import { HyperdriveMathABI } from "src/abis/HyperdriveMath";
import { getPoolConfigQuery } from "src/amm/getPoolConfig";
import { getPoolInfoQuery } from "src/amm/getPoolInfo";
import { getDecimalsQuery } from "src/token/getDecimals";
import { makeQueryKey } from "src/makeQueryKey";

export interface GetLongPriceOptions {
  hyperdriveMathAddress: Address;
  baseDecimals: number;
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

interface GetLongPriceResult {
  price: bigint;
  formatted: string;
}

export async function getLongPrice({
  hyperdriveMathAddress,
  publicClient,
  shareReserves,
  bondReserves,
  initialSharePrice,
  baseDecimals,
  timeStretch,
}: GetLongPriceOptions): Promise<GetLongPriceResult> {
  const price = await publicClient.readContract({
    address: hyperdriveMathAddress,
    abi: HyperdriveMathABI,
    functionName: "calculateSpotPrice",
    args: [shareReserves, bondReserves, initialSharePrice, timeStretch],
  });

  return {
    price,
    formatted: formatUnits(price, baseDecimals),
  };
}

/**
 * TODO: move this to a @hyperdrive/queries package.
 */
interface GetCurrentLongPriceQueryOptions {
  hyperdriveAddress: Address | undefined;
  hyperdriveMathAddress: Address | undefined;
  publicClient: PublicClient;
  queryClient: QueryClient;
}

/**
 * TODO: Move this to its own @hyperdrive/queries package eventually.
 */
export function getCurrentLongPriceQuery({
  hyperdriveAddress,
  hyperdriveMathAddress,
  publicClient,
  queryClient,
}: GetCurrentLongPriceQueryOptions): QueryObserverOptions<
  Awaited<ReturnType<typeof getLongPrice>>
> {
  const queryEnabled =
    !!hyperdriveAddress && !!publicClient && !!hyperdriveMathAddress;

  return {
    enabled: queryEnabled,
    queryKey: makeQueryKey("getLongPrice", {
      hyperdriveAddress,
      hyperdriveMathAddress,
    }),
    queryFn: queryEnabled
      ? async () => {
          const {
            initialSharePrice,
            positionDuration,
            timeStretch,
            baseToken,
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

          const { bondReserves, shareReserves } = await queryClient.fetchQuery(
            getPoolInfoQuery({
              publicClient,
              hyperdriveAddress,
            }),
          );

          return getLongPrice({
            publicClient,
            hyperdriveMathAddress,
            positionDuration,
            bondReserves,
            shareReserves,
            initialSharePrice,
            timeStretch,
            baseDecimals,
          });
        }
      : undefined,
  };
}
