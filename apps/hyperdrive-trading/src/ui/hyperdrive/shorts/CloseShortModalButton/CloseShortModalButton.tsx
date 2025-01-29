import {
  HyperdriveConfig,
  TokenConfig,
  getBaseToken,
  getToken,
} from "@delvtech/hyperdrive-appconfig";
import { OpenShort } from "@delvtech/hyperdrive-js";
import { ReactElement } from "react";
import { useAppConfigForConnectedChain } from "src/ui/appconfig/useAppConfigForConnectedChain";
import { Modal } from "src/ui/base/components/Modal/Modal";
import { ModalHeader } from "src/ui/base/components/Modal/ModalHeader";
import { CloseShortForm } from "src/ui/hyperdrive/shorts/CloseShortForm/CloseShortForm";
import { Address } from "viem";

export interface CloseShortModalButtonProps {
  modalId: string;
  hyperdrive: HyperdriveConfig;
  account: Address | undefined;
  short: OpenShort;
}
export function CloseShortModalButton({
  modalId,
  short,
  account,
  hyperdrive,
}: CloseShortModalButtonProps): ReactElement {
  const appConfig = useAppConfigForConnectedChain();
  const baseToken = getBaseToken({
    hyperdriveChainId: hyperdrive.chainId,
    hyperdriveAddress: hyperdrive.address,
    appConfig,
  });
  const sharesToken = getToken({
    chainId: hyperdrive.chainId,
    tokenAddress: hyperdrive.poolConfig.vaultSharesToken,
    appConfig,
  });
  const subHeading = sharesToken
    ? getSubHeadingLabel(baseToken, hyperdrive, sharesToken)
    : "";

  return (
    <Modal
      modalHeader={
        <ModalHeader heading="Close Short" subHeading={subHeading} />
      }
      modalId={modalId}
      modalContent={
        <CloseShortForm
          account={account}
          hyperdrive={hyperdrive}
          short={short}
          onCloseShort={(e) => {
            // preventDefault since we don't want to close the modal while the
            // tx is temporarily pending the user's signature in their wallet.
            e.preventDefault();
          }}
        />
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
