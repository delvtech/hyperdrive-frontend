import { SortableGridTable } from "src/ui/base/tables/SortableGridTable";
import { ShortActionsMenu } from "./DebtDetailsSection";
import { ReactElement } from "react";

const tableCols = [
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
        Debt covered
      </span>
    ),
  },
  {
    cell: (
      <span
        className="text-secondaryText"
        title="The fixed rate you locked in when the short was opened"
      >
        Fixed Rate
      </span>
    ),
  },
  {
    // Empty cell for kebab menu icon
    cell: <span className="text-secondaryText" />,
  },
];

export function ExistingCoverageTab(): ReactElement {
  return (
    <>
      <p className="text-h6 text-lightText">
        This table shows all the shorts that have been purchased and how much
        debt they cover. Check out our docs to learn more about{" "}
        <a href="#" className="underline underline-offset-4 hover:text-white ">
          how fixed rate borrowing works
        </a>
        .
      </p>

      <div>
        <SortableGridTable
          headingRowClassName="grid-cols-[170px_140px_2fr_1fr] gap-8 border-b-2 border-dawn h-9 items-center"
          bodyRowClassName="grid-cols-[170px_140px_2fr_1fr] gap-8 even:border-b border-dawn text-h6"
          emptyTableElement={
            <span className="text-white">No debt coverage found</span>
          }
          cols={tableCols}
          rows={[
            {
              cells: [
                <span key="expiration" className="text-lightText">
                  December 14, 2024
                </span>,
                <span key="amount" className="text-lightText">
                  13.27 DAI
                </span>,
                <span key="fixedRate" className="text-lightText">
                  1.25%
                </span>,
                <span key="optionsMenu" className="text-right text-lightText">
                  <ShortActionsMenu />
                </span>,
              ],
            },
          ]}
        />
      </div>
    </>
  );
}
