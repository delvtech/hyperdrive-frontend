import {
  CachedReadWriteContract,
  ContractReadOptions,
} from "@delvtech/evm-client";
import { ReadWriteHyperdrive } from "src/hyperdrive/ReadWriteHyperdrive";
import { readLsEthHyperdriveMixin } from "src/hyperdrive/lseth/ReadLsEthHyperdrive";
import { LsEthHyperdriveAbi } from "src/hyperdrive/lseth/abi";
import { ReadWriteEth } from "src/token/eth/ReadWriteEth";
import { ReadWriteLsEth } from "src/token/lseth/ReadWriteLsEth";

export class ReadWriteLsEthHyperdrive extends readLsEthHyperdriveMixin(
  ReadWriteHyperdrive,
) {
  declare lsEthHyperdriveContract: CachedReadWriteContract<LsEthHyperdriveAbi>;

  async getSharesToken(options?: ContractReadOptions): Promise<ReadWriteLsEth> {
    const address = await this.lsEthHyperdriveContract.read(
      "lsEth",
      {},
      options,
    );
    return new ReadWriteLsEth({
      address,
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
