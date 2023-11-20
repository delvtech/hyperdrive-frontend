import { ReactElement, useMemo } from "react";
import { useAppConfig } from "src/ui/appconfig/useAppConfig";
import { MarketsTable } from "src/ui/markets/MarketsTable/MarketsTable";

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
    <div className="flex flex-col items-center bg-base-100 py-8 px-4">
      <div className="daisy-hero max-w-6xl justify-start">
        <div className="daisy-hero-content text-start">
          <div className="max-w-2xl">
            <span className="mb-5  text-h3 font-bold">
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
      <MarketsTable markets={memoizedData} />
    </div>
  );
}
