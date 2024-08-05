import { ReadHyperdrive_v1_0_14 } from "src/hyperdrive/base/v1.0.14/ReadHyperdrive_v1_0_14";
import { readStEthHyperdriveMixin } from "src/hyperdrive/steth/ReadStEthHyperdrive";

export class ReadStEthHyperdrive_v1_0_14 extends readStEthHyperdriveMixin(
  ReadHyperdrive_v1_0_14,
) {}
