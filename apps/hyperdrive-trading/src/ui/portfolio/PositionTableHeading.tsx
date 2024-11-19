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
        <>
          <AssetStack
            hyperdriveAddress={hyperdrive.address}
            hyperdriveChainId={hyperdrive.chainId}
          />
          {hyperdriveName ?? hyperdrive.name}
        </>
      }
      rightElement={rightElement}
    />
  );
}
