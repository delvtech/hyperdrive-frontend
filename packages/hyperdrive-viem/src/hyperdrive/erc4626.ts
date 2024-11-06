import {
  ReadErc4626Hyperdrive as BaseReadErc4626Hyperdrive,
  ReadMockErc4626Hyperdrive as BaseReadMockErc4626Hyperdrive,
  ReadWriteErc4626Hyperdrive as BaseReadWriteErc4626Hyperdrive,
  ReadWriteMockErc4626Hyperdrive as BaseReadWriteMockErc4626Hyperdrive,
} from "@delvtech/hyperdrive-js-core";
import { viemReadMixin } from "src/viem/viemReadMixin";
import { viemReadWriteMixin } from "src/viem/viemReadWriteMixin";

export class ReadErc4626Hyperdrive extends viemReadMixin(
  BaseReadErc4626Hyperdrive,
) {}

export class ReadWriteErc4626Hyperdrive extends viemReadWriteMixin(
  BaseReadWriteErc4626Hyperdrive,
) {}

export class ReadMockErc4626Hyperdrive extends viemReadMixin(
  BaseReadMockErc4626Hyperdrive,
) {}

export class ReadWriteMockErc4626Hyperdrive extends viemReadWriteMixin(
  BaseReadWriteMockErc4626Hyperdrive,
) {}
