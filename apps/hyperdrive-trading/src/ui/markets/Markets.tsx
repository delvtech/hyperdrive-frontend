import { ReactElement, useMemo } from "react";
import { useAppConfig } from "src/ui/appconfig/useAppConfig";
import { AllMarketsTable } from "src/ui/markets/AllMarketsTable/AllMarketsTable";

export function Markets(): ReactElement {
  const { appConfig: config } = useAppConfig();

  const memoizedData = useMemo(
    () => config?.hyperdrives,
    [config?.hyperdrives],
  );
  if (!memoizedData?.length) {
    return <div>No markets found</div>;
  }

  return (
    <div className="flex min-h-screen w-full flex-col items-center bg-base-100 py-8 md:w-3/4">
      <div className="daisy-hero max-w-6xl justify-start text-center md:text-left">
        <div className="daisy-hero-content px-0">
          <div className="mx-6 max-w-3xl md:mx-0">
            <span className="gradient-text mb-6 text-h2 font-bold md:text-h1">
              Hyperdrive Markets
            </span>
            <p className="mb-5 mt-3 text-neutral-content md:mb-16">
              Select a market below to start earning fixed or variable rate
              yield on the most trusted assets in DeFi.
            </p>
          </div>
        </div>
      </div>
      <AllMarketsTable />
    </div>
  );
}
