import { ReactElement } from "react";
import { AssetIcons } from "src/ui/token/iconConfig";
import { Address, useNetwork, useToken } from "wagmi";

interface AssetIconProps {
  address: Address;

  large?: boolean;
}

export function AssetIcon({ address, large }: AssetIconProps): ReactElement {
  const { chain } = useNetwork();
  const { data: tokenMetadata } = useToken({ address });

  const assetIcon = chain ? AssetIcons[chain.id][address] : null;
  if (!assetIcon) {
    return <span className={large ? "h-12 w-12" : "h-6 w-6"}>🤔</span>;
  }

  return (
    <img
      src={assetIcon}
      alt={tokenMetadata?.symbol}
      className={large ? "h-12 w-12" : "h-6 w-6"}
    />
  );
}
