import classNames from "classnames";
import { ReactElement, ReactNode } from "react";
import { Token } from "src/appconfig/types";
import { HIDE_NUMERIC_INPUT_ARROWS_CLASS } from "src/ui/base/numericInput";

interface TokenInputProps {
  token: Token;
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
  onChange,
  maxValue,
  inputLabel = "Enter amount",
  stat,
  hasError = false,
  disabled = false,
  autoFocus = false,
}: TokenInputProps): ReactElement {
  return (
    <div className="daisy-form-control flex-1">
      <label className="daisy-label flex justify-between">
        <span className="daisy-label-text">{inputLabel}</span>
        {stat ? <span className="daisy-label-text">{stat}</span> : null}
      </label>
      <label className="daisy-input-group">
        <span>
          <span className="daisy-label-text">{token.symbol}</span>
        </span>
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
          name={`${token.symbol} input`}
          disabled={disabled}
          className={classNames(
            "daisy-input-bordered daisy-input flex-1",
            HIDE_NUMERIC_INPUT_ARROWS_CLASS,
            {
              "daisy-input-error text-error": hasError,
            },
          )}
          value={value}
          placeholder="0"
          onChange={(event) => onChange(event.target.value)}
        />
        {maxValue !== undefined ? (
          <button
            className={classNames("daisy-glass daisy-btn-square daisy-btn", {
              "daisy-btn-error": hasError,
            })}
            onClick={(e) => {
              e.preventDefault();
              onChange(maxValue);
            }}
          >
            Max
          </button>
        ) : null}
      </label>
    </div>
  );
}
