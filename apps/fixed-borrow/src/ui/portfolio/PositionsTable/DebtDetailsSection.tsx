import { Popover } from "@headlessui/react";
import { EllipsisVerticalIcon } from "@heroicons/react/20/solid";
import { XCircleIcon } from "@heroicons/react/24/outline";
import { ReactElement, useState } from "react";
import { Tabs } from "src/ui/base/Tabs/Tabs";
import { SortableGridTable } from "src/ui/base/tables/SortableGridTable";
import { ClosePositionModal } from "./ClosePositionModal";

export function DebtDetailsSection(): ReactElement {
  const [activeTab, setActiveTab] = useState(0);

  return (
    <div className="flex w-full flex-col gap-6 p-8 text-white">
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
        <a href="#" className="underline underline-offset-4 hover:text-white ">
          how fixed rate borrowing works
        </a>
        .
      </p>

      <div>
        <SortableGridTable
          headingRowClassName="grid-cols-[170px_2fr_2fr_1fr] gap-8 border-b-2 border-dawn h-9 items-center"
          bodyRowClassName="grid-cols-[170px_2fr_2fr_1fr] gap-8 even:border-b border-dawn text-h6"
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
          ]}
          rows={[
            {
              cells: [
                <span key="expiration" className="text-lightText">
                  December 14, 2024
                </span>,
                <span key="amount" className="text-lightText">
                  92,353.27 DAI
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
    </div>
  );
}

function ShortActionsMenu() {
  const [isOpen, setIsOpen] = useState(false);

  function handleOpenModal() {
    setIsOpen(true);
  }

  function handleCloseModal() {
    setIsOpen(false);
  }

  return (
    <>
      <Popover>
        <Popover.Button className="rounded-md hover:bg-darkButton-hover">
          <EllipsisVerticalIcon className="h-5 w-5 hover:text-white" />
        </Popover.Button>

        <Popover.Panel className="bg-background absolute -right-24 flex w-52 flex-col justify-start gap-1 rounded-lg bg-inputBg p-1 shadow-2xl shadow-midnight ring-1 ring-inset ring-dawn">
          <button
            onClick={handleOpenModal}
            className="flex w-full items-center gap-3 rounded-lg p-2 text-left hover:bg-darkButton hover:text-white"
          >
            <XCircleIcon className="h-5 w-5" /> Close coverage
          </button>
        </Popover.Panel>
      </Popover>

      <ClosePositionModal isOpen={isOpen} onClose={handleCloseModal} />
    </>
  );
}
