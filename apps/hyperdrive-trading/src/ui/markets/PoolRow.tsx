import { fixed } from "@delvtech/fixed-point-wasm";
import {
  appConfig,
  findBaseToken,
  findToken,
  HyperdriveConfig,
} from "@delvtech/hyperdrive-appconfig";
import { ClockIcon } from "@heroicons/react/16/solid";
import { Link, useNavigate } from "@tanstack/react-router";
import classNames from "classnames";
import { ReactElement, ReactNode } from "react";
import Skeleton from "react-loading-skeleton";
import { formatRate } from "src/base/formatRate";
import { isTestnetChain } from "src/chains/isTestnetChain";
import { calculateMarketYieldMultiplier } from "src/hyperdrive/calculateMarketYieldMultiplier";
import { Well } from "src/ui/base/components/Well/Well";
import { formatCompact } from "src/ui/base/formatting/formatCompact";
import { useLpApy } from "src/ui/hyperdrive/hooks/useLpApy";
import { usePresentValue } from "src/ui/hyperdrive/hooks/usePresentValue";
import { useCurrentLongPrice } from "src/ui/hyperdrive/longs/hooks/useCurrentLongPrice";
import { useFixedRate } from "src/ui/hyperdrive/longs/hooks/useFixedRate";
import { AssetStack } from "src/ui/markets/AssetStack";
import { formatTermLength2 } from "src/ui/markets/formatTermLength";
import { MARKET_DETAILS_ROUTE } from "src/ui/markets/routes";
import { RewardsTooltip } from "src/ui/rewards/RewardsTooltip";
import { useMorphoVaultRewards } from "src/ui/rewards/useMorphoRate";
import { eligibleMarketsForMorphoVaultRewards } from "src/ui/rewards/useRewards";
import { useTokenFiatPrice } from "src/ui/token/hooks/useTokenFiatPrice";
import { base } from "viem/chains";
export interface PoolRowProps {
  hyperdrive: HyperdriveConfig;
}

export function PoolRow({ hyperdrive }: PoolRowProps): ReactElement {
  const navigate = useNavigate();
  const { yieldSources, chains } = appConfig;
  const chainInfo = chains[hyperdrive.chainId];

  const baseToken = findBaseToken({
    hyperdriveChainId: hyperdrive.chainId,
    hyperdriveAddress: hyperdrive.address,
    appConfig,
  });

  const { fixedApr, fixedRateStatus } = useFixedRate({
    chainId: hyperdrive.chainId,
    hyperdriveAddress: hyperdrive.address,
  });

  const sharesToken = findToken({
    chainId: hyperdrive.chainId,
    tokens: appConfig.tokens,
    tokenAddress: hyperdrive.poolConfig.vaultSharesToken,
  });

  const { lpApy, lpApyStatus } = useLpApy({
    hyperdriveAddress: hyperdrive.address,
    chainId: hyperdrive.chainId,
  });
  // Display TVL as base value on testnet due to lack of reliable fiat pricing.
  // On mainnet and others, use DeFiLlama's fiat price.
  const { presentValue } = usePresentValue({
    chainId: hyperdrive.chainId,
    hyperdriveAddress: hyperdrive.address,
  });
  const isFiatSupported = !isTestnetChain(chainInfo.id);
  const { fiatPrice } = useTokenFiatPrice({
    chainId: baseToken.chainId,
    tokenAddress: isFiatSupported ? hyperdrive.poolConfig.baseToken : undefined,
  });
  let tvlLabel = `${formatCompact({
    value: presentValue || 0n,
    decimals: hyperdrive.decimals,
  })} ${baseToken.symbol}`;

  if (isFiatSupported) {
    const presentValueFiat =
      presentValue && fiatPrice && isFiatSupported
        ? fixed(presentValue, hyperdrive.decimals).mul(fiatPrice).bigint
        : 0n;
    tvlLabel = `$${formatCompact({
      value: presentValueFiat || 0n,
      decimals: hyperdrive.decimals,
    })}`;
  }

  const { longPrice, longPriceStatus } = useCurrentLongPrice({
    chainId: hyperdrive.chainId,
    hyperdriveAddress: hyperdrive.address,
  });

  const { morphoVaultData } = useMorphoVaultRewards({
    hyperdrive,
    enabled:
      eligibleMarketsForMorphoVaultRewards[base.id]?.includes(
        hyperdrive.address,
      ) ?? false,
  });

  return (
    <Well
      as="div"
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
          <div
            className={
              // Set a fixed width so pools with one or two asset icons still
              // line up
              "w-16"
            }
          >
            <AssetStack hyperdriveAddress={hyperdrive.address} />
          </div>
          <div className="flex flex-col gap-1.5">
            <h4 className="text-left">
              {yieldSources[hyperdrive.yieldSource].shortName}
            </h4>
            <div className="flex flex-wrap gap-5 gap-y-20">
              <div className="flex items-center gap-1.5 text-sm">
                <ClockIcon className="size-4 text-gray-400/60" />{" "}
                <span className="text-neutral-content">
                  {formatTermLength2(
                    Number(hyperdrive.poolConfig.positionDuration * 1000n),
                  )}
                </span>
              </div>
              <div className="flex items-center gap-1.5 text-sm">
                <span className="text-gray-400/60">TVL</span>{" "}
                <span className="font-dmMono text-neutral-content">
                  {tvlLabel}
                </span>
              </div>
              <div className="flex items-center gap-1.5 text-sm">
                <img className="size-4 rounded-full" src={chainInfo.iconUrl} />
                <span className="text-neutral-content">{chainInfo.name}</span>
              </div>
            </div>
            <div className="flex flex-wrap gap-5 gap-y-2">
              <div className="flex items-center gap-1.5 text-sm">
                <span className="text-gray-400/60">Deposit</span>{" "}
                <span className="text-neutral-content">
                  {(() => {
                    const depositTokens = [];
                    if (hyperdrive.depositOptions.isBaseTokenDepositEnabled) {
                      depositTokens.push(baseToken.symbol);
                    }
                    if (hyperdrive.depositOptions.isShareTokenDepositsEnabled) {
                      depositTokens.push(sharesToken?.symbol);
                    }
                    return depositTokens.join(", ");
                  })()}
                </span>
              </div>
              <div className="flex items-center gap-1.5 text-sm">
                <span className="text-gray-400/60">Withdraw</span>{" "}
                <span className="text-neutral-content">
                  {(() => {
                    const withdrawTokens = [];
                    if (
                      hyperdrive.withdrawOptions.isBaseTokenWithdrawalEnabled
                    ) {
                      withdrawTokens.push(baseToken.symbol);
                    }
                    if (
                      hyperdrive.withdrawOptions.isShareTokenWithdrawalEnabled
                    ) {
                      withdrawTokens.push(sharesToken?.symbol);
                    }
                    return withdrawTokens.join(", ");
                  })()}
                </span>
              </div>
            </div>
          </div>
        </div>

        {/* Right side */}
        <div className="flex shrink-0 justify-between gap-10 lg:items-end lg:justify-start">
          <PoolStat
            label={"Fixed APR"}
            value={
              fixedApr ? (
                <PercentLabel value={formatRate(fixedApr.apr, 18, false)} />
              ) : (
                "-"
              )
            }
            isLoading={fixedRateStatus === "loading"}
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
            label={"Yield Multiplier"}
            value={
              longPriceStatus === "success" && longPrice ? (
                <RewardsTooltip
                  hyperdriveAddress={hyperdrive.address}
                  chainId={hyperdrive.chainId}
                >
                  {`${calculateMarketYieldMultiplier(longPrice).format({
                    decimals: 2,
                    rounding: "trunc",
                  })}x`}
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
            label={lpApy ? `LP APY (${lpApy.ratePeriodDays}d)` : "LP APY"}
            isLoading={lpApyStatus === "loading"}
            isNew={lpApy?.isNew}
            value={
              lpApy && !lpApy.isNew ? (
                <RewardsTooltip
                  chainId={hyperdrive.chainId}
                  hyperdriveAddress={hyperdrive.address}
                >
                  {morphoVaultData ? (
                    <PercentLabel
                      // If this is a eligible for morpho vault rewards we need to add this to the existing lpApy. The supply APR is returned as a floating point number from the Morpho API so we need to scale it up to 18 decimals before adding it to the lpApy.
                      value={formatRate(
                        lpApy.lpApy +
                          BigInt(
                            (morphoVaultData.reward?.supplyApr ?? 0) * 1e18,
                          ),
                        18,
                        false,
                      )}
                    />
                  ) : (
                    <PercentLabel value={formatRate(lpApy.lpApy, 18, false)} />
                  )}
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
    <div className="flex w-28 flex-col items-start gap-1.5">
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
