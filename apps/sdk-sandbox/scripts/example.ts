import { ReadHyperdrive } from "@delvtech/hyperdrive-viem";
import {
  calcOpenShort,
  initSync,
  maxShort,
  wasmBuffer,
} from "@delvtech/hyperdrive-wasm";

initSync(wasmBuffer);

import {
  findYieldSourceHyperdrives,
  mainnetAppConfig,
} from "@hyperdrive/appconfig";
import { formatEther, formatUnits } from "viem";
import { publicClient } from "../client";

const makerDeployments = findYieldSourceHyperdrives({
  appConfig: mainnetAppConfig,
  yieldSourceId: "maker",
});

const hyperdrive = new ReadHyperdrive({
  address: makerDeployments[0].address,
  publicClient,
});

// const rate = await hyperdrive.getFixedApr();

// const bondAmountForShorting = await hyperwasm.console.log(
//   `Current pool info for ${hyperdrive.address}:\n`,
//   info,
// );
// console.log(`Current Fixed Rate: ${formatEther(rate)}`);

const poolInfo = await hyperdrive.getPoolInfo();
const poolConfig = await hyperdrive.getPoolConfig();
const { vaultSharePrice } = await hyperdrive.getCheckpoint();
const checkpointExposure = await hyperdrive.getCheckpointExposure();

const budget = BigInt(157e18);

// user types in amount of base to calc the amount of bonds to short
const expectedBonds = maxShort({
  budget: budget,
  checkpointExposure,
  openVaultSharePrice: vaultSharePrice,
  poolConfig,
  poolInfo,
});

// Feed the bond amount from maxShort into calcOpenShort to see if the trader
// deposit returned matches the original input to maxShort
const traderDeposit = calcOpenShort({
  bondAmount: expectedBonds,
  openVaultSharePrice: vaultSharePrice,
  poolConfig,
  poolInfo,
});

console.log("budget:                            ", formatEther(budget));
console.log(
  "expected bonds given budget:       ",
  formatUnits(expectedBonds, 18),
);
console.log(
  "traderDeposit given expected bonds:",
  formatUnits(traderDeposit, 18),
);
