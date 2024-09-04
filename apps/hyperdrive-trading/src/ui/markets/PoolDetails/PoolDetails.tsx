import { ArrowLeftIcon } from "@heroicons/react/16/solid";
import { Cog6ToothIcon } from "@heroicons/react/24/outline";
import { HyperdriveConfig } from "@hyperdrive/appconfig";
import { Link } from "@tanstack/react-router";
import { ReactElement } from "react";
import CustomBanner from "src/ui/base/components/CustomBanner";
import { useMarketState } from "src/ui/hyperdrive/hooks/useMarketState";
import { formatTermLength2 } from "src/ui/markets/formatTermLength";
import { PoolHeader } from "src/ui/markets/PoolDetails/PoolHeader";

export function PoolDetails({
  hyperdrive,
}: {
  hyperdrive: HyperdriveConfig;
}): ReactElement {
  const { marketState } = useMarketState({
    chainId: hyperdrive.chainId,
    hyperdriveAddress: hyperdrive.address,
  });

  return (
    <div className="flex w-[515px] flex-col gap-9">
      <div className="flex flex-col gap-4">
        <Link
          to="/"
          className="flex items-center py-2 text-xs font-semibold text-neutral-content"
        >
          <ArrowLeftIcon className="mr-1 size-3" />
          Back to home
        </Link>
        <PoolHeader hyperdrive={hyperdrive} />
        {marketState?.isPaused && (
          <CustomBanner description="This market has been paused. You may close your positions, but no new positions may be opened." />
        )}
      </div>
      <div className="flex justify-between">
        <div className="flex gap-4">
          <button className="daisy-btn daisy-btn-sm gap-2 rounded-full text-xs text-white">
            {formatTermLength2(
              Number(hyperdrive.poolConfig.positionDuration * 1000n),
            )}
            {
              // TODO: Implement the term picker here
            }
          </button>
          <button className="daisy-btn daisy-btn-md h-8 min-h-8 rounded-full text-md text-white">
            Long
          </button>
          <button className="daisy-btn daisy-btn-ghost daisy-btn-md h-8 min-h-8 rounded-full text-md font-normal text-inactive-tab">
            Short
          </button>
          <button className="daisy-btn daisy-btn-ghost daisy-btn-md h-8 min-h-8 rounded-full text-md font-normal text-inactive-tab">
            Supply
          </button>
        </div>
        <button className="daisy-btn daisy-btn-md h-8 min-h-8 rounded-full text-xs font-normal text-neutral-content">
          0.5% slippage <Cog6ToothIcon className="size-4" />
        </button>
      </div>
    </div>
  );
}
