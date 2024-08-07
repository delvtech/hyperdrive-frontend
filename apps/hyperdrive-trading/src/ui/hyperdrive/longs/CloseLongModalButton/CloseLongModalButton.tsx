import { Long } from "@delvtech/hyperdrive-viem";
import { CheckIcon, XMarkIcon } from "@heroicons/react/24/solid";
import {
  EmptyExtensions,
  HyperdriveConfig,
  TokenConfig,
  findBaseToken,
} from "@hyperdrive/appconfig";
import classNames from "classnames";
import { ReactElement } from "react";
import { useAppConfig } from "src/ui/appconfig/useAppConfig";
import { Modal } from "src/ui/base/components/Modal/Modal";
import { ModalHeader } from "src/ui/base/components/Modal/ModalHeader";
import { Stat } from "src/ui/base/components/Stat";
import { formatDate } from "src/ui/base/formatting/formatDate";
import { getRemainingTimeLabel } from "src/ui/hyperdrive/getRemainingTimeLabel";
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
        <ModalHeader heading="Close Long" subHeading={subHeading}>
          <div className="mt-5 flex w-full flex-wrap justify-between gap-4">
            <div
              className={classNames("daisy-badge daisy-badge-lg", {
                "daisy-badge-neutral text-success": isMature,
              })}
            >
              <Stat
                horizontal
                size="small"
                label={isMature ? undefined : "Term:"}
                value={
                  <span
                    className={classNames("flex items-center", {
                      "font-normal": isMature,
                    })}
                  >
                    {isMature ? <CheckIcon className="mr-2 h-4" /> : undefined}
                    {getRemainingTimeLabel({
                      maturitySeconds: Number(long.maturity),
                      condensed: true,
                    })}
                  </span>
                }
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
      modalContent={
        <div>
          <button
            className="daisy-btn daisy-btn-circle daisy-btn-ghost daisy-btn-sm absolute right-4 top-4"
            onClick={closeModal}
          >
            <XMarkIcon className="w-6" title="Close position" />
          </button>
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
