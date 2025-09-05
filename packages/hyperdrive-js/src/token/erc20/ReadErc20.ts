import { Contract, ReadOptions } from "@delvtech/drift";
import { Address } from "abitype";
import { ReadContractClientOptions } from "src/drift/ContractClient";
import { ReadClient } from "src/drift/ReadClient";
import { erc20Abi, Erc20Abi } from "src/token/erc20/abi";
import { ReadToken } from "src/token/ReadToken";

export interface ReadErc20Options extends ReadContractClientOptions {}

export class ReadErc20 extends ReadClient implements ReadToken {
  contract: Contract<Erc20Abi>;

  constructor({
    debugName = "ERC-20 Token",
    address,
    epochBlock,
    ...rest
  }: ReadErc20Options) {
    super({ debugName, ...rest });
    this.contract = this.drift.contract({
      abi: erc20Abi,
      address,
      epochBlock,
    });
  }

  get address(): Address {
    return this.contract.address;
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
    options?: ReadOptions;
  }): Promise<bigint> {
    return this.contract.read("allowance", { owner, spender }, options);
  }

  getBalanceOf({
    account,
    options,
  }: {
    account: `0x${string}`;
    options?: ReadOptions;
  }): Promise<bigint> {
    return this.contract.read("balanceOf", { account }, options);
  }

  /**
   * Get the total supply of the token.
   */
  getTotalSupply(options?: ReadOptions): Promise<bigint> {
    return this.contract.read("totalSupply", {}, options);
  }
}
