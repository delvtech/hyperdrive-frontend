import { XMarkIcon } from "@heroicons/react/24/solid";
import { Long } from "@hyperdrive/sdk";
import { ReactElement } from "react";
import { Hyperdrive } from "src/appconfig/types";
import { Modal } from "src/ui/base/components/Modal/Modal";
import { CloseLongForm } from "src/ui/hyperdrive/longs/CloseLongForm/CloseLongForm";

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

  const maturity = new Date(Number(long.maturity * 1000n));
  const hasMatured = maturity < new Date();

  return (
    <Modal
      modalId={modalId}
      modalContent={
        <div>
          <button
            className="daisy-btn-ghost daisy-btn-sm daisy-btn-circle daisy-btn absolute right-4 top-4"
            onClick={closeModal}
          >
            <XMarkIcon
              className="w-6 text-white opacity-70 hover:opacity-100 focus:opacity-100"
              title="Close position"
            />
          </button>
          <h3 className="text-h6 font-thin text-base-content">
            Close position
          </h3>
          <CloseLongForm
            hyperdrive={hyperdrive}
            long={long}
            onSuccess={closeModal}
            onCloseLong={(e) => {
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
          onClick={showModal}
          tabIndex={0}
          className={`${
            hasMatured ? "daisy-btn-primary" : "daisy-btn-secondary"
          } daisy-btn-sm daisy-btn`}
        >
          {hasMatured ? "Redeem" : "Close"}
        </button>
      )}
    </Modal>
  );
}
