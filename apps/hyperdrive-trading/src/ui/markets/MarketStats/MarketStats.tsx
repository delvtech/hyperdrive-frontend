import { ReactElement } from "react";
import Skeleton from "react-loading-skeleton";
import { Hyperdrive } from "src/appconfig/types";
import { convertMillisecondsToDays } from "src/base/convertMillisecondsToDays";
import { Stat } from "src/ui/base/components/Stat";
import { formatBalance } from "src/ui/base/formatting/formatBalance";
import { useCurrentFixedAPR } from "src/ui/hyperdrive/hooks/useCurrentFixedAPR";
import { useLiquidity } from "src/ui/hyperdrive/hooks/useLiquidity";
import { useTradingVolume } from "src/ui/hyperdrive/hooks/useTradingVolume";
import { useCurrentLongPrice } from "src/ui/hyperdrive/longs/hooks/useCurrentLongPrice";
import { useVaultRate } from "src/ui/vaults/useVaultRate";
import { useBlockNumber, useChainId } from "wagmi";
export function MarketStats({
  hyperdrive,
}: {
  hyperdrive: Hyperdrive;
}): ReactElement {
  const formattedTermLength = formatTermLength(hyperdrive.termLengthMS);
  const { data: currentBlockNumber } = useBlockNumber();

  const chainId = useChainId();
  const tradingVolume = useTradingVolume(
    hyperdrive.address,
    currentBlockNumber,
  );

  const { liquidity } = useLiquidity(hyperdrive.address);
  const { fixedAPR } = useCurrentFixedAPR(hyperdrive);
  const { longPrice } = useCurrentLongPrice(hyperdrive);
  const { vaultRate } = useVaultRate({
    // TODO: temporary for now until this available via addresses.json
    vaultAddress: "0xe7f1725E7734CE288F8367e1Bb143E90bb3F0512",
  });

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
        value={
          fixedAPR ? (
            <span className="flex items-center gap-1.5">
              {fixedAPR?.formatted || "0"}% APR
            </span>
          ) : (
            <Skeleton className="opacity-50" />
          )
        }
        description={"The fixed rate that the bond will be issued at."}
      />
      <Stat
        label="Bond price"
        value={`${formatBalance({
          balance: longPrice?.formatted || "0",
          numDecimals: 2,
        })} ${hyperdrive.baseToken.symbol}`}
        description={"The price of the bond in the base asset."}
      />
      {/* TODO: This will only work on cloudchain for now. Remove this condition
      once we can dynamically source the underlying 4626 vault address from the
      hyperdrive instance. */}
      {chainId === +import.meta.env.VITE_CUSTOM_CHAIN_CHAIN_ID ? (
        <Stat
          label="Vault rate"
          value={`${vaultRate?.formatted || "0"}% APY`}
          description={
            "The variable rate being earned by the underlying vault."
          }
        />
      ) : undefined}
      <Stat
        label="Volume (24h)"
        value={
          <FormattedDaiValue
            symbol={hyperdrive.baseToken.symbol}
            value={tradingVolume.formatted || "0"}
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
        description={
          "The total liquidity in the pool available for market making"
        }
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
      {value}
      <span className="ml-1">{symbol}</span>
    </span>
  );
}
