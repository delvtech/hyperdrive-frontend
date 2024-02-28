import { TokenConfig } from "@hyperdrive/appconfig";
import classNames from "classnames";
import { ReactElement } from "react";
import { formatBalance } from "src/ui/base/formatting/formatBalance";
import { Address } from "viem";

export function TokenChoices({
  label,
  onTokenChange,
  selectedTokenAddress,
  tokens,
  vertical = false,
}: {
  label: string;
  tokens: {
    disabled?: boolean;
    tokenConfig: TokenConfig<any>;
    tokenBalance?: bigint;
  }[];
  selectedTokenAddress: Address;
  onTokenChange: (tokenAddress: Address) => void;
  vertical?: boolean;
}): ReactElement {
  return (
    <div
      className={classNames("flex justify-between", {
        "flex-col gap-2": vertical,
        "flex-row items-center gap-8": !vertical,
      })}
    >
      <span className="daisy-label-text">{label}</span>
      <div
        className={classNames("flex", {
          "flex-col gap-2": vertical,
          "gap-4": !vertical,
        })}
      >
        {tokens.map(
          ({
            disabled,
            tokenConfig: { symbol, address, decimals },
            tokenBalance,
          }) => {
            const checked = selectedTokenAddress === address;
            return (
              <label
                key={address}
                className={classNames(
                  "inline-flex items-center justify-start gap-2",
                  {
                    "cursor-not-allowed text-gray-100": disabled,
                    "cursor-pointer": !disabled,
                  },
                )}
              >
                <input
                  type="radio"
                  name={symbol}
                  disabled={!!disabled}
                  checked={checked}
                  className={classNames("daisy-radio daisy-radio-xs", {
                    // show as primary when disabled otherwise the radio button
                    // doesn't look right (it's the same color as the background)
                    "daisy-radio-primary": checked || disabled,
                  })}
                  onChange={() => {
                    onTokenChange(address);
                  }}
                />
                {symbol}{" "}
                <span className="text-xs">
                  {tokenBalance
                    ? `(Balance: ${formatBalance({
                        balance: tokenBalance,
                        decimals,
                        places: 2,
                        includeCommas: true,
                      })})`
                    : null}
                </span>
              </label>
            );
          },
        )}
      </div>
    </div>
  );
}
