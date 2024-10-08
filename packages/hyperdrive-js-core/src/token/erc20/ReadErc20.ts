import { CachedReadContract, ContractReadOptions } from "@delvtech/evm-client";
import { ReadContractModelOptions, ReadModel } from "src/model/ReadModel";
import { erc20Abi, Erc20Abi } from "src/token/erc20/abi";
import { ReadToken } from "src/token/ReadToken";

export interface ReadErc20Options extends ReadContractModelOptions {}

export class ReadErc20 extends ReadModel implements ReadToken {
  contract: CachedReadContract<Erc20Abi>;

  constructor({
    debugName = "ERC-20 Token",
    address,
    cache,
    namespace,
    ...modelOptions
  }: ReadErc20Options) {
    super({ debugName, ...modelOptions });
    this.contract = this.contractFactory({
      abi: erc20Abi,
      address,
      cache,
      namespace,
    });
  }

  get address(): `0x${string}` {
    return this.contract.address;
  }
  get namespace(): string | undefined {
    return this.contract.namespace;
  }

  getName(): Promise<string> {
    return this.contract.read("name");
  }

  getSymbol(): Promise<string> {
    return this.contract.read("symbol");
  }

  getDecimals(): Promise<number> {
    return this.contract.read("decimals");
  }

  getAllowance({
    owner,
    spender,
    options,
  }: {
    owner: `0x${string}`;
    spender: `0x${string}`;
    options?: ContractReadOptions;
  }): Promise<bigint> {
    return this.contract.read("allowance", { owner, spender }, options);
  }

  getBalanceOf({
    account,
    options,
  }: {
    account: `0x${string}`;
    options?: ContractReadOptions;
  }): Promise<bigint> {
    return this.contract.read("balanceOf", { account }, options);
  }

  /**
   * Get the total supply of the token.
   */
  getTotalSupply(options?: ContractReadOptions): Promise<bigint> {
    return this.contract.read("totalSupply", {}, options);
  }
}
