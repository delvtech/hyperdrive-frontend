import { SparkGoerliAddresses } from "@hyperdrive/spark";
import { ConnectButton } from "@rainbow-me/rainbowkit";
import { MintButton } from "src/ui/faucet/MintButton";
import { parseBigInt } from "src/base/bigint/parseBigInt";
import { Tabs } from "src/ui/base/Tabs/Tabs";
import { ReactElement, useCallback } from "react";

export type ActiveTab = "borrow" | "portfolio";

interface AppHeaderProps {
  activeTab: ActiveTab;
  setActiveTab: (tab: ActiveTab) => void;
}

const tabIds: Record<ActiveTab, number> = {
  borrow: 0,
  portfolio: 1,
};

export function AppHeader({
  activeTab,
  setActiveTab,
}: AppHeaderProps): ReactElement {
  const handleChange = useCallback(
    (tabIndex: number) => {
      if (tabIndex === 0) {
        setActiveTab("borrow");
      } else if (tabIndex === 1) {
        setActiveTab("portfolio");
      }
    },
    [setActiveTab],
  );
  return (
    <div className="flex h-16 items-center justify-between gap-2 p-4">
      <h4 className="shrink-0 font-bold text-white">Fixed Borrow Demo</h4>
      <div className="ml-40 flex w-full justify-center">
        <Tabs
          tabs={[
            {
              label: "Borrow",
              variant: "sun",
            },
            {
              label: "Portfolio",
              variant: "pinkSlip",
            },
          ]}
          activeTab={tabIds[activeTab]}
          onChange={handleChange}
        />
      </div>
      <div className="flex shrink-0 items-center gap-2">
        <MintButton
          tokenAddress={SparkGoerliAddresses.wstETH_token}
          amount={parseBigInt("100", 18)}
        />
        <MintButton
          tokenAddress={SparkGoerliAddresses.DAI_token}
          amount={parseBigInt("10000", 18)}
        />
        <ConnectButton showBalance={false} />
      </div>
    </div>
  );
}
