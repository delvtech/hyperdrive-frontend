import { ChevronDownIcon } from "@heroicons/react/20/solid";
import { TokenConfig } from "@hyperdrive/appconfig";
import classNames from "classnames";
import { ReactElement } from "react";
import { Address } from "viem";
import { TokenPickerRow } from "./TokenPickerRow";

export interface TokenChoice {
  tokenConfig: TokenConfig;
  disabled?: boolean;
  tokenBalance?: bigint;
}

export function TokenPickerTwo({
  tokens,
  activeTokenAddress,
  onChange,
  label,
}: {
  tokens: TokenChoice[];
  activeTokenAddress: Address;
  onChange: (tokenAddress: Address) => void;
  label?: string;
}): ReactElement {
  // A single element doesn't need a dropdown
  if (tokens.length === 1) {
    return (
      <div>
        {label ? (
          <label className="daisy-label">
            <span className="daisy-label-text">{label}</span>
          </label>
        ) : undefined}
        <div className="daisy-btn no-animation daisy-btn-md flex h-9 min-h-9 cursor-default items-center rounded-box bg-neutral">
          <img
            src={tokens[0].tokenConfig.iconUrl}
            className="h-5 rounded-full"
          />
          <span className="text-sm font-semibold">
            {tokens[0].tokenConfig.symbol}
          </span>
        </div>
      </div>
    );
  }
  const activeToken = tokens.find(
    ({ tokenConfig }) => tokenConfig?.address === activeTokenAddress,
  );

  return (
    <div>
      {label ? (
        <label className="daisy-label">
          <span className="daisy-label-text">{label}</span>
        </label>
      ) : undefined}
      <div
        className={"daisy-dropdown daisy-dropdown-end daisy-dropdown-bottom"}
      >
        <button
          className={classNames(
            "daisy-btn daisy-btn-md flex h-9 min-h-9 items-center rounded-box bg-neutral pl-3 pr-1",
          )}
          onClick={(e) => {
            e.preventDefault();
          }}
        >
          <img
            src={activeToken?.tokenConfig?.iconUrl}
            className="h-5 rounded-full"
          />{" "}
          {activeToken?.tokenConfig?.symbol}
          <ChevronDownIcon className="h-6 text-neutral-content" />
        </button>
        <ul
          className={classNames(
            "daisy-menu daisy-dropdown-content z-[1] w-64 justify-evenly gap-0.5 rounded-lg bg-neutral",
          )}
        >
          <div className="flex justify-between px-4 py-5">
            <span>Tokens</span>
            <span>Balance</span>
          </div>
          <div className="max-h-[40vh] overflow-y-auto">
            {[
              tokens.map(({ tokenConfig, tokenBalance }) => (
                <TokenPickerRow
                  key={tokenConfig?.address}
                  tokenConfig={tokenConfig}
                  tokenBalance={tokenBalance}
                  onChange={onChange}
                />
              )),
            ]}
          </div>
        </ul>
      </div>
    </div>
  );
}
