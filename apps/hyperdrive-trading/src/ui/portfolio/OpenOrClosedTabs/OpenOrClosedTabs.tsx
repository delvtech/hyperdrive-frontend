import classNames from "classnames";
import { ReactElement } from "react";

export type OpenOrClosedTab = "Open" | "Closed";
export function OpenOrClosedTabs({
  setActiveOpenOrClosedTab,
  activeOpenOrClosedTab,
}: {
  setActiveOpenOrClosedTab: (openOrClosedTab: OpenOrClosedTab) => void;
  activeOpenOrClosedTab: string;
}): ReactElement {
  return (
    <div className="daisy-tabs my-3 w-full justify-end ">
      <button
        onClick={() => setActiveOpenOrClosedTab("Open")}
        className={classNames("daisy-tab-bordered daisy-tab", {
          "daisy-tab-active": activeOpenOrClosedTab === "Open",
        })}
      >
        Open
      </button>
      <button
        onClick={() => setActiveOpenOrClosedTab("Closed")}
        className={classNames("daisy-tab-bordered daisy-tab", {
          "daisy-tab-active": activeOpenOrClosedTab === "Closed",
        })}
      >
        Closed
      </button>
    </div>
  );
}
