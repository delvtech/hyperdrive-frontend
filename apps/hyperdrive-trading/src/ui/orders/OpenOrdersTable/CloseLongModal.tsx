import { XMarkIcon } from "@heroicons/react/24/solid";
import { Long } from "@hyperdrive/core";
import { ReactElement } from "react";
import { Hyperdrive } from "src/appconfig/types";
import { Button } from "src/ui/base/components/Button";
import { CloseLongForm } from "src/ui/trading/CloseLongForm";

export interface CloseLongModalProps {
  modalId: string;
  hyperdrive: Hyperdrive;
  long: Long;
}
export function CloseLongModal({
  modalId,
  long,
  hyperdrive,
}: CloseLongModalProps): ReactElement {
  return (
    <dialog id={modalId} className="daisy-modal">
      <form method="dialog" className="daisy-modal-box">
        <button className="daisy-btn-ghost daisy-btn-sm daisy-btn-circle daisy-btn absolute right-4 top-4">
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
        <Button onClick={() => (window as any)[modalId].close()}>close</Button>
      </form>
    </dialog>
  );
}
