import { ReactElement } from "react";
import { ExternalLink } from "src/ui/analytics/ExternalLink";
import { useAppConfigForConnectedChain } from "src/ui/appconfig/useAppConfigForConnectedChain";

export function ChainCell({ chainId }: { chainId: number }): ReactElement {
  const appConfig = useAppConfigForConnectedChain();
  const { iconUrl, name } = appConfig.chains[chainId] || {};
  return (
    <ExternalLink
      href={appConfig.chains[chainId].blockExplorerUrl}
      newTab
      rel="noreferrer"
      className="daisy-link-hover daisy-link flex items-center gap-1.5 text-sm"
    >
      {iconUrl && <img className="size-4 rounded-full" src={iconUrl} />}
      {name ?? `Chain ${chainId}`}
    </ExternalLink>
  );
}
