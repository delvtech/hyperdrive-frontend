import classNames from "classnames";
import { BigNumber } from "ethers";
import { formatUnits } from "ethers/lib/utils.js";
import { ReactElement } from "react";
import { formatBalance } from "src/ui/base/formatting/formatBalance";
import { useNumericInput } from "src/ui/base/useNumericInput";
import { useBorrowDebt } from "src/ui/loans/hooks/useBorrowDebt";
import { useUserReservesData } from "src/ui/loans/hooks/useUserReservesData";
import { Address, useAccount, useToken } from "wagmi";

interface BorrowDebtFormProps {
  debtTokenAddress: Address;
}
export function BorrowDebtForm({
  debtTokenAddress,
}: BorrowDebtFormProps): ReactElement {
  const { address: account } = useAccount();
  const { data: debtTokenMetadata } = useToken({
    address: debtTokenAddress,
  });

  const { userReservesData } = useUserReservesData(account);
  const debtTokenReservesData = userReservesData?.find(
    (d) => d.underlyingAsset === debtTokenAddress,
  );
  const formattedUserCurrentDebt = formatBalance(
    formatUnits(
      debtTokenReservesData?.scaledVariableDebt || BigNumber.from(0),
      debtTokenMetadata?.decimals,
    ),
  );

  const {
    amount: debtInputAmount,
    amountAsBigNumber: debtInputAmountAsBigNumber,
    setAmount: setDebtInputAmount,
  } = useNumericInput({ decimals: debtTokenMetadata?.decimals });

  const newDebtPreview = debtTokenReservesData
    ? debtTokenReservesData.scaledVariableDebt.add(debtInputAmountAsBigNumber)
    : undefined;
  const formattedNewDebtPreview = newDebtPreview
    ? formatBalance(formatUnits(newDebtPreview, debtTokenMetadata?.decimals))
    : undefined;

  const { borrow, status: borrowStatus } = useBorrowDebt(
    debtTokenAddress,
    debtInputAmountAsBigNumber,
    account,
  );
  const isBorrowButtonDisabled = !borrow || borrowStatus === "loading";

  return (
    <div className="daisy-form-control w-full">
      <label className="daisy-label">
        <div className="daisy-label-text grid w-full grid-cols-2">
          <span className="self-end">Debt</span>
          <div className="text-right">
            <p>
              Current debt: {formattedUserCurrentDebt}{" "}
              {debtTokenMetadata?.symbol}
            </p>
            {debtInputAmount && (
              <p className="daisy-label-text text-secondary">
                After: {formattedNewDebtPreview} {debtTokenMetadata?.symbol}
              </p>
            )}
          </div>
        </div>
      </label>

      <label className="daisy-input-group mb-2">
        <span>{debtTokenMetadata?.symbol}</span>
        <input
          type="number"
          placeholder="Enter an amount to borrow"
          className="daisy-input-bordered daisy-input w-full text-secondary focus:border-secondary"
          onChange={(e) => {
            setDebtInputAmount(e.target.value);
          }}
        />
      </label>

      {/* Borrow Debt button */}
      {debtInputAmount ? (
        <div className="daisy-btn-group justify-end gap-4">
          <button
            disabled={isBorrowButtonDisabled}
            className={classNames(
              "daisy-btn-outline daisy-btn daisy-btn-secondary daisy-btn-wide",
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
