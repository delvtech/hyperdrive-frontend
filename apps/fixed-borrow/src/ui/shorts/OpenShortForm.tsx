import classNames from "classnames";
import { BigNumber, ethers } from "ethers";
import { formatUnits, parseUnits } from "ethers/lib/utils.js";
import { ReactElement } from "react";
import { useUserCurrentDebt } from "src/ui/loans/hooks/useUserCurrentDebt";
import { useOpenShortPreview } from "src/ui/shorts/hooks/useOpenShortPreview";
import { TermDuration } from "src/ui/shorts/termDuration";
import { Address, useAccount, useToken } from "wagmi";

interface OpenShortFormProps {
  setDuration: (duration: TermDuration) => void;
  duration: TermDuration | undefined;

  debtTokenAddress: Address;
}

export function OpenShortForm({
  setDuration,
  duration,
  debtTokenAddress,
}: OpenShortFormProps): ReactElement {
  const { address: account } = useAccount();
  const { currentDebt } = useUserCurrentDebt(account, debtTokenAddress);
  const { data: debtTokenMetadata } = useToken({ address: debtTokenAddress });
  const shortAmount = parseUnits(
    `${+currentDebt * 1.25}`,
    debtTokenMetadata?.decimals,
  );
  const { openShortPreview } = useOpenShortPreview(
    shortAmount,
    ethers.constants.MaxInt256,
    account,
    true,
  );
  console.log("openShortPreview", openShortPreview);
  const amountToPay = formatUnits(
    openShortPreview || BigNumber.from(0),
    debtTokenMetadata?.decimals,
  );
  return (
    <div className="flex w-full flex-col gap-4">
      <div className="daisy-form-control">
        <label className="daisy-label">
          <span className="daisy-label-text">Hyperdrive Short</span>
          <span className="daisy-label-text">
            Existing shorts: (
            <button className="daisy-link">
              {/* TODO: Make a modal open up on click to show your shorts */}5
            </button>
            )
          </span>
        </label>
        <label className="daisy-input-group">
          <span className="shrink-0">You Pay</span>
          <input
            type="text"
            disabled
            value={amountToPay}
            className="daisy-input-bordered daisy-input w-full"
          />
          <span>DAI</span>
        </label>
      </div>
      <div className="flex justify-end gap-2">
        <button
          onClick={() => setDuration("90_DAYS")}
          className={classNames("daisy-btn ", {
            "daisy-btn-outline daisy-btn-active":
              duration && duration === "90_DAYS",
          })}
        >
          3 months
        </button>
        <button
          onClick={() => setDuration("180_DAYS")}
          className={classNames("daisy-btn", {
            "daisy-btn-outline daisy-btn-active":
              duration && duration === "180_DAYS",
          })}
        >
          6 months
        </button>
        <button
          onClick={() => setDuration("270_DAYS")}
          className={classNames("daisy-btn", {
            "daisy-btn-outline daisy-btn-active":
              duration && duration === "270_DAYS",
          })}
        >
          9 months
        </button>
      </div>
    </div>
  );
}
