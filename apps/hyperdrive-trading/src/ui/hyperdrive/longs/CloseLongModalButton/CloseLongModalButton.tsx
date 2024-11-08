import {
  HyperdriveConfig,
  TokenConfig,
  appConfig,
  findBaseToken,
  findToken,
} from "@delvtech/hyperdrive-appconfig";
import { Long } from "@delvtech/hyperdrive-js";
import { ReactElement } from "react";
import { Modal } from "src/ui/base/components/Modal/Modal";
import { ModalHeader } from "src/ui/base/components/Modal/ModalHeader";
import { CloseLongForm } from "src/ui/hyperdrive/longs/CloseLongForm/CloseLongForm";

export interface CloseLongModalButtonProps {
  modalId: string;
  hyperdrive: HyperdriveConfig;
  long: Long;
}
export function CloseLongModalButton({
  modalId,
  long,
  hyperdrive,
}: CloseLongModalButtonProps): ReactElement {
  const baseToken = findBaseToken({
    hyperdriveChainId: hyperdrive.chainId,
    hyperdriveAddress: hyperdrive.address,
    appConfig,
  });
  const sharesToken = findToken({
    chainId: hyperdrive.chainId,
    tokenAddress: hyperdrive.poolConfig.vaultSharesToken,
    tokens: appConfig.tokens,
  });

  const subHeading = sharesToken
    ? getSubHeadingLabel(baseToken, hyperdrive, sharesToken)
    : "";

  return (
    <Modal
      modalId={modalId}
      modalHeader={<ModalHeader heading="Close Long" subHeading={subHeading} />}
      modalContent={
        <div>
          <CloseLongForm
            hyperdrive={hyperdrive}
            long={long}
            onCloseLong={(e) => {
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
    return `Redeem your hy${baseToken.symbol} for ${baseToken.symbol} or ${sharesToken.symbol}`;
  }

  if (hyperdrive.withdrawOptions.isBaseTokenWithdrawalEnabled) {
    return `Redeem your hy${baseToken.symbol} for ${baseToken.symbol}`;
  }

  if (hyperdrive.withdrawOptions.isShareTokenWithdrawalEnabled) {
    return `Redeem your hy${baseToken.symbol} for ${sharesToken.symbol}`;
  }

  // This should never happen and is just to prevent typescript from complaining
  throw new Error("Cannot create subheading label");
}
