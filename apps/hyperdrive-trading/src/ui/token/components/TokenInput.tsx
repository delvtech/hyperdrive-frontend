import { ChangeEvent, ReactElement } from "react";
import { Token } from "src/config/HyperdriveConfig";
import { formatBalance } from "src/ui/base/formatting/formatBalance";

interface TokenInputProps {
  token: Token;
  value: string;
  onChange: (newAmount: string) => void;
  maxValue?: string;
}

export function TokenInput({
  value,
  token,
  onChange,
  maxValue,
}: TokenInputProps): ReactElement {
  const handleOnChange = (event: ChangeEvent<HTMLInputElement>) => {
    onChange(event.target.value);
  };

  return (
    <div className="flex flex-col p-4 border rounded bg-base-200 gap-y-2 border-hyper-blue-300">
      <div className="flex gap-x-4">
        <input
          autoFocus
          className="w-full text-3xl font-semibold bg-transparent placeholder:text-hyper-blue-200 focus:outline-dashed outline-hyper-blue-200"
          max={maxValue}
          min="0"
          name="Base Token Input"
          onChange={handleOnChange}
          placeholder="0"
          type="number"
          value={value}
        />

        <div className="flex items-center min-w-fit gap-x-2">
          {token.iconUrl && <img className="h-6" src={token.iconUrl} />}
          <h4 className="text-2xl uppercase font-quantico">{token.symbol}</h4>
          {/* TODO: support multiple token input options */}
          {/* <ChevronDownIcon className="w-6 h-6 stroke-hyper-blue-100 fill-hyper-blue-100" /> */}
        </div>
      </div>

      <div className="flex text-hyper-blue-200">
        {maxValue && (
          <span
            onClick={() => onChange(maxValue)}
            className="mr-auto underline cursor-pointer hover:text-hyper-blue-400"
          >
            Max
          </span>
        )}
        <p>Balance: {formatBalance(maxValue ?? "0")}</p>
      </div>
    </div>
  );
}
