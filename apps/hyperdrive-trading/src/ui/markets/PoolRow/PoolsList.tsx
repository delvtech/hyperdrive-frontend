import { fixed } from "@delvtech/fixed-point-wasm";
import {
  AdjustmentsHorizontalIcon,
  BarsArrowDownIcon,
  CheckIcon,
  ChevronDownIcon,
} from "@heroicons/react/20/solid";
import {
  appConfig,
  findBaseToken,
  findToken,
  TokenConfig,
} from "@hyperdrive/appconfig";
import { QueryStatus, useQuery } from "@tanstack/react-query";
import { getPublicClient } from "@wagmi/core";
import classNames from "classnames";
import { ReactElement, useEffect, useReducer, useRef, useState } from "react";
import { ZERO_ADDRESS } from "src/base/constants";
import { isTestnetChain } from "src/chains/isTestnetChain";
import { getLpApy } from "src/hyperdrive/getLpApy";
import { getReadHyperdrive } from "src/hyperdrive/getReadHyperdrive";
import { getYieldSourceRate } from "src/hyperdrive/getYieldSourceRate";
import { wagmiConfig } from "src/network/wagmiClient";
import { getTokenFiatPrice } from "src/token/getTokenFiatPrice";
import { useAppConfigForConnectedChain } from "src/ui/appconfig/useAppConfigForConnectedChain";
import LoadingState from "src/ui/base/components/LoadingState";
import { NonIdealState } from "src/ui/base/components/NonIdealState";
import { Well } from "src/ui/base/components/Well/Well";
import { PoolRow, PoolRowProps } from "src/ui/markets/PoolRow/PoolRow";
import { PublicClient } from "viem";
import { useChainId } from "wagmi";

const sortOptions = [
  "TVL",
  "Fixed APR",
  "Variable APY",
  "LP APY",
  "Chain",
] as const;

export function PoolsList(): ReactElement {
  const { pools, status } = usePoolsList();
  const [sort, setSort] = useState<SortOption>("TVL");
  const [filters, dispatch] = useReducer(filtersReducer, {
    chains: {},
    assets: {},
  });

  // Sync filters with pools
  useEffect(() => {
    if (!pools) {
      return;
    }
    dispatch({ type: "init", pools });
  }, [pools]);

  // Prep filter values
  const allAssets = Object.values(filters.assets).sort((a, b) =>
    a.symbol.localeCompare(b.symbol),
  );
  const selectedAssets = allAssets.filter(({ selected }) => selected);
  const allChains = Object.values(filters.chains).sort((a, b) => a.id - b.id);
  const selectedChains = allChains.filter(({ selected }) => selected);

  // Filter and sort pools
  const list = pools
    ?.filter((pool) => {
      if (
        selectedChains.length &&
        !selectedChains.some(({ id }) => pool.hyperdrive.chainId === id)
      ) {
        return false;
      }

      if (
        selectedAssets.length &&
        !selectedAssets.some((selectedAsset) =>
          pool.depositAssets.some(
            (poolAsset) => poolAsset.symbol === selectedAsset.symbol,
          ),
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
        case "Variable APY":
          return Number(b.vaultRate - a.vaultRate);
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
      {status === "loading" && !list ? (
        <LoadingState />
      ) : list ? (
        <>
          {/* List controls */}
          <div className="relative z-20 flex items-center justify-between gap-10">
            {/* Filters */}
            <div className="flex items-center gap-2">
              <AdjustmentsHorizontalIcon className="size-5 sm:mr-1" />
              {/* Chain filter */}
              <div className="daisy-dropdown">
                <div
                  tabIndex={0}
                  role="button"
                  title="Filter by chain"
                  className="daisy-btn daisy-btn-outline daisy-btn-sm flex items-center justify-center border-gray-600"
                >
                  {selectedChains.length === 1
                    ? appConfig.chains[selectedChains[0].id]?.name ||
                      `chain ${selectedChains[0].id}`
                    : `${selectedChains.length || allChains.length} chains`}
                  <ChevronDownIcon className="size-5" />
                </div>
                <ul
                  tabIndex={0}
                  className="daisy-menu daisy-dropdown-content z-[1] mt-1 gap-2 rounded-lg border border-base-200 bg-base-100 p-2 shadow"
                >
                  {allChains.map((chain) => (
                    <li key={chain.id}>
                      <button
                        type="button"
                        onClick={() =>
                          dispatch({ type: "toggleChain", chainId: chain.id })
                        }
                        className="group flex min-w-max cursor-pointer items-center justify-between gap-3 whitespace-nowrap text-left"
                      >
                        <span className="flex items-center gap-1.5">
                          {appConfig.chains[chain.id]?.iconUrl && (
                            <img
                              className="size-4 rounded-full"
                              src={appConfig.chains[chain.id]?.iconUrl}
                            />
                          )}
                          {appConfig.chains[chain.id]?.name ||
                            `chain ${chain.id}`}{" "}
                          <span className="daisy-badge daisy-badge-neutral">
                            {
                              pools?.filter(
                                (pool) => pool.hyperdrive.chainId === chain.id,
                              ).length
                            }
                          </span>
                        </span>
                        <CheckIcon
                          className={classNames("size-5 fill-aquamarine", {
                            invisible: !selectedChains.includes(chain),
                          })}
                        />
                      </button>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Assets filter */}
              <div className="daisy-dropdown">
                <div
                  tabIndex={0}
                  role="button"
                  title="Filter by deposit asset"
                  className="daisy-btn daisy-btn-outline daisy-btn-sm flex items-center justify-center border-gray-600"
                >
                  {selectedAssets.length === 1
                    ? selectedAssets[0].symbol
                    : `${selectedAssets.length || allAssets.length} assets`}
                  <ChevronDownIcon className="size-5" />
                </div>
                <ul
                  tabIndex={0}
                  className="daisy-menu daisy-dropdown-content z-[1] mt-1 gap-2 rounded-lg border border-base-200 bg-base-100 p-2 shadow"
                >
                  {allAssets.map((asset) => (
                    <li key={`${asset.chainId}-${asset.address}`}>
                      <button
                        type="button"
                        onClick={() =>
                          dispatch({
                            type: "toggleAsset",
                            symbol: asset.symbol,
                          })
                        }
                        className="group flex min-w-max cursor-pointer items-center justify-between gap-3 whitespace-nowrap text-left"
                      >
                        <span className="flex items-center gap-1.5">
                          <img
                            className="size-4 rounded-full"
                            src={asset.iconUrl}
                          />
                          {asset.symbol}{" "}
                          <span className="daisy-badge daisy-badge-neutral">
                            {
                              pools?.filter(({ depositAssets }) =>
                                depositAssets.some(
                                  ({ symbol }) => symbol === asset.symbol,
                                ),
                              ).length
                            }
                          </span>
                        </span>
                        <CheckIcon
                          className={classNames("size-5 fill-aquamarine", {
                            invisible: !selectedAssets.includes(asset),
                          })}
                        />
                      </button>
                    </li>
                  ))}
                </ul>
              </div>

              {/* <span className="hidden text-sm text-neutral-content sm:block"> */}
              <span className="daisy-badge hidden h-auto items-center self-stretch text-neutral-content sm:flex">
                {list.length}
                {list.length === 1 ? " pool" : " pools"}
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

          {list.length ? (
            list.map(
              ({ fixedApr, hyperdrive, isFiat, lpApy, tvl, vaultRate }) => (
                <PoolRow
                  // Combine address and chainId for a unique key, as addresses may
                  // overlap across chains (e.g. cloudchain and mainnet)
                  key={`${hyperdrive.address}-${hyperdrive.chainId}`}
                  hyperdrive={hyperdrive}
                  tvl={tvl}
                  isFiat={isFiat}
                  fixedApr={fixedApr}
                  vaultRate={vaultRate}
                  lpApy={lpApy}
                />
              ),
            )
          ) : (
            <Well
              className="max-w-[90vw]"
              style={{
                width: containerRef.current?.offsetWidth,
              }}
            >
              <NonIdealState
                heading={
                  pools?.length || 0 > 0
                    ? "No pools found"
                    : "No pools available"
                }
                text={
                  pools?.length || 0 > 0
                    ? "Try adjusting your filters."
                    : "Check back soon!"
                }
              />
            </Well>
          )}
        </>
      ) : null}
    </div>
  );
}

type SortOption = (typeof sortOptions)[number];

interface FiltersState {
  assets: {
    [symbol: string]: TokenConfig & {
      selected: boolean;
    };
  };
  chains: {
    [id: number]: {
      id: number;
      selected: boolean;
    };
  };
}

type FiltersAction =
  | { type: "init"; pools: Pool[] }
  | { type: "toggleAsset"; symbol: string }
  | { type: "toggleChain"; chainId: number };

function filtersReducer(
  state: FiltersState,
  action: FiltersAction,
): FiltersState {
  switch (action.type) {
    case "init":
      const newState = {
        assets: { ...state.assets },
        chains: { ...state.chains },
      };

      for (const { hyperdrive, depositAssets } of action.pools) {
        newState.chains[hyperdrive.chainId] ||= {
          id: hyperdrive.chainId,
          selected: false,
        };

        for (const asset of depositAssets) {
          newState.assets[asset.symbol] ||= {
            ...asset,
            selected: false,
          };
        }
      }

      return newState;

    case "toggleAsset":
      return {
        ...state,
        assets: {
          ...state.assets,
          [action.symbol]: {
            ...state.assets[action.symbol],
            selected: !state.assets[action.symbol].selected,
          },
        },
      };

    case "toggleChain":
      return {
        ...state,
        chains: {
          ...state.chains,
          [action.chainId]: {
            id: action.chainId,
            selected: !state.chains[action.chainId].selected,
          },
        },
      };
  }
}

interface Pool extends PoolRowProps {
  depositAssets: TokenConfig[];
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
          const vaultRate = await getYieldSourceRate(
            readHyperdrive,
            appConfigForConnectedChain,
          );
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
            vaultRate: vaultRate.rate,
            lpApy,
            tvl,
            isFiat: isFiatSupported,
            depositAssets,
          });
        }),
      );

      return pools;
    },
  });

  return { pools: data, status };
}
