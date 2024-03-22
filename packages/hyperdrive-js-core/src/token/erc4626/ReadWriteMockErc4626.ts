import {
  CachedReadWriteContract,
  ContractWriteOptions,
} from "@delvtech/evm-client";
import { MockErc4626Abi } from "src/token/erc4626/abi";
import { writeErc20Mixin } from "src/token/erc20/ReadWriteErc20";
import { ReadMockErc4626 } from "./ReadMockErc4626";
import { ReadWriteContractModelOptions } from "src/model/ReadWriteModel";

export interface ReadWriteMockErc4626Options
  extends ReadWriteContractModelOptions {}

export class ReadWriteMockErc4626 extends writeErc20Mixin(ReadMockErc4626) {
  declare mockErc4626Contract: CachedReadWriteContract<MockErc4626Abi>;

  constructor(options: ReadWriteMockErc4626Options) {
    super(options);
  }

  /**
   * Mint shares.
   */
  mint({
    receiver,
    sharesAmount,
    options,
  }: {
    receiver: `0x${string}`;
    sharesAmount: bigint;
    options?: ContractWriteOptions;
  }): Promise<`0x${string}`> {
    return this.mockErc4626Contract.write(
      "mint",
      {
        _receiver: receiver,
        _shares: sharesAmount,
      },
      options,
    );
  }

  /**
   * Set the vault's rate.
   */
  setRate({
    rate,
    options,
  }: {
    rate: bigint;
    options?: ContractWriteOptions;
  }): Promise<`0x${string}`> {
    return this.mockErc4626Contract.write("setRate", { _rate_: rate }, options);
  }
}
