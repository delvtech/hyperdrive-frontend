import { XMarkIcon } from "@heroicons/react/24/solid";
import { HyperdriveConfig } from "@hyperdrive/appconfig";
import { ReactElement } from "react";
import { Modal } from "src/ui/base/components/Modal/Modal";
import { ModalHeader } from "src/ui/base/components/Modal/ModalHeader";
import { Stat } from "src/ui/base/components/Stat";
import { formatDate } from "src/ui/base/formatting/formatDate";
import { OpenLongForm } from "src/ui/hyperdrive/longs/OpenLongForm/OpenLongForm";

interface OpenLongModalProps {
  modalId: string;
  numDays: number;
  termLengthMS: number;
  hyperdrive: HyperdriveConfig;
  closeModal: () => void;
  setShowBridgeUI: (showBridgeUI: boolean) => void;
}
export function OpenLongModal({
  modalId,
  numDays,
  termLengthMS,
  hyperdrive,
  closeModal,
  setShowBridgeUI,
}: OpenLongModalProps): ReactElement {
  return (
    <Modal
      modalId={modalId}
      modalHeader={
        <OpenLongModalHeader numDays={numDays} termLengthMS={termLengthMS} />
      }
      modalContent={
        <OpenLongModalForm
          hyperdrive={hyperdrive}
          setShowBridgeUI={setShowBridgeUI}
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

interface OpenLongModalHeaderProps {
  numDays: number;
  termLengthMS: number;
}

function OpenLongModalHeader({
  numDays,
  termLengthMS,
}: OpenLongModalHeaderProps): ReactElement {
  return (
    <ModalHeader
      heading="Open a Long"
      subHeading="Buy the fixed rate and know your exact yield upfront"
    >
      <div className="mt-5 flex w-full flex-wrap justify-between gap-4">
        <div className="daisy-badge daisy-badge-lg">
          <Stat
            horizontal
            size="small"
            label={"Term:"}
            value={`${numDays} days`}
          />
        </div>
        <div className="daisy-badge daisy-badge-lg">
          <Stat
            horizontal
            size="small"
            label="Maturity Date:"
            value={formatDate(Date.now() + termLengthMS)}
          />
        </div>
      </div>
    </ModalHeader>
  );
}

interface OpenLongModalFormProps {
  hyperdrive: HyperdriveConfig;
  closeModal: () => void;
  setShowBridgeUI: (showBridgeUI: boolean) => void;
}

export function OpenLongModalForm({
  hyperdrive,
  closeModal,
  setShowBridgeUI,
}: OpenLongModalFormProps): ReactElement {
  return (
    <div>
      <button
        className="daisy-btn daisy-btn-circle daisy-btn-ghost daisy-btn-sm absolute right-4 top-4"
        onClick={closeModal}
      >
        <XMarkIcon className="w-6 " title="Close position" />
      </button>
      <OpenLongForm
        hyperdrive={hyperdrive}
        onOpenLong={(e) => {
          // preventDefault since we don't want to close the modal while the
          // tx is temporarily pending the user's signature in their wallet.
          e.preventDefault();
        }}
        onOpenBridge={(e) => {
          // preventDefault since we don't want to close the modal while the
          // tx is temporarily pending the user's signature in their wallet.
          e.preventDefault();
          setShowBridgeUI(true);
        }}
      />
    </div>
  );
}
