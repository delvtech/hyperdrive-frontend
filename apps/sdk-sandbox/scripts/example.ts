import { ReadHyperdrive } from "@delvtech/hyperdrive-viem";
import {
  findYieldSourceHyperdrives,
  sepoliaAppConfig,
} from "@hyperdrive/appconfig";
import { formatEther } from "viem";
import { publicClient } from "../client";

const makerDeployments = findYieldSourceHyperdrives({
  appConfig: sepoliaAppConfig,
  yieldSourceId: "maker",
});

const hyperdrive = new ReadHyperdrive({
  address: makerDeployments[0].address,
  publicClient,
});

const info = await hyperdrive.getPoolInfo();
const rate = await hyperdrive.getFixedApr();

console.log(`Current pool info for ${hyperdrive.address}:\n`, info);
console.log(`Current Fixed Rate: ${formatEther(rate)}`);
