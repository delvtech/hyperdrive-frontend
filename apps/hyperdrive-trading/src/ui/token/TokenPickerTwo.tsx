import { TokenConfig } from "@delvtech/hyperdrive-appconfig";
import {
  ChevronDownIcon,
  MagnifyingGlassIcon,
  XMarkIcon,
} from "@heroicons/react/20/solid";
import classNames from "classnames";
import Fuse from "fuse.js";
import { ReactElement, useMemo, useRef, useState } from "react";
import { formatBalance } from "src/ui/base/formatting/formatBalance";
import { Address } from "viem";

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
                  <img
                    src={tokenConfig?.iconUrl}
                    className="h-5 rounded-full"
                  />{" "}
                  {tokenConfig?.symbol}
                  <label className="flex w-32 flex-1 cursor-pointer text-neutral-content">
                    <span>
                      Balance: {` `}
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

export function ZapsTokenPicker({
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
  const [searchString, setSearchString] = useState("");
  const inputRef = useRef<HTMLInputElement>(null);

  const fuse = useMemo(() => {
    return new Fuse(tokens, {
      keys: ["tokenConfig.symbol", "tokenConfig.name"],
      threshold: 0.4,
    });
  }, [tokens]);

  const filteredTokens = searchString
    ? fuse.search(searchString).map(({ item }) => item)
    : tokens;

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
      <div className="daisy-dropdown daisy-dropdown-end daisy-dropdown-bottom">
        <button
          className={classNames(
            "daisy-btn daisy-btn-md flex h-9 min-h-9 items-center rounded-box bg-neutral pl-3 pr-1",
          )}
          type="button"
        >
          <img
            src={activeToken?.tokenConfig?.iconUrl}
            className="h-5 rounded-full"
          />{" "}
          {activeToken?.tokenConfig?.symbol}
          <ChevronDownIcon className="h-6 text-neutral-content" />
        </button>
        <div
          tabIndex={0}
          className="daisy-menu daisy-dropdown-content z-[1] mt-1 w-64 gap-2 rounded-lg bg-neutral p-2 shadow"
        >
          <div className="mb-2 flex gap-2">
            <div className="daisy-input daisy-input-sm flex w-full items-center gap-2 rounded-md bg-base-200">
              <input
                ref={inputRef}
                className="w-full shrink bg-transparent outline-none"
                placeholder="Search"
                value={searchString}
                onChange={({ target }) => setSearchString(target.value)}
              />
              {searchString.length ? (
                <button
                  type="button"
                  title="Reset search"
                  onClick={() => {
                    inputRef.current?.focus();
                    setSearchString("");
                  }}
                  className="text-neutral-content transition-all hover:text-current"
                >
                  <XMarkIcon className="size-5 fill-current" />
                </button>
              ) : (
                <MagnifyingGlassIcon className="size-5 fill-neutral-content" />
              )}
            </div>
          </div>
          <ul className="max-h-[40vh] overflow-y-auto">
            {searchString.length && !filteredTokens.length ? (
              <li className="flex h-8 items-center px-4">No matches</li>
            ) : (
              filteredTokens.map(({ tokenConfig }) => (
                <li key={tokenConfig?.address}>
                  <button
                    type="button"
                    onClick={() => {
                      (document.activeElement as HTMLElement)?.blur();
                      onChange(tokenConfig?.address);
                    }}
                  >
                    <img
                      src={tokenConfig?.iconUrl}
                      className="h-5 rounded-full"
                    />{" "}
                    {tokenConfig?.symbol}
                  </button>
                </li>
              ))
            )}
          </ul>
        </div>
      </div>
    </div>
  );
}
