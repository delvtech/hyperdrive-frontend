import { appConfig } from "@delvtech/hyperdrive-appconfig";
import { AdjustmentsHorizontalIcon } from "@heroicons/react/20/solid";
import { ArrowUpIcon } from "@heroicons/react/24/outline";
import { useNavigate, useSearch } from "@tanstack/react-router";
import { ReactElement, ReactNode } from "react";
import LoadingState from "src/ui/base/components/LoadingState";
import { MultiSelect } from "src/ui/base/components/MultiSelect";
import { NonIdealState } from "src/ui/base/components/NonIdealState";
import { Well } from "src/ui/base/components/Well/Well";
import { LANDING_ROUTE } from "src/ui/landing/routes";
import { PoolRow } from "src/ui/markets/PoolRow/PoolRow";
import { usePoolsList } from "src/ui/markets/hooks/usePoolsList";
import { useAccount } from "wagmi";

export function PoolsList(): ReactElement {
  const { address: account } = useAccount();
  const { chains: selectedChains, assets: selectedAssets } = useSearch({
    from: LANDING_ROUTE,
  });
  const {
    filters,
    status,
    pools,
    sortOption,
    setSortOption,
    isSortingEnabled,
  } = usePoolsList({
    selectedChains,
    selectedAssets,
  });

  const navigate = useNavigate({ from: LANDING_ROUTE });

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
        {status === "loading" && !pools ? (
          <LoadingState />
        ) : pools ? (
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
                  {pools.length}
                  {pools.length === 1 ? " pool" : " pools"}
                </span>
              </div>

              {/* Sorting */}
              {/* <div className="daisy-dropdown daisy-dropdown-end">
                <div
                  tabIndex={0}
                  role="button"
                  title="Sort by"
                  className={classNames(
                    "daisy-btn daisy-btn-outline daisy-btn-sm flex items-center justify-center border-gray-600",
                    {
                      "daisy-btn-disabled": !isSortingEnabled,
                    },
                  )}
                >
                  {!isSortingEnabled && (
                    <span className="daisy-loading daisy-loading-spinner daisy-loading-xs"></span>
                  )}
                  {sortOption ? sortOption : "Sort by"}
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
                          setSortOption(option);
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

            {!pools.length ? (
              <Well className="max-w-[90vw]">
                {pools?.length ? (
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
              pools.map((hyperdrive) => (
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
