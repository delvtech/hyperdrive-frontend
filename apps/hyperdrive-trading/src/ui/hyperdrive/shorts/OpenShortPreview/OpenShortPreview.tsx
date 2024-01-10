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
    <div className="flex flex-col gap-3">
      <PreviewTransactionRow
        label="Short size"
        value={
          <p className="font-bold">
            {shortSize
              ? `${formatBalance({
                  balance: shortSize,
                  decimals: market.baseToken.decimals,
                  places: 6,
                })}`
              : "0"}{" "}
            hy{market.baseToken.symbol}
          </p>
        }
      />
      <PreviewTransactionRow
        label="You pay"
        value={
          <p className="font-bold">
            {costBasis
              ? `${formatBalance({
                  balance: costBasis,
                  decimals: market.baseToken.decimals,
                  places: 6,
                })}`
              : "0"}{" "}
            {market.baseToken.symbol}
          </p>
        }
      />
      <PreviewTransactionRow
        label="Matures in"
        value={`${convertMillisecondsToDays(market.termLengthMS)} days, 
          ${new Date(
            Date.now() + Number(market.termLengthMS),
          ).toLocaleDateString()}`}
      />
    </div>
  );
}
