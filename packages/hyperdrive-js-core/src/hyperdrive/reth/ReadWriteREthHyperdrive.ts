import {
  CachedReadWriteContract,
  ContractReadOptions,
} from "@delvtech/evm-client";
import { ReadWriteHyperdrive } from "src/hyperdrive/ReadWriteHyperdrive";
import { readREthHyperdriveMixin } from "src/hyperdrive/reth/ReadREthHyperdrive";
import { REthHyperdriveAbi } from "src/hyperdrive/reth/abi";
import { ReadWriteEth } from "src/token/eth/ReadWriteEth";
import { ReadWriteREth } from "src/token/reth/ReadWriteREth";

export class ReadWriteREthHyperdrive extends readREthHyperdriveMixin(
  ReadWriteHyperdrive,
) {
  declare rEthHyperdriveContract: CachedReadWriteContract<REthHyperdriveAbi>;

  async getSharesToken(options?: ContractReadOptions): Promise<ReadWriteREth> {
    const address = await this.rEthHyperdriveContract.read(
      "vaultSharesToken",
      {},
      options,
    );
    return new ReadWriteREth({
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
