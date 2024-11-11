import { readStEthHyperdriveMixin } from "src/hyperdrive/steth/ReadStEthHyperdrive";
import { ReadHyperdrive_v1_0_14 } from "src/hyperdrive/v1.0.14/ReadHyperdrive_v1_0_14";

export class ReadStEthHyperdrive_v1_0_14 extends readStEthHyperdriveMixin(
  ReadHyperdrive_v1_0_14,
) {}
