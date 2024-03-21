import { ReadContractModelOptions } from "src/model/ReadModel";
import { CachedReadContract, ContractReadOptions } from "@delvtech/evm-client";
import { ReadErc20 } from "src/token/erc20/ReadErc20";
import { erc4626Abi, Erc4626Abi } from "src/token/erc4626/abi";

export interface ReadErc4626Options extends ReadContractModelOptions {}

export class ReadErc4626 extends ReadErc20 {
  erc4626Contract: CachedReadContract<Erc4626Abi>;

  constructor({
    name = "ERC-4626 Tokenized Vault",
    address,
    contractFactory,
    network,
    cache,
    namespace,
  }: ReadErc4626Options) {
    super({
      address,
      contractFactory,
      network,
      cache,
      name,
      namespace,
    });
    this.erc4626Contract = contractFactory({
      abi: erc4626Abi,
      address,
      cache,
      namespace,
    });
  }

  /**
   * Get the total supply of assets in the vault.
   */
  async getTotalAssets({
    options,
  }: {
    options?: ContractReadOptions;
  }): Promise<bigint> {
    return await this.erc4626Contract.read("totalAssets", {}, options);
  }

  /**
   * Convert a a shares amount to an assets amount.
   */
  convertToAssets({
    sharesAmount,
    options,
  }: {
    sharesAmount: bigint;
    options?: ContractReadOptions;
  }): Promise<bigint> {
    return this.erc4626Contract.read(
      "convertToAssets",
      { shares: sharesAmount },
      options,
    );
  }

  /**
   * Convert an assets amount to a shares amount.
   */
  convertToShares({
    assetsAmount,
    options,
  }: {
    assetsAmount: bigint;
    options?: ContractReadOptions;
  }): Promise<bigint> {
    return this.erc4626Contract.read(
      "convertToShares",
      { assets: assetsAmount },
      options,
    );
  }
}
