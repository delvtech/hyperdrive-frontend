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
import { useCurrentFixedAPR } from "src/ui/hyperdrive/hooks/useCurrentFixedAPR";
interface OpenShortPreviewProps {
  hyperdrive: HyperdriveConfig;
  tokenIn: TokenConfig<any>;
  costBasis: bigint | undefined;
  shortSize: bigint | undefined;
  spotRateAfterOpen: bigint | undefined;
}

export function OpenShortPreview({
  hyperdrive,
  costBasis,
  tokenIn,
  shortSize,
  spotRateAfterOpen,
}: OpenShortPreviewProps): ReactElement {
  const appConfig = useAppConfig();
  const baseToken = findBaseToken({
    baseTokenAddress: hyperdrive.baseToken,
    tokens: appConfig.tokens,
  });
  const { fixedAPR } = useCurrentFixedAPR(hyperdrive.address);
  let changeInFixedApr = 0n;
  if (spotRateAfterOpen && fixedAPR) {
    changeInFixedApr = dnum.subtract(
      [spotRateAfterOpen, 18],
      [fixedAPR.apr, 18],
    )[0];
    console.log("changeInFixedApr", changeInFixedApr);
  }
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
                  places: 6,
                })} ${baseToken.symbol}`
              : `0` + ` ${baseToken.symbol}`}
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
                  places: 6,
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
            {spotRateAfterOpen ? `+${formatRate(changeInFixedApr)}% APR` : "-"}
          </span>
        }
      />

      <LabelValue
        label="Matures in"
        value={`${convertMillisecondsToDays(termLengthMS)} days, ${new Date(
          Date.now() + termLengthMS,
        ).toLocaleDateString()}`}
      />
    </div>
  );
}
