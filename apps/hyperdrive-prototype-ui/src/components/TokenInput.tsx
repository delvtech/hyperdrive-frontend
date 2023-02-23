import { Tag } from "components/Tag";
import { formatUnits } from "ethers/lib/utils.js";
import { Token } from "hyperdrive/types";
import { useState } from "react";
import { formatBalance } from "utils";

interface TokenInputProps {
  currentBalance: string;
  disabled?: boolean;
  onChange: (value: string) => void;
  token: Token;
}

export function TokenInput({
  currentBalance,
  disabled,
  onChange,
  token,
}: TokenInputProps) {
  const [input, setInput] = useState<string>("");

  return (
    <div className="border-lean flex flex-col gap-y-2 rounded border-2 p-4">
      <div className="flex items-center gap-x-2 text-white">
        <div className="grow basis-0">
          <input
            value={input}
            disabled={disabled}
            className="w-full bg-transparent text-5xl font-bold outline-none"
            placeholder="0"
            onChange={(event) => {
              const value = event.target.value;
              setInput(value);
              onChange(value);
            }}
          />
        </div>
        <Tag text={token.symbol}>
          {token.logoUrl && (
            <img
              className="mr-1 inline"
              src={token.logoUrl}
              height={16}
              width={16}
            />
          )}
        </Tag>
      </div>

      <div className="flex w-full text-white">
        {currentBalance === input ? (
          <button
            className="mr-auto underline disabled:opacity-50"
            disabled={disabled}
            onClick={() => {
              setInput("0");
              onChange("0");
            }}
          >
            Clear
          </button>
        ) : (
          <button
            className="mr-auto underline disabled:opacity-50"
            disabled={!currentBalance || disabled}
            onClick={() => {
              setInput(formatUnits(currentBalance, token.decimals));
              onChange(currentBalance);
            }}
          >
            Max
          </button>
        )}
        <div className="flex items-center">
          <span className="mr-1">Balance:</span>
          <span className="font-bold">
            {formatBalance(formatUnits(currentBalance, token.decimals))}
          </span>
        </div>
      </div>
    </div>
  );
}
