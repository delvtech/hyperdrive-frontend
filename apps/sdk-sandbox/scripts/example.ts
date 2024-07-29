import { IHyperdrive } from "@delvtech/hyperdrive-artifacts/IHyperdrive";
import { MockFixedPointMath } from "@delvtech/hyperdrive-artifacts/MockFixedPointMath";
import {
  createCachedReadContract,
  createLruSimpleCache,
  EventFilter,
  ReadHyperdrive,
} from "@delvtech/hyperdrive-viem";
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

const foo = createCachedReadContract({
  publicClient,
  abi: MockFixedPointMath.abi,
  address: "0x6b175474e89094c44da98b954eedeac495271d0f",
  cache: createLruSimpleCache({ maxSize: 100 }),
});

const boo = foo.read("mulDown", {
  a: 170141183460469231731687303715884105727n,
  b: 1094205545459194143n,
});

const baz: EventFilter<typeof IHyperdrive.abi, "ApprovalForAll">;

const info = await hyperdrive.getPoolInfo();
const rate = await hyperdrive.getFixedApr();

console.log(`Current pool info for ${hyperdrive.address}:\n`, info);
console.log(`Current Fixed Rate: ${formatEther(rate)}`);
