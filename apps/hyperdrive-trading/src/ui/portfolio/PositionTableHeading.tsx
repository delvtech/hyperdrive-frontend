import { HyperdriveConfig } from "@delvtech/hyperdrive-appconfig";
import { ReactElement, ReactNode } from "react";
import { AssetStack } from "src/ui/markets/AssetStack";
import { PortfolioTableHeading } from "src/ui/portfolio/PortfolioTableHeading";

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
    <PortfolioTableHeading
      leftElement={
        <div className="flex items-center gap-1">
          <AssetStack
            hyperdriveAddress={hyperdrive.address}
            hyperdriveChainId={hyperdrive.chainId}
          />
          <p className="font-chakraPetch text-h4">
            {hyperdriveName ?? hyperdrive.name}
          </p>
        </div>
      }
      rightElement={rightElement}
    />
  );
}
