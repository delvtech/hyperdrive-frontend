import { ReactElement } from "react";
import { Token } from "src/appconfig/types";
import { formatBalance } from "src/ui/base/formatting/formatBalance";

interface TokenInputProps {
  token: Token;
  value: string;
  onChange: (newAmount: string) => void;
  maxValue?: string;
  showBalance?: boolean;
  disabled?: boolean;
  autoFocus?: boolean;
}

export function TokenInput({
  value,
  token,
  onChange,
  maxValue,
  showBalance = true,
  disabled = false,
  autoFocus = false,
}: TokenInputProps): ReactElement {
  return (
    <div className="flex flex-col gap-y-2 rounded border border-hyper-blue-300 bg-base-200 p-4 font-dm-sans">
      <div className="flex gap-x-4">
        <input
          autoFocus={autoFocus}
          className="w-full bg-transparent text-h4 font-semibold outline-hyper-blue-200 placeholder:text-hyper-blue-200 focus:outline-dashed"
          max={maxValue}
          min="0"
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

      {showBalance && (
        <div className="flex text-hyper-blue-200">
          {maxValue && (
            <span
              onClick={() => onChange(maxValue)}
              className="mr-auto cursor-pointer underline hover:text-hyper-blue-400"
            >
              Max
            </span>
          )}
          <p>Balance: {formatBalance(maxValue ?? "0", 8)}</p>
        </div>
      )}
    </div>
  );
}
