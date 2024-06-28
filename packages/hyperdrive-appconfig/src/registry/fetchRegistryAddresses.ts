import { HyperdriveRegistry } from "@delvtech/hyperdrive-artifacts/HyperdriveRegistry";
import { Address } from "abitype";
import { PublicClient, getContract } from "viem";

export async function fetchRegistryAddresses({
  registryAddress,
  publicClient,
}: {
  registryAddress: Address;
  publicClient: PublicClient;
}): Promise<Address[]> {
  // The registry tells you if a hyperdrive is "blessed" for use in the UI
  const registryContract = getContract({
    address: registryAddress,
    abi: HyperdriveRegistry.abi,
    client: publicClient,
  });
  const numInstances = await registryContract.read.getNumberOfInstances();

  return registryContract.read.getInstancesInRange([
    0n,
    numInstances,
  ]) as Promise<Address[]>;
}
