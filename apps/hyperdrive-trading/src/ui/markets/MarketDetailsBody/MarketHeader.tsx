import { ReactElement } from "react";
import { Hyperdrive } from "src/appconfig/types";
import { PriceBadges } from "./PriceBadges";

export function MarketHeader({
  hyperdrive,
  longPrice,
}: {
  hyperdrive: Hyperdrive;
  longPrice: { price: bigint; formatted: string } | undefined;
}): ReactElement {
  return (
    <div className="my-2 flex items-center gap-2 md:my-0">
      <div className="daisy-avatar-group shrink-0 -space-x-4 p-2 font-semibold ">
        <div className="daisy-placeholder daisy-avatar">
          <div className="w-16 bg-base-200">
            <span className="text-body font-bold">
              {hyperdrive.baseToken.symbol}
            </span>
          </div>
        </div>
        <div className="daisy-placeholder daisy-avatar">
          <div className="w-16 bg-base-200">
            <span className="text-body font-bold">
              hy{hyperdrive.baseToken.symbol}
            </span>
          </div>
        </div>
      </div>
      <div className="flex w-full flex-col items-start gap-1">
        <span className="items-center text-h4 font-semibold md:my-0 md:text-h3">
          {hyperdrive.baseToken.symbol} / hy{hyperdrive.baseToken.symbol}
        </span>
        {longPrice ? (
          <PriceBadges hyperdrive={hyperdrive} longPrice={longPrice} />
        ) : null}
      </div>
    </div>
  );
}
