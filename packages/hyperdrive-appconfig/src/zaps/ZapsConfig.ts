import { Address } from "abitype";
import { ChainId } from "src/chains/chains";

export interface ZapConfig {
  address: Address;
  chainId: ChainId;
}
