import {
  ReadEzEthHyperdrive as BaseReadEzEthHyperdrive,
  ReadWriteEzEthHyperdrive as BaseReadWriteEzEthHyperdrive,
} from "@delvtech/hyperdrive-js";
import { viemReadMixin } from "src/viem/viemReadMixin";
import { viemReadWriteMixin } from "src/viem/viemReadWriteMixin";

export class ReadEzEthHyperdrive extends viemReadMixin(
  BaseReadEzEthHyperdrive,
) {}

export class ReadWriteEzEthHyperdrive extends viemReadWriteMixin(
  BaseReadWriteEzEthHyperdrive,
) {}
