import { QueryClient, QueryObserverOptions } from "@tanstack/query-core";
import { getPoolConfigQuery } from "src/amm/getPoolConfigQuery/getPoolConfigQuery";
import { getPoolInfoQuery } from "src/amm/getPoolInfoQuery";
import { getDecimalsQuery } from "src/token/getDecimals";
import { makeQueryKey } from "src/makeQueryKey";
import { HyperdriveContract, getMaxLong } from "@hyperdrive/core";
import { Address, PublicClient } from "viem";

interface GetMaxLongQueryOptions {
  contract: HyperdriveContract | undefined;
  hyperdriveMathAddress: Address | undefined;
  publicClient: PublicClient;
  queryClient: QueryClient;
  maxIterations: number;
}

export function getMaxLongQuery({
  contract,
  hyperdriveMathAddress,
  publicClient,
  queryClient,
  maxIterations,
}: GetMaxLongQueryOptions): QueryObserverOptions<
  Awaited<ReturnType<typeof getMaxLong>>
> {
  const queryEnabled = !!contract && !!publicClient && !!hyperdriveMathAddress;

  return {
    enabled: queryEnabled,
    queryKey: makeQueryKey("getMaxLong", {
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
