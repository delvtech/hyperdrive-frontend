import classNames from "classnames";
import { ReactElement } from "react";
import { useSearchParams } from "react-router-dom";

type OpenOrClosedTab = "Open" | "Closed";
export function OpenClosedFilter(): ReactElement {
  const [searchParams, setSearchParams] = useSearchParams();

  const activeOpenOrClosedTab =
    (searchParams.get("openOrClosed") as OpenOrClosedTab) || "Open";

  function handleChangeOpenOrClosedTab(openOrClosed: OpenOrClosedTab) {
    // Create a new search params so we retain all existing search params
    const newSearchParams = new URLSearchParams(searchParams);
    newSearchParams.set("openOrClosed", openOrClosed);
    setSearchParams(newSearchParams);
  }

  return (
    <div className="daisy-tabs daisy-tabs-boxed daisy-tabs-sm">
      <button
        onClick={() => handleChangeOpenOrClosedTab("Open")}
        className={classNames("daisy-tab", {
          "daisy-tab-active font-medium": activeOpenOrClosedTab === "Open",
        })}
      >
        Open
      </button>
      <button
        onClick={() => handleChangeOpenOrClosedTab("Closed")}
        className={classNames("daisy-tab", {
          "daisy-tab-active font-medium": activeOpenOrClosedTab === "Closed",
        })}
      >
        Closed
      </button>
    </div>
  );
}
