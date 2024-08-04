import classNames from "classnames";
import { HIDE_NUMERIC_INPUT_ARROWS_CLASS } from "src/ui/base/numericInput";

export function PercentInput({
  value,
  onChange,
}: {
  value: string;
  onChange: (e: string) => void;
}): JSX.Element {
  return (
    <div className="relative">
      <input
        min={0}
        placeholder="0.5"
        step="any"
        type="number"
        value={value}
        onChange={(event) => onChange(event.target.value)}
        className={classNames(
          "daisy-input daisy-input-bordered h-8 max-w-24 text-sm",
          HIDE_NUMERIC_INPUT_ARROWS_CLASS,
        )}
      />
      <span className="absolute top-2 right-2 text-neutral-content">%</span>
    </div>
  );
}
