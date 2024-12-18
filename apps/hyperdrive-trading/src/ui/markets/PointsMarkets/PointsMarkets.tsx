import { fixed, parseFixed } from "@delvtech/fixed-point-wasm";
import {
  getYieldSource,
  HyperdriveConfig,
  PointMultiplierReward,
} from "@delvtech/hyperdrive-appconfig";
import { Link, useSearch } from "@tanstack/react-router";
import { ReactElement, ReactNode } from "react";
import Skeleton from "react-loading-skeleton";
import { formatRate } from "src/base/formatRate";
import { calculateMarketYieldMultiplier } from "src/hyperdrive/calculateMarketYieldMultiplier";
import { useAppConfigForConnectedChain } from "src/ui/appconfig/useAppConfigForConnectedChain";
import { Well } from "src/ui/base/components/Well/Well";
import { useCurrentLongPrice } from "src/ui/hyperdrive/longs/hooks/useCurrentLongPrice";
import { useLpApy } from "src/ui/hyperdrive/lp/hooks/useLpApy";
import { AssetStack } from "src/ui/markets/AssetStack";
import { usePoolsList } from "src/ui/markets/hooks/usePoolsList";
import {
  MARKET_DETAILS_ROUTE,
  POINTS_MARKETS_ROUTE,
} from "src/ui/markets/routes";
import { useRewards } from "src/ui/rewards/useRewards";
import { useYieldSourceRate } from "src/ui/vaults/useYieldSourceRate";
import { useAccount } from "wagmi";

export function PointsMarkets(): ReactElement | null {
  const { chains: selectedChains, assets: selectedAssets } = useSearch({
    from: POINTS_MARKETS_ROUTE,
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
  // Only show pools that have a points reward type
  const poolsWithPoints = pools
    ? pools.filter((pool) =>
        pool.rewards?.find(({ type }) => type === "pointMultiplier"),
      )
    : [];

  return (
    <div className="mx-[2vw] mt-4 space-y-8 lg:w-[1064px]">
      <div className="space-y-4">
        <h1 className="gradient-text text-h4 font-medium md:text-h4">
          Points Markets
        </h1>
        <p className="font-inter text-lg leading-bodyText text-neutral-content">
          Maximize your returns on DeFi&apos;s top yield sources and boost your
          exposure to points and rewards.
        </p>
      </div>
      <div className="flex flex-wrap gap-8">
        {poolsWithPoints.map((hyperdrive) => (
          <PointsMarketCard key={hyperdrive.address} hyperdrive={hyperdrive} />
        ))}
      </div>
    </div>
  );
}

function PointsMarketCard({
  hyperdrive,
}: {
  hyperdrive: HyperdriveConfig;
}): ReactElement {
  return (
    <Well as="div" className="w-[514px] shrink-0 gap-6">
      <PointsMarketCardHeader hyperdrive={hyperdrive} />
      <PointsMarketCardBanner hyperdrive={hyperdrive} />
      <PointsMarketTable hyperdrive={hyperdrive} />
    </Well>
  );
}
function PointsMarketCardHeader({
  hyperdrive,
}: {
  hyperdrive: HyperdriveConfig;
}) {
  const appConfig = useAppConfigForConnectedChain();
  const chainInfo = appConfig.chains[hyperdrive.chainId];
  const yieldSource = getYieldSource({
    hyperdriveChainId: hyperdrive.chainId,
    hyperdriveAddress: hyperdrive.address,
    appConfig,
  });
  return (
    <div className="flex w-full items-center justify-between gap-2">
      {/* Icon */}
      <AssetStack
        hyperdriveAddress={hyperdrive.address}
        hyperdriveChainId={hyperdrive.chainId}
      />
      {/* Name & Chain info */}
      <div className="flex w-full items-center justify-between gap-6">
        <h4 className="mb-4 text-h4 sm:mb-0 sm:text-left">
          {yieldSource.shortName}
        </h4>
        <div className="flex items-center justify-end gap-1.5 text-sm">
          <img className="size-4 rounded-full" src={chainInfo.iconUrl} />
          <span className="text-neutral-content">{chainInfo.name}</span>
        </div>
      </div>
    </div>
  );
}

function PointsMarketCardBanner({
  hyperdrive,
}: {
  hyperdrive: HyperdriveConfig;
}) {
  const { rewards } = useRewards(hyperdrive);
  const { longPrice } = useCurrentLongPrice({
    chainId: hyperdrive.chainId,
    hyperdriveAddress: hyperdrive.address,
  });
  const pointRewards = rewards?.filter(
    ({ type }) => type === "pointMultiplier",
  ) as PointMultiplierReward[] | undefined;

  const multipliers =
    longPrice && pointRewards
      ? pointRewards.map(({ pointMultiplier, pointTokenLabel }) => {
          const capitalMultiplier = calculateMarketYieldMultiplier(longPrice);
          return {
            multiplier: capitalMultiplier
              .mul(parseFixed(pointMultiplier))
              .format({ decimals: 0 }),
            label: pointTokenLabel,
          };
        })
      : [];
  return (
    <div className="flex w-full items-center justify-between rounded-xl bg-base-200 p-5">
      <div className="flex w-full flex-col items-center justify-center gap-1.5">
        <p className="font-medium text-neutral-content sm:text-sm">
          Earn up to
        </p>
        <div className="flex w-full justify-between">
          {multipliers.map(({ multiplier, label }) => (
            <div
              key={label}
              className="flex w-full flex-col items-center justify-center gap-1.5"
            >
              <div className="font-chakraPetch text-h4 font-medium">
                {multiplier}x
              </div>
              <p className="font-medium text-neutral-content sm:text-sm">
                {label}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

function PointsMarketTable({ hyperdrive }: { hyperdrive: HyperdriveConfig }) {
  const { address: account } = useAccount();
  const { lpApy, lpApyStatus } = useLpApy({
    chainId: hyperdrive.chainId,
    hyperdriveAddress: hyperdrive.address,
  });
  const { vaultRate, vaultRateStatus } = useYieldSourceRate({
    chainId: hyperdrive.chainId,
    hyperdriveAddress: hyperdrive.address,
  });
  return (
    <div className="flex flex-col gap-3">
      <PointsMarketRow
        col1={null}
        col2={
          <Link
            to={MARKET_DETAILS_ROUTE}
            params={{
              address: hyperdrive.address,
              chainId: hyperdrive.chainId.toString(),
            }}
            search={{ position: "short" }}
            className="daisy-btn h-10 min-h-10 w-full rounded-full bg-gray-500 sm:daisy-btn-sm hover:bg-gray-500 sm:h-8 sm:bg-gray-600 md:w-32"
            onClick={(e) => {
              e.stopPropagation();
              window.plausible("positionCtaClick", {
                props: {
                  chainId: hyperdrive.chainId,
                  poolAddress: hyperdrive.address,
                  positionType: "short",
                  statName: "Open Short",
                  statValue: vaultRate?.netVaultRate
                    ? fixed(vaultRate.netVaultRate).toString()
                    : "",
                  connectedWallet: account,
                },
              });
            }}
          >
            Open Short
          </Link>
        }
        col3={
          <Link
            to={MARKET_DETAILS_ROUTE}
            params={{
              address: hyperdrive.address,
              chainId: hyperdrive.chainId.toString(),
            }}
            search={{ position: "lp" }}
            className="daisy-btn h-10 min-h-10 w-full rounded-full bg-gray-500 sm:daisy-btn-sm hover:bg-gray-500 sm:h-8 sm:bg-gray-600 md:w-32"
            onClick={(e) => {
              e.stopPropagation();
              window.plausible("positionCtaClick", {
                props: {
                  chainId: hyperdrive.chainId,
                  poolAddress: hyperdrive.address,
                  positionType: "lp",
                  statName: "Add Liquidity",
                  statValue: lpApy?.netLpApy
                    ? fixed(lpApy.netLpApy).toString()
                    : "",
                  connectedWallet: account,
                },
              });
            }}
          >
            Add Liquidity
          </Link>
        }
      />
      <PointsMarketRow
        col1={
          <span className="text-sm text-neutral-content">Variable APY</span>
        }
        col2={
          <span className="mr-5 text-sm">
            {vaultRateStatus !== "success" ? (
              <Skeleton width={100} />
            ) : (
              formatRate({ rate: vaultRate!.netVaultRate })
            )}
          </span>
        }
        col3={
          <span className="mr-3 text-sm">
            {lpApyStatus !== "success" ? (
              <Skeleton width={100} />
            ) : (
              formatRate({ rate: lpApy!.netLpApy! })
            )}
          </span>
        }
      />
      <PointsMarketRow
        col1={
          <span className="text-sm text-neutral-content">
            Rewards Multiplier
          </span>
        }
        col2={
          <span className="gradient-text mr-5 text-sm font-medium">64x</span>
        }
        col3={<span className="mr-3 text-sm">Up to 64x</span>}
      />
      <PointsMarketRow
        col1={<span className="text-sm text-neutral-content">Term</span>}
        col2={
          <span className="mr-5 text-sm text-neutral-content">182 days</span>
        }
        col3={<span className="mr-3 text-sm">∞</span>}
      />
    </div>
  );
}

function PointsMarketRow({
  col1,
  col2,
  col3,
}: {
  col1: ReactNode;
  col2: ReactNode;
  col3: ReactNode;
}) {
  return (
    <div className="grid w-full grid-flow-col grid-cols-3 gap-10">
      <div className="w-[124px]">{col1}</div>
      <div className="w-[122px] text-end">{col2}</div>
      <div className="w-[122px] text-end">{col3}</div>
    </div>
  );
}
