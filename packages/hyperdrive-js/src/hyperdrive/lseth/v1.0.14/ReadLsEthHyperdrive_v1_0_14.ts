import { readLsEthHyperdriveMixin } from "src/hyperdrive/lseth/ReadLsEthHyperdrive";
import { ReadHyperdrive_v1_0_14 } from "src/hyperdrive/v1.0.14/ReadHyperdrive_v1_0_14";

export class ReadLsEthHyperdrive_v1_0_14 extends readLsEthHyperdriveMixin(
  ReadHyperdrive_v1_0_14,
) {}
