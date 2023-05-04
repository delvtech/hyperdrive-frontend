import { useState } from "react";
import { Tabs } from "src/ui/base/Tabs/Tabs";

export function DebtDetailsSection(): JSX.Element {
  const [activeTab, setActiveTab] = useState(0);

  return (
    <div className="flex w-full flex-col gap-7 p-8 text-white">
      <Tabs
        tabs={[
          {
            label: "Debt Coverage",
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
      <p className="text-h6">
        This table shows all the shorts that have been purchased and how much
        debt they cover. Check out our docs to learn more about how fixed rate
        borrowing works.j
      </p>
      {/* TODO: Add table here */}
    </div>
  );
}
