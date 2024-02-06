import { ReactElement, useMemo } from "react";
import { useAppConfigOld } from "src/ui/appconfig/useAppConfigOld";
import { AllMarketsTable } from "src/ui/markets/AllMarketsTable/AllMarketsTable";

export function Markets(): ReactElement {
  const { appConfig: config } = useAppConfigOld();

  const memoizedData = useMemo(
    () => config?.hyperdrives,
    [config?.hyperdrives],
  );
  if (!memoizedData?.length) {
    return <div>No markets found</div>;
  }

  return (
    <div className="flex min-h-screen w-full flex-col items-center bg-base-100 py-8">
      <div className="daisy-hero max-w-6xl justify-start text-center lg:text-left">
        <div className="daisy-hero-content px-0">
          <div className="mx-6 max-w-3xl ">
            <span className="gradient-text mb-6 text-h2 font-bold lg:text-h1">
              Hyperdrive Markets
            </span>
            <p className="mb-5 mt-3 text-neutral-content lg:mb-16">
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
