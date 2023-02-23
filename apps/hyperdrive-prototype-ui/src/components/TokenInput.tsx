import classNames from "classnames";
import { Tag } from "components/Tag";
import { formatUnits } from "ethers/lib/utils.js";
import { Token } from "hyperdrive/types";
import { ReactElement, useState } from "react";
import { formatBalance } from "utils";

interface TokenInputProps {
  currentBalance: string;
  disabled?: boolean;
  disableMax?: boolean;
  showInputError?: boolean;
  onChange: (value: string) => void;
  token: Token;
}
const inputRegexPattern = /[+-]?([0-9]*[.])?[0-9]+/;
const inputRegex = new RegExp(inputRegexPattern);

function isValidInput(input: string) {
  return !input || inputRegex.test(input);
}

export function TokenInput({
  currentBalance,
  disabled,
  onChange,
  token,
  disableMax = false,
  showInputError = false,
}: TokenInputProps): ReactElement {
  const [input, setInput] = useState<string>("");

  return (
    <div
      className={classNames(
        "flex flex-col p-4 border-2 rounded border-lean gap-y-2",
        {
          "border-error": showInputError,
        },
      )}
    >
      <div className="flex items-center text-white gap-x-2">
        <div className="grow basis-0">
          <input
            value={input}
            disabled={disabled}
            className="w-full text-5xl font-bold bg-transparent outline-none"
            placeholder="0"
            onChange={(event) => {
              const value = event.target.value;
              if (isValidInput(value)) {
                setInput(value);
                onChange(value);
              }
            }}
          />
        </div>
        <Tag text={token.symbol}>
          {token.logoUrl && (
            <img
              className="inline mr-1"
              src={token.logoUrl}
              height={16}
              width={16}
            />
          )}
        </Tag>
      </div>

      {!disableMax && (
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
      )}
    </div>
  );
}
