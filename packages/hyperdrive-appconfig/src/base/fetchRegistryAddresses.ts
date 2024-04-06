import { HyperdriveRegistry } from "@delvtech/hyperdrive-artifacts/HyperdriveRegistry";
import { ReadHyperdrive } from "@delvtech/hyperdrive-viem";
import { Address, parseAbi } from "abitype";
import {} from "dnum";
import { RegistryAddresses } from "src/addresses/RegistryAddresses";
import { PublicClient, getContract } from "viem";

/// @notice Gets the number of instances deployed by this factory.
/// @return The number of instances deployed by this factory.
const minimalFactoryAbi = [
  "function getNumberOfInstances() external view returns (uint256)",
  "function getInstanceAtIndex(uint256 index) external view returns (address)",
] as const;

export async function fetchRegistryAddresses(
  registryAddress: Address,
  publicClient: PublicClient,
): Promise<RegistryAddresses> {
  const factory = getContract({
    // TODO: Replace this with the deployed HyperdriveFactory address
    address: "0x036b75a3e29f174544e12941853e02cc422ef8d3",
    abi: parseAbi(minimalFactoryAbi),
    client: publicClient,
  });
  const registryContract = getContract({
    abi: HyperdriveRegistry.abi,
    client: publicClient,
    address: registryAddress,
  });

  const numInstances = await factory.read.getNumberOfInstances();
  const hyperdrives = {
    stethHyperdrive: [] as Address[],
    erc4626Hyperdrive: [] as Address[],
  };
  for (let i = 0; i < numInstances; i++) {
    const hyperdriveInstance = await factory.read.getInstanceAtIndex([
      BigInt(i),
    ]);
    const hyperdriveInstanceExists =
      await registryContract.read.getHyperdriveInfo([hyperdriveInstance]);

    if (hyperdriveInstanceExists.toString() === "1") {
      const hyperdrive = new ReadHyperdrive({
        address: hyperdriveInstance,
        publicClient,
      });
      const baseToken = await hyperdrive.getBaseToken();
      const baseTokenSymbol = await baseToken.getSymbol();
      if (baseTokenSymbol === "ETH") {
        hyperdrives.stethHyperdrive.push(hyperdriveInstance);
      } else {
        hyperdrives.erc4626Hyperdrive.push(hyperdriveInstance);
      }
    }
  }
  return hyperdrives;
}
