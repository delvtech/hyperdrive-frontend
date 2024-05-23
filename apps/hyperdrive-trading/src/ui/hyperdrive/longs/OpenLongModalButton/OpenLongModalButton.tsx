import { PauseCircleIcon, XMarkIcon } from "@heroicons/react/24/solid";
import { HyperdriveConfig } from "@hyperdrive/appconfig";
import { ReactElement } from "react";
import { Modal } from "src/ui/base/components/Modal/Modal";
import { WarningButton } from "src/ui/base/components/WarningButton";
import { useMarketState } from "src/ui/hyperdrive/hooks/useMarketState";
import { OpenLongForm } from "src/ui/hyperdrive/longs/OpenLongForm/OpenLongForm";

export interface OpenLongModalButtonProps {
  modalId: string;
  hyperdrive: HyperdriveConfig;
}
export function OpenLongModalButton({
  modalId,
  hyperdrive,
}: OpenLongModalButtonProps): ReactElement {
  const { marketState } = useMarketState(hyperdrive.address);
  function closeModal() {
    (window as any)[modalId].close();
  }

  if (marketState?.isPaused) {
    return (
      <WarningButton
        label="Market Paused"
        icon={<PauseCircleIcon width={16} />}
        tooltip="This market is currently paused. You cannot open new positions but you may close existing ones."
      />
    );
  }
  return (
    <Modal
      modalId={modalId}
      modalContent={
        <div>
          <div className="h-30 flex w-full items-center justify-between p-8">
            <div className="flex flex-col gap-1">
              <h5 className="gradient-text">Open a Long</h5>
              <p>Lock in a fixed rate on your assets</p>
            </div>
            <button
              className="daisy-btn daisy-btn-circle daisy-btn-ghost daisy-btn-sm "
              onClick={closeModal}
            >
              <XMarkIcon className="w-6 " title="Close position" />
            </button>
          </div>
          <div className="bg-base-100 p-6">
            <OpenLongForm
              hyperdrive={hyperdrive}
              onOpenLong={(e) => {
                // preventDefault since we don't want to close the modal while the
                // tx is temporarily pending the user's signature in their wallet.
                e.preventDefault();
              }}
            />
          </div>
        </div>
      }
    >
      {({ showModal }) => (
        <button
          className="daisy-btn daisy-btn-primary rounded-full"
          onClick={() => showModal()}
        >
          + Open a Long
        </button>
      )}
    </Modal>
  );
}
