import { ReactElement } from "react";
import { HyperdriveMarket } from "src/config/HyperdriveConfig";
import { Pill } from "src/ui/base/components/Pill";
import { formatBalance } from "src/ui/base/formatting/formatBalance";
import { formatBigInt } from "src/ui/base/formatting/formatBigInt";

interface ShortPositionOverviewWellProps {
  market: HyperdriveMarket;
  costBasis: bigint;
  amountShort: bigint;
}

export function ShortPositionOverviewWell({
  market,
  costBasis,
  amountShort,
}: ShortPositionOverviewWellProps): ReactElement {
  const current = new Date();
  const formattedMaturityDate = new Date(
    current.setMonth(current.getMonth() + market.termLength),
  ).toLocaleDateString();

  return (
    <div className="flex flex-col p-4 bg-transparent border rounded gap-y-4 border-hyper-blue-300">
      <div className="flex items-center">
        <h5 className="mr-4 font-bold">{market.name}</h5>
        <Pill variant="Red" className="h-6 text-hyper-blue-100">
          Short
        </Pill>
      </div>

      <div className="flex flex-col tracking-wide gap-y-1">
        <div className="flex">
          <p className="mr-auto">Cost Basis</p>
          <p className="font-semibold tracking-wide">
            {/* TODO: formatBalance has a bug when the BigInt is less than 1 */}
            {formatBalance(
              formatBigInt(costBasis, market.baseToken.decimals),
              6,
              false,
            )}{" "}
            {market.baseToken.symbol}
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
          <p className="font-semibold tracking-wide">{formattedMaturityDate}</p>
        </div>

        <div className="flex">
          <p className="mr-auto">Var. APR</p>
          <p className="font-semibold tracking-wide">1.50%</p>
        </div>

        {amountShort > 0n && costBasis > 0n && (
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
