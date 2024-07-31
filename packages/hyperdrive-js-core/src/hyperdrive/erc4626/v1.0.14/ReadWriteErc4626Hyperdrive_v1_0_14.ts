import { ReadWriteHyperdrive_v1_0_14 } from "src/hyperdrive/base/v1.0.14/ReadWriteHyperdrive_v1_0_14";
import { readWriteErc4626HyperdriveMixin } from "src/hyperdrive/erc4626/ReadWriteErc4626Hyperdrive";

export class ReadWriteErc4626Hyperdrive_v1_0_14 extends readWriteErc4626HyperdriveMixin(
  ReadWriteHyperdrive_v1_0_14
) {}
