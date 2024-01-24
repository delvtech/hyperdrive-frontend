import assertNever from "assert-never";
import classNames from "classnames";
import { Fragment, ReactElement } from "react";
import { useSearchParams } from "react-router-dom";
import { HyperdriveConfig } from "src/appconfig/HyperdriveConfig";
import { LongsTab } from "src/ui/markets/LongsTab/LongsTab";
import { LpTab } from "src/ui/markets/LpTab/LpTab";
import { ShortsTab } from "src/ui/markets/ShortsTab/ShortsTab";

const TABS = ["Longs", "Shorts", "LP"] as const;
type LongsShortsLpTab = (typeof TABS)[number];

export function LongsShortsLpTabs({
  hyperdrive,
}: {
  hyperdrive: HyperdriveConfig;
}): ReactElement {
  const [searchParams, setSearchParams] = useSearchParams();

  const activeTab =
    (searchParams.get("position") as LongsShortsLpTab) || "Longs";

  function handleChangeTab(position: LongsShortsLpTab) {
    // Create a new search params so we retain all existing search params
    const newSearchParams = new URLSearchParams(searchParams);
    newSearchParams.set("position", position);
    newSearchParams.set("openOrClosed", "Open");
    setSearchParams(newSearchParams);
  }

  return (
    <div role="tablist" className="daisy-tabs daisy-tabs-lifted daisy-tabs-lg">
      {TABS.map((tabId) => (
        <Fragment key={tabId}>
          <input
            type="radio"
            name="positions_tabs"
            role="tab"
            className={classNames("daisy-tab", {
              "font-bold ": activeTab === tabId,
              "opacity-80 hover:opacity-100": activeTab !== tabId,
            })}
            aria-label={tabId}
            checked={activeTab === tabId}
            onChange={() => {
              handleChangeTab(tabId);
            }}
          />
          <div
            role="tabpanel"
            className="daisy-tab-content rounded-box border-base-200 bg-base-100"
          >
            {(() => {
              // We render a content panel for each tab, however we only want to
              // render the active tab's content
              switch (activeTab) {
                case "Longs":
                  if (tabId === "Longs") {
                    return <LongsTab hyperdrive={hyperdrive} />;
                  }
                  return null;
                case "Shorts":
                  if (tabId === "Shorts") {
                    return <ShortsTab hyperdrive={hyperdrive} />;
                  }
                  return null;
                case "LP":
                  if (tabId === "LP") {
                    return <LpTab hyperdrive={hyperdrive} />;
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
