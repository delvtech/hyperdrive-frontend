import { fixed } from "@delvtech/fixed-point-wasm";
import { ChevronDownIcon, ClockIcon } from "@heroicons/react/24/outline";
import { Link } from "@tanstack/react-router";
import classNames from "classnames";
import { ReactElement, ReactNode } from "react";
import { ZERO_ADDRESS } from "src/base/constants";
import { formatRate } from "src/base/formatRate";
import { useAppConfig } from "src/ui/appconfig/useAppConfig";
import { Well } from "src/ui/base/components/Well/Well";
import { useFeatureFlag } from "src/ui/base/featureFlags/featureFlags";
import { formatCompact } from "src/ui/base/formatting/formatCompact";
import { useIsTailwindSmallScreen } from "src/ui/base/mediaBreakpoints";
import { useLpApy } from "src/ui/hyperdrive/hooks/useLpApy";
import { usePresentValue } from "src/ui/hyperdrive/hooks/usePresentValue";
import { useFixedRate } from "src/ui/hyperdrive/longs/hooks/useFixedRate";
import { Hero } from "src/ui/landing/Hero/Hero";
import { AssetStack } from "src/ui/markets/AssetStack";
import { formatTermLength2 } from "src/ui/markets/formatTermLength";
import { YieldSourceCard } from "src/ui/markets/YieldSourceCard/YieldSourceCard";
import { FAQ } from "src/ui/onboarding/FAQ/FAQ";
import { MobileFaq } from "src/ui/onboarding/FAQ/MobileFaq";
import { useTokenFiatPrice } from "src/ui/token/hooks/useTokenFiatPrices";
import { useYieldSourceRate } from "src/ui/vaults/useYieldSourceRate";
import { Address } from "viem";
import { sepolia } from "viem/chains";
import { PositionCards } from "./PositionCards/PositionCards";

export function Landing(): ReactElement | null {
  const isSmallScreenView = useIsTailwindSmallScreen();
  const { isFlagEnabled: isNewPoolsView } = useFeatureFlag("pools-view");

  return (
    <div className="flex flex-col items-center gap-4 lg:w-[900px]">
      <Hero />
      <div className="flex w-full flex-col items-center">
        {isNewPoolsView ? (
          <div className="flex flex-col gap-4">
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
            </div>
            <PoolRows />
          </div>
        ) : (
          <YieldSourceCards />
        )}
      </div>

      {isNewPoolsView ? null : (
        <>
          <PositionCards />
          {isSmallScreenView ? <MobileFaq /> : <FAQ />}
        </>
      )}
    </div>
  );
}

function PoolRows() {
  const appConfig = useAppConfig();

  return (
    <div className="flex w-full flex-col gap-5">
      {appConfig.hyperdrives.map((hyperdrive) => (
        <PoolRow
          key={hyperdrive.address}
          hyperdriveAddress={hyperdrive.address}
        />
      ))}
    </div>
  );
}
function PoolRow({ hyperdriveAddress }: { hyperdriveAddress: Address }) {
  const appConfig = useAppConfig();
  const { yieldSources, chains } = appConfig;
  const hyperdrive = appConfig.hyperdrives.find(
    (hyperdrive) => hyperdrive.address === hyperdriveAddress,
  )!;
  const chainInfo = chains[hyperdrive.chainId];

  const { fixedApr } = useFixedRate(hyperdriveAddress);
  const { vaultRate } = useYieldSourceRate({ hyperdriveAddress });
  const { lpApy, lpApyStatus } = useLpApy(hyperdriveAddress);
  const isLpApyNew = lpApyStatus !== "loading" && lpApy === undefined;

  // Display TVL as base value on testnet due to lack of reliable fiat pricing.
  // On mainnet and others, use DeFiLlama's fiat price.
  const { presentValue } = usePresentValue({
    hyperdriveAddress: hyperdrive.address,
  });
  const isFiatPriceEnabled =
    hyperdrive.poolConfig.baseToken !== ZERO_ADDRESS &&
    chainInfo.id !== sepolia.id;
  const { fiatPrice } = useTokenFiatPrice({
    tokenAddress: isFiatPriceEnabled
      ? hyperdrive.poolConfig.baseToken
      : undefined,
  });
  const baseAsset = appConfig.tokens.find(
    (token) => token.address === hyperdrive.poolConfig.baseToken,
  );
  let tvlLabel = `${formatCompact({
    value: presentValue || 0n,
    decimals: hyperdrive.decimals,
  })} ${baseAsset?.symbol}`;

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
    <Well block>
      <div className="flex justify-between gap-4">
        {/* Left side */}
        <div className="flex w-[440px] items-center gap-6">
          <div>
            <AssetStack hyperdriveAddress={hyperdrive.address} />
          </div>
          <div className="flex flex-col gap-1">
            <h4>{yieldSources[hyperdrive.yieldSource].shortName}</h4>
            <div className="flex gap-5">
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
        <div className="flex shrink-0 items-end gap-10">
          <PoolStat
            label={"Fixed APR"}
            value={fixedApr ? formatRate(fixedApr.apr, 18, false) : "-"}
            variant="gradient"
            action={
              <Link
                to="/market/$address"
                params={{ address: hyperdrive.address }}
                search={{ position: "longs" }}
                className="daisy-btn daisy-btn-sm rounded-full bg-gray-600"
              >
                Long
              </Link>
            }
          />
          <PoolStat
            label={"Variable APY"}
            value={vaultRate ? formatRate(vaultRate.vaultRate, 18, false) : "-"}
            action={
              <Link
                to="/market/$address"
                params={{ address: hyperdrive.address }}
                search={{ position: "shorts" }}
                className="daisy-btn daisy-btn-sm rounded-full bg-gray-600"
              >
                Short
              </Link>
            }
          />
          <PoolStat
            label={`LP APY (${yieldSources[hyperdrive.yieldSource].historicalRatePeriod}d)`}
            showPercentage={!isLpApyNew}
            value={
              // TODO: Fix useLpApy to have the same interface as
              // useYieldSourceRate and useFixedRate
              lpApy && !isLpApyNew
                ? `${(lpApy * 100).toFixed(2)}`
                : isLpApyNew
                  ? "✨New✨"
                  : "-"
            }
            action={
              <Link
                to="/market/$address"
                params={{ address: hyperdrive.address }}
                search={{ position: "lp" }}
                className="daisy-btn daisy-btn-sm rounded-full bg-gray-600"
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
/**
 * @deprecated
 */
function YieldSourceCards() {
  const { yieldSources } = useAppConfig();

  return (
    <div className="flex max-w-[1610px] flex-wrap justify-center gap-16">
      {Object.entries(yieldSources).map(([key, yieldSource]) => (
        <YieldSourceCard key={key} yieldSource={yieldSource} />
      ))}
    </div>
  );
}

function PoolStat({
  label,
  labelTooltip,
  value,
  showPercentage = true,
  variant = "default",
  action,
}: {
  label: string;
  labelTooltip?: string;
  value: string;
  showPercentage?: boolean;
  variant?: "default" | "gradient";
  action?: ReactNode;
}): ReactElement {
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
          "after:text-h5 after:content-['%']": showPercentage,
        })}
      >
        {value}
      </div>
      <div>{action}</div>
    </div>
  );
}
