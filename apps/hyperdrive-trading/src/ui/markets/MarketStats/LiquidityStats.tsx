import { type HyperdriveConfig, findBaseToken } from "@hyperdrive/appconfig";
import type { ReactElement } from "react";
import Skeleton from "react-loading-skeleton";
import { useAppConfig } from "src/ui/appconfig/useAppConfig";
import { Stat } from "src/ui/base/components/Stat";
import { Well } from "src/ui/base/components/Well/Well";
import { formatBalance } from "src/ui/base/formatting/formatBalance";
import { formatCompact } from "src/ui/base/formatting/formatCompact";
import { useIsTailwindSmallScreen } from "src/ui/base/mediaBreakpoints";
import { useIdleLiquidity } from "src/ui/hyperdrive/hooks/useIdleLiquidity";
import { usePresentValue } from "src/ui/hyperdrive/hooks/usePresentValue";
import { useTradingVolume } from "src/ui/hyperdrive/hooks/useTradingVolume";
import { useMaxLong } from "src/ui/hyperdrive/longs/hooks/useMaxLong";
import { useMaxShort } from "src/ui/hyperdrive/shorts/hooks/useMaxShort";
import { useBlockNumber } from "wagmi";
export function LiquidityStats({
  hyperdrive,
}: {
  hyperdrive: HyperdriveConfig;
}): ReactElement {
  const isTailwindSmallScreen = useIsTailwindSmallScreen();
  const { data: currentBlockNumber } = useBlockNumber();
  const appConfig = useAppConfig();
  const baseToken = findBaseToken({
    baseTokenAddress: hyperdrive.baseToken,
    tokens: appConfig.tokens,
  });

  const { totalVolume, longVolume, shortVolume, tradingVolumeStatus } =
    useTradingVolume(hyperdrive.address, currentBlockNumber);

  const { presentValue, presentValueStatus } = usePresentValue({
    hyperdriveAddress: hyperdrive.address,
  });
  const { maxBondsOut: maxLong } = useMaxLong({
    hyperdriveAddress: hyperdrive.address,
  });
  const { maxBondsOut: maxShort } = useMaxShort({
    hyperdriveAddress: hyperdrive.address,
  });

  const { idleLiquidity, idleLiquidityStatus } = useIdleLiquidity({
    hyperdriveAddress: hyperdrive.address,
  });

  return (
    <Well transparent block>
      <div className="space-y-8">
        <h5 className="flex text-neutral-content">Liquidity</h5>
        <div className="flex gap-6 lg:gap-8">
          <Stat
            label={`Total (${baseToken.symbol})`}
            value={
              presentValueStatus === "loading" && presentValue === undefined ? (
                <Skeleton className="w-20" />
              ) : (
                <AmountLabel
                  icon={baseToken.iconUrl || ""}
                  symbol={baseToken.symbol}
                  value={formatCompact({
                    value: presentValue || 0n,
                    decimals: baseToken.decimals,
                  })}
                />
              )
            }
            description={`The present value in the pool`}
            tooltipPosition={isTailwindSmallScreen ? "right" : "bottom"}
          />
          <Stat
            label={`Idle (${baseToken.symbol})`}
            description={`The idle liquidity available for opening Longs and Shorts, and exiting LP positions\n\nMax Long: ${formatBalance({ balance: maxLong || 0n, decimals: baseToken.decimals })} hy${baseToken.symbol}\nMax Short: ${formatBalance({ balance: maxShort || 0n, decimals: baseToken.decimals })} hy${baseToken.symbol}`}
            value={
              idleLiquidityStatus === "loading" &&
              idleLiquidity === undefined ? (
                <Skeleton className="w-20" />
              ) : (
                <AmountLabel
                  icon={baseToken.iconUrl || ""}
                  symbol={baseToken.symbol}
                  value={formatCompact({
                    value: idleLiquidity || 0n,
                    decimals: baseToken.decimals,
                  })}
                />
              )
            }
          />
          <Stat
            description={`The amount of hy${
              baseToken.symbol
            } traded in the last 24 hours.\n\nLong volume: ${formatBalance({
              balance: longVolume || 0n,
              decimals: baseToken.decimals,
              places: baseToken.places,
            })} hy${baseToken.symbol} \nShort volume: ${formatBalance({
              balance: shortVolume || 0n,
              decimals: baseToken.decimals,
              places: baseToken.places,
            })} hy${baseToken.symbol}`}
            label={`24h Volume (hy${baseToken.symbol})`}
            value={
              tradingVolumeStatus === "loading" && totalVolume === undefined ? (
                <Skeleton className="w-20" />
              ) : (
                <AmountLabel
                  symbol={`hy${baseToken.symbol}`}
                  value={formatCompact({
                    value: totalVolume || 0n,
                    decimals: baseToken.decimals,
                  })}
                />
              )
            }
            tooltipPosition={isTailwindSmallScreen ? "left" : "bottom"}
          />
        </div>
      </div>
    </Well>
  );
}

function AmountLabel({
  value,
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
      {icon ? <img src={icon} className="h-7 rounded-full  p-1" /> : undefined}
      {value}
    </p>
  );
}
