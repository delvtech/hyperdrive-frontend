import { HyperdriveConfig } from "@hyperdrive/appconfig";
import { ReactElement, useState } from "react";
import { Tabs } from "src/ui/base/components/Tabs/Tabs";
import { TransactionTable } from "src/ui/hyperdrive/TransactionTable/TransactionsTable";
import { FAQEntries } from "src/ui/onboarding/FAQ/FAQ";

type Tab = "Transactions" | "FAQ";

export function TransactionAndFaqTabs({
  hyperdrive,
}: {
  hyperdrive: HyperdriveConfig;
}): ReactElement {
  const [activeTab, setActiveTab] = useState<Tab>("Transactions");
  return (
    <Tabs
      tabs={[
        {
          id: "Transactions",
          label: "Transactions",
          content: <TransactionTable hyperdrive={hyperdrive} />,
          onClick: () => setActiveTab("Transactions"),
        },
        {
          id: "FAQ",
          label: "FAQ",
          onClick: () => setActiveTab("FAQ"),
          content: <FAQEntries />,
        },
      ]}
      activeTabId={activeTab}
    />
  );
}
