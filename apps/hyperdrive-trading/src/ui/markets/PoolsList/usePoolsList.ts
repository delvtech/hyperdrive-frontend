import { fixed } from "@delvtech/fixed-point-wasm";
import { appConfig, HyperdriveConfig } from "@delvtech/hyperdrive-appconfig";
import { getHyperdrive } from "@delvtech/hyperdrive-js";
import { QueryStatus } from "@tanstack/query-core";
import { useIsFetching, useQuery } from "@tanstack/react-query";
import { useSearch } from "@tanstack/react-router";
import { getPublicClient } from "@wagmi/core";
import { useState } from "react";
import { makeQueryKey2 } from "src/base/makeQueryKey";
import { getDrift } from "src/drift/getDrift";
import { calculateMarketYieldMultiplier } from "src/hyperdrive/calculateMarketYieldMultiplier";
import { getDepositAssets } from "src/hyperdrive/getDepositAssets";
import { getLpApy } from "src/hyperdrive/getLpApy";
import { getYieldSourceRate } from "src/hyperdrive/getYieldSourceRate";
import { wagmiConfig } from "src/network/wagmiClient";
import { useAppConfigForConnectedChain } from "src/ui/appconfig/useAppConfigForConnectedChain";
import { getPresentValue } from "src/ui/hyperdrive/hooks/usePresentValue";
import { LANDING_ROUTE } from "src/ui/landing/routes";
import {
  PoolListFilters,
  usePoolListFilters,
} from "src/ui/markets/PoolsList/usePoolListFilters";
import { PublicClient } from "viem";
import { useChainId } from "wagmi";

const PINNED_POOLS = [
  // Pin the 182d Savings GYD pool to the top of the list
  // Remove this pinning on Wednesday, December 4, 2024
  // https://github.com/delvtech/hyperdrive-frontend/issues/1663
  "0xf1232Dc21eADAf503D82f1e1361CfF2BBf40394D", // mainnet
  "0x9248f874AaA2c53AD9324d7A2D033ea133443874", // gnosis
];

const HIDDEN_POOLS = [
  // Hide the susde/dai pool on mainnet because the LP APY is -100% after the
  // only LP yoinked their liquidity while a Long was open.
  "0xd41225855A5c5Ba1C672CcF4d72D1822a5686d30",
];

export const sortOptions = [
  "TVL",
  "Fixed APR",
  "Variable APY",
  "Yield Multiplier",
  "LP APY",
  "Chain",
] as const;

type SortOption = (typeof sortOptions)[number];

export function usePoolsList(): {
  pools: HyperdriveConfig[] | undefined;
  selectedChains: number[] | undefined;
  selectedAssets: string[] | undefined;
  filters: PoolListFilters | undefined;
  status: QueryStatus;
  isSortingEnabled: boolean;
  sortOption: SortOption | undefined;
  setSortOption: (option: SortOption | undefined) => void;
} {
  const { data: unpausedPools } = useUnpausedPools();

  const { chains: selectedChains, assets: selectedAssets } = useSearch({
    from: LANDING_ROUTE,
  });

  const filters = usePoolListFilters({ hyperdrives: unpausedPools });

  const selectedPools = getSelectedPools({
    hyperdrives: unpausedPools,
    selectedChains,
    selectedAssets,
  });

  // Sorting is disabled any time we're fetching data. This is because sorting
  // requires fetching a significant amount of data, and we want the List to load
  // as fast as possible. Instead, the individual PoolRow components are
  // responsible for fetching the specific data they need.
  const [sortOption, setSortOption] = useState<SortOption | undefined>();
  const isFetching = useIsFetching({ stale: true });
  const isSortingEnabled = !isFetching;
  const { sortedPools, status } = useSortedPools({
    pools: selectedPools,
    enabled: isSortingEnabled,
    sortOption,
  });

  return {
    pools: isSortingEnabled ? sortedPools : selectedPools,
    filters,
    status,
    sortOption,
    setSortOption,
    isSortingEnabled,
    selectedAssets,
    selectedChains,
  };
}
function useSortedPools({
  pools,
  enabled,
  sortOption,
}: {
  pools: HyperdriveConfig[] | undefined;
  enabled: boolean;
  sortOption: SortOption | undefined;
}) {
  const queryEnabled = !!pools && enabled;
  const { data: sortedPools, status } = useQuery({
    enabled: queryEnabled,
    queryKey: makeQueryKey2({
      namespace: "markets",
      queryId: "poolListData",
      params: {
        hypedrives: pools,
      },
    }),
    queryFn: queryEnabled
      ? async () => {
          return Promise.all(
            pools.map(async (hyperdrive) => {
              const readHyperdrive = await getHyperdrive({
                address: hyperdrive.address,
                drift: getDrift({ chainId: hyperdrive.chainId }),
                earliestBlock: hyperdrive.initializationBlock,
              });
              const publicClient = getPublicClient(wagmiConfig as any, {
                chainId: hyperdrive.chainId,
              }) as PublicClient;
              const [fixedApr, lpApy, tvl, yieldSourceRate, longPrice] =
                await Promise.all([
                  readHyperdrive.getFixedApr(),
                  getLpApy({ hyperdrive, readHyperdrive }),
                  getPresentValue({
                    hyperdriveAddress: hyperdrive.address,
                    chainId: hyperdrive.chainId,
                    publicClient,
                    readHyperdrive,
                  }),
                  getYieldSourceRate({ readHyperdrive, appConfig }),
                  readHyperdrive.getLongPrice(),
                ]);
              return {
                hyperdrive,
                fixedApr,
                lpApy,
                tvl,
                yieldSourceRate,
                longPrice,
              };
            }),
          );
        }
      : undefined,
    select: (poolsWithData) => {
      return poolsWithData
        .toSorted((a, b) => {
          switch (sortOption) {
            case "Chain":
              const chainA = appConfig.chains[a.hyperdrive.chainId] || {};
              const chainB = appConfig.chains[b.hyperdrive.chainId] || {};
              return chainA.name.localeCompare(chainB.name);
            case "Fixed APR":
              return Number(b.fixedApr - a.fixedApr);
            case "LP APY":
              return Number((b.lpApy.lpApy ?? 0n) - (a.lpApy.lpApy ?? 0n));
            case "Variable APY":
              return Number(
                b.yieldSourceRate.netRate - a.yieldSourceRate.netRate,
              );
            case "Yield Multiplier":
              return Number(
                calculateMarketYieldMultiplier(b.longPrice).bigint -
                  calculateMarketYieldMultiplier(a.longPrice).bigint,
              );
            case "TVL":
              return fixed(b.tvl.fiat ?? 0)
                .sub(a.tvl.fiat ?? 0)
                .toNumber();
            default:
              return 0;
          }
        })
        .map((pool) => pool.hyperdrive);
    },
  });

  return {
    sortedPools,
    status,
  };
}

function getSelectedPools({
  hyperdrives,
  selectedChains,
  selectedAssets,
}: {
  hyperdrives: HyperdriveConfig[] | undefined;
  selectedChains: number[] | undefined;
  selectedAssets: string[] | undefined;
}) {
  return hyperdrives
    ?.filter((hyperdrive) => {
      if (
        selectedChains?.length &&
        !selectedChains.includes(hyperdrive.chainId)
      ) {
        return false;
      }

      const depositAssets = getDepositAssets(hyperdrive);
      if (
        selectedAssets?.length &&
        !depositAssets.some(({ symbol }) => selectedAssets.includes(symbol))
      ) {
        return false;
      }

      return true;
    })
    .toSorted((a, b) => {
      // Put pinned pools at the top, otherwise sort everything alphabetically
      if (PINNED_POOLS.includes(a.address)) {
        return -1;
      }
      return a.name.localeCompare(b.name);
    });
}

function useUnpausedPools() {
  // Only show testnet and fork pools if the user is connected to a testnet
  // chain
  const appConfigForConnectedChain = useAppConfigForConnectedChain();

  // Use the chain id in the query key to make sure the pools list updates when
  // you switch chains
  const connectedChainId = useChainId();
  return useQuery({
    queryKey: makeQueryKey2({
      namespace: "markets",
      queryId: "poolList",
      params: { chainId: connectedChainId },
    }),
    queryFn: async () => {
      const pools = await Promise.all(
        appConfigForConnectedChain.hyperdrives
          .filter((hyperdrive) => !HIDDEN_POOLS.includes(hyperdrive.address))
          .map(async (hyperdrive) => {
            const readHyperdrive = await getHyperdrive({
              address: hyperdrive.address,
              drift: getDrift({ chainId: hyperdrive.chainId }),
              earliestBlock: hyperdrive.initializationBlock,
            });

            // We only show hyperdrives that are not paused
            const { isPaused } = await readHyperdrive.getMarketState();
            if (isPaused) {
              return;
            }

            return hyperdrive;
          }),
      );

      return pools.filter((pool) => !!pool);
    },
  });
}
