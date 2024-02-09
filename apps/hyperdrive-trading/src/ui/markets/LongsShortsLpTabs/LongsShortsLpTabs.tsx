import { HyperdriveConfig } from "@hyperdrive/appconfig";
import { useNavigate, useParams, useSearch } from "@tanstack/react-router";
import { ReactElement } from "react";
import { Tabs } from "src/ui/base/components/Tabs/Tabs";
import { LongsTab } from "src/ui/markets/LongsTab/LongsTab";
import { LpTab } from "src/ui/markets/LpTab/LpTab";
import { ShortsTab } from "src/ui/markets/ShortsTab/ShortsTab";
import { MARKET_DETAILS_ROUTE } from "src/ui/markets/routes";

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
    <Tabs
      activeTabId={activeTab}
      tabs={[
        {
          id: "Longs",
          content: <LongsTab hyperdrive={hyperdrive} />,
          label: "Longs",
          onClick: () => {
            navigate({
              params: { address },
              search: () => ({ position: "Longs", openOrClosed: "Open" }),
            });
          },
        },
        {
          id: "Shorts",
          content: <ShortsTab hyperdrive={hyperdrive} />,
          label: "Shorts",
          onClick: () => {
            navigate({
              params: { address },
              search: () => ({ position: "Shorts", openOrClosed: "Open" }),
            });
          },
        },
        {
          id: "LP",
          content: <LpTab hyperdrive={hyperdrive} />,
          label: "LP",
          onClick: () => {
            navigate({
              params: { address },
              search: () => ({ position: "LP", openOrClosed: "Open" }),
            });
          },
        },
      ]}
    />
  );
}
