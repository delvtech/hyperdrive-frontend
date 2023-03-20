import { ReactElement, ReactNode } from "react";
import daiLogo from "src/assets/DAI.svg";

type AssetId = "dai";

interface AssetIconProps {
  assetId: AssetId;

  large?: boolean;
}

const AssetIcons: Record<AssetId, string> = {
  dai: daiLogo,
};

export function AssetIcon({ assetId, large }: AssetIconProps): ReactElement {
  return (
    <img
      src={AssetIcons[assetId]}
      alt="dai"
      className={large ? "h-12 w-12" : "h-6 w-6"}
    />
  );
}
