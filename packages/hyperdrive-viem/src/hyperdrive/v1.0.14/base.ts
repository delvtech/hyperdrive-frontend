import * as core from "@delvtech/hyperdrive-js-core/v1.0.14";
import { viemReadMixin } from "src/viem/viemReadMixin";
import { viemReadWriteMixin } from "src/viem/viemReadWriteMixin";

export class ReadHyperdrive_v1_0_14 extends viemReadMixin(
  core.ReadHyperdrive_v1_0_14
) {}

export class ReadWriteHyperdrive_v1_0_14 extends viemReadWriteMixin(
  core.ReadWriteHyperdrive_v1_0_14
) {}
