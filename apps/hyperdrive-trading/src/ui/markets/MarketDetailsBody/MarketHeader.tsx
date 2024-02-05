import { ReactElement } from "react";
import { HyperdriveConfigOld } from "src/hyperdrive/HyperdriveConfigOld";
import { PriceBadges } from "src/ui/markets/MarketDetailsBody/PriceBadges";

export function MarketHeader({
  hyperdrive,
  longPrice,
}: {
  hyperdrive: HyperdriveConfigOld;
  longPrice: { price: bigint; formatted: string } | undefined;
}): ReactElement {
  return (
    <div className="my-2 flex items-center gap-2 md:my-0">
      <div className="flex w-full flex-col items-start gap-1">
        <span className="gradient-text items-center text-h1 md:my-0">
          {hyperdrive.name}
        </span>
        {longPrice ? (
          <PriceBadges hyperdrive={hyperdrive} longPrice={longPrice} />
        ) : null}
      </div>
    </div>
  );
}
