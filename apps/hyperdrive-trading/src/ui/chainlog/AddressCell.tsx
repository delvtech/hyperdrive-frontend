import { makeAddressUrl } from "@hyperdrive/appconfig";
import { ReactElement } from "react";
import { useAppConfig } from "src/ui/appconfig/useAppConfig";
import { formatAddress } from "src/ui/base/formatting/formatAddress";
import { Address } from "viem";

export function AddressCell({
  address,
  chainId,
}: {
  address: Address;
  chainId: number;
}): ReactElement {
  const appConfig = useAppConfig();
  return (
    <a
      href={makeAddressUrl(address, appConfig.chains[chainId])}
      target="_blank"
      rel="noreferrer"
      className="daisy-link-hover daisy-link"
    >
      {formatAddress(address)}
    </a>
  );
}
