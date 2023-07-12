import classNames from "classnames";
import { ReactElement } from "react";

export type PositionTab = "Longs" | "Shorts" | "LP";

export function PositionTabs({
  setActivePositionTab,
  activePositionTab,
}: {
  setActivePositionTab: (openOrClosedTab: PositionTab) => void;
  activePositionTab: PositionTab;
}): ReactElement {
  return (
    <div className="daisy-tabs">
      <button
        onClick={() => setActivePositionTab("Longs")}
        className={classNames(
          "daisy-tab-lifted daisy-tab daisy-tab-sm border-b-base-100 md:daisy-tab-lg",
          {
            "daisy-tab-active glass": activePositionTab === "Longs",
          },
        )}
      >
        Longs
      </button>
      <button
        onClick={() => setActivePositionTab("Shorts")}
        className={classNames(
          "daisy-tab-lifted daisy-tab daisy-tab-sm border-b-base-100 md:daisy-tab-lg",
          {
            "daisy-tab-active glass": activePositionTab === "Shorts",
          },
        )}
      >
        Shorts
      </button>
      <button
        onClick={() => setActivePositionTab("LP")}
        className={classNames(
          "daisy-tab-lifted daisy-tab daisy-tab-sm border-b-base-100 md:daisy-tab-lg",
          {
            "daisy-tab-active glass": activePositionTab === "LP",
          },
        )}
      >
        LP
      </button>
    </div>
  );
}
