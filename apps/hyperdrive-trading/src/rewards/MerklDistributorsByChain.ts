import { Address } from "viem";
import { gnosis, mainnet } from "viem/chains";

/**
 * Merkl Distributor is the contract that you can claim rewards from in the
 * Merkl.xyz ecosystem.
 * See: https://app.merkl.xyz/status
 */

export const MerklDistributorsByChain: Record<number, Address> = {
  [gnosis.id]: "0x3Ef3D8bA38EBe18DB133cEc108f4D14CE00Dd9Ae",
  [mainnet.id]: "0x3Ef3D8bA38EBe18DB133cEc108f4D14CE00Dd9Ae",
};
