import { QueryClient, QueryObserverOptions } from "@tanstack/query-core";
import { PublicClient, Address } from "viem";
import { getPoolConfigQuery } from "src/amm/getPoolConfigQuery/getPoolConfigQuery";
import { getPoolInfoQuery } from "src/amm/getPoolInfoQuery";
import { getDecimalsQuery } from "src/token/getDecimals";
import { makeQueryKey } from "src/makeQueryKey";
import { HyperdriveContract, getMaxShort } from "@hyperdrive/core";

/**
 * TODO: move this to a @hyperdrive/queries package.
 */
interface GetMaxShortQueryOptions {
  contract: HyperdriveContract | undefined;
  hyperdriveMathAddress: Address | undefined;
  publicClient: PublicClient;
  queryClient: QueryClient;
}

export function getMaxShortQuery({
  contract,
  hyperdriveMathAddress,
  publicClient,
  queryClient,
}: GetMaxShortQueryOptions): QueryObserverOptions<
  Awaited<ReturnType<typeof getMaxShort>>
> {
  const queryEnabled = !!contract && !!publicClient && !!hyperdriveMathAddress;

  return {
    enabled: queryEnabled,
    queryKey: makeQueryKey("getMaxShort", {
      address: contract?.address,
      hyperdriveMathAddress,
    }),
    queryFn: queryEnabled
      ? async () => {
          const {
            initialSharePrice,
            timeStretch,
            baseToken,
            minimumShareReserves,
          } = await queryClient.fetchQuery(getPoolConfigQuery(contract));

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
                hyperdriveAddress: contract.address,
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
