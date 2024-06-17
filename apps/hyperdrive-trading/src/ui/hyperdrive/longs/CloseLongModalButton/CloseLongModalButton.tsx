import { Long } from "@delvtech/hyperdrive-viem";
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
  const sharesToken = findYieldSourceToken({
    yieldSourceTokenAddress: hyperdrive.sharesToken,
    tokens: appConfig.tokens,
  });

  const subHeading = getSubHeadingLabel(baseToken, hyperdrive, sharesToken);
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
                "text-success": isMature,
              })}
            >
              <Stat
                horizontal
                size="small"
                label={isMature ? "" : "Term:"}
                value={getRemainingTimeLabel(Number(long.maturity))}
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
            <XMarkIcon className="w-6 " title="Close position" />
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
  sharesToken: TokenConfig<YieldSourceExtensions>,
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
  return "";
}
