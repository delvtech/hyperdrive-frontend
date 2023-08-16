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
import { getClosedLpSharesQuery } from "..";
export interface PortfolioActions {
  getActiveLongs: (options: EventOptions) => Promise<Long[]>;
  getClosedLongs: (options: EventOptions) => Promise<ClosedLong[]>;
  getActiveShorts: (options: EventOptions) => Promise<OpenShort[]>;
  getClosedShorts: (options: EventOptions) => Promise<ClosedShort[]>;
  getActiveWithdrawalShares: () => Promise<bigint>;
  getClosedWithdrawalShares: (
    options: EventOptions,
  ) => Promise<RedeemedWithdrawalShares[]>;
  getActiveLpShares: () => void;
  getClosedLpShares: (options: EventOptions) => void;
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
    getClosedLongs: (options: EventOptions) =>
      queryClient.fetchQuery(
        getCloseLongsQuery({
          hyperdriveAddress,
          publicClient,
          traderAddress: account,
          options,
        }),
      ),
    getActiveShorts: (options: EventOptions) =>
      queryClient.fetchQuery(
        getOpenShortsQuery({
          account,
          hyperdriveAddress,
          publicClient,
          options,
        }),
      ),
    getClosedShorts: (options: EventOptions) =>
      queryClient.fetchQuery(
        getClosedShortsQuery({
          hyperdriveAddress,
          publicClient,
          traderAddress: account,
          options,
        }),
      ),
    getActiveWithdrawalShares: () =>
      queryClient.fetchQuery(
        getWithdrawalSharesQuery({ account, hyperdriveAddress, publicClient }),
      ),
    getClosedWithdrawalShares: (options: EventOptions) =>
      queryClient.fetchQuery(
        getRedeemedWithdrawalSharesQuery({
          account,
          hyperdriveAddress,
          publicClient,
          options,
        }),
      ),
    getActiveLpShares: () =>
      queryClient.fetchQuery(
        getLpSharesQuery({ account, hyperdriveAddress, publicClient }),
      ),
    getClosedLpShares: (options: EventOptions) =>
      queryClient.fetchQuery(
        getClosedLpSharesQuery({
          providerAddress: account,
          hyperdriveAddress,
          publicClient,
          options,
        }),
      ),
  };
}
