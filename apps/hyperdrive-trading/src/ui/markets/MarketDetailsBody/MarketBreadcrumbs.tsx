import { ArrowLeftIcon } from "@heroicons/react/24/outline";
import { HyperdriveConfig } from "@hyperdrive/appconfig";
import { Link } from "@tanstack/react-router";
import { ReactElement } from "react";
import { makeAddressUrl } from "src/blockexplorer/makeAddressUrl";
import { SupportedChainId } from "src/chains/supportedChains";
import { useAppConfig } from "src/ui/appconfig/useAppConfig";

export function MarketBreadcrumbs({
  hyperdrive,
}: {
  hyperdrive: HyperdriveConfig;
}): ReactElement {
  const appConfig = useAppConfig();
  return (
    <div className="flex flex-1 items-center justify-between">
      <div className="daisy-breadcrumbs md:text-md">
        <ul>
          <li>
            <Link to="/" className="text-primary">
              <ArrowLeftIcon className="mr-1 h-4" />
              Back to home
            </Link>
          </li>
        </ul>
      </div>
      <a
        href={makeAddressUrl(
          hyperdrive.address,
          appConfig.chainId as SupportedChainId,
        )}
        className="daisy-btn daisy-btn-xs flex items-center gap-2 rounded-full "
        target="_blank"
        rel="noreferrer"
      >
        <img src="/etherscan-logo-circle-light.svg" className="h-4" />
        View on Etherscan
      </a>
    </div>
  );
}
