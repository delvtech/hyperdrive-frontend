import {
  HyperdriveConfig,
  TokenConfig,
  findBaseToken,
} from "@hyperdrive/appconfig";
import classNames from "classnames";
import * as dnum from "dnum";
import { ReactElement } from "react";
import Skeleton from "react-loading-skeleton";
import { convertMillisecondsToDays } from "src/base/convertMillisecondsToDays";
import { formatRate } from "src/base/formatRate";
import { useAppConfig } from "src/ui/appconfig/useAppConfig";
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
  const termLengthMS = Number(hyperdrive.poolConfig.positionDuration * 1000n);
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
        label="Net Short Rate"
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
              {shortApr ? `${shortApr.formatted}% APR` : "-"}
            </span>
          )
        }
      />
      <div className="flex flex-col gap-3">
        <h6 className="font-medium">Market Impact</h6>
        <LabelValue
          label="Fixed APR after open"
          value={
            openShortPreviewStatus === "loading" ? (
              <Skeleton width={100} />
            ) : (
              <span
                className={classNames(
                  "daisy-tooltip daisy-tooltip-top daisy-tooltip-left cursor-help before:border",
                  {
                    "border-b border-dashed border-current": spotRateAfterOpen,
                  },
                )}
                data-tip="The market fixed rate after opening the short."
              >
                {spotRateAfterOpen
                  ? `${formatRate(spotRateAfterOpen)}% APR`
                  : "-"}
              </span>
            )
          }
        />
        <LabelValue
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
      </div>

      <div className="flex flex-col gap-3">
        <h6 className="font-medium">Term</h6>
        <LabelValue
          label="Matures in"
          value={`${convertMillisecondsToDays(termLengthMS)} days
          `}
        />
        <LabelValue
          label="Matures on"
          value={`${formatDate(Date.now() + termLengthMS)}`}
        />
      </div>
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
