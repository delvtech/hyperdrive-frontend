import { QueryClient, QueryObserverOptions } from "@tanstack/query-core";
import { getPoolConfigQuery } from "src/amm/getPoolConfigQuery/getPoolConfigQuery";
import { getPoolInfoQuery } from "src/amm/getPoolInfoQuery";
import { getDecimalsQuery } from "src/token/getDecimals";
import { makeQueryKey } from "src/makeQueryKey";
import { HyperdriveContract, getLongPrice } from "@hyperdrive/core";
import { Address, PublicClient } from "viem";

interface GetCurrentLongPriceQueryOptions {
  contract: HyperdriveContract;
  hyperdriveMathAddress: Address | undefined;
  publicClient: PublicClient;
  queryClient: QueryClient;
}

export function getCurrentLongPriceQuery({
  contract,
  hyperdriveMathAddress,
  publicClient,
  queryClient,
}: GetCurrentLongPriceQueryOptions): QueryObserverOptions<
  Awaited<ReturnType<typeof getLongPrice>>
> {
  const queryEnabled = !!contract && !!publicClient && !!hyperdriveMathAddress;

  return {
    enabled: queryEnabled,
    queryKey: makeQueryKey("getLongPrice", {
      address: contract?.address,
      hyperdriveMathAddress,
    }),
    queryFn: queryEnabled
      ? async () => {
          const {
            initialSharePrice,
            positionDuration,
            timeStretch,
            baseToken,
          } = await queryClient.fetchQuery(getPoolConfigQuery(contract));

          const baseDecimals = await queryClient.fetchQuery(
            getDecimalsQuery({
              publicClient,
              tokenAddress: baseToken,
            }),
          );

          const { bondReserves, shareReserves } = await queryClient.fetchQuery(
            getPoolInfoQuery({
              publicClient,
              hyperdriveAddress: contract.address,
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
