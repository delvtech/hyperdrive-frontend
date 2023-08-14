import { QueryObserverOptions } from "@tanstack/query-core";
import { getPoolConfigQuery } from "src/amm/getPoolConfig/getPoolConfig";
import { getPoolInfoQuery } from "src/amm/getPoolInfo";
import { getDecimalsQuery } from "src/token/getDecimals";
import { makeQueryKey } from "src/makeQueryKey";
import { GetMaxLongQueryOptions, getMaxLong } from "@hyperdrive/core";

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
