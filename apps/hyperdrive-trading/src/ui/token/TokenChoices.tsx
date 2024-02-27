import { TokenConfig } from "@hyperdrive/appconfig";
import classNames from "classnames";
import { ReactElement } from "react";
import { Address } from "viem";

export function TokenChoices({
  label,
  onTokenChange,
  selectedTokenAddress,
  tokens,
  vertical = false,
}: {
  label: string;
  tokens: { disabled?: boolean; tokenConfig: TokenConfig<any> }[];
  selectedTokenAddress: Address;
  onTokenChange: (tokenAddress: Address) => void;
  vertical?: boolean;
}): ReactElement {
  return (
    <div
      className={classNames("flex justify-between", {
        "flex-col gap-1": vertical,
      })}
    >
      <span className="daisy-label-text">{label}</span>
      <div className="flex gap-8">
        {tokens.map(({ disabled, tokenConfig: { symbol, address } }) => {
          const checked = selectedTokenAddress === address;
          return (
            <label
              key={address}
              className={classNames(
                "inline-flex items-center justify-end gap-2",
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
              {symbol}
            </label>
          );
        })}
      </div>
    </div>
  );
}
