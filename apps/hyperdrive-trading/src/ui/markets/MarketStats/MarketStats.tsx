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
        description={StatDescriptions["Asset"]}
      />
      <Stat
        label="Term"
        value={formattedTermLength}
        description={StatDescriptions["Term"]}
      />
      <Stat
        label="Fixed rate"
        value={`${fixedAPR?.formatted}% APR`}
        description={StatDescriptions["Fixed rate"]}
      />
      <Stat
        label="Bond price"
        value={`${formatBalance(longPrice?.formatted || "0", 2)} ${
          hyperdrive.baseToken.symbol
        }`}
        description={StatDescriptions["Bond price"]}
      />
      <Stat
        label="DSR APY"
        value="3.49%"
        description={StatDescriptions["DSR APY"]}
      />
      <Stat
        label="LP APY"
        value="1.60%"
        description={StatDescriptions["LP APY"]}
      />
      <Stat
        label="Volume (24h)"
        value={
          <FormattedDaiValue
            iconUrl={hyperdrive.baseToken.iconUrl as string}
            value={tradingVolume || "0"}
          />
        }
        description={StatDescriptions["Volume (24h)"]}
      />
      <Stat
        label="Liquidity"
        value={
          <FormattedDaiValue
            iconUrl={hyperdrive.baseToken.iconUrl as string}
            value={liquidity?.formatted || "0"}
          />
        }
        description={StatDescriptions["Liquidity"]}
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
  iconUrl,
}: {
  value: string;
  iconUrl: string;
}) {
  return (
    <span className="flex flex-row items-center justify-start font-semibold">
      <img className="mr-1 h-4" src={iconUrl} />
      {formatBalance(value, 0)}
    </span>
  );
}

const StatDescriptions = {
  Asset: "The asset that is being used to back the bond.",
  Term: "The length of time that the bond will be locked.",
  "Fixed rate": "The fixed rate that the bond will be issued at.",
  "Bond price": "The price of the bond in the base asset.",
  "DSR APY":
    "DSR APY reflects the annualized return for holding DAI in the savings rate contract.",
  "LP APY":
    "LP APY indicates the annualized projected return for liquidity providers.",
  "Volume (24h)": "The total trading volume in the last 24 hours.",
  Liquidity: "The total liquidity in the pool.",
};
