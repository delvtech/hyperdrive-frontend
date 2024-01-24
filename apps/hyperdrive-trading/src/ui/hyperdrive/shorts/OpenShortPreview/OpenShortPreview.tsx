import { ReactElement } from "react";
import { convertMillisecondsToDays } from "src/base/convertMillisecondsToDays";
import { HyperdriveConfig } from "src/hyperdrive/HyperdriveConfig";
import { LabelValue } from "src/ui/base/components/LabelValue";
import { formatBalance } from "src/ui/base/formatting/formatBalance";

interface OpenShortPreviewProps {
  market: HyperdriveConfig;
  costBasis?: bigint;
  shortSize?: bigint;
}

export function OpenShortPreview({
  market,
  costBasis,
  shortSize,
}: OpenShortPreviewProps): ReactElement {
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
                  decimals: market.baseToken.decimals,
                  places: 6,
                })} ${market.baseToken.symbol}`
              : `0` + ` ${market.baseToken.symbol}`}
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
                  decimals: market.baseToken.decimals,
                  places: 6,
                })} ${market.baseToken.symbol}`
              : `0 ${market.baseToken.symbol}`}
          </span>
        }
      />

      <LabelValue
        label="Matures in"
        value={`${convertMillisecondsToDays(
          market.termLengthMS,
        )} days, ${new Date(
          Date.now() + Number(market.termLengthMS),
        ).toLocaleDateString()}`}
      />
    </div>
  );
}
