import { ReactElement, useState } from "react";
import { Tabs } from "src/ui/base/Tabs/Tabs";
import { ExistingCoverageTab } from "src/ui/coverage/CoverageTable/ExistingCoverageTab";
import { UncoveredDebtTab } from "src/ui/coverage/CoverageTable/UncoveredDebtTab";

export function DebtDetailsSection(): ReactElement {
  const [activeTab, setActiveTab] = useState(0);

  return (
    <div className="flex w-full flex-col gap-6 p-8 text-white">
      <Tabs
        tabs={[
          {
            label: "Existing Coverage",
            variant: "sun",
          },
          {
            label: "Uncovered Debt",
            variant: "pinkSlip",
          },
        ]}
        activeTab={activeTab}
        onChange={(tabIndex) => setActiveTab(tabIndex)}
      />

      {activeTab === 0 ? <ExistingCoverageTab /> : <UncoveredDebtTab />}
    </div>
  );
}
