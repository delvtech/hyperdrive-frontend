import { Address } from "viem";

/**
 * The "blessed" hyperdrives from the registry keyed by the kind of hyperdrive
 * they are
 */
export interface RegistryAddresses {
  erc4626Hyperdrive: Address[];
  stethHyperdrive: Address[];
}
