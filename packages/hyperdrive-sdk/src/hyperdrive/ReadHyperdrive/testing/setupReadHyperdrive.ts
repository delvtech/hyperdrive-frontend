import { IHyperdrive } from "@hyperdrive/artifacts/IHyperdrive";
import { createCachedReadContract } from "@delvtech/evm-client";
import { NetworkStub, ReadContractStub } from "@delvtech/evm-client/stubs";
import { ReadHyperdrive } from "src/hyperdrive/ReadHyperdrive/ReadHyperdrive";

// No need to explicitly set return types as they are already set in the Stubs
// eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types
export function setupReadHyperdrive() {
  const contract = new ReadContractStub(IHyperdrive.abi);
  const cachedContract = createCachedReadContract({ contract });

  const network = new NetworkStub();

  const readHyperdrive = new ReadHyperdrive({
    contract: cachedContract,
    network: network,
  });

  return { contract, network, readHyperdrive };
}
