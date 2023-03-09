import classNames from "classnames";
import { ReactElement } from "react";

export type TermDuration = "90_DAYS" | "180_DAYS" | "270_DAYS";

interface OpenShortFormProps {
  onTermDurationChange: (newTerm: TermDuration | undefined) => void;
  termDuration: TermDuration | undefined;
}

export function OpenShortForm({
  onTermDurationChange,
  termDuration,
}: OpenShortFormProps): ReactElement {
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
            className="daisy-input-bordered daisy-input w-full"
          />
          <span>DAI</span>
        </label>
      </div>
      <div className="flex justify-end gap-2">
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
  );
}
