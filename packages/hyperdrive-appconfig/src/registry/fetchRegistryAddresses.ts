import { HyperdriveRegistry } from "@delvtech/hyperdrive-artifacts/HyperdriveRegistry";
import { Address, parseAbi } from "abitype";
import { PublicClient, getContract } from "viem";

const minimalFactoryAbi = parseAbi([
  "function getNumberOfInstances() external view returns (uint256)",
  "function getInstanceAtIndex(uint256 index) external view returns (address)",
] as const);

export async function fetchRegistryAddresses({
  factoryAddress,
  registryAddress,
  publicClient,
}: {
  factoryAddress: Address;
  registryAddress: Address;
  publicClient: PublicClient;
}): Promise<Address[]> {
  // The factory contains a list of all deployed hyperdrives
  const factory = getContract({
    address: factoryAddress,
    abi: minimalFactoryAbi,
    client: publicClient,
  });

  // The registry tells you if a hyperdrive is "blessed" for use in the UI
  const registryContract = getContract({
    address: registryAddress,
    abi: HyperdriveRegistry.abi,
    client: publicClient,
  });

  const numInstances = await factory.read.getNumberOfInstances();
  const hyperdrives: Address[] = [];

  // Check each deployed hyperdrive to see if it's in the registry, and if so,
  // put it in the correct registry addresses list based on its underlying yield
  // source
  for (let i = 0n; i < numInstances; i++) {
    const hyperdriveAddress = await factory.read.getInstanceAtIndex([i]);
    const isHyperdriveInRegistry =
      await registryContract.read.getHyperdriveInfo([hyperdriveAddress]);

    if (!isHyperdriveInRegistry) {
      continue;
    }

    hyperdrives.push(hyperdriveAddress);
  }
  return hyperdrives;
}
