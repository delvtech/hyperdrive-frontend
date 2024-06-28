import { HyperdriveConfig } from "@hyperdrive/appconfig";

import { XMarkIcon } from "@heroicons/react/24/solid";
import { ReactElement } from "react";
import { Modal } from "src/ui/base/components/Modal/Modal";
import { ModalHeader } from "src/ui/base/components/Modal/ModalHeader";
import { Stat } from "src/ui/base/components/Stat";
import { BridgeAssetsForm } from "src/ui/bridge/BridgeAssetsForm/BridgeAssetsForm";

interface BridgeAssetsModalProps {
  modalId: string;
  tokenSymbol: string;
  hyperdrive: HyperdriveConfig;
  closeModal: () => void;
  setShowBridgeUI: (showBridgeUI: boolean) => void;
}
export function BridgeAssetsModal({
  modalId,
  tokenSymbol,
  hyperdrive,
  closeModal,
  setShowBridgeUI,
}: BridgeAssetsModalProps): ReactElement {
  return (
    <Modal
      modalId={modalId}
      modalHeader={<BridgeAssetsModalHeader tokenSymbol={tokenSymbol} />}
      modalContent={
        <BridgeAssetsModalForm
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
          + Bridge Assets
        </button>
      )}
    </Modal>
  );
}

interface BridgeAssetsHeaderProps {
  tokenSymbol: string;
}

export function BridgeAssetsModalHeader({
  tokenSymbol,
}: BridgeAssetsHeaderProps): ReactElement {
  return (
    <ModalHeader
      heading={`Bridge ${tokenSymbol}`}
      subHeading="Bring your assets to Mainnet from other chains to use on Hyperdrive"
    >
      <div className="mt-5 flex w-full flex-wrap justify-between gap-4">
        <div className="daisy-badge daisy-badge-lg">
          <Stat
            horizontal
            size="small"
            label={"Balance:"}
            value={`${100} ${tokenSymbol}`}
          />
        </div>
        <div className="daisy-badge daisy-badge-lg"></div>
      </div>
    </ModalHeader>
  );
}

interface BridgeAssetsModalFormProps {
  hyperdrive: HyperdriveConfig;
  closeModal: () => void;
  setShowBridgeUI: (showBridgeUI: boolean) => void;
}

export function BridgeAssetsModalForm({
  hyperdrive,
  closeModal,
  setShowBridgeUI,
}: BridgeAssetsModalFormProps): ReactElement {
  return (
    <div>
      <button
        className="daisy-btn daisy-btn-circle daisy-btn-ghost daisy-btn-sm absolute right-4 top-4"
        onClick={closeModal}
      >
        <XMarkIcon className="w-6 " title="Close position" />
      </button>
      <BridgeAssetsForm
        hyperdrive={hyperdrive}
        onCloseBridgeUI={(e) => {
          // preventDefault since we don't want to close the modal while the
          // tx is temporarily pending the user's signature in their wallet.
          e.preventDefault();
          setShowBridgeUI(false);
        }}
      />
    </div>
  );
}
