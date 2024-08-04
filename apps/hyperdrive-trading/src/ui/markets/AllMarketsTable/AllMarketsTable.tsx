import type { ReactElement } from "react";
import { useIsTailwindSmallScreen } from "src/ui/base/mediaBreakpoints";
import { AllMarketsTableDesktop } from "src/ui/markets/AllMarketsTable/AllMarketsTableDesktop";
import { AllMarketsTableMobile } from "src/ui/markets/AllMarketsTable/AllMarketsTableMobile";

export function AllMarketsTable(): ReactElement {
  const isTailwindSmallScreen = useIsTailwindSmallScreen();

  return isTailwindSmallScreen ? (
    <AllMarketsTableMobile />
  ) : (
    <AllMarketsTableDesktop />
  );
}
