import { CachedReadWriteContract } from "@delvtech/evm-client";
import { Override } from "src/base/types";
import {
  ReadWriteHyperdrive,
  ReadWriteHyperdriveOptions,
} from "src/hyperdrive/ReadWriteHyperdrive";
import { HyperdriveAbi } from "src/hyperdrive/abi";
import {
  ReadStEthHyperdriveOptions,
  readStEthHyperdriveMixin,
} from "src/hyperdrive/steth/ReadStEthHyperdrive";
import { ReadWriteEth } from "src/token/eth/ReadWriteEth";
import { ReadWriteStEth } from "src/token/steth/ReadWriteStEth";

export interface ReadWriteStEthHyperdriveOptions
  extends Override<ReadWriteHyperdriveOptions, ReadStEthHyperdriveOptions> {}

export class ReadWriteStEthHyperdrive extends readStEthHyperdriveMixin(
  ReadWriteHyperdrive,
) {
  declare stEthHyperdriveContract: CachedReadWriteContract<HyperdriveAbi>;

  async getSharesToken(): Promise<ReadWriteStEth> {
    const { vaultSharesToken } = await this.getPoolConfig();
    return new ReadWriteStEth({
      address: vaultSharesToken,
      contractFactory: this.contractFactory,
      namespace: this.contract.namespace,
      network: this.network,
    });
  }

  async getBaseToken(): Promise<ReadWriteEth> {
    return new ReadWriteEth({
      contractFactory: this.contractFactory,
      network: this.network,
    });
  }
}
