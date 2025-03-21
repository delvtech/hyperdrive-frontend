import classNames from "classnames";
import { ReactElement, ReactNode } from "react";
import { HIDE_NUMERIC_INPUT_ARROWS_CLASS } from "src/ui/base/numericInput";

interface TokenInputProps {
  token: ReactNode;
  variant?: "default" | "lighter";
  name: string;
  value: string;
  onChange?: (newAmount: string) => void;
  /**
   * If provided, the MAX button will be shown
   */
  maxValue?: string;
  /**
   * If provided, this text will be used instead for the input's label
   */
  inputLabel?: string;
  /**
   * Optional stats to show, useful for things like wallet balances
   */
  bottomLeftElement?: ReactNode;
  bottomRightElement?: ReactNode;
  settings?: ReactNode;
  disabled?: boolean;
  /**
   * If true, this will render the input with error styling
   */
  hasError?: boolean;
  autoFocus?: boolean;
}

export function TokenInput({
  value,
  token,
  name,
  onChange,
  maxValue,
  variant = "default",
  inputLabel = "Enter amount",
  bottomLeftElement,
  bottomRightElement,
  settings,
  hasError = false,
  disabled = false,
  autoFocus = false,
}: TokenInputProps): ReactElement {
  return (
    <div className="flex w-full flex-col">
      {settings ? settings : null}

      <div
        className={classNames(
          "flex h-[117px] flex-col gap-2 rounded-md px-4 py-3 has-[:focus]:ring-2 has-[:focus]:ring-gray-600",
          {
            "bg-base-100": variant === "default",
            "bg-base-200": variant === "lighter",
          },
        )}
      >
        <label className="text-sm text-neutral-content">{inputLabel}</label>
        <div className="flex flex-row items-center">
          <input
            type="number"
            // Setting step to `any` allows any number between min and max to be
            // displayed without triggering the browser's native validation
            // tooltips. We do this because by default steps are whole numbers.
            // See:
            // https://developer.mozilla.org/en-US/docs/Web/HTML/Element/input/number#step
            step="any"
            min="0"
            autoFocus={autoFocus}
            max={maxValue}
            name={name}
            disabled={disabled}
            className={classNames(
              "daisy-input mr-2 h-9 w-full flex-1 p-0 text-h3 focus:outline-none",
              HIDE_NUMERIC_INPUT_ARROWS_CLASS,
              {
                "daisy-input-error text-error": hasError,
                "bg-base-100 focus:border-base-100": variant === "default",
                "bg-base-200 focus:border-base-200": variant === "lighter",
              },
            )}
            value={value}
            placeholder="0"
            onKeyDown={(event) => {
              // Prevent typing '-' and 'e'
              if (["-", "e", "E"].includes(event.key)) {
                event.preventDefault();
              }
            }}
            onChange={(event) => {
              onChange?.(event.target.value);
            }}
          />
          {typeof token === "string" ? (
            <div
              className={classNames(
                "flex h-12 items-center border-neutral-content/30 px-4",
                {
                  "bg-base-100": !disabled,
                  "border-none opacity-20": disabled,
                },
              )}
            >
              {token}
            </div>
          ) : (
            token
          )}
        </div>
        <div className="flex w-full justify-between">
          {bottomLeftElement}
          <div className="flex w-full items-baseline justify-end text-sm">
            {bottomRightElement ? (
              <label className="text-neutral-content">
                {bottomRightElement}
              </label>
            ) : null}
            {maxValue !== undefined && !disabled ? (
              <button
                className={classNames(
                  "ml-1 text-sm font-semibold text-base-content",
                  {
                    "daisy-btn-error": hasError,
                  },
                )}
                type="button"
                onClick={(e) => {
                  e.preventDefault();
                  onChange?.(maxValue);
                }}
              >
                Max
              </button>
            ) : null}
          </div>
        </div>
      </div>
    </div>
  );
}
