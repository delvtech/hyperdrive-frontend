import { ReactElement } from "react";
import { useAppConfig } from "src/ui/appconfig/useAppConfig";
import { PoolRow } from "src/ui/markets/PoolRow/PoolRow";

export function PoolRows(): ReactElement {
  const appConfig = useAppConfig();
  return (
    <div className="flex w-full flex-col gap-5">
      {
        // Show the newest pools first
        [...appConfig.hyperdrives]
          .sort((a, b) => {
            return (
              Number(b.initializationTimestamp) -
              Number(a.initializationTimestamp)
            );
          })
          .map((hyperdrive) => (
            <PoolRow
              // Combine address and chainId for a unique key, as addresses may
              // overlap across chains (e.g. cloudchain and mainnet)
              key={`${hyperdrive.address}-${hyperdrive.chainId}`}
              hyperdrive={hyperdrive}
            />
          ))
      }
    </div>
  );
}
