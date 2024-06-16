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
    bondAmount: shortSize,
    hyperdriveAddress: hyperdrive.address,
    timestamp: BigInt(Math.floor(Date.now() / 1000)),
    variableApy: vaultRate?.vaultRate,
  });

  return (
    <div className="flex flex-col gap-3">
      <LabelValue
        label="Short size"
        value={
          <span
            className="daisy-tooltip daisy-tooltip-top daisy-tooltip-left cursor-help border-b border-dashed border-current before:border"
            data-tip="The amount of pool liquidity deposited into the yield source."
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
        value={
          openShortPreviewStatus === "loading" ? (
            <Skeleton width={100} />
          ) : (
            <span
              className="daisy-tooltip daisy-tooltip-top daisy-tooltip-left cursor-help border-b border-dashed border-current before:border"
              data-tip="Total combined fee paid to LPs and governance to open the short."
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
        label="You pay"
        value={
          openShortPreviewStatus === "loading" ? (
            <Skeleton width={100} />
          ) : (
            <span
              className="daisy-tooltip daisy-tooltip-top daisy-tooltip-left cursor-help border-b border-dashed border-current before:border"
              data-tip="The upfront cost to open a short."
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
        label="Short APR"
        value={
          shortRateStatus === "loading" ? (
            <Skeleton width={100} />
          ) : (
            <span
              className={classNames(
                "daisy-tooltip daisy-tooltip-top daisy-tooltip-left cursor-help before:border",
                {
                  "border-b border-dashed border-current": spotRateAfterOpen,
                  "text-success": shortApr && shortApr.apr > 0n,
                  "text-error": shortApr && shortApr.apr < 0n,
                },
              )}
              data-tip="The annualized return on shorts assuming the current yield source rate stays the same for one year"
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
              <span>
                {spotRateAfterOpen ? (
                  <span className="flex gap-2">
                    {`${fixedApr?.formatted}% `}
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
                className={classNames(
                  "daisy-tooltip daisy-tooltip-top daisy-tooltip-left cursor-help  before:border",
                  {
                    "border-b border-dashed border-success text-success":
                      spotRateAfterOpen,
                  },
                )}
                data-tip={`The net market impact on the fixed rate after opening the short.`}
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
