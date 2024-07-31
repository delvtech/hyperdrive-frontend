import { ReadHyperdrive_v1_0_14 } from "src/hyperdrive/base/v1.0.14/ReadHyperdrive_v1_0_14";
import { readEzEthHyperdriveMixin } from "src/hyperdrive/ezeth/ReadEzEthHyperdrive";

export class ReadEzEthHyperdrive_v1_0_14 extends readEzEthHyperdriveMixin(
  ReadHyperdrive_v1_0_14
) {}
