import { HyperdriveConfig } from "@hyperdrive/appconfig";
import { ReactElement } from "react";
import { PriceBadges } from "src/ui/markets/MarketDetailsBody/PriceBadges";

export function MarketHeader({
  hyperdrive,
}: {
  hyperdrive: HyperdriveConfig;
}): ReactElement {
  return (
    <div className="my-2 flex items-center gap-2 md:my-0">
      <div className="flex w-full flex-col items-start gap-1">
        <h1 className="gradient-text items-center md:my-0">
          {hyperdrive.name}
        </h1>
        <PriceBadges hyperdrive={hyperdrive} />
      </div>
    </div>
  );
}
