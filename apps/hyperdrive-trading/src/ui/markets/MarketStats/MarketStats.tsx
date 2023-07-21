import { ReactElement } from "react";
import { Hyperdrive } from "src/appconfig/types";
import { convertMillisecondsToDays } from "src/base/convertMillisecondsToDays";
import { Stat } from "src/ui/base/components/Stat";
import { formatBalance } from "src/ui/base/formatting/formatBalance";
import { useCurrentFixedAPR } from "src/ui/hyperdrive/hooks/useCurrentFixedAPR";
import { useLiquidity } from "src/ui/hyperdrive/hooks/useLiquidity";
import { useTradingVolume } from "src/ui/hyperdrive/hooks/useTradingVolume";
import { useCurrentLongPrice } from "src/ui/hyperdrive/longs/hooks/useCurrentLongPrice";
import { useBlockNumber } from "wagmi";
export function MarketStats({
  hyperdrive,
}: {
  hyperdrive: Hyperdrive;
}): ReactElement {
  const formattedTermLength = formatTermLength(hyperdrive.termLengthMS);
  const { data: currentBlockNumber } = useBlockNumber();

  const { tradingVolume } = useTradingVolume(
    hyperdrive.address,
    currentBlockNumber as bigint,
  );

  const { liquidity } = useLiquidity(hyperdrive.address);
  const { fixedAPR } = useCurrentFixedAPR(hyperdrive);
  const { longPrice } = useCurrentLongPrice(hyperdrive);

  return (
    <div className="flex w-full flex-wrap items-center justify-center gap-16 md:justify-start">
      <Stat
        label="Asset"
        value={
          <span className="flex items-center gap-1.5">
            {hyperdrive.baseToken.iconUrl && (
              <img className="h-4" src={hyperdrive.baseToken.iconUrl} />
            )}
            {hyperdrive.baseToken.symbol}
          </span>
        }
        description={"The asset that is being used to back the bond."}
      />
      <Stat
        label="Term"
        value={formattedTermLength}
        description={"The length of time that the bond will be locked."}
      />
      <Stat
        label="Fixed rate"
        value={`${fixedAPR?.formatted}% APR`}
        description={"The fixed rate that the bond will be issued at."}
      />
      <Stat
        label="Bond price"
        value={`${formatBalance(longPrice?.formatted || "0", 2)} ${
          hyperdrive.baseToken.symbol
        }`}
        description={"The price of the bond in the base asset."}
      />
      <Stat
        label="DSR APY"
        value="3.49%"
        description={
          "DSR APY reflects the annualized return for holding DAI in the savings rate contract."
        }
      />
      <Stat
        label="LP APY"
        value="1.60%"
        description={
          "LP APY indicates the annualized projected return for liquidity providers."
        }
      />
      <Stat
        label="Volume (24h)"
        value={
          <FormattedDaiValue
            symbol={hyperdrive.baseToken.symbol}
            value={tradingVolume || "0"}
          />
        }
        description={"The total trading volume in the last 24 hours."}
      />
      <Stat
        label="Liquidity"
        value={
          <FormattedDaiValue
            symbol={hyperdrive.baseToken.symbol}
            value={liquidity?.formatted || "0"}
          />
        }
        description={"The total liquidity in the pool."}
      />
    </div>
  );
}

function formatTermLength(termLengthMS: number) {
  const numDays = convertMillisecondsToDays(termLengthMS);
  return `${numDays} days`;
}

function FormattedDaiValue({
  value,
  symbol,
}: {
  value: string;
  symbol: string;
}) {
  return (
    <span className="flex flex-row items-center justify-start font-semibold">
      {formatBalance(value, 0)}
      <span className="ml-1">{symbol}</span>
    </span>
  );
}
