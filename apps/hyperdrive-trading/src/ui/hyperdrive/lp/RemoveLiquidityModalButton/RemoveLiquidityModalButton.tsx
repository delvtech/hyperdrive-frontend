import { XMarkIcon } from "@heroicons/react/24/solid";
import { ReactElement } from "react";
import { Hyperdrive } from "src/appconfig/types";
import { Modal } from "src/ui/base/components/Modal/Modal";
import { useFeatureFlag } from "src/ui/base/featureFlags/featureFlags";
import { RemoveLiquidityForm } from "src/ui/hyperdrive/lp/RemoveLiquidityForm/RemoveLiquidityForm";
import { RemoveLiquidityFormNew } from "src/ui/hyperdrive/lp/RemoveLiquidityForm/RemoveLiquidityFormNew";
import { NO_LP_SHARES_FEATURE_FLAG } from "src/ui/portfolio/featureFlags";

export interface RemoveLiquidityModalButtonProps {
  modalId: string;
  lpShares: bigint;
  hyperdrive: Hyperdrive;
}
export function RemoveLiquidityModalButton({
  modalId,
  lpShares,
  hyperdrive,
}: RemoveLiquidityModalButtonProps): ReactElement {
  function closeModal() {
    (window as any)[modalId].close();
  }
  const { isFlagEnabled: showNewForm } = useFeatureFlag(
    NO_LP_SHARES_FEATURE_FLAG,
  );

  return (
    <Modal
      modalId={modalId}
      modalContent={
        <div>
          <button
            className="daisy-btn-ghost daisy-btn daisy-btn-sm daisy-btn-circle absolute right-4 top-4"
            onClick={closeModal}
          >
            <XMarkIcon
              className="w-6 opacity-70 hover:opacity-100 focus:opacity-100"
              title="Close position"
            />
          </button>
          {showNewForm ? (
            <RemoveLiquidityFormNew
              hyperdrive={hyperdrive}
              lpShares={lpShares}
              onRemoveLiquidity={(e) => {
                // preventDefault since we don't want to close the modal while the
                // tx is temporarily pending the user's signature in their wallet.
                e.preventDefault();
              }}
            />
          ) : (
            <RemoveLiquidityForm
              hyperdrive={hyperdrive}
              lpShares={lpShares}
              onRemoveLiquidity={(e) => {
                // preventDefault since we don't want to close the modal while the
                // tx is temporarily pending the user's signature in their wallet.
                e.preventDefault();
              }}
            />
          )}
        </div>
      }
    >
      {({ showModal }) => (
        <button
          onClick={showModal}
          tabIndex={0}
          className="daisy-btn-secondary daisy-btn daisy-btn-sm"
        >
          Remove
        </button>
      )}
    </Modal>
  );
}
