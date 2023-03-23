import { ReactElement } from "react";
import { AssetIcon } from "src/ui/token/AssetIcon";
import { AssetId } from "src/ui/token/AssetId";

interface AssetBadgeProps {
  assetId: AssetId;
}

export function AssetBadge({ assetId }: AssetBadgeProps): ReactElement {
  return (
    <div className="flex h-8 items-center gap-1.5 rounded-full bg-dawn pl-1 pr-2">
      <AssetIcon assetId={assetId} />
      <span className="text-body">{assetId}</span>
    </div>
  );
}
