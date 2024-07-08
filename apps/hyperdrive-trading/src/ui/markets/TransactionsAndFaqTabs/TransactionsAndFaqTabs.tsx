import { HyperdriveConfig } from "@hyperdrive/appconfig";
import { ReactElement, useState } from "react";
import { Tab, Tabs } from "src/ui/base/components/Tabs/Tabs";
import { TransactionTable } from "src/ui/hyperdrive/TransactionTable/TransactionsTable";
import { FAQEntries } from "src/ui/onboarding/FAQ/FAQ";
import { useAccount } from "wagmi";

type TabId = "all-transactions" | "your-transactions";

export function TransactionAndFaqTabs({
  hyperdrive,
}: {
  hyperdrive: HyperdriveConfig;
}): ReactElement {
  const { address: account } = useAccount();
  const [activeTab, setActiveTab] = useState<TabId>("all-transactions");

  const transactionTabs: Tab<TabId>[] = [
    {
      id: "all-transactions",
      label: "All Transactions",
      content: <TransactionTable hyperdrive={hyperdrive} />,
      onClick: () => {
        setActiveTab("all-transactions");
      },
    },
  ];

  if (account) {
    transactionTabs.push({
      id: "your-transactions",
      label: "Your Transactions",
      content: <TransactionTable hyperdrive={hyperdrive} account={account} />,
      onClick: () => {
        setActiveTab("your-transactions");
      },
    });
  }
  return (
    <>
      <Tabs
        activeTabId={account ? activeTab : "all-transactions"}
        tabs={transactionTabs}
      />

      <Tabs
        activeTabId="FAQ"
        tabs={[
          {
            id: "FAQ",
            label: "FAQ",
            onClick: () => {},
            content: <FAQEntries />,
          },
        ]}
      />
    </>
  );
}
