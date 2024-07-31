import { ReadWriteHyperdrive_v1_0_14 } from "src/hyperdrive/base/v1.0.14/ReadWriteHyperdrive_v1_0_14";
import { readWriteREthHyperdriveMixin } from "src/hyperdrive/reth/ReadWriteREthHyperdrive";

export class ReadWriteREthHyperdrive_v1_0_14 extends readWriteREthHyperdriveMixin(
  ReadWriteHyperdrive_v1_0_14
) {}
