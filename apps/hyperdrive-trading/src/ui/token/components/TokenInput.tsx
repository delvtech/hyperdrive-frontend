import ChevronDownIcon from "@heroicons/react/20/solid/ChevronDownIcon";
import { ReactElement } from "react";

export function TokenInput(): ReactElement {
  return (
    <div className="flex flex-col p-4 border rounded bg-base-200 gap-y-2 border-hyper-blue-300">
      <div className="flex">
        <input
          autoFocus
          className="w-full text-3xl font-semibold bg-transparent placeholder:text-hyper-blue-200 focus:outline-dashed outline-hyper-blue-200"
          placeholder="0"
        />

        <div className="flex items-center px-2 py-1 rounded cursor-pointer min-w-fit gap-x-2 hover:bg-hyper-blue-400">
          <img
            className="h-6"
            src="https://cryptologos.cc/logos/multi-collateral-dai-dai-logo.png?v=024"
          />
          <h4 className="text-2xl font-quantico">DAI</h4>
          <ChevronDownIcon className="w-6 h-6 stroke-hyper-blue-100 fill-hyper-blue-100" />
        </div>
      </div>

      <div className="flex text-hyper-blue-200">
        <p className="mr-auto">1 DAI = $1.00</p>
        <p>
          Balance 120,000
          <span className="ml-1 underline cursor-pointer hover:text-hyper-blue-400">
            Max
          </span>
        </p>
      </div>
    </div>
  );
}
