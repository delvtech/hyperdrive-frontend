import { useNavigate, useSearch } from "@tanstack/react-router";
import { ReactElement } from "react";
import { TabsTwo } from "src/ui/base/components/Tabs/TabsTwo";
import { OpenLongsContainer } from "src/ui/hyperdrive/longs/OpenLongsTable/OpenLongsTableDesktopTwo";
import { PORTFOLIO_ROUTE } from "src/ui/markets/routes";

export function Portfolio(): ReactElement {
  const { position } = useSearch({ from: PORTFOLIO_ROUTE });
  const navigate = useNavigate({ from: PORTFOLIO_ROUTE });
  const activeTab = position ?? "longs";
  return (
    <div className="flex min-h-screen w-full flex-col items-center bg-base-100 py-8">
      <TabsTwo
        activeTabId={activeTab}
        tabs={[
          {
            id: "longs",
            content: <OpenLongsContainer />,
            label: "Long",
            onClick: () => {
              navigate({
                // params: { address },
                search: () => ({ position: "longs" }),
              });
            },
          },
          {
            id: "shorts",
            content: <h1>Shorts</h1>,
            label: "Short",
            onClick: () => {
              navigate({
                // params: { address },
                search: () => ({ position: "shorts" }),
              });
            },
          },
          {
            id: "lp",
            content: <h1>LP</h1>,
            label: "LP",
            onClick: () => {
              navigate({
                // params: { address },
                search: () => ({ position: "lp" }),
              });
            },
          },
        ]}
      />
    </div>
  );
}
