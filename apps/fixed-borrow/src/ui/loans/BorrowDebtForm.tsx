import classNames from "classnames";
import { BigNumber } from "ethers";
import { formatUnits } from "ethers/lib/utils.js";
import { ReactElement } from "react";
import { formatBalance } from "src/ui/base/formatting/formatBalance";
import { useNumericInput } from "src/ui/base/useNumericInput";
import { useAaveOracleAssetPrice } from "src/ui/loans/hooks/useAaveOracleAssetPrice";
import { useBorrowDebt } from "src/ui/loans/hooks/useBorrowDebt";
import { useUserAccountData } from "src/ui/loans/hooks/useUserAccountData";
import { useUserCurrentDebt } from "src/ui/loans/hooks/useUserCurrentDebt";
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

  const { userAccountData } = useUserAccountData(account);
  const formattedAvailableBorrow = formatBalance(
    formatUnits(userAccountData?.availableBorrowBase || BigNumber.from(0), 8),
    2,
  );

  const { value: currentDebt, formattedCurrentDebt: formattedUserCurrentDebt } =
    useUserCurrentDebt(account, debtTokenAddress);

  const {
    amount: debtInputAmount,
    amountAsBigNumber: debtInputAmountAsBigNumber,
    setAmount: setDebtInputAmount,
  } = useNumericInput({ decimals: debtTokenMetadata?.decimals });

  const { data: debtTokenPrice } = useAaveOracleAssetPrice(debtTokenAddress);

  const newDebtPreview = currentDebt
    ? currentDebt.add(debtInputAmountAsBigNumber)
    : undefined;
  const formattedNewDebtPreview = newDebtPreview
    ? formatBalance(formatUnits(newDebtPreview, debtTokenMetadata?.decimals), 2)
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
          <div className="daisy-label-text w-full text-right">
            <p>Available to borrow: ${formattedAvailableBorrow}</p>
          </div>
        </div>
      </label>

      <label className="daisy-input-group">
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

      <label className="daisy-label">
        <div className="daisy-label-text grid w-full grid-cols-2">
          <span className="self-start">
            {debtTokenPrice
              ? `1 ${debtTokenMetadata?.symbol} = $${formatBalance(
                  formatUnits(debtTokenPrice, 8),
                  2,
                )}`
              : null}
          </span>
          <div className="text-right">
            <p>
              Current debt: {formattedUserCurrentDebt}{" "}
              {debtTokenMetadata?.symbol}
            </p>
            {debtInputAmount && (
              <p className="text-secondary">
                After: {formattedNewDebtPreview} {debtTokenMetadata?.symbol}
              </p>
            )}
          </div>
        </div>
      </label>

      {/* Borrow Debt button */}
      {debtInputAmount ? (
        <div className="daisy-btn-group justify-end gap-4">
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
