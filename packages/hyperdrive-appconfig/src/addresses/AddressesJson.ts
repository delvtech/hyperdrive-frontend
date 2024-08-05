import type { Address } from "viem";

/**
 * Addresses from the artifacts server that are required to build the AppConfig
 */
export interface AddressesJson {
  factory: Address;
  hyperdriveRegistry: Address;
}
