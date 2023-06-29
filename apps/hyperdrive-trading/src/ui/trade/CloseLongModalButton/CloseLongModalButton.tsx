import { XMarkIcon } from "@heroicons/react/24/solid";
import { Long } from "@hyperdrive/core";
import { ReactElement } from "react";
import { Hyperdrive } from "src/appconfig/types";
import { CloseLongForm } from "src/ui/trade/CloseLongForm/CloseLongForm";

export interface CloseLongModalButtonProps {
  modalId: string;
  hyperdrive: Hyperdrive;
  long: Long;
}
export function CloseLongModalButton({
  modalId,
  long,
  hyperdrive,
}: CloseLongModalButtonProps): ReactElement {
  function closeModal() {
    (window as any)[modalId].close();
  }

  return (
    <dialog id={modalId} className="daisy-modal">
      <form method="dialog" className="daisy-modal-box">
        <button
          className="daisy-btn-ghost daisy-btn-sm daisy-btn-circle daisy-btn absolute right-4 top-4"
          onClick={(e) => {
            // clicking this button for some reason triggers the form validation
            // in the CloseLongForm. Preventing default here is a band-aid until
            // we figure out what's going on.
            e.preventDefault();
            closeModal();
          }}
        >
          <XMarkIcon
            className="w-6 text-white opacity-70 hover:opacity-100 focus:opacity-100"
            title="Close position"
          />
        </button>
        <h3 className="text-lg font-bold">Close position</h3>
        <CloseLongForm
          hyperdrive={hyperdrive}
          long={long}
          onCloseLong={(e) => {
            // preventDefault since we don't want to close the modal while the
            // tx is temporarily pending the user's signature in their wallet.
            e.preventDefault();
          }}
        />
      </form>
      <form method="dialog" className="daisy-modal-backdrop">
        {/* use vanilla button here since it's not to be shown to the user */}
        <button onClick={closeModal} />
      </form>
    </dialog>
  );
}
