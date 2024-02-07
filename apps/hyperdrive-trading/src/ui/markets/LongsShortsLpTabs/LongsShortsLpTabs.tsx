import { HyperdriveConfig } from "@hyperdrive/appconfig";
import { useNavigate, useParams, useSearch } from "@tanstack/react-router";
import assertNever from "assert-never";
import classNames from "classnames";
import { Fragment, ReactElement } from "react";
import { LongsTab } from "src/ui/markets/LongsTab/LongsTab";
import { LpTab } from "src/ui/markets/LpTab/LpTab";
import { MARKET_DETAILS_ROUTE } from "src/ui/markets/routes";
import { ShortsTab } from "src/ui/markets/ShortsTab/ShortsTab";

const TABS = ["Longs", "Shorts", "LP"] as const;

export function LongsShortsLpTabs({
  hyperdrive,
}: {
  hyperdrive: HyperdriveConfig;
}): ReactElement {
  const { address } = useParams({ from: MARKET_DETAILS_ROUTE });
  const { position } = useSearch({ from: MARKET_DETAILS_ROUTE });
  const navigate = useNavigate({ from: MARKET_DETAILS_ROUTE });
  const activeTab = position ?? "Longs";

  return (
    <div role="tablist" className="daisy-tabs daisy-tabs-lifted daisy-tabs-lg">
      {TABS.map((tabId) => (
        <Fragment key={tabId}>
          <input
            className={classNames("daisy-tab", {
              "daisy-tab-active font-bold": activeTab === tabId,
              "opacity-80 hover:opacity-100": activeTab !== tabId,
            })}
            aria-label={tabId}
            onChange={() => {
              navigate({
                params: { address },
                search: () => ({ position: tabId, openOrClosed: "Open" }),
              });
            }}
            checked={activeTab === tabId}
            type="radio"
            role="tab"
          />

          <div
            role="tabpanel"
            className="daisy-tab-content flex rounded-box border-base-200 bg-base-100 lg:min-w-[1200px]"
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
