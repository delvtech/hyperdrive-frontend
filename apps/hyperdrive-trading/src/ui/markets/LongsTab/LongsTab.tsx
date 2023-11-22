import classNames from "classnames";
import { ReactElement, useState } from "react";
import { useSearchParams } from "react-router-dom";
import { Hyperdrive } from "src/appconfig/types";
import { Well } from "src/ui/base/components/Well/Well";
import { LongsFAQ } from "src/ui/hyperdrive/longs/LongsFAQ/LongsFAQ";
import { OpenLongForm } from "src/ui/hyperdrive/longs/OpenLongForm/OpenLongForm";
import { ClosedLongsTable } from "src/ui/portfolio/ClosedLongsTable/ClosedLongsTable";
import { OpenClosedFilter } from "src/ui/portfolio/OpenClosedFilter/OpenClosedFilter";
import { OpenLongsTable } from "src/ui/portfolio/OpenLongsTable/OpenLongsTable";
import { OpenOrClosedTab } from "src/ui/portfolio/PositionsSection/PositionsSection";

export function LongsTab({
  hyperdrive,
}: {
  hyperdrive: Hyperdrive;
}): ReactElement {
  const [searchParams] = useSearchParams();
  const activeOpenOrClosedTab =
    (searchParams.get("openOrClosed") as OpenOrClosedTab) || "Open";

  const [activeTab, setActiveTab] = useState<"positions" | "faq">("positions");

  return (
    <div className="mt-2 flex flex-col gap-10">
      <div className="flex gap-16">
        {/* positions and faq */}
        <div className="flex flex-1 flex-col">
          <div className="mb-2 flex flex-col">
            <div className="daisy-tabs mb-8 border-b">
              <button
                className={classNames(
                  "daisy-tab-bordered daisy-tab daisy-tab-sm border-b-base-100 md:daisy-tab-lg",
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
                  "daisy-tab-bordered daisy-tab daisy-tab-sm border-b-base-100 md:daisy-tab-lg",
                  {
                    "daisy-tab-active": activeTab === "faq",
                  },
                )}
                onClick={() => setActiveTab("faq")}
              >
                <h5 className="mb-3 font-bold">FAQ</h5>
              </button>
            </div>

            {(() => {
              switch (activeTab) {
                case "faq":
                  return <LongsFAQ />;
                case "positions":
                  return (
                    <div className="flex flex-col">
                      <div className="mb-2 flex items-center justify-between">
                        <OpenClosedFilter />
                      </div>
                      {activeOpenOrClosedTab === "Open" ? (
                        <OpenLongsTable hyperdrive={hyperdrive} />
                      ) : (
                        <ClosedLongsTable hyperdrive={hyperdrive} />
                      )}
                    </div>
                  );
              }
            })()}
          </div>
        </div>

        {/* form */}
        <div className="max-w-sm">
          <h5 className="mb-3 font-bold">Open long</h5>
          <Well>
            <OpenLongForm hyperdrive={hyperdrive} />
          </Well>
        </div>
      </div>
    </div>
  );
}
