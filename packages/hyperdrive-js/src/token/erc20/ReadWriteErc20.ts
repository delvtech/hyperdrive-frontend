import { ReadWriteAdapter } from "@delvtech/drift";
import { SdkWriteParams } from "src/drift/SdkClient";
import { ReadWriteToken } from "src/token/ReadWriteToken";
import { ReadErc20 } from "src/token/erc20/ReadErc20";

export class ReadWriteErc20<A extends ReadWriteAdapter = ReadWriteAdapter>
  extends ReadErc20<A>
  implements ReadWriteToken<A>
{
  async approve({
    spender,
    amount,
    options,
  }: SdkWriteParams<{
    owner?: `0x${string}`;
    spender: `0x${string}`;
    amount: bigint;
  }>): Promise<`0x${string}`> {
    const hash = await this.contract.write(
      "approve",
      { spender, amount },
      {
        ...options,
        onMined: (receipt) => {
          this.contract.invalidateReadsMatching("allowance");
          options?.onMined?.(receipt);
        },
      },
    );
    return hash;
  }
}
