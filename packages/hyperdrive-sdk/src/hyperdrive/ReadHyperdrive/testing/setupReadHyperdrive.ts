// No need to explicitly set return types as they are alread set in the Stubs

import { IHyperdrive } from "@hyperdrive/artifacts/dist/IHyperdrive";
import { MockHyperdriveMath } from "@hyperdrive/artifacts/dist/MockHyperdriveMath";
import {
  CachedReadContract,
  NetworkStub,
  ReadContractStub,
} from "@hyperdrive/evm-client";
import { ReadHyperdrive } from "src/hyperdrive/ReadHyperdrive/ReadHyperdrive";

// eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types
export function setupReadHyperdrive() {
  const contract = new ReadContractStub(IHyperdrive.abi);
  const cachedContract = new CachedReadContract({ contract });

  const mathContract = new ReadContractStub(MockHyperdriveMath.abi);
  const cachedMathContract = new CachedReadContract({ contract: mathContract });

  const network = new NetworkStub();

  const readHyperdrive = new ReadHyperdrive({
    contract: cachedContract,
    mathContract: cachedMathContract,
    network: network,
  });

  return { contract, mathContract, network, readHyperdrive };
}
