import { ReactElement } from "react";
import { Hyperdrive } from "src/appconfig/types";
import { formatTermLength } from "src/ui/markets/formatTermLength";
import { PriceBadges } from "./PriceBadges";

export function MarketHeader({
  hyperdrive,
  longPrice,
}: {
  hyperdrive: Hyperdrive;
  longPrice: { price: bigint; formatted: string } | undefined;
}): ReactElement {
  const formattedTermLength = formatTermLength(hyperdrive.termLengthMS);
  return (
    <div className="my-2 flex items-center gap-2 md:my-0">
      <div className="flex w-full flex-col items-start gap-1">
        <span className="gradient-text items-center text-h1 md:my-0">
          {formattedTermLength} {hyperdrive.baseToken.symbol}-
          {hyperdrive.yieldSource}
        </span>
        {longPrice ? (
          <PriceBadges hyperdrive={hyperdrive} longPrice={longPrice} />
        ) : null}
      </div>
    </div>
  );
}
