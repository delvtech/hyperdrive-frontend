import classNames from "classnames";
import { ReactElement } from "react";
import { AssetIcons } from "src/ui/token/iconConfig";
import { Address, useNetwork, useToken } from "wagmi";

interface AssetIconProps {
  address: Address;

  size?: "sm" | "md" | "lg";
}

export function AssetIcon({
  address,
  size = "md",
}: AssetIconProps): ReactElement {
  const { chain } = useNetwork();
  const { data: tokenMetadata } = useToken({ address });

  const assetIcon = chain ? AssetIcons[chain.id]?.[address] : null;
  if (!assetIcon) {
    return (
      <span
        className={classNames({
          // 36px is equivalent to the h-9, w-9 img size below
          "text-[36px]": size === "lg",
          // 24px is equivalent to the h-6, w-6 img size below
          "text-[24px]": size === "md",
          "text-h6": size === "sm",
        })}
      >
        🤔
      </span>
    );
  }

  return (
    <img
      src={assetIcon}
      alt={tokenMetadata?.symbol}
      className={classNames({
        "h-9 w-9": size === "lg",
        "h-6 w-6": size === "md",
        "h-4 w-4": size === "sm",
      })}
    />
  );
}
