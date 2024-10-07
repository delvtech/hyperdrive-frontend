import { OpenShort } from "@delvtech/hyperdrive-viem";
import { XMarkIcon } from "@heroicons/react/24/solid";
import {
  HyperdriveConfig,
  TokenConfig,
  appConfig,
  findBaseToken,
  findToken,
} from "@hyperdrive/appconfig";
import { ReactElement } from "react";
import { Modal } from "src/ui/base/components/Modal/Modal";
import { ModalHeader } from "src/ui/base/components/Modal/ModalHeader";
import { CloseShortForm } from "src/ui/hyperdrive/shorts/CloseShortForm/CloseShortForm";

export interface CloseShortModalButtonProps {
  modalId: string;
  hyperdrive: HyperdriveConfig;
  short: OpenShort;
}
export function CloseShortModalButton({
  modalId,
  short,
  hyperdrive,
}: CloseShortModalButtonProps): ReactElement {
  const baseToken = findBaseToken({
    hyperdriveChainId: hyperdrive.chainId,
    hyperdriveAddress: hyperdrive.address,
    appConfig,
  });
  const sharesToken = findToken({
    chainId: hyperdrive.chainId,
    tokens: appConfig.tokens,
    tokenAddress: hyperdrive.poolConfig.vaultSharesToken,
  });
  const subHeading = sharesToken
    ? getSubHeadingLabel(baseToken, hyperdrive, sharesToken)
    : "";

  const maturityMilliseconds = Number(short.maturity * 1000n);
  const isMature = Date.now() > maturityMilliseconds;
  function closeModal() {
    (document.getElementById(modalId) as HTMLDialogElement)?.close();
  }
  console.log(subHeading, "subheading");
  return (
    <Modal
      modalHeader={
        <ModalHeader heading="Close Short" subHeading={subHeading} />
      }
      modalId={modalId}
      modalContent={
        <div>
          <button
            className="daisy-btn daisy-btn-circle daisy-btn-ghost daisy-btn-sm absolute right-4 top-4"
            onClick={closeModal}
          >
            <XMarkIcon className="w-6" title="Close position" />
          </button>
          <CloseShortForm
            hyperdrive={hyperdrive}
            short={short}
            onCloseShort={(e) => {
              // preventDefault since we don't want to close the modal while the
              // tx is temporarily pending the user's signature in their wallet.
              e.preventDefault();
            }}
          />
        </div>
      }
    />
  );
}

function getSubHeadingLabel(
  baseToken: TokenConfig,
  hyperdrive: HyperdriveConfig,
  sharesToken: TokenConfig,
) {
  if (
    hyperdrive.withdrawOptions.isBaseTokenWithdrawalEnabled &&
    hyperdrive.withdrawOptions.isShareTokenWithdrawalEnabled
  ) {
    return `Redeem your short for ${baseToken.symbol} or ${sharesToken.symbol}`;
  }

  if (hyperdrive.withdrawOptions.isBaseTokenWithdrawalEnabled) {
    return `Redeem your short for ${baseToken.symbol}`;
  }

  if (hyperdrive.withdrawOptions.isShareTokenWithdrawalEnabled) {
    return `Redeem your short for ${sharesToken.symbol}`;
  }

  // This should never happen and is just to prevent typescript from complaining
  throw new Error("Cannot create subheading label");
}
