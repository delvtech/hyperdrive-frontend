import { HyperdriveConfig, findBaseToken } from "@hyperdrive/appconfig";
import { ReactElement } from "react";
import Skeleton from "react-loading-skeleton";
import { useAppConfig } from "src/ui/appconfig/useAppConfig";
import { useCurrentLongPrice } from "src/ui/hyperdrive/longs/hooks/useCurrentLongPrice";
import { PriceBadges } from "src/ui/markets/MarketDetailsBody/PriceBadges";

export function MarketHeader({
  hyperdrive,
}: {
  hyperdrive: HyperdriveConfig;
}): ReactElement {
  const appConfig = useAppConfig();
  const { longPrice, longPriceStatus } = useCurrentLongPrice(
    hyperdrive.address,
  );
  const baseToken = findBaseToken({
    baseTokenAddress: hyperdrive.baseToken,
    tokens: appConfig.tokens,
  });
  return (
    <div className="my-2 flex items-center gap-2 md:my-0">
      <div className="flex w-full flex-col items-start gap-1">
        <h1 className="gradient-text items-center md:my-0">
          {hyperdrive.name}
        </h1>
        {longPrice && longPriceStatus === "success" ? (
          <PriceBadges longPrice={longPrice} baseToken={baseToken} />
        ) : (
          <div className="flex w-full flex-row gap-8">
            <Skeleton className="h-8 w-64" />
            <Skeleton className="h-8 w-64" />
          </div>
        )}
      </div>
    </div>
  );
}
