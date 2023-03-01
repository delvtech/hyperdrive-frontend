import { ReactElement } from "react";

export function CollateralFormControl(): ReactElement {
  return (
    <div className="daisy-form-control w-full">
      <label className="daisy-label">
        <span className="daisy-label-text">Collateral</span>
        <span className="daisy-label-text">Currently locked: 5.02 USDC</span>
      </label>

      <label className="daisy-label -mt-4">
        <span className="daisy-label-text" />
        <span className="daisy-label-text text-warning">After: 15.02 USDC</span>
      </label>

      <label className="daisy-input-group">
        <span>USDC</span>
        <input
          type="text"
          placeholder="10"
          className="daisy-input-bordered daisy-input w-full"
        />
      </label>
    </div>
  );
}
