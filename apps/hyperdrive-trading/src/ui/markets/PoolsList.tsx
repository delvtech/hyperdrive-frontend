import { fixed } from "@delvtech/fixed-point-wasm";
import {
  AdjustmentsHorizontalIcon,
  BarsArrowDownIcon,
} from "@heroicons/react/20/solid";
import {
  appConfig,
  ChainConfig,
  findBaseToken,
  findToken,
  TokenConfig,
} from "@hyperdrive/appconfig";
import { QueryStatus, useQuery } from "@tanstack/react-query";
import { getPublicClient } from "@wagmi/core";
import { ReactElement, ReactNode, useMemo, useRef, useState } from "react";
import { ZERO_ADDRESS } from "src/base/constants";
import { isTestnetChain } from "src/chains/isTestnetChain";
import { calculateMarketYieldMultiplier } from "src/hyperdrive/calculateMarketYieldMultiplier";
import { getLpApy } from "src/hyperdrive/getLpApy";
import { getReadHyperdrive } from "src/hyperdrive/getReadHyperdrive";
import { wagmiConfig } from "src/network/wagmiClient";
import { getTokenFiatPrice } from "src/token/getTokenFiatPrice";
import { useAppConfigForConnectedChain } from "src/ui/appconfig/useAppConfigForConnectedChain";
import LoadingState from "src/ui/base/components/LoadingState";
import { MultiSelect } from "src/ui/base/components/MultiSelect";
import { NonIdealState } from "src/ui/base/components/NonIdealState";
import { Well } from "src/ui/base/components/Well/Well";
import { PoolRow, PoolRowProps } from "src/ui/markets/PoolRow";
import { PublicClient } from "viem";
import { useChainId } from "wagmi";

const sortOptions = [
  "TVL",
  "Fixed APR",
  "Yield Multiplier",
  "LP APY",
  "Chain",
] as const;

type SortOption = (typeof sortOptions)[number];

export function PoolsList(): ReactElement {
  const { pools: allPools, status } = usePoolsList();
  const [sort, setSort] = useState<SortOption>("TVL");

  // Sync filters with pools
  const filters = useMemo(() => {
    if (!allPools) {
      return;
    }

    const chainsById: {
      [id: number]: {
        chain: ChainConfig;
        count: number;
      };
    } = {};
    const assetsBySymbol: {
      [symbol: string]: {
        asset: TokenConfig;
        count: number;
      };
    } = {};

    for (const { hyperdrive, depositAssets } of allPools) {
      chainsById[hyperdrive.chainId] ||= {
        chain: appConfig.chains[hyperdrive.chainId],
        count: 0,
      };
      chainsById[hyperdrive.chainId].count += 1;

      for (const asset of depositAssets) {
        assetsBySymbol[asset.symbol] ||= {
          asset,
          count: 0,
        };
        assetsBySymbol[asset.symbol].count += 1;
      }
    }

    return {
      chains: Object.values(chainsById).sort((a, b) =>
        a.chain.name.localeCompare(b.chain.name)
      ),
      assets: Object.values(assetsBySymbol).sort((a, b) =>
        a.asset.symbol.localeCompare(b.asset.symbol)
      ),
    };
  }, [allPools]);

  const [selectedChains, setSelectedChains] = useState<number[]>([]);
  const [selectedAssets, setSelectedAssets] = useState<string[]>([]);

  // Filter and sort pools
  const selectedPools = allPools
    ?.filter((pool) => {
      if (
        selectedChains.length &&
        !selectedChains.includes(pool.hyperdrive.chainId)
      ) {
        return false;
      }

      if (
        selectedAssets.length &&
        !pool.depositAssets.some(({ symbol }) =>
          selectedAssets.includes(symbol)
        )
      ) {
        return false;
      }

      return true;
    })
    .toSorted((a, b) => {
      switch (sort) {
        case "Chain":
          const chainA = appConfig.chains[a.hyperdrive.chainId] || {};
          const chainB = appConfig.chains[b.hyperdrive.chainId] || {};
          return chainA.name.localeCompare(chainB.name);
        case "Fixed APR":
          return Number(b.fixedApr - a.fixedApr);
        case "LP APY":
          return Number((b.lpApy.lpApy || 0n) - (a.lpApy.lpApy || 0n));
        case "Yield Multiplier":
          return Number(
            calculateMarketYieldMultiplier(b.longPrice).bigint -
              calculateMarketYieldMultiplier(a.longPrice).bigint
          );
        case "TVL":
          return fixed(b.tvl, b.hyperdrive.decimals)
            .sub(a.tvl, a.hyperdrive.decimals)
            .toNumber();
        default:
          return 0;
      }
    });

  // To prevent jarring layout shifts when no pools match the selected filters,
  // the NonIdealState is wrapped in a div with a width set to match the outer
  // container's width, which will be the width it rendered at before the
  // filter's were changed.
  const containerRef = useRef<HTMLDivElement>(null);

  return (
    <div className="flex w-full flex-col gap-5" ref={containerRef}>
      {status === "loading" && !selectedPools ? (
        <LoadingState />
      ) : selectedPools ? (
        <>
          {/* List controls */}
          <div className="relative z-20 flex items-center justify-between gap-10">
            {/* Filters */}
            <div className="flex items-center gap-2">
              <AdjustmentsHorizontalIcon className="size-5 sm:mr-1" />
              {/* Chain filter */}
              {filters && filters.chains.length > 1 && (
                <MultiSelect
                  title="Filter by chain"
                  selected={selectedChains}
                  onChange={setSelectedChains}
                  label={
                    selectedChains.length === 1
                      ? appConfig.chains[selectedChains[0]].name
                      : `${
                          selectedChains.length || filters?.chains.length
                        } chains`
                  }
                  searchEnabled
                  options={filters.chains.map(({ chain, count }) => {
                    return {
                      value: chain.id,
                      searchValue: chain.name,
                      label: (
                        <FilterMenuItem iconSrc={chain.iconUrl} count={count}>
                          {chain.name}
                        </FilterMenuItem>
                      ),
                    };
                  })}
                />
              )}

              {/* Assets filter */}
              {filters && filters.assets.length > 1 && (
                <MultiSelect
                  title="Filter by deposit asset"
                  selected={selectedAssets}
                  onChange={setSelectedAssets}
                  label={
                    selectedAssets.length === 1
                      ? selectedAssets[0]
                      : `${
                          selectedAssets.length || filters.assets.length
                        } assets`
                  }
                  searchEnabled
                  options={filters.assets.map(({ asset, count }) => {
                    return {
                      value: asset.symbol,
                      label: (
                        <FilterMenuItem iconSrc={asset.iconUrl} count={count}>
                          {asset.symbol}
                        </FilterMenuItem>
                      ),
                    };
                  })}
                />
              )}

              <span className="daisy-badge hidden h-auto items-center self-stretch text-neutral-content sm:flex">
                {selectedPools.length}
                {selectedPools.length === 1 ? " pool" : " pools"}
              </span>
            </div>

            {/* Sorting */}
            <div className="daisy-dropdown daisy-dropdown-end">
              <div
                tabIndex={0}
                role="button"
                title="Sort by"
                className="daisy-btn daisy-btn-outline daisy-btn-sm flex items-center justify-center border-gray-600"
              >
                {sort}
                <BarsArrowDownIcon className="size-5" />
              </div>
              <ul
                tabIndex={0}
                className="daisy-menu daisy-dropdown-content z-[1] mt-1 gap-2 rounded-lg border border-base-200 bg-base-100 p-2 shadow"
              >
                {sortOptions.map((option) => (
                  <li key={option}>
                    <button
                      type="button"
                      onClick={() => {
                        (document.activeElement as HTMLElement)?.blur();
                        setSort(option);
                      }}
                      className="cursor-pointer whitespace-nowrap text-left"
                    >
                      {option}
                    </button>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {!selectedPools.length ? (
            <Well
              className="max-w-[90vw]"
              style={{
                width: containerRef.current?.offsetWidth,
              }}
            >
              {allPools?.length ? (
                <NonIdealState
                  heading={"No pools found"}
                  text={"Try adjusting your filters."}
                />
              ) : (
                <NonIdealState
                  heading={"No pools available"}
                  text={"Check back soon!"}
                />
              )}
            </Well>
          ) : (
            selectedPools.map(
              ({ fixedApr, hyperdrive, isFiat, lpApy, tvl }) => (
                <PoolRow
                  // Combine address and chainId for a unique key, as addresses may
                  // overlap across chains (e.g. cloudchain and mainnet)
                  key={`${hyperdrive.address}-${hyperdrive.chainId}`}
                  hyperdrive={hyperdrive}
                  tvl={tvl}
                  isFiat={isFiat}
                  fixedApr={fixedApr}
                  lpApy={lpApy}
                />
              )
            )
          )}
        </>
      ) : null}
    </div>
  );
}

function FilterMenuItem({
  count,
  children,
  iconSrc,
}: {
  count?: number;
  children: ReactNode;
  iconSrc?: string;
}) {
  return (
    <>
      {iconSrc && <img className="size-4 rounded-full" src={iconSrc} />}
      {children}
      {count !== undefined && (
        <span className="daisy-badge daisy-badge-neutral">{count}</span>
      )}
    </>
  );
}

interface Pool extends PoolRowProps {
  depositAssets: TokenConfig[];
  longPrice: bigint;
}

function usePoolsList(): {
  pools: Pool[] | undefined;
  status: QueryStatus;
} {
  // Only show testnet and fork pools if the user is connected to a testnet
  // chain
  const appConfigForConnectedChain = useAppConfigForConnectedChain();

  // Use the chain id in the query key to make sure the pools list updates when
  // you switch chains
  const connectedChainId = useChainId();

  const { data, status } = useQuery({
    queryKey: ["poolsList", { connectedChainId }],
    queryFn: async () => {
      const pools: Pool[] = [];

      await Promise.all(
        appConfigForConnectedChain.hyperdrives.map(async (hyperdrive) => {
          const publicClient = getPublicClient(wagmiConfig as any, {
            chainId: hyperdrive.chainId,
          });
          const readHyperdrive = await getReadHyperdrive({
            hyperdriveAddress: hyperdrive.address,
            appConfig: appConfig,
            publicClient: publicClient as PublicClient,
          });

          // We only show hyperdrives that are not paused
          const { isPaused } = await readHyperdrive.getMarketState();
          if (isPaused) {
            return;
          }

          const baseToken = findBaseToken({
            hyperdriveChainId: hyperdrive.chainId,
            hyperdriveAddress: hyperdrive.address,
            appConfig,
          });

          const fixedApr = await readHyperdrive.getFixedApr();
          const longPrice = await readHyperdrive.getLongPrice();
          const lpApy = await getLpApy({
            hyperdrive,
            readHyperdrive,
          });

          // Display TVL as base value on testnet due to lack of reliable
          // fiat pricing. On mainnet and others, use DeFiLlama's fiat
          // price.
          let tvl = await readHyperdrive.getPresentValue();
          let isFiatSupported = !isTestnetChain(hyperdrive.chainId);
          if (isFiatSupported) {
            const fiatPrice = await getTokenFiatPrice({
              chainId: hyperdrive.chainId,
              tokenAddress: baseToken.address,
            });
            if (fiatPrice === undefined) {
              isFiatSupported = false;
              return;
            }
            tvl = fixed(tvl, hyperdrive.decimals).mul(fiatPrice).bigint;
          }

          const depositAssets: TokenConfig[] = [];
          if (hyperdrive.depositOptions.isBaseTokenDepositEnabled) {
            depositAssets.push(baseToken);
          }

          if (hyperdrive.depositOptions.isShareTokenDepositsEnabled) {
            const sharesToken = findToken({
              chainId: hyperdrive.chainId,
              tokenAddress: hyperdrive.poolConfig.vaultSharesToken,
              tokens: appConfig.tokens,
            });
            if (sharesToken && sharesToken.address !== ZERO_ADDRESS) {
              depositAssets.push(sharesToken);
            }
          }

          pools.push({
            hyperdrive,
            fixedApr,
            longPrice,
            lpApy,
            tvl,
            isFiat: isFiatSupported,
            depositAssets,
          });
        })
      );

      return pools;
    },
  });

  return { pools: data, status };
}
