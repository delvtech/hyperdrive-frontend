import classNames from "classnames";
import { formatUnits, parseUnits } from "ethers/lib/utils.js";
import { ReactElement } from "react";
import { formatBalance } from "src/ui/base/formatting/formatBalance";
import { useNumericInput } from "src/ui/base/useNumericInput";
import { useBorrowDebt } from "src/ui/loans/hooks/useBorrowDebt";
import { useAccount, useToken } from "wagmi";

interface BorrowDebtFormProps {
  debtTokenAddress: `0x${string}`;
}
export function BorrowDebtForm({
  debtTokenAddress,
}: BorrowDebtFormProps): ReactElement {
  const { address: account } = useAccount();
  const { data: debtTokenMetadata } = useToken({
    address: debtTokenAddress,
  });

  const { amountAsBigNumber: debtAmountAsBigNumber, setAmount: setDebtAmount } =
    useNumericInput({ decimals: debtTokenMetadata?.decimals });

  const accountCurrentDebt = parseUnits("0"); // TODO: Get this from on-chain
  const afterAmount = accountCurrentDebt.add(debtAmountAsBigNumber);
  const formattedAfterAmount = formatBalance(
    formatUnits(afterAmount, debtTokenMetadata?.decimals),
  );

  const { borrow, status: borrowStatus } = useBorrowDebt(
    debtTokenAddress,
    debtAmountAsBigNumber,
    account,
  );
  const isBorrowButtonDisabled = !borrow || borrowStatus === "loading";

  return (
    <div className="daisy-form-control w-full">
      <label className="daisy-label">
        <span className="daisy-label-text">{afterAmount ? "" : "Debt"}</span>
        <span className="daisy-label-text">
          Current debt:{" "}
          {formatBalance(
            formatUnits(accountCurrentDebt, debtTokenMetadata?.decimals),
          )}{" "}
          DAI
        </span>
      </label>
      <label className="daisy-label -mt-4">
        <span className="daisy-label-text">{!afterAmount ? "" : "Debt"}</span>
        {afterAmount.gt(0) && (
          <span className="daisy-label-text text-secondary">
            After: {formattedAfterAmount} {debtTokenMetadata?.symbol}
          </span>
        )}
      </label>
      <label className="daisy-input-group">
        <span>{debtTokenMetadata?.symbol}</span>
        <input
          type="number"
          placeholder="Enter an amount to borrow"
          className="daisy-input-bordered daisy-input w-full text-secondary"
          onChange={(e) => {
            setDebtAmount(e.target.value);
          }}
        />
      </label>
      {afterAmount.gt(0) ? (
        <div className="daisy-btn-group justify-end gap-4">
          {/* Supply collateral button */}
          <button
            disabled={isBorrowButtonDisabled}
            className={classNames(
              "daisy-btn-outline daisy-btn-secondary daisy-btn-wide daisy-btn",
              { "daisy-loading": borrowStatus === "loading" },
            )}
            onClick={() => borrow?.()}
          >
            Borrow {debtTokenMetadata?.symbol}
          </button>
        </div>
      ) : null}
    </div>
  );
}
