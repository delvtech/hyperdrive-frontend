import { readWriteLsEthHyperdriveMixin } from "src/hyperdrive/lseth/ReadWriteLsEthHyperdrive";
import { ReadWriteHyperdrive_v1_0_14 } from "src/hyperdrive/v1.0.14/ReadWriteHyperdrive_v1_0_14";

export class ReadWriteLsEthHyperdrive_v1_0_14 extends readWriteLsEthHyperdriveMixin(
  ReadWriteHyperdrive_v1_0_14,
) {}
