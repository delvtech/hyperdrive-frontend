import { HyperdriveConfig } from "@hyperdrive/appconfig";
import { ReactElement } from "react";
import { AssetStack } from "src/ui/markets/AssetStack";

export function PoolHeader({
  hyperdrive,
}: {
  hyperdrive: HyperdriveConfig;
}): ReactElement {
  return (
    <div className="my-2 flex items-center gap-2 md:my-0">
      <div className="flex w-full flex-col items-start gap-1">
        <h1 className="flex items-center text-h2 md:my-0">
          <AssetStack hyperdriveAddress={hyperdrive.address} />
          {hyperdrive.name}
        </h1>
      </div>
    </div>
  );
}
