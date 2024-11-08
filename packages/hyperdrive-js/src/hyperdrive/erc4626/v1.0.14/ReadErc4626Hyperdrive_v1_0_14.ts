import { readErc4626HyperdriveMixin } from "src/hyperdrive/erc4626/ReadErc4626Hyperdrive";
import { ReadHyperdrive_v1_0_14 } from "src/hyperdrive/v1.0.14/ReadHyperdrive_v1_0_14";

export class ReadErc4626Hyperdrive_v1_0_14 extends readErc4626HyperdriveMixin(
  ReadHyperdrive_v1_0_14,
) {}
