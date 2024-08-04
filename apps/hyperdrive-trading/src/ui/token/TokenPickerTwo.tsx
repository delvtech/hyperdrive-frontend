import { ChevronDownIcon } from "@heroicons/react/20/solid";
import type { TokenConfig } from "@hyperdrive/appconfig";
import classNames from "classnames";
import type { ReactElement } from "react";
import { formatBalance } from "src/ui/base/formatting/formatBalance";
import type { Address } from "viem";

export interface TokenChoice {
  tokenConfig: TokenConfig<any>;
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
        <div className="daisy-btn daisy-btn-md flex items-center rounded-box bg-neutral text-lg">
          <img src={tokens[0].tokenConfig.iconUrl} className="h-5" />
          <span className="font-semibold text-sm">
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
            "daisy-btn daisy-btn-md flex h-9 min-h-9 items-center rounded-box bg-neutral pr-1 pl-3",
          )}
          onClick={(e) => {
            e.preventDefault();
          }}
        >
          <img src={activeToken?.tokenConfig?.iconUrl} className="h-5" />{" "}
          {activeToken?.tokenConfig?.symbol}
          <ChevronDownIcon className="h-6 text-neutral-content" />
        </button>
        <ul
          className={classNames(
            "daisy-menu daisy-dropdown-content z-[1] w-64 justify-evenly gap-0.5 rounded-lg bg-base-100 p-2 shadow-md",
          )}
        >
          {[
            tokens.map(({ tokenConfig, tokenBalance }) => (
              <li key={tokenConfig?.address}>
                <button
                  onClick={(e) => {
                    onChange(tokenConfig?.address);
                    e.preventDefault();
                  }}
                  className="gap-2"
                >
                  <img src={tokenConfig?.iconUrl} className="h-5" />{" "}
                  {tokenConfig?.symbol}
                  <label className="flex w-32 flex-1 cursor-pointer text-neutral-content">
                    <span>
                      Balance:{" "}
                      {formatBalance({
                        balance: tokenBalance || 0n,
                        decimals: tokenConfig?.decimals,
                        places: tokenConfig?.places,
                      })}
                    </span>
                  </label>
                </button>
              </li>
            )),
          ]}
        </ul>
      </div>
    </div>
  );
}
