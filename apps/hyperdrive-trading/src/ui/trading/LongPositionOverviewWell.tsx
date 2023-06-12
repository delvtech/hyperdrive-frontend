import { ReactElement } from "react";
import { Hyperdrive } from "src/appconfig/types";
import { convertMillisecondsToMonths } from "src/base/covertMillisecondsToMonths";
import { Pill } from "src/ui/base/components/Pill";
import { formatBalance } from "src/ui/base/formatting/formatBalance";
import { formatBigInt } from "src/ui/base/formatting/formatBigInt";

interface LongPositionOverviewWellProps {
  market: Hyperdrive;
  costBasis?: bigint;
  claimableAtMaturity: bigint;
  expiryDate: Date;
}

export function LongPositionOverviewWell({
  market,
  costBasis,
  claimableAtMaturity,
  expiryDate,
}: LongPositionOverviewWellProps): ReactElement {
  return (
    <div className="flex flex-col gap-y-4 rounded border border-hyper-blue-300 bg-transparent p-4">
      <div className="flex items-center">
        <h5 className="mr-4 font-bold">{market.name}</h5>
        <Pill className="h-6">Long</Pill>
      </div>

      <div className="flex flex-col gap-y-1 tracking-wide">
        <div className="flex">
          <p className="mr-auto">Term Length</p>
          <p className="font-semibold tracking-wide">
            {convertMillisecondsToMonths(market.termLengthMS)} months
          </p>
        </div>

        <div className="flex">
          <p className="mr-auto">Matures</p>
          <p className="font-semibold tracking-wide">
            {expiryDate.toLocaleDateString()}
          </p>
        </div>

        <div className="flex">
          <p className="mr-auto">Claimable at Maturity</p>
          <p className="font-semibold tracking-wide">
            {formatBalance(
              formatBigInt(claimableAtMaturity, market.baseToken.decimals),
              4,
              false,
            )}{" "}
            {market.baseToken.symbol}
          </p>
        </div>
      </div>
    </div>
  );
}
