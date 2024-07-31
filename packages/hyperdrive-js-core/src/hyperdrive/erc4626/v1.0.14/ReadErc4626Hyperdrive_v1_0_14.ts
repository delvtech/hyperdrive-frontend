import { ReadHyperdrive_v1_0_14 } from "src/hyperdrive/base/v1.0.14/ReadHyperdrive_v1_0_14";
import { readErc4626HyperdriveMixin } from "src/hyperdrive/erc4626/ReadErc4626Hyperdrive";

export class ReadErc4626Hyperdrive_v1_0_14 extends readErc4626HyperdriveMixin(
  ReadHyperdrive_v1_0_14
) {}
