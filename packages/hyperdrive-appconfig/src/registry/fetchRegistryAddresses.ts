import { HyperdriveRegistry } from "@delvtech/hyperdrive-artifacts/HyperdriveRegistry";
import { ReadHyperdrive } from "@delvtech/hyperdrive-viem";
import { Address, parseAbi } from "abitype";
import { RegistryAddresses } from "src/registry/RegistryAddresses";
import { PublicClient, erc20Abi, getContract } from "viem";

const minimalFactoryAbi = parseAbi([
  "function getNumberOfInstances() external view returns (uint256)",
  "function getInstanceAtIndex(uint256 index) external view returns (address)",
] as const);

// These hardcoded lists of shares token symbols help us to identify what kind
// of hyperdrive a pool is, eg: steth, sDai, etc.
const stethHyperdriveSharesTokenSymbols: Uppercase<string>[] = ["STETH"];
const erc4626HyperdriveSharesTokenSymbols: Uppercase<string>[] = [
  "DELV",
  "SDAI",
];

export async function fetchRegistryAddresses({
  factoryAddress,
  registryAddress,
  publicClient,
}: {
  factoryAddress: Address;
  registryAddress: Address;
  publicClient: PublicClient;
}): Promise<RegistryAddresses> {
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
  const hyperdrives: RegistryAddresses = {
    stethHyperdrive: [],
    erc4626Hyperdrive: [],
  };

  // Check each deployed hyperdrive to see if it's in the registry, and if so,
  // put it in the correct registry addresses list based on its underlying yield
  // source
  for (let i = 0n; i < numInstances; i++) {
    const hyperdriveAddress = await factory.read.getInstanceAtIndex([i]);
    const isHyperdriveInRegistry =
      await registryContract.read.getHyperdriveInfo([hyperdriveAddress]);

    if (!isHyperdriveInRegistry) {
      break;
    }

    const hyperdrive = new ReadHyperdrive({
      address: hyperdriveAddress,
      publicClient,
    });

    // TODO: use hyperdrive.getSharesToken() once it exists
    const { vaultSharesToken } = await hyperdrive.getPoolConfig();
    const sharesTokenSymbol = (
      await publicClient.readContract({
        address: vaultSharesToken,
        abi: erc20Abi,
        functionName: "symbol",
      })
    ).toUpperCase() as Uppercase<string>;

    if (stethHyperdriveSharesTokenSymbols.includes(sharesTokenSymbol)) {
      hyperdrives.stethHyperdrive.push(hyperdriveAddress);
    }

    if (erc4626HyperdriveSharesTokenSymbols.includes(sharesTokenSymbol)) {
      hyperdrives.erc4626Hyperdrive.push(hyperdriveAddress);
    }
  }
  return hyperdrives;
}
