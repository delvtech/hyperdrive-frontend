import {
  CachedReadWriteContract,
  ContractReadOptions,
} from "@delvtech/evm-client";
import { ReadWriteHyperdrive } from "src/hyperdrive/ReadWriteHyperdrive";
import { readEzEthHyperdriveMixin } from "src/hyperdrive/ezeth/ReadEzEthHyperdrive";
import { EzEthHyperdriveAbi } from "src/hyperdrive/ezeth/abi";
import { ReadWriteErc20 } from "src/token/erc20/ReadWriteErc20";
import { ReadWriteEth } from "src/token/eth/ReadWriteEth";

export class ReadWriteEzEthHyperdrive extends readEzEthHyperdriveMixin(
  ReadWriteHyperdrive,
) {
  declare ezEthHyperdriveContract: CachedReadWriteContract<EzEthHyperdriveAbi>;

  async getSharesToken(options?: ContractReadOptions): Promise<ReadWriteErc20> {
    const address = await this.ezEthHyperdriveContract.read(
      "vaultSharesToken",
      {},
      options,
    );
    return new ReadWriteErc20({
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
