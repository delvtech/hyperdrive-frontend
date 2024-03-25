import {
  CachedReadWriteContract,
  ContractWriteOptions,
} from "@delvtech/evm-client";
import { MockErc4626Abi } from "src/token/erc4626/abi";
import { mockErc4626Mixin } from "src/token/erc4626/ReadMockErc4626";
import { ReadWriteErc4626 } from "src/token/erc4626/ReadWriteErc4626";

export class ReadWriteMockErc4626 extends mockErc4626Mixin(ReadWriteErc4626) {
  declare mockErc4626Contract: CachedReadWriteContract<MockErc4626Abi>;

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
