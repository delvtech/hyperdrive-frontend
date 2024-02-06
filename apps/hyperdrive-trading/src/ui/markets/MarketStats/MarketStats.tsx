import { ReactElement } from "react";
import Skeleton from "react-loading-skeleton";
import { HyperdriveConfigOld } from "src/hyperdrive/HyperdriveConfigOld";
import { Stat } from "src/ui/base/components/Stat";
import { formatBalance } from "src/ui/base/formatting/formatBalance";
import { formatCompact } from "src/ui/base/formatting/formatCompact";
import { useCurrentFixedAPR } from "src/ui/hyperdrive/hooks/useCurrentFixedAPR";
import { useLiquidity } from "src/ui/hyperdrive/hooks/useLiquidity";
import { useLpApy } from "src/ui/hyperdrive/hooks/useLpApy";
import { useTradingVolume } from "src/ui/hyperdrive/hooks/useTradingVolume";
import { useVaultRate } from "src/ui/vaults/useVaultRate";
import { useBlockNumber, useChainId } from "wagmi";
export function MarketStats({
  hyperdrive,
}: {
  hyperdrive: HyperdriveConfigOld;
}): ReactElement {
  const { data: currentBlockNumber } = useBlockNumber();

  const chainId = useChainId();
  const { totalVolume, longVolume, shortVolume } = useTradingVolume(
    hyperdrive.address,
    currentBlockNumber,
  );

  const { liquidity } = useLiquidity({
    hyperdriveAddress: hyperdrive.address,
    decimals: hyperdrive.baseToken.decimals,
  });
  const { fixedAPR } = useCurrentFixedAPR(hyperdrive);
  const { lpApy, lpApyStatus } = useLpApy(hyperdrive.address);

  const { vaultRate } = useVaultRate({
    vaultAddress: hyperdrive.sharesToken.address,
  });

  // TODO: This will only work on cloudchain and local for now. Remove this
  // condition once we can dynamically source the underlying 4626 vault address
  // from the hyperdrive instance.
  const showVaultRate = [
    +import.meta.env.VITE_CUSTOM_CHAIN_CHAIN_ID,
    31337,
  ].includes(chainId);

  return (
    <div className="grid grid-cols-2 gap-6 border-y border-neutral-content/20 py-8 sm:grid-cols-3 md:grid-cols-5">
      <Stat
        label="Yield source APY"
        value={
          <div className="flex flex-row">
            {showVaultRate ? `${vaultRate?.formatted || 0}%` : ""}
          </div>
        }
        description={`The yield source backing the hy${hyperdrive.baseToken.symbol} in this pool`}
      />
      <Stat
        label="Fixed APR"
        value={
          fixedAPR ? (
            <span className="flex items-center gap-1.5">
              {fixedAPR?.formatted || "0"}%
            </span>
          ) : (
            <Skeleton className="opacity-50" />
          )
        }
        description={`Fixed rate earned from opening longs, before fees and slippage are applied`}
      />
      <Stat
        label="LP APY (12 Hour)"
        value={
          lpApyStatus !== "loading" ? (
            <span className="flex items-center gap-1.5">
              {lpApy === 0 ? "No Data" : `${lpApy?.toFixed(2)}%`}
            </span>
          ) : (
            <Skeleton className="opacity-50" />
          )
        }
        description={`This represents the LP projected annual return based on the performance observed over the past 12 hours. It assumes the rate of return seen in this period continues consistently for an entire year.`}
      />
      <Stat
        description={`The amount of hy${hyperdrive.baseToken.symbol} (either longs or shorts) that have been traded in the last 24 hours. `}
        label="Volume (24h)"
        value={
          <AmountLabel
            symbol={`hy${hyperdrive.baseToken.symbol}`}
            value={formatCompact({
              value: totalVolume || 0n,
              decimals: hyperdrive.baseToken.decimals,
            })}
            tooltip={`Long volume: ${formatBalance({
              balance: longVolume || 0n,
              decimals: hyperdrive.baseToken.decimals,
              places: 0,
            })} hy${
              hyperdrive.baseToken.symbol
            } \n Short volume: ${formatBalance({
              balance: shortVolume || 0n,
              decimals: hyperdrive.baseToken.decimals,
              places: 0,
            })} hy${hyperdrive.baseToken.symbol}`}
          />
        }
      />
      <Stat
        label="Available Liquidity"
        description="The amount of capital that has been deployed by LPs to the pool"
        value={
          <AmountLabel
            icon={hyperdrive.baseToken.iconUrl || ""}
            symbol={hyperdrive.baseToken.symbol}
            value={formatCompact({
              value: liquidity?.liquidity || 0n,
              decimals: hyperdrive.baseToken.decimals,
            })}
            tooltip={`${formatBalance({
              balance: liquidity?.liquidity || 0n,
              decimals: hyperdrive.baseToken.decimals,
              places: 0,
            })} ${hyperdrive.baseToken.symbol}`}
          />
        }
      />
    </div>
  );
}

function AmountLabel({
  value,
  symbol,
  icon,
  tooltip,
}: {
  value: string;
  symbol: string;
  icon?: string;
  tooltip?: string;
}) {
  return (
    <p
      data-tip={tooltip}
      className={
        // Note: Tooltip-bottom not wrapping properly. See: https://github.com/saadeghi/daisyui/issues/84#issuecomment-1444067972
        "daisy-tooltip daisy-tooltip-bottom flex flex-row items-center justify-start before:whitespace-pre-wrap before:font-normal before:content-[attr(data-tip)]"
      }
    >
      {value}
      <span className="ml-1">{symbol}</span>
      {icon ? (
        <img src={icon} className="ml-1 h-8 rounded-full  p-1" />
      ) : undefined}
    </p>
  );
}
