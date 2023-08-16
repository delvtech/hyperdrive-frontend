import { Address, PublicClient } from "viem";

import { ClosedLong, ClosedShort, Long, OpenShort } from "@hyperdrive/core";
import { QueryClient } from "@tanstack/query-core";
import { getOpenLongsQuery } from "src/amm/longs/getOpenLongs/getOpenLongs";
import { getCloseLongsQuery } from "src/amm/longs/getClosedLongs";
import { getOpenShortsQuery } from "src/amm/shorts/getOpenShorts";
import { getClosedShortsQuery } from "src/amm/shorts/getClosedShorts";
import { getWithdrawalSharesQuery } from "src/amm/lp/getWithdrawalShares";
import { getLpSharesQuery, getRedeemedWithdrawalSharesQuery } from "..";
export interface PortfolioActions {
  getActiveLongs: () => Promise<Long[]>;
  getClosedLongs: () => Promise<ClosedLong[]>;
  getActiveShorts: () => Promise<OpenShort[]>;
  getClosedShorts: () => Promise<ClosedShort[]>;
  getActiveWithdrawalShares: () => void;
  getClosedWithdrawalShares: () => void;
  getActiveLpShares: () => void;
  getClosedLpShares: () => void;
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
    getActiveLongs: () =>
      queryClient.fetchQuery(
        getOpenLongsQuery({
          account,
          hyperdriveAddress,
          publicClient,
        }),
      ),
    getClosedLongs: () =>
      queryClient.fetchQuery(
        getCloseLongsQuery({
          hyperdriveAddress,
          publicClient,
          traderAddress: account,
        }),
      ),
    getActiveShorts: () =>
      queryClient.fetchQuery(
        getOpenShortsQuery({
          account,
          hyperdriveAddress,
          publicClient,
        }),
      ),
    getClosedShorts: () =>
      queryClient.fetchQuery(
        getClosedShortsQuery({
          hyperdriveAddress,
          publicClient,
          traderAddress: account,
        }),
      ),
    getActiveWithdrawalShares: () => {
      queryClient.fetchQuery(
        getWithdrawalSharesQuery({ account, hyperdriveAddress, publicClient }),
      );
    },
    getClosedWithdrawalShares: () => {
      queryClient.fetchQuery(
        getRedeemedWithdrawalSharesQuery({
          account,
          hyperdriveAddress,
          publicClient,
        }),
      );
    },
    getActiveLpShares: () => {
      queryClient.fetchQuery(
        getLpSharesQuery({ account, hyperdriveAddress, publicClient }),
      );
    },
    getClosedLpShares: () => {
      queryClient.fetchQuery(
        getRedeemedWithdrawalSharesQuery({
          account,
          hyperdriveAddress,
          publicClient,
        }),
      );
    },
  };
}
