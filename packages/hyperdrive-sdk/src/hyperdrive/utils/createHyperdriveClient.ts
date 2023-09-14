import {
  ReadHyperdrive,
  ReadHyperdriveOptions,
} from "src/hyperdrive/ReadHyperdrive";
import {
  ReadWriteHyperdrive,
  ReadWriteHyperdriveOptions,
} from "src/hyperdrive/ReadWriteHyperdrive";

type HyperdriveSdkOptions = ReadHyperdriveOptions | ReadWriteHyperdriveOptions;

export function createHyperdriveSdk({
  contract,
  mathContract,
}: HyperdriveSdkOptions): any {
  if ("write" in contract) {
    return new ReadWriteHyperdrive({
      contract,
      mathContract,
    });
  }

  return new ReadHyperdrive({
    contract,
    mathContract,
  });
}
