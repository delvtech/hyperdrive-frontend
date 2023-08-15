import { QueryClient, QueryObserverOptions } from "@tanstack/query-core";
import { PublicClient, Address } from "viem";
import { getPoolConfigQuery } from "src/amm/getPoolConfig/getPoolConfig";
import { getPoolInfoQuery } from "src/amm/getPoolInfo";
import { getDecimalsQuery } from "src/token/getDecimals";
import { makeQueryKey } from "src/makeQueryKey";
import { getMaxShort } from "@hyperdrive/core";

/**
 * TODO: move this to a @hyperdrive/queries package.
 */
interface GetMaxShortQueryOptions {
  hyperdriveAddress: Address | undefined;
  hyperdriveMathAddress: Address | undefined;
  publicClient: PublicClient;
  queryClient: QueryClient;
}

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
