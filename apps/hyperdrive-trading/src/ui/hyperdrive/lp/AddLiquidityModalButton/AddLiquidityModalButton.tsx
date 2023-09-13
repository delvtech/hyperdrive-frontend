import { ChevronRightIcon, SquaresPlusIcon } from "@heroicons/react/24/outline";
import { ReactElement } from "react";
import { Hyperdrive } from "src/appconfig/types";
import { ChecklistItem } from "src/ui/base/components/ChecklistItem/CheckedListItem";
import { Modal } from "src/ui/base/components/Modal/Modal";
import { Well } from "src/ui/base/components/Well/Well";
import { AddLiquidityForm } from "src/ui/hyperdrive/lp/AddLiquidityForm/AddLiquidityForm";

const ADD_LIQUIDITY_MODAL_ID = "addLpModal";

export function AddLiquidityModalButton({
  hyperdrive,
}: {
  hyperdrive: Hyperdrive;
}): ReactElement {
  return (
    <Modal
      modalId={ADD_LIQUIDITY_MODAL_ID}
      modalContent={<AddLiquidityForm market={hyperdrive} />}
    >
      {({ showModal }) => (
        <Well interactive variant="primary" onClick={() => showModal()}>
          <div className="flex w-[272px] flex-col justify-between gap-2 p-4">
            <SquaresPlusIcon className="mb-2 h-16 text-primary" />
            <p className="text-h5">Add Liquidity</p>
            <p className="font-bold">Earn trading fees and interest</p>
            <div className="mt-4 ml-4 flex flex-col gap-2 ">
              <ChecklistItem checked readOnly variant="primary">
                Deposit {hyperdrive.baseToken.symbol} to back trades
              </ChecklistItem>
              <ChecklistItem checked readOnly variant="primary">
                Idle capital accrues vault APY
              </ChecklistItem>
              <ChecklistItem checked readOnly variant="primary">
                No rollovers, easy-to-use
              </ChecklistItem>
            </div>
            {/* Using a div styled as a button here just as a visual cue. Don't
            use a real button here since the Well is interactive already, and
            doing so would create invalid dom nesting of buttons. */}
            <div className="daisy-btn-primary daisy-btn-sm daisy-btn mt-4 justify-between gap-0 border-primary">
              <span className="ml-4 flex-1 text-center">Add liquidity</span>
              <ChevronRightIcon className="h-3 text-right" />
            </div>
          </div>
        </Well>
      )}
    </Modal>
  );
}
