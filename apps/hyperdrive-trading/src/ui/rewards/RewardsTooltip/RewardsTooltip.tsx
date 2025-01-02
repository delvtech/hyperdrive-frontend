import { appConfig, getHyperdriveConfig } from "@delvtech/hyperdrive-appconfig";
import * as Tooltip from "@radix-ui/react-tooltip";
import { PropsWithChildren, ReactNode } from "react";
import { calculateMarketYieldMultiplier } from "src/hyperdrive/calculateMarketYieldMultiplier";
import { useCurrentLongPrice } from "src/ui/hyperdrive/longs/hooks/useCurrentLongPrice";
import { RewardsTooltipContent } from "src/ui/rewards/RewardsTooltip/RewardsTooltipContent";
import { useRewards } from "src/ui/rewards/useRewards";
import { Address } from "viem";
export function RewardsTooltip({
  hyperdriveAddress,
  chainId,
  baseRate,
  netRate,
  showMiles,
  children,
}: PropsWithChildren<{
  hyperdriveAddress: Address;
  baseRate: bigint | undefined;
  netRate: bigint | undefined;
  /**
   * @deprecated This is a temporary prop that will be removed once appconfig
   * changes have been made to move rewards onto HyperdriveConfig based on
   * position type.
   */
  showMiles?: boolean;
  chainId: number;
}>): ReactNode {
  const hyperdrive = getHyperdriveConfig({
    hyperdriveAddress: hyperdriveAddress,
    hyperdriveChainId: chainId,
    appConfig,
  });
  const { rewards: appConfigRewards } = useRewards(hyperdrive);
  const { longPrice, longPriceStatus } = useCurrentLongPrice({
    chainId: hyperdrive.chainId,
    hyperdriveAddress: hyperdrive.address,
  });

  const multiplier =
    longPriceStatus === "success" && longPrice
      ? calculateMarketYieldMultiplier(longPrice)
      : null;
  const multiplierLabel = multiplier
    ? `${multiplier.format({ decimals: 1 })}x`
    : undefined;

  if (!appConfigRewards?.length && multiplierLabel && (!netRate || !baseRate)) {
    return (
      <div className="flex items-center whitespace-nowrap">{children}</div>
    );
  }

  return (
    <Tooltip.Provider>
      <Tooltip.Root>
        <Tooltip.Trigger className="flex items-center whitespace-nowrap">
          {children}
        </Tooltip.Trigger>
        <Tooltip.Portal>
          <Tooltip.Content
            className="z-20 h-fit w-72 rounded-box bg-base-200 px-3 py-2 shadow-2xl"
            sideOffset={5}
            collisionPadding={12}
          >
            <RewardsTooltipContent
              chainId={chainId}
              hyperdriveAddress={hyperdriveAddress}
              baseRate={baseRate}
              netRate={netRate}
              showMiles={showMiles}
            />
          </Tooltip.Content>
        </Tooltip.Portal>
      </Tooltip.Root>
    </Tooltip.Provider>
  );
}
