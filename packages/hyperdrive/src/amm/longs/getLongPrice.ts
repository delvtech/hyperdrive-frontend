import { QueryClient, QueryObserverOptions } from "@tanstack/query-core";
import { PublicClient, Address, Transport, Chain } from "viem";
import { HyperdriveMathABI } from "src/abis/HyperdriveMath";
import { getPoolConfigQuery } from "src/amm/getPoolConfig";
import { getPoolInfoQuery } from "src/amm/getPoolInfo";

export interface GetLongPriceOptions {
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

interface GetLongPriceResult {
  price: bigint;
}

export async function getLongPrice({
  hyperdriveMathAddress,
  publicClient,
  shareReserves,
  bondReserves,
  initialSharePrice,
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
  };
}

/**
 * A query wrapper for consumers who want easy caching via @tanstack/query
 *
 * TODO: Piloting this idea here for now as proof-of-concept. Ultimately
 * @hyperdrive/core should not know about caching and just be pure hyperdrive
 * bindings. If this works well in practice we can move this to a
 * @hyperdrive/queries package.
 */
interface GetLongPriceQueryOptions {
  hyperdriveAddress: Address | undefined;
  hyperdriveMathAddress: Address | undefined;
  publicClient: PublicClient<Transport, Chain>;
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
}: GetLongPriceQueryOptions): QueryObserverOptions<
  Awaited<ReturnType<typeof getLongPrice>>
> {
  const queryEnabled =
    !!hyperdriveAddress && !!publicClient && !!hyperdriveMathAddress;

  return {
    enabled: queryEnabled,
    queryKey: [
      "@hyperdrive/core",
      "getLongPrice",
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

          return getLongPrice({
            publicClient,
            hyperdriveMathAddress,
            positionDuration,
            bondReserves,
            shareReserves,
            initialSharePrice,
            timeStretch,
          });
        }
      : undefined,
  };
}
