import { CachedReadWriteContract } from "@delvtech/evm-client";
import { ReadWriteContractModelOptions } from "src/model/ReadWriteModel";
import { writeErc20Mixin } from "src/token/erc20/ReadWriteErc20";
import { ReadErc4626 } from "src/token/erc4626/ReadErc4626";
import { Erc4626Abi } from "src/token/erc4626/abi";

export interface ReadWriteErc4626Options
  extends ReadWriteContractModelOptions {}

export class ReadWriteErc4626 extends writeErc20Mixin(ReadErc4626) {
  declare erc4626Contract: CachedReadWriteContract<Erc4626Abi>;

  constructor(options: ReadWriteErc4626Options) {
    super(options);
  }
}
