import { ReactElement, useState } from "react";
import { Tabs } from "src/ui/base/Tabs/Tabs";
import { SortableGridTable } from "src/ui/base/tables/SortableGridTable";

export function DebtDetailsSection(): ReactElement {
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

      <p className="text-h6 text-lightText">
        This table shows all the shorts that have been purchased and how much
        debt they cover. Check out our docs to learn more about{" "}
        <a href="#" className="underline hover:no-underline">
          how fixed rate borrowing works
        </a>
        .
      </p>

      <div>
        <SortableGridTable
          headingRowClassName="grid-cols-[170px_160px_130px_1fr] gap-8 border-b-2 border-dawn h-9 items-center"
          bodyRowClassName="grid-cols-[170px_160px_130px_1fr] gap-8 even:border-b border-dawn text-h6"
          emptyTableElement={
            <span className="text-white">No debt coverage found</span>
          }
          cols={[
            {
              cell: (
                <span
                  className="text-secondaryText"
                  title="The fixed rate expires on this date. After expiry this debt becomes variable rate debt."
                >
                  Expiration
                </span>
              ),
            },
            {
              cell: (
                <span
                  className="text-secondaryText"
                  title="The amount of debt that is covered by the locked in fixed rate"
                >
                  Amount
                </span>
              ),
            },
            {
              cell: (
                <span
                  className="text-secondaryText"
                  title="The fixed rate you locked in as coverage when the short was opened"
                >
                  Rate Fixed At
                </span>
              ),
            },
            {
              // Empty cell for kebab menu icon
              cell: <span className="text-secondaryText" />,
            },
          ]}
          rows={[
            {
              cells: [
                <span key="expiration" className="text-lightText">
                  December 14, 2024
                </span>,
                <span key="amount" className="text-lightText">
                  9,999,992,353.27
                </span>,
                <span key="fixedRate" className="text-lightText">
                  1.25%
                </span>,
                <span key="optionsMenu" className="text-right text-lightText">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={1.5}
                    stroke="currentColor"
                    className="inline-block h-5 w-5"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M12 6.75a.75.75 0 110-1.5.75.75 0 010 1.5zM12 12.75a.75.75 0 110-1.5.75.75 0 010 1.5zM12 18.75a.75.75 0 110-1.5.75.75 0 010 1.5z"
                    />
                  </svg>
                </span>,
              ],
            },
            {
              cells: [
                <span key="expiration" className="text-lightText">
                  December 14, 2024
                </span>,
                <span key="amount" className="text-lightText">
                  2,353.27
                </span>,
                <span key="fixedRate" className="text-lightText">
                  1.25%
                </span>,
                <span key="optionsMenu" className="text-right text-lightText">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={1.5}
                    stroke="currentColor"
                    className="inline-block h-5 w-5"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M12 6.75a.75.75 0 110-1.5.75.75 0 010 1.5zM12 12.75a.75.75 0 110-1.5.75.75 0 010 1.5zM12 18.75a.75.75 0 110-1.5.75.75 0 010 1.5z"
                    />
                  </svg>
                </span>,
              ],
            },
          ]}
        />
      </div>
    </div>
  );
}
