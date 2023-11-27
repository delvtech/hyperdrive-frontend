import assertNever from "assert-never";
import classNames from "classnames";
import { ReactElement, ReactNode, useState } from "react";
import { Well } from "src/ui/base/components/Well/Well";

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
  type TabId = "positions" | "faq";

  const [activeTab, setActiveTab] = useState<TabId>("positions");

  const detailsTabClassName =
    "daisy-tab daisy-tab-bordered daisy-tab-sm border-b-base-100 md:daisy-tab-lg";

  return (
    <div className="mt-2 flex flex-col gap-10">
      <div className="flex flex-col gap-16 lg:flex-row">
        {/* positions and faq tabs */}
        <div className="flex flex-1 flex-col">
          <div className="mb-2 flex flex-col">
            <div className="daisy-tabs mb-8 border-b">
              <button
                className={classNames(detailsTabClassName, {
                  "daisy-tab-active": activeTab === "positions",
                })}
                onClick={() => setActiveTab("positions")}
              >
                <h5 className="font-bold">{positionsLabel}</h5>
              </button>
              <button
                className={classNames(detailsTabClassName, {
                  "daisy-tab-active": activeTab === "faq",
                })}
                onClick={() => setActiveTab("faq")}
              >
                <h5 className="font-bold">FAQ</h5>
              </button>
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
