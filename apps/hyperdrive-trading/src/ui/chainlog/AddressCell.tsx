import { ReactElement } from "react";
import { makeAddressUrl } from "src/blockexplorer/makeAddressUrl";
import { SupportedChainId } from "src/chains/supportedChains";
import { formatAddress } from "src/ui/base/formatting/formatAddress";
import { Address } from "viem";
import { useChainId } from "wagmi";

export function AddressCell({ address }: { address: Address }): ReactElement {
  const chainId = useChainId() as SupportedChainId;
  return (
    <a
      href={makeAddressUrl(address, chainId)}
      target="_blank"
      rel="noreferrer"
      className="daisy-link-hover daisy-link"
    >
      {formatAddress(address)}
    </a>
  );
}
