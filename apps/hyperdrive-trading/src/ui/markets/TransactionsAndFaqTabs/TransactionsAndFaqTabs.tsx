import { HyperdriveConfig } from "@hyperdrive/appconfig";
import { ReactElement, useState } from "react";
import { Tab, Tabs } from "src/ui/base/components/Tabs/Tabs";
import { TransactionTable } from "src/ui/hyperdrive/TransactionTable/TransactionsTable";
import { FAQEntries } from "src/ui/onboarding/FAQ/FAQ";
import { useAccount } from "wagmi";

export function TransactionAndFaqTabs({
  hyperdrive,
}: {
  hyperdrive: HyperdriveConfig;
}): ReactElement {
  const { address: account } = useAccount();
  const [activeTab, setActiveTab] = useState<
    "Transactions" | "YourTransactions"
  >("Transactions");

  const transactionTabs: Tab[] = [
    {
      id: "Transactions",
      label: "All Transactions",
      content: <TransactionTable hyperdrive={hyperdrive} />,
      onClick: () => {
        setActiveTab("Transactions");
      },
    },
  ];

  if (account) {
    transactionTabs.push({
      id: "YourTransactions",
      label: "Your Transactions",
      content: <TransactionTable hyperdrive={hyperdrive} account={account} />,
      onClick: () => {
        setActiveTab("YourTransactions");
      },
    });
  }
  return (
    <>
      <Tabs activeTabId={activeTab} tabs={transactionTabs} />

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
