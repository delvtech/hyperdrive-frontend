import { parseFixed } from "@delvtech/fixed-point-wasm";
import {
  ArrowRightIcon,
  ChevronDownIcon,
  ClockIcon,
} from "@heroicons/react/16/solid";
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
import { useAppConfig } from "src/ui/appconfig/useAppConfig";
import { CollapseSection } from "src/ui/base/components/CollapseSection/CollapseSection";
import { LabelValue } from "src/ui/base/components/LabelValue";
import { formatBalance } from "src/ui/base/formatting/formatBalance";
import { formatDate } from "src/ui/base/formatting/formatDate";
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
  openShortPreviewStatus: QueryStatusWithIdle;
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
    bondAmount: shortSize || BigInt(1e15),
    hyperdriveAddress: hyperdrive.address,
    timestamp: BigInt(Math.floor(Date.now() / 1000)),
    variableApy: vaultRate?.vaultRate,
  });
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
          size="small"
          value={
            openShortPreviewStatus === "loading" ? (
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
          label="Short APR"
          tooltipContent="Your annualized return on this position assuming the current yield source rate stays the same for one year"
          tooltipPosition="right"
          tooltipSize="small"
          size="small"
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
                {shortApr ? `${shortApr.formatted}` : "-"}
              </span>
            )
          }
        />
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
                    <span className="text-base-content/80">{`${fixedApr?.formatted} `}</span>
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
  const changeInFixedApr = spotRateAfterOpenShort - currentFixedRate;

  const isChangeInFixedAprLessThanOneBasisPoint =
    parseFixed("0.0001").gt(changeInFixedApr);

  if (isChangeInFixedAprLessThanOneBasisPoint) {
    return "+<0.01%";
  }
  return `+${formatRate(changeInFixedApr)}`;
}
