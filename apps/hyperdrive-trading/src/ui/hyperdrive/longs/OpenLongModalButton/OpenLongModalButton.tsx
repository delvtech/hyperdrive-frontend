import { PauseCircleIcon } from "@heroicons/react/24/solid";
import { HyperdriveConfig } from "@hyperdrive/appconfig";
import { ReactElement } from "react";
import { convertMillisecondsToDays } from "src/base/convertMillisecondsToDays";
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
  const { marketState } = useMarketState(hyperdrive.address);

  const termLengthMS = Number(hyperdrive.poolConfig.positionDuration * 1000n);
  const numDays = convertMillisecondsToDays(termLengthMS);
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
      modalHeader={
        <OpenLongModalHeader
          key="long"
          numDays={numDays}
          termLengthMS={termLengthMS}
        />
      }
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
