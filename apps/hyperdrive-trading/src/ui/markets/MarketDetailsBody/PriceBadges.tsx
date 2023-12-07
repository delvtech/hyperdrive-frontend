import { ReactElement } from "react";
import { Hyperdrive } from "src/appconfig/types";
import { divideBigInt } from "src/base/divideBigInt";
import { parseUnits } from "src/base/parseUnits";
import { formatBalance } from "src/ui/base/formatting/formatBalance";

export function PriceBadges({
  hyperdrive,
  longPrice,
}: {
  hyperdrive: Hyperdrive;
  longPrice: { price: bigint; formatted: string };
}): ReactElement {
  return (
    <div className="flex flex-col gap-2 md:flex-row md:gap-4">
      <div className="daisy-badge daisy-badge-ghost daisy-badge-lg border border-base-300/5 text-[12px] md:text-lg">
        1 hy{hyperdrive.baseToken.symbol} ≈{" "}
        {formatBalance({
          balance: longPrice.price,
          decimals: hyperdrive.baseToken.decimals,
          places: 6,
        })}{" "}
        {hyperdrive.baseToken.symbol}
      </div>
      <div className="daisy-badge daisy-badge-ghost daisy-badge-lg border border-base-300/5 text-[12px] md:text-lg">
        1 {hyperdrive.baseToken.symbol} ≈{" "}
        {formatBalance({
          balance: divideBigInt(
            parseUnits("1", 18),
            longPrice.price,
            hyperdrive.baseToken.decimals,
          ),

          decimals: hyperdrive.baseToken.decimals,
          places: 6,
        })}{" "}
        hy{hyperdrive.baseToken.symbol}
      </div>
    </div>
  );
}
