import { HyperdriveConfig, findBaseToken } from "@hyperdrive/appconfig";
import { ReactElement } from "react";
import Skeleton from "react-loading-skeleton";
import { useAppConfig } from "src/ui/appconfig/useAppConfig";
import { Stat } from "src/ui/base/components/Stat";
import { formatBalance } from "src/ui/base/formatting/formatBalance";
import { formatCompact } from "src/ui/base/formatting/formatCompact";
import { useCurrentFixedAPR } from "src/ui/hyperdrive/hooks/useCurrentFixedAPR";
import { useLiquidity } from "src/ui/hyperdrive/hooks/useLiquidity";
import { useLpApy } from "src/ui/hyperdrive/hooks/useLpApy";
import { useTradingVolume } from "src/ui/hyperdrive/hooks/useTradingVolume";
import { useMockYieldSourceRate } from "src/ui/vaults/useMockYieldSourceRate";
import { useBlockNumber } from "wagmi";
export function MarketStats({
  hyperdrive,
}: {
  hyperdrive: HyperdriveConfig;
}): ReactElement {
  const { data: currentBlockNumber } = useBlockNumber();
  const appConfig = useAppConfig();
  const baseToken = findBaseToken({
    baseTokenAddress: hyperdrive.baseToken,
    tokens: appConfig.tokens,
  });

  const { totalVolume, longVolume, shortVolume } = useTradingVolume(
    hyperdrive.address,
    currentBlockNumber,
  );

  const { liquidity } = useLiquidity({
    hyperdriveAddress: hyperdrive.address,
    decimals: baseToken.decimals,
  });
  const { fixedAPR } = useCurrentFixedAPR(hyperdrive.address);
  const { lpApy, lpApyStatus } = useLpApy(hyperdrive.address);

  const { vaultRate } = useMockYieldSourceRate({
    vaultAddress: hyperdrive.sharesToken,
  });

  return (
    <div className="grid grid-cols-2 gap-6 border-y border-neutral-content/20 py-8 sm:grid-cols-3 md:grid-cols-5">
      <Stat
        label="Yield Source APY"
        value={
          <div className="flex flex-row">{vaultRate?.formatted || 0}%</div>
        }
        description={`The yield source backing the hy${baseToken.symbol} in this pool`}
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
        description="Fixed rate earned from opening longs, before fees and slippage are applied"
      />
      <Stat
        label="LP APY (12 Hour)"
        value={
          lpApyStatus !== "loading" ? (
            <span className="flex items-center gap-1.5">
              {lpApy === undefined ? "no data" : `${lpApy?.toFixed(2)}%`}
            </span>
          ) : (
            <Skeleton className="w-20" />
          )
        }
        description={`The LP's annual return projection assuming the past 12-hour performance rate continues for a year.`}
      />
      <Stat
        description={`The amount of hy${
          baseToken.symbol
        } (either longs or shorts) that have been traded in the last 24 hours \n\nLong volume: ${formatBalance(
          {
            balance: longVolume || 0n,
            decimals: baseToken.decimals,
            places: 0,
          },
        )} hy${baseToken.symbol} \nShort volume: ${formatBalance({
          balance: shortVolume || 0n,
          decimals: baseToken.decimals,
          places: 0,
        })} hy${baseToken.symbol}`}
        label="Volume (24h)"
        value={
          <AmountLabel
            symbol={`hy${baseToken.symbol}`}
            value={formatCompact({
              value: totalVolume || 0n,
              decimals: baseToken.decimals,
            })}
          />
        }
      />
      <Stat
        label="Available Liquidity"
        description={`The amount of capital that has been deployed by LPs in the pool.`}
        value={
          <AmountLabel
            icon={baseToken.iconUrl || ""}
            symbol={baseToken.symbol}
            value={formatCompact({
              value: liquidity?.liquidity || 0n,
              decimals: baseToken.decimals,
            })}
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
