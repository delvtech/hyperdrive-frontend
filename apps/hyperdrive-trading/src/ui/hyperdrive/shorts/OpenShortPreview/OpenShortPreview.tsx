import {
  HyperdriveConfig,
  TokenConfig,
  findBaseToken,
} from "@hyperdrive/appconfig";
import classNames from "classnames";
import * as dnum from "dnum";
import { ReactElement } from "react";
import { convertMillisecondsToDays } from "src/base/convertMillisecondsToDays";
import { formatRate } from "src/base/formatRate";
import { useAppConfig } from "src/ui/appconfig/useAppConfig";
import { LabelValue } from "src/ui/base/components/LabelValue";
import { formatBalance } from "src/ui/base/formatting/formatBalance";
import { formatDate } from "src/ui/base/formatting/formatDate";
import { useCurrentFixedAPR } from "src/ui/hyperdrive/hooks/useCurrentFixedAPR";
interface OpenShortPreviewProps {
  hyperdrive: HyperdriveConfig;
  tokenIn: TokenConfig<any>;
  costBasis: bigint | undefined;
  shortSize: bigint | undefined;
  spotRateAfterOpen: bigint | undefined;
  curveFee: bigint | undefined;
}

export function OpenShortPreview({
  hyperdrive,
  costBasis,
  tokenIn,
  shortSize,
  spotRateAfterOpen,
  curveFee,
}: OpenShortPreviewProps): ReactElement {
  const appConfig = useAppConfig();
  const baseToken = findBaseToken({
    baseTokenAddress: hyperdrive.baseToken,
    tokens: appConfig.tokens,
  });
  const { fixedAPR } = useCurrentFixedAPR(hyperdrive.address);

  const termLengthMS = Number(hyperdrive.poolConfig.positionDuration * 1000n);
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
        }
      />
      <LabelValue
        label="You pay"
        value={
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
        }
      />
      <LabelValue
        label="Fixed APR after open"
        value={
          <span
            className={classNames(
              "daisy-tooltip daisy-tooltip-top daisy-tooltip-left cursor-help before:border",
              { "border-b border-dashed border-current": spotRateAfterOpen },
            )}
            data-tip="The market fixed rate after opening the short."
          >
            {spotRateAfterOpen ? `${formatRate(spotRateAfterOpen)}% APR` : "-"}
          </span>
        }
      />
      <LabelValue
        label="Fixed APR impact"
        value={
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
            {getMarketImpactLabel(fixedAPR?.apr, spotRateAfterOpen)}
          </span>
        }
      />

      <LabelValue
        label="Matures in"
        value={`${convertMillisecondsToDays(termLengthMS)} days, ${formatDate(
          Date.now() + termLengthMS,
        )}`}
      />
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
