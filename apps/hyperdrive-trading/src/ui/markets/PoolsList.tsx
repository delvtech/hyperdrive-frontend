import {
  appConfig,
  ChainConfig,
  getBaseToken,
  getToken,
  HyperdriveConfig,
  TokenConfig,
} from "@delvtech/hyperdrive-appconfig";
import { getHyperdrive } from "@delvtech/hyperdrive-js";
import { AdjustmentsHorizontalIcon } from "@heroicons/react/20/solid";
import { ArrowUpIcon } from "@heroicons/react/24/outline";
import { QueryStatus, useQuery } from "@tanstack/react-query";
import { useNavigate, useSearch } from "@tanstack/react-router";
import { ReactElement, ReactNode, useMemo } from "react";
import { ZERO_ADDRESS } from "src/base/constants";
import { getDrift } from "src/drift/getDrift";
import { useAppConfigForConnectedChain } from "src/ui/appconfig/useAppConfigForConnectedChain";
import LoadingState from "src/ui/base/components/LoadingState";
import { MultiSelect } from "src/ui/base/components/MultiSelect";
import { NonIdealState } from "src/ui/base/components/NonIdealState";
import { Well } from "src/ui/base/components/Well/Well";
import { LANDING_ROUTE } from "src/ui/landing/routes";
import { PoolRow } from "src/ui/markets/PoolRow/PoolRow";
import { useAccount, useChainId } from "wagmi";

// TODO: Re-implement sorting without blocking the list from rendering.
// const sortOptions = [
//   "TVL",
//   "Fixed APR",
//   "Yield Multiplier",
//   "LP APY",
//   "Chain",
// ] as const;

// type SortOption = (typeof sortOptions)[number];

const PINNED_POOLS = [
  // Pin the 182d Savings GYD pool to the top of the list
  // Remove this pinning on Wednesday, December 4, 2024
  // https://github.com/delvtech/hyperdrive-frontend/issues/1663
  "0xf1232Dc21eADAf503D82f1e1361CfF2BBf40394D", // mainnet
  "0x9248f874AaA2c53AD9324d7A2D033ea133443874", // gnosis
];

export function PoolsList(): ReactElement {
  const { address: account } = useAccount();
  const { pools: hyperdrives, status } = usePoolsList();
  const { chains: selectedChains, assets: selectedAssets } = useSearch({
    from: LANDING_ROUTE,
  });
  const navigate = useNavigate({ from: LANDING_ROUTE });
  // const [sort, setSort] = useState<SortOption>("TVL");

  // Sync filters with pools
  const filters = useMemo(() => {
    if (!hyperdrives) {
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

    for (const hyperdrive of hyperdrives) {
      const depositAssets = getDepositAssets(hyperdrive);
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
        a.chain.name.localeCompare(b.chain.name),
      ),
      assets: Object.values(assetsBySymbol).sort((a, b) =>
        a.asset.symbol.localeCompare(b.asset.symbol),
      ),
    };
  }, [hyperdrives]);

  // Filter and sort pools
  const selectedPools = hyperdrives
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
  // .toSorted((a, b) => {
  //   switch (sort) {
  //     case "Chain":
  //       const chainA = appConfig.chains[a.chainId] || {};
  //       const chainB = appConfig.chains[b.chainId] || {};
  //       return chainA.name.localeCompare(chainB.name);
  // case "Fixed APR":
  //   return Number(b.fixedApr - a.fixedApr);
  // case "LP APY":
  //   return Number((b.lpApy.lpApy || 0n) - (a.lpApy.lpApy || 0n));
  // case "Yield Multiplier":
  //   return Number(
  //     calculateMarketYieldMultiplier(b.longPrice).bigint -
  //       calculateMarketYieldMultiplier(a.longPrice).bigint,
  //   );
  // case "TVL":
  //   return fixed(b.tvl, b.hyperdrive.decimals)
  //     .sub(a.tvl, a.hyperdrive.decimals)
  //     .toNumber();
  //     default:
  //       return 0;
  //   }
  // });

  return (
    <>
      {/* Back to top button */}
      <button
        className="daisy-btn daisy-btn-circle fixed bottom-2 left-2 z-50 border-white/10 bg-white/20 text-white backdrop-blur"
        onClick={() =>
          window.scrollTo({
            top: 0,
            behavior: "smooth",
          })
        }
      >
        <ArrowUpIcon className="size-5" />
      </button>

      <div className="flex w-full flex-col gap-5">
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
                    selected={selectedChains || []}
                    onChange={(chains) => {
                      window.plausible("filterChange", {
                        props: {
                          name: "chain",
                          value: chains.join(", "),
                          connectedWallet: account,
                        },
                      });
                      navigate({
                        search: (current) => {
                          return {
                            ...current,
                            chains,
                          };
                        },
                      });
                    }}
                    displayValue={
                      selectedChains?.length === 1
                        ? appConfig.chains[selectedChains[0]].name
                        : `${
                            selectedChains?.length || filters?.chains.length
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
                    selected={selectedAssets || []}
                    onChange={(assets) => {
                      window.plausible("filterChange", {
                        props: {
                          name: "asset",
                          value: assets.join(", "),
                          connectedWallet: account,
                        },
                      });
                      navigate({
                        search: (current) => {
                          return {
                            ...current,
                            assets,
                          };
                        },
                      });
                    }}
                    displayValue={
                      selectedAssets?.length === 1
                        ? selectedAssets[0]
                        : `${
                            selectedAssets?.length || filters.assets.length
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
              {/* <div className="daisy-dropdown daisy-dropdown-end">
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
            </div> */}
            </div>

            {!selectedPools.length ? (
              <Well className="max-w-[90vw]">
                {hyperdrives?.length ? (
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
              selectedPools.map((hyperdrive) => (
                <PoolRow
                  // Combine address and chainId for a unique key, as addresses may
                  // overlap across chains (e.g. cloudchain and mainnet)
                  key={`${hyperdrive.address}-${hyperdrive.chainId}`}
                  hyperdrive={hyperdrive}
                />
              ))
            )}
          </>
        ) : null}
      </div>
    </>
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

// interface Pool extends PoolRowProps {
//   fixedApr: bigint;
//   depositAssets: TokenConfig[];
//   longPrice: bigint;
// }

const HIDDEN_POOLS = [
  // Hide the susde/dai pool on mainnet because the LP APY is -100% after the
  // only LP yoinked their liquidity while a Long was open.
  "0xd41225855A5c5Ba1C672CcF4d72D1822a5686d30",
];

function usePoolsList(): {
  pools: HyperdriveConfig[] | undefined;
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

  return { pools: data, status };
}

function getDepositAssets(hyperdrive: HyperdriveConfig): TokenConfig[] {
  const depositAssets: TokenConfig[] = [];
  if (hyperdrive.depositOptions.isBaseTokenDepositEnabled) {
    const baseToken = getBaseToken({
      hyperdriveChainId: hyperdrive.chainId,
      hyperdriveAddress: hyperdrive.address,
      appConfig,
    });
    depositAssets.push(baseToken);
  }

  if (hyperdrive.depositOptions.isShareTokenDepositsEnabled) {
    const sharesToken = getToken({
      chainId: hyperdrive.chainId,
      tokenAddress: hyperdrive.poolConfig.vaultSharesToken,
      appConfig,
    });
    if (sharesToken && sharesToken.address !== ZERO_ADDRESS) {
      depositAssets.push(sharesToken);
    }
  }
  return depositAssets;
}
