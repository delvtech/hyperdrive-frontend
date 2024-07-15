import { calculateAprFromPrice } from "@delvtech/hyperdrive-viem";
import { ArrowRightIcon } from "@heroicons/react/16/solid";
import { ChevronDownIcon } from "@heroicons/react/20/solid";
import { ClockIcon } from "@heroicons/react/24/outline";
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
import { QueryStatusWithIdle } from "src/base/queryStatus";
import { convertSharesToBase } from "src/hyperdrive/convertSharesToBase";
import { useAppConfig } from "src/ui/appconfig/useAppConfig";
import { CollapseSection } from "src/ui/base/components/CollapseSection/CollapseSection";
import { LabelValue } from "src/ui/base/components/LabelValue";
import { useFeatureFlag } from "src/ui/base/featureFlags/featureFlags";
import { formatBalance } from "src/ui/base/formatting/formatBalance";
import { formatDate } from "src/ui/base/formatting/formatDate";
import { useFixedRate } from "src/ui/hyperdrive/longs/hooks/useFixedRate";
interface OpenLongPreviewProps {
  hyperdrive: HyperdriveConfig;
  bondAmount: bigint;
  amountPaid: bigint;
  openLongPreviewStatus: QueryStatusWithIdle;
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
  const amountPaidInBase = isBaseAmount
    ? amountPaid
    : convertSharesToBase({
        sharesAmount: amountPaid,
        vaultSharePrice: vaultSharePrice,
        decimals: baseToken.decimals,
      });
  const yieldAtMaturity = bondAmount - amountPaidInBase;
  const termLengthMS = Number(hyperdrive.poolConfig.positionDuration * 1000n);
  const { isFlagEnabled: isNewOpenLongFormEnabled } =
    useFeatureFlag("new-open-long-form");
  if (isNewOpenLongFormEnabled) {
    return (
      <div className="flex flex-col gap-3.5 px-2">
        <CollapseSection
          heading={
            <div className="flex w-full items-center justify-between text-neutral-content">
              <p>Transaction Details</p>
              <div className="flex items-center gap-1">
                <ClockIcon className="size-5 text-[#4E6A77]" />
                <p>{formatDate(Date.now() + termLengthMS)}</p>
                <ChevronDownIcon className="ml-1 size-6" />
              </div>
            </div>
          }
        >
          <LabelValue
            label="Pool fee"
            tooltipContent="Total combined fee paid to LPs and governance to open the long."
            tooltipPosition="right"
            tooltipSize="small"
            size="small"
            value={
              openLongPreviewStatus === "loading" ? (
                <Skeleton width={100} />
              ) : (
                <span
                  className={classNames({
                    "text-base-content/80": !curveFee,
                  })}
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
            size="small"
            label="Fixed APR after open"
            value={
              openLongPreviewStatus === "loading" ? (
                <Skeleton width={100} />
              ) : (
                <span
                  className={classNames({
                    "text-base-content/80": !spotRateAfterOpen,
                  })}
                >
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
                <span
                  className={classNames({
                    "text-error": spotRateAfterOpen,
                    "text-base-content/80": !spotRateAfterOpen,
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
  return (
    <div className="flex flex-col gap-3.5 px-2">
      <div className="flex flex-col gap-3">
        <LabelValue
          label="You spend"
          value={
            <span
              className={classNames({
                "text-base-content/80": !amountPaid,
              })}
            >{`${formatBalance({
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
              <span
                className={classNames({
                  "text-base-content/80": !bondAmount,
                })}
              >{`${formatBalance({
                balance: bondAmount,
                decimals: baseToken.decimals,
                places: baseToken.places,
              })} hy${baseToken.symbol}`}</span>
            )
          }
        />
        <LabelValue
          label="Pool fee"
          tooltipContent="Total combined fee paid to LPs and governance to open the long."
          tooltipPosition="right"
          tooltipSize="small"
          value={
            openLongPreviewStatus === "loading" ? (
              <Skeleton width={100} />
            ) : (
              <span
                className={classNames({
                  "text-base-content/80": !curveFee,
                })}
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
          tooltipContent="Your net fixed rate after pool fees and slippage are applied."
          tooltipPosition="right"
          tooltipSize="small"
          value={
            openLongPreviewStatus === "loading" ? (
              <Skeleton width={100} />
            ) : (
              <span className="gradient-text">
                {bondAmount > 0
                  ? `${formatRate(
                      calculateAprFromPrice({
                        positionDuration:
                          hyperdrive.poolConfig.positionDuration || 0n,
                        baseAmount: amountPaidInBase,
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
          tooltipContent={`Total ${baseToken.symbol} expected in return at the end of the term, excluding fees.`}
          tooltipPosition="right"
          tooltipSize="small"
          value={
            openLongPreviewStatus === "loading" ? (
              <Skeleton width={100} />
            ) : bondAmount > 0 ? (
              <span className="text-success">
                {yieldAtMaturity
                  ? // TODO: Add ROI here in parenthesis after the yield amount
                    `+${formatBalance({
                      balance: yieldAtMaturity,
                      decimals: baseToken.decimals,
                      places: baseToken.places,
                    })} ${baseToken.symbol}`
                  : undefined}
              </span>
            ) : (
              <span className={"text-base-content/80"}>
                0 {baseToken.symbol}
              </span>
            )
          }
        />
      </div>

      <CollapseSection
        heading={
          <div className="flex items-center gap-4">
            <span>Market Impact</span>
            <span className="text-xs">
              {/* Click to expand */}
              <ChevronDownIcon className="h-4 focus:rotate-180 focus:transition" />
            </span>
          </div>
        }
      >
        <LabelValue
          size="small"
          label="Fixed APR after open"
          value={
            openLongPreviewStatus === "loading" ? (
              <Skeleton width={100} />
            ) : (
              <span
                className={classNames({
                  "text-base-content/80": !spotRateAfterOpen,
                })}
              >
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
              <span
                className={classNames({
                  "text-error": spotRateAfterOpen,
                  "text-base-content/80": !spotRateAfterOpen,
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
