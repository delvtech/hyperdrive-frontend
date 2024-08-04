import { PauseCircleIcon } from "@heroicons/react/16/solid";
import { SparklesIcon } from "@heroicons/react/24/outline";
import { XMarkIcon } from "@heroicons/react/24/solid";
import {
  type HyperdriveConfig,
  findYieldSourceToken,
} from "@hyperdrive/appconfig";
import type { ReactElement } from "react";
import { useAppConfig } from "src/ui/appconfig/useAppConfig";
import { Modal } from "src/ui/base/components/Modal/Modal";
import { ModalHeader } from "src/ui/base/components/Modal/ModalHeader";
import { Stat } from "src/ui/base/components/Stat";
import { WarningButton } from "src/ui/base/components/WarningButton";
import { useLpApy } from "src/ui/hyperdrive/hooks/useLpApy";
import { useMarketState } from "src/ui/hyperdrive/hooks/useMarketState";
import { AddLiquidityForm } from "src/ui/hyperdrive/lp/AddLiquidityForm/AddLiquidityForm";
import { useYieldSourceRate } from "src/ui/vaults/useYieldSourceRate";

export function AddLiquidityModalButton({
  modalId,
  hyperdrive,
}: {
  modalId: string;
  hyperdrive: HyperdriveConfig;
}): ReactElement {
  const { marketState } = useMarketState(hyperdrive.address);
  const appConfig = useAppConfig();
  const { lpApy } = useLpApy(hyperdrive.address);
  // TODO: copied from YieldStats, this should be formalized in useLpApy
  const lpApyLabel =
    lpApy === undefined ? (
      <span className="gradient-text flex flex-row items-center">
        <SparklesIcon width={18} className="fill-primary stroke-none" />
        New
      </span>
    ) : (
      `${(lpApy * 100).toFixed(2) === "-0.00" ? "0.00" : (lpApy * 100).toFixed(2)}%`
    );

  const { vaultRate } = useYieldSourceRate({
    hyperdriveAddress: hyperdrive.address,
  });
  const yieldSourceToken = findYieldSourceToken({
    tokens: appConfig.tokens,
    yieldSourceTokenAddress: hyperdrive.sharesToken,
  });

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
        <ModalHeader
          heading="Add Liquidity"
          subHeading={`Earn yield by providing liquidity for Longs and
          Shorts. Your liquidity also earns the ${yieldSourceToken.extensions.shortName}
          rate when not in use.
          `}
        >
          {" "}
          <div className="mt-5 flex w-full flex-wrap justify-between gap-4">
            <div className="gradient-text daisy-badge daisy-badge-lg">
              <Stat
                horizontal
                size="small"
                label={"LP APY:"}
                value={lpApyLabel}
              />
            </div>
            <div className="daisy-badge daisy-badge-lg">
              <Stat
                horizontal
                size="small"
                label={`${yieldSourceToken.extensions.shortName}:`}
                value={`${vaultRate?.formatted || 0n}`}
              />
            </div>
          </div>
        </ModalHeader>
      }
      modalContent={
        <div>
          <button
            className="daisy-btn daisy-btn-circle daisy-btn-ghost daisy-btn-sm absolute right-4 top-4"
            onClick={closeModal}
          >
            <XMarkIcon className="w-6 " title="Close position" />
          </button>
          <AddLiquidityForm
            hyperdrive={hyperdrive}
            onAddLiquidity={(e) => {
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
          + Add liquidity
        </button>
      )}
    </Modal>
  );
}
