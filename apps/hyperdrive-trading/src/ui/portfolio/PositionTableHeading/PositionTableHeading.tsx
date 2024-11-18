import { HyperdriveConfig } from "@delvtech/hyperdrive-appconfig";
import { ReactElement, ReactNode } from "react";
import { AssetStack } from "src/ui/markets/AssetStack";

export function PositionTableHeading({
  hyperdrive,
  hyperdriveName,
  rightElement,
}: {
  hyperdrive: HyperdriveConfig;
  /**
   * Optional name to override the name from the hyperdrive
   */
  hyperdriveName?: string;
  rightElement: ReactNode;
}): ReactElement {
  return (
    <div className="flex items-center justify-between">
      <div className="flex items-center gap-1 font-chakraPetch text-h4">
        <AssetStack
          hyperdriveAddress={hyperdrive.address}
          hyperdriveChainId={hyperdrive.chainId}
        />
        <p className="text-h4">{hyperdriveName ?? hyperdrive.name}</p>
      </div>
      {rightElement}
    </div>
  );
}
