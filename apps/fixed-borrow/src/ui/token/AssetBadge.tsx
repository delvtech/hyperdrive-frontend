import { ReactElement } from "react";
import { AssetIcon } from "src/ui/token/AssetIcon";
import { Address, useToken } from "wagmi";

interface AssetBadgeProps {
  address: Address;
}

export function AssetBadge({ address }: AssetBadgeProps): ReactElement {
  const { data: tokenMetadata } = useToken({ address });
  return (
    <div className="flex h-8 items-center gap-1.5 rounded-full bg-dawn pl-1 pr-2">
      <AssetIcon address={address} />
      <span className="text-body">{tokenMetadata?.symbol}</span>
    </div>
  );
}
