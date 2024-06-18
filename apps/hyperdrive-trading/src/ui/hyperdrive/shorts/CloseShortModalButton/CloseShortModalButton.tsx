import { OpenShort } from "@delvtech/hyperdrive-viem";
import { XMarkIcon } from "@heroicons/react/24/solid";
import {
  EmptyExtensions,
  HyperdriveConfig,
  TokenConfig,
  YieldSourceExtensions,
  findBaseToken,
  findYieldSourceToken,
} from "@hyperdrive/appconfig";
import classNames from "classnames";
import { ReactElement } from "react";
import { useAppConfig } from "src/ui/appconfig/useAppConfig";
import { Modal } from "src/ui/base/components/Modal/Modal";
import { ModalHeader } from "src/ui/base/components/Modal/ModalHeader";
import { Stat } from "src/ui/base/components/Stat";
import { formatDate } from "src/ui/base/formatting/formatDate";
import { getRemainingTimeLabel } from "src/ui/hyperdrive/getRemainingTimeLabel";
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
  const appConfig = useAppConfig();
  const baseToken = findBaseToken({
    baseTokenAddress: hyperdrive.baseToken,
    tokens: appConfig.tokens,
  });
  const sharesToken = findYieldSourceToken({
    yieldSourceTokenAddress: hyperdrive.sharesToken,
    tokens: appConfig.tokens,
  });
  const subHeading = getSubHeadingLabel(baseToken, hyperdrive, sharesToken);
  const maturityMilliseconds = Number(short.maturity * 1000n);
  const isMature = Date.now() > maturityMilliseconds;
  function closeModal() {
    (window as any)[modalId].close();
  }

  return (
    <Modal
      modalHeader={
        <ModalHeader heading="Close Short" subHeading={subHeading}>
          <div className="mt-5 flex w-full flex-wrap justify-between gap-4">
            <div
              className={classNames("daisy-badge daisy-badge-lg", {
                "text-success": isMature,
              })}
            >
              <Stat
                horizontal
                size="small"
                label={isMature ? undefined : "Term:"}
                value={getRemainingTimeLabel(Number(short.maturity))}
              />
            </div>
            <div className="daisy-badge daisy-badge-lg">
              <Stat
                horizontal
                size="small"
                label="Maturity Date:"
                value={formatDate(maturityMilliseconds)}
              />
            </div>
          </div>
        </ModalHeader>
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
  baseToken: TokenConfig<EmptyExtensions>,
  hyperdrive: HyperdriveConfig,
  sharesToken: TokenConfig<YieldSourceExtensions>,
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
