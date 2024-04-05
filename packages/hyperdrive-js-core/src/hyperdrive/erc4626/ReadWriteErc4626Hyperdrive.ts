import {
  CachedReadWriteContract,
  ContractReadOptions,
} from "@delvtech/evm-client";
import { Erc4626HyperdriveAbi } from "src/hyperdrive/erc4626/abi";
import { readErc4626HyperdriveMixin } from "src/hyperdrive/erc4626/ReadErc4626Hyperdrive";
import { ReadWriteHyperdrive } from "src/hyperdrive/ReadWriteHyperdrive";
import { ReadWriteErc4626 } from "src/token/erc4626/ReadWriteErc4626";

export class ReadWriteErc4626Hyperdrive extends readErc4626HyperdriveMixin(
  ReadWriteHyperdrive,
) {
  declare erc4626HyperdriveContract: CachedReadWriteContract<Erc4626HyperdriveAbi>;

  async getSharesToken(
    options?: ContractReadOptions,
  ): Promise<ReadWriteErc4626> {
    const { vaultSharesToken } = await this.getPoolConfig(options);

    return new ReadWriteErc4626({
      address: vaultSharesToken,
      contractFactory: this.contractFactory,
      namespace: this.contract.namespace,
      network: this.network,
    });
  }
}
