import { ReactElement } from "react";
import { Hyperdrive } from "src/appconfig/types";
import { convertMillisecondsToDays } from "src/base/convertMillisecondsToDays";
import { Pill } from "src/ui/base/components/Pill";
import { formatBalance } from "src/ui/base/formatting/formatBalance";
import { formatUnits } from "viem";

interface OpenShortPreviewProps {
  market: Hyperdrive;
  costBasis?: bigint;
  amountShort: bigint;
  expiryDate: Date;
}

export function OpenShortPreview({
  market,
  costBasis,
  amountShort,
  expiryDate,
}: OpenShortPreviewProps): ReactElement {
  return (
    <div className="flex flex-col gap-y-4 rounded border border-neutral-content bg-transparent p-4">
      <div className="flex items-center">
        <h5 className="mr-4 font-bold">{market.name}</h5>
        <Pill variant="Red" className="h-6 text-base-content">
          Short
        </Pill>
      </div>

      <div className="flex flex-col gap-y-1 tracking-wide">
        <div className="flex">
          <p className="mr-auto">Cost Basis</p>
          <p className="font-semibold tracking-wide">
            {costBasis
              ? `${formatBalance({
                  balance: formatUnits(costBasis, market.baseToken.decimals),
                  numDecimals: 6,
                  includeCommas: false,
                })} ${market.baseToken.symbol}`
              : "0"}
          </p>
        </div>

        <div className="flex">
          <p className="mr-auto">Amount</p>
          <p className="font-semibold tracking-wide">
            {formatBalance({
              balance: formatUnits(amountShort, market.baseToken.decimals),
              numDecimals: 6,
            })}
          </p>
        </div>

        <div className="flex">
          <p className="mr-auto">Term Length</p>
          <p className="font-semibold tracking-wide">
            {convertMillisecondsToDays(market.termLengthMS)} days
          </p>
        </div>

        <div className="flex">
          <p className="mr-auto">Matures</p>
          <p className="font-semibold tracking-wide">
            {expiryDate.toLocaleDateString()}
          </p>
        </div>

        <div className="flex">
          <p className="mr-auto">Exposure</p>
          <p className="font-semibold tracking-wide">
            {!!costBasis && amountShort > 0n && costBasis > 0n
              ? `${formatBalance({
                  balance: (amountShort / costBasis).toString(),
                  numDecimals: 4,
                  includeCommas: false,
                })}x`
              : "0"}
          </p>
        </div>
      </div>
    </div>
  );
}
