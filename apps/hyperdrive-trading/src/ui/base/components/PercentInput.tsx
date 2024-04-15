import classNames from "classnames";
import { ChangeEvent } from "react";
import { HIDE_NUMERIC_INPUT_ARROWS_CLASS } from "src/ui/base/numericInput";

export function PercentInput({
  value,
  onChange,
}: {
  value: string;
  onChange: (e: ChangeEvent<HTMLInputElement>) => void;
}): JSX.Element {
  return (
    <div className="relative">
      <input
        min={0}
        placeholder="0.5"
        step="any"
        type="number"
        value={value}
        onChange={(e) => onChange(e)}
        className={classNames(
          "daisy-input daisy-input-bordered h-8 max-w-24 text-sm",
          HIDE_NUMERIC_INPUT_ARROWS_CLASS,
        )}
      />
      <span className="absolute right-2 top-2 text-neutral-content">%</span>
    </div>
  );
}
