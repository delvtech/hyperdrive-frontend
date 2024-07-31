import * as core from "@delvtech/hyperdrive-js-core/v1.0.14";
import { viemReadMixin } from "src/viem/viemReadMixin";
import { viemReadWriteMixin } from "src/viem/viemReadWriteMixin";

export class ReadErc4626Hyperdrive_v1_0_14 extends viemReadMixin(
  core.ReadErc4626Hyperdrive_v1_0_14
) {}

export class ReadWriteErc4626Hyperdrive_v1_0_14 extends viemReadWriteMixin(
  core.ReadWriteErc4626Hyperdrive_v1_0_14
) {}

export class ReadMockErc4626Hyperdrive_v1_0_14 extends viemReadMixin(
  core.ReadMockErc4626Hyperdrive_v1_0_14
) {}

export class ReadWriteMockErc4626Hyperdrive_v1_0_14 extends viemReadWriteMixin(
  core.ReadWriteMockErc4626Hyperdrive_v1_0_14
) {}
