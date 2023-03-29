import ChevronDownIcon from "@heroicons/react/20/solid/ChevronDownIcon";
import { ChangeEvent, ReactElement } from "react";
import { Token } from "src/config/HyperdriveConfig";

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
      <div className="flex">
        <input
          autoFocus
          value={value}
          onChange={handleOnChange}
          type="number"
          className="w-full text-3xl font-semibold bg-transparent placeholder:text-hyper-blue-200 focus:outline-dashed outline-hyper-blue-200"
          placeholder="0"
        />

        <div className="flex items-center px-2 py-1 rounded cursor-pointer min-w-fit gap-x-2 hover:bg-hyper-blue-400">
          {token.iconUrl && <img className="h-6" src={token.iconUrl} />}
          <h4 className="text-2xl uppercase font-quantico">{token.symbol}</h4>
          <ChevronDownIcon className="w-6 h-6 stroke-hyper-blue-100 fill-hyper-blue-100" />
        </div>
      </div>

      <div className="flex text-hyper-blue-200">
        <p className="mr-auto uppercase">1 {token.symbol} = $1.00</p>
        <p>
          Balance 120,000
          {maxValue && (
            <span className="ml-1 underline cursor-pointer hover:text-hyper-blue-400">
              Max
            </span>
          )}
        </p>
      </div>
    </div>
  );
}
