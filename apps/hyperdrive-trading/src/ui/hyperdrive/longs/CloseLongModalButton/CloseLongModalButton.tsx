import { Long } from "@delvtech/hyperdrive-viem";
import {
  EmptyExtensions,
  HyperdriveConfig,
  TokenConfig,
  findBaseToken,
} from "@hyperdrive/appconfig";
import { ReactElement } from "react";
import { useAppConfig } from "src/ui/appconfig/useAppConfig";
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
  function closeModal() {
    (window as any)[modalId].close();
  }

  const appConfig = useAppConfig();
  const baseToken = findBaseToken({
    baseTokenAddress: hyperdrive.baseToken,
    tokens: appConfig.tokens,
  });
  const sharesToken = appConfig.tokens.find(
    (token) => token.address === hyperdrive.poolConfig.vaultSharesToken,
  );

  const subHeading = sharesToken
    ? getSubHeadingLabel(baseToken, hyperdrive, sharesToken)
    : "";
  const maturityMilliseconds = Number(long.maturity * 1000n);
  const isMature = Date.now() > maturityMilliseconds;

  return (
    <Modal
      modalId={modalId}
      modalHeader={
        <ModalHeader heading="Close Long" subHeading={subHeading}></ModalHeader>
      }
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
  baseToken: TokenConfig<EmptyExtensions>,
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
