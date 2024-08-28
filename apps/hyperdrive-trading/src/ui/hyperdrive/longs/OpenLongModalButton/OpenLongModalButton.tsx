import { PauseCircleIcon } from "@heroicons/react/24/solid";
import { HyperdriveConfig } from "@hyperdrive/appconfig";
import { ReactElement } from "react";
import { Modal } from "src/ui/base/components/Modal/Modal";
import { WarningButton } from "src/ui/base/components/WarningButton";
import { useMarketState } from "src/ui/hyperdrive/hooks/useMarketState";
import {
  OpenLongModalForm,
  OpenLongModalHeader,
} from "src/ui/hyperdrive/longs/OpenLongModal/OpenLongModal";

export interface OpenLongModalButtonProps {
  modalId: string;
  hyperdrive: HyperdriveConfig;
}
export function OpenLongModalButton({
  modalId,
  hyperdrive,
}: OpenLongModalButtonProps): ReactElement {
  const { marketState } = useMarketState({
    chainId: hyperdrive.chainId,
    hyperdriveAddress: hyperdrive.address,
  });

  function closeModal() {
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
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
      modalHeader={<OpenLongModalHeader key="long" />}
      modalContent={
        <OpenLongModalForm
          key="long"
          hyperdrive={hyperdrive}
          closeModal={closeModal}
        />
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
