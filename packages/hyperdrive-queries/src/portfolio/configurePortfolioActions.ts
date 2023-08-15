import { Address, PublicClient } from "viem";

import { ClosedLong, Long, ReadCallOptions } from "@hyperdrive/core";
import { QueryClient } from "@tanstack/query-core";
import { getCloseLongsQuery, getOpenLongsQuery } from "..";
export interface PortfolioActions {
  getActiveLongs: (options: ReadCallOptions) => Promise<Long[]>;
  getClosedLongs: (options: ReadCallOptions) => Promise<ClosedLong[]>;
  // getActiveShorts: () => void;
  // getClosedShorts: () => void;

  // getActiveWithdrawalShares: () => void;
  // getClosedWithdrawalShares: () => void;

  // getActiveLpShares: () => void;

  // getClosedLpShares: () => void;
}

export function configurePortfolioActions({
  hyperdriveAddress,
  publicClient,
  account,
  queryClient: queryClientFromOptions,
}: {
  hyperdriveAddress: Address;
  publicClient: PublicClient;
  account: Address;
  queryClient: QueryClient;
}): PortfolioActions {
  const queryClient = queryClientFromOptions
    ? queryClientFromOptions
    : new QueryClient();
  return {
    getActiveLongs: (options: ReadCallOptions) =>
      queryClient.fetchQuery(
        getOpenLongsQuery({
          account,
          hyperdriveAddress,
          publicClient,
          options,
        }),
      ),
    getClosedLongs: (options: ReadCallOptions) =>
      queryClient.fetchQuery(
        getCloseLongsQuery({
          hyperdriveAddress,
          publicClient,
          traderAddress: account,
          options,
        }),
      ),
  };
}
