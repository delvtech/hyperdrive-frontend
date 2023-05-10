import { Popover } from "@headlessui/react";
import { EllipsisVerticalIcon } from "@heroicons/react/20/solid";
import { XCircleIcon } from "@heroicons/react/24/outline";
import { ReactElement, useState } from "react";
import { Tabs } from "src/ui/base/Tabs/Tabs";
import { ClosePositionModal } from "./ClosePositionModal";
import { DebtCoverageDetails } from "src/ui/fixedborrow/CoverageTable/DebtCoverageDetails";
import { UncoveredDebtDetails } from "src/ui/fixedborrow/CoverageTable/UncoveredDebtDetails";

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

      {activeTab === 0 ? <DebtCoverageDetails /> : <UncoveredDebtDetails />}
    </div>
  );
}

export function ShortActionsMenu(): ReactElement {
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
