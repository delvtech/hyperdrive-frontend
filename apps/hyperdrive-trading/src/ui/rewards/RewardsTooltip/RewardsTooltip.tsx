import { getHyperdriveConfig } from "@delvtech/hyperdrive-appconfig";
import { PropsWithChildren, ReactNode } from "react";
import { calculateMarketYieldMultiplier } from "src/hyperdrive/calculateMarketYieldMultiplier";
import { useAppConfigForConnectedChain } from "src/ui/appconfig/useAppConfigForConnectedChain";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "src/ui/base/components/Popover/Popover";
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
  children,
}: PropsWithChildren<{
  hyperdriveAddress: Address;
  position: "addLiquidity" | "openShort";
  baseRate: bigint | undefined;
  netRate: bigint | undefined;
  chainId: number;
}>): ReactNode {
  const appConfig = useAppConfigForConnectedChain();
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
    <Popover>
      <PopoverTrigger className="flex items-center whitespace-nowrap">
        {children}
      </PopoverTrigger>
      <PopoverContent className="h-fit w-72 rounded-box bg-base-200 px-3 py-2 shadow-2xl">
        <RewardsTooltipContent
          chainId={chainId}
          position={position}
          hyperdriveAddress={hyperdriveAddress}
          baseRate={baseRate}
          netRate={netRate}
        />
      </PopoverContent>
    </Popover>
  );
}
