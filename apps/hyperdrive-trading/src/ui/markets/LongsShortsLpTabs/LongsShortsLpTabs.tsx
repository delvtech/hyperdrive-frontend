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
            className={classNames(
              "daisy-tab",
              "!border-b-0", // override the bottom border since lifted tabs style doesn't need it, and it creates a stray line beneath the tab
              {
                "daisy-tab-active font-bold": activeTab === tabId,
                "opacity-80 hover:opacity-100": activeTab !== tabId,
              },
            )}
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
        </Fragment>
      ))}
      <div
        role="tabpanel"
        className={classNames(
          "daisy-tab-content flex rounded-b-box rounded-tr-box border-base-200 bg-base-100",
          {
            // The Longs tab is first, and the tabby bit is connected to the
            // tab content, so don't put a round border on it
            "rounded-tl-box": activeTab !== "Longs",
          },
        )}
      >
        {(() => {
          switch (activeTab) {
            case "Longs":
              return <LongsTab hyperdrive={hyperdrive} />;
            case "Shorts":
              return <ShortsTab hyperdrive={hyperdrive} />;
            case "LP":
              return <LpTab hyperdrive={hyperdrive} />;
            default:
              assertNever(activeTab);
          }
        })()}
      </div>
    </div>
  );
}
