import { Address, PublicClient } from "viem";
import {
  ClosedLong,
  ClosedLpShares,
  ClosedShort,
  EventOptions,
  Long,
  OpenShort,
  ReadCallOptions,
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
import { getClosedLpSharesQuery } from "src/amm/lp/getClosedLpShares";

export interface PortfolioActions {
  getActiveLongs: (args: {
    account: Address;
    options: EventOptions;
  }) => Promise<Long[]>;
  getClosedLongs: (args: {
    account: Address;
    options: EventOptions;
  }) => Promise<ClosedLong[]>;
  getActiveShorts: (args: {
    account: Address;
    options: EventOptions;
  }) => Promise<OpenShort[]>;
  getClosedShorts: (args: {
    account: Address;
    options: EventOptions;
  }) => Promise<ClosedShort[]>;
  getActiveWithdrawalShares: (args: {
    account: Address;
    options: ReadCallOptions;
  }) => Promise<bigint>;
  getClosedWithdrawalShares: (args: {
    account: Address;
    options: EventOptions;
  }) => Promise<RedeemedWithdrawalShares[]>;
  getActiveLpShares: (args: {
    account: Address;
    options: ReadCallOptions;
  }) => Promise<bigint>;
  getClosedLpShares: (args: {
    account: Address;
    options: EventOptions;
  }) => Promise<ClosedLpShares[]>;
}

export function configurePortfolioActions({
  hyperdriveAddress,
  publicClient,
  queryClient: queryClientFromOptions,
}: {
  hyperdriveAddress: Address;
  publicClient: PublicClient;
  queryClient: QueryClient;
}): PortfolioActions {
  const queryClient = queryClientFromOptions
    ? queryClientFromOptions
    : new QueryClient();
  return {
    getActiveLongs: ({ account, options }) =>
      queryClient.fetchQuery(
        getOpenLongsQuery({
          account,
          hyperdriveAddress,
          publicClient,
          options,
        }),
      ),
    getClosedLongs: ({ account, options }) =>
      queryClient.fetchQuery(
        getCloseLongsQuery({
          hyperdriveAddress,
          publicClient,
          traderAddress: account,
          options,
        }),
      ),
    getActiveShorts: ({ account, options }) =>
      queryClient.fetchQuery(
        getOpenShortsQuery({
          account,
          hyperdriveAddress,
          publicClient,
          options,
        }),
      ),
    getClosedShorts: ({ account, options }) =>
      queryClient.fetchQuery(
        getClosedShortsQuery({
          hyperdriveAddress,
          publicClient,
          traderAddress: account,
          options,
        }),
      ),
    getActiveWithdrawalShares: ({ account, options }) =>
      queryClient.fetchQuery(
        getWithdrawalSharesQuery({
          account,
          hyperdriveAddress,
          publicClient,
          options,
        }),
      ),
    getClosedWithdrawalShares: ({ account, options }) =>
      queryClient.fetchQuery(
        getRedeemedWithdrawalSharesQuery({
          account,
          hyperdriveAddress,
          publicClient,
          options,
        }),
      ),
    getActiveLpShares: ({ account, options }) =>
      queryClient.fetchQuery(
        getLpSharesQuery({ account, hyperdriveAddress, publicClient, options }),
      ),
    getClosedLpShares: ({ account, options }) =>
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
