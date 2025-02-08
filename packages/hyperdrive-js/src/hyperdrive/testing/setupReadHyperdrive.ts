import { ZERO_ADDRESS } from "@delvtech/drift";
import { createMockDrift } from "@delvtech/drift/testing";
import { ReadWriteHyperdrive_v1_0_14 } from "src/hyperdrive/v1.0.14/ReadWriteHyperdrive_v1_0_14";

// No need to explicitly set return types as they are already set in the Stubs
// eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types
export function setupReadHyperdrive() {
  const drift = createMockDrift();
  // We use the v1.0.14 version of ReadHyperdrive to avoid the need to stub
  // every `convertToShares` and `convertToBase` call. This is possible because
  // the v1.0.14 version uses `PoolInfo.vaultSharePrice` to calculate these.
  const hyperdrive = new ReadWriteHyperdrive_v1_0_14({
    address: ZERO_ADDRESS,
    drift,
  });

  // The class infers that the adapter is a MockAdapter, but doesn't infer that
  // the contract is a MockContract which is what the MockDrift returns.
  const contract = drift.contract({
    abi: hyperdrive.contract.abi,
    address: hyperdrive.contract.address,
  });

  contract.onRead("decimals").resolves(18);

  return {
    drift,
    contract,
    hyperdrive,
  };
}
