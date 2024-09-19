import { fixed } from "@delvtech/fixed-point-wasm";
import { BarsArrowDownIcon } from "@heroicons/react/20/solid";
import { appConfig, findBaseToken } from "@hyperdrive/appconfig";
import { QueryStatus, useQuery } from "@tanstack/react-query";
import { getPublicClient } from "@wagmi/core";
import { ReactElement, useState } from "react";
import { isTestnetChain } from "src/chains/isTestnetChain";
import { getLpApy } from "src/hyperdrive/getLpApy";
import { getReadHyperdrive } from "src/hyperdrive/getReadHyperdrive";
import { getYieldSourceRate } from "src/hyperdrive/getYieldSourceRate";
import { wagmiConfig } from "src/network/wagmiClient";
import { getTokenFiatPrice } from "src/token/getTokenFietPrice";
import { useAppConfigForConnectedChain } from "src/ui/appconfig/useAppConfigForConnectedChain";
import LoadingState from "src/ui/base/components/LoadingState";
import { PoolRow, PoolRowProps } from "src/ui/markets/PoolRow/PoolRow";
import { PublicClient } from "viem";
import { useChainId } from "wagmi";

const sortOptions = [
  "TVL",
  "Chain",
  "Fixed APR",
  "Variable APY",
  "LP APY",
] as const;

type SortOption = (typeof sortOptions)[number];

export function PoolsList(): ReactElement {
  const { pools, status } = usePoolsList();
  const [sort, setSort] = useState<SortOption>("TVL");

  function handleSortChange(option: SortOption) {
    setSort(option);
  }

  const list = pools?.slice().sort((a, b) => {
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
      {
        // Show the newest pools first
        status === "loading" && !list ? (
          <LoadingState />
        ) : list ? (
          <>
            {/* Sorting & Filtering */}
            <div className="relative z-20 flex items-center justify-end gap-4">
              <div className="flex items-center gap-1">
                <div className="daisy-dropdown daisy-dropdown-end">
                  <div
                    tabIndex={0}
                    role="button"
                    title="Sort by"
                    className="daisy-btn daisy-btn-outline daisy-btn-sm flex items-center justify-center border-gray-600"
                  >
                    {sort}
                    {/* <ArrowsUpDownIcon className="size-5" /> */}
                    <BarsArrowDownIcon className="size-5" />
                  </div>
                  <ul
                    tabIndex={0}
                    className="daisy-menu daisy-dropdown-content z-[1] gap-2 rounded-lg bg-base-100 p-4 shadow"
                  >
                    {sortOptions.map((option) => (
                      <li key={option}>
                        <button
                          type="button"
                          onClick={() => {
                            (document.activeElement as HTMLElement)?.blur();
                            handleSortChange(option);
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
        ) : null
      }
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
          let isFiat = !isTestnetChain(hyperdrive.chainId);
          if (isFiat) {
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
              isFiat = false;
              return;
            }
            tvl = fixed(tvl, hyperdrive.decimals).mul(fiatPrice).bigint;
          }

          pools.push({
            fixedApr,
            hyperdrive,
            isFiat,
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
