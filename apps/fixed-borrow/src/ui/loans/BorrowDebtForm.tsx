import { parseUnits } from "ethers/lib/utils.js";
import { ReactElement, useState } from "react";
import { useAccount } from "wagmi";

export function BorrowDebtForm(): ReactElement {
  const { address: account } = useAccount();
  const [debtAmount, setDebtAmount] = useState<string | undefined>();
  const debtAmountAsBigNumber = parseUnits(debtAmount || "0", 8);

  return (
    <div className="daisy-form-control w-full">
      <label className="daisy-label">
        <span className="daisy-label-text">Debt</span>
        <span className="daisy-label-text">Current debt: 3,001 DAI</span>
      </label>
      <label className="daisy-label -mt-4">
        <span className="daisy-label-text" />
        <span className="daisy-label-text text-secondary">
          After: 8,004.02 DAI
        </span>
      </label>
      <label className="daisy-input-group">
        <span>DAI</span>
        <input
          type="number"
          placeholder="Enter an amount to borrow"
          className="daisy-input-bordered daisy-input w-full text-primary"
          onChange={(e) => {
            setDebtAmount(e.target.value);
          }}
        />
      </label>
    </div>
  );
}
