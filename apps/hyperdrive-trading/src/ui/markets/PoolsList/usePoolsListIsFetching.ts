import { useIsFetching } from "@tanstack/react-query";

/**
 * Returns the number of outstanding data requests for pool rows.  When this
 * count reaches 0, it's safe to sort the pools, ensuring all necessary data has
 * been loaded. This allows PoolRow components to load their data independently,
 * preventing the UI from freezing due to slow Alchemy responses.
 */
export function usePoolsListIsFetching(): boolean {
  const totalRequests = useIsFetching();
  // const poolInfoRequests = useIsFetching({
  //   queryKey: makeNamespaceQueryKey({
  //     namespace: "hyperdrive",
  //     queryId: "poolInfo",
  //   }),
  // });
  // const presentValueRequests = useIsFetching({
  //   queryKey: makeNamespaceQueryKey({
  //     namespace: "hyperdrive",
  //     queryId: "presentValue",
  //   }),
  // });
  // const fixedAprRequests = useIsFetching({
  //   queryKey: makeNamespaceQueryKey({
  //     namespace: "hyperdrive",
  //     queryId: "fixedApr",
  //   }),
  // });
  // const lpApyRequests = useIsFetching({
  //   queryKey: makeNamespaceQueryKey({
  //     namespace: "hyperdrive",
  //     queryId: "lpApy",
  //   }),
  // });
  // const currentLongPriceRequests = useIsFetching({
  //   queryKey: makeNamespaceQueryKey({
  //     namespace: "hyperdrive",
  //     queryId: "currentLongPrice",
  //   }),
  // });
  // const vaultRateRequests = useIsFetching({
  //   queryKey: makeNamespaceQueryKey({
  //     namespace: "vaults",
  //     queryId: "vaultRate",
  //   }),
  // });
  // const tokenFiatPriceRequests = useIsFetching({
  //   queryKey: makeNamespaceQueryKey({
  //     namespace: "tokens",
  //     queryId: "tokenFiatPrice",
  //   }),
  // });
  // const rewardsRequests = useIsFetching({
  //   queryKey: makeNamespaceQueryKey({
  //     namespace: "rewards",
  //     queryId: "rewards",
  //   }),
  // });

  // const totalRequests =
  //   poolInfoRequests +
  //   fixedAprRequests +
  //   lpApyRequests +
  //   presentValueRequests +
  //   currentLongPriceRequests +
  //   vaultRateRequests +
  //   tokenFiatPriceRequests +
  //   rewardsRequests;

  return !!totalRequests;
}
