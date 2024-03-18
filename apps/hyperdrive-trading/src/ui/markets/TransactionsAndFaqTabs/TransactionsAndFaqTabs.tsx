import { HyperdriveConfig } from "@hyperdrive/appconfig";
import { ReactElement } from "react";
import { Tabs } from "src/ui/base/components/Tabs/Tabs";
import { TransactionTable } from "src/ui/hyperdrive/TransactionTable/TransactionsTable";
import { FAQEntries } from "src/ui/onboarding/FAQ/FAQ";

export function TransactionAndFaqTabs({
  hyperdrive,
}: {
  hyperdrive: HyperdriveConfig;
}): ReactElement {
  return (
    <>
      <Tabs
        activeTabId="Transactions"
        tabs={[
          {
            id: "Transactions",
            label: "All Transactions",
            content: <TransactionTable hyperdrive={hyperdrive} />,
            onClick: () => {},
          },
        ]}
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
