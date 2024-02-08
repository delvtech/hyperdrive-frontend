import { HyperdriveConfig } from "@hyperdrive/appconfig";
import { ReactElement } from "react";
import { useIsTailwindSmallScreen } from "src/ui/base/mediaBreakpoints";
import { OpenLongsTableDesktop } from "src/ui/portfolio/OpenLongsTable/OpenLongsTableDesktop";
import { OpenLongsTableMobile } from "src/ui/portfolio/OpenLongsTable/OpenLongsTableMobile";

export function OpenLongsTable({
  hyperdrive,
}: {
  hyperdrive: HyperdriveConfig;
}): ReactElement {
  const isSmallScreenView = useIsTailwindSmallScreen();
  if (isSmallScreenView) {
    return <OpenLongsTableMobile hyperdrive={hyperdrive} />;
  }
  return <OpenLongsTableDesktop hyperdrive={hyperdrive} />;
}
