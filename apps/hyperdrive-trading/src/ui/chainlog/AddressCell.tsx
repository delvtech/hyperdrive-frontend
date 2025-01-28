import { makeAddressUrl } from "@delvtech/hyperdrive-appconfig";
import { ReactElement } from "react";
import { ExternalLink } from "src/ui/analytics/ExternalLink";
import { useAppConfigForConnectedChain } from "src/ui/appconfig/useAppConfigForConnectedChain";
import { formatAddress } from "src/ui/base/formatting/formatAddress";
import { Address } from "viem";

export function AddressCell({
  address,
  chainId,
}: {
  address: Address;
  chainId: number;
}): ReactElement {
  const appConfig = useAppConfigForConnectedChain();
  return (
    <ExternalLink
      href={makeAddressUrl(address, appConfig.chains[chainId])}
      newTab
      rel="noreferrer"
      className="daisy-link-hover daisy-link"
    >
      {formatAddress(address)}
    </ExternalLink>
  );
}
