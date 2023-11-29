import classNames from "classnames";
import { ReactElement } from "react";

const POSITION_TABS = ["Longs", "Shorts", "LP", "Transactions"] as const;
export type PositionTab = (typeof POSITION_TABS)[number];

export function PositionTabs({
  onTabClick,
  activePositionTab,
}: {
  onTabClick: (openOrClosedTab: PositionTab) => void;
  activePositionTab: PositionTab;
}): ReactElement {
  return (
    <div className="daisy-tabs daisy-tabs-bordered " role="tablist">
      {POSITION_TABS.map((positionTab) => (
        <button
          key={positionTab}
          onClick={() => onTabClick(positionTab)}
          className={classNames(
            "daisy-tab-sm md:daisy-tab-lg daisy-tab flex h-full pb-1",
            {
              "daisy-tab-active font-bold ": activePositionTab === positionTab,
            },
          )}
        >
          <h5>{positionTab}</h5>
        </button>
      ))}
    </div>
  );
}
