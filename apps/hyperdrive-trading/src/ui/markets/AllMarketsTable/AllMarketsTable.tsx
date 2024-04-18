import { ReactElement } from "react";
import { useIsTailwindSmallScreen } from "src/ui/base/mediaBreakpoints";
import { AllMarketsTableDesktop } from "src/ui/markets/AllMarketsTable/AllMarketsTableDesktop";
import { AllMarketsTableMobile } from "src/ui/markets/AllMarketsTable/AllMarketsTableMobile";

export function AllMarketsTable(): ReactElement {
  const isTailwindSmallScreen = useIsTailwindSmallScreen();
  return (
    <div className="flex w-full flex-col items-center">
      <h3 className="gradient-text mb-8 text-center">Available Markets</h3>
      <div className="daisy-card daisy-card-bordered flex w-full md:w-auto md:p-6">
        {isTailwindSmallScreen ? (
          <AllMarketsTableMobile />
        ) : (
          <AllMarketsTableDesktop />
        )}
      </div>
    </div>
  );
}
