import { TokenConfig } from "@hyperdrive/appconfig";
import { ReactElement } from "react";
import { Address } from "viem";

export function TokenPickerRow({
  tokenConfig,
  onChange,
}: {
  tokenConfig: TokenConfig;
  onChange: (tokenAddress: Address) => void;
}): ReactElement {
  return (
    <li key={tokenConfig?.address}>
      <button
        onClick={(e) => {
          onChange(tokenConfig?.address);
          e.preventDefault();
        }}
        className="gap-2"
      >
        <img src={tokenConfig?.iconUrl} className="h-5 rounded-full" />{" "}
        {tokenConfig?.symbol}
      </button>
    </li>
  );
}
