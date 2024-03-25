import {
  CachedReadWriteContract,
  ContractReadOptions,
} from "@delvtech/evm-client";
import { Overwrite } from "src/base/types";
import {
  ReadWriteHyperdrive,
  ReadWriteHyperdriveOptions,
} from "src/hyperdrive/ReadWriteHyperdrive";
import {
  ReadStEthHyperdriveOptions,
  readStEthHyperdriveMixin,
} from "src/hyperdrive/steth/ReadStEthHyperdrive";
import { StEthHyperdriveAbi } from "src/hyperdrive/steth/abi";
import { ReadWriteEth } from "src/token/eth/ReadWriteEth";
import { ReadWriteStEth } from "src/token/steth/ReadWriteStEth";

export interface ReadWriteStEthHyperdriveOptions
  extends Overwrite<ReadStEthHyperdriveOptions, ReadWriteHyperdriveOptions> {}

export class ReadWriteStEthHyperdrive extends readStEthHyperdriveMixin(
  ReadWriteHyperdrive,
) {
  declare stEthHyperdriveContract: CachedReadWriteContract<StEthHyperdriveAbi>;

  async getSharesToken(options?: ContractReadOptions): Promise<ReadWriteStEth> {
    const address = await this.stEthHyperdriveContract.read(
      "lido",
      {},
      options,
    );
    return new ReadWriteStEth({
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
