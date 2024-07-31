import * as core from "@delvtech/hyperdrive-js-core";
import { viemReadMixin, ViemReadModelOptions } from "src/viem/viemReadMixin";
import { viemReadWriteMixin } from "src/viem/viemReadWriteMixin";

export type ReadRegistryOptions =
  ViemReadModelOptions<core.ReadRegistryOptions>;

export class ReadRegistry extends viemReadMixin(core.ReadRegistry) {}

export type ReadWriteRegistryOptions =
  ViemReadModelOptions<core.ReadWriteRegistryOptions>;

export class ReadWriteRegistry extends viemReadWriteMixin(
  core.ReadWriteRegistry
) {}
