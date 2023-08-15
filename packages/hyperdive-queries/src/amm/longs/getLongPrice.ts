import { QueryObserverOptions } from "@tanstack/query-core";
import { getPoolConfigQuery } from "src/amm/getPoolConfig/getPoolConfig";
import { getPoolInfoQuery } from "src/amm/getPoolInfo";
import { getDecimalsQuery } from "src/token/getDecimals";
import { makeQueryKey } from "src/makeQueryKey";
import {
  GetCurrentLongPriceQueryOptions,
  getLongPrice,
} from "@hyperdrive/core";

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
