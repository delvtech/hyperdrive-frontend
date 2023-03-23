import { SparkGoerliAddresses } from "@hyperdrive/spark";
import daiLogo from "src/assets/DAI.svg";
import wstethLogo from "src/assets/wsteth.svg";
import { Address } from "wagmi";

export const AssetIcons: Record<number, Record<Address, string>> = {
  5: {
    [SparkGoerliAddresses.DAI_token]: daiLogo,
    [SparkGoerliAddresses.wstETH_token]: wstethLogo,
  },
};
