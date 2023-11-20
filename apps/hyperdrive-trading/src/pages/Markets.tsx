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
    <div className="flex flex-col items-center gap-10 bg-base-100 py-8 px-4">
      <MarketsTable markets={memoizedData} />
    </div>
  );
}
