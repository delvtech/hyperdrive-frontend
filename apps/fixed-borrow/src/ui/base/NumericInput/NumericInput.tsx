import classNames from "classnames";
import { ReactElement, ReactNode } from "react";
import { Button } from "src/ui/base/Button/Button";

interface NumericInputProps {
  primaryLabel?: string;
  secondaryLabel?: string;
  placeholderText?: string;
  icon?: ReactNode;
  showMaxButton?: boolean;
  value?: string;
  maxValue?: string;
  onChange?: (value: string | undefined) => void;
}

export function NumericInput({
  icon,
  secondaryLabel,
  showMaxButton,
  onChange,
  primaryLabel,
  value,
  maxValue,
  placeholderText,
}: NumericInputProps): ReactElement {
  return (
    <div className="flex flex-col gap-1">
      <div className="flex flex-1 justify-between text-lightText">
        <span className="text-lg">{primaryLabel}</span>
        <span>{secondaryLabel}</span>
      </div>

      <div className="relative flex flex-1">
        <input
          type="number"
          placeholder={placeholderText}
          className={classNames(
            "h-14 flex-1 rounded-lg border border-inputBorder bg-inputBg px-4 text-right text-h4",
            {
              "pl-11": !!icon, // the icon overlaps the input on the left
              "pr-[72px]": showMaxButton, // the max button overlaps the input on the right
            },
          )}
          value={value}
          onChange={(event) => {
            onChange?.(event.target.value);
          }}
        />

        {icon ? (
          <div className="absolute ml-3 flex h-full items-center">{icon}</div>
        ) : null}

        {showMaxButton ? (
          <div className="absolute right-0 mr-2 flex h-full items-center">
            <Button
              size="sm"
              disabled={!!+(maxValue || 0)}
              onClick={() => {
                if (maxValue) {
                  onChange?.(maxValue);
                }
              }}
              variant="dark"
            >
              MAX
            </Button>
          </div>
        ) : null}
      </div>
    </div>
  );
}
