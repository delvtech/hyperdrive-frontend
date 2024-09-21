import { fixed } from "@delvtech/fixed-point-wasm";
import {
  AdjustmentsHorizontalIcon,
  BarsArrowDownIcon,
  CheckIcon,
  ChevronDownIcon,
} from "@heroicons/react/20/solid";
import { appConfig, findBaseToken } from "@hyperdrive/appconfig";
import { QueryStatus, useQuery } from "@tanstack/react-query";
import { getPublicClient } from "@wagmi/core";
import classNames from "classnames";
import { ReactElement, useEffect, useState } from "react";
import { isTestnetChain } from "src/chains/isTestnetChain";
import { getLpApy } from "src/hyperdrive/getLpApy";
import { getReadHyperdrive } from "src/hyperdrive/getReadHyperdrive";
import { getYieldSourceRate } from "src/hyperdrive/getYieldSourceRate";
import { wagmiConfig } from "src/network/wagmiClient";
import { getTokenFiatPrice } from "src/token/getTokenFiatPrice";
import { useAppConfigForConnectedChain } from "src/ui/appconfig/useAppConfigForConnectedChain";
import LoadingState from "src/ui/base/components/LoadingState";
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

type SortOption = (typeof sortOptions)[number];

export function PoolsList(): ReactElement {
  const { pools, status } = usePoolsList();
  const [sort, setSort] = useState<SortOption>("TVL");
  const [allChainIds, setAllChainIds] = useState<number[]>([]);
  const [selectedChainIds, setSelectedChainIds] =
    useState<number[]>(allChainIds);

  // Reset allChainIds when pools change
  useEffect(() => {
    setAllChainIds(
      Array.from(
        new Set(pools?.map((pool) => pool.hyperdrive.chainId) || []),
      ).sort(),
    );
  }, [pools]);

  // Reset selectedChainIds when allChainIds change
  useEffect(() => {
    setSelectedChainIds(allChainIds);
  }, [allChainIds]);

  // Filter and sort pools
  const list = pools
    ?.filter((pool) => {
      if (selectedChainIds.length === 0) {
        return true;
      }
      return selectedChainIds.includes(pool.hyperdrive.chainId);
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

  return (
    <div className="flex w-full flex-col gap-5">
      {status === "loading" && !list ? (
        <LoadingState />
      ) : list ? (
        <>
          {/* List controls */}
          <div className="relative z-20 flex items-center gap-4">
            <AdjustmentsHorizontalIcon className="size-5" />
            {/* Chain filter */}
            <div className="flex items-center gap-1">
              <div className="daisy-dropdown">
                <div
                  tabIndex={0}
                  role="button"
                  title="Filter by chain"
                  className="daisy-btn daisy-btn-outline daisy-btn-sm flex items-center justify-center border-gray-600"
                >
                  {selectedChainIds.length === 1
                    ? appConfig.chains[selectedChainIds[0]]?.name ||
                      `chain ${selectedChainIds[0]}`
                    : `${selectedChainIds.length === 0 ? allChainIds.length : selectedChainIds.length} chains`}
                  <ChevronDownIcon className="size-5" />
                </div>
                <ul
                  tabIndex={0}
                  className="daisy-menu daisy-dropdown-content z-[1] mt-1 gap-2 rounded-lg border border-base-200 bg-base-100 p-2 shadow"
                >
                  {allChainIds.map((chainId) => (
                    <li key={chainId}>
                      <button
                        type="button"
                        onClick={() => {
                          setSelectedChainIds((prev) =>
                            prev.includes(chainId)
                              ? prev.filter((id) => id !== chainId)
                              : [...prev, chainId],
                          );
                        }}
                        className="group flex min-w-max cursor-pointer items-center justify-between gap-3 whitespace-nowrap text-left"
                      >
                        <span className="flex items-center gap-1.5">
                          {appConfig.chains[chainId]?.iconUrl && (
                            <img
                              className="size-4 rounded-full"
                              src={appConfig.chains[chainId]?.iconUrl}
                            />
                          )}
                          {appConfig.chains[chainId]?.name ||
                            `chain ${chainId}`}{" "}
                          <span className="daisy-badge daisy-badge-neutral">
                            {
                              pools?.filter(
                                (pool) => pool.hyperdrive.chainId === chainId,
                              ).length
                            }
                          </span>
                        </span>
                        <CheckIcon
                          className={classNames("size-5 fill-aquamarine", {
                            invisible: !selectedChainIds.includes(chainId),
                          })}
                        />
                      </button>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            {/* Sorting */}
            <div className="ml-auto flex items-center gap-1">
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
          </div>

          {list.map(
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
          )}
        </>
      ) : null}
    </div>
  );
}

function usePoolsList(): {
  pools: PoolRowProps[] | undefined;
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
      const pools: PoolRowProps[] = [];

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
            const baseToken = findBaseToken({
              hyperdriveChainId: hyperdrive.chainId,
              hyperdriveAddress: hyperdrive.address,
              appConfig,
            });
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

          pools.push({
            fixedApr,
            hyperdrive,
            isFiat: isFiatSupported,
            lpApy,
            tvl,
            vaultRate: vaultRate.rate,
          });
        }),
      );

      return pools;
    },
  });

  return { pools: data, status };
}
