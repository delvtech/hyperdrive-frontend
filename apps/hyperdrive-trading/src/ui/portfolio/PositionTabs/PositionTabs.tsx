import classNames from "classnames";
import { ReactElement } from "react";

export type PositionTab = "Buys" | "Shorts" | "LP";

export function PositionTabs({
  onTabClick,
  activePositionTab,
}: {
  onTabClick: (openOrClosedTab: PositionTab) => void;
  activePositionTab: PositionTab;
}): ReactElement {
  return (
    <div className="daisy-tabs">
      <button
        onClick={() => onTabClick("Buys")}
        className={classNames(
          "daisy-tab-lifted daisy-tab daisy-tab-sm border-b-base-100 md:daisy-tab-lg",
          {
            "daisy-tab-active": activePositionTab === "Buys",
          },
        )}
      >
        Buys
      </button>
      <button
        onClick={() => onTabClick("Shorts")}
        className={classNames(
          "daisy-tab-lifted daisy-tab daisy-tab-sm border-b-base-100 md:daisy-tab-lg",
          {
            "daisy-tab-active": activePositionTab === "Shorts",
          },
        )}
      >
        Shorts
      </button>
      <button
        onClick={() => onTabClick("LP")}
        className={classNames(
          "daisy-tab-lifted daisy-tab daisy-tab-sm border-b-base-100 md:daisy-tab-lg",
          {
            "daisy-tab-active": activePositionTab === "LP",
          },
        )}
      >
        LP
      </button>
    </div>
  );
}
