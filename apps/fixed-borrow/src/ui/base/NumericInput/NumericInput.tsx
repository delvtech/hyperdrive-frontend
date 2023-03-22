import { ReactElement, ReactNode } from "react";
import { Button } from "src/ui/base/Button/Button";

interface NumericInputProps {
  primaryLabel?: string;
  secondaryLabel?: string;
  placeholderText?: string;
  icon?: ReactNode;
  value?: string;
  maxValue?: string;
  onChange?: (value: string | undefined) => void;
}

export function NumericInput({
  icon,
  secondaryLabel,
  onChange,
  primaryLabel,
  value,
  maxValue,
  placeholderText,
}: NumericInputProps): ReactElement {
  return (
    <div className="flex flex-col gap-1">
      <div className="flex w-full justify-between gap-2 text-lightText">
        <span className="text-lg">{primaryLabel}</span>
        <span>{secondaryLabel}</span>
      </div>

      <div className="flex h-14 w-full items-center gap-4 rounded-lg border border-inputBorder bg-inputBg p-3 text-right text-h4">
        {icon ? <div className="shrink-0">{icon}</div> : null}
        <input
          type="number"
          placeholder={placeholderText}
          className="h-full w-full bg-inputBg text-right text-h4"
          value={value}
          onChange={(event) => {
            onChange?.(event.target.value);
          }}
        />

        {maxValue && onChange ? (
          <Button
            size="sm"
            disabled={!!+(maxValue || 0)}
            variant="dark"
            onClick={() => onChange(maxValue)}
          >
            <span className="uppercase">Max</span>
          </Button>
        ) : null}
      </div>
    </div>
  );
}
