import { SparkGoerliAddresses } from "@hyperdrive/spark";
import { ConnectButton } from "@rainbow-me/rainbowkit";
import { MintButton } from "src/ui/faucet/MintButton";
import { parseBigInt } from "src/base/bigint/parseBigInt";
import { Tabs } from "src/ui/base/Tabs/Tabs";
import { ReactElement } from "react";

export function AppHeader({
  activeTab,
  setActiveTab,
}: {
  activeTab: number;
  setActiveTab: (tabIndex: number) => void;
}): ReactElement {
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
          activeTab={activeTab}
          onChange={setActiveTab}
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
