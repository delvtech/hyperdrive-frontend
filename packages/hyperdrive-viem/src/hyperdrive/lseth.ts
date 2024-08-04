import * as core from "@delvtech/hyperdrive-js-core";
import { viemReadMixin } from "src/viem/viemReadMixin";
import { viemReadWriteMixin } from "src/viem/viemReadWriteMixin";

export class ReadLsEthHyperdrive extends viemReadMixin(
  core.ReadLsEthHyperdrive,
) {}

export class ReadWriteLsEthHyperdrive extends viemReadWriteMixin(
  core.ReadWriteLsEthHyperdrive,
) {}
