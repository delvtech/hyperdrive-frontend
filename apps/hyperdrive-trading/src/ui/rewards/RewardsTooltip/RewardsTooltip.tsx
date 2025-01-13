import { appConfig, getHyperdriveConfig } from "@delvtech/hyperdrive-appconfig";
import * as Tooltip from "@radix-ui/react-tooltip";
import { PropsWithChildren, ReactNode } from "react";
import { calculateMarketYieldMultiplier } from "src/hyperdrive/calculateMarketYieldMultiplier";
import { useCurrentLongPrice } from "src/ui/hyperdrive/longs/hooks/useCurrentLongPrice";
import { useAddLiquidityRewards } from "src/ui/rewards/hooks/useAddLiquidityRewards";
import { useOpenShortRewards } from "src/ui/rewards/hooks/useOpenShortRewards";
import { RewardsTooltipContent } from "src/ui/rewards/RewardsTooltip/RewardsTooltipContent";
import { Address } from "viem";
export function RewardsTooltip({
  hyperdriveAddress,
  position,
  chainId,
  baseRate,
  netRate,
  showMiles,
  children,
}: PropsWithChildren<{
  hyperdriveAddress: Address;
  position: "addLiquidity" | "openShort";
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

  // Get the correct rewards for the given position
  const { rewards: shortRewards } = useOpenShortRewards({
    hyperdriveConfig: hyperdrive,
    enabled: position === "openShort",
  });
  const { rewards: addLiquidityRewards } = useAddLiquidityRewards({
    hyperdriveConfig: hyperdrive,
    enabled: position === "addLiquidity",
  });
  const rewards = position === "openShort" ? shortRewards : addLiquidityRewards;

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

  if (!rewards?.length && multiplierLabel && (!netRate || !baseRate)) {
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
              position={position}
              hyperdriveAddress={hyperdriveAddress}
              baseRate={baseRate}
              netRate={netRate}
            />
          </Tooltip.Content>
        </Tooltip.Portal>
      </Tooltip.Root>
    </Tooltip.Provider>
  );
}
