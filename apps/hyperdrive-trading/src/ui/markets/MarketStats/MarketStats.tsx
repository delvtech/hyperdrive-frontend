import { ReactElement } from "react";
import Skeleton from "react-loading-skeleton";
import { Hyperdrive } from "src/appconfig/types";
import { convertMillisecondsToDays } from "src/base/convertMillisecondsToDays";
import { useAppConfig } from "src/ui/appconfig/useAppConfig";
import { Stat } from "src/ui/base/components/Stat";
import { formatBalance } from "src/ui/base/formatting/formatBalance";
import { useCurrentFixedAPR } from "src/ui/hyperdrive/hooks/useCurrentFixedAPR";
import { useLiquidity } from "src/ui/hyperdrive/hooks/useLiquidity";
import { useTradingVolume } from "src/ui/hyperdrive/hooks/useTradingVolume";
import { useVaultRate } from "src/ui/vaults/useVaultRate";
import { useBlockNumber, useChainId } from "wagmi";
export function MarketStats({
  hyperdrive,
}: {
  hyperdrive: Hyperdrive;
}): ReactElement {
  const { appConfig } = useAppConfig();
  const formattedTermLength = formatTermLength(hyperdrive.termLengthMS);
  const { data: currentBlockNumber } = useBlockNumber();

  const chainId = useChainId();
  const { totalVolume, longVolume, shortVolume } = useTradingVolume(
    hyperdrive.address,
    currentBlockNumber,
  );

  const { liquidity } = useLiquidity(hyperdrive.address);
  const { fixedAPR } = useCurrentFixedAPR(hyperdrive);
  const { vaultRate } = useVaultRate({
    // TODO: temporary for now until this available via addresses.json
    vaultAddress: "0xe7f1725E7734CE288F8367e1Bb143E90bb3F0512",
  });

  // TODO: This will only work on cloudchain and local for now. Remove this
  // condition once we can dynamically source the underlying 4626 vault address
  // from the hyperdrive instance.
  const showVaultRate = [
    +import.meta.env.VITE_CUSTOM_CHAIN_CHAIN_ID,
    31337,
  ].includes(chainId);

  return (
    <div className="flex w-full flex-wrap items-center justify-center gap-16 md:justify-start">
      <Stat
        label="Yield source"
        value={
          <>
            {appConfig?.yieldSources[hyperdrive.yieldSource].name}{" "}
            {showVaultRate ? `@ ${vaultRate?.formatted || 0}% APY` : ""}
          </>
        }
        description={`The yield source backing the hy${hyperdrive.baseToken.symbol} in this pool`}
      />
      <Stat
        label="Term"
        value={formattedTermLength}
        description={`Duration the hy${hyperdrive.baseToken.symbol} remains locked`}
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
        description={`The fixed rate earned when purchasing hy${hyperdrive.baseToken.symbol}`}
      />
      <Stat
        description={`The amount of hy${hyperdrive.baseToken.symbol} (either longs or shorts) that have been traded in the last 24 hours. `}
        label="Volume (24h)"
        value={
          <FormattedDaiValue
            symbol={hyperdrive.baseToken.symbol}
            value={formatBalance({
              balance: totalVolume || 0n,
              decimals: hyperdrive.baseToken.decimals,
              places: 0,
            })}
            tooltip={`Long Volume: ${formatBalance({
              balance: longVolume || 0n,
              decimals: hyperdrive.baseToken.decimals,
              places: 0,
            })} ${hyperdrive.baseToken.symbol} / Short Volume: ${formatBalance({
              balance: shortVolume || 0n,
              decimals: hyperdrive.baseToken.decimals,
              places: 0,
            })} ${hyperdrive.baseToken.symbol}`}
          />
        }
      />
      <Stat
        label="Liquidity"
        description="The amount of capital that has been deployed by LPs to the pool"
        value={
          <FormattedDaiValue
            symbol={hyperdrive.baseToken.symbol}
            value={liquidity?.formatted || "0"}
          />
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
  tooltip,
}: {
  value: string;
  symbol: string;
  tooltip?: string;
}) {
  return (
    <p
      data-tip={tooltip}
      className={
        // Note: Tooltip-bottom not wrapping properly. See: https://github.com/saadeghi/daisyui/issues/84#issuecomment-1444067972
        "daisy-tooltip daisy-tooltip-bottom flex flex-row items-center justify-start before:whitespace-pre-wrap before:content-[attr(data-tip)]"
      }
    >
      {value}
      <span className="ml-1">{symbol}</span>
    </p>
  );
}
