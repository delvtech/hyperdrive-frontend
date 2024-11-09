import { ZERO_ADDRESS } from "@delvtech/drift";
import { MockDrift } from "@delvtech/drift/testing";
import { ReadHyperdrive_v1_0_14 } from "src/hyperdrive/v1.0.14/ReadHyperdrive_v1_0_14";

// No need to explicitly set return types as they are already set in the Stubs
// eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types
export function setupReadHyperdrive() {
  const drift = new MockDrift();
  // TODO: We use the v1.0.14 version of ReadHyperdrive to avoid the need to
  // stub every `convertToShares` and `convertToBase` call since drift only
  // supports stubbing calls with static values. It should be refactored to
  // support stubbing a call with a function to dynamically calculate the return
  // value based on arguments and options.
  const readHyperdrive = new ReadHyperdrive_v1_0_14({
    address: ZERO_ADDRESS,
    drift,
  });

  // The ReadHyperdrive class doesn't infer that the contract is a MockContract.
  const contract = drift.contract({
    abi: readHyperdrive.contract.abi,
    address: readHyperdrive.contract.address,
  });

  contract.onRead("decimals").resolves(18);
  return {
    drift,
    contract,
    readHyperdrive,
  };
}
