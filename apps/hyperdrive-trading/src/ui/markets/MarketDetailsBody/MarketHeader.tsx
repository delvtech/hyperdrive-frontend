import { HyperdriveConfig, findBaseToken } from "@hyperdrive/appconfig";
import { ReactElement } from "react";
import { useAppConfig } from "src/ui/appconfig/useAppConfig";
import { useCurrentLongPrice } from "src/ui/hyperdrive/longs/hooks/useCurrentLongPrice";
import { PriceBadges } from "src/ui/markets/MarketDetailsBody/PriceBadges";

export function MarketHeader({
  hyperdrive,
}: {
  hyperdrive: HyperdriveConfig;
}): ReactElement {
  const appConfig = useAppConfig();
  const { longPrice } = useCurrentLongPrice(hyperdrive.address);
  const baseToken = findBaseToken({
    baseTokenAddress: hyperdrive.baseToken,
    tokens: appConfig.tokens,
  });
  return (
    <div className="my-2 flex items-center gap-2 md:my-0">
      <div className="flex w-full flex-col items-start gap-1">
        <span className="gradient-text items-center text-h1 md:my-0">
          {hyperdrive.name}
        </span>
        {longPrice ? (
          <PriceBadges longPrice={longPrice} baseToken={baseToken} />
        ) : null}
      </div>
    </div>
  );
}
