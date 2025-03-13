import { useNavigate, useSearch } from "@tanstack/react-router";
import { ReactElement } from "react";
import { Tabs } from "src/ui/base/components/Tabs/Tabs";
import { OpenLongsContainer } from "src/ui/portfolio/longs/LongsContainer";
import { LpAndWithdrawalSharesContainer } from "src/ui/portfolio/lp/LpAndWithdrawalSharesContainer";
import { RewardsContainer } from "src/ui/portfolio/rewards/RewardsContainer";
import { PORTFOLIO_ROUTE } from "src/ui/portfolio/routes";
import { OpenShortsContainer } from "src/ui/portfolio/shorts/ShortsContainer";
import { Address, getAddress } from "viem";
import { useAccount } from "wagmi";

export function Portfolio(): ReactElement {
  const { position, account: accountFromRoute } = useSearch({
    from: PORTFOLIO_ROUTE,
  });
  const activeTab = position ?? "longs";

  const { address: connectedAccount } = useAccount();

  // The account address from the route needs to be checksummed before it's
  // used, otherwise addresses will not be equal when used for caching or
  // comparison purposes.
  const rawAccount = (accountFromRoute ?? connectedAccount) as
    | Address
    | undefined;
  const account = rawAccount ? getAddress(rawAccount) : undefined;

  const navigate = useNavigate({ from: PORTFOLIO_ROUTE });

  const tabs = [
    {
      id: "longs",
      content: <OpenLongsContainer account={account} />,
      label: "Long",
      onClick: () => {
        navigate({
          search: (prev) => ({ ...prev, position: "longs" }),
        });
      },
    },
    {
      id: "shorts",
      content: <OpenShortsContainer account={account} />,
      label: "Short",
      onClick: () => {
        navigate({
          search: (prev) => ({ ...prev, position: "shorts" }),
        });
      },
    },
    {
      id: "lp",
      content: <LpAndWithdrawalSharesContainer account={account} />,
      label: "LP",
      onClick: () => {
        navigate({
          search: (prev) => ({ ...prev, position: "lp" }),
        });
      },
    },
    {
      id: "rewards",
      content: <RewardsContainer account={account} />,
      label: "Rewards",
      onClick: () => {
        navigate({
          search: (prev) => ({ ...prev, position: "rewards" }),
        });
      },
    },
  ];

  return (
    <div className="flex w-full flex-col items-center bg-base-100 py-8">
      <Tabs activeTabId={activeTab} tabs={tabs} />
    </div>
  );
}
