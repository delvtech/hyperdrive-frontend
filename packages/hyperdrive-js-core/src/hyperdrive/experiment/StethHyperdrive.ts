import { Hyperdrive } from "src/hyperdrive/experiment/Hyperdrive";

export class StethHyperdrive extends Hyperdrive {
  constructor(options) {
    super(options);
  }

  // Steth class that's returned inherits from Token, so the types are
  // compatible with the base Hyperdrive
  async getSharesToken(options?: ContractReadOptions): Promise<StethToken> {
    const { vaultSharesToken } = await this.getPoolConfig(options);

    return new StethToken({
      address: vaultSharesToken,
      readContractFactory: this.readContractFactory,
      writeContractFactory: this.writeContractFactory,
      namespace: this.namespace,
      network: this.network,
    });
  }

  async getMaxShort() {
    /*
     * get max short should call the super.getMaxShort and then perform a few
     * transformations
     */
  }
}
