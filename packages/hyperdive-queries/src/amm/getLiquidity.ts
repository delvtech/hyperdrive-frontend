import { makeQueryKey } from "src/makeQueryKey";

import { QueryObserverOptions } from "@tanstack/query-core";
import {
  GetLiquidityQueryOptions,
  GetLiquidityReturnType,
  getLiquidity,
} from "@hyperdrive/core";

export function getLiquidityQuery({
  hyperdriveAddress,
  publicClient,
}: GetLiquidityQueryOptions): QueryObserverOptions<GetLiquidityReturnType> {
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
