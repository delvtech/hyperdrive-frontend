import { appConfig } from "@hyperdrive/appconfig";
import { ReactElement } from "react";

export function ChainCell({ chainId }: { chainId: number }): ReactElement {
  const { iconUrl, name } = appConfig.chains[chainId] || {};
  return (
    <a
      href={appConfig.chains[chainId].blockExplorerUrl}
      target="_blank"
      rel="noreferrer"
      className="daisy-link-hover daisy-link flex items-center gap-1.5 text-sm"
    >
      {iconUrl && <img className="size-4 rounded-full" src={iconUrl} />}
      {name ?? `Chain ${chainId}`}
    </a>
  );
}
