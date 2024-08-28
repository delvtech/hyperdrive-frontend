import { fixed } from "@delvtech/fixed-point-wasm";
import { ClockIcon } from "@heroicons/react/24/outline";
import { HyperdriveConfig, findBaseToken } from "@hyperdrive/appconfig";
import { Link, useNavigate } from "@tanstack/react-router";
import classNames from "classnames";
import { ReactElement, ReactNode } from "react";
import Skeleton from "react-loading-skeleton";
import { formatRate } from "src/base/formatRate";
import { isTestnetChain } from "src/chains/isTestnetChain";
import { useAppConfig } from "src/ui/appconfig/useAppConfig";
import { Well } from "src/ui/base/components/Well/Well";
import { formatCompact } from "src/ui/base/formatting/formatCompact";
import { useLpApy } from "src/ui/hyperdrive/hooks/useLpApy";
import { usePresentValue } from "src/ui/hyperdrive/hooks/usePresentValue";
import { useFixedRate } from "src/ui/hyperdrive/longs/hooks/useFixedRate";
import { Hero } from "src/ui/landing/Hero/Hero";
import { AssetStack } from "src/ui/markets/AssetStack";
import { formatTermLength2 } from "src/ui/markets/formatTermLength";
import { MARKET_DETAILS_ROUTE } from "src/ui/markets/routes";
import { RewardsTooltip } from "src/ui/rewards/RewardsTooltip";
import { useTokenFiatPrice } from "src/ui/token/hooks/useTokenFiatPrices";
import { useYieldSourceRate } from "src/ui/vaults/useYieldSourceRate";

export function Landing(): ReactElement | null {
  return (
    <div className="flex flex-col items-center gap-4 lg:w-[900px]">
      <Hero />
      <div className="flex w-full flex-col items-center">
        <div className="flex flex-col gap-4">
          {/* TODO: Implement filter buttons
             <div className="flex items-center gap-3">
              <button className="daisy-btn daisy-btn-sm gap-1.5 rounded-full">
                All Terms
                <ChevronDownIcon className="ml-1 size-4 text-neutral-content" />
              </button>
              <button className="daisy-btn daisy-btn-sm gap-1.5 rounded-full">
                All Assets
                <ChevronDownIcon className="ml-1 size-4 text-neutral-content" />
              </button>
              <button className="daisy-btn daisy-btn-sm gap-1.5 rounded-full">
                All Chains
                <ChevronDownIcon className="ml-1 size-4 text-neutral-content" />
              </button>
            </div> */}
          <PoolRows />
        </div>
      </div>
    </div>
  );
}

function PoolRows() {
  const appConfig = useAppConfig();
  return (
    <div className="flex w-full flex-col gap-5">
      {
        // Show the newest pools first
        [...appConfig.hyperdrives]
          .sort(
            (a, b) =>
              Number(b.initializationBlock) - Number(a.initializationBlock),
          )
          .map((hyperdrive) => (
            <PoolRow
              // Combine address and chainId for a unique key, as addresses may overlap across chains (e.g. cloudchain and mainnet)
              key={`${hyperdrive.address}-${hyperdrive.chainId}`}
              hyperdrive={hyperdrive}
            />
          ))
      }
    </div>
  );
}
function PoolRow({ hyperdrive }: { hyperdrive: HyperdriveConfig }) {
  const navigate = useNavigate();
  const appConfig = useAppConfig();
  const { yieldSources, chains } = appConfig;

  const chainInfo = chains[hyperdrive.chainId];
  const { fixedApr, fixedRateStatus } = useFixedRate(hyperdrive.address);
  const { vaultRate, vaultRateStatus } = useYieldSourceRate({
    hyperdriveAddress: hyperdrive.address,
  });
  const { lpApy, lpApyStatus } = useLpApy(hyperdrive.address);
  const isLpApyNew = lpApyStatus !== "loading" && lpApy === undefined;

  // Display TVL as base value on testnet due to lack of reliable fiat pricing.
  // On mainnet and others, use DeFiLlama's fiat price.
  const { presentValue } = usePresentValue({
    hyperdriveAddress: hyperdrive.address,
  });
  const isFiatPriceEnabled = !isTestnetChain(chainInfo.id);
  const { fiatPrice } = useTokenFiatPrice({
    tokenAddress: isFiatPriceEnabled
      ? hyperdrive.poolConfig.baseToken
      : undefined,
  });
  const baseToken = findBaseToken({
    hyperdriveChainId: hyperdrive.chainId,
    hyperdriveAddress: hyperdrive.address,
    appConfig,
  });
  let tvlLabel = `${formatCompact({
    value: presentValue || 0n,
    decimals: hyperdrive.decimals,
  })} ${baseToken.symbol}`;

  if (isFiatPriceEnabled) {
    const presentValueFiat =
      presentValue && fiatPrice && isFiatPriceEnabled
        ? fixed(presentValue, hyperdrive.decimals).mul(fiatPrice).bigint
        : 0n;
    tvlLabel = `$${formatCompact({
      value: presentValueFiat || 0n,
      decimals: hyperdrive.decimals,
    })}`;
  }

  return (
    <Well
      block
      onClick={() => {
        navigate({
          to: MARKET_DETAILS_ROUTE,
          resetScroll: true,
          params: {
            address: hyperdrive.address,
            chainId: hyperdrive.chainId.toString(),
          },
        });
      }}
    >
      <div className="flex flex-col justify-between gap-6 lg:flex-row lg:gap-4">
        {/* Left side */}
        <div className="flex items-center gap-6 lg:w-[440px]">
          <div>
            <AssetStack hyperdriveAddress={hyperdrive.address} />
          </div>
          <div className="flex flex-col gap-1">
            <h4 className="text-left">
              {yieldSources[hyperdrive.yieldSource].shortName}
            </h4>
            <div className="flex flex-wrap gap-5 gap-y-2">
              <div className="flex items-center gap-1.5 text-sm">
                <ClockIcon className="size-4 text-gray-500" />{" "}
                <span className="text-neutral-content">
                  {formatTermLength2(
                    Number(hyperdrive.poolConfig.positionDuration * 1000n),
                  )}
                </span>
              </div>
              <div className="flex items-center gap-1.5 text-sm">
                <span className="text-gray-500">TVL</span>{" "}
                <span className="font-dmMono text-neutral-content">
                  {tvlLabel}
                </span>
              </div>
              <div className="flex items-center gap-1.5 text-sm">
                <img className="size-4 rounded-full" src={chainInfo.iconUrl} />
                <span className="text-neutral-content">{chainInfo.name}</span>
              </div>
            </div>
          </div>
        </div>

        {/* Right side */}
        <div className="flex shrink-0 justify-between gap-10 lg:items-end lg:justify-start">
          <PoolStat
            label={"Fixed APR"}
            isLoading={fixedRateStatus === "loading"}
            value={
              fixedApr ? (
                <PercentLabel value={formatRate(fixedApr.apr, 18, false)} />
              ) : (
                "-"
              )
            }
            variant="gradient"
            action={
              <Link
                to="/market/$chainId/$address"
                params={{
                  address: hyperdrive.address,
                  chainId: hyperdrive.chainId.toString(),
                }}
                search={{ position: "longs" }}
                className="daisy-btn daisy-btn-sm rounded-full bg-gray-600"
                onClick={(e) => {
                  e.stopPropagation();
                }}
              >
                Long
              </Link>
            }
          />
          <PoolStat
            label={"Variable APY"}
            isLoading={vaultRateStatus === "loading"}
            value={
              vaultRate ? (
                <RewardsTooltip
                  hyperdriveAddress={hyperdrive.address}
                  positionType="short"
                >
                  <PercentLabel
                    value={formatRate(vaultRate.vaultRate, 18, false)}
                  />
                </RewardsTooltip>
              ) : (
                "-"
              )
            }
            action={
              <Link
                to="/market/$chainId/$address"
                params={{
                  address: hyperdrive.address,
                  chainId: hyperdrive.chainId.toString(),
                }}
                search={{ position: "shorts" }}
                className="daisy-btn daisy-btn-sm rounded-full bg-gray-600"
                onClick={(e) => {
                  e.stopPropagation();
                }}
              >
                Short
              </Link>
            }
          />
          <PoolStat
            label={`LP APY (${yieldSources[hyperdrive.yieldSource].historicalRatePeriod}d)`}
            isLoading={lpApyStatus === "loading"}
            isNew={isLpApyNew}
            value={
              // TODO: Fix useLpApy to have the same interface as
              // useYieldSourceRate and useFixedRate
              lpApy && !isLpApyNew ? (
                <RewardsTooltip
                  positionType="lp"
                  hyperdriveAddress={hyperdrive.address}
                >
                  <PercentLabel value={`${(lpApy * 100).toFixed(2)}`} />
                </RewardsTooltip>
              ) : (
                "-"
              )
            }
            action={
              <Link
                to="/market/$chainId/$address"
                params={{
                  address: hyperdrive.address,
                  chainId: hyperdrive.chainId.toString(),
                }}
                search={{ position: "lp" }}
                className="daisy-btn daisy-btn-sm rounded-full bg-gray-600"
                onClick={(e) => {
                  e.stopPropagation();
                }}
              >
                Supply
              </Link>
            }
          />
        </div>
      </div>
    </Well>
  );
}

function PoolStat({
  label,
  labelTooltip,
  value,
  isNew = false,
  variant = "default",
  isLoading = false,
  action,
}: {
  label: string;
  labelTooltip?: string;
  value: ReactNode;
  isLoading?: boolean;
  isNew?: boolean;
  variant?: "default" | "gradient";
  action?: ReactNode;
}): ReactElement {
  let displayValue;
  if (isLoading) {
    displayValue = <Skeleton width={70} />;
  } else if (isNew) {
    displayValue = "✨New✨";
  } else {
    displayValue = value;
  }

  return (
    <div className="flex w-24 flex-col items-start gap-1.5">
      <p
        data-tip={labelTooltip}
        className={
          "group daisy-tooltip cursor-help text-sm text-neutral-content before:z-40 before:max-w-56 before:p-2 before:text-start"
        }
      >
        {label}
      </p>
      <div
        className={classNames("font-dmMono text-h4 font-medium", {
          "gradient-text": variant === "gradient",
        })}
      >
        {displayValue}
      </div>
      <div>{action}</div>
    </div>
  );
}

function PercentLabel({ value }: { value: string }) {
  return (
    <div
      className={classNames(
        "font-dmMono text-h4 font-medium",
        "after:text-h5 after:content-['%']",
      )}
    >
      {value}
    </div>
  );
}
