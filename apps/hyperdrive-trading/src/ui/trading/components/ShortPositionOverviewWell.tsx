import { ReactElement } from "react";
import { HyperdriveMarket } from "src/appconfig/types";
import { Pill } from "src/ui/base/components/Pill";
import { formatBalance } from "src/ui/base/formatting/formatBalance";
import { formatBigInt } from "src/ui/base/formatting/formatBigInt";

interface ShortPositionOverviewWellProps {
  market: HyperdriveMarket;
  costBasis?: bigint;
  amountShort: bigint;
  expiryDate: Date;
}

export function ShortPositionOverviewWell({
  market,
  costBasis,
  amountShort,
  expiryDate,
}: ShortPositionOverviewWellProps): ReactElement {
  return (
    <div className="flex flex-col gap-y-4 rounded border border-hyper-blue-300 bg-transparent p-4">
      <div className="flex items-center">
        <h5 className="mr-4 font-bold">{market.name}</h5>
        <Pill variant="Red" className="h-6 text-hyper-blue-100">
          Short
        </Pill>
      </div>

      <div className="flex flex-col gap-y-1 tracking-wide">
        {!!costBasis && (
          <div className="flex">
            <p className="mr-auto">Cost Basis</p>
            <p className="font-semibold tracking-wide">
              {formatBalance(
                formatBigInt(costBasis, market.baseToken.decimals),
                6,
                false,
              )}{" "}
              {market.baseToken.symbol}
            </p>
          </div>
        )}

        <div className="flex">
          <p className="mr-auto">Amount</p>
          <p className="font-semibold tracking-wide">
            {formatBalance(
              formatBigInt(amountShort, market.baseToken.decimals),
              6,
            )}
          </p>
        </div>

        <div className="flex">
          <p className="mr-auto">Term Length</p>
          <p className="font-semibold tracking-wide">
            {market.termLength} months
          </p>
        </div>

        <div className="flex">
          <p className="mr-auto">Matures</p>
          <p className="font-semibold tracking-wide">
            {expiryDate.toLocaleDateString()}
          </p>
        </div>

        {!!costBasis && amountShort > 0n && costBasis > 0n && (
          <div className="flex">
            <p className="mr-auto">Exposure</p>
            <p className="font-semibold tracking-wide">
              {formatBalance((amountShort / costBasis).toString(), 4, false)}x
            </p>
          </div>
        )}
      </div>
    </div>
  );
}
