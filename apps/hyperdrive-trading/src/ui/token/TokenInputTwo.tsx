import { Cog8ToothIcon } from "@heroicons/react/16/solid";
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
  inputLabel = "Enter amount",
  stat,
  settings,
  hasError = false,
  disabled = false,
  autoFocus = false,
}: TokenInputProps): ReactElement {
  return (
    <div className="flex w-full flex-col">
      <label className="my-2 flex flex-row items-center justify-end gap-2 text-xs text-neutral-content">
        0.5% slippage
        <Cog8ToothIcon className="h-4 text-base-content" />
      </label>
      <div className="flex flex-row rounded-md bg-base-100 p-4">
        <div className="">
          <label className="text-sm text-neutral-content">You spend</label>
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
              "daisy-input daisy-join-item w-full flex-1 p-0 text-h3 focus:border-base-100 focus:outline-none focus:ring-0",
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
          <label className="text-sm text-neutral-content">$1000.04</label>
        </div>
        <div className="flex w-72 flex-col items-end justify-center">
          {typeof token === "string" ? (
            <div
              className={classNames(
                "daisy-join-item flex h-12 items-center border-neutral-content/30 px-4",
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
          <label className=" text-sm text-neutral-content">
            Balance: 1000 Max
          </label>
        </div>
      </div>
    </div>
  );
}
