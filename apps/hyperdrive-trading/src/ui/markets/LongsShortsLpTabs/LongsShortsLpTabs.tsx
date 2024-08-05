import type { HyperdriveConfig } from "@hyperdrive/appconfig";
import { useNavigate, useParams, useSearch } from "@tanstack/react-router";
import type { ReactElement } from "react";
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
  const activeTab = position ?? "longs";

  return (
    <Tabs
      activeTabId={activeTab}
      tabs={[
        {
          id: "longs",
          content: <LongsTab hyperdrive={hyperdrive} />,
          label: "Long",
          onClick: () => {
            navigate({
              params: { address },
              search: () => ({ position: "longs" }),
            });
          },
        },
        {
          id: "shorts",
          content: <ShortsTab hyperdrive={hyperdrive} />,
          label: "Short",
          onClick: () => {
            navigate({
              params: { address },
              search: () => ({ position: "shorts" }),
            });
          },
        },
        {
          id: "lp",
          content: <LpTab hyperdrive={hyperdrive} />,
          label: "LP",
          onClick: () => {
            navigate({
              params: { address },
              search: () => ({ position: "lp" }),
            });
          },
        },
      ]}
    />
  );
}
