import { ReactElement } from "react";
import { Hyperdrive } from "src/appconfig/types";
import { Stat } from "src/ui/base/components/Stat";

export function MarketStats({
  hyperdrive,
}: {
  hyperdrive: Hyperdrive;
}): ReactElement {
  return (
    <div className="flex w-full flex-wrap items-center justify-start gap-16">
      <Stat
        label="Token"
        value={
          <span className="flex items-center gap-1.5">
            {hyperdrive.baseToken.iconUrl && (
              <img className="h-4" src={hyperdrive.baseToken.iconUrl} />
            )}
            {hyperdrive.baseToken.symbol}
          </span>
        }
      />
      <Stat label="Term" value="1 year" />
      <Stat label="Fixed Rate" value="1.50% APR" />
      <Stat label="DSR APY" value="3.49%" />
      <Stat label="LP APY" value="1.60%" />
      <Stat label="Volume (24h)" value="$4.4M" />
      <Stat label="Liquidity" value="$100M" />
    </div>
  );
}
