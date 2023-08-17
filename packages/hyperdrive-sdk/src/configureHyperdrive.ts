import { QueryClient } from "@tanstack/query-core";
import {
  PoolActions,
  configurePoolActions,
} from "src/amm/configurePoolActions";
import { Address, PublicClient } from "viem";
import {
  PortfolioActions,
  configurePortfolioActions,
} from "./portfolio/configurePortfolioActions";

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
}: ConfigureHyperdriveOptions): {
  poolActions: PoolActions;
  portfolio: PortfolioActions;
} {
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
    portfolio: configurePortfolioActions({
      hyperdriveAddress,
      publicClient,
      queryClient,
    }),
    // TODO: lpActions
  };
}
