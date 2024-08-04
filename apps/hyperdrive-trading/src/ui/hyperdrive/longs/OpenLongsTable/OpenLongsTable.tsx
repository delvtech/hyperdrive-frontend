import type { HyperdriveConfig } from "@hyperdrive/appconfig";
import type { ReactElement } from "react";
import { useIsTailwindSmallScreen } from "src/ui/base/mediaBreakpoints";
import { OpenLongsTableDesktop } from "src/ui/hyperdrive/longs/OpenLongsTable/OpenLongsTableDesktop";
import { OpenLongsTableMobile } from "src/ui/hyperdrive/longs/OpenLongsTable/OpenLongsTableMobile";

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
