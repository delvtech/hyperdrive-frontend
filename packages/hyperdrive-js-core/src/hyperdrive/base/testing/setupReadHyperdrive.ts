import {
  type CachedReadContract,
  createCachedReadContract,
} from "@delvtech/evm-client";
import { NetworkStub, ReadContractStub } from "@delvtech/evm-client/stubs";
import type { Abi } from "abitype";
import { ReadHyperdrive_v1_0_14 } from "src/exports/v1.0.14";
import type { HyperdriveAbi } from "src/hyperdrive/base/abi";

// No need to explicitly set return types as they are already set in the Stubs
export function setupReadHyperdrive() {
  const network = new NetworkStub();

  // TODO: We use the v1.0.14 version of ReadHyperdrive to avoid the need to
  // stub every `convertToShares` and `convertToBase` call since evm-client only
  // supports stubbing calls with static values. It should be refactored to
  // support stubbing a call with a function to dynamically calculate the return
  // value based on arguments and options.
  const readHyperdrive = new ReadHyperdrive_v1_0_14({
    address: "0x123",
    contractFactory: <TAbi extends Abi>({ abi }: { abi: TAbi }) => {
      const contract = new ReadContractStub(abi);
      return createCachedReadContract({ contract });
    },
    network: network,
  });

  // The ReadHyperdrive class doesn't infer that the contract is a Stub
  // so we need to cast it to the correct type.
  const contract =
    readHyperdrive.contract as unknown as CachedReadContract<HyperdriveAbi> &
      ReadContractStub<HyperdriveAbi>;

  contract.stubRead({ functionName: "decimals", value: 18 });
  return {
    contract,
    network,
    readHyperdrive,
  };
}
