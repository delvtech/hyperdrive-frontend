import { CachedReadWriteContract } from "@delvtech/evm-client";
import { ReadWriteErc20 } from "src/token/erc20/ReadWriteErc20";
import { erc4626Mixin } from "src/token/erc4626/ReadErc4626";
import { Erc4626Abi } from "src/token/erc4626/abi";

export class ReadWriteErc4626 extends erc4626Mixin(ReadWriteErc20) {
  declare erc4626Contract: CachedReadWriteContract<Erc4626Abi>;
}
