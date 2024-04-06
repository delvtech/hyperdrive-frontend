import { HyperdriveRegistry } from "@delvtech/hyperdrive-artifacts/HyperdriveRegistry";
import { ReadHyperdrive } from "@delvtech/hyperdrive-viem";
import { Address, parseAbi } from "abitype";
import {} from "dnum";
import { RegistryAddresses } from "src/addresses/RegistryAddresses";
import { PublicClient, getContract } from "viem";
/// @notice Gets the number of instances deployed by this factory.
/// @return The number of instances deployed by this factory.
const abi = [
  "function getNumberOfInstances() external view returns (uint256)",
  "function getInstanceAtIndex(uint256 index) external view returns (address)",
] as const;

const parsedAbi = parseAbi(abi);
export async function fetchRegistryAddresses(
  registryAddress: Address,
  publicClient: PublicClient,
): Promise<RegistryAddresses> {
  const factory = getContract({
    address: "0x036b75a3e29f174544e12941853e02cc422ef8d3",
    abi: parsedAbi,
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
  Array.from({
    length: Number(numInstances),
  }).map(async (_, i) => {
    const instance = await factory.read.getInstanceAtIndex([BigInt(i)]);
    const exists = await registryContract.read.getHyperdriveInfo([instance]);

    if (exists) {
      const hyperdrive = new ReadHyperdrive({
        address: instance,
        publicClient: publicClient,
      });
      const baseToken = await hyperdrive.getBaseToken();
      const symbol = await baseToken.getSymbol();
      if (symbol === "ETH") {
        hyperdrives.stethHyperdrive.push(instance);
      } else {
        hyperdrives.erc4626Hyperdrive.push(instance);
      }
      console.log(hyperdrives, "hyperdrives");
    }
  });

  return hyperdrives;
}
