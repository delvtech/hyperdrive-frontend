import * as core from "@delvtech/hyperdrive-js-core";
import { viemReadMixin } from "src/viem/viemReadMixin";
import { viemReadWriteMixin } from "src/viem/viemReadWriteMixin";

export class ReadMetaMorphoHyperdrive extends viemReadMixin(
  core.ReadMetaMorphoHyperdrive
) {}

export class ReadWriteMetaMorphoHyperdrive extends viemReadWriteMixin(
  core.ReadWriteMetaMorphoHyperdrive
) {}
