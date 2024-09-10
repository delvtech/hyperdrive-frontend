import { PauseCircleIcon } from "@heroicons/react/24/solid";
import { HyperdriveConfig } from "@hyperdrive/appconfig";
import { ReactElement } from "react";
import { convertMillisecondsToDays } from "src/base/convertMillisecondsToDays";
import { useAppConfig } from "src/ui/appconfig/useAppConfig";
import { Modal } from "src/ui/base/components/Modal/Modal";
import { ModalHeader } from "src/ui/base/components/Modal/ModalHeader";
import { WarningButton } from "src/ui/base/components/WarningButton";
import { useMarketState } from "src/ui/hyperdrive/hooks/useMarketState";
import { OpenShortForm } from "src/ui/hyperdrive/shorts/OpenShortForm/OpenShortForm";

export interface OpenShortModalButtonProps {
  modalId: string;
  hyperdrive: HyperdriveConfig;
}
export function OpenShortModalButton({
  modalId,
  hyperdrive,
}: OpenShortModalButtonProps): ReactElement {
  const { marketState } = useMarketState({
    chainId: hyperdrive.chainId,
    hyperdriveAddress: hyperdrive.address,
  });

  const appConfig = useAppConfig();
  const termLengthMS = Number(hyperdrive.poolConfig.positionDuration * 1000n);
  const numDays = convertMillisecondsToDays(termLengthMS);
  function closeModal() {
    (window as any)[modalId]?.close();
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
        <ModalHeader
          heading="Open a Short"
          subHeading={`Buy exposure to ${appConfig.yieldSources[hyperdrive.yieldSource].shortName} with minimal upfront capital`}
        />
      }
      modalContent={
        <div>
          <OpenShortForm
            hyperdrive={hyperdrive}
            onOpenShort={(e) => {
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
          className="daisy-btn daisy-btn-primary rounded-full"
          onClick={() => showModal()}
        >
          + Open a short
        </button>
      )}
    </Modal>
  );
}
