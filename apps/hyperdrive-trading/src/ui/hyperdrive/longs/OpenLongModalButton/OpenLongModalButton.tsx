import { PauseCircleIcon, XMarkIcon } from "@heroicons/react/24/solid";
import { HyperdriveConfig } from "@hyperdrive/appconfig";
import { ReactElement, useState } from "react";
import { convertMillisecondsToDays } from "src/base/convertMillisecondsToDays";
import { Modal } from "src/ui/base/components/Modal/Modal";
import { ModalHeader } from "src/ui/base/components/Modal/ModalHeader";
import { Stat } from "src/ui/base/components/Stat";
import { WarningButton } from "src/ui/base/components/WarningButton";
import { formatDate } from "src/ui/base/formatting/formatDate";
import { useTokens } from "src/ui/bridge/hooks/useTokens";
import { useMarketState } from "src/ui/hyperdrive/hooks/useMarketState";
import { OpenLongForm } from "src/ui/hyperdrive/longs/OpenLongForm/OpenLongForm";
import { mainnet } from "viem/chains";

export interface OpenLongModalButtonProps {
  modalId: string;
  hyperdrive: HyperdriveConfig;
}
export function OpenLongModalButton({
  modalId,
  hyperdrive,
}: OpenLongModalButtonProps): ReactElement {
  const { marketState } = useMarketState(hyperdrive.address);
  const [showBridgeUI, setShowBridgeUI] = useState(false);
  const { tokens } = useTokens();
  console.log("tokens", tokens);
  const token = tokens?.find(
    (token) => token.addresses?.[String(mainnet.id)] === hyperdrive.baseToken,
  );
  console.log("hyperdrive", hyperdrive);
  console.log("token", token);
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
        showBridgeUI && token ? (
          <BridgeAssetsHeader tokenSymbol={token.symbol!} />
        ) : (
          <OpenLongHeader numDays={numDays} termLengthMS={termLengthMS} />
        )
      }
      modalContent={
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

interface OpenLongHeaderProps {
  numDays: number;
  termLengthMS: number;
}

function OpenLongHeader({
  numDays,
  termLengthMS,
}: OpenLongHeaderProps): ReactElement {
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

interface BridgeAssetsHeaderProps {
  tokenSymbol: string;
}

function BridgeAssetsHeader({
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
