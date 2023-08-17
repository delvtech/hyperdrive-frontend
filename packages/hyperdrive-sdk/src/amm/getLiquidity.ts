import { makeQueryKey } from "src/makeQueryKey";

import { QueryObserverOptions } from "@tanstack/query-core";
import { getLiquidity } from "@hyperdrive/core";
import { Address, PublicClient } from "viem";

interface GetLiquidityQueryOptions {
  hyperdriveAddress: Address | undefined;
  publicClient: PublicClient;
}
export function getLiquidityQuery({
  hyperdriveAddress,
  publicClient,
}: GetLiquidityQueryOptions): QueryObserverOptions<
  Awaited<ReturnType<typeof getLiquidity>>
> {
  const queryEnabled = !!hyperdriveAddress;

  return {
    enabled: queryEnabled,
    queryKey: makeQueryKey("get-liquidity", {
      hyperdriveAddress,
    }),
    queryFn: queryEnabled
      ? () => getLiquidity(hyperdriveAddress, publicClient)
      : undefined,
  };
}
