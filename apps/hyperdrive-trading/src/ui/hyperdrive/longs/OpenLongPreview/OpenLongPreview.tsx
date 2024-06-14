import { calculateAprFromPrice, Long } from "@delvtech/hyperdrive-viem";
import { ArrowRightIcon } from "@heroicons/react/16/solid";
import { ChevronDownIcon } from "@heroicons/react/24/outline";
import {
  findBaseToken,
  findYieldSourceToken,
  HyperdriveConfig,
  TokenConfig,
} from "@hyperdrive/appconfig";
import classNames from "classnames";
import * as dnum from "dnum";
import { ReactElement } from "react";
import Skeleton from "react-loading-skeleton";
import { formatRate } from "src/base/formatRate";
import { convertSharesToBase } from "src/hyperdrive/convertSharesToBase";
import { useAppConfig } from "src/ui/appconfig/useAppConfig";
import { LabelValue } from "src/ui/base/components/LabelValue";
import { formatBalance } from "src/ui/base/formatting/formatBalance";
import { useFixedRate } from "src/ui/hyperdrive/longs/hooks/useFixedRate";

interface OpenLongPreviewProps {
  hyperdrive: HyperdriveConfig;
  long: Long;
  openLongPreviewStatus: "error" | "idle" | "loading" | "success";
  spotRateAfterOpen: bigint | undefined;
  activeToken: TokenConfig<any>;
  curveFee: bigint | undefined;
  asBase: boolean;
  vaultSharePrice: bigint | undefined;
}

export function OpenLongPreview({
  hyperdrive,
  long,
  openLongPreviewStatus,
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
              balance: long.baseAmountPaid,
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
                balance: long.bondAmount,
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
                {long.bondAmount > 0
                  ? `${formatRate(
                      calculateAprFromPrice({
                        positionDuration:
                          hyperdrive.poolConfig.positionDuration || 0n,
                        baseAmount: isBaseAmount
                          ? long.baseAmountPaid
                          : // TODO: move sharesAmountPaid into the sdk's Long interface
                            // instead of converting here
                            convertSharesToBase({
                              sharesAmount: long.baseAmountPaid,
                              vaultSharePrice: vaultSharePrice,
                              decimals: activeToken.decimals,
                            }),
                        bondAmount: long.bondAmount,
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
                {long.bondAmount > 0 ? (
                  <span className="cursor-help border-b border-dashed border-success text-success">
                    {long.bondAmount -
                    (isBaseAmount
                      ? long.baseAmountPaid
                      : convertSharesToBase({
                          sharesAmount: long.baseAmountPaid,
                          vaultSharePrice: vaultSharePrice,
                          decimals: baseToken.decimals,
                        }))
                      ? "+"
                      : ""}
                    {long.baseAmountPaid
                      ? // TODO: Add ROI here in parenthesis after the yield amount
                        `${formatBalance({
                          balance:
                            long.bondAmount -
                            (isBaseAmount
                              ? long.baseAmountPaid
                              : convertSharesToBase({
                                  sharesAmount: long.baseAmountPaid,
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

      <div className="daisy-collapse justify-normal rounded-none text-sm">
        <input type="checkbox" className="min-h-0" />
        <div className=" daisy-collapse-title mb-3 min-h-0 p-0 font-medium">
          <div className="flex items-center gap-4">
            <span>Market Impact</span>
            <span className="text-xs">
              {/* Click to expand */}
              <ChevronDownIcon className="h-4 focus:rotate-180 focus:transition" />
            </span>
          </div>
        </div>
        <div className="daisy-collapse-content space-y-2 px-0">
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
            label="Fixed APR impact"
            size="small"
            value={
              openLongPreviewStatus === "loading" ? (
                <Skeleton width={100} />
              ) : (
                <span
                  className={classNames({ "text-error": spotRateAfterOpen })}
                >
                  {getMarketImpactLabel(fixedApr?.apr, spotRateAfterOpen)}
                </span>
              )
            }
          />
        </div>
      </div>
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
