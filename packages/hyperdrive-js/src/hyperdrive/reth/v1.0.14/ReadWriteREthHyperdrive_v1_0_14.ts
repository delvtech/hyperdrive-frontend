import { readWriteREthHyperdriveMixin } from "src/hyperdrive/reth/ReadWriteREthHyperdrive";
import { ReadWriteHyperdrive_v1_0_14 } from "src/hyperdrive/v1.0.14/ReadWriteHyperdrive_v1_0_14";

export class ReadWriteREthHyperdrive_v1_0_14 extends readWriteREthHyperdriveMixin(
  ReadWriteHyperdrive_v1_0_14,
) {}
