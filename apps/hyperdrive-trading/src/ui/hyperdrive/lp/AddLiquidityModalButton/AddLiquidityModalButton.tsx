import { PauseCircleIcon } from "@heroicons/react/16/solid";
import { HyperdriveConfig } from "@hyperdrive/appconfig";
import { ReactElement } from "react";
import { useAppConfig } from "src/ui/appconfig/useAppConfig";
import { Modal } from "src/ui/base/components/Modal/Modal";
import { ModalHeader } from "src/ui/base/components/Modal/ModalHeader";
import { WarningButton } from "src/ui/base/components/WarningButton";
import { useMarketState } from "src/ui/hyperdrive/hooks/useMarketState";
import { AddLiquidityForm } from "src/ui/hyperdrive/lp/AddLiquidityForm/AddLiquidityForm";

export function AddLiquidityModalButton({
  modalId,
  hyperdrive,
}: {
  modalId: string;
  hyperdrive: HyperdriveConfig;
}): ReactElement {
  const { marketState } = useMarketState(hyperdrive.address);
  const appConfig = useAppConfig();

  const yieldSource = appConfig.yieldSources[hyperdrive.yieldSource];

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
          heading="Add Liquidity"
          subHeading={`Earn yield by providing liquidity for Longs and
          Shorts. Your liquidity also earns the ${yieldSource.shortName}
          rate when not in use.
          `}
        />
      }
      modalContent={
        <AddLiquidityForm
          hyperdrive={hyperdrive}
          onAddLiquidity={(e) => {
            // preventDefault since we don't want to close the modal while the
            // tx is temporarily pending the user's signature in their wallet.
            e.preventDefault();
          }}
        />
      }
    >
      {({ showModal }) => (
        <button
          className="daisy-btn daisy-btn-primary rounded-full"
          onClick={() => showModal()}
        >
          + Add liquidity
        </button>
      )}
    </Modal>
  );
}
