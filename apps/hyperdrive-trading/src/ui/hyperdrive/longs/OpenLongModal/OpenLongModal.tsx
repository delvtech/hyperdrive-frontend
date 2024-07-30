import { HyperdriveConfig } from "@hyperdrive/appconfig";
import { ReactElement } from "react";
import { Modal } from "src/ui/base/components/Modal/Modal";
import { ModalHeader } from "src/ui/base/components/Modal/ModalHeader";
import { OpenLongForm } from "src/ui/hyperdrive/longs/OpenLongForm/OpenLongForm";

interface OpenLongModalProps {
  modalId: string;
  numDays: number;
  termLengthMS: number;
  hyperdrive: HyperdriveConfig;
  closeModal: () => void;
}
export function OpenLongModal({
  modalId,
  hyperdrive,
  closeModal,
}: OpenLongModalProps): ReactElement {
  return (
    <Modal
      modalId={modalId}
      modalHeader={<OpenLongModalHeader />}
      modalContent={
        <OpenLongModalForm hyperdrive={hyperdrive} closeModal={closeModal} />
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

export function OpenLongModalHeader(): ReactElement {
  return (
    <ModalHeader
      heading="Open a Long"
      subHeading="Lock in a fixed rate and know your exact yield upfront"
    />
  );
}

interface OpenLongModalFormProps {
  hyperdrive: HyperdriveConfig;
  closeModal: () => void;
}

export function OpenLongModalForm({
  hyperdrive,
}: OpenLongModalFormProps): ReactElement {
  return (
    <div>
      <OpenLongForm
        hyperdrive={hyperdrive}
        onOpenLong={(e) => {
          // preventDefault since we don't want to close the modal while the
          // tx is temporarily pending the user's signature in their wallet.
          e.preventDefault();
        }}
      />
    </div>
  );
}
