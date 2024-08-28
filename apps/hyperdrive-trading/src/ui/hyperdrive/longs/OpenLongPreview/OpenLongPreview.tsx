import { parseFixed } from "@delvtech/fixed-point-wasm";
import { ArrowRightIcon } from "@heroicons/react/16/solid";
import { ChevronDownIcon } from "@heroicons/react/20/solid";
import { ClockIcon } from "@heroicons/react/24/outline";
import {
  HyperdriveConfig,
  TokenConfig,
  findBaseToken,
} from "@hyperdrive/appconfig";
import classNames from "classnames";
import { ReactElement } from "react";
import Skeleton from "react-loading-skeleton";
import { formatRate } from "src/base/formatRate";
import { QueryStatusWithIdle } from "src/base/queryStatus";
import { convertSharesToBase } from "src/hyperdrive/convertSharesToBase";
import { useAppConfig } from "src/ui/appconfig/useAppConfig";
import { CollapseSection } from "src/ui/base/components/CollapseSection/CollapseSection";
import { LabelValue } from "src/ui/base/components/LabelValue";
import { formatBalance } from "src/ui/base/formatting/formatBalance";
import { formatDate } from "src/ui/base/formatting/formatDate";
import { useFixedRate } from "src/ui/hyperdrive/longs/hooks/useFixedRate";
interface OpenLongPreviewProps {
  hyperdrive: HyperdriveConfig;
  bondAmount: bigint;
  amountPaid: bigint;
  openLongPreviewStatus: QueryStatusWithIdle;
  spotRateAfterOpen: bigint | undefined;
  activeToken: TokenConfig;
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
    hyperdriveChainId: hyperdrive.chainId,
    hyperdriveAddress: hyperdrive.address,
    appConfig,
  });
  const yieldSource = appConfig.yieldSources[hyperdrive.yieldSource];
  const { fixedApr } = useFixedRate({
    chainId: hyperdrive.chainId,
    hyperdriveAddress: hyperdrive.address,
  });

  const isBaseAmount = asBase || yieldSource.isSharesPeggedToBase;
  const amountPaidInBase = isBaseAmount
    ? amountPaid
    : convertSharesToBase({
        sharesAmount: amountPaid,
        vaultSharePrice: vaultSharePrice,
        decimals: baseToken.decimals,
      });
  const yieldAtMaturity = bondAmount - amountPaidInBase;
  const termLengthMS = Number(hyperdrive.poolConfig.positionDuration * 1000n);

  return (
    <div className="flex flex-col gap-3.5 px-2">
      <CollapseSection
        heading={
          <div className="flex w-full items-center justify-between text-neutral-content">
            <p>Transaction Details</p>
            <div className="flex items-center gap-1">
              <ClockIcon className="size-5 text-gray-500" />
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
                    <span className="text-base-content/80">{`${fixedApr?.formatted}`}</span>
                    <ArrowRightIcon className="h-4 text-neutral-content" />
                    {formatRate(spotRateAfterOpen)}
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
  const changeInFixedApr = currentFixedRate - spotRateAfterOpenLong;

  const isChangeInFixedAprLessThanOneBasisPoint =
    parseFixed("0.0001").gt(changeInFixedApr); // .01% === .0001

  if (isChangeInFixedAprLessThanOneBasisPoint) {
    return "-<0.01%";
  }
  return `-${formatRate(changeInFixedApr)}`;
}
