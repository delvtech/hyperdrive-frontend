import { XMarkIcon } from "@heroicons/react/24/solid";
import { HyperdriveConfig } from "@hyperdrive/appconfig";
import { ReactElement } from "react";
import { Modal } from "src/ui/base/components/Modal/Modal";
import { AddLiquidityForm } from "src/ui/hyperdrive/lp/AddLiquidityForm/AddLiquidityForm";

export function AddLiquidityModalButton({
  modalId,
  hyperdrive,
}: {
  modalId: string;
  hyperdrive: HyperdriveConfig;
}): ReactElement {
  function closeModal() {
    (window as any)[modalId].close();
  }

  return (
    <Modal
      modalId={modalId}
      modalContent={
        <div>
          <h5 className="mb-4">Add Liquidity</h5>
          <button
            className="daisy-btn daisy-btn-circle daisy-btn-ghost daisy-btn-sm absolute right-4 top-4"
            onClick={closeModal}
          >
            <XMarkIcon className="w-6 " title="Close position" />
          </button>
          <AddLiquidityForm
            hyperdrive={hyperdrive}
            onAddLiquidity={(e) => {
              // preventDefault since we don't want to close the modal while the
              // tx is temporarily pending the user's signature in their wallet.
              e.preventDefault();
            }}
          />
        </div>
      }
    >
      {({ showModal }) => (
        <button
          className="daisy-btn daisy-btn-primary rounded-full"
          onClick={() => showModal()}
        >
          + Add liquidity
        </button>
      )}
    </Modal>
  );
}
