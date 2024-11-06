import {
  ReadStEthHyperdrive_v1_0_14 as BaseReadStEthHyperdrive_v1_0_14,
  ReadWriteStEthHyperdrive_v1_0_14 as BaseReadWriteStEthHyperdrive_v1_0_14,
} from "@delvtech/hyperdrive-js-core/v1.0.14";
import { viemReadMixin } from "src/viem/viemReadMixin";
import { viemReadWriteMixin } from "src/viem/viemReadWriteMixin";

export class ReadStEthHyperdrive_v1_0_14 extends viemReadMixin(
  BaseReadStEthHyperdrive_v1_0_14,
) {}

export class ReadWriteStEthHyperdrive_v1_0_14 extends viemReadWriteMixin(
  BaseReadWriteStEthHyperdrive_v1_0_14,
) {}
