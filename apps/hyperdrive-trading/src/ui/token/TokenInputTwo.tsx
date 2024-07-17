import classNames from "classnames";
import { ReactElement, ReactNode } from "react";
import { formatBalance } from "src/ui/base/formatting/formatBalance";
import { HIDE_NUMERIC_INPUT_ARROWS_CLASS } from "src/ui/base/numericInput";

interface TokenInputProps {
  token: ReactNode;
  activeTokenPrice: bigint;
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
  settings?: ReactNode;
  disabled?: boolean;
  /**
   * If true, this will render the input with error styling
   */
  hasError?: boolean;
  autoFocus?: boolean;
}

export function TokenInputTwo({
  value,
  token,
  name,
  onChange,
  maxValue,
  activeTokenPrice,
  inputLabel = "Enter amount",
  stat,
  settings,
  hasError = false,
  disabled = false,
  autoFocus = false,
}: TokenInputProps): ReactElement {
  console.log(activeTokenPrice, "activeTokenPrice");
  console.log(BigInt(value), "bigint value");
  return (
    <div className="flex w-full flex-col">
      {settings ? settings : null}
      <div className="flex flex-col gap-2 rounded-md bg-base-100 px-4 py-3">
        <label className="text-sm text-neutral-content">{inputLabel}</label>
        <div className="flex flex-row">
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
              "daisy-input mr-2 h-9 w-full flex-1 p-0 text-h3 focus:border-base-100 focus:outline-none focus:ring-0",
              HIDE_NUMERIC_INPUT_ARROWS_CLASS,
              {
                "daisy-input-error text-error": hasError,
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
              onChange(event.target.value);
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
        <div className="flex justify-between">
          {/* TODO: Implement USD Stat here */}
          <label className="text-sm text-neutral-content">
            {`$${formatBalance({
              // Use the baseTokenPrice directly
              balance: activeTokenPrice
                ? (BigInt(value) * 10n ** 18n * activeTokenPrice) / 10n ** 18n
                : 0n,
              decimals: 18,
              places: 2,
            })}`}
          </label>
          {stat ? (
            <label className="flex items-center text-sm text-neutral-content">
              {stat}
              {maxValue !== undefined && !disabled ? (
                <div className="text-base-content">
                  <button
                    className={classNames("ml-2 font-semibold", {
                      "daisy-btn-error": hasError,
                    })}
                    type="button"
                    onClick={(e) => {
                      e.preventDefault();
                      onChange(maxValue);
                    }}
                  >
                    Max
                  </button>
                </div>
              ) : null}
            </label>
          ) : null}
        </div>
      </div>
    </div>
  );
}
