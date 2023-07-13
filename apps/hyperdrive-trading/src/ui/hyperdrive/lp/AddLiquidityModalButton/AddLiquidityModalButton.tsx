import { ChevronRightIcon, ClockIcon } from "@heroicons/react/24/outline";
import { ReactElement } from "react";
import { Hyperdrive } from "src/appconfig/types";
import { Modal } from "src/ui/base/components/Modal/Modal";
import { Well } from "src/ui/base/components/Well/Well";
import { AddLiquidityForm } from "src/ui/hyperdrive/lp/AddLiquidityForm/AddLiquidityForm";

const ADD_LIQUIDITY_MODAL_ID = "openLongModal";

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
          <div className="flex w-52 flex-col gap-2 py-4 text-center">
            <ClockIcon className="mb-2 h-16 text-primary" />
            <p className="font-lato text-h5 font-light text-primary">
              Add Liquidity
            </p>
            <p className="font-light">
              Earn trading fees when users open longs or shorts
            </p>
            {/* Using a div styled as a button here just as a visual cue. Don't
            use a real button here since the Well is interactive already, and
            doing so would create invalid dom nesting of buttons. */}
            <div className="daisy-btn-primary daisy-btn-sm daisy-btn mt-2 justify-between gap-0 border-primary normal-case">
              <span className="ml-4 flex-1 text-center">Add LP</span>
              <ChevronRightIcon className="h-3 text-right" />
            </div>
          </div>
        </Well>
      )}
    </Modal>
  );
}
