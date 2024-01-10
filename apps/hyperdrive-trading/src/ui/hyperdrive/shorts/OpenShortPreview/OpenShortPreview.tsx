import { ReactElement } from "react";
import { Hyperdrive } from "src/appconfig/types";
import { convertMillisecondsToDays } from "src/base/convertMillisecondsToDays";
import { PreviewTransactionRow } from "src/ui/base/components/PreviewTransactionRow";
import { formatBalance } from "src/ui/base/formatting/formatBalance";

interface OpenShortPreviewProps {
  market: Hyperdrive;
  costBasis?: bigint;
  shortSize?: bigint;
}

export function OpenShortPreview({
  market,
  costBasis,
  shortSize,
}: OpenShortPreviewProps): ReactElement {
  return (
    <div className="flex flex-col gap-1">
      <PreviewTransactionRow
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
      <PreviewTransactionRow
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

      <PreviewTransactionRow
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
