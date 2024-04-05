import { ContractReadOptions } from "@delvtech/evm-client";
import { ReadWriteHyperdrive } from "src/hyperdrive/ReadWriteHyperdrive";
import { readLsEthHyperdriveMixin } from "src/hyperdrive/lseth/ReadLsEthHyperdrive";
import { ReadWriteEth } from "src/token/eth/ReadWriteEth";
import { ReadWriteLsEth } from "src/token/lseth/ReadWriteLsEth";

export class ReadWriteLsEthHyperdrive extends readLsEthHyperdriveMixin(
  ReadWriteHyperdrive,
) {
  async getSharesToken(options?: ContractReadOptions): Promise<ReadWriteLsEth> {
    const { vaultSharesToken } = await this.getPoolConfig(options);
    return new ReadWriteLsEth({
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
