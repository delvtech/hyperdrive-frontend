import { ReactElement } from "react";
import { Hyperdrive } from "src/appconfig/types";
import { convertMillisecondsToDays } from "src/base/convertMillisecondsToDays";
import { Stat } from "src/ui/base/components/Stat";
import { useCurrentFixedAPR } from "src/ui/hyperdrive/longs/hooks/useCurrentFixedAPR";

export function MarketStats({
  hyperdrive,
}: {
  hyperdrive: Hyperdrive;
}): ReactElement {
  const formattedTermLength = formatTermLength(hyperdrive.termLengthMS);

  const { fixedAPR } = useCurrentFixedAPR(hyperdrive);

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
      <Stat label="Term" value={formattedTermLength} />
      <Stat label="Fixed rate" value={`${fixedAPR?.formatted}% APR`} />
      <Stat label="Bond price" value={"0.98 DAI"} />
      <Stat label="DSR APY" value="3.49%" />
      <Stat label="LP APY" value="1.60%" />
      <Stat label="Volume (24h)" value="$4.4M" />
      <Stat label="Liquidity" value="$100M" />
    </div>
  );
}

function formatTermLength(termLengthMS: number) {
  const numDays = convertMillisecondsToDays(termLengthMS);
  return `${numDays} days`;
}
