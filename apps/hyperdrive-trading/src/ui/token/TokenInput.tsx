import classNames from "classnames";
import { ReactElement, ReactNode } from "react";
import { HIDE_NUMERIC_INPUT_ARROWS_CLASS } from "src/ui/base/numericInput";

interface TokenInputProps {
  token: ReactNode;
  name: string;
  value: string;
  onChange: (newAmount: string) => void;
  /**
   * If provided, the MAX button will be shown
   */
  maxValue?: string;
  /**
   * If provided, this text will be used instead for the input's label
   */
  inputLabel?: string;
  /**
   * Optional stat to show, useful for things like wallet balances
   */
  stat?: ReactNode;
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
  inputLabel = "Enter amount",
  stat,
  hasError = false,
  disabled = false,
  autoFocus = false,
}: TokenInputProps): ReactElement {
  return (
    <div className="flex w-full flex-col">
      <label className="daisy-label flex justify-between">
        <span className="daisy-label-text">{inputLabel}</span>
      </label>

      <label className="daisy-join items-center">
        {typeof token === "string" ? (
          <div
            className={classNames(
              "daisy-join-item flex h-12 items-center border border-neutral-content/30 px-4",
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
            "daisy-input daisy-join-item daisy-input-bordered w-full",
            HIDE_NUMERIC_INPUT_ARROWS_CLASS,
            {
              "daisy-input-error text-error": hasError,
            },
          )}
          value={value}
          placeholder="0"
          onKeyDown={(event) => {
            // Prevent typing '-' and 'e'
            if (
              event.code === "Minus" ||
              event.code === "NumpadSubtract" ||
              event.code === "KeyE"
            ) {
              event.preventDefault();
            }
          }}
          onChange={(event) => {
            onChange(event.target.value);
          }}
        />
        {maxValue !== undefined && !disabled ? (
          <button
            className={classNames(
              "daisy-btn daisy-join-item border-b-neutral-content/30 border-l-base-100 border-r-neutral-content/30 border-t-neutral-content/30 bg-base-100 hover:border-b-neutral-content/30 hover:border-l-base-100 hover:border-r-neutral-content/30 hover:border-t-neutral-content/30 hover:bg-base-100 hover:underline active:hover:border-l-base-100",
              {
                "daisy-btn-error": hasError,
              },
            )}
            onClick={(e) => {
              e.preventDefault();
              onChange(maxValue);
            }}
          >
            Max
          </button>
        ) : null}
      </label>
      <label className="daisy-label flex justify-end">
        {stat ? <span className="daisy-label-text ">{stat}</span> : null}
      </label>
    </div>
  );
}
