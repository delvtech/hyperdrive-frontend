import { XMarkIcon } from "@heroicons/react/24/solid";
import { OpenShort } from "@hyperdrive/sdk";
import { ReactElement } from "react";
import { HyperdriveConfigOld } from "src/hyperdrive/HyperdriveConfigOld";
import { Modal } from "src/ui/base/components/Modal/Modal";
import { CloseShortForm } from "src/ui/hyperdrive/shorts/CloseShortForm/CloseShortForm";

export interface CloseShortModalButtonProps {
  modalId: string;
  hyperdrive: HyperdriveConfigOld;
  short: OpenShort;
}
export function CloseShortModalButton({
  modalId,
  short,
  hyperdrive,
}: CloseShortModalButtonProps): ReactElement {
  function closeModal() {
    (window as any)[modalId].close();
  }

  return (
    <Modal
      modalId={modalId}
      modalContent={
        <div>
          <button
            className="daisy-btn daisy-btn-circle daisy-btn-ghost daisy-btn-sm absolute right-4 top-4"
            onClick={closeModal}
          >
            <XMarkIcon className="w-6" title="Close position" />
          </button>
          <CloseShortForm
            hyperdrive={hyperdrive}
            short={short}
            onCloseShort={(e) => {
              // preventDefault since we don't want to close the modal while the
              // tx is temporarily pending the user's signature in their wallet.
              e.preventDefault();
            }}
          />
        </div>
      }
    />
  );
}
