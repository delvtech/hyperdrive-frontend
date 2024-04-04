import {
  CachedReadContract,
  createCachedReadContract,
} from "@delvtech/evm-client";
import { NetworkStub, ReadContractStub } from "@delvtech/evm-client/stubs";
import { Abi } from "abitype";
import { ReadHyperdrive } from "src/hyperdrive/ReadHyperdrive/ReadHyperdrive";
import { HyperdriveAbi } from "src/hyperdrive/abi";

// No need to explicitly set return types as they are already set in the Stubs
// eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types
export function setupReadHyperdrive() {
  const network = new NetworkStub();

  const readHyperdrive = new ReadHyperdrive({
    address: "0x123",
    contractFactory: <TAbi extends Abi>({ abi }: { abi: TAbi }) => {
      const contract = new ReadContractStub(abi);
      return createCachedReadContract({ contract });
    },
    network: network,
  });

  return {
    // The ReadHyperdrive class doesn't infer that the contract is a Stub
    // so we need to cast it to the correct type.
    contract:
      readHyperdrive.contract as unknown as CachedReadContract<HyperdriveAbi> &
        ReadContractStub<HyperdriveAbi>,
    network,
    readHyperdrive,
  };
}
