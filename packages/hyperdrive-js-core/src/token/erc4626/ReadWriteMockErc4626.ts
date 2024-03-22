import {
  CachedReadWriteContract,
  ContractWriteOptions,
} from "@delvtech/evm-client";
import { MockErc4626Abi } from "src/token/erc4626/abi";
import { ReadWriteContractModelOptions } from "src/model/ReadWriteModel";
import { ReadWriteErc4626 } from "src/token/erc4626/ReadWriteErc4626";

export interface ReadWriteMockErc4626Options
  extends ReadWriteContractModelOptions {}

export class ReadWriteMockErc4626 extends ReadWriteErc4626 {
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
