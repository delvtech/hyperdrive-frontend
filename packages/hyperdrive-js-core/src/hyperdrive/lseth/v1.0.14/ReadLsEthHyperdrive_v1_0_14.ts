import { ReadHyperdrive_v1_0_14 } from "src/hyperdrive/base/v1.0.14/ReadHyperdrive_v1_0_14";
import { readLsEthHyperdriveMixin } from "src/hyperdrive/lseth/ReadLsEthHyperdrive";

export class ReadLsEthHyperdrive_v1_0_14 extends readLsEthHyperdriveMixin(
  ReadHyperdrive_v1_0_14
) {}
