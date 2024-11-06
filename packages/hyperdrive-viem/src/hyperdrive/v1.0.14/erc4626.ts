import {
  ReadErc4626Hyperdrive_v1_0_14 as BaseReadErc4626Hyperdrive_v1_0_14,
  ReadMockErc4626Hyperdrive_v1_0_14 as BaseReadMockErc4626Hyperdrive_v1_0_14,
  ReadWriteErc4626Hyperdrive_v1_0_14 as BaseReadWriteErc4626Hyperdrive_v1_0_14,
  ReadWriteMockErc4626Hyperdrive_v1_0_14 as BaseReadWriteMockErc4626Hyperdrive_v1_0_14,
} from "@delvtech/hyperdrive-js-core/v1.0.14";
import { viemReadMixin } from "src/viem/viemReadMixin";
import { viemReadWriteMixin } from "src/viem/viemReadWriteMixin";

export class ReadErc4626Hyperdrive_v1_0_14 extends viemReadMixin(
  BaseReadErc4626Hyperdrive_v1_0_14,
) {}

export class ReadWriteErc4626Hyperdrive_v1_0_14 extends viemReadWriteMixin(
  BaseReadWriteErc4626Hyperdrive_v1_0_14,
) {}

export class ReadMockErc4626Hyperdrive_v1_0_14 extends viemReadMixin(
  BaseReadMockErc4626Hyperdrive_v1_0_14,
) {}

export class ReadWriteMockErc4626Hyperdrive_v1_0_14 extends viemReadWriteMixin(
  BaseReadWriteMockErc4626Hyperdrive_v1_0_14,
) {}
