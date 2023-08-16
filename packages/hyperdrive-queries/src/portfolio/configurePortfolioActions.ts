import { Address, PublicClient } from "viem";

import {
  ClosedLong,
  ClosedShort,
  EventOptions,
  Long,
  OpenShort,
  RedeemedWithdrawalShares,
} from "@hyperdrive/core";
import { QueryClient } from "@tanstack/query-core";
import { getCloseLongsQuery } from "src/amm/longs/getClosedLongs";
import { getOpenLongsQuery } from "src/amm/longs/getOpenLongs/getOpenLongs";
import { getLpSharesQuery } from "src/amm/lp/getLpShares";
import { getRedeemedWithdrawalSharesQuery } from "src/amm/lp/getRedeemedWithdrawalShares";
import { getWithdrawalSharesQuery } from "src/amm/lp/getWithdrawalShares";
import { getClosedShortsQuery } from "src/amm/shorts/getClosedShorts";
import { getOpenShortsQuery } from "src/amm/shorts/getOpenShorts";
export interface PortfolioActions {
  getActiveLongs: (options: EventOptions) => Promise<Long[]>;
  getClosedLongs: () => Promise<ClosedLong[]>;
  getActiveShorts: () => Promise<OpenShort[]>;
  getClosedShorts: () => Promise<ClosedShort[]>;
  getActiveWithdrawalShares: () => Promise<bigint>;
  getClosedWithdrawalShares: () => Promise<RedeemedWithdrawalShares[]>;
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
    getActiveLongs: (options: EventOptions) =>
      queryClient.fetchQuery(
        getOpenLongsQuery({
          account,
          hyperdriveAddress,
          publicClient,
          options,
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
    getActiveWithdrawalShares: () =>
      queryClient.fetchQuery(
        getWithdrawalSharesQuery({ account, hyperdriveAddress, publicClient }),
      ),
    getClosedWithdrawalShares: () =>
      queryClient.fetchQuery(
        getRedeemedWithdrawalSharesQuery({
          account,
          hyperdriveAddress,
          publicClient,
        }),
      ),
    getActiveLpShares: () =>
      queryClient.fetchQuery(
        getLpSharesQuery({ account, hyperdriveAddress, publicClient }),
      ),
    getClosedLpShares: () =>
      queryClient.fetchQuery(
        getRedeemedWithdrawalSharesQuery({
          account,
          hyperdriveAddress,
          publicClient,
        }),
      ),
  };
}
