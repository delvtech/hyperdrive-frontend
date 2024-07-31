import { ContractReadOptions } from "@delvtech/evm-client";
import { Erc4626 } from "src/hyperdrive/experiment/Erc4626";
import { Hyperdrive } from "src/hyperdrive/experiment/Hyperdrive";

export class Erc4626Hyperdrive extends Hyperdrive {
  constructor([options]: ConstructorParameters<typeof Hyperdrive>) {
    super(options);
  }

  async getSharesToken(options?: ContractReadOptions): Promise<Erc4626> {
    const { vaultSharesToken } = await this.getPoolConfig(options);

    return new Erc4626({
      address: vaultSharesToken,
      readContractFactory: this.readContractFactory,
      writeContractFactory: this.writeContractFactory,
      namespace: this.namespace,
      network: this.network,
    });
  }
}
