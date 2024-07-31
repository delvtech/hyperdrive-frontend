import { readMockErc4626HyperdriveMixin } from "src/hyperdrive/erc4626/ReadMockErc4626Hyperdrive";
import { ReadErc4626Hyperdrive_v1_0_14 } from "src/hyperdrive/erc4626/v1.0.14/ReadErc4626Hyperdrive_v1_0_14";

export class ReadMockErc4626Hyperdrive_v1_0_14 extends readMockErc4626HyperdriveMixin(
  ReadErc4626Hyperdrive_v1_0_14
) {}
