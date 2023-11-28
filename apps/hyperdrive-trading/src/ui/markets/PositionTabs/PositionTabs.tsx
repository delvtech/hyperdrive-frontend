import classNames from "classnames";
import { ReactElement } from "react";

export type PositionTab = "Longs" | "Shorts" | "LP" | "Transactions" | "FAQ";

export function PositionTabs({
  onTabClick,
  activePositionTab,
}: {
  onTabClick: (openOrClosedTab: PositionTab) => void;
  activePositionTab: PositionTab;
}): ReactElement {
  return (
    <div className="daisy-tabs ">
      {(["Longs", "Shorts", "LP", "Transactions", "FAQ"] as PositionTab[]).map(
        (positionTab) => (
          <button
            key={positionTab}
            onClick={() => onTabClick(positionTab)}
            className={classNames(
              "daisy-tab-bordered daisy-tab daisy-tab-sm border-b-base-100 md:daisy-tab-lg",
              {
                "daisy-tab-active font-bold": activePositionTab === positionTab,
              },
            )}
          >
            <h5>{positionTab}</h5>
          </button>
        ),
      )}
    </div>
  );
}
