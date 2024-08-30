import { ReactElement } from "react";
import { blockExplorers } from "src/blockexplorer/blockExplorers";
import { useAppConfig } from "src/ui/appconfig/useAppConfig";

export function ChainCell({ chainId }: { chainId: number }): ReactElement {
  const appConfig = useAppConfig();
  const { iconUrl, name } = appConfig.chains[chainId] || {};
  return (
    <a
      href={blockExplorers[chainId]}
      target="_blank"
      rel="noreferrer"
      className="daisy-link-hover daisy-link flex items-center gap-1.5 text-sm"
    >
      {iconUrl && <img className="size-4 rounded-full" src={iconUrl} />}
      {name ?? `Chain ${chainId}`}
    </a>
  );
}
