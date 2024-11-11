import { ContractWriteOptions, ReadWriteContract } from "@delvtech/drift";
import { MockErc4626Abi } from "src/token/erc4626/abi";
import { readMockErc4626Mixin } from "src/token/erc4626/ReadMockErc4626";
import { ReadWriteErc4626 } from "src/token/erc4626/ReadWriteErc4626";

export class ReadWriteMockErc4626 extends readMockErc4626Mixin(
  ReadWriteErc4626,
) {
  declare mockErc4626Contract: ReadWriteContract<MockErc4626Abi>;

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
