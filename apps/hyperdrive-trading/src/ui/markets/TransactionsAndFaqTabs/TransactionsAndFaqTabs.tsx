import assertNever from "assert-never";
import classNames from "classnames";
import { Fragment, ReactElement, useState } from "react";
import { Hyperdrive } from "src/appconfig/types";
import {
  longFaqEntries,
  PositionFAQ,
} from "src/ui/hyperdrive/longs/LongsFAQ/LongsFAQ";
import { LPFaqEntries } from "src/ui/hyperdrive/lp/LPFAQ/LPFAQ";
import { shortsFaqEntries } from "src/ui/hyperdrive/shorts/ShortsFAQ/ShortsFAQ";
import { TransactionTable } from "src/ui/hyperdrive/TransactionTable/TransactionsTable";
import { useActivePositionType } from "src/ui/markets/hooks/useActivePositionType";

const TABS = ["Transactions", "FAQ"] as const;
export type Tab = typeof TABS[number];

export function TransactionAndFaqTabs({
  hyperdrive,
}: {
  hyperdrive: Hyperdrive;
}): ReactElement {
  const [activeTab, setActiveTab] = useState<Tab>("Transactions");
  const activePositionType = useActivePositionType();
  return (
    <div role="tablist" className="daisy-tabs daisy-tabs-lifted daisy-tabs-lg">
      {TABS.map((tab) => (
        <Fragment key={tab}>
          <input
            type="radio"
            name="transactions_and_faq_tab"
            role="tab"
            className={classNames("daisy-tab", {
              "font-bold": activeTab === tab,
            })}
            aria-label={tab}
            checked={activeTab === tab}
            onChange={() => {
              setActiveTab(tab);
            }}
          />
          <div
            role="tabpanel"
            className="daisy-tab-content rounded-box border-base-200 bg-base-100 p-6"
          >
            {(() => {
              // We render a content panel for each tab, however we only want to
              // render the active tab's content
              switch (activeTab) {
                case "FAQ":
                  if (tab === "FAQ") {
                    if (activePositionType === "Longs") {
                      return <PositionFAQ faqEntries={longFaqEntries} />;
                    }
                    if (activePositionType === "Shorts") {
                      return <PositionFAQ faqEntries={shortsFaqEntries} />;
                    }
                    if (activePositionType === "LP") {
                      return <PositionFAQ faqEntries={LPFaqEntries} />;
                    }
                  }
                  return null;
                case "Transactions":
                  if (tab === "Transactions") {
                    return <TransactionTable hyperdrive={hyperdrive} />;
                  }
                  return null;
                default:
                  assertNever(activeTab);
              }
            })()}
          </div>
        </Fragment>
      ))}
    </div>
  );
}
