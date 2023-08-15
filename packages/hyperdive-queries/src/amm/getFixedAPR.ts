import { QueryClient, QueryObserverOptions } from "@tanstack/query-core";
import { getPoolConfigQuery } from "src/amm/getPoolConfig/getPoolConfig";
import { getPoolInfoQuery } from "src/amm/getPoolInfo";
import { makeQueryKey } from "src/makeQueryKey";
import { getFixedAPR } from "@hyperdrive/core";
import { Address, PublicClient } from "viem";

interface GetCurrentFixedAPRQueryOptions {
  hyperdriveAddress: Address | undefined;
  hyperdriveMathAddress: Address | undefined;
  publicClient: PublicClient;
  queryClient: QueryClient;
}
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
