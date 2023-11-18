import { ReactElement, useState } from "react";
import { useSearchParams } from "react-router-dom";
import { Hyperdrive } from "src/appconfig/types";
import { LongsFAQ } from "src/ui/hyperdrive/longs/LongsFAQ/LongsFAQ";
import { ClosedLongsTable } from "src/ui/portfolio/ClosedLongsTable/ClosedLongsTable";
import { OpenLongsTable } from "src/ui/portfolio/OpenLongsTable/OpenLongsTable";
import {
  OpenOrClosedTab,
  OpenOrClosedTabs,
} from "src/ui/portfolio/OpenLongsTable/OpenOrClosedTabs";

interface LongPositionsAndFaqTabsProps {
  hyperdrive: Hyperdrive;
}

export function LongPositionsAndFaqTabs({
  hyperdrive,
}: LongPositionsAndFaqTabsProps): ReactElement {
  const [searchParams] = useSearchParams();

  const activeOpenOrClosedTab =
    (searchParams.get("openOrClosed") as OpenOrClosedTab) || "Open";

  // TODO: Move this into route
  const [activeTab, setActiveTab] = useState<"positions" | "faq">("positions");
  return (
    <div className="flex flex-1 flex-col">
      {/* <div className="daisy-tabs mb-8 border-b">
        <button
          className={classNames(
            "daisy-tab daisy-tab-bordered daisy-tab-sm border-b-base-100 md:daisy-tab-lg",
            {
              "daisy-tab-active": activeTab === "positions",
            },
          )}
          onClick={() => setActiveTab("positions")}
        >
          <h5 className="mb-3 font-bold">Positions</h5>
        </button>

        <button
          className={classNames(
            "daisy-tab daisy-tab-bordered daisy-tab-sm border-b-base-100 md:daisy-tab-lg",
            {
              "daisy-tab-active": activeTab === "faq",
            },
          )}
          onClick={() => setActiveTab("faq")}
        >
          <h5 className="mb-3 font-bold">FAQ</h5>
        </button>
      </div> */}

      {(() => {
        switch (activeTab) {
          case "faq":
            return <LongsFAQ />;
          case "positions":
            return (
              <>
                <div className="mb-2 flex items-center justify-between">
                  <h5 className="mb-3 font-bold">Your positions</h5>
                  <OpenOrClosedTabs />
                </div>
                {activeOpenOrClosedTab === "Open" ? (
                  <OpenLongsTable hyperdrive={hyperdrive} />
                ) : (
                  <ClosedLongsTable hyperdrive={hyperdrive} />
                )}
              </>
            );
        }
      })()}
    </div>
  );
}
