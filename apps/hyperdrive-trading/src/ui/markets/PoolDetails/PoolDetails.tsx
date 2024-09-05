import { ArrowLeftIcon } from "@heroicons/react/16/solid";
import { HyperdriveConfig } from "@hyperdrive/appconfig";
import { Link, useSearch } from "@tanstack/react-router";
import { ReactElement } from "react";
import { useAppConfig } from "src/ui/appconfig/useAppConfig";
import CustomBanner from "src/ui/base/components/CustomBanner";
import { useMarketState } from "src/ui/hyperdrive/hooks/useMarketState";
import { OpenLongForm2 } from "src/ui/hyperdrive/longs/OpenLongForm/OpenLongForm2";
import { AddLiquidityForm } from "src/ui/hyperdrive/lp/AddLiquidityForm/AddLiquidityForm";
import { OpenShortForm } from "src/ui/hyperdrive/shorts/OpenShortForm/OpenShortForm";
import { AssetStack } from "src/ui/markets/AssetStack";
import { MARKET_DETAILS_ROUTE } from "src/ui/markets/routes";

export function PoolDetails({
  hyperdrive,
}: {
  hyperdrive: HyperdriveConfig;
}): ReactElement {
  const appConfig = useAppConfig();
  const { position: activePosition } = useSearch({
    from: MARKET_DETAILS_ROUTE,
  });
  // used to set the active position
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
        <h1 className="flex items-center gap-2 text-h2">
          <AssetStack hyperdriveAddress={hyperdrive.address} />
          {appConfig.yieldSources[hyperdrive.yieldSource].shortName}
        </h1>
        {marketState?.isPaused && (
          <CustomBanner description="This market has been paused. You may close your positions, but no new positions may be opened." />
        )}
      </div>
      {(() => {
        switch (activePosition) {
          case "longs":
            return <OpenLongForm2 hyperdrive={hyperdrive} />;
          case "shorts":
            return <OpenShortForm hyperdrive={hyperdrive} />;
          case "lp":
            return <AddLiquidityForm hyperdrive={hyperdrive} />;
        }
      })()}
    </div>
  );
}
