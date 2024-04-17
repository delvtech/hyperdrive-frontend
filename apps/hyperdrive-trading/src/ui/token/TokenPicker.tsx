import { ChevronDownIcon } from "@heroicons/react/24/outline";
import { TokenConfig } from "@hyperdrive/appconfig";
import classNames from "classnames";
import { ReactElement } from "react";
import { formatBalance } from "src/ui/base/formatting/formatBalance";
import { Address } from "viem";

export interface TokenChoice {
  disabled?: boolean;
  tokenConfig: TokenConfig<any>;
  tokenBalance?: bigint;
}

export function TokenPicker({
  tokens,
  activeTokenAddress,
  onChange,
  label,
  joined,
}: {
  tokens: TokenChoice[];
  activeTokenAddress: Address;
  onChange: (tokenAddress: Address) => void;
  label?: string;
  joined?: boolean;
}): ReactElement {
  // A single element doesn't need a dropdown
  if (tokens.length === 1) {
    return (
      <>
        {label ? (
          <label className="daisy-label">
            <span className="daisy-label-text">{label}</span>
          </label>
        ) : undefined}
        <div className="daisy-join-item flex h-12 w-32 shrink-0 items-center gap-1.5 border border-neutral-content/30 bg-base-100 px-4">
          <img src={tokens[0].tokenConfig.iconUrl} className="h-5 " />{" "}
          <span className="text-sm font-semibold">
            {tokens[0].tokenConfig.symbol}
          </span>
        </div>
      </>
    );
  }
  const activeToken = tokens.find(
    ({ tokenConfig }) => tokenConfig?.address === activeTokenAddress,
  );

  return (
    <>
      {label ? (
        <label className="daisy-label">
          <span className="daisy-label-text">{label}</span>
        </label>
      ) : undefined}
      <div
        className={
          "daisy-dropdown daisy-dropdown-bottom daisy-join-item shrink-0"
        }
      >
        <button
          className={classNames(
            "daisy-btn flex h-12 items-center border border-neutral-content/30 bg-base-100 px-4 hover:border-neutral-content/30",
            { "border-r-none rounded-r-none": joined },
          )}
          onClick={(e) => {
            e.preventDefault();
          }}
        >
          <img src={activeToken?.tokenConfig?.iconUrl} className="h-5 " />{" "}
          {activeToken?.tokenConfig?.symbol}
          <ChevronDownIcon className="ml-2 h-3" />
        </button>
        <ul
          className={classNames(
            "daisy-menu daisy-dropdown-content z-[1] w-64 justify-evenly gap-0.5 rounded-lg bg-base-100 p-2 shadow",
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
                      Balance: {` `}
                      {formatBalance({
                        balance: tokenBalance || 0n,
                        decimals: tokenConfig?.decimals,
                        places: tokenConfig?.places,
                      })}
                      {` `}
                    </span>
                  </label>
                </button>
              </li>
            )),
          ]}
        </ul>
      </div>
    </>
  );
}
