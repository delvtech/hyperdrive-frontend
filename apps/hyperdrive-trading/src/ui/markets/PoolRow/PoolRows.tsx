import { ChevronDownIcon } from "@heroicons/react/24/solid";
import { ReactElement, useState } from "react";
import { useAppConfig } from "src/ui/appconfig/useAppConfig";
import { PoolRow } from "src/ui/markets/PoolRow/PoolRow";
import { formatTermLength2 } from "src/ui/markets/formatTermLength";

export function PoolRows(): ReactElement {
  const appConfig = useAppConfig();
  const [selectedTerm, setSelectedTerm] = useState<bigint | null>(null);
  const [selectedAssets, setSelectedAssets] = useState<string[]>([]);

  const allTerms = Array.from(
    new Set(
      appConfig.hyperdrives.map(
        (hyperdrive) => hyperdrive.poolConfig.positionDuration,
      ),
    ),
  ).sort((a, b) => Number(a) - Number(b));

  const allAssets = Array.from(
    new Set(appConfig.hyperdrives.map((hyperdrive) => hyperdrive.address)),
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

      {filteredHyperdrives
        .sort((a, b) => {
          // Show the newest pools first
          return (
            Number(b.initializationTimestamp) -
            Number(a.initializationTimestamp)
          );
        })
        .map((hyperdrive) => (
          <PoolRow
            key={`${hyperdrive.address}-${hyperdrive.chainId}`}
            hyperdrive={hyperdrive}
          />
        ))}
    </div>
  );
}
