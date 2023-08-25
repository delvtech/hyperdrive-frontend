import { QueryClient, QueryObserverOptions } from "@tanstack/query-core";
import { getPoolConfigQuery } from "src/amm/getPoolConfigQuery/getPoolConfigQuery";
import { getPoolInfoQuery } from "src/amm/getPoolInfoQuery";
import { makeQueryKey } from "src/makeQueryKey";
import {
  HyperdriveContract,
  ReadCallOptions,
  getFixedAPR,
} from "@hyperdrive/core";
import { Address, PublicClient } from "viem";

interface GetCurrentFixedAPRQueryOptions {
  contract: HyperdriveContract;
  hyperdriveMathAddress: Address | undefined;
  publicClient: PublicClient;
  queryClient: QueryClient;
  options?: ReadCallOptions;
}
export function getFixedRateQuery({
  contract,
  hyperdriveMathAddress,
  publicClient,
  queryClient,
  options,
}: GetCurrentFixedAPRQueryOptions): QueryObserverOptions<
  Awaited<ReturnType<typeof getFixedAPR>>
> {
  const queryEnabled = !!contract && !!publicClient && !!hyperdriveMathAddress;

  return {
    enabled: queryEnabled,
    queryKey: makeQueryKey("calculateAPR", {
      address: contract?.address,
      hyperdriveMathAddress,
      options,
    }),
    queryFn: queryEnabled
      ? async () => {
          const { initialSharePrice, positionDuration, timeStretch } =
            await queryClient.fetchQuery(getPoolConfigQuery(contract));
          const { bondReserves, shareReserves } = await queryClient.fetchQuery(
            getPoolInfoQuery({
              publicClient,
              hyperdriveAddress: contract.address,
              options,
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
            options,
          });
        }
      : undefined,
  };
}
