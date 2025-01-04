import { fixed } from "@delvtech/fixed-point-wasm";
import {
  getYieldSource,
  HyperdriveConfig,
} from "@delvtech/hyperdrive-appconfig";
import { Link, useNavigate, useSearch } from "@tanstack/react-router";
import { ReactElement, ReactNode } from "react";
import { Fade } from "react-awesome-reveal";
import Skeleton from "react-loading-skeleton";
import { formatRate } from "src/base/formatRate";
import { useAppConfigForConnectedChain } from "src/ui/appconfig/useAppConfigForConnectedChain";
import LoadingState from "src/ui/base/components/LoadingState";
import { Well } from "src/ui/base/components/Well/Well";
import { useLpApy } from "src/ui/hyperdrive/lp/hooks/useLpApy";
import { AssetStack } from "src/ui/markets/AssetStack";
import { usePoolsList } from "src/ui/markets/hooks/usePoolsList";
import { usePointsMultipliers } from "src/ui/markets/PointsMarkets/usePointsMultipliers";
import {
  MARKET_DETAILS_ROUTE,
  POINTS_MARKETS_ROUTE,
} from "src/ui/markets/routes";
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
        pool.rewardsAmount?.find(({ type }) => type === "pointMultiplier"),
      )
    : [];

  return (
    <div className="mx-[2vw] mt-4 space-y-8 lg:w-[1080px]">
      <div className="space-y-4">
        <h1 className="gradient-text text-h4 font-medium md:text-h4">
          Points Markets
        </h1>
        <p className="font-inter text-lg leading-bodyText text-neutral-content">
          Boost your exposure to points and rewards on DeFi&apos;s top yield
          sources.
        </p>
      </div>
      <div className="flex w-full flex-wrap gap-8">
        {status === "loading" && !pools ? (
          <div className="flex w-full justify-center">
            <LoadingState />
          </div>
        ) : poolsWithPoints.length ? (
          poolsWithPoints.map((hyperdrive) => (
            <Fade triggerOnce duration={500} key={hyperdrive.address}>
              <PointsMarketCard hyperdrive={hyperdrive} />
            </Fade>
          ))
        ) : null}
      </div>
    </div>
  );
}

function PointsMarketCard({
  hyperdrive,
}: {
  hyperdrive: HyperdriveConfig;
}): ReactElement {
  const navigate = useNavigate();
  return (
    <Well
      as="div"
      className="w-[514px] shrink-0 gap-6"
      onClick={() => {
        // Clicking on the card will navigate you to the LP tab by default
        navigate({
          to: MARKET_DETAILS_ROUTE,
          resetScroll: true,
          params: {
            address: hyperdrive.address,
            chainId: hyperdrive.chainId.toString(),
          },
          search: { position: "lp" },
        });
      }}
    >
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
  const multipliers = usePointsMultipliers({ hyperdrive });
  return (
    <div className="flex w-full items-center justify-between rounded-xl bg-base-200 p-5">
      <div className="flex w-full flex-col items-center justify-center gap-1.5">
        <p className="font-medium text-neutral-content sm:text-sm">
          Earn up to
        </p>
        <div className="flex w-full justify-between">
          {multipliers?.map(({ multiplier, label }) => (
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

  const multipliers = usePointsMultipliers({ hyperdrive });
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
          <span className="gradient-text mr-5 text-sm font-medium">
            {multipliers?.[0].multiplier}x
          </span>
        }
        col3={
          <span className="mr-3 text-sm">
            Up to {multipliers?.[0].multiplier}x
          </span>
        }
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
