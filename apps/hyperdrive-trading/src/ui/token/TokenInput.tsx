import { ReactElement } from "react";
import { Token } from "src/appconfig/types";

interface TokenInputProps {
  token: Token;
  value: string;
  onChange: (newAmount: string) => void;
  maxValue?: string;
  maxLabel?: string;
  showMax?: boolean;
  disabled?: boolean;
  autoFocus?: boolean;
}

export function TokenInput({
  value,
  token,
  onChange,
  maxValue,
  maxLabel = "Max",
  showMax = true,
  disabled = false,
  autoFocus = false,
}: TokenInputProps): ReactElement {
  return (
    <div className=" flex flex-col gap-y-2 rounded border border-neutral-content bg-base-100 p-4">
      <div className="flex gap-x-4">
        <input
          autoFocus={autoFocus}
          className="w-full bg-transparent text-h4 font-semibold outline-neutral-content placeholder:text-neutral-content focus:outline-dashed"
          // Setting step to `any` allows any number between min and max to be
          // displayed without triggering the browser's native validation
          // tooltips. We do this because by default steps are whole numbers.
          // See:
          // https://developer.mozilla.org/en-US/docs/Web/HTML/Element/input/number#step
          step="any"
          min="0"
          max={maxValue}
          name="Base Token Input"
          onChange={(event) => onChange(event.target.value)}
          placeholder="0"
          type="number"
          value={value}
          disabled={disabled}
        />

        <div className="flex min-w-fit items-center gap-x-2">
          {token.iconUrl && <img className="h-6" src={token.iconUrl} />}
          <h4 className="font-semibold uppercase">{token.symbol}</h4>
        </div>
      </div>

      {showMax && maxValue !== undefined && (
        <div className="flex text-neutral-content">
          {maxValue && (
            <span
              onClick={() => onChange(maxValue)}
              className="mr-auto cursor-pointer underline hover:no-underline"
            >
              Max
            </span>
          )}
          <p>
            {maxLabel}: {maxValue}
          </p>
        </div>
      )}
    </div>
  );
}
