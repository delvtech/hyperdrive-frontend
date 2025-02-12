import { fixed } from "@delvtech/fixed-point-wasm";
import {
  AnyReward,
  AppConfig,
  HyperdriveConfig,
} from "@delvtech/hyperdrive-appconfig";
import { getHyperdrive } from "@delvtech/hyperdrive-js";
import { QueryStatus } from "@tanstack/query-core";
import { useIsFetching, useQuery } from "@tanstack/react-query";
import { getPublicClient } from "@wagmi/core";
import { useState } from "react";
import { makeQueryKey2 } from "src/base/makeQueryKey";
import { isTestnetChain } from "src/chains/isTestnetChain";
import { getDrift } from "src/drift/getDrift";
import { calculateMarketYieldMultiplier } from "src/hyperdrive/calculateMarketYieldMultiplier";
import { getDepositAssets } from "src/hyperdrive/getDepositAssets";
import { getLpApy } from "src/hyperdrive/getLpApy";
import { wagmiConfig } from "src/network/wagmiClient";
import { getYieldSourceRate } from "src/rewards/getYieldSourceRate";
import { useAppConfigForConnectedChain } from "src/ui/appconfig/useAppConfigForConnectedChain";
import { getPresentValue } from "src/ui/hyperdrive/hooks/usePresentValue";
import { useUnpausedPools } from "src/ui/hyperdrive/hooks/useUnpausedPools";
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

export const sortOptions = [
  "TVL",
  "Fixed APR",
  "Variable APY",
  "Yield Multiplier",
  "LP APY",
  "Chain",
] as const;

type SortOption = (typeof sortOptions)[number];

export function usePoolsList({
  selectedAssets,
  selectedChains,
}: {
  selectedAssets: string[] | undefined;
  selectedChains: number[] | undefined;
}): {
  pools: (HyperdriveConfig & { rewardsAmount?: AnyReward[] })[] | undefined;
  filters: PoolListFilters | undefined;
  status: QueryStatus;
  isSortingEnabled: boolean;
  sortOption: SortOption | undefined;
  setSortOption: (option: SortOption | undefined) => void;
} {
  const { unpausedPools } = useUnpausedPools();

  const filters = usePoolListFilters({ hyperdrives: unpausedPools });

  const appConfig = useAppConfigForConnectedChain();
  const selectedPools = getSelectedPools({
    hyperdrives: unpausedPools,
    selectedChains,
    selectedAssets,
    appConfig,
  });

  // Disable sorting if connected to a fork chain
  // TODO: Remove this once zaps fully enabled
  const chainId = useChainId();
  const isTestnet = isTestnetChain(chainId);

  // Sorting is disabled any time we're fetching data. This is because sorting
  // requires fetching a significant amount of data, and we want the List to load
  // as fast as possible. Instead, the individual PoolRow components are
  // responsible for fetching the specific data they need.
  const [sortOption, setSortOption] = useState<SortOption | undefined>();
  const isFetching = useIsFetching({
    // don't treat stale queries as fetching, since we have data we can show
    stale: false,
  });
  const isSortingEnabled = !isFetching && !isTestnet;
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
  const appConfig = useAppConfigForConnectedChain();
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
                zapContractAddress: appConfig.zaps[hyperdrive.chainId]?.address,
              });
              const publicClient = getPublicClient(wagmiConfig as any, {
                chainId: hyperdrive.chainId,
              }) as PublicClient;
              const [fixedApr, lpApy, tvl, yieldSourceRate, longPrice] =
                await Promise.all([
                  readHyperdrive.getFixedApr(),
                  getLpApy({ hyperdrive, readHyperdrive, appConfig }),
                  getPresentValue({
                    appConfig,
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
              return Number(
                (b.lpApy.netLpApy ?? 0n) - (a.lpApy.netLpApy ?? 0n),
              );
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
              const tvlA =
                b.tvl.fiat ??
                fixed(b.tvl.base).div(b.hyperdrive.decimals, 0) ??
                0;
              const tvlB =
                a.tvl.fiat ??
                fixed(a.tvl.base).div(a.hyperdrive.decimals, 0) ??
                0;
              return fixed(tvlA).sub(tvlB).toNumber();
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
  appConfig,
}: {
  hyperdrives: HyperdriveConfig[] | undefined;
  selectedChains: number[] | undefined;
  selectedAssets: string[] | undefined;
  appConfig: AppConfig;
}) {
  return hyperdrives
    ?.filter((hyperdrive) => {
      if (
        selectedChains?.length &&
        !selectedChains.includes(hyperdrive.chainId)
      ) {
        return false;
      }

      const depositAssets = getDepositAssets(hyperdrive, appConfig);
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
