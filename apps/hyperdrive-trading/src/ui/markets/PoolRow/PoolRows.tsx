import { ChevronDownIcon } from "@heroicons/react/24/solid";
import { ReactElement, useState } from "react";
import { useAppConfig } from "src/ui/appconfig/useAppConfig";
import { PoolRow } from "src/ui/markets/PoolRow/PoolRow";
import { formatTermLength2 } from "src/ui/markets/formatTermLength";

export function PoolRows(): ReactElement {
  const appConfig = useAppConfig();
  const [selectedTerm, setSelectedTerm] = useState<bigint | null>(null);

  const allTerms = Array.from(
    new Set(
      appConfig.hyperdrives
        .map((hyperdrive) => hyperdrive.poolConfig.positionDuration)
        .sort((a, b) => Number(a) - Number(b)),
    ),
  );

  const filteredHyperdrives = selectedTerm
    ? appConfig.hyperdrives.filter(
        (hyperdrive) => hyperdrive.poolConfig.positionDuration === selectedTerm,
      )
    : appConfig.hyperdrives;

  return (
    <div className="flex w-full flex-col gap-5">
      <div>
        <div className="daisy-dropdown">
          <div
            tabIndex={0}
            role="button"
            className="daisy-btn flex items-center justify-center rounded-full"
          >
            {selectedTerm
              ? formatTermLength2(Number(BigInt(selectedTerm) * 1000n))
              : "All Terms"}
            <ChevronDownIcon className="ml-1 size-4" />
          </div>
          <ul
            tabIndex={0}
            className="daisy-menu daisy-dropdown-content z-[1] mt-2 w-40 gap-2 rounded-lg bg-base-100 p-4 shadow"
          >
            <li key="all" onClick={() => setSelectedTerm(null)}>
              <a>All Terms</a>
            </li>
            {allTerms.map((term) => (
              <li key={term} onClick={() => setSelectedTerm(term)}>
                <a>{formatTermLength2(Number(term * 1000n))}</a>
              </li>
            ))}
          </ul>
        </div>
      </div>
      {
        // Show the newest pools first
        [...filteredHyperdrives]
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
