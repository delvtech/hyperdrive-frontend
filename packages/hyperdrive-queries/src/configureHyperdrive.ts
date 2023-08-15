import { QueryClient } from "@tanstack/query-core";
import {
  PoolActions,
  configurePoolActions,
} from "src/amm/actions/configurePoolActions";
import { Address, PublicClient } from "viem";

interface ConfigureHyperdriveOptions {
  hyperdriveAddress: Address;
  hyperdriveMathAddress: Address;
  publicClient: PublicClient;
  queryClient?: QueryClient;
}

export function configureHyperdrive({
  hyperdriveAddress,
  hyperdriveMathAddress,
  publicClient,
  queryClient: queryClientFromOptions,
}: ConfigureHyperdriveOptions): { poolActions: PoolActions } {
  const queryClient = queryClientFromOptions
    ? queryClientFromOptions
    : new QueryClient();

  return {
    poolActions: configurePoolActions({
      hyperdriveAddress,
      hyperdriveMathAddress,
      publicClient,
      queryClient,
    }),
    // TODO: portfolioActions, lpActions
  };
}
