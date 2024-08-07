import * as core from "@delvtech/hyperdrive-js-core/v1.0.14";
import { viemReadMixin } from "src/viem/viemReadMixin";
import { viemReadWriteMixin } from "src/viem/viemReadWriteMixin";

export class ReadEzEthHyperdrive_v1_0_14 extends viemReadMixin(
  core.ReadEzEthHyperdrive_v1_0_14
) {}

export class ReadWriteEzEthHyperdrive_v1_0_14 extends viemReadWriteMixin(
  core.ReadWriteEzEthHyperdrive_v1_0_14
) {}
