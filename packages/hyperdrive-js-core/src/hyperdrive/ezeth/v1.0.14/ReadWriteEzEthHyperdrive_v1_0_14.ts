import { ReadWriteHyperdrive_v1_0_14 } from "src/hyperdrive/base/v1.0.14/ReadWriteHyperdrive_v1_0_14";
import { readWriteEzEthHyperdriveMixin } from "src/hyperdrive/ezeth/ReadWriteEzEthHyperdrive";

export class ReadWriteEzEthHyperdrive_v1_0_14 extends readWriteEzEthHyperdriveMixin(
  ReadWriteHyperdrive_v1_0_14,
) {}
