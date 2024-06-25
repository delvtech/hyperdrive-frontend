import { ArrowRightIcon } from "@heroicons/react/24/solid";
import {
  HyperdriveConfig,
  TokenConfig,
  findBaseToken,
} from "@hyperdrive/appconfig";
import classNames from "classnames";
import * as dnum from "dnum";
import { ReactElement } from "react";
import Skeleton from "react-loading-skeleton";
import { formatRate } from "src/base/formatRate";
import { useAppConfig } from "src/ui/appconfig/useAppConfig";
import { CollapseSection } from "src/ui/base/components/CollapseSection/CollapseSection";
import { LabelValue } from "src/ui/base/components/LabelValue";
import { formatBalance } from "src/ui/base/formatting/formatBalance";
import { useFixedRate } from "src/ui/hyperdrive/longs/hooks/useFixedRate";
import { useShortRate } from "src/ui/hyperdrive/shorts/hooks/useShortRate";
import { useYieldSourceRate } from "src/ui/vaults/useYieldSourceRate";
import { parseUnits } from "viem";
interface OpenShortPreviewProps {
  hyperdrive: HyperdriveConfig;
  tokenIn: TokenConfig<any>;
  costBasis: bigint | undefined;
  shortSize: bigint | undefined;
  spotRateAfterOpen: bigint | undefined;
  curveFee: bigint | undefined;
  openShortPreviewStatus: "error" | "idle" | "loading" | "success";
}

export function OpenShortPreview({
  hyperdrive,
  costBasis,
  tokenIn,
  shortSize,
  spotRateAfterOpen,
  curveFee,
  openShortPreviewStatus,
}: OpenShortPreviewProps): ReactElement {
  const appConfig = useAppConfig();
  const baseToken = findBaseToken({
    baseTokenAddress: hyperdrive.baseToken,
    tokens: appConfig.tokens,
  });
  const { fixedApr } = useFixedRate(hyperdrive.address);
  const { vaultRate } = useYieldSourceRate({
    hyperdriveAddress: hyperdrive.address,
  });
  const { shortApr, shortRateStatus } = useShortRate({
    // show the market short rate (aka bond amount of 1) if the user hasn't
    // already entered a short size
    bondAmount: shortSize || parseUnits("1", 18),
    hyperdriveAddress: hyperdrive.address,
    timestamp: BigInt(Math.floor(Date.now() / 1000)),
    variableApy: vaultRate?.vaultRate,
  });

  return (
    <div className="flex flex-col gap-3 px-2">
      <LabelValue
        label="You pay"
        value={
          openShortPreviewStatus === "loading" ? (
            <Skeleton width={100} />
          ) : (
            <span
              className={classNames({
                "text-base-content/80": !costBasis,
              })}
            >
              {costBasis
                ? `${formatBalance({
                    balance: costBasis,
                    decimals: tokenIn.decimals,
                    places: tokenIn.places,
                  })} ${tokenIn.symbol}`
                : `0 ${tokenIn.symbol}`}
            </span>
          )
        }
      />
      <LabelValue
        label="Short size"
        tooltipContent="The amount of pool liquidity deposited into the yield source."
        tooltipPosition="right"
        tooltipSize="small"
        value={
          <span
            className={classNames({
              "text-base-content/80": !shortSize,
            })}
          >
            {shortSize
              ? `${formatBalance({
                  balance: shortSize,
                  decimals: baseToken.decimals,
                  places: baseToken.places,
                })} hy${baseToken.symbol}`
              : `0 hy${baseToken.symbol}`}
          </span>
        }
      />
      <LabelValue
        label="Pool fee"
        tooltipContent="Total combined fee paid to LPs and governance to open the short."
        tooltipPosition="right"
        tooltipSize="small"
        value={
          openShortPreviewStatus === "loading" ? (
            <Skeleton width={100} />
          ) : (
            <span
              className={classNames({
                "text-base-content/80": !shortSize,
              })}
            >
              {curveFee
                ? `${formatBalance({
                    balance: curveFee,
                    decimals: tokenIn.decimals,
                    places: tokenIn.places,
                  })} ${tokenIn.symbol}`
                : `0 ${tokenIn.symbol}`}
            </span>
          )
        }
      />
      <LabelValue
        label="Short APR"
        tooltipContent="Your annualized return on this position assuming the current yield source rate stays the same for one year"
        tooltipPosition="right"
        tooltipSize="small"
        value={
          shortRateStatus === "loading" ? (
            <Skeleton width={100} />
          ) : (
            <span
              className={classNames({
                "text-base-content/80": !shortApr,
                "text-success": shortApr && shortApr.apr > 0n,
                "text-error": shortApr && shortApr.apr < 0n,
              })}
            >
              {shortApr ? `${shortApr.formatted}%` : "-"}
            </span>
          )
        }
      />
      <CollapseSection heading="Market Impact">
        <LabelValue
          size="small"
          label="Fixed APR after open"
          value={
            openShortPreviewStatus === "loading" ? (
              <Skeleton width={100} />
            ) : (
              <span
                className={classNames({
                  "text-base-content/80": !shortSize,
                })}
              >
                {spotRateAfterOpen ? (
                  <span className="flex gap-2 text-base-content">
                    <span className="text-base-content/80">{`${fixedApr?.formatted}% `}</span>
                    <ArrowRightIcon className="h-4 text-neutral-content" />
                    {formatRate(spotRateAfterOpen)}%
                  </span>
                ) : (
                  "-"
                )}
              </span>
            )
          }
        />
        <LabelValue
          size="small"
          label="Fixed APR impact"
          value={
            openShortPreviewStatus === "loading" ? (
              <Skeleton width={100} />
            ) : (
              <span
                className={classNames({
                  "text-base-content/80": !spotRateAfterOpen,
                  "text-success": spotRateAfterOpen,
                })}
              >
                {getMarketImpactLabel(fixedApr?.apr, spotRateAfterOpen)}
              </span>
            )
          }
        />
      </CollapseSection>
    </div>
  );
}

function getMarketImpactLabel(
  currentFixedRate: bigint | undefined,
  spotRateAfterOpenShort: bigint | undefined,
) {
  if (spotRateAfterOpenShort === undefined || currentFixedRate === undefined) {
    return "-";
  }
  const changeInFixedApr = dnum.subtract(
    [spotRateAfterOpenShort, 18],
    [currentFixedRate, 18],
  )[0];

  const isChangeInFixedAprLessThanOneBasisPoint =
    changeInFixedApr < dnum.from("0.0001", 18)[0]; // .01% === .0001

  if (isChangeInFixedAprLessThanOneBasisPoint) {
    return "+<0.01%";
  }
  return `+${formatRate(changeInFixedApr)}%`;
}
