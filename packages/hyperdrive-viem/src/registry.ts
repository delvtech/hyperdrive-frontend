import {
  ReadRegistry as BaseReadRegistry,
  ReadRegistryOptions as BaseReadRegistryOptions,
  ReadWriteRegistry as BaseReadWriteRegistry,
  ReadWriteRegistryOptions as BaseReadWriteRegistryOptions,
} from "@delvtech/hyperdrive-js-core";
import { ViemReadClientOptions, viemReadMixin } from "src/viem/viemReadMixin";
import {
  ViemReadWriteClientOptions,
  viemReadWriteMixin,
} from "src/viem/viemReadWriteMixin";

export type ReadRegistryOptions =
  ViemReadClientOptions<BaseReadRegistryOptions>;

export class ReadRegistry extends viemReadMixin(BaseReadRegistry) {}

export type ReadWriteRegistryOptions =
  ViemReadWriteClientOptions<BaseReadWriteRegistryOptions>;

export class ReadWriteRegistry extends viemReadWriteMixin(
  BaseReadWriteRegistry,
) {}
