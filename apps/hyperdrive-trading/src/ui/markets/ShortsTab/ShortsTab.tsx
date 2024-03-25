import { HyperdriveConfig } from "@hyperdrive/appconfig";
import { ReactElement } from "react";
import { ClosedShortsTable } from "src/ui/hyperdrive/shorts/ClosedShortsTable/ClosedShortsTable";
import { OpenShortModalButton } from "src/ui/hyperdrive/shorts/OpenShortModalButton/OpenShortModalButton";
import { OpenShortsTable } from "src/ui/hyperdrive/shorts/OpenShortsTable/OpenShortsTable";
import { useOpenShorts } from "src/ui/hyperdrive/shorts/hooks/useOpenShorts";
import { MarketDetailsTab } from "src/ui/markets/MarketDetailsTab/MarketDetailsTab";
import { OpenClosedFilter } from "src/ui/markets/OpenClosedFilter/OpenClosedFilter";
import { useOpenOrClosedSearchParam } from "src/ui/markets/hooks/useOpenOrClosedSearchParam";
import { useAccount } from "wagmi";

export function ShortsTab({
  hyperdrive,
}: {
  hyperdrive: HyperdriveConfig;
}): ReactElement {
  const activeOpenOrClosedTab = useOpenOrClosedSearchParam();
  const { address: account } = useAccount();
  const { openShorts } = useOpenShorts({
    account,
    hyperdriveAddress: hyperdrive.address,
  });
  return (
    <MarketDetailsTab
      positions={
        <div className="flex flex-col">
          <div className="flex items-center justify-between px-6 py-8">
            <h5 className="font-medium">Short Positions</h5>
            <div className="flex items-center gap-4">
              {account && openShorts?.length ? (
                <OpenShortModalButton
                  modalId="open-short"
                  hyperdrive={hyperdrive}
                />
              ) : null}
              <OpenClosedFilter />
            </div>
          </div>
          {activeOpenOrClosedTab === "Open" ? (
            <OpenShortsTable hyperdrive={hyperdrive} />
          ) : (
            <ClosedShortsTable hyperdrive={hyperdrive} />
          )}
        </div>
      }
    />
  );
}
