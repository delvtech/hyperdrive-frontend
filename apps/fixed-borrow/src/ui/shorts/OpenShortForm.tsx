import classNames from "classnames";
import { BigNumber } from "ethers";
import { formatUnits, parseUnits } from "ethers/lib/utils.js";
import { ReactElement } from "react";
import { formatBalance } from "src/ui/base/formatting/formatBalance";
import { ApproveAllowanceButton } from "src/ui/loans/ApproveCollateralButton";
import { useOpenShortPreview } from "src/ui/shorts/hooks/useOpenShortPreview";
import { Address, useAccount, useToken } from "wagmi";

export type TermDuration = "90_DAYS" | "180_DAYS" | "270_DAYS";

interface OpenShortFormProps {
  hyperdrivePoolAddress: Address;
  debtTokenAddress: Address;
  onTermDurationChange: (newTerm: TermDuration | undefined) => void;
  termDuration: TermDuration | undefined;
  /**
   * The amount of debt to short.
   */
  debtToShort: BigNumber | undefined;
}

export function OpenShortForm({
  debtToShort,
  debtTokenAddress,
  hyperdrivePoolAddress,
  onTermDurationChange,
  termDuration,
}: OpenShortFormProps): ReactElement {
  const { address: account } = useAccount();
  const { data: debtTokenMetadata } = useToken({ address: debtTokenAddress });
  const { openShortPreview } = useOpenShortPreview({
    hyperdrivePool: hyperdrivePoolAddress,
    bondAmount: debtToShort,
    maxDeposit: debtToShort,
    destination: account,
    asUnderlying: true,
  });
  const formattedDebtToShort = debtToShort
    ? formatBalance(formatUnits(debtToShort, debtTokenMetadata?.decimals), 2)
    : undefined;
  const formattedOpenShortPreview =
    openShortPreview && debtToShort?.gt(0)
      ? formatUnits(openShortPreview, debtTokenMetadata?.decimals)
      : undefined;

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
            type="number"
            disabled
            className="daisy-input-bordered daisy-input w-full"
            value={formattedOpenShortPreview || ""}
          />
          <span>{debtTokenMetadata?.symbol}</span>
        </label>
      </div>
      {debtToShort?.gt(0) ? (
        <div className="text-center">
          The cost to hedge {formattedDebtToShort} {debtTokenMetadata?.symbol}{" "}
          (1.25 * debtAmount)
        </div>
      ) : null}
      <div className="flex flex-col justify-between gap-2 self-end md:flex-row">
        <ApproveAllowanceButton
          amount={
            openShortPreview ||
            parseUnits("1000000000", debtTokenMetadata?.decimals)
          }
          tokenAddress={debtTokenAddress}
          spender={hyperdrivePoolAddress}
        />
        <div className="flex gap-2">
          <button
            onClick={() => onTermDurationChange("90_DAYS")}
            className={classNames("daisy-btn ", {
              "daisy-btn-outline daisy-btn-active":
                termDuration && termDuration === "90_DAYS",
            })}
          >
            3 months
          </button>
          <button
            onClick={() => onTermDurationChange("180_DAYS")}
            className={classNames("daisy-btn", {
              "daisy-btn-outline daisy-btn-active":
                termDuration && termDuration === "180_DAYS",
            })}
          >
            6 months
          </button>
          <button
            onClick={() => onTermDurationChange("270_DAYS")}
            className={classNames("daisy-btn", {
              "daisy-btn-outline daisy-btn-active":
                termDuration && termDuration === "270_DAYS",
            })}
          >
            9 months
          </button>
        </div>
      </div>
    </div>
  );
}
