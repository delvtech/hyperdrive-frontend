import { ReactElement } from "react";
import daiLogo from "src/assets/DAI.svg";
import wstethLogo from "src/assets/wsteth.svg";

type AssetId = "dai" | "wsteth";

interface AssetIconProps {
  assetId: AssetId;

  large?: boolean;
}

const AssetIcons: Record<AssetId, string> = {
  dai: daiLogo,
  wsteth: wstethLogo,
};

export function AssetIcon({ assetId, large }: AssetIconProps): ReactElement {
  return (
    <img
      src={AssetIcons[assetId]}
      alt={assetId}
      className={large ? "h-12 w-12" : "h-6 w-6"}
    />
  );
}
