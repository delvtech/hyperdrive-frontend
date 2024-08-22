import { useNavigate, useSearch } from "@tanstack/react-router";
import { ReactElement } from "react";
import { TabsTwo } from "src/ui/base/components/Tabs/TabsTwo";
import { OpenLongsContainer } from "src/ui/hyperdrive/longs/OpenLongsTable/OpenLongsTableDesktopTwo";
import { LpAndWithdrawalSharesContainer } from "src/ui/hyperdrive/lp/LpAndWithdrawalSharesTable";
import { OpenShortsContainer } from "src/ui/hyperdrive/shorts/OpenShortsTable/OpenShortsTableDesktopTwo";
import { PORTFOLIO_ROUTE } from "src/ui/markets/routes";

export function Portfolio(): ReactElement {
  const { position } = useSearch({ from: PORTFOLIO_ROUTE });
  const navigate = useNavigate({ from: PORTFOLIO_ROUTE });
  const activeTab = position ?? "longs";
  return (
    <div className="flex w-full flex-col items-center bg-base-100 py-8">
      <TabsTwo
        activeTabId={activeTab}
        tabs={[
          {
            id: "longs",
            content: <OpenLongsContainer />,
            label: "Long",
            onClick: () => {
              navigate({
                search: () => ({ position: "longs" }),
              });
            },
          },
          {
            id: "shorts",
            content: <OpenShortsContainer />,
            label: "Short",
            onClick: () => {
              navigate({
                search: () => ({ position: "shorts" }),
              });
            },
          },
          {
            id: "lp",
            content: <LpAndWithdrawalSharesContainer />,
            label: "LP",
            onClick: () => {
              navigate({
                search: () => ({ position: "lp" }),
              });
            },
          },
        ]}
      />
    </div>
  );
}
