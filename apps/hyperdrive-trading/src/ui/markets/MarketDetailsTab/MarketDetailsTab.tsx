import assertNever from "assert-never";
import classNames from "classnames";
import { ReactElement, ReactNode, useState } from "react";
import { Well } from "src/ui/base/components/Well/Well";

const MARKET_DETAILS_TABS = ["positions", "faq"] as const;
type TabId = (typeof MARKET_DETAILS_TABS)[number];

/**
 * Layout component for the LongsTab, ShortsTab, and LpTab
 */
export function MarketDetailsTab({
  positionsLabel,
  positions,
  faq,
  transactionForm,
  transactionFormHeading,
}: {
  positionsLabel: string;
  positions: ReactNode;
  faq: ReactNode;
  transactionForm: ReactNode;
  transactionFormHeading: string;
}): ReactElement {
  const [activeTab, setActiveTab] = useState<TabId>("positions");

  return (
    <div className="mt-2 flex flex-col gap-10">
      <div className="flex flex-col gap-16 lg:flex-row">
        <div className="flex flex-1 flex-col">
          {/* positions and faq tabs */}
          <div className="flex flex-col">
            <div
              className="daisy-tabs daisy-tabs-bordered daisy-tabs-sm mb-8 flex border-b "
              role="tablist"
            >
              {MARKET_DETAILS_TABS.map((tabId) => (
                <button
                  key={tabId}
                  className={classNames("daisy-tab px-8 pb-8", {
                    "daisy-tab-active": activeTab === tabId,
                  })}
                  onClick={() => setActiveTab(tabId)}
                >
                  <h5 className="font-bold">
                    {(() => {
                      switch (tabId) {
                        case "faq":
                          return "FAQ";
                        case "positions":
                          return positionsLabel;
                        default:
                          assertNever(tabId);
                      }
                    })()}
                  </h5>
                </button>
              ))}
            </div>

            {/* positions and faq tab content */}
            {(() => {
              switch (activeTab) {
                case "faq":
                  return faq;
                case "positions":
                  return positions;
                default:
                  return assertNever(activeTab);
              }
            })()}
          </div>
        </div>

        {/* transaction form */}
        <div className="max-w-sm">
          <h5 className="mb-3 font-bold">{transactionFormHeading}</h5>
          <Well>{transactionForm}</Well>
        </div>
      </div>
    </div>
  );
}
