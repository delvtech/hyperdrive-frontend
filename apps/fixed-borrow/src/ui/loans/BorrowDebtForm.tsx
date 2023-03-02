import { ReactElement } from "react";

export function BorrowDebtForm(): ReactElement {
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
          type="text"
          placeholder="10"
          className="daisy-input-bordered daisy-input w-full"
        />
      </label>
    </div>
  );
}
