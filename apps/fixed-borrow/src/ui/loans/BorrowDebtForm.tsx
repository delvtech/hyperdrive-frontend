import classNames from "classnames";
import { formatUnits, parseUnits } from "ethers/lib/utils.js";
import { ReactElement, useState } from "react";
import { formatBalance } from "src/ui/base/formatting/formatBalance";
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
  const accountCurrentDebt = parseUnits("0"); // TODO: Get this from on-chain

  const [debtAmount, setDebtAmount] = useState<string | undefined>();
  const debtAmountAsBigNumber = parseUnits(
    debtAmount || "0",
    debtTokenMetadata?.decimals,
  );
  const afterAmount = accountCurrentDebt.add(debtAmountAsBigNumber);
  const formattedAfterAmount = formatBalance(
    formatUnits(afterAmount, debtTokenMetadata?.decimals),
  );

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
            // disabled={isSupplyButtonDisabled}
            className={classNames(
              "daisy-btn-outline daisy-btn daisy-btn-secondary daisy-btn-wide",
              // { "daisy-loading": supplyStatus === "loading" },
            )}
            // onClick={() => supply?.()}
          >
            Borrow {debtTokenMetadata?.symbol}
          </button>
        </div>
      ) : null}
    </div>
  );
}
