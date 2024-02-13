import { TokenConfig } from "@hyperdrive/appconfig";
import classNames from "classnames";
import { ReactElement } from "react";
import { Address } from "viem";

export function TokenChoices({
  label,
  onTokenChange,
  selectedTokenAddress,
  tokens,
}: {
  label: string;
  tokens: { disabled?: boolean; tokenConfig: TokenConfig<any> }[];
  selectedTokenAddress: Address;
  onTokenChange: (tokenAddress: Address) => void;
}): ReactElement {
  return (
    <div className="flex items-center justify-between">
      <span className="daisy-label-text">{label}</span>
      <div className="flex gap-8">
        {tokens.map(({ disabled, tokenConfig: { symbol, address } }) => {
          const checked = selectedTokenAddress === address;
          return (
            <label
              key={address}
              className="inline-flex cursor-pointer items-center justify-end gap-2"
            >
              <input
                type="radio"
                name={symbol}
                disabled={!!disabled}
                checked={checked}
                className={classNames("daisy-radio daisy-radio-xs", {
                  "daisy-radio-primary": checked,
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
