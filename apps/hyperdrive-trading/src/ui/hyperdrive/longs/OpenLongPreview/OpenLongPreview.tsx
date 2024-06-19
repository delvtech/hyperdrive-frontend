import { calculateAprFromPrice } from "@delvtech/hyperdrive-viem";
import { ArrowRightIcon } from "@heroicons/react/16/solid";
import {
  HyperdriveConfig,
  TokenConfig,
  findBaseToken,
  findYieldSourceToken,
} from "@hyperdrive/appconfig";
import classNames from "classnames";
import * as dnum from "dnum";
import { ReactElement } from "react";
import Skeleton from "react-loading-skeleton";
import { formatRate } from "src/base/formatRate";
import { convertSharesToBase } from "src/hyperdrive/convertSharesToBase";
import { useAppConfig } from "src/ui/appconfig/useAppConfig";
import { CollapseSection } from "src/ui/base/components/CollapseSection/CollapseSection";
import { LabelValue } from "src/ui/base/components/LabelValue";
import { formatBalance } from "src/ui/base/formatting/formatBalance";
import { useFixedRate } from "src/ui/hyperdrive/longs/hooks/useFixedRate";

interface OpenLongPreviewProps {
  hyperdrive: HyperdriveConfig;
  bondAmount: bigint;
  amountPaid: bigint;
  openLongPreviewStatus: "error" | "idle" | "loading" | "success";
  spotRateAfterOpen: bigint | undefined;
  activeToken: TokenConfig<any>;
  curveFee: bigint | undefined;
  asBase: boolean;
  vaultSharePrice: bigint | undefined;
}

export function OpenLongPreview({
  hyperdrive,
  openLongPreviewStatus,
  amountPaid,
  bondAmount,
  spotRateAfterOpen,
  activeToken,
  curveFee,
  asBase,
  vaultSharePrice,
}: OpenLongPreviewProps): ReactElement {
  const appConfig = useAppConfig();
  const baseToken = findBaseToken({
    baseTokenAddress: hyperdrive.baseToken,
    tokens: appConfig.tokens,
  });
  const sharesToken = findYieldSourceToken({
    yieldSourceTokenAddress: hyperdrive.sharesToken,
    tokens: appConfig.tokens,
  });
  const { fixedApr } = useFixedRate(hyperdrive.address);

  const isBaseAmount = asBase || sharesToken.extensions.isSharesPeggedToBase;
  return (
    <div className="flex flex-col gap-3.5 px-2">
      <div className="flex flex-col gap-3">
        <LabelValue
          label="You spend"
          value={
            <span>{`${formatBalance({
              balance: amountPaid,
              decimals: baseToken.decimals,
              places: baseToken.places,
            })} ${activeToken.symbol}`}</span>
          }
        />
        <LabelValue
          label="You receive"
          value={
            openLongPreviewStatus === "loading" ? (
              <Skeleton width={100} />
            ) : (
              <span className="font-bold">{`${formatBalance({
                balance: bondAmount,
                decimals: baseToken.decimals,
                places: baseToken.places,
              })} hy${baseToken.symbol}`}</span>
            )
          }
        />
        <LabelValue
          label="Pool fee"
          value={
            openLongPreviewStatus === "loading" ? (
              <Skeleton width={100} />
            ) : (
              <span
                className="daisy-tooltip daisy-tooltip-top daisy-tooltip-left cursor-help border-b border-dashed border-current before:border"
                data-tip="Total combined fee paid to LPs and governance to open the long."
              >
                {curveFee
                  ? `${formatBalance({
                      balance: curveFee,
                      decimals: baseToken.decimals,
                      places: baseToken.places,
                    })} hy${baseToken.symbol}`
                  : `0 hy${baseToken.symbol}`}
              </span>
            )
          }
        />
        <LabelValue
          label="Fixed APR"
          value={
            openLongPreviewStatus === "loading" ? (
              <Skeleton width={100} />
            ) : (
              <span
                className="gradient-text daisy-tooltip daisy-tooltip-top daisy-tooltip-left cursor-help border-b border-dashed border-current before:border"
                data-tip="Your net fixed rate after pool fees and slippage are applied."
              >
                {bondAmount > 0
                  ? `${formatRate(
                      calculateAprFromPrice({
                        positionDuration:
                          hyperdrive.poolConfig.positionDuration || 0n,
                        baseAmount: isBaseAmount
                          ? amountPaid
                          : // TODO: move sharesAmountPaid into the sdk's Long interface
                            // instead of converting here
                            convertSharesToBase({
                              sharesAmount: amountPaid,
                              vaultSharePrice: vaultSharePrice,
                              decimals: activeToken.decimals,
                            }),
                        bondAmount: bondAmount,
                      }),
                      baseToken.decimals,
                    )}%`
                  : `${fixedApr?.formatted}%`}
              </span>
            )
          }
        />
        <LabelValue
          label="Yield at maturity"
          value={
            openLongPreviewStatus === "loading" ? (
              <Skeleton width={100} />
            ) : (
              <div
                className="daisy-tooltip daisy-tooltip-top daisy-tooltip-left cursor-help before:border"
                data-tip={`Total ${baseToken.symbol} expected in return at the end of the term, excluding fees.`}
              >
                {bondAmount > 0 ? (
                  <span className="cursor-help border-b border-dashed border-success text-success">
                    {bondAmount -
                    (isBaseAmount
                      ? amountPaid
                      : convertSharesToBase({
                          sharesAmount: amountPaid,
                          vaultSharePrice: vaultSharePrice,
                          decimals: baseToken.decimals,
                        }))
                      ? "+"
                      : ""}
                    {amountPaid
                      ? // TODO: Add ROI here in parenthesis after the yield amount
                        `${formatBalance({
                          balance:
                            bondAmount -
                            (isBaseAmount
                              ? amountPaid
                              : convertSharesToBase({
                                  sharesAmount: amountPaid,
                                  vaultSharePrice: vaultSharePrice,
                                  decimals: baseToken.decimals,
                                })),
                          decimals: baseToken.decimals,
                          places: baseToken.places,
                        })} ${baseToken.symbol}`
                      : undefined}
                  </span>
                ) : (
                  <span className="cursor-help border-b border-dashed">
                    0 {baseToken.symbol}
                  </span>
                )}
              </div>
            )
          }
        />
      </div>

      <CollapseSection heading="Market Impact">
        <LabelValue
          size="small"
          label="Fixed APR after open"
          value={
            openLongPreviewStatus === "loading" ? (
              <Skeleton width={100} />
            ) : (
              <span>
                {spotRateAfterOpen ? (
                  <span className="flex gap-2">
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
          label="Fixed APR impact"
          size="small"
          value={
            openLongPreviewStatus === "loading" ? (
              <Skeleton width={100} />
            ) : (
              <span className={classNames({ "text-error": spotRateAfterOpen })}>
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
  spotRateAfterOpenLong: bigint | undefined,
) {
  if (spotRateAfterOpenLong === undefined || currentFixedRate === undefined) {
    return "-";
  }
  const changeInFixedApr = dnum.subtract(
    [currentFixedRate, 18],
    [spotRateAfterOpenLong, 18],
  )[0];

  const isChangeInFixedAprLessThanOneBasisPoint =
    changeInFixedApr < dnum.from("0.0001", 18)[0]; // .01% === .0001

  if (isChangeInFixedAprLessThanOneBasisPoint) {
    return "-<0.01%";
  }
  return `-${formatRate(changeInFixedApr)}%`;
}
