import { ChevronDownIcon } from "@heroicons/react/24/outline";
import { TokenConfig } from "@hyperdrive/appconfig";
import { ReactElement } from "react";
import { Address } from "viem";

export function TokenPicker({
  tokens,
  activeTokenAddress,
  onChange,
}: {
  tokens: TokenConfig<any>[];
  activeTokenAddress: Address;
  onChange: (tokenAddress: Address) => void;
}): ReactElement {
  // A single element doesn't need a dropdown
  if (tokens.length === 1) {
    return (
      <div className="daisy-join-item flex h-12 shrink-0 items-center gap-1.5 border border-neutral-content/30 bg-base-100 px-4">
        <img src={tokens[0].iconUrl} className="h-5 " />{" "}
        <span className="text-sm font-semibold">{tokens[0].symbol}</span>
      </div>
    );
  }
  const activeToken = tokens.find(
    ({ address }) => address === activeTokenAddress,
  ) as TokenConfig<any>;
  return (
    <div
      className={
        "daisy-dropdown daisy-dropdown-bottom daisy-join-item shrink-0"
      }
    >
      <button
        className="daisy-btn flex h-12 items-center rounded-r-none border border-neutral-content/30 bg-base-100 px-4 hover:border-neutral-content/30"
        onClick={(e) => {
          e.preventDefault();
        }}
      >
        <img src={activeToken.iconUrl} className="h-5 " /> {activeToken.symbol}
        <ChevronDownIcon className="ml-2 h-3" />
      </button>
      <ul className="daisy-menu daisy-dropdown-content z-[1] w-40 gap-0.5 rounded-lg bg-base-100 p-2 shadow">
        {[
          tokens.map((token) => (
            <li key={token.address}>
              <button
                onClick={(e) => {
                  onChange(token.address);
                  e.preventDefault();
                }}
              >
                <img src={token.iconUrl} className="h-5 " /> {token.symbol}
              </button>
            </li>
          )),
        ]}
      </ul>
    </div>
  );
}
