import { readWriteStEthHyperdriveMixin } from "src/hyperdrive/steth/ReadWriteStEthHyperdrive";
import { ReadWriteHyperdrive_v1_0_14 } from "src/hyperdrive/v1.0.14/ReadWriteHyperdrive_v1_0_14";

export class ReadWriteStEthHyperdrive_v1_0_14 extends readWriteStEthHyperdriveMixin(
  ReadWriteHyperdrive_v1_0_14,
) {}
