import { ReadHyperdrive_v1_0_14 } from "src/hyperdrive/base/v1.0.14/ReadHyperdrive_v1_0_14";
import { readREthHyperdriveMixin } from "src/hyperdrive/reth/ReadREthHyperdrive";

export class ReadREthHyperdrive_v1_0_14 extends readREthHyperdriveMixin(
  ReadHyperdrive_v1_0_14
) {}
