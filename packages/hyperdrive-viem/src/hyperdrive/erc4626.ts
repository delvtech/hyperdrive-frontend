import * as core from "@delvtech/hyperdrive-js-core/hyperdrive/model";
import { viemReadMixin } from "src/viem/viemReadMixin";
import { viemReadWriteMixin } from "src/viem/viemReadWriteMixin";

export class ReadErc4626Hyperdrive extends viemReadMixin(
  core.ReadErc4626Hyperdrive,
) {}

export class ReadWriteErc4626Hyperdrive extends viemReadWriteMixin(
  core.ReadWriteErc4626Hyperdrive,
) {}

export class ReadMockErc4626Hyperdrive extends viemReadMixin(
  core.ReadMockErc4626Hyperdrive,
) {}

export class ReadWriteMockErc4626Hyperdrive extends viemReadWriteMixin(
  core.ReadWriteMockErc4626Hyperdrive,
) {}
