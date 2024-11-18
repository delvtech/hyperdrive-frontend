import { useNavigate, useSearch } from "@tanstack/react-router";
import { ReactElement } from "react";
import { Tabs } from "src/ui/base/components/Tabs/Tabs";
import { useFeatureFlag } from "src/ui/base/featureFlags/featureFlags";
import { OpenLongsContainer } from "src/ui/portfolio/longs/LongsContainer";
import { LpAndWithdrawalSharesContainer } from "src/ui/portfolio/lp/LpAndWithdrawalSharesContainer";
import { PORTFOLIO_ROUTE } from "src/ui/portfolio/routes";
import { OpenShortsContainer } from "src/ui/portfolio/shorts/ShortsContainer";

export function Portfolio(): ReactElement {
  const { position } = useSearch({ from: PORTFOLIO_ROUTE });
  const navigate = useNavigate({ from: PORTFOLIO_ROUTE });
  const activeTab = position ?? "longs";
  const { isFlagEnabled: isPortfolioRewardsFeatureFlagEnabled } =
    useFeatureFlag("portfolio-rewards");
  const tabs = [
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
  ];
  if (isPortfolioRewardsFeatureFlagEnabled) {
    tabs.push({
      id: "rewards",
      content: <></>,
      label: "Rewards",
      onClick: () => {
        navigate({
          search: () => ({ position: "rewards" }),
        });
      },
    });
  }
  return (
    <div className="flex w-full flex-col items-center bg-base-100 py-8">
      <Tabs activeTabId={activeTab} tabs={tabs} />
    </div>
  );
}
