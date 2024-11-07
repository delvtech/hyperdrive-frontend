import { useNavigate, useSearch } from "@tanstack/react-router";
import { ReactElement } from "react";
import { Tabs } from "src/ui/base/components/Tabs/Tabs";
import { OpenLongsContainer } from "src/ui/hyperdrive/longs/OpenLongsTable/OpenLongsTableDesktop";
import { LpAndWithdrawalSharesContainer } from "src/ui/hyperdrive/lp/LpAndWithdrawalSharesTable/LpAndWithdrawalSharesTable";
import { OpenShortsContainer } from "src/ui/hyperdrive/shorts/OpenShortsTable/OpenShortsTableDesktop";
import { PORTFOLIO_ROUTE } from "src/ui/portfolio/routes";

export function Portfolio(): ReactElement {
  const { position } = useSearch({ from: PORTFOLIO_ROUTE });
  const navigate = useNavigate({ from: PORTFOLIO_ROUTE });
  const activeTab = position ?? "longs";
  return (
    <div className="flex w-full flex-col items-center bg-base-100 py-8">
      <Tabs
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
