import { EmptyExtensions, TokenConfig } from "@hyperdrive/appconfig";
import { ReactElement } from "react";
import { divideBigInt } from "src/base/divideBigInt";
import { parseUnits } from "src/base/parseUnits";
import { formatBalance } from "src/ui/base/formatting/formatBalance";

export function PriceBadges({
  baseToken,
  longPrice,
}: {
  baseToken: TokenConfig<EmptyExtensions>;
  longPrice: bigint;
}): ReactElement {
  return (
    <div className="flex flex-col gap-2 font-dmMono md:flex-row md:gap-4">
      <div className="daisy-badge daisy-badge-neutral daisy-badge-lg py-4 text-md text-neutral-content">
        1 hy{baseToken.symbol} ≈{" "}
        {formatBalance({
          balance: longPrice,
          decimals: baseToken.decimals,
          places: 6,
        })}{" "}
        {baseToken.symbol}
      </div>
      <div className="daisy-badge daisy-badge-neutral daisy-badge-lg py-4 text-md text-neutral-content">
        1 {baseToken.symbol} ≈{" "}
        {formatBalance({
          balance: divideBigInt(
            parseUnits("1", 18),
            longPrice,
            baseToken.decimals,
          ),

          decimals: baseToken.decimals,
          places: 6,
        })}{" "}
        hy{baseToken.symbol}
      </div>
    </div>
  );
}
