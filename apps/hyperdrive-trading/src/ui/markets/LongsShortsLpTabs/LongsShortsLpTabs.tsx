import { useNavigate } from "@tanstack/react-router";
import assertNever from "assert-never";
import classNames from "classnames";
import { Fragment, ReactElement } from "react";
import { Hyperdrive } from "src/appconfig/types";
import { Route } from "src/routes/market.$address";
import { LongsTab } from "src/ui/markets/LongsTab/LongsTab";
import { LpTab } from "src/ui/markets/LpTab/LpTab";
import { ShortsTab } from "src/ui/markets/ShortsTab/ShortsTab";

const TABS = ["Longs", "Shorts", "LP"] as const;
type LongsShortsLpTab = typeof TABS[number];

export function LongsShortsLpTabs({
  hyperdrive,
}: {
  hyperdrive: Hyperdrive;
}): ReactElement {
  const { address } = Route.useParams();
  const { position } = Route.useSearch();
  const navigate = useNavigate({ from: Route.fullPath });
  const activeTab = position ?? "Longs";

  return (
    <div role="tablist" className="daisy-tabs daisy-tabs-lifted daisy-tabs-lg">
      {TABS.map((tabId) => (
        <Fragment key={tabId}>
          <input
            className={classNames("daisy-tab", {
              "font-bold ": activeTab === tabId,
              "opacity-80 hover:opacity-100": activeTab !== tabId,
            })}
            aria-label={tabId}
            onClick={() => {
              navigate({
                params: { address },
                search: () => ({ position: tabId, openOrClosed: "Open" }),
              });
            }}
            type="radio"
            role="tab"
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
                  if (activeTab === "Longs") {
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
