import { PauseCircleIcon } from "@heroicons/react/24/solid";
import { HyperdriveConfig } from "@hyperdrive/appconfig";
import { ReactElement, useState } from "react";
import { convertMillisecondsToDays } from "src/base/convertMillisecondsToDays";
import { Modal } from "src/ui/base/components/Modal/Modal";
import { WarningButton } from "src/ui/base/components/WarningButton";
import {
  BridgeAssetsModalForm,
  BridgeAssetsModalHeader,
} from "src/ui/bridge/BridgeAssetsModal/BridgeAssetsModal";
import { useBridgeTokens } from "src/ui/bridge/hooks/useBridgeTokens";
import { useMarketState } from "src/ui/hyperdrive/hooks/useMarketState";
import {
  OpenLongModalForm,
  OpenLongModalHeader,
} from "src/ui/hyperdrive/longs/OpenLongModal/OpenLongModal";
import { useChainId } from "wagmi";

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
  const { tokens } = useBridgeTokens();
  const chainId = useChainId();
  const token = tokens?.find(
    (token) => token.addresses[String(chainId)] === hyperdrive.baseToken,
  );

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
      onClose={() => setShowBridgeUI(false)}
      modalId={modalId}
      activeIndex={showBridgeUI ? 1 : 0}
      modalHeader={[
        <OpenLongModalHeader
          key="long"
          numDays={numDays}
          termLengthMS={termLengthMS}
        />,
        <BridgeAssetsModalHeader key="bridge" tokenSymbol={token?.symbol} />,
      ]}
      modalContent={[
        <OpenLongModalForm
          key="long"
          hyperdrive={hyperdrive}
          closeModal={closeModal}
          setShowBridgeUI={setShowBridgeUI}
        />,
        <BridgeAssetsModalForm
          key="bridge"
          tokenSymbol={token?.symbol}
          closeModal={closeModal}
          setShowBridgeUI={setShowBridgeUI}
        />,
      ]}
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
