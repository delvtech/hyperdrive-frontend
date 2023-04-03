import { ReactElement } from "react";
import { HyperdriveMarket } from "src/config/HyperdriveConfig";
import { Pill } from "src/ui/base/components/Pill";
import { formatBalance } from "src/ui/base/formatting/formatBalance";
import { formatBigInt } from "src/ui/base/formatting/formatBigInt";

interface PositionOverviewWellProps {
  market: HyperdriveMarket;
  costBasis: bigint;
  // TODO: stubbed for now
  // fixedApr: number;
  claimableAtMaturity: bigint;
}

export function PositionOverviewWell({
  market,
  costBasis,
  // fixedApr,
  claimableAtMaturity,
}: PositionOverviewWellProps): ReactElement {
  const current = new Date();
  const formattedMaturityDate = new Date(
    current.setMonth(current.getMonth() + market.termLength),
  ).toLocaleDateString();

  return (
    <div className="flex flex-col p-4 bg-transparent border rounded gap-y-4 border-hyper-blue-300">
      <div className="flex items-center">
        <h5 className="mr-4 font-bold">{market.name}</h5>
        <Pill className="h-6">Long</Pill>
      </div>

      <div className="flex flex-col tracking-wide gap-y-1">
        <div className="flex">
          <p className="mr-auto">Cost Basis</p>
          <p className="font-semibold tracking-wide">
            {formatBigInt(costBasis, market.baseToken.decimals)}{" "}
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
          <p className="mr-auto">Fixed APR</p>
          <p className="font-semibold tracking-wide">1.50%</p>
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
