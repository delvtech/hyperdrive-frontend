import * as core from "@delvtech/hyperdrive-js-core";
import { viemReadMixin } from "src/viem/viemReadMixin";
import { viemReadWriteMixin } from "src/viem/viemReadWriteMixin";

export class ReadEzEthHyperdrive extends viemReadMixin(
  core.ReadEzEthHyperdrive,
) {}

export class ReadWriteEzEthHyperdrive extends viemReadWriteMixin(
  core.ReadWriteEzEthHyperdrive,
) {}
