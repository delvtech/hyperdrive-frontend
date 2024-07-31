import { readWriteMockErc4626HyperdriveMixin } from "src/hyperdrive/erc4626/ReadWriteMockErc4626Hyperdrive";
import { ReadWriteErc4626Hyperdrive_v1_0_14 } from "src/hyperdrive/erc4626/v1.0.14/ReadWriteErc4626Hyperdrive_v1_0_14";

export class ReadWriteMockErc4626Hyperdrive_v1_0_14 extends readWriteMockErc4626HyperdriveMixin(
  ReadWriteErc4626Hyperdrive_v1_0_14
) {}
