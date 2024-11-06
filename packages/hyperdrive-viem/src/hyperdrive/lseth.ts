import {
  ReadLsEthHyperdrive as BaseReadLsEthHyperdrive,
  ReadWriteLsEthHyperdrive as BaseReadWriteLsEthHyperdrive,
} from "@delvtech/hyperdrive-js-core";
import { viemReadMixin } from "src/viem/viemReadMixin";
import { viemReadWriteMixin } from "src/viem/viemReadWriteMixin";

export class ReadLsEthHyperdrive extends viemReadMixin(
  BaseReadLsEthHyperdrive,
) {}

export class ReadWriteLsEthHyperdrive extends viemReadWriteMixin(
  BaseReadWriteLsEthHyperdrive,
) {}
