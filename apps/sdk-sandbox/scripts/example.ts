import { ReadHyperdrive } from "@delvtech/hyperdrive-viem";
import { formatEther } from "viem";
import { publicClient } from "../client";

const hyperdrive = new ReadHyperdrive({
  address: "0xA975225D750dFC948171710739F1b3BBAd5d7451",
  publicClient,
});

const info = await hyperdrive.getPoolInfo();
const rate = await hyperdrive.getFixedApr();

console.log(`Current pool info for ${hyperdrive.address}:\n`, info);
console.log(`Current Fixed Rate: ${formatEther(rate)}`);
