import { formatUnits } from "ethers/lib/utils.js";
import { Token } from "hyperdrive/types";
import { useState } from "react";
import { formatBalance } from "utils";
import { Tag } from "./Tag";

interface TokenInputProps {
  token: Token;
  currentBalance: string;
  onChange: (value: string) => void;
}

export function TokenInput({
  token,
  onChange,
  currentBalance,
}: TokenInputProps) {
  const [input, setInput] = useState("");

  return (
    <div className="flex flex-col p-4 border-2 rounded border-lean gap-y-2">
      <div className="flex items-center text-white gap-x-2">
        <div className="grow basis-0">
          <input
            value={input}
            className="w-full text-5xl font-bold bg-transparent outline-none"
            placeholder="0"
            onChange={(event) => {
              const value = event.target.value;
              setInput(value);
              onChange(value);
            }}
          />
        </div>
        <Tag text={token.symbol}>
          <img
            className="inline mr-1"
            src={token.logoUrl}
            height={16}
            width={16}
          />
        </Tag>
      </div>

      <div className="flex w-full text-white">
        {currentBalance === input ? (
          <button
            className="mr-auto underline disabled:opacity-50"
            // disabled={!currentBalance}
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
            disabled={!currentBalance}
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
