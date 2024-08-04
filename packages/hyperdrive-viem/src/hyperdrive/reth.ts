import * as core from "@delvtech/hyperdrive-js-core";
import { viemReadMixin } from "src/viem/viemReadMixin";
import { viemReadWriteMixin } from "src/viem/viemReadWriteMixin";

export class ReadREthHyperdrive extends viemReadMixin(
  core.ReadREthHyperdrive,
) {}

export class ReadWriteREthHyperdrive extends viemReadWriteMixin(
  core.ReadWriteREthHyperdrive,
) {}
