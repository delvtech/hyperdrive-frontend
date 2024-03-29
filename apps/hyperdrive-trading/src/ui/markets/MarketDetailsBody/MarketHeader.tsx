import {
  HyperdriveConfig,
  findBaseToken,
  findYieldSourceToken,
} from "@hyperdrive/appconfig";
import { ReactElement } from "react";
import { useAppConfig } from "src/ui/appconfig/useAppConfig";
import { PriceBadges } from "src/ui/markets/MarketDetailsBody/PriceBadges";

export function MarketHeader({
  hyperdrive,
}: {
  hyperdrive: HyperdriveConfig;
}): ReactElement {
  const appConfig = useAppConfig();
  const baseToken = findBaseToken({
    baseTokenAddress: hyperdrive.baseToken,
    tokens: appConfig.tokens,
  });
  const sharesToken = findYieldSourceToken({
    yieldSourceTokenAddress: hyperdrive.sharesToken,
    tokens: appConfig.tokens,
  });
  return (
    <div className="my-2 flex items-center gap-2 md:my-0">
      <div className="flex w-full flex-col items-start gap-1">
        <h1 className="gradient-text items-center md:my-0">
          <div className="daisy-avatar-group mr-1 inline -space-x-6 rtl:space-x-reverse">
            <div className="daisy-avatar">
              <div className="w-12">
                <img src={baseToken.iconUrl} />
              </div>
            </div>
            <div className="daisy-avatar">
              <div className="w-12">
                <img src={sharesToken.iconUrl} />
              </div>
            </div>
          </div>
          {hyperdrive.name}
        </h1>
        <PriceBadges hyperdrive={hyperdrive} />
      </div>
    </div>
  );
}
