import type { ReactElement } from "react";
import { useAppConfig } from "src/ui/appconfig/useAppConfig";
import { AllMarketsTable } from "src/ui/markets/AllMarketsTable/AllMarketsTable";

export function Markets(): ReactElement {
  const appConfig = useAppConfig();

  if (!appConfig?.hyperdrives.length) {
    return <div>No markets found</div>;
  }

  return (
    <div className="flex min-h-screen w-full flex-col items-center bg-base-100 py-8">
      <div className="daisy-hero max-w-6xl justify-start text-center lg:text-left">
        <div className="daisy-hero-content px-0">
          <div className="mx-6 max-w-3xl ">
            <h1 className="gradient-text mb-6 font-bold text-h2 lg:text-h1">
              Hyperdrive Markets
            </h1>
            <p className="mt-3 mb-5 text-neutral-content lg:mb-16">
              Select from the markets below to start earning fixed or variable
              rates on the most trusted assets in DeFi.
            </p>
          </div>
        </div>
      </div>
      <AllMarketsTable />
    </div>
  );
}
