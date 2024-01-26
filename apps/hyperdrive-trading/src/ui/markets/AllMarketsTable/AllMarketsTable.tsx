import { ReactElement } from "react";
import { useIsTailwindSmallScreen } from "src/ui/base/mediaBreakpoints";
import { AllMarketsTableDesktop } from "src/ui/markets/AllMarketsTable/AllMarketsTableDesktop";
import { AllMarketsTableMobile } from "src/ui/markets/AllMarketsTable/AllMarketsTableMobile";

export function AllMarketsTable(): ReactElement {
  const isTailwindSmallScreen = useIsTailwindSmallScreen();
  return (
    <div className="flex w-full max-w-6xl flex-col items-center overflow-y-auto p-2 md:p-4">
      <h3 className="mb-5 w-full pl-1 text-center text-h5 text-neutral-content lg:text-left">
        Available Markets
      </h3>
      <div className="daisy-card daisy-card-bordered flex w-full md:p-6">
        {isTailwindSmallScreen ? (
          <AllMarketsTableMobile />
        ) : (
          <AllMarketsTableDesktop />
        )}
      </div>
    </div>
  );
}
