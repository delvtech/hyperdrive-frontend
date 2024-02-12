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
  return (
    <select
      className="daisy-join-item daisy-select flex h-12 items-center border border-neutral-content/30 bg-base-100"
      onChange={(e) => onChange(e.target.value as Address)}
      value={activeTokenAddress}
    >
      {tokens.map((token) => (
        <option key={token.address} value={token.address}>
          {token.symbol}
        </option>
      ))}
    </select>
  );
}
