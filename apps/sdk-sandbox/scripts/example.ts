import { ReadHyperdrive } from "@delvtech/hyperdrive-viem";
import {
  findYieldSourceHyperdrives,
  mainnetAppConfig,
} from "@hyperdrive/appconfig";
import { formatEther } from "viem";
import { publicClient } from "../client";

const makerDeployments = findYieldSourceHyperdrives({
  appConfig: mainnetAppConfig,
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
