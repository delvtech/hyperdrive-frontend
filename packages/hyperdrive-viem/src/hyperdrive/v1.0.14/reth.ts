import * as core from "@delvtech/hyperdrive-js-core/v1.0.14";
import { viemReadMixin } from "src/viem/viemReadMixin";
import { viemReadWriteMixin } from "src/viem/viemReadWriteMixin";

export class ReadREthHyperdrive_v1_0_14 extends viemReadMixin(
  core.ReadREthHyperdrive_v1_0_14,
) {}

export class ReadWriteREthHyperdrive_v1_0_14 extends viemReadWriteMixin(
  core.ReadWriteREthHyperdrive_v1_0_14,
) {}
