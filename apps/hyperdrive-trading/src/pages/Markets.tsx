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
    <div className="flex min-h-screen w-full flex-col items-center bg-base-100 py-8 px-4 md:w-3/4">
      <div className="daisy-hero max-w-6xl justify-start text-center md:text-left">
        <div className="daisy-hero-content px-0">
          <div className="max-w-2xl">
            <span className="mb-5 text-h3 font-bold">
              Explore Hyperdrive Markets
            </span>
            <p className="mb-5">
              Dive into our extensive table of pools, each offering unique term
              lengths to align with your strategic trading goals. Select the
              perfect pool for your next investment move in the dynamic world of
              Hyperdrive.
            </p>
          </div>
        </div>
      </div>
      <AllMarketsTable />
    </div>
  );
}
